/**
 * @fileoverview Main screen containing links to other screens on the app.
 */

import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import PersonalPage from "./PersonalPage";
import MentalHealthLog from "./MentalHealthLog";
import FindHelp from "./FindHelp";
import UserFeed from './UserFeed';
import Explore from './Explore';

const Stack = createStackNavigator();

/**
 * @class Contains function for rendering main screen.
 */
class App extends React.Component {
  /**
   * Renders main screen components.
   * @returns {Component}
   */
  render() {
      return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name= "LogIn"
                    component={LogIn}
                />
                <Stack.Screen
                    name= "SignUp"
                    component={SignUp}
                />
                <Stack.Screen
                    name= "UserFeed"
                    component={UserFeed}
                />
                <Stack.Screen
                    name= "Explore"
                    component={Explore}
                />
                <Stack.Screen
                    name= "PersonalPage"
                    component={PersonalPage}
                />
                <Stack.Screen
                    name= "MentalHealthLog"
                    component={MentalHealthLog}
                />
                <Stack.Screen
                    name= "FindHelp"
                    component={FindHelp}
                />
            </Stack.Navigator>
        </NavigationContainer>
      );
  }
}

/**
 * @constant styles creates stylesheet for main screen components
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
