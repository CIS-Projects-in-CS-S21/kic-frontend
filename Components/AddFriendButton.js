/**
* @fileoverview A Comment Section of fixed height and scrollbar populated by Comments.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import KIC_Style from "../Components/Style";

/**
* @class Contains function for rendering the comment section.
*/
class AddFriendButton extends React.Component {

    /**
    * Event for adding friend
    */
    handleClick = () => {
      console.log("Trying to add " + this.props.friendUsername + " with id " + this.props.friendUserid)
    }

    /**
    * Renders comments section.
    * @returns {CommentSection}
    */
    render() {
      return (
        <Button
          onPress={this.handleClick}
          style={KIC_Style.button}
          title="Add Friend"
          color="#b3d2db"
        />
      );
    }
}

export default AddFriendButton;