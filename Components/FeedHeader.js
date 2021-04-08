/**
* @fileoverview The feed header is a reusable component that shows the apps name and logo. 
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';

/**
* @class Contains function for rendering the feed header.
*/
class FeedHeader extends React.Component {
    /**
    * Renders personal page components.
    * @returns {FeedHeader}
    */
   constructor(props) {
       super(props)
   }
    render() {
      return (
        <View style={styles.feedHeaderContainer}>
            <Icon.Button 
                name="arrow-back-circle-outline" 
                size={30} 
                backgroundColor='#b3d2db'
                borderRadius={0}
                 />
            <Image 
                style={styles.logo}
                source={require('../assets/Logo_BlueBG.png')}
            />
            <Icon.Button 
                name="log-out-outline" 
                size={30} 
                backgroundColor='#b3d2db'
                borderRadius={0}
                />
        </View>

      );
    }
}

/**
* @constant styles creates stylesheet for the feed header
*/
const styles = StyleSheet.create({
    feedHeaderContainer: {
        flex: 1, 
        flexDirection: 'row',
        width: '100%',
        height: 60,
        justifyContent: 'space-between',
        backgroundColor: '#b3d2db',
        top: 0,
        position: 'fixed'
    },
    logo: {
        width: 50,
        height: 50,
        top:0,
        bottom:0
    },
    icon: {
        backgroundColor: '#b3d2db',
    }
});

export default FeedHeader;