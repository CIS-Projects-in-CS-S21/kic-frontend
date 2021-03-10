/**
* @fileoverview The screen for the user's personal page, containing links
* to the Mental Health Log page and User Feed.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Modal, Button, Pressable, TouchableOpacity } from 'react-native';

/**
* @class Contains function for rendering the personal page.
*/
class PostsGrid extends React.Component {
    /**
    * Renders personal page components.
    * @returns {Component}
    */
    render() {
      return (
        {/* postsContainer */}
        <View style ={styles.postGrid}>
            <View style ={styles.postRow}>
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
            </View>

            <View style ={styles.postRow}>
                <Image
                  style ={styles.postImage}
                  source = {require('../assets/default/default_icon_2.png')}
                />
                <Image
                  style ={styles.postImage}
                  source = {require('../assets/default/default_icon_2.png')}
                />
            </View>
        </View>
      );
    }
}

/**
* @constant styles creates stylesheet for personal page components
*/
const styles = StyleSheet.create({
  postGrid: {
    backgroundColor: '#b3d2db',
    justifyContent: 'center',
    width: '75%',
    marginTop: 15,
    marginBottom: 15,
  },
  postRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  postImage: {
    alignSelf: 'flex-start',
    width: 230,
    height: 230,
    marginLeft: 5,
    marginRight: 5,
  }
});

export default PostsGrid;