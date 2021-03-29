/**
 * @fileoverview The screen for the user's feed, containing links to the
 * Explore Page and Personal Page.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import FeedHeader from '../Components/FeedHeader';
import FeedPost from '../Components/FeedPost';
import KIC_Style from "../Components/Style";


/**
 * @class Contains function for rendering the user feed.
 */
class UserFeed extends React.Component {
  /**
   * Renders user feed components.
   * @returns {Component}
   */
  render() {
      return (
        <View style={styles.container}>
          <FeedHeader/>
          <FeedPost 
            style={styles.feedPost} />
          <FeedPost 
            style={styles.feedPost}/>
          <FeedPost 
            style={styles.feedPost}/>
          <StatusBar style="auto" />
        </View>
      );
  }
}

/**
 * @constant styles creates stylesheet for the user feed
 */
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 0,
    overflow: 'scroll',
    flexWrap: 'nowrap',
    backgroundColor: '#fff',
  },
  feedPost: {
    marginTop: 30
}
});

export default UserFeed;
