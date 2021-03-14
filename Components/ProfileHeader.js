/**
* @fileoverview The profile header is a reusable component used to display the user's icon,
* display name, handle, and bio.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Modal, Button, Pressable, TouchableOpacity } from 'react-native';

/**
* @class Contains function for rendering the profile header.
*/
class ProfileHeader extends React.Component {
    /**
    * Renders personal page components.
    * @returns {ProfileHeader}
    */
    render() {
      return (
        <View style={styles.profileHeaderContainer}>
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

                  {/* # of posts and friends */}
                  <Text style ={styles.textStats}>{this.props.numPosts} posts, {this.props.numFriends} friends</Text>

                  {/* User's bio */}
                  <Text style ={styles.textBio}>{this.props.userBio}</Text>
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
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#b3d2db',
        paddingVertical: 20,
        justifyContent: 'flex-start',
        paddingTop: 30,
        paddingBottom: 30,
        paddingRight: 10,
        paddingLeft: 10,
        marginLeft: 10,
        marginRight: 10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
    },
    icon: {
        width: 100,
        height: 100,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        marginRight: 20,
        marginLeft: 20,
    },
    userInfo: {
        flexDirection: 'column',
        width: '80%',
        paddingRight: 10,
        flex: 1,
    },
    userID: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
        paddingTop: 10,
        fontSize: 15,
    },
    textStats: {
        fontSize: 13,
        fontStyle: 'italic',
    }
});

export default ProfileHeader;