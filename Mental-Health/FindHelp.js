/**
 * @fileoverview Find Help page - allows users to find nearby mental health professionals
 */

import { StatusBar } from 'expo-status-bar';
import FeedHeader from '../Components/FeedHeader';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import KIC_Style from '../Components/Style';
import Ionicons from "react-native-vector-icons/Ionicons";

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
      finishedLoading: false,
    };

    this.handleSearch = this.handleSearch(this)

  }
  setSearchString = (text) => {
    this.setState({ searchString: text })
  }

  handleSearch() {
    console.log("Searching for " + this.state.searchString + "...");
  }
  render() {
    return (
      <SafeAreaView style={KIC_Style.outContainer}>
        <FeedHeader navigation={this.props.navigation} />
        <SafeAreaView style={KIC_Style.innerContainer}>
            <View style={{flexDirection: 'row', marginTop: 35, justifyContent: 'center' }}>
              <TextInput
                  style={KIC_Style.searchInput}
                  textAlign = {'center'}
                  onChange={(e) => this.setSearchString(e.nativeEvent.text)}
                  placeholder="Search using a zipcode . . ."
              />
              <TouchableOpacity
                  style={{ backgroundColor: '#b3d2db', borderRadius: 10, height: 30, justifyContent: 'center' }}
                  onPress = {this.handleSearch}>
                <Ionicons name="search-circle-outline" color='#ffff' size={25} />
              </TouchableOpacity>
            </View>
            <Image
              style={{ width: "100%", height: "80%", alignItems: "center", resizeMode: 'contain' }}
              source={require('../assets/googlemap_sample.png')}
            />
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
});

export default FindHelp;
