/**
 * @fileoverview The screen for the Detailed View of a post, which is accessed when clicking on a post.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View, Image, Modal, Button, Pressable, TouchableOpacity } from 'react-native';
import KIC_Style from "../Components/Style";
import PostDetails from "./PostDetails";
import CommentSection from "./CommentSection";
import FeedHeader from "./FeedHeader";

/**
 * @class Contains function for rendering the detailed post view.
 */
class DetailedPostView extends React.Component {
  /*
   * Class constructor
   */
    constructor(props) {
        super();

        // Define the initial state:
        this.state = {
            userID: props.route.params.userid,
            username: props.route.params.username,
            yearPosted: 0,
            monthPosted: 0,
            dayPosted: 0,
        };
        this.setPosterInfo = this.setPosterInfo.bind(this)
    }

    componentDidMount() {
      this.setPosterInfo();
    }

    setPosterInfo() {
        console.log("Mobile");
        this.setState({
            // do smth
        })
    }

  /**
   * Renders the DetailedPostView components.
   * @returns a {DetailedPostView}
   */
  render() {
      return (
        <SafeAreaView style={{ alignItems: 'center', flex: 1, padding: 5 }}>
            <FeedHeader />
            <View style={styles.container}>
                <Image
                    style={styles.postImage}
                    source = {require('../assets/default/default_icon_2.png')}
                />

                {/* Pass parent's (DetailedPostView) state data to the child (PostDetails) */}
                <PostDetails
                    userID = {this.state.userID}
                    username = {this.state.username}
                    yearPosted = {this.state.yearPosted}
                    monthPosted = {this.state.monthPosted}
                    dayPosted = {this.state.dayPosted}
                />

                <View style={{ flex: 1, alignItems: 'stretch', }}>
                <CommentSection />
                </View>
                <StatusBar style="auto" />

            </View>
        </SafeAreaView>
      );
  }
}

/**
 * @constant styles creates stylesheet for an individual DetailedPostView's components.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    paddingRight: 15,
    height: 'auto',
  },
  postImage: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width - 70),
  }
});

export default DetailedPostView;