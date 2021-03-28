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
 * @class Contains function for rendering the personal page navigation.
 */
class PostNav extends React.Component {
    /**
     * Renders personal page navigation components.
     * @returns {Component}
     */
    render() {
        return (
            <Stack.Navigator>
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
 * @constant styles creates stylesheet for post page components
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
