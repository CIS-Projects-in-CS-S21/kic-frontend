/**
 * @fileoverview The screen for the user's personal page, containing links
 * to the Mental Health Log page and User Feed.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';
import KIC_Style from "../Components/Style";
import ProfileHeader from "../Components/ProfileHeader";
import PostsGrid from "../Components/PostsGrid";
import TokenManager from '../User-Authentication/TokenManager';

/**
 * @class Contains function for rendering the personal page.
 */
class PersonalPage extends React.Component {
  /*
   * Class constructor
   */
  constructor(props) {
    super();

    // Define the initial state:
    this.state = {
      userFirstName: "First",
      userLastName: "Last",
      userHandle: "username",
      userBio: "This is an example biography. This is an example biography. This is an example biography. This is an example biography. This is an example biography. ",
      numPosts: 6,
      numFriends: 0,
    };
  }

  /**
   * Gets user's posts. Returns an array of the user's posts.
   */
  fetchPosts = () => {
      // Request posts for user
  }

  /**
   * Gets user information (name, handle, bio, post & friend count)
   */
  fetchInformation = () => {
      // Request user information and save to state
  }

  /**
   * Gets a post's corresponding image to display in the grid.
   */
  fetchPostImage = () => {
      // Request the image from backend
  }

  /**
   * Log a greeting only if session is authenticated.
   */
  sayHi = () => {
    let tokenManager = new TokenManager();
    if (tokenManager.isAuthenticated()){
        console.log("Hi!");
    }
    else{
        console.log("I can't say hi without a token!");
    }
  }

  /**
   * Renders personal page components.
   * @returns {PersonalPage}
   */
  render() {
      return (
        <View style={styles.container}><ScrollView>

            {/* Display profile header with state information */}
            <ProfileHeader
                userFirstName = {this.state.userFirstName}
                userLastName = {this.state.userLastName}
                userBio = {this.state.userBio}
                userHandle = {this.state.userHandle}
                userPosts = {this.state.userPosts}
                numPosts = {this.state.numPosts}
                numFriends = {this.state.numFriends}
                />


            {/* Show posts */}
            <PostsGrid />

            {/* Test checking authentication from personal page */}
            {this.sayHi()}

            {/* NAVIGATION */}
              <Button
                title = "Mental Health Tracker!"
                onPress = {() =>
                    this.props.navigation.navigate('MentalHealthLog')
                }
              />
              <Button
                title = "User Feed!"
                onPress = {() =>
                    this.props.navigation.navigate('Feed')
                }
              />
              <StatusBar style="auto" />
        </ScrollView></View>
      );
  }
}

/**
 * @constant styles creates stylesheet for personal page components
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flex: 1,
  },
});

export default PersonalPage;
