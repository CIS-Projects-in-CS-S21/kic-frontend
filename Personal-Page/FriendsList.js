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
import { GetFriendsForUserRequest } from '../gen/proto/friends_pb';

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
    * Gets this user's friends.
    */
    fetchFriends = () => {
      return this.callGetAuthString();
    }
    callGetAuthString(){
        let um = new UserManager();
        return um.getAuthString().then(authString => {this.callGetUserByUserID(authString)});
    }
    callGetUserByUserID(authString){
        let cm = new ClientManager();
        let client = cm.createUsersClient();
        let req = new GetUserByIDRequest();
        req.setUserid(this.state.userid);

        return client.getUserByID(req, {'Authorization': authString})
            .then(res => {this.callGetFriendsForUser(cm, authString, res)});
    }
    callGetFriendsForUser(cm, authString, res){
        //console.log("user is: " + res.getUser());
        let client = cm.createFriendsClient();
        let req = new GetFriendsForUserRequest();
        req.setUser(res.getUser());
        return client.getFriendsForUser(req, {'Authorization': authString})
            .then(res => {this.parseFriends(authString, res)});
    }
    parseFriends(authString, res){
        console.log("Users friends (IDs): " + res);
    }

    /**
    * Renders a scrollable FriendsList of user blurbs.
    * @returns {FriendsList}
    */
    render() {
        {/* Function for rendering comments */}
        const renderItem = ({ item }) => (
            <UserBlurb
                username = {item.username}
                bio = {item.bio}
                userid = {item.userid}
                friendUsername = "barrybee3"
                friendUserid = '70'
            />
        );

        return (
            <View style={styles.friendsList}>
                <Text style={styles.friendCounter}>Displaying {FRIENDS.length} friends for @{this.state.username}</Text>

                {/* The comment box of fixed height */}
                <View style={styles.friendsList}>
                    <FlatList
                        style={styles.listcontainer}
                        data={FRIENDS}
                        renderItem={renderItem}
                        keyExtractor={friend => friend.username}
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