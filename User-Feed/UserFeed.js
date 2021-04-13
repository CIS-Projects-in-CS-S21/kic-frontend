/**
 * @fileoverview The screen for the user's feed, containing links to the
 * Explore Page and Personal Page.
 */

import React from 'react';
import { FlatList, Platform, StyleSheet, ScrollView, StatusBar, View , Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeedHeader from '../Components/FeedHeader';
import FeedPost from '../Components/FeedPost';
import KIC_Style from '../Components/Style';
import { GetUserByIDRequest, GetUserByUsernameRequest, UpdateUserInfoRequest } from '../gen/proto/users_pb';
import { GetFilesByMetadataRequest } from "../gen/proto/media_pb";
import { GetFriendsForUserRequest } from "../gen/proto/friends_pb";
import { GenerateFeedForUserRequest } from "../gen/proto/feed_pb"
import TokenManager from "../Managers/TokenManager";
import ClientManager from "../Managers/ClientManager";
import UserManager from '../Managers/UserManager';


/**
 * @class Contains function for rendering the user feed.
 */
class UserFeed extends React.Component {
  /*
   * Class constructor
   */
  constructor(props) {
    super();

    // Define the initial state:
    this.state = {
      myUser: null,
      myUserid: '',
      authString: '',
      feedFiles: []
    };
  }

  async componentDidMount() {
      this.fetchUserInfo().then(response => {
        console.log("Mounted userfeed success");
      }).catch(error => {
        console.log(error)
      });
  }


  // Starts the process of fetching active user info.
  fetchUserInfo() {
    return this.callGetAuthString();
  }

  // Uses UserManager to fetch authstring then calls callgetUserID
  callGetAuthString() {
    let um = new UserManager();
    return um.getAuthString().then(authString => { this.callGetUserID(um, authString) });
  }

  // Sets the authstring to the state and calls getMyUserID
  callGetUserID(um, authString) {
    this.setState({
      authString: authString,
    })
    return um.getMyUserID().then(userID => { this.callGetUserByUserID(userID) });
  }

  // Inits GetUserByIDRequest and sends it through client
  callGetUserByUserID(userID) {
    let cm = new ClientManager();
    let client = cm.createUsersClient();

    let req = new GetUserByIDRequest();
    req.setUserid(userID);
    return client.getUserByID(req, { 'Authorization': this.state.authString }).then(res => { this.setUserInfo(cm, res, userID) })
  }

  // Sets the active userID to the state and then inits a GetFilesByMetadataRequest to retrieve user's own posts
  setUserInfo(cm, res, userID) {
    let user = res.getUser();
    //let myusername = user.getUsername();
    this.setState({
      myUserid: userID,
      myUser: user,
      feedFiles : []
    })

    // Create a new request that will create a stream for files for ACTIVE USERS userid
    let req = new GenerateFeedForUserRequest();
    req.setUserid(this.state.myUserid);

    let client = cm.createFeedClient();

    let stream = client.generateFeedForUser(req, { 'Authorization': this.state.authString });
    //Take stream of files, store them to the file posts array
    stream.on('data', function (response) {
      //console.log(response);
      //console.log(response.getFileinfo()); 

      let file = response.getFileinfo(); 
      console.log("Files: " + file);
      let files = this.state.feedFiles; 
      let combinedfiles = files.concat(file);
      
      this.setState({
        feedFiles : combinedfiles
      })

    }.bind(this));

    //Prints and handles errors
    stream.on('status', function (status) {

    });

    //When stream is over
    stream.on('end', function (end) {

    });
  }


  /**
   * Renders user feed components.
   * @returns {Component}
   */

  render() {
    return (
      <SafeAreaView style={KIC_Style.outContainer}>
        <FeedHeader navigation={this.props.navigation} />
        <SafeAreaView style={styles.container}>
          <ScrollView>
            {/* FlatList that renders a UserBlurb per user in the friend list */}
            <FlatList
              style={styles.listcontainer}
              data={this.state.feedFiles}
              renderItem={({ item }) => <FeedPost
                navigation={this.props.navigation}
                authString={this.state.authString}
                myUserid={this.state.myUserid}
                file={item}
              />}
              keyExtractor={friend => friend.userid}
            />
            <Text>End of feed!</Text>
            <StatusBar style="auto" />
          </ScrollView>
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

/**
 * @constant styles creates stylesheet for the user feed
 */
const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        top: 30,
        marginBottom: 30,
      },
      android: {
        top: 30,
        marginBottom: 30,
      },
      default: {
        top: 60,
        marginBottom: 60,
      }
    }),
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flex: 1,
  },
  feedPost: {
    marginTop: 30
  }
});

export default UserFeed;
