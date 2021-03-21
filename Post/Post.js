/**
* @fileoverview The screen for user posting, where user can choose to post video or picture with caption
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import KIC_Style from "../Components/Style";




/**
 * @class Contains function for rendering the Post page
 */
class Post extends React.Component {
    /**
     * Renders post page components.
     * @returns {Component}
     */
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{width: 180, height: 180, resizeMode: 'contain'}}
                    source = {require('../assets/kic.png')}
                />
                <Text>Keeping It Casual Post Page!</Text>
                <StatusBar style="auto" />
                {/* NAVIGATION */}
                <Button
                    title = "Next"
                    onPress = {() =>
                        this.props.navigation.navigate('PostInfo')
                    }
                />
            </View>
        );
    }
}

/**
 * @constant styles creates stylesheet for post components
 */
const styles = KIC_Style;

export default Post;
