/**
 * @fileoverview Home page - opens up when user first starts up website or app
 */

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePageWeb from './HomePageWeb';
import HomePageMobile from './HomePageMobile';
import { TextInput } from 'react-native-gesture-handler';
 
 const Stack = createStackNavigator(); 

 class HomePage extends React.Component {
    constructor(props) {
      super();
      }

   /**
    * Runs when the component is first rendered
    */
      componentDidMount() {
        if(Platform.OS === 'web') {
          this.props.navigation.navigate('HomePageWeb');
        } else {
          this.props.navigation.navigate('HomePageMobile');
        }
      }

   /**
    * Renders HomePage components.
    * @returns {Component}
    */
    render() {
      return(
        <Text></Text>
      )
  }
}
 
 /**
  * @constant styles creates stylesheet for HomePage screen components
  */
 const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
   container: {
     flex:1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'blue'
   },
 });
 
 export default HomePage;
 