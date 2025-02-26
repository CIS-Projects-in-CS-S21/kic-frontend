/**
 * @fileoverview The screen for the user's personal page, containing links
 * to the Mental Health Log page and User Feed.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';
import KIC_Style from "../Components/Style";
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileHeader from "../Components/ProfileHeader";
import PostsGrid from "../Components/PostsGrid";
import MyUser from "../Components/MyUser";
import FeedHeader from '../Components/FeedHeader';
import { GetUserByIDRequest, GetUserByUsernameRequest, UpdateUserInfoRequest } from '../gen/proto/users_pb';
import TokenManager from "../Managers/TokenManager";
import ClientManager from "../Managers/ClientManager";
import UserManager from '../Managers/UserManager';

/**
 * @class Contains functions for rendering the personal page.
 */
class PersonalPage extends React.Component {

    /**
     * Class constructor
     * @param {String} authString The authstring for making requests
     * @param {String} username The username of the current active user
     * @param {String} userid The userid of the current active user
     * @param {String} bio The bio of the user to be displayed
     * @param {String} userid The id of the user who owns the page that this blurb is being displayed on     * @param {Number} birthDay day of birth of user
     * @param {Number} birthMonth month of birth of user
     * @param {Number} birthYear day of birth of user
     * @param {boolean} finishedLoading default set to false to loading is not finished
     */
  constructor(props) {
    super();

    // Define the initial state:
    this.state = {
      authString: '',
      userid: "0",
      username: "default",
      bio: "bio",
      birthDay: 0,
      birthMonth: 0,
      birthYear: 0,
      finishedLoading: false,
    };

    this.fetchUserInfo = this.fetchUserInfo.bind(this)

  }

    /**
    * Runs when component first loads
    * postcondition: fetchUserInfo
     * @exception error if user info is not able ot be fetched
    */
  componentDidMount() {
    //this.fetchUserInfo()
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.setState({
        finishedLoading : false
      });
      this.fetchUserInfo().then(response => {
        console.log("Success");
      }).catch(error => {
        console.log(error)
      });
    })
  }

    /**
    * Runs before the component is unmounted
    */
  componentWillUnmount() {
    this._unsubscribe();

  }

    /**
    * Runs when the props change and updates the component accordingly.
    * @params {props} prevProps The previous state's props
     * postcondition: fetchUserInfo
     * @exception error if user info is not able ot be fetched
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
    * Calls callGetAuthString
    * postcondition: callGetAuthString()
    */
    fetchUserInfo() {
        return this.callGetAuthString();
    }

    /**
    * Creates a UserManager to fetch the authString, then calls callGetUserID
    * precondition: fetchUserInfo()
     * postcondition: callGetUserID()
    * @returns {String} authString The authorization string to be used for requests
    */
    callGetAuthString(){
        let um = new UserManager();
        return um.getAuthString().then(authString => {this.callGetUserID(um, authString)});
    }

    /**
    * Saves authString to state then calls getUserByID
    * precondition: callGetAuthString()
     * postcondition: callGetUserByUserID()
    * @params {UserManager} um The UserManager to be reused
    * @params {String} authString The authorization string to be used for requests
    * @returns {String} userID A string of the active user's ID
    */
    callGetUserID(um, authString){
        this.setState({
            authString: authString,
        })
        return um.getMyUserID().then(userID => {this.callGetUserByUserID(authString, userID)});
    }

    /**
    * Gets a user by their user ID via a GetUserByIDRequest
    * precondition: callGetUserID()
     * postcondition: setUserInfo()
    * @params {String} authString )The authorization string to be used for requests
    * @params {String} userID A string of the active user's ID
    * @returns {GetUserByIDResponse} res The response object to a GetUserByIDRequest
    */
    callGetUserByUserID(authString, userID){

        let cm = new ClientManager();
        let client = cm.createUsersClient();

        let req = new GetUserByIDRequest();
        req.setUserid(userID);
        return client.getUserByID(req, {'Authorization': authString}).then(res => {this.setUserInfo(res, userID)})
    }

    /**
    * Parses a user's information from the user found in the GetUserByIDResponse
    * precondition: callGetUserByUserID
    * @params {String} authString The authorization string to be used for requests
    * @params {String} userID A string of the active user's ID
    * @returns {GetUserByIDResponse} res The response object to a GetUserByIDRequest
    */
    setUserInfo(res, userID){
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
            finishedLoading: true,
        })
    }

  /**
   * Renders personal page components.
   * @returns {PersonalPage}
   */
  render() {
    return (
      <SafeAreaView style={KIC_Style.outContainer}>
        <FeedHeader navigation={this.props.navigation} />
        <SafeAreaView style={styles.container}><ScrollView>
            {/* Display profile header with state information */}
            {(this.state.finishedLoading) ? <ProfileHeader
                authString = {this.state.authString}
                navigation = {this.props.navigation}
                myUserid = {this.state.userid}
                username = {this.state.username}
                userid = {this.state.userid}
                bio = {this.state.bio}
                birthDay = {this.state.birthDay}
                birthMonth = {this.state.birthMonth}
                birthYear = {this.state.birthYear}
                /> : <View></View>}

            {/* Show posts */}
            {(this.state.finishedLoading) ? <PostsGrid
                myUserid = {this.state.userid}
                navigation = {this.props.navigation}
                username = {this.state.username}
                userid = {this.state.userid}
                /> : <View></View>}

            {/* NAVIGATION */}
            <View style ={{ marginBottom: 10, }}>
            <TouchableOpacity
                style={KIC_Style.button}
                onPress={() => this.props.navigation.navigate('MentalHealthLog')}>
                <Text style={KIC_Style.button_font}>Mental Health Tracker</Text>
            </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
          </ScrollView></SafeAreaView>
      </SafeAreaView>
    );
  }
}

/**
 * @constant styles creates stylesheet for personal page components
 */
const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        top:30,
        marginBottom:30,
      },
      android: {
        top:30,
        marginBottom:30,
      },
      default: {
        top:60,
        marginBottom: 60,
      }
    }),
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flex: 1,
  },
});

export default PersonalPage;
