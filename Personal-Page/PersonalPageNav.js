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
                <Stack.Navigator>
                    <Stack.Screen
                        name="PersonalPage"
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
