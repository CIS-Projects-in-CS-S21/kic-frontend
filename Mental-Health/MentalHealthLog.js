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
import 'intl';
import 'intl/locale-data/jsonp/en'; // or any other locale you need



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

    const date = new Date();
    return (
        <SafeAreaView style={KIC_Style.outContainer}>
            <FeedHeader navigation={navigation} />
            <SafeAreaView style={[KIC_Style.innerContainer, {marginTop:30}]}>
               <ScrollView>
                <Image
                    style={{ width: 180, height: 180, resizeMode: 'contain', alignSelf: 'center' }}
                    source={require('../assets/kic.png')}
                />
                <Text style={KIC_Style.title}> Mental Health Tracker</Text>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Text>
                        Rate your mental health on a scale from -5 (extremely depressed) to 5 (extremely anxious).
                        0 is neither anxious nor depressed.
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
                    label="Pick A Date"
                />
                {/* <TextInput value={date.toLocaleString()} /> */}
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
                        alert("Entry stored!")
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

