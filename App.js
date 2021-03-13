/**
 * @fileoverview Main screen containing links to other screens on the app.
 */

import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from "./User-Authentication/LogIn";
import SignUp from "./User-Authentication/SignUp";
import PersonalPage from "./Personal-Page/PersonalPage";
import MentalHealthLog from "./Mental-Health/MentalHealthLog";
import FindHelp from "./Mental-Health/FindHelp";
import UserFeed from './User-Feed/UserFeed';
import KIC_Style from "./Components/Style";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Explore from "./Explore-Page/Explore";
import Post from "./Post/Post";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={UserFeed} />
            <Tab.Screen name="Profile" component={PersonalPage} />
            <Tab.Screen name="Post" component={Post} />
            <Tab.Screen name="Explore" component={Explore} />
        </Tab.Navigator>
    );
}

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
              <MyTabs />
          </NavigationContainer>
      );
  }
}

/**
 * @constant styles creates stylesheet for main screen components
 */
const styles = KIC_Style;

export default App;
