/**
 * @fileoverview Explore page - allows users to discover friends and search for users.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import FeedHeader from '../Components/FeedHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import KIC_Style from '../Components/Style';


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
      <SafeAreaView style={KIC_Style.outContainer}>
        <FeedHeader navigation={this.props.navigation} />
        <SafeAreaView style={KIC_Style.innerContainer}>
          <Image
            style={{ width: 180, height: 180, resizeMode: 'contain' }}
            source={require('../assets/kic.png')}
          />
          <Text>Keeping It Casual Explore Page!</Text>
          <StatusBar style="auto" />
          <Button
            title="Back to User Feed!"
            onPress={() =>
              this.props.navigation.navigate('Feed')
            }
          />
        </SafeAreaView>
      </SafeAreaView>
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
