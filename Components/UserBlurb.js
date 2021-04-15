/**
 * @fileoverview A component that displays a user's name, username, and bio
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Modal, Button, Pressable, TouchableOpacity } from 'react-native';
import KIC_Style from "../Components/Style";
import PostDetails from "../Components/PostDetails";
import ProfileHeader from "../Components/ProfileHeader";
import AddFriendButton from "../Components/AddFriendButton";
import { GetUserByIDRequest, GetUserByUsernameRequest, UpdateUserInfoRequest } from '../gen/proto/users_pb';
import { GetConnectionBetweenUsersRequest, AddAwaitingFriendRequest, DeleteConnectionBetweenUsersRequest } from '../gen/proto/friends_pb';
import ClientManager from "../Managers/ClientManager";
import UserManager from '../Managers/UserManager';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native';
import ProfilePicture from "./ProfilePicture";

/**
 * @class Contains function for rendering the detailed post view.
 * TO USE THIS COMPONENT, YOU NEED TO PASS IN AN AUTHSTRING AND A USERID FOR THE USER BEING DISPLAYED.
 */
class UserBlurb extends React.Component {

  /*
   * Class constructor
   */
    constructor(props) {
        super();

        // Define the initial state
        this.state = {
            authString: props.authString,

            // myUserid is the id of the current active user
            myUserid: props.myUserid,

            // userid is the id of the user who owns the page that this blurb is being displayed on (if applicable)
            userid: props.userid,

            // userid is the id of the user featured on this blurb
            blurbUserid: props.blurbUserid,
            username: "default",
            bio: "bio",
            birthDay: 0,
            birthMonth: 0,
            birthYear: 0,
            isFriendable: false,
            wasRemoved: false,
            isMyBlurb: false,
            areFriends: false,
        };

        this.initBlurb = this.initBlurb.bind(this)
    }

    /**
    * Runs when component first loads
    *
    * @function componentDidMount()
    */
    componentDidMount(){
      this.initBlurb();
    }

    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.blurbUserid !== prevProps.blurbUserid) {
          this.setState({
              myUserid: this.props.myUserid,
              userid: this.props.userid,

              blurbUserid: this.props.blurbUserid,
              username: this.props.username,
              bio: this.props.bio,
              isFriendable: false,
              wasRemoved: false,
              areFriends: false,
          })
          this.initBlurb();
      }
    }

    initBlurb() {
        // Populate blurb with given user info
        this.callGetUserByUserID().then(response => {
          console.log("Fetched info for user blurb for userid " + this.state.blurbUserid + " successfully");
        }).catch(error => {
          console.log("Error mounting userblurb for userid " + this.state.blurbUserid + ": " + error);
        });

    }

    /**
    * Handles making the GetUserByID request
    *
    * @function callGetUserByUserID
    * @param {String} authString the auth string to be used as part of the authorization header for requests
    * @returns {GetUserByIDResponse} res then calls the next function, callGetFriendsForUser
    */
    callGetUserByUserID(){
        let cm = new ClientManager();
        let client = cm.createUsersClient();

        let req = new GetUserByIDRequest();
        req.setUserid(this.props.blurbUserid);
        return client.getUserByID(req, {'Authorization': this.state.authString}).then(res => {this.setUserInfo(res)})
    }

    /**
    * Parses user information from a GetUserByIDRequest, checks if this active user's blurb, and updates the state
    *
    * @function callGetUserByUserID
    * @param {GetUserByIDResponse} res The response object from a GetUserByIDRequest
    */
    setUserInfo(res){
        {/* Store user information */}
        let myusername = res.getUser().getUsername();
        let bday = res.getUser().getBirthday().toString();
        let mybirthyear = bday.split(",")[0];
        let mybirthmonth = bday.split(",")[1];
        let mybirthday = bday.split(",")[2]
        let mycity = res.getUser().getCity();
        let mybio = res.getUser().getBio();

        this.setState({
            username: myusername,
            bio: mybio,
            city: mycity,
            birthDay: mybirthday,
            birthMonth: mybirthmonth,
            birthYear: mybirthyear,
        })

        console.log("Blurb belongs to " + this.state.username)

        if (this.state.blurbUserid == this.state.myUserid){
            this.setState({
                isMyBlurb: true,
            })
        } else {
            this.setState({
                isMyBlurb: false,
            })
        }

        // This part checks for an existing friendship
        let cm = new ClientManager();
        let client = cm.createFriendsClient();

        let req = new GetConnectionBetweenUsersRequest();
        req.setFirstuserid(this.state.myUserid);
        req.setSeconduserid(this.state.blurbUserid);

        return client.getConnectionBetweenUsers(req, {'Authorization': this.state.authString}).then(res => { this.handleAreFriends(); })
                .catch(error => { this.handleAreNotFriends() });
    }

    /**
    * Sets state.wasRemoved to true if the user was just unfriended.
    *
    * @function handleRemovedFriend
    */
    handleRemovedFriend(){
        this.setState({
            wasRemoved: true,
            areFriends: false,
        })
    }

    /**
    * Sets state.isFriendable to true. Signifies that this user can be sent a friend req.
    *
    * @function handleAreFriends
    */
    handleAreFriends(){
        this.setState({
            isFriendable: false,
            areFriends: true,
        })
    }

    /**
    * Sets state.isFriendable to true. Signifies that this user can't be sent a friend req.
    *
    * @function disallowFriendReqs
    */
    handleAreNotFriends(){
        // console.log("Users with IDs " +  this.props.myUserid + " and " + this.state.userid + " are not friends.");
        this.setState({
            isFriendable: true,
            areFriends: false,
        })
    }

    /**
    * Sets state.isFriendable to false and state.areFriends to false. Signifies that this user can't be sent another friend req, but they aren't friends yet either.
    *
    * @function handleRequestSent
    */
    handleRequestSent(){
        // console.log("Request from " +  this.props.myUserid + " was sent to " + this.state.userid + ".");
        this.setState({
            isFriendable: false,
            areFriends: false,
        })
    }

    /**
    * Sets state.isFriendable to true and state.areFriends to false. Signifies that this user can still be sent a friend req, but they aren't friends yet.
    *
    * @function handleRequestFailedToSend
    */
    handleRequestFailedToSend(){
        // console.log("Request from " +  this.props.myUserid + " failed to send to " + this.state.userid + ".");
        this.setState({
            isFriendable: true,
            areFriends: false,
        })
    }

    /**
    * Handles sending a friend request from the active user to the target user
    *
    * @function handleSendRequest
    */
    handleSendRequest = () => {
        let cm = new ClientManager();
        let client = cm.createFriendsClient();

        let req = new AddAwaitingFriendRequest();

        //First user is the sender of the request (aka the active user)
        req.setFirstuserid(this.state.myUserid);

        //Second user is the receiver of the request (aka the user in this blurb)
        req.setSeconduserid(this.state.blurbUserid);

        console.log("Sending friend request from userid (me) " + this.state.myUserid + " to userid " + this.state.blurbUserid);

        return client.addAwaitingFriend(req, {'Authorization': this.props.authString}).then(res => { this.handleRequestSent(); })
                        .catch(error => { this.handleRequestFailedToSend() });
    }

    /**
    * Handles removing a friend from user's friendlist
    *
    * @function handleRemoveFriend
    */
    handleRemoveFriend = () => {
        let req = new DeleteConnectionBetweenUsersRequest();
        req.setFirstuserid(this.state.blurbUserid);
        req.setSeconduserid(this.state.myUserid);

        let cm = new ClientManager();
        let client = cm.createFriendsClient();
        return client.deleteConnectionBetweenUsers(req, {'Authorization': this.props.authString}).then(res => { this.allowFriendReqs(); });
    }

    goToUserPage = () => {
        this.props.navigation.navigate('UserPage', {
          navigation: this.props.navigation,
          myUserid: this.state.myUserid,
          userid: this.state.blurbUserid,
          username: this.state.username,
          bio: this.state.bio,
        })
    }

    /**
    * Renders the UserBlurb components.
    * @returns a {UserBlurb}
    */
    render() {
      return (
        <View style={styles.container}>
              {/* User's icon */}
              <TouchableOpacity
                    onPress = {this.goToUserPage}>
                    <ProfilePicture
                        userid = {this.state.blurbUserid}
                        authString = {this.props.authString}
                    />
              </TouchableOpacity>

              {/* User's blurb */}
              <View style ={styles.userInfo}>
                  {/* User's display name and handle */}
                  <View style ={styles.userID}>
                      {/* Display name */}
                      <Text style ={styles.textUsername}>{this.state.username}</Text>
                  </View>
                  {/* Bio */}
                  <Text style ={styles.textBio}>{this.state.bio}</Text>
              </View>

                {/* Display SendReq button only if this  */}
                {(this.state.isFriendable && !this.state.areFriends && !this.state.isMyBlurb) ? <View>
                                                    <TouchableOpacity
                                                      style={styles.choiceButton}
                                                      onPress = {this.handleSendRequest}>
                                                      <Ionicons name="person-add-outline" color='#ffff' size={25} />
                                                    </TouchableOpacity>
                                                 </View>
                                                 :
                 (this.state.areFriends) ? <View>
                                                     <TouchableOpacity
                                                       style={styles.choiceButton}
                                                       onPress = {this.handleRemoveFriend}>
                                                       <Ionicons name="person-remove-outline" color='#ffff' size={25} />
                                                     </TouchableOpacity>
                                                  </View>
                                                 : <View></View>}

          <StatusBar style="auto" />
        </View>
      );
    }
}

/**
 * @constant styles creates stylesheet for an individual UserBlurb's components.
 */
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#c3dee6',
        paddingVertical: 20,
        justifyContent: 'flex-start',
        paddingTop: 30,
        paddingBottom: 30,
        paddingRight: 10,
        paddingLeft: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
    },
    icon: {
        width: 70,
        height: 70,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35,
        marginRight: 15,
        marginLeft: 15,
    },
    userInfo: {
        flexDirection: 'column',
        width: '80%',
        paddingRight: 10,
        flex: 1,
    },
    userID: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    textUsername: {
        fontSize: 15,
        marginRight: 5,
        fontWeight: "bold",
    },
    textBio: {
        fontSize: 13,
    },
    disabledButton: {
        width: "80%",
        borderRadius: 25,
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: "#565657",
        marginTop: 7,
        padding: 10,
    },
});

export default UserBlurb;