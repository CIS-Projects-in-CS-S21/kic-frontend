/**
 * @fileoverview A component that displays a user's name, username, and bio
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Modal, Button, Pressable, TouchableOpacity } from 'react-native';
import KIC_Style from "../Components/Style";
import PostDetails from "../Components/PostDetails";
import ProfileHeader from "../Components/ProfileHeader";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GetUserByIDRequest, GetUserByUsernameRequest, UpdateUserInfoRequest } from '../gen/proto/users_pb';
import { CreateConnectionForUsersRequest, DeleteConnectionBetweenUsersRequest, AddAwaitingFriendRequest } from '../gen/proto/friends_pb';
import ClientManager from "../Managers/ClientManager";
import UserManager from '../Managers/UserManager';

/**
 * @class Contains function for rendering the detailed post view.
 */
class RequestBlurb extends React.Component {

  /*
   * Class constructor
   */
    constructor(props) {
        super();

        // Define the initial state:
        this.state = {
            userid: props.userid,
            username: "default",
            bio: "bio",
            birthDay: 0,
            birthMonth: 0,
            birthYear: 0,
            canAdd: true,
            status: "",
        };

        this.callGetUserByUserID = this.callGetUserByUserID.bind(this)
    }

   /**
    * Runs when component first loads
    *
    */
    componentDidMount(){
        this.callGetUserByUserID().then(response => {
          console.log("Fetched info for user blurb for userid " + this.props.userid + " successfully");
        }).catch(error => {
          console.log("Error mounting userblurb for userid " + this.props.userid + ": " + error);
        });
    }

    /**
    * Handles making the GetUserByID request
    *
    * @param {String} authString the auth string to be used as part of the authorization header for requests
    * @returns {GetUserByIDResponse} res then calls the next function, callGetFriendsForUser
    */
    callGetUserByUserID(){
        let cm = new ClientManager();
        let client = cm.createUsersClient();

        let req = new GetUserByIDRequest();
        req.setUserid(this.props.userid);
        return client.getUserByID(req, {'Authorization': this.props.authString}).then(res => {this.setUserInfo(res)})
    }

    /**
    * Parses user information from a GetUserByIDRequest and updates the state
    *
    * @param {GetUserByIDResponse} res The response object from a GetUserByIDRequest
    */
    setUserInfo(res){
        {/* Store user information */}
        let myusername = res.getUser().getUsername();
        let mybio = res.getUser().getBio();

        this.setState({
            username: myusername,
            bio: mybio,
        })
    }

    /**
    * Handles accepting a friend request
    * @returns {CreateConnectionForUsersResponse} res The response object to a CreateConnectionForUsersRequest
    */
    handleAccept = () => {
        this.setState({
            canAdd: false,
            status: "Accepted", });

        let req = new CreateConnectionForUsersRequest();
        req.setFirstuserid(this.state.userid);
        req.setSeconduserid(this.props.myUserid);

        let cm = new ClientManager();
        let client = cm.createFriendsClient();

        return client.createConnectionForUsers(req, {'Authorization': this.props.authString}).then(res => { console.log("Users " + this.state.userid + " (blurb) and " + this.props.myUserid + " (me) are now friends!")});
    }

    /**
    * Handles denying a friend request
    * @returns {DeleteConnectionBetweenUsersResponse} res The response object to a DeleteConnectionBetweenUsersRequest
    */
    handleDeny = () => {
        this.setState({
            canAdd: false,
            status: "Denied", });

        let req = new DeleteConnectionBetweenUsersRequest();
        req.setFirstuserid(this.state.userid);
        req.setSeconduserid(this.props.myUserid);

        let cm = new ClientManager();
        let client = cm.createFriendsClient();

        return client.deleteAwaitingFriendBetweenUsers(req, {'Authorization': this.props.authString}).then(res => { console.log("Deleted req from user " + this.props.userid)});
    }

    doNothing = () => {
        //do nothing
    }

    /**
    * Renders the RequestBlurb component.
    * @returns a {RequestBlurb}
    */
    render() {
      return (
        <View style={styles.container}>
              {/* User's icon */}
              <Image
                style={styles.icon}
                source = {require('../assets/default/default_icon_2.png')}
              />

              {/* User's blurb */}
              <View style ={styles.userInfo}>
                  {/* User's display name and handle */}
                  <View style ={styles.userID}>
                      {/* Display name */}
                      <Text style ={styles.textUsername}>{this.state.username}</Text>
                  </View>
                  {/* # of posts and friends */}
                  <Text style ={styles.textBio}>{this.state.bio}</Text>
              </View>

            {(this.state.canAdd) ?  <View><TouchableOpacity
                                            style={styles.choiceButton}
                                            onPress={this.handleAccept}>
                                            <Ionicons name="checkmark-circle-outline" color='#ffff' size={25} />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.choiceButton}
                                            onPress={this.handleDeny}>
                                            <Ionicons name="close-circle-outline" color='#ffff' size={25} />
                                        </TouchableOpacity></View> :
                                        <View><TouchableOpacity
                                            style={KIC_Style.disabledButton}
                                            onPress={this.doNothing}>
                                            <Text style={{ color: '#000000' }}>{this.status}</Text>
                                        </TouchableOpacity></View>}

          <StatusBar style="auto" />
        </View>
      );
    }
}

/**
 * @constant styles creates stylesheet for an individual RequestBlurb's components.
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
    disabledButton: {
        width: "80%",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#8a8a8a",
        marginTop: 7,
        padding: 10,
    },
});

export default RequestBlurb;