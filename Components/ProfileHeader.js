/**
* @fileoverview The profile header is a reusable component used to display the user's icon,
* display name, handle, and bio.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Modal, Button, Pressable, TouchableOpacity } from 'react-native';
import {useRoute} from '@react-navigation/native';
import ProfilePicture from "./ProfilePicture";

/**
* @class Contains function for rendering the profile header.
*/
class ProfileHeader extends React.Component {

    /**
     * Class constructor
     * @param {String} myUserid The id of the current active user
     * @param {String} username The username of the current active user
     * @param {String} bio The bio of the user to be displayed
     * @param {String} userid The id of the user who owns the page that this blurb is being displayed on
     */
    constructor(props) {
        super();

        // Define the initial state:
        this.state = {
            myUserid: props.myUserid,
            userid: props.userid,
            username: props.username,
            bio: props.bio,
        };
    }

    /**
    * Runs when the props change and updates the component accordingly.
    * @params {props} prevProps The previous state's props
    */
    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.userid !== prevProps.userid) {
          this.setState({
              userid: this.props.userid,
              username: this.props.username,
              bio: this.props.bio,
              myUserid: this.props.myUserid,
          })
      }
    }

    /**
    * Handles redirecting the user to the friends page of a certain user
    */
    goToFriends = () => {
        //console.log("I am id " + this.props.myUserid + " and this page has user id " + this.props.userid + " and username is " + this.props.username);
        this.props.navigation.navigate('FriendsPage', {
          navigation: this.props.navigation,
          username: this.props.username,
          userid: this.props.userid,
          bio: this.props.bio,
          myUserid: this.props.myUserid,
        })
    }

    /**
    * Renders personal page components.
    * @returns {ProfileHeader}
    */
    render() {
      return (
        <View style={styles.profileHeaderContainer}>
              {/* User's icon */}
              <ProfilePicture
                  style = {styles.icon}
                  userid = {this.props.userid}
                  authString = {this.props.authString}
              />

              {/* Container for user's info */}
              <View style ={styles.userInfo}>

                  {/* User's display name and handle */}
                  <View style ={styles.userID}>
                      {/* Display name */}
                      <Text style ={styles.textUsername}>@{this.props.username}</Text>
                  </View>

                  <TouchableOpacity
                      style={styles.friendsButton}
                      onPress = {this.goToFriends}
                  >
                      <Text>View friends</Text>
                  </TouchableOpacity>

                  {/* User's bio */}
                  <Text style ={styles.textBio}>{this.props.bio}</Text>
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
        marginTop: 10,
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
    textUsername: {
        fontSize: 18,
        marginRight: 5,
        fontWeight: "bold",
    },
    textBio: {
        paddingTop: 10,
        fontSize: 15,
    },
    friendsButton: {
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 1,
        paddingRight: 1,
    },
    textFriends: {
        fontStyle: "italic",
        fontSize: 13,
    },
});

export default ProfileHeader;