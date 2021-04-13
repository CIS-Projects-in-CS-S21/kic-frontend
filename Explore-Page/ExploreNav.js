/**
 * @fileoverview Generates navigation for personal page, which is the screen for the user's personal page, containing links
 * to the Mental Health Log page and User Feed.
 */

import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import PersonalPage from "../Personal-Page/PersonalPage";
import FriendsPage from "../Personal-Page/FriendsPage";
import UserPage from "../Personal-Page/UserPage";
import UserFeed from "../User-Feed/UserFeed";
import DetailedPostView from "../Components/DetailedPostView";
import DetailedPostViewWeb from "../Components/DetailedPostViewWeb";
import Explore from "./Explore";

const Stack = createStackNavigator();

/**
 * @class Contains function for rendering the personal page navigation.
 */
class ExploreNav extends React.Component {
    /**
     * Renders personal page navigation components.
     * @returns {Component}
     */
    render() {
        return (
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen
                        name="Explore"
                        component={Explore}
                    />
                    <Stack.Screen
                        name="UserPage"
                        component={UserPage}
                    />
                    <Stack.Screen
                        name="FriendsPage"
                        component={FriendsPage}
                    />
                    <Stack.Screen
                        name="DetailedPostView"
                        component={DetailedPostView}
                    />
                    <Stack.Screen
                        name="DetailedPostViewWeb"
                        component={DetailedPostViewWeb}
                    />
                </Stack.Navigator>
        );
    }
}

/**
 * @constant styles creates stylesheet for personal page components
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
});

export default ExploreNav;
