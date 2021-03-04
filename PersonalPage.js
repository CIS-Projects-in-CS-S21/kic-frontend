/**
 * @fileoverview The screen for the user's personal page, containing links
 * to the Mental Health Log page and User Feed.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Button} from "react-native-web";

/**
 * @class Contains function for rendering the personal page.
 */
class PersonalPage extends React.Component {
  /**
   * Renders personal page components.
   * @returns {Component}
   */
  render() {
      return (
        <View style={styles.container}>
          <Image
            style={{width: 180, height: 180, resizeMode: 'contain'}}
            source = {require('./assets/kic.png')}
          />
          <Text>Keeping It Casual Personal Page!</Text>
          <Button
            title = "Mental Health Tracker!"
            onPress = {() =>
                this.props.navigation.navigate('MentalHealthLog')
            }
          />
          <Button
            title = "User Feed!"
            onPress = {() =>
                this.props.navigation.navigate('UserFeed')
            }
          />
          <StatusBar style="auto" />
        </View>
      );
  }
}

/**
 * @constant styles creates stylesheet for personal page components
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});

export default PersonalPage;
