/**
 * @fileoverview The screen for the user's feed, containing links to the
 * Explore Page and Personal Page.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

/**
 * @class Contains function for rendering the user feed.
 */
class UserFeed extends React.Component {
  /**
   * Renders user feed components.
   * @returns {Component}
   */
  render() {
      return (
        <View style={styles.container}>
          <Image
            style={{width: 180, height: 180, resizeMode: 'contain'}}
            source = {require('../assets/kic.png')}
          />
          <Text>Keeping It Casual User Feed!</Text>
          <StatusBar style="auto" />
        </View>
      );
  }
}

/**
 * @constant styles creates stylesheet for the user feed
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserFeed;
