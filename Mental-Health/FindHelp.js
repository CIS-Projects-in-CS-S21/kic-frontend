/**
 * @fileoverview Find Help page - allows users to find nearby mental health professionals
 */

import { StatusBar } from 'expo-status-bar';
import FeedHeader from '../Components/FeedHeader';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import KIC_Style from '../Components/Style';

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
      <SafeAreaView style={KIC_Style.outContainer}>
        <FeedHeader navigation={this.props.navigation} />
        <SafeAreaView style={KIC_Style.innerContainer}>
          <Image
            style={{ width: 180, height: 180, resizeMode: 'contain' }}
            source={require('../assets/kic.png')}
          />
          <Text>Keeping It Casual Find Help Page!</Text>
          <Button
            title="Return to Mental Health Log!"
            onPress={() =>
              this.props.navigation.navigate('MentalHealthLog')
            }
          />
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
