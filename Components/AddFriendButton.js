/**
* @fileoverview An AddFriendButton that sends a friend request to a user
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import KIC_Style from "../Components/Style";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AddAwaitingFriendRequest } from '../gen/proto/friends_pb';
import ClientManager from "../Managers/ClientManager";

/**
* @class Contains function for rendering an add friend button
*/
class AddFriendButton extends React.Component {

    /**
    * Handles sending a friend request from the active user to the target user
     * precondition: none
     * post condition: allowFriendRequest
     * @exception error catches error when friend request is not allowed
    *
    */
    handleSendRequest() {
        let cm = new ClientManager();
        let client = cm.createFriendsClient();

        let req = new AddAwaitingFriendRequest();

        //First user is the sender of the request (aka the active user)
        req.setFirstuserid(this.props.myUserid);

        //Second user is the receiver of the request (aka the potential friend)
        req.setSeconduserid(this.props.userid);

        return client.addAwaitingFriend(req, {'Authorization': this.state.authString}).then(res => { this.allowFriendReqs(); })
                        .catch(error => { this.disallowFriendReqs() });
    }

    /**
    * Renders AddFriendButton.
    * @returns {AddFriendButton}
    */
    render() {
      return (
        <View>
            <TouchableOpacity
              style={styles.choiceButton}
              onPress = {this.handleSendRequest}>
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