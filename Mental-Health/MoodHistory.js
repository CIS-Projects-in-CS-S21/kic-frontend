/**
 * @fileoverview MoodHistory page - allows users to view history of their mood entries (journal + mood #)
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import KIC_Style from "../Components/Style";

/**
 * @class Contains function for rendering Mood History Tracker screen.
 */
class MoodHistory extends React.Component {
    /**
     * Renders MentalHealth mood history screen components.
     * @returns {Component}
     */
    render() {
        return (
            <View style={KIC_Style.container}>
                <Image
                    style={{width: 180, height: 180, resizeMode: 'contain'}}
                    source = {require('../assets/kic.png')}
                />
                <Text>Keeping It Casual Mood History Page!</Text>
                <Button
                    title = "Return to Mental Health Log!"
                    onPress = {() =>
                        this.props.navigation.navigate('MentalHealthLog')
                    }
                />
                <StatusBar style="auto" />
            </View>
        );
    }
}

/**
 * @constant styles creates stylesheet for Mental Health screen components
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MoodHistory;
