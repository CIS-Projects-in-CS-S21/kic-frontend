/**
 * @fileoverview The screen for the user's personal page, containing links
 * to the Mental Health Log page and User Feed.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Modal, Button, Pressable, TouchableOpacity } from 'react-native';
import KIC_Style from "../Components/Style";
import ProfileHeader from "../Components/ProfileHeader";
import PostsGrid from "../Components/PostsGrid";

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
      userBio: "This is an example biography. This is an example biography. This is an example biography. This is an example biography. This is an example biography. This is an example biography. This is an example biography. This is an example biography. ",
    };
  }

  /**
   * Gets user's posts. Returns an array of the user's posts.
   */
  fetchPosts = () => {
      {/** Request posts for user */}
  }

  /**
   * Gets a post's corresponding image to display in the grid.
   */
  fetchPostImage = () => {
      this.setState({
          /** Get image of clicked post */
      })
  }

  /**
   * Gets post's description.
   */
  fetchPostDescription = () => {
      this.setState({
          /** Get description of clicked post */
      })
  }

  /**
   * Gets post's metadata.
   */
  fetchPostMetadata = () => {
      this.setState({
          /** Get metadata of clicked post */
      })
  }

  /**
   * Renders personal page components.
   * @returns {PersonalPage}
   */
  render() {
      return (
        <View style={styles.container}>
            {/* Pass parent's (PersonalPage) state data to the child (ProfileHeader) */}
            <ProfileHeader
                userFirstName = {this.state.userFirstName}
                userLastName = {this.state.userLastName}
                userBio = {this.state.userBio}
                userHandle = {this.state.userHandle}
                userPosts = {this.state.userPosts}
                />

            <PostsGrid />

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
                    this.props.navigation.navigate('UserFeed')
                }
              />
              <StatusBar style="auto" />
        </View>
      );
  }
}

/**
 * @constant styles creates stylesheet for personal page components
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 20,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'flex-start',
  },
  detailedViewPopUp: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  detailedViewImage: {
    width: 500,
    height: 500,
    marginLeft: 20,
    marginRight: 20,
  },
  postDetails: {
    flexDirection: 'column',
  },
  detailedViewIcon: {
    width: 20,
    height: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginRight: 5,
    marginLeft: 5,
  },
  detailedViewDisplayName: {
    fontSize: 15,
  },
  detailedViewUsername: {
    fontSize: 15,
    fontWeight: "bold",
  },
  detailedViewText: {
    fontSize: 14,
  },
  closeDetailedViewButton: {
    height: 5,
    width: 5,
  }
});

export default PersonalPage;
