/**
* @fileoverview A Comment Section of fixed height and scrollbar populated by Comments.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

/**
* Format individual comment
*/
const Comment = ({ commenterHandle, commenterPosterFirstName, commenterFirstName, commentText }) => (
  <View style={styles.comment}>
    <Text style={styles.commentText}>{commentText}</Text>
  </View>
);

/**
* @class Contains function for rendering the comment section.
*/
class AddFriendButton extends React.Component {
    /**
    * Event for adding friend
    */
    handleClick = () => {
      console.log("Clicked button")
    }

    /**
    * Renders comments section.
    * @returns {CommentSection}
    */
    render() {
      return (
        <Button
          onPress={this.handleClick}
          style={this.buttonStyle}
          title="Add Friend"
          color="#b3d2db"
        />
      );
    }
}

/**
* @constant styles creates stylesheet for the Comment Section
*/
const styles = StyleSheet.create({
    buttonStyle: {
        height: 10,
        width: 30,
    },
});

export default AddFriendButton;