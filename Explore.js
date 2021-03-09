/**
 * @fileoverview Explore page - allows users to discover friends and search for users.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


/**
 * @class Contains function for rendering Explore screen.
 */
class Explore extends React.Component {
  render() {
  /**
   * Renders Explore screen components.
   * @returns {Component}
   */
      return (
        <View style={styles.container}>
          <Image
            style={{width: 180, height: 180, resizeMode: 'contain'}}
            source = {require('./assets/kic.png')}
          />
          <Text>Keeping It Casual User Feed!</Text>
          <StatusBar style="auto" />
            <Button
                title = "Back to User Feed!"
                onPress = {() =>
                    this.props.navigation.navigate('UserFeed')
                }
            />
        </View>
      );
  }
}

/**
 * @constant styles creates stylesheet for Explore screen components
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Explore;
