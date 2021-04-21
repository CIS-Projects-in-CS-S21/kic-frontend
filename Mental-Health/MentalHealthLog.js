/**
 * @fileoverview MentalHealthLog page - allows users track their mental health through logging and journaling.
 */

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeedHeader from '../Components/FeedHeader';
import KIC_Style from "../Components/Style";
import { useNavigation } from "@react-navigation/native";
import { DateTimePickerModal } from "react-native-paper-datetimepicker";
import NumberSlider from 'react-native-number-slider'
import { Date as CommonDate } from "../gen/proto/common_pb";
import 'intl';
import 'intl/locale-data/jsonp/en';
import ClientManager from "../Managers/ClientManager";
import UserManager from "../Managers/UserManager";
import {AddHealthDataForUserRequest, MentalHealthLog as HealthLog} from "../gen/proto/health_pb";



/**
 * @class Contains function for rendering MentalHealthLog screen.
 */
export default function MentalHealthLog({ navigation }) {
    /**
     * Renders MentalHealth screen components.
     * @returns {Component}
     */
    const [entry, setEntry] = useState("");
    const [visible, setVisible] = React.useState(false);
    const onDismiss = React.useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    const onChange = React.useCallback(({ date }) => {
        setVisible(false);
        console.log({ date });
    }, []);

    const [value, setValue] = useState(1)
    const onValueChange = (value) => {
        setValue(value)
    }

    const [date, setDate] = useState(new Date());
    const onDateChange = (date) => {
        setDate(date)
    }


    {/* Create UsersClientManager & create a UsersClient */}
    let cm = new ClientManager();
    let client = cm.createHealthClient();

    //to store mental health entry, start chain of functions
    const storeHealthEntry = async () => {
        return callGetAuthString();
    }

    //first, do this to get authorization string
    const callGetAuthString = async () => {
        let um = new UserManager();
        console.log("Obtained authorization string");
        return um.getAuthString().then(authString  => {getUserID(authString, um)});
    }

    //then, get user ID
    const getUserID = async(authString, um) => {
        um.getMyUserID().then(userID  => makeAddEntryRequest(userID, authString));
    }

    //then, make request to add entry based on entered data
    const makeAddEntryRequest = async (userID, authString) => {
        let req = new AddHealthDataForUserRequest();
        console.log("Auth: " + authString);

        //the request requires the user ID and the mental health log entry

        req.setUserid(userID);

        //set health log entry with score, logdata aka journal name
        let logEntry = new HealthLog();
        logEntry.setScore(value); //from NumberSlider
        logEntry.setJournalname(entry); //from journal entry text input box
        logEntry.setUserid(userID);

        // Fetch the date the user would like for this entry from the DateTimePickerModal and set as logDate
        let logDate = new CommonDate();
        logDate.setDay(String(date.getDate()).padStart(2, '0'));
        logDate.setMonth(String(date.getMonth() + 1).padStart(2, '0'));
        logDate.setYear(String(date.getFullYear()).padStart(2, '0'));


        logEntry.setLogdate(logDate);
        //set new entry with log entry

        console.log("log date" + logDate);

        req.setNewentry(logEntry);

        console.log(req.getNewentry());
        return client.addHealthDataForUser(req,{'Authorization': authString}).then(
            res => {
                console.log("SUCCESS" + res.getSuccess());
                console.log(res);
                alert("Entry stored!")
            })
            .catch(error =>{
                console.log("There is an error :(");
                console.log(error);
            });
    }


    return (
        <SafeAreaView style={KIC_Style.outContainer}>
            <FeedHeader navigation={navigation} />
            <SafeAreaView style={[KIC_Style.innerContainer, {marginTop:30}]}>
               <ScrollView style = {{justifyContent: 'center', alignSelf: 'center'}}>
                <Image
                    style={{ width: 180, height: 180, resizeMode: 'contain', alignSelf: 'center' }}
                    source={require('../assets/kic.png')}
                />
                <Text style={KIC_Style.title}> Mental Health Tracker</Text>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Text>
                        Rate your mental health on a scale from -5 (extremely poor) to 5 (extremely good).
      </Text>
                </TouchableWithoutFeedback>
                <NumberSlider
                    onValueChange={onValueChange}
                    value={value}
                    width={300}
                    displayValues={[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]}
                    fontSize={15}
                    containerBackground='#b3d2db'
                    selectedBackground='#7ab7dd'
                />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Text>  Write a journal entry expanding on your mood.
                    How are you feeling?
          Why do you think you're feeling this way? </Text>
                </TouchableWithoutFeedback>
                <TextInput
                    multiline={true}
                    style={KIC_Style.journalInput}
                    value={entry}
                    onChange={e => setEntry(e.nativeEvent.text)}
                    placeholder="Entry (max. 250 characters)" />
                <DateTimePickerModal
                    visible={visible}
                    onDismiss={onDismiss}
                    date={date}
                    onConfirm={onChange}
                    onChange = {onDateChange}
                    label="Pick A Date"
                />
                <TouchableOpacity
                    style={KIC_Style.button}
                    onPress={() =>
                        setVisible(true)
                    }>
                    <Text style={KIC_Style.button_font}> Indicate Date and Time of Entry </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={KIC_Style.button}
                    onPress={() =>
                        storeHealthEntry()
                    }>
                    <Text style={KIC_Style.button_font}> Store Entry </Text>
                </TouchableOpacity>
                <TouchableOpacity
                       style={KIC_Style.button}
                       onPress={() =>
                           navigation.navigate('FindHelp')
                       }>
                       <Text style={KIC_Style.button_font}> Locate A Professional </Text>
                   </TouchableOpacity>
                <TouchableOpacity
                    style={KIC_Style.button}

                    onPress={() =>
                        navigation.navigate('MoodHistory')}>
                    <Text style={KIC_Style.button_font}> View Your Mood History </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={KIC_Style.button}
                    onPress={() =>
                        navigation.navigate('Profile')}>
                    <Text style={KIC_Style.button_font}> Back to Personal Page </Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
                </ScrollView>
            </SafeAreaView>
        </SafeAreaView>
    );


}

/**
 * @constant styles creates stylesheet for Mental Health screen components
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

