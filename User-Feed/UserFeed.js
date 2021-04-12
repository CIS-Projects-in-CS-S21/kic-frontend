/**
 * @fileoverview The screen for the user's feed, containing links to the
 * Explore Page and Personal Page.
 */

import React from 'react';
import { Platform, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeedHeader from '../Components/FeedHeader';
import FeedPost from '../Components/FeedPost';
import KIC_Style from '../Components/Style';


/**
 * @class Contains function for rendering the user feed.
 */
class UserFeed extends React.Component {
  /*
   * Class constructor
   */
  constructor(props) {
    super();

    // Define the initial state:
    this.state = {

    };
  }

  /**
   * Renders user feed components.
   * @returns {Component}
   */

  render() {
    return (
      <SafeAreaView style={KIC_Style.outContainer}>
        <FeedHeader navigation={this.props.navigation} />
        <SafeAreaView style={styles.container}>
          <ScrollView>
            {/*Header containing logo and name*/}
            {/*Posts, eventually will need to become a stream injected into individual FeedPosts*/}
            <FeedPost
              style={styles.feedPost} />
            <FeedPost
              style={styles.feedPost} />
            <FeedPost
              style={styles.feedPost} />
            <StatusBar style="auto" />
          </ScrollView>
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

/**
 * @constant styles creates stylesheet for the user feed
 */
const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        top:30,
        marginBottom:30,
      },
      android: {
        top:30,
        marginBottom:30,
      },
      default: {
        top:60,
        marginBottom: 60,
      }
    }),
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flex: 1,
  },
  feedPost: {
    marginTop: 30
  }
});

export default UserFeed;
