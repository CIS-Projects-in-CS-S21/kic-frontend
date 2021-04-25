/**
 * @fileoverview Generates navigation for posting, which involves screens to choose from camera roll, create a caption, and share
 */

import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Post from "./Post";
import PostInfo from "./PostInfo";

const Stack = createStackNavigator();

/**
 * @class Contains functions for rendering the post navigation.
 */
class PostNav extends React.Component {
    /**
     * Renders the post navigation
     * @returns {PostNav}
     */
    render() {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="Post"
                    component={Post}
                />
                <Stack.Screen
                    name="PostInfo"
                    component={PostInfo}
                />
            </Stack.Navigator>
        );
    }
}

/**
 * @constant styles creates stylesheet for post nav components
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

export default PostNav;
