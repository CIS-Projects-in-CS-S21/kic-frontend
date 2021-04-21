/**
 * @fileoverview The profile page for some "other" user (a user that is not the active user).
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';
import KIC_Style from "../Components/Style";
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileHeader from "../Components/ProfileHeader";
import PostsGrid from "../Components/PostsGrid";
import MyUser from "../Components/MyUser";
import { GetUserByIDRequest, GetUserByUsernameRequest, UpdateUserInfoRequest } from '../gen/proto/users_pb';
import TokenManager from "../Managers/TokenManager";
import ClientManager from "../Managers/ClientManager";
import UserManager from '../Managers/UserManager';
import FeedHeader from '../Components/FeedHeader';

/**
 * @class Contains function for rendering the user page.
 */
class UserPage extends React.Component {

  /*
   * Class constructor
    * @param {String} myUserid The id of the current active user
    * @param {useNavigation} navigation The navigation prop used to navigate between pages
    * @param {String} userid The id of the user that this page belongs to
    * @param {String} username The username of the user that this page belongs to
    * @param {String} bio The bio of the user that this page belongs to
   */
  constructor(props) {
    super();

    // Define the initial state: myUserid is the ID of the current active user and userid is the ID of
    // the user whose page is currently on display
    this.state = {
      authString: '',
      myUserid: props.route.params.myUserid,
      navigation: props.route.params.navigation,
      userid: props.route.params.userid,
      username: props.route.params.username,
      bio: props.route.params.bio,
      birthDay: 0,
      birthMonth: 0,
      birthYear: 0,
      finishedLoading: false,
    };

    this.fetchUserInfo = this.fetchUserInfo.bind(this)

  }

    /**
    * Runs when component first loads
    *
    * @function componentDidMount()
    */
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.setState({
        finishedLoading : false
      });
      this.fetchUserInfo().then(response => {
        console.log("User page mount success");
      }).catch(error => {
        console.log(error)
      });
    })
  }

    /**
    * Runs before the component is unmounted
    *
    * @function componentWillUnmount()
    */
    componentWillUnmount() {
        this._unsubscribe();
    }

    /**
    * Runs when the props change and updates the component accordingly.
    *
    * @function componentDidUpdate()
    */
    componentDidUpdate(prevProps) {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
          this.setState({
            myUserid: this.props.route.params.myUserid,
            userid: this.props.route.params.userid,
            username: this.props.route.params.username,
            finishedLoading: false,
          });
          this.fetchUserInfo().then(response => {
            console.log("User page updated");
          }).catch(error => {
            console.log(error)
          });
        })
    }

    /**
    * Calls callGetAuthString
    *
    * @function fetchUserInfo()
    */
    fetchUserInfo() {
        return this.callGetAuthString();
    }

    /**
    * Creates a UserManager to fetch the authString, then calls callGetUserID
    *
    * @function callGetAuthString()
    * @returns {String} authString The authorization string to be used for requests
    */
    callGetAuthString(){
        let um = new UserManager();
        return um.getAuthString().then(authString => {this.callGetUserByUserID(authString)});
    }

    /**
    * Gets a user by their user ID via a GetUserByIDRequest
    *
    * @function callGetUserByUserID()
    * @params {String} authString The authorization string to be used for requests
    * @params {String} userID A string of the active user's ID
    * @returns {GetUserByIDResponse} res The response object to a GetUserByIDRequest
    */
    callGetUserByUserID(authString){
        this.setState({
            authString: authString,
        })

        let cm = new ClientManager();
        let client = cm.createUsersClient();

        let req = new GetUserByIDRequest();
        req.setUserid(this.state.userid);
        return client.getUserByID(req, {'Authorization': authString}).then(res => {this.setUserInfo(res)})
    }

    /**
    * Parses a user's information from the user found in the GetUserByIDResponse
    *
    * @function callGetUserByUserID()
    * @params {String} authString The authorization string to be used for requests
    * @params {String} userID A string of the active user's ID
    * @returns {GetUserByIDResponse} res The response object to a GetUserByIDRequest
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
            finishedLoading: true,
        })
    }

  /**
   * Renders user page components.
   * @returns {UserPage}
   */
  render() {
      return (
      <SafeAreaView style={KIC_Style.outContainer}>
        <FeedHeader navigation={this.state.navigation} />
        <SafeAreaView style={styles.container}>
            {/* Display profile header with state information */}
            {(this.state.finishedLoading) ? <ProfileHeader
                authString = {this.state.authString}
                navigation = {this.state.navigation}
                myUserid = {this.state.myUserid}
                username = {this.state.username}
                userid = {this.state.userid}
                bio = {this.state.bio}
                birthDay = {this.state.birthDay}
                birthMonth = {this.state.birthMonth}
                birthYear = {this.state.birthYear}
                /> : <View></View>}

            {/* Show posts */}
            {(this.state.finishedLoading) ? <PostsGrid
                myUserid = {this.state.myUserid}
                navigation = {this.props.navigation}
                username = {this.state.username}
                userid = {this.state.userid}
                /> : <View></View>}
            <StatusBar style="auto" />
          </SafeAreaView>
      </SafeAreaView>
      );
  }
}

/**
 * @constant styles creates stylesheet for user page components
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

export default UserPage;
