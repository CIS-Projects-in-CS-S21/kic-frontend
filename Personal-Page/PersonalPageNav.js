/**
 * @fileoverview Generates navigation for personal page, which is the screen for the user's personal page, containing links
 * to the Mental Health Log page and User Feed.
 */

import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import MentalHealthLog from "../Mental-Health/MentalHealthLog";
import FindHelp from "../Mental-Health/FindHelp";
import PersonalPage from "./PersonalPage";
import FriendsPage from "./FriendsPage";
import UserPage from "./UserPage";
import DetailedPostView from "../Components/DetailedPostView";
import DetailedPostViewWeb from "../Components/DetailedPostViewWeb";
import MoodHistory from "../Mental-Health/MoodHistory";
import MapView from "../Mental-Health/MapView";

const Stack = createStackNavigator();

/**
 * @class Contains function for rendering the personal page navigation.
 */
class PersonalPageNav extends React.Component {
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
                        name="Profile"
                        component={PersonalPage}
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
                        name="FriendsPage"
                        component={FriendsPage}
                    />
                    <Stack.Screen
                        name="UserPage"
                        component={UserPage}
                    />
                    <Stack.Screen
                        name="DetailedPostView"
                        component={DetailedPostView}
                    />
                    <Stack.Screen
                        name="DetailedPostViewWeb"
                        component={DetailedPostViewWeb}
                    />
                    <Stack.Screen
                        name="MoodHistory"
                        component={MoodHistory}
                    />
                    <Stack.Screen
                        name="MapView"
                        component={MapView}
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

export default PersonalPageNav;
