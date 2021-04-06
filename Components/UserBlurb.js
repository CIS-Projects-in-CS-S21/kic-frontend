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
import { GetConnectionBetweenUsersRequest } from '../gen/proto/friends_pb';
import ClientManager from "../Managers/ClientManager";
import UserManager from '../Managers/UserManager';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * @class Contains function for rendering the detailed post view.
 */
class UserBlurb extends React.Component {

  /*
   * Class constructor
   */
    constructor(props) {
        super();

        // Define the initial state; pro
        this.state = {
            authString: props.authString,
            userid: props.userid,
            username: "default",
            bio: "bio",
            birthDay: 0,
            birthMonth: 0,
            birthYear: 0,
            friendsWithUser: false,
        };

        this.fetch = this.callGetUserByUserID.bind(this)
    }

    componentDidMount(){
        this.callGetUserByUserID().then(response => {
          console.log("Fetched info for user blurb for userid " + this.props.userid + " successfully");
        }).catch(error => {
          console.log("Error mounting userblurb for userid " + this.props.userid + ": " + error);
        });

        this.checkForFriendship().then(response => {
            console.log("Fetched info for user blurb for userid " + this.props.userid + " successfully");
        }).catch(error => {
            console.log("Error mounting userblurb for userid " + this.props.userid + ": " + error);
        });
    }

    callGetUserByUserID(){
        let cm = new ClientManager();
        let client = cm.createUsersClient();

        let req = new GetUserByIDRequest();
        req.setUserid(this.props.userid);
        return client.getUserByID(req, {'Authorization': this.props.authString}).then(res => {this.setUserInfo(res)})
    }
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
    }

    /**
    * Builds the authorization header string using the stored token
    *
    * @function checkForFriendship
    * @return {String} The Authorization header built using the token
    */
    checkForFriendship = () => {
        let cm = new ClientManager();
        let client = cm.createFriendsClient();
        console.log("Checking on " + this.props.myUserid + " and " + this.state.userid);

        let req = new GetConnectionBetweenUsersRequest();
        req.setFirstuserid(this.props.myUserid);
        req.setSeconduserid(this.state.userid);

        return client.getConnectionBetweenUsers(req, {'Authorization': this.state.authString}).then(res => { this.handleAreFriends(); })
                .catch(error => { this.handleAreNotFriends() });
    }
    handleAreFriends(){
        this.setState({
            friendsWithUser: true,
        })
    }
    handleAreNotFriends(){
        console.log("Users with IDs " +  this.props.myUserid + " and " + this.state.userid + " are not friends.");
        this.setState({
            friendsWithUser: false,
        })
    }

    handleAddFriend() {
        // create connection
    }

    /**
    * Renders the UserBlurb components.
    * @returns a {UserBlurb}
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
                  {/* # of friends */}
                  <Text style ={styles.textBio}>{this.state.bio}</Text>
              </View>

                {(this.state.friendsWithUser) ?  <View></View> :
                                        <AddFriendButton
                                            myUsername = {this.props.myUsername}
                                            myUserid = {this.props.myUserid}
                                            friendUserid = {this.state.userid}
                                        />}



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