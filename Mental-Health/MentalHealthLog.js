/**
 * @fileoverview MentalHealthLog page - allows users track their mental health through logging and journaling.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

/**
 * @class Contains function for rendering MentalHealthLog screen.
 */
class MentalHealthLog extends React.Component {
  /**
   * Renders MentalHealth screen components.
   * @returns {Component}
   */
  render() {
      return (
        <View style={styles.container}>
          <Image
            style={{width: 180, height: 180, resizeMode: 'contain'}}
            source = {require('../assets/kic.png')}
          />
          <Text>Keeping It Casual Mental Health Page!</Text>
          <Button
            title = "Find Help!"
            onPress = {() =>
                this.props.navigation.navigate('FindHelp')
            }
          />

          <Button
            title = "Return to Personal Page!"
            onPress = {() =>
                this.props.navigation.navigate('Profile')
            }
          />
          <StatusBar style="auto" />
        </View>
      );
  }
}

/**
 * @constant styles creates stylesheet for MentalHealthLog screen components
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MentalHealthLog;
