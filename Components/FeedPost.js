/**
* @fileoverview The FeedPost file holds the content of a user's post for the user feed. 
This includes a user handle at top, image in middle, and user handle and caption at the bottom. 
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

/**
* @class Contains function for rendering a post
*/
class FeedPost extends React.Component {
    /**
    * Renders a user's post
    * @returns {FeedPost}
    */
    render() {
      return (
        <View style ={styles.feedPost}>
          {/* Handle of user who posted image */}
            <Text style = {styles.headerHandle}>@Handle</Text>
            {/* Image of post */}
            <Image
              style ={styles.postImage}
              source = {require('../assets/default/default_icon_2.png')}
            />
            {/* Handle of user who posted image and caption */}
            <Text style = {styles.bottomText}>@Handle: caption here</Text>
        </View>
      );
    }
}

/**
* @constant styles creates stylesheet for the PostsGrid component
*/
const styles = StyleSheet.create({
  feedPost: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
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
  headerHandle: {
    alignSelf: 'auto'
  },
  postImage: {
    borderWidth: 5, 
    borderColor: 'black', 
    width: 350,
    height: 350,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  bottomText: {
    alignSelf: 'auto'
  },
});

export default FeedPost;