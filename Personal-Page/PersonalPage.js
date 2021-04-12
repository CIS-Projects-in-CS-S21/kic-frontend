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
 * @class Contains function for rendering the personal page.
 */
class PersonalPage extends React.Component {

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
      finishedLoading: false,
    };

    this.fetchUserInfo = this.fetchUserInfo.bind(this)

  }

  componentDidMount() {
    //this.fetchUserInfo()
    this.fetchUserInfo().then(response => {
      console.log("Success");
    }).catch(error => {
      console.log(error)
    });
  }

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

    fetchUserInfo() {
        return this.callGetAuthString();
    }
    callGetAuthString(){
        let um = new UserManager();
        return um.getAuthString().then(authString => {this.callGetUserID(um, authString)});
    }
    callGetUserID(um, authString){
        return um.getMyUserID().then(userID => {this.callGetUserByUserID(authString, userID)});
    }
    callGetUserByUserID(authString, userID){

        let cm = new ClientManager();
        let client = cm.createUsersClient();

        let req = new GetUserByIDRequest();
        req.setUserid(userID);
        return client.getUserByID(req, {'Authorization': authString}).then(res => {this.setUserInfo(res, userID)})
    }
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

  handleViewPost = () => {
    if (Platform.OS === 'web') {
      this.props.navigation.navigate('DetailedPostViewWeb', {
        username: this.state.username,
        userid: this.state.userid,
        navigation: this.props.navigation
      })
    } else {
      this.props.navigation.navigate('DetailedPostView', {
        username: this.state.username,
        userid: this.state.userid,
        navigation: this.props.navigation
      })
    }
  }

  /**
   * Gets user's posts. Returns an array of the user's posts.
   */
  fetchPosts = () => {
      // Request posts for user
  }

  /**
   * Gets a post's corresponding image to display in the grid.
   */
  fetchPostImage = () => {
      // Request the image from backend
  }

  /**
   * Renders personal page components.
   * @returns {PersonalPage}
   */
  render() {
    return (
      <SafeAreaView style={KIC_Style.outContainer}>
        <FeedHeader navigation={this.props.navigation} />
        <SafeAreaView style={styles.container}>
          <ScrollView>
            {/* Display profile header with state information */}
            <ProfileHeader
                navigation = {this.props.navigation}
                myUserid = {this.state.userid}
                username = {this.state.username}
                userid = {this.state.userid}
                bio = {this.state.bio}
                birthDay = {this.state.birthDay}
                birthMonth = {this.state.birthMonth}
                birthYear = {this.state.birthYear}
                />

            {/* Show posts */}
            {(this.state.finishedLoading) ? <PostsGrid
                myUserid = {this.state.userid}
                navigation = {this.props.navigation}
                username = {this.state.username}
                userid = {this.state.userid}
                /> : <View></View>}

            {/* NAVIGATION */}
            <TouchableOpacity
                style={KIC_Style.button}
                onPress={() => this.props.navigation.navigate('MentalHealthLog')}>
                <Text style={KIC_Style.button_font}>Mental Health Tracker</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={KIC_Style.button}
                onPress={() => this.props.navigation.navigate('Feed')}>
                <Text style={KIC_Style.button_font}>User Feed</Text>
            </TouchableOpacity>
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
