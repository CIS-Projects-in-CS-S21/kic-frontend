/**
 * @fileoverview Find Help page - allows users to find nearby mental health professionals
 */

import { StatusBar } from 'expo-status-bar';
import FeedHeader from '../Components/FeedHeader';
import React from 'react';
import ReactDOM from 'react-dom';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Platform, Linking, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import KIC_Style from '../Components/Style';
import Ionicons from "react-native-vector-icons/Ionicons";
import MapView from "./MapView";

/**
 * @class Contains function for rendering FindHelp screen.
 */
class FindHelp extends React.Component {

    /**
     * Class constructor
     * @param {String} username The username of the current active user
     * @param {String} userid The userid of the current active user
     * @param {String} bio The bio of the user to be displayed
     * @param {String} userid The id of the user who owns the page that this blurb is being displayed on
     * @param {Number} birthDay day of birth of user
     * @param {Number} birthMonth month of birth of user
     * @param {Number} birthYear day of birth of user
     * @param {boolean} finishedLoading default set to false, means that loading is not yet finished
     * @param {String} searchString The string that the user searches
     * @param {String} urlWeb url of website is stored here as necessary, default set to empty string
     */
    constructor(props) {
        super();

        // Define the initial state:
        this.state = {
          searchString: '',
          urlWeb: '',
          finishedLoading: false,
        };
    }

    /**
    * Updates the searchString state variable
    * @params {String} text The new searchString
    */
    setSearchString = (text) => {
        this.setState({ searchString: text })
        let url = 'https://www.google.com/maps/search/mental+health+professionals+near+' + text + '/@39.979961,-75.2054723,13z/data=!3m1!4b1';
        this.setState({ urlWeb: url })
    }

    /**
    * Handles Linking a given url
    * @params {String} url The url to Link to
    */
    openURL(url) {
        Linking.openURL(url);
    }

    /**
    * Renders FindHelp screen components.
    * @returns {FindHelp}
    */
    render() {
        return (
          <SafeAreaView style={KIC_Style.outContainer}>
            <FeedHeader navigation={this.props.navigation} />
            <SafeAreaView style={KIC_Style.innerContainer}>
                <View style={{ flexDirection: 'column', marginTop: 35, justifyContent: 'center' }}>
                <Text style={styles.title}>Mental Health Professional Finder</Text>
                <Text> Looking for a nearby mental health professional? Input your city or zip code below.</Text>
                  <TextInput
                      style={KIC_Style.searchInput}
                      textAlign = {'center'}
                      onChange={(e) => this.setSearchString(e.nativeEvent.text)}
                      placeholder="Search using a zipcode or city . . ."
                  />
                  {(Platform.OS === "web") ? <TouchableOpacity
                                                   style={KIC_Style.button}
                                                   onPress = {() => this.openURL(this.state.urlWeb)}>
                                                    <Text style={KIC_Style.button_font}> Search </Text>
                                                </TouchableOpacity>
                                              : <TouchableOpacity
                                                  style={KIC_Style.button}
                                                  onPress = {() =>
                                                    this.props.navigation.navigate('MapView', { zipcode: this.state.searchString })}>
                                                  <Text style={KIC_Style.button_font}> Search </Text>
                                                </TouchableOpacity>}
                </View>
                <TouchableOpacity
                    style={KIC_Style.button}
                    onPress={() =>
                        this.props.navigation.navigate('MentalHealthLog')}>
                  <Text style={KIC_Style.button_font}> Return to Mental Health Log </Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </SafeAreaView>
          </SafeAreaView>
        );
    }
}

/**
 * @constant styles creates stylesheet for FindHelp screen components
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#b3d2db',
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 5,
        alignSelf: 'center',
        textAlign: 'center',
    },
});

export default FindHelp;