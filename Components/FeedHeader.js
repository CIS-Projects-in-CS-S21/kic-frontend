/**
* @fileoverview The feed header is a reusable component that shows the apps name and logo. 
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

/**
* @class Contains function for rendering the profile header.
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
            <Text style={style.headerText}>Keeping It Casual</Text>
        </View>
      );
    }
}

/**
* @constant styles creates stylesheet for the profile header
*/
const styles = StyleSheet.create({
    feedHeaderContainer: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#b3d2db',
        paddingVertical: 10,
        top: 0,
    },
    icon: {
        width: 75,
        height: 75,
        left: '50%',
        right: '50%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
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