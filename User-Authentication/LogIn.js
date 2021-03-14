/**
 * @fileoverview Login page - allows users to login to their account.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

/**
 * @class Contains function for rendering Login screen.
 */
class LogIn extends React.Component {
  /**
   * Renders LogIn screen components.
   * @returns {Component}
   */
  render() {
      return (
        <View style={styles.container}>
          <Image
            style={{width: 180, height: 180, resizeMode: 'contain'}}
            source = {require('../assets/kic.png')}
          />
          <Text>Keeping It Casual Log In Page!</Text>
          <Button
            title = "Sign Up!"
            onPress = {() =>
                this.props.navigation.navigate('SignUp')
            }
          />

          <Button
            title = "Log In! Now, Let's view your user feed!"
            onPress = {() =>
                this.props.navigation.navigate('TabNavigation')
            }
          />

          <Button
            title = "Go to post"
            onPress = {() =>
                this.props.navigation.navigate('DetailedPostView')
            }
          />
          <StatusBar style="auto" />
        </View>
      );
  }
}

/**
 * @constant styles creates stylesheet for Login screen components
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

export default LogIn;
