/**
 * @fileoverview Home page navigation- paths for when user first opens application
 */

 import React from 'react';
 import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePageWeb from './HomePageWeb';
import HomePage from './HomePage';
import HomePageMobile from './HomePageMobile';
 
 const Stack = createStackNavigator(); 

 class HomePageNav extends React.Component {
   /**
    * Renders Home screen navigation.
    * @returns {Component}
    */

    render() {
      return(
        <Stack.Navigator screenOptions={{
          headerShown: false }}>
            <Stack.Screen
                        name="HomePage"
                        component={HomePage}
                    />
               <Stack.Screen
                        name="HomePageWeb"
                        component={HomePageWeb}
                    />
                    <Stack.Screen
                        name="HomePageMobile"
                        component={HomePageMobile}
                    />
        </Stack.Navigator>
      )
  }
}

 
 export default HomePageNav;
 