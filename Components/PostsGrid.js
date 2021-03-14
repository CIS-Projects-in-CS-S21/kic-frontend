/**
* @fileoverview The PostsGrid component is a reusable component used to display a given user's
* posts in a grid format. Automatically wraps content to next line depending on screen size.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Modal, Button, Pressable, TouchableOpacity } from 'react-native';

/**
* @class Contains function for rendering the posts grid
*/
class PostsGrid extends React.Component {
    /**
    * Renders a grid of the user's posts
    * @returns {PostsGrid}
    */
    render() {
      return (
        <View style ={styles.postGrid}>
            <TouchableOpacity
                onPress={this.openDetailedView}
            >
            <Image
              style ={styles.postImage}
              source = {require('../assets/default/default_icon_2.png')}
            />
            </TouchableOpacity>

            <Image
              style ={styles.postImage}
              source = {require('../assets/default/default_icon_2.png')}
            />
            <Image
              style ={styles.postImage}
              source = {require('../assets/default/default_icon_2.png')}
            />
            <Image
              style ={styles.postImage}
              source = {require('../assets/default/default_icon_2.png')}
            />

            <Image
              style ={styles.postImage}
              source = {require('../assets/default/default_icon_2.png')}
            />
            <Image
              style ={styles.postImage}
              source = {require('../assets/default/default_icon_2.png')}
            />
        </View>
      );
    }
}

/**
* @constant styles creates stylesheet for the PostsGrid component
*/
const styles = StyleSheet.create({
  postGrid: {
    backgroundColor: '#b3d2db',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  postImage: {
    width: 300,
    height: 300,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    resizeMode: 'contain',
  },
});

export default PostsGrid;