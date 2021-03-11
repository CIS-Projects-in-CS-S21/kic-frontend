/**
 * @fileoverview The screen for the Detailed View of a post.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Modal, Button, Pressable, TouchableOpacity } from 'react-native';
import KIC_Style from "../Components/Style";
import PostDetails from "./PostDetails";

/**
 * @class Contains function for rendering the personal page.
 */
class Post extends React.Component {

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
      yearPosted: 1998,
      monthPosted: 3,
      dayPosted: 16,
      hourPosted: 2,
      minutePosted: 15,
    };
  }

  /**
   * Renders the Post components.
   * @returns a {Post}
   */
  render() {
      return (
        <View style={styles.container}>
            <View style={styles.postContainer}>
                <Image
                    style={styles.postImage}
                    source = {require('../assets/default/default_icon_2.png')}
                    />

                {/* Pass parent's (Post) state data to the child (PostDetails) */}
                <PostDetails
                    userFirstName = {this.state.userFirstName}
                    userLastName = {this.state.userLastName}
                    userHandle = {this.state.userHandle}
                    yearPosted = {this.state.yearPosted}
                    monthPosted = {this.state.monthPosted}
                    dayPosted = {this.state.dayPosted}
                    hourPosted = {this.state.hourPosted}
                    minutePosted = {this.state.minutePosted}
                />

                  <StatusBar style="auto" />
            </View>
        </View>
      );
  }
}

/**
 * @constant styles creates stylesheet for an individual Post's components.
 */
const styles = StyleSheet.create({
  container: {
    alignItems:'center',
  },
  postContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '60%',
    backgroundColor: '#b3d2db',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    marginTop: 10,
    paddingRight: 15,
  },
  postImage: {
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    width: 500,
    height: 500,
  }
});

export default Post;