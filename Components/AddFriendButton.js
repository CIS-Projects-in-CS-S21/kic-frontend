/**
* @fileoverview A Comment Section of fixed height and scrollbar populated by Comments.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import KIC_Style from "../Components/Style";
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
* @class Contains function for rendering the comment section.
*/
class AddFriendButton extends React.Component {

    /**
    * Event for adding friend
    */
    handleClick = () => {
      console.log("Trying to add user id as a friend: " + this.props.friendUserid + " for " + this.props.myUserid)
    }

    /**
    * Renders comments section.
    * @returns {CommentSection}
    */
    render() {
      return (
        <View>
            <TouchableOpacity
              style={styles.choiceButton}
              onPress = {this.handleClick}>
              <Ionicons name="person-add-outline" color='#ffff' size={25} />
            </TouchableOpacity>
        </View>
      );
    }
}

/**
 * @constant styles creates stylesheet for an individual AddFriendButton's components.
 */
const styles = StyleSheet.create({
    choiceButton: {
        borderRadius: 25,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#7ab7dd",
        marginTop: 7,
        padding: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
});

export default AddFriendButton;