/**
* @fileoverview The feed header is a reusable component that shows the apps name and logo. 
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

/**
* @class Contains function for rendering the feed header.
*/
class FeedHeader extends React.Component {
    /**
    * Renders personal page components.
    * @returns {FeedHeader}
    */
    render() {
      return (
        <View style={styles.feedHeaderContainer}>
            <Image 
                style={styles.icon}
                source={require('../assets/kic.png')}
            />
            <Text style={styles.headerText}>Keeping It Casual</Text>
        </View>
      );
    }
}

/**
* @constant styles creates stylesheet for the feed header
*/
const styles = StyleSheet.create({
    feedHeaderContainer: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#b3d2db',
        paddingVertical: 10,
        alignItems: 'center',
        alignContent: 'center',
        top: 0
    },
    icon: {
        width: 75,
        height: 75,
        padding: 20,
    },
    headerText: {
        color: '#ffff',
        fontFamily: 'sans-serif',
        fontSize: 30,
        fontWeight: "bold",
        paddingBottom: 5
    },
});

export default FeedHeader;