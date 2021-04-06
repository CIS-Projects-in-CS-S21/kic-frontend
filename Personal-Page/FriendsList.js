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

    /**
    * Runs when component first loads
    *
    * @function componentDidMount()
    */
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
    * @param {GetUserByIDResponse} res Returned in response to GetUserByIDRequest
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

        return client.getFriendsForUser(req, {'Authorization': authString}).then(res => {this.updateState(authString, res)});
    }

    /**
    * Retrieves the friend list from the response object and saves it to the state
    *
    * @function updateState
    * @param {String} authString The auth string to be used as part of the authorization header for requests
    * @param {GetFriendsForUserResponse} res Returned in response to GetFriendsForUserRequest
    */
    updateState(authString, res){

        // Save friends list to state
        this.setState({
            authString: authString,
            friends: res.getFriendsList()
        })
    }

    /**
    * Renders a scrollable FriendsList of user blurbs.
    * @returns {FriendsList}
    */
    render() {
        return (
            <View style={styles.friendsList}>
                <Text style={styles.friendCounter}>Displaying {this.state.friends.length} friends for @{this.state.username}</Text>

                {/* Friend list container */}
                <View style={styles.friendsList}>
                    {/* FlatList that renders a UserBlurb per user in the friend list */}
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