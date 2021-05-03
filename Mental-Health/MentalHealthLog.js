/**
 * @fileoverview MentalHealthLog screen allows users track their mental health through logging and journaling.
 */

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeedHeader from '../Components/FeedHeader';
import KIC_Style from "../Components/Style";
import { DatePickerModal } from 'react-native-paper-dates';
import NumberSlider from 'react-native-number-slider'
import { Date as CommonDate } from "../gen/proto/common_pb";
import 'intl';
import 'intl/locale-data/jsonp/en';
import ClientManager from "../Managers/ClientManager";
import UserManager from "../Managers/UserManager";
import {AddHealthDataForUserRequest, MentalHealthLog as HealthLog} from "../gen/proto/health_pb";



/**
 * @returns {MentalHealthLog}
 * @params navigation Takes in navigation prop that passes between screens
 */
export default function MentalHealthLog({ navigation }) {
    /**
     * @constant entry represents journal string of user log
     */
    const [entry, setEntry] = useState("");
    /**
     * @constant visible represents if button to store entry should be present or not
     */
    const [visible, setVisible] = React.useState(false);

    /**
     * @constant onDismiss represents setting visible to false when dismissed
     */
    const onDismiss = React.useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    /**
     * @constant onChange  represents setting visible to false when there is change
     * @callback date takes in particular date for calendar
     */
    const onChange = React.useCallback(({ date }) => {
        setVisible(false);
        setDate(date);
        console.log({ date });
    }, []);

    /**
     * @constant value  represents mood tracker value user sets for their entry
     */
    const [value, setValue] = useState(1)

    /**
     * @constant onValueChange sets value when called
     * @param {number} value takes in value of mental health mood tracker
     */
    const onValueChange = (value) => {
        setValue(value)
    }

    /**
     * @constant date  represents mood tracker value user sets for their entry
     */
    const [date, setDate] = useState(new Date());


    {/* Create UsersClientManager & create a UsersClient */}
    let cm = new ClientManager();
    let client = cm.createHealthClient();

    /**
     * @constant storeHealthEntry starts chain of functions to store health entry
     * @return callGetAuthString constant to obtain auth string
     * post condition: callGetAuthString
     */
    const storeHealthEntry = async () => {
        return callGetAuthString();
    }

    /**
     * @constant callGetAuthString get auth string
     * @return getUserID constant to obtain user ID
     * precondition: storeHealthEntry
     * postcondition: callGetAuthString
     */
    //first, do this to get authorization string
    const callGetAuthString = async () => {
        let um = new UserManager();
        console.log("Obtained authorization string");
        return um.getAuthString().then(authString  => {getUserID(authString, um)});
    }

    /**
     * @constant getUserID  obtains user feed
     * @param {String} authString takes in authorization string
     * @param {UserManager} um takes in user manager
     * @return makeAddEntryRequest to make request to add entry based on entered data
     * precondition: callGetAuthString
     * postcondition: makeAddEntryRequest
     */
    const getUserID = async(authString, um) => {
        um.getMyUserID().then(userID  => makeAddEntryRequest(userID, authString));
    }

    /**
     * @constant makeAddEntryRequest make request to add entry based on entered data
     * @param {String} userID user ID for this user
     * @param {String} authString authorization string
     * @return addHealthDataForUserResponse response for addHealthDataForUser request
     * precondition: getUserID()
     * postcondition: addHealthDataForUser
     * @exception error log if health data is not able to be added
     */
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
                alert("Sorry, there was an error. Please try again")
                console.log(error);
            });
    }


    return (
        <SafeAreaView style={KIC_Style.outContainer}>
            <FeedHeader navigation={navigation} />
            <KeyboardAvoidingView behavior="padding" style={[KIC_Style.innerContainer]}>
                <Text style={KIC_Style.title}> Mental Health Tracker</Text>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Text style={{textAlign: 'center', marginBottom: 10}}>
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
                    <Text style={{textAlign: 'center', marginTop: 10}}>  Write a journal entry expanding on your mood.
                    How are you feeling?
          Why do you think you're feeling this way? </Text>
                </TouchableWithoutFeedback>
                <TextInput
                    multiline={true}
                    style={KIC_Style.journalInput}
                    value={entry}
                    onChange={e => setEntry(e.nativeEvent.text)}
                    placeholder="Entry (max. 250 characters)" />
                <DatePickerModal
                    visible={visible}
                    onDismiss={onDismiss}
                    date={date}
                    onConfirm={onChange}
                    label="Pick A Date"
                    animationType="slide"
                    mode={"single"}
                    validRange={{
                          endDate: new Date(), // optional
                        }}/>
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
                <StatusBar style="auto" />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );


}

/**
 * @constant styles creates stylesheet for Mental Health Log screen components
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

