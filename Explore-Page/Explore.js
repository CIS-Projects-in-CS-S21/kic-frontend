/**
 * @fileoverview Explore page - allows users to discover friends and search for users.
 */

import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React from 'react';
import FeedHeader from '../Components/FeedHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, Text, TextInput, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import KIC_Style from '../Components/Style';
import UserBlurb from "../Components/UserBlurb";
import TokenManager from "../Managers/TokenManager";
import ClientManager from "../Managers/ClientManager";
import UserManager from '../Managers/UserManager';
import { GetUserByIDRequest, GetUserByUsernameRequest, UpdateUserInfoRequest } from '../gen/proto/users_pb';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GetRecommendationsForUserRequest, } from '../gen/proto/friends_pb';
import { UsersClient } from '../gen/proto/users_grpc_web_pb';


/**
 * @class Contains function for rendering Explore screen.
 */
class Explore extends React.Component {


  /*
   * Class constructor
   */
  constructor(props) {
    super();

    // Define the initial state:
    this.state = {
      userid: "0",
      username: "default",
      bio: "bio",
      birthDay: 0,
      birthMonth: 0,
      birthYear: 0,
      searchString: '',
      finishedLoading: false,
      authString : '',
      foundFriends: [],
      foundSearch : [],
      showSearch : false,
      showSuggestions : true
    };

    this.callGetAuthString = this.callGetAuthString.bind(this)

  }
  /**
   * Runs when component first loads
   */
  componentDidMount() {
    //this.fetchUserInfo()
    this.fetchUserInfo().then(response => {
      console.log("Success");
    }).catch(error => {
      console.log(error)
    });
  }
    /**
     * Ensure that the props were updated.
     * @param {props} prevProps The previous states props
     */
    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.userid !== prevProps.userid) {
        this.fetchUserInfo().then(response => {
            console.log("Success");
        }).catch(error => {
            console.log(error)
        });
      }
    }

    /**
     * A function that begins the chain of functions.
     * @returns {function} callGetAuthString() Function to get authorization string
     */
    fetchUserInfo() {
        return this.callGetAuthString();
    }

    /**
     * Function to get authorization string
     * @returns {String} authString The authorization string to be used for requests
     */
    callGetAuthString(){
        let um = new UserManager();
        return um.getAuthString().then(authString => {this.callGetUserID(um, authString)});
    }

    /**
     * Function to find the user id of current user.
     * @param {UserManager} um The UserManager to be reused 
     * @param {String} authString The authorization string to be used for requests
     * @returns {String} userID A string of the active user's ID
     */
    callGetUserID(um, authString){
        this.setState({
            authString: authString,
        })
        return um.getMyUserID().then(userID => {this.callGetUserByUserID(authString, userID)});
    }

    /**
     * 
     * @param {String} authString The authorization string to be used for requests
     * @param {String} userID A string of the active user's ID
     * @returns {User} res Object representing user
     */
    callGetUserByUserID(authString, userID){

        let cm = new ClientManager();
        let client = cm.createUsersClient();

        let req = new GetUserByIDRequest();
        req.setUserid(userID);
        return client.getUserByID(req, {'Authorization': authString}).then(res => {this.callGetRecommendationsForUser(res, userID, authString, cm)})
    }

    /**
     * A function that makes a request for the recommendations of a user.
     * @param {User} res Object representing user
     * @param {String} userID A string of the active user's ID 
     * @param {String} authString The authorization string to be used for requests
     * @param {ClientManager} cm The ClientManager to be reused
     * @returns {Array} res An array of Users that are recommended for a user.
     */
    callGetRecommendationsForUser(res, userID, authString, cm){
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
            userid: userID,
            clientManager : cm
        })

        let client = cm.createFriendsClient();

        let req = new GetRecommendationsForUserRequest();
        req.setUser(res.getUser());
        req.setNumberrecommendations(10); 

        return client.getRecommendationsForUser(req, {'Authorization': authString}).then(response => {this.storeRecommendationsForUser(response, res)})
    }

    /**
     * A function that stores the array of recommendations to be rendered by the
     * component.
     * @param {Array} res An array of Users that are recommended for a user. 
     */

    storeRecommendationsForUser(res) {
        console.log("Found " + res.getRecommendationsList().length + " friends."); 
        console.log(res.getRecommendationsList()); 
        let rec = res.getRecommendationsList(); 

        this.setState({
            foundFriends : rec, 
            finishedLoading : true
        }); 
    }

    /**
     * A function that sets the search string as it is input.
     * @param {String} text The search string for finding new users.
     */
    setSearchString = (text) => {
        this.setState({ searchString: text });
        if(text === '') {
            this.setState({
                showSearch : false,
                showSuggestions : true
            })
        }
    }

    /**
     * A function handling the search for a user.
     * @returns {User} res The user found from username search
     */
    handleSearch() {
        console.log("Searching for " + this.state.searchString + "...");
        this.setState({
            showSearch : false,
        })
        
        let cm = new ClientManager();
        let client = cm.createUsersClient();

        let req = new GetUserByUsernameRequest();
        req.setUsername(this.state.searchString); 
        
        return client.getUserByUsername(req, {'Authorization' : this.state.authString}).then(res => {this.showSearchResults(res)})
    }

    /**
     * A function showing the result of a search.
     * @param {User} res The user found from username search
     */
    showSearchResults(res) {
        if(res.getSuccess() === true && res.hasUser() === true) {
            let foundUser = res.getUser().getUserid();
            console.log("Found user with user id: " +foundUser); 
            this.setState({
                foundUser: foundUser,
                showSearch : true,
                showSuggestions : false
            });
        } else {
            console.log("Couldn't find user from search string: " + this.state.searchString); 
        }
    }


    /**
     * Renders Explore screen components.
     * @returns {Component}
     */
  render() {
    return (
        <SafeAreaView style={KIC_Style.outContainer}>
            <FeedHeader navigation={this.props.navigation} />
            <SafeAreaView style={KIC_Style.innerContainer}>
                <View style={{flexDirection: 'row', marginTop: 30, justifyContent: 'center' }}>
                    <TextInput
                        style={KIC_Style.searchInput}
                        textAlign = {'center'}
                        onChange={(e) => this.setSearchString(e.nativeEvent.text)}
                        placeholder="Search for a user . . ."
                    />
                    <TouchableOpacity
                        style={{ backgroundColor: '#b3d2db', borderRadius: 10, height: 30, justifyContent: 'center' }}
                        onPress = {() => this.handleSearch()}>
                        <Ionicons name="search-circle-outline" color='#ffff' size={25} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.toptext}>Displaying friend recommendations for @{this.state.username}</Text>
                
                {(this.state.finishedLoading)  ? <ScrollView style = {styles.blurb}>
                    {(this.state.showSearch) ? <View>
                    <UserBlurb
                        navigation = {this.props.navigation}
                        authString = {this.state.authString}
                        myUsername = {this.state.username}
                        myUserid = {this.state.userid}
                        userid = {this.state.userid} // This page belongs to the active user
                        blurbUserid = {this.state.foundUser}
                    />
                </View> : <View></View>}
                    {this.state.showSuggestions ? <View>
                    <FlatList
                        data = {this.state.foundFriends}
                        renderItem = {({item}) => 
                        <UserBlurb
                        navigation = {this.props.navigation}
                        authString = {this.state.authString}
                        myUsername = {this.state.username}
                        myUserid = {this.state.userid}
                        userid = {this.state.userid}
                        blurbUserid = {item.getUserid()}
                        />}
                        keyExtractor = {friend => friend.userid}
                    />
                     </View> : <View></View>}
                    <StatusBar style="auto" />
                </ScrollView> : <View></View>}
            </SafeAreaView>
        </SafeAreaView>
    );
  }
}

/**
 * @constant styles creates stylesheet for Explore screen components
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toptext: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#707070',
        marginTop: 5,
        marginBottom: 5,
        paddingBottom: 5,
        textAlign: 'center',
    },
    blurb: { 
        width : '85%'
    }
});

export default Explore;
