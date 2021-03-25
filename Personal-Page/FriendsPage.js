/**
 * @fileoverview The screen for the Detailed View of a post, which is accessed when clicking on a post.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Modal, Button, Pressable, TouchableOpacity } from 'react-native';
import KIC_Style from "../Components/Style";
import PostDetails from "../Components/PostDetails";
import ProfileHeader from "../Components/ProfileHeader";
import UserBlurb from "../Components/UserBlurb";
import FriendsList from "./FriendsList";

/**
 * @class Contains function for rendering the detailed post view.
 */
class FriendsPage extends React.Component {

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
      userBio: "Bio blah blah blah blah blah bs sdkjfkjf dsjldfs jlkfdskjldsf lfkjsd kjldfs sdf lkjfs dlkjfsdkjl fsdkljfsdkjldsfkjlsdkjldfskljfsdklj sfdla hjgdhkjf jkgkjgf gfkjlfdfg kjlgfdkjl fdfdjlkfdlkj fdl kfdfd ddfgfd blah blah",
    };
  }

  /**
   * Renders the DetailedPostView components.
   * @returns a {DetailedPostView}
   */
  render() {

      const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
      return (
        <View style={styles.container}>
            <View style={styles.myHeader}>
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
            </View>

            <FriendsList />

            <StatusBar style="auto" />
        </View>
      );
  }
}

/**
 * @constant styles creates stylesheet for an individual DetailedPostView's components.
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        height: 'auto',
        marginLeft: '10%',
        marginRight: '10%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingVertical: 20,
    },
    myHeader: {
        alignSelf:'center',
    },
});

export default FriendsPage;