/**
 * @fileoverview MentalHealthLog page - allows users track their mental health through logging and journaling.
 */

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Button, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import KIC_Style from "../Components/Style";
import {useNavigation} from "@react-navigation/native";
import {DateTimePickerModal} from "react-native-paper-datetimepicker";


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

    const date = new Date();
  return (
    <SafeAreaView style={KIC_Style.container}>
      <Image
        style={{width: 180, height: 180, resizeMode: 'contain', alignSelf: 'center'}}
        source = {require('../assets/kic.png')}
      />
      <Text style = {KIC_Style.title}> Mental Health Tracker</Text>

      <Text>
          Rate your mental health on a scale from -5 (extremely depressed) to 5 (extremely anxious). 0 is neither anxious nor depressed.
      </Text>
      <Text>  Write a journal entry expanding on your mood. How are you feeling? Why do you think you're feeling this way? </Text>
      <TextInput
            style={KIC_Style.journalInput}
            value={entry}
            onChange={e => setEntry(e.nativeEvent.text)}
            placeholder= "Entry (max. 250 characters)" />
      <DateTimePickerModal
            visible={visible}
            onDismiss={onDismiss}
            date={date}
            onConfirm={onChange}
            label="Pick A Date"
      />
      <TextInput value={date.toLocaleString()} />
      <TouchableOpacity
            style={KIC_Style.button}
            onPress ={() =>
                setVisible(true)
            }>
        <Text style={KIC_Style.button_font}> Indicate Date and Time of Entry </Text>
      </TouchableOpacity>
      <TouchableOpacity
            style={KIC_Style.button}
            onPress ={() =>
                alert("Entry stored!")
            }>
            <Text style={KIC_Style.button_font}> Locate A Professional </Text>
      </TouchableOpacity>
      <TouchableOpacity
            style={KIC_Style.button}
            onPress = {() =>
                navigation.navigate('MoodHistory')}>
            <Text style={KIC_Style.button_font}> View Your Mood History </Text>
      </TouchableOpacity>
      <TouchableOpacity
            style={KIC_Style.button}
            onPress = {() =>
                navigation.navigate('Profile')}>
            <Text style={KIC_Style.button_font}> Back to Personal Page </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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

