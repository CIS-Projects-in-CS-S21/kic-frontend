/**
 * @fileoverview A component that displays a user's name, username, and bio
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Modal, Button, Pressable, TouchableOpacity } from 'react-native';
import KIC_Style from "../Components/Style";
import PostDetails from "../Components/PostDetails";
import ProfileHeader from "../Components/ProfileHeader";

/**
 * @class Contains function for rendering the detailed post view.
 */
class UserBlurb extends React.Component {
  /**
   * Renders the UserBlurb components.
   * @returns a {UserBlurb}
   */
  render() {
      return (
        <View style={styles.container}>
              {/* User's icon */}
              <Image
                style={styles.icon}
                source = {require('../assets/default/default_icon_2.png')}
              />

              {/* User's blurb */}
              <View style ={styles.userInfo}>
                  {/* User's display name and handle */}
                  <View style ={styles.userID}>
                      {/* Display name */}
                      <Text style ={styles.textDisplayName}>{this.props.userFirstName} {this.props.userLastName}</Text>

                      {/* Handle */}
                      <Text style ={styles.textHandle}>@{this.props.userHandle}</Text>
                  </View>
                  {/* # of posts and friends */}
                  <Text style ={styles.textBio}>{this.props.userBio}</Text>
              </View>

          <StatusBar style="auto" />
        </View>
      );
  }
}

/**
 * @constant styles creates stylesheet for an individual UserBlurb's components.
 */
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#c3dee6',
        paddingVertical: 20,
        justifyContent: 'flex-start',
        paddingTop: 30,
        paddingBottom: 30,
        paddingRight: 10,
        paddingLeft: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
    },
    icon: {
        width: 70,
        height: 70,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35,
        marginRight: 15,
        marginLeft: 15,
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
        fontSize: 15,
        marginRight: 5,
    },
    textHandle: {
        fontSize: 15,
        fontWeight: "bold",
    },
    textBio: {
        fontSize: 12,
    }
});

export default UserBlurb;