/**
 * @fileoverview The screen for user posting info, where user can choose to add captions + triggers to post + actually share their post
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import KIC_Style from "../Components/Style";




/**
 * @class Contains function for rendering the Post Info page
 */
class PostInfo extends React.Component {
    /**
     * Renders post page components.
     * @returns {Component}
     */
    render() {
        return (
            <View style={KIC_Style.container}>
                <Image
                    style={{width: 180, height: 180, resizeMode: 'contain'}}
                    source = {require('../assets/kic.png')}
                />
                <Text>Keeping It Casual Post Info Page!</Text>
                <StatusBar style="auto" />
            </View>
        );
    }
}

/**
 * @constant styles creates stylesheet for post components
 */
const styles = KIC_Style;

export default PostInfo;
