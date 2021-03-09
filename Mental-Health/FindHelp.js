/**
 * @fileoverview Find Help page - allows users to find nearby mental health professionals
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

/**
 * @class Contains function for rendering FindHelp screen.
 */
class FindHelp extends React.Component {
  /**
   * Renders FindHelp screen components.
   * @returns {Component}
   */
  render() {
      return (
        <View style={styles.container}>
          <Image
            style={{width: 180, height: 180, resizeMode: 'contain'}}
            source = {require('../assets/kic.png')}
          />
          <Text>Keeping It Casual Find Help Page!</Text>
          <Button
            title = "Return to Mental Health Log!"
            onPress = {() =>
                this.props.navigation.navigate('MentalHealthLog')
            }
          />
          <StatusBar style="auto" />
        </View>
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
