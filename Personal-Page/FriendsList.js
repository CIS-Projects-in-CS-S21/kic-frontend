/**
* @fileoverview A friends list of fixed height and scrollbar populated by UserBlurbs.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import UserBlurb from "../Components/UserBlurb";
import AddFriendButton from "../Components/AddFriendButton";
import TokenManager from "../Managers/TokenManager";
import ClientManager from "../Managers/ClientManager";
import UserManager from '../Managers/UserManager';
import { GetUserByIDRequest, GetUserByUsernameRequest, UpdateUserInfoRequest } from '../gen/proto/users_pb';
import { GetFriendsForUserRequest, CreateConnectionForUsersRequest } from '../gen/proto/friends_pb';

/*
* Mock array of friends
*/
const FRIENDS = [
  {
    id: '1',
    username: 'friend1',
    bio: 'bio',
  },
  {
    id: '2',
    username: 'friend2',
    bio: 'bio',
  },
  {
    id: '3',
    username: 'friend3',
    bio: 'bio',
  },
  {
    id: '4',
    username: 'friend4',
    bio: 'bio',
  },
];




/**
* @class Contains function for rendering the comment section.
*/
class FriendsList extends React.Component {

  /*
   * Class constructor
   */
    constructor(props) {
        super();

        // Define the initial state:
        this.state = {
            authString: "authstring",
            userid: props.userid,
            username: props.username,
            friends: [],
        };

        this.fetchFriends = this.fetchFriends.bind(this)
    }

    componentDidMount(){
      this.fetchFriends().then(response => {
          console.log("Fetched friends successfully");
      }).catch(error => {
          console.log("Error fetching friends: " + error)
      });
    }

    /**
    * The start of the process to fetch friends;
    * Handles creating a UserManager to fetch the authstring
    *
    * @function fetchFriends
    * @returns {String} authString The string necessary for the authorization to send requests,
    * then calls the next function, callGetUserByUserID
    */
    fetchFriends = () => {
        // Create a new UserManager, which will provide the authString
        let um = new UserManager();
        return um.getAuthString().then(authString => {this.callGetUserByUserID(authString)});
    }

    /**
    * Handles making the GetUserByID request
    *
    * @function callGetUserByUserID
    * @param {String} authString the auth string to be used as part of the authorization header for requests
    * @returns {GetUserByIDResponse} res then calls the next function, callGetFriendsForUser
    */
    callGetUserByUserID(authString){

        //Create a ClientManager & use to create a UsersClient
        let cm = new ClientManager();
        let client = cm.createUsersClient();

        // Create the request and set the active user's ID
        let req = new GetUserByIDRequest();
        req.setUserid(this.state.userid);

        return client.getUserByID(req, {'Authorization': authString}).then(res => {this.callGetFriendsForUser(cm, authString, res)});
    }

    /**
    * Handles making the GetFriendsForUserRequest
    *
    * @function callGetFriendsForUser
    * @param {ClientManager} cm The ClientManager to be reused
    * @param {String} authString The auth string to be used as part of the authorization header for requests
    * @param {GetUserByIDRequest} res Returned in response to GetUserByIDRequest
    * @returns {GetFriendsForUserResponse} res then calls the next function, parseFriends
    */
    callGetFriendsForUser(cm, authString, res){

        // Gets the user from GetUserByIDResponse
        let user = res.getUser()
        //console.log("user is: " + user);

        // Create a FriendsClient
        let client = cm.createFriendsClient();

        // Create the request & set the active user's ID
        let req = new GetFriendsForUserRequest();
        req.setUser(user);

        return client.getFriendsForUser(req, {'Authorization': authString}).then(res => {this.updateState(client, authString, res)});
    }
    updateState(client, authString, res){

        // Save friends list to state
        this.setState({
            authString: authString,
            friends: res.getFriendsList()
        })

        console.log("Resulting friends list :" + res);
        console.log("state.friends: " + this.state.friends);
    }
    /*doSomething(authString, res, res2){
        console.log("Updated friends: " + res);
        console.log("Create connection result: " + res2);

        //Create a ClientManager & use to create a UsersClient
        let cm = new ClientManager();
        let client = cm.createUsersClient();

        // Create the request and set the active user's ID
        let req = new GetUserByIDRequest();

        let friendID = res.getFriendsList()[0];
        console.log("First friend: " + friendID);

        req.setUserid(friendID);
        return client.getUserByID(req, {'Authorization': authString}).then(res => {this.seeFriend(authString, res)});
    }
    seeFriend(authString, res){
        console.log("Friend: " + res.getUser());
    }*/

    /**
    * Renders a scrollable FriendsList of user blurbs.
    * @returns {FriendsList}
    */
    render() {
        return (
            <View style={styles.friendsList}>
                <Text style={styles.friendCounter}>Displaying {this.state.friends.length} friends for @{this.state.username}</Text>

                {/* The comment box of fixed height */}
                <View style={styles.friendsList}>
                    <FlatList
                        style={styles.listcontainer}
                        data={this.state.friends}
                        renderItem={({item}) => <UserBlurb
                                                    authString = {this.state.authString}
                                                    myUsername = {this.state.username}
                                                    myUserid = {this.state.userid}
                                                    userid = {item}
                                                />}
                        keyExtractor={friend => friend.userid}
                    />
                </View>

            </View>
        );
    }
}

/**
* @constant styles creates stylesheet for the Comment Section
*/
const styles = StyleSheet.create({
    friendsList: {
        flex: 1,
    },
    userBar: {
        flexDirection: 'row',
    },
    friendBlurb: {
        backgroundColor: '#fff',
        width: '95%',
        padding: 15,
        marginBottom: 10,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    friendCounter: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#707070',
        marginTop: 5,
        marginBottom: 5,
        paddingBottom: 5,
        textAlign: 'center',
    }
});

export default FriendsList;