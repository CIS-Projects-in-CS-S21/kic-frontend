/**
 * @fileoverview Generates navigation for user feed.
 */

import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import PersonalPage from "../Personal-Page/PersonalPage";
import FriendsPage from "../Personal-Page/FriendsPage";
import UserPage from "../Personal-Page/UserPage";
import UserFeed from "./UserFeed";
import DetailedPostView from "../Components/DetailedPostView";
import DetailedPostViewWeb from "../Components/DetailedPostViewWeb";

const Stack = createStackNavigator();

/**
 * @class Contains function for rendering the user feed navigation.
 */
class UserFeedNav extends React.Component {
    /**
     * Renders user feed navigation components.
     * @returns {UserFeedNav}
     */
    render() {
        return (
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen
                        name="UserFeed"
                        component={UserFeed}
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
                        name="FriendsPage"
                        component={FriendsPage}
                    />
                </Stack.Navigator>
        );
    }
}

/**
 * @constant styles creates stylesheet for user feed nav
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

export default UserFeedNav;
