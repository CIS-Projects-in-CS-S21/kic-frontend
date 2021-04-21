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
    * Renders FindHelp screen components.
    * @returns {Component}
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


    setSearchString = (text) => {
        this.setState({ searchString: text })
        let url = 'https://www.google.com/maps/search/mental+health+professionals+near+' + text + '/@39.979961,-75.2054723,13z/data=!3m1!4b1';
        this.setState({ urlWeb: url })
    }

    openURL(url) {
        Linking.openURL(url);
    }

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