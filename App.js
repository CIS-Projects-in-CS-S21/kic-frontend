/**
 * @fileoverview Main screen containing links to other screens on the app.
 */

import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import KIC_Style from "./Components/Style";
import {createStackNavigator} from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import LogIn from "./User-Authentication/LogIn";
import SignUp from "./User-Authentication/SignUp";
import UserFeed from './User-Feed/UserFeed';
import MentalHealthLog from './Mental-Health/MentalHealthLog';
import FindHelp from './Mental-Health/FindHelp';

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
                      name="LogIn"
                      component={LogIn}
                  />
                  <Stack.Screen
                      name="SignUp"
                      component={SignUp}
                  />
                  <Stack.Screen
                      name="MentalHealthLog"
                      component={MentalHealthLog}
                  />
                  <Stack.Screen
                      name="FindHelp"
                      component={FindHelp}
                  />
                  <Stack.Screen
                      name="TabNavigation"
                      component={TabNavigation}
                  />
              </Stack.Navigator>
          </NavigationContainer>
      );
  }
}

/**
 * @constant styles creates stylesheet for main screen components
 */
const styles = KIC_Style;

export default App;
