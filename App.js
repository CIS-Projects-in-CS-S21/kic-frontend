/**
 * @fileoverview Main screen containing links to other screens on the app.
 */

import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import UserFeed from './User-Feed/UserFeed';
import KIC_Style from "./Components/Style";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Explore from "./Explore-Page/Explore";
import Post from "./Post/Post";
import PersonalPageNav from "./Personal-Page/PersonalPageNav";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={UserFeed} />
            <Tab.Screen name="Profile" component={PersonalPageNav} />
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
