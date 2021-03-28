/**
 * @fileoverview The screen for the user's personal page, containing links
 * to the Mental Health Log page and User Feed.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';
import KIC_Style from "../Components/Style";
import ProfileHeader from "../Components/ProfileHeader";
import PostsGrid from "../Components/PostsGrid";
import MyUser from "../Components/MyUser";
import { GetUserByIDRequest, GetUserByUsernameRequest, UpdateUserInfoRequest } from '../gen/proto/users_pb';
import TokenManager from '../User-Authentication/TokenManager';
import UsersClientManager from '../User-Authentication/UsersClientManager';

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
      username: "default",
      bio: "bio",
      birthDay: 0,
      birthMonth: 0,
      birthYear: 0,
    };

    this.fetchUserInfo = this.fetchUserInfo.bind(this)

  }

  componentDidMount(){
      this.fetchUserInfo()
  }

  fetchUserInfo(){
    {/* Init UsersClientManager & get client */}
    let ucm = new UsersClientManager();
    let client = ucm.createClient();

    {/* Init token manager */}
    let tm = new TokenManager();

    {/* Init request for GetUserByIDRequest*/ }
    let req = new GetUserByIDRequest();

    {/* Get JWT from storage and use for authorization */}
    let authString = "Bearer "
    tm.getToken().then(value => {
        authString += value

        let extra = value.split(".")[0]
        let token = value.split(".")[1]

        //console.log(atob(extra))
        console.log(atob(token))

        var tokenObj = JSON.parse(atob(token));
        console.log('User ID: ' + tokenObj.uid);
        this.userID = tokenObj.uid;
        req.setUserid(tokenObj.uid);

        {/* Use token to make request */}
        client.getUserByID(req, {'Authorization': authString}).then(res => {
            console.log("User: " + res);

            {/* Store user information */}
            let myusername = res.getUser().getUsername();
            let bday = res.getUser().getBirthday().toString();
            let mybirthyear = bday.split(",")[0];
            let mybirthmonth = bday.split(",")[1];
            let mybirthday = bday.split(",")[2]
            let mycity = res.getUser().getCity();
            let mybio = res.getUser().getBio();
            console.log("This user's bio is: " + res.getUser().getBio());
            console.log("The bio this page is displaying is: " + mybio);

            this.setState({
                username: myusername,
                bio: mybio,
                city: mycity,
                birthDay: mybirthday,
                birthMonth: mybirthmonth,
                birthYear: mybirthyear,
            })

        }).catch(e => {
            console.log(e);
            alert("Could not get username.")
        });

    }, reason => {
        console.log(reason)
    });
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
        <View style={styles.container}><ScrollView>

            {/* Display profile header with state information */}
            <ProfileHeader
                username = {this.state.username}
                bio = {this.state.bio}
                birthDay = {this.state.birthDay}
                birthMonth = {this.state.birthMonth}
                birthYear = {this.state.birthYear}
                />

            {/* Show posts */}
            <PostsGrid />

            {/* NAVIGATION */}
              <Button
                title = "Friends!"
                onPress = {() =>
                    this.props.navigation.navigate('FriendsPage')
                }
              />
              <Button
                title = "View a post"
                onPress = {() =>
                    this.props.navigation.navigate('DetailedPostView')
                }
              />
              <Button
                title = "Mental Health Tracker!"
                onPress = {() =>
                    this.props.navigation.navigate('MentalHealthLog')
                }
              />
              <Button
                title = "User Feed!"
                onPress = {() =>
                    this.props.navigation.navigate('Feed')
                }
              />
              <StatusBar style="auto" />
        </ScrollView></View>
      );
  }
}

/**
 * @constant styles creates stylesheet for personal page components
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flex: 1,
  },
});

export default PersonalPage;
