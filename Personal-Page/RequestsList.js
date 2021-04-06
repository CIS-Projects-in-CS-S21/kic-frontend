/**
* @fileoverview A friends list of fixed height and scrollbar populated by UserBlurbs.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import RequestBlurb from "../Components/RequestBlurb";
import AddFriendButton from "../Components/AddFriendButton";
import TokenManager from "../Managers/TokenManager";
import ClientManager from "../Managers/ClientManager";
import UserManager from '../Managers/UserManager';
import { GetUserByIDRequest, GetUserByUsernameRequest, UpdateUserInfoRequest } from '../gen/proto/users_pb';
import { GetFriendsForUserRequest, CreateConnectionForUsersRequest } from '../gen/proto/friends_pb';

/*
* Mock array of requests
*/
const REQUESTS = [
  {
    id: '5',
    username: 'acquaintance1',
    bio: 'I could be your new friend',
  },
  {
    id: '6',
    username: 'acquaintance2',
    bio: 'bio',
  },
  {
    id: '7',
    username: 'acquaintance3',
    bio: 'bio',
  },
  {
    id: '8',
    username: 'acquaintance4',
    bio: 'bio',
  },
];




/**
* @class Contains function for rendering the request list.
*/
class RequestsList extends React.Component {

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
            requests: [],
        };

        this.fetchRequests = this.fetchRequests.bind(this)
    }


    /**
    * Runs when component first loads
    *
    * @function componentDidMount()
    */
    componentDidMount(){
      this.fetchRequests().then(response => {
          console.log("Fetched friend requests successfully");
      }).catch(error => {
          console.log("Error fetching friend requests: " + error)
      });
    }

    /**
    * The start of the process to fetch friends;
    * Handles creating a UserManager to fetch the authstring
    *
    * @function fetchRequests
    * @returns {String} authString The string necessary for the authorization to send requests,
    * then calls the next function, callGetUserByUserID
    */
    fetchRequests = () => {
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

        return client.getUserByID(req, {'Authorization': authString}).then(res => {this.callGetAwaitingFriendsForUser(cm, authString, res)});
    }

    /**
    * Handles making the callGetAwaitingFriendsForUser
    *
    * @function callGetAwaitingFriendsForUser
    * @param {ClientManager} cm The ClientManager to be reused
    * @param {String} authString The auth string to be used as part of the authorization header for requests
    * @param {GetUserByIDResponse} res Returned in response to GetUserByIDRequest
    * @returns {GetFriendsForUserResponse} res then calls the next function, parseFriends
    */
    callGetAwaitingFriendsForUser(cm, authString, res){

        // Gets the user from GetUserByIDResponse
        let user = res.getUser()
        //console.log("user is: " + user);

        // Create a FriendsClient
        let client = cm.createFriendsClient();

        // Create the request & set the active user's ID
        let req = new GetFriendsForUserRequest();
        req.setUser(user);

        return client.getAwaitingFriendsForUser(req, {'Authorization': authString}).then(res => {this.updateState(authString, res)});
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
            requests: res.getFriendsList()
        })
    }

    /**
    * Renders a scrollable RequestsList of user blurbs.
    * @returns {RequestsList}
    */
    render() {
        return (
            <View style={styles.requestsList}>
                <Text style={styles.requestsCounter}>{this.state.requests.length} pending requests</Text>

                <View style={styles.requestsList}>
                    <FlatList
                        style={styles.listcontainer}
                        data={this.state.requests}
                        renderItem={({item}) => <RequestBlurb
                                                    authString = {this.state.authString}
                                                    myUsername = {this.state.username}
                                                    myUserid = {this.state.userid}
                                                    userid = {item}
                                                />}
                        keyExtractor={request => request.userid}
                    />
                </View>

            </View>
        );
    }
}

/**
* @constant styles creates stylesheet for the RequestsList
*/
const styles = StyleSheet.create({
    requestsList: {
        flex: 1,
    },
    userBar: {
        flexDirection: 'row',
    },
    requestsCounter: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#707070',
        marginTop: 5,
        marginBottom: 5,
        paddingBottom: 5,
        textAlign: 'center',
    }
});

export default RequestsList;