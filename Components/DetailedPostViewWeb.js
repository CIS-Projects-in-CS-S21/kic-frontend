/**
 * @fileoverview The screen for the Detailed View of a post, which is accessed when clicking on a post.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Modal, Button, Pressable, TouchableOpacity } from 'react-native';
import KIC_Style from "../Components/Style";
import PostDetails from "./PostDetails";
import CommentSection from "./CommentSection";
import FeedHeader from '../Components/FeedHeader';

/**
 * @class Contains function for rendering the detailed post view.
 */
class DetailedPostViewWeb extends React.Component {
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
        console.log("Hi");
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
        <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 10, }}>
            <FeedHeader />
            <View style={styles.container}>
                <Image
                    style={styles.postImage}
                    source = {require('../assets/default/default_icon_2.png')}
                    />

                <View style={styles.detailsAndComments}>
                    {/* Pass parent's (DetailedPostView) state data to the child (PostDetails) */}
                    <PostDetails
                        userID = {this.state.userID}
                        username = {this.state.username}
                        yearPosted = {this.state.yearPosted}
                        monthPosted = {this.state.monthPosted}
                        dayPosted = {this.state.dayPosted}
                    />
                    <View style={{ flex: 1, height: 200 }}>
                        <CommentSection />
                    </View>
                    <StatusBar style="auto" />
                </View>
            </View>
        </View>
      );
  }
}

/**
 * @constant styles creates stylesheet for an individual DetailedPostView's components.
 */
const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    flex: 1,
    flexDirection:'row',
    width: '60%',
    backgroundColor: '#b3d2db',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    marginTop: 20,
    paddingRight: 15,
  },
  detailsAndComments: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
    padding: 10,
  },
  postImage: {
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    width: 475,
    height: 475,
  }
});

export default DetailedPostViewWeb;