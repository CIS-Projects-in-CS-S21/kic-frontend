/**
 * @fileoverview The screen for the user's feed, containing links to the
 * Explore Page and Personal Page.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import FeedHeader from '../Components/FeedHeader';
import FeedPost from '../Components/FeedPost';


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
          <ScrollView>
          <FeedHeader/>
          <FeedPost 
            style={styles.feedPost} />
          <FeedPost 
            style={styles.feedPost}/>
          <FeedPost 
            style={styles.feedPost}/>
          <StatusBar style="auto" />
          </ScrollView>
        </View>
      );
  }
}

/**
 * @constant styles creates stylesheet for the user feed
 */
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
  },
  feedPost: {
    marginTop: 30
}
});

export default UserFeed;
