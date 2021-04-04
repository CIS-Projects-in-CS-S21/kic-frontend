/**
 * @fileoverview MentalHealthLog page - allows users track their mental health through logging and journaling.
 */

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Button, TouchableOpacity, SafeAreaView} from 'react-native';
import KIC_Style from "../Components/Style";
import {useNavigation} from "@react-navigation/native";
import Likert from 'react-likert-scale';
import DateTimePicker from "@react-native-community/datetimepicker";

/**
 * @class Contains function for rendering MentalHealthLog screen.
 */
export default function MentalHealthLog({ navigation }) {
  /**
   * Renders MentalHealth screen components.
   * @returns {Component}
   */
  const [date, setDate] = useState(new Date());
  const likertOptions = {
        question: "What is your opinion of the President’s performance?",
        responses: [
            { value: 1, text: "Abysmal" },
            { value: 2, text: "Poor" },
            { value: 3, text: "Average", checked: true },
            { value: 4, text: "Good" },
            { value: 5, text: "Excellent" }
        ],
        onChange: val => {
            console.log(val);
        }
  };
  return (
    <SafeAreaView style={KIC_Style.container}>
      <Image
        style={{width: 180, height: 180, resizeMode: 'contain', alignSelf: 'center'}}
        source = {require('../assets/kic.png')}
      />
      <Text style = {KIC_Style.title}> Mental Health Tracker</Text>
      <Text> Indicate Date and Time of Entry </Text>
      {/*<DateTimePicker*/}
      {/*   date={date}*/}
      {/*   onDateChange={setDate}*/}
      {/*/>*/}
      <Text>
          Rate your mental health on a scale from -5 (extremely depressed) to 5 (extremely anxious). 0 is neither anxious nor depressed.
      </Text>
      <Likert {...likertOptions} />
      <Text>  Write a journal entry expanding on your mood. How are you feeling? Why do you think you're feeling this way? </Text>
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
                navigation.navigate('FindHelp')}>
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

