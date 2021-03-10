/**
* @fileoverview The profile header is a reusable component used to display the user's icon,
* display name, handle, and bio.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Modal, Button, Pressable, TouchableOpacity } from 'react-native';

/**
* @class Contains function for rendering the personal page.
*/
class ProfileHeader extends React.Component {
    /**
    * Renders personal page components.
    * @returns {ProfileHeader}
    */
    render() {
      return (
        <View style={styles.profileHeaderContainer}>

            {/* HEADER */}
            <View style ={styles.profileHeader}>

              {/* User's icon */}
              <Image
                style={styles.icon}
                source = {require('../assets/default/default_icon_2.png')}
              />

              {/* Container for user's info */}
              <View style ={styles.userInfo}>

                  {/* User's display name and handle */}
                  <View style ={styles.userID}>
                      {/* Display name */}
                      <Text style ={styles.textDisplayName}>{this.props.userFirstName} {this.props.userLastName}</Text>

                      {/* Handle */}
                      <Text style ={styles.textHandle}>@{this.props.userHandle}</Text>
                  </View>

                  {/* User's bio */}
                  <Text style ={styles.textBio}>{this.props.userBio}</Text>
              </View>
            </View>
        </View>
      );
    }
}

/**
* @constant styles creates stylesheet for the profile header
*/
const styles = StyleSheet.create({
    profileHeaderContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 20,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'flex-start',
    },
    profileHeader: {
        paddingTop: 30,
        paddingBottom: 30,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#b3d2db',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
    },
    icon: {
        width: 150,
        height: 150,
        borderTopRightRadius: 75,
        borderTopLeftRadius: 75,
        borderBottomRightRadius: 75,
        borderBottomLeftRadius: 75,
        marginRight: 20,
        marginLeft: 20,
    },
    userInfo: {
        flexDirection: 'column',
    },
    userID: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 10,
    },
    textDisplayName: {
        fontSize: 18,
        marginRight: 5,
    },
    textHandle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    textBio: {
        width: 745,
        fontSize: 15,
    },
});

export default ProfileHeader;