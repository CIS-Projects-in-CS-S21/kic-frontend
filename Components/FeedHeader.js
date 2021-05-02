/**
* @fileoverview The feed header is a reusable component that shows the apps name and logo. 
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import TokenManager from "../Managers/TokenManager";
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

/**
* @class Contains function for rendering the feed header.
*/
class FeedHeader extends React.Component {
    
    /**
    * Logs user out of application by forgetting token
    */
    logOut() {
        let tokenManager = new TokenManager();
        tokenManager.forgetToken();
    }

    /**
    * Handles redirecting user to the appropriate homepage for their current platform
    */
    homeNavigation() {
        if(Platform.OS === 'web') {
            this.props.navigation.navigate('HomePageWeb');
          } else {
            this.props.navigation.navigate('HomePageMobile');
          }
    }

    /**
    * Handles logout button press
    */
    logOutPress() {
        this.logOut();
        this.homeNavigation();
    }

    /**
    * Redirects user to previous screen
    */
    backNavigation() {
        this.props.navigation.goBack(); 
    }

    /**
    * Renders FeedHeader
    * @returns {FeedHeader}
    */
    render() {
      return (
        <SafeAreaView style={styles.feedHeaderContainer}>
            <Icon.Button 
                name="arrow-back-circle-outline" 
                size={20}
                backgroundColor='#b3d2db'
                borderRadius={0}
                onPress={()=>
                    this.backNavigation()}
                 />
            <Image 
                style={styles.logo}
                source={require('../assets/Logo_BlueBG.png')}
            />
            <Icon.Button 
                name="log-out-outline" 
                size={20}
                backgroundColor='#b3d2db'
                borderRadius={0}
                onPress={() => 
                    this.logOutPress() 
                }
                />
        </SafeAreaView>

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
        alignItems: 'center',
        backgroundColor: '#b3d2db',
        top: 0,
        position: 'absolute',
        zIndex: 100,
        marginBottom: 90,
    },
    logo: {
        width: 35,
        height: 35,
        top:0,
        bottom:10,
    },
    icon: {
        backgroundColor: '#b3d2db',
    }
});

export default FeedHeader;