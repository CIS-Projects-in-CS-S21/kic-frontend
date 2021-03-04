/**
 * @fileoverview The screen for the signup page, containing a link
 * back to the log in page.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Button} from "react-native-web";

/**
 * @class Contains function for rendering the signup page
 */
class SignUp extends React.Component {
  /**
   * Renders signup page components.
   * @returns {Component}
   */
  render() {
      return (
        <View style={styles.container}>
          <Image
            style={{width: 180, height: 180, resizeMode: 'contain'}}
            source = {require('./assets/kic.png')}
          />
          <Text>Keeping It Casual Sign Up Page!</Text>
          <StatusBar style="auto" />
            <Button
                title = "Back to Log In!"
                onPress = {() =>
                    this.props.navigation.navigate('LogIn')
                }
            />
        </View>
      );
  }
}

/**
 * @constant styles creates stylesheet for the signup page
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUp;
