/**
 * @fileoverview The screen for the user's feed, containing links to the
 * Explore Page and Personal Page.
 */

import React from 'react';
import { FlatList, Platform, StyleSheet, ScrollView, StatusBar, View } from 'react-native';
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
      feedFiles: [],
      myFiles: [],
      myFriends: [],
      friendsFiles: [],
    };
  }

  async componentDidMount(){
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
  callGetAuthString(){
      let um = new UserManager();
      return um.getAuthString().then(authString => {this.callGetUserID(um, authString)});
  }

  // Sets the authstring to the state and calls getMyUserID
  callGetUserID(um, authString){
      this.setState({
          authString: authString,
      })
      return um.getMyUserID().then(userID => {this.callGetUserByUserID(userID)});
  }

  // Inits GetUserByIDRequest and sends it through client
  callGetUserByUserID(userID){
      let cm = new ClientManager();
      let client = cm.createUsersClient();

      let req = new GetUserByIDRequest();
      req.setUserid(userID);
      return client.getUserByID(req, {'Authorization': this.state.authString}).then(res => {this.setUserInfo(cm, res, userID)})
  }

  // Sets the active userID to the state and then inits a GetFilesByMetadataRequest to retrieve user's own posts
  setUserInfo(cm, res, userID){
      let user = res.getUser();
      //let myusername = user.getUsername();
      this.setState({
          myUserid: userID,
          myUser: user,
      })

      // Create a new request that will search for files with metadata containing ACTIVE USER's userid
      let req = new GetFilesByMetadataRequest();
      let desiredMap = req.getDesiredmetadataMap();
      desiredMap.set("userID", this.state.myUserid);

      let client = cm.createMediaClient();


      return client.getFilesWithMetadata(req, {'Authorization': this.state.authString}).then(res => {this.setMyFilesAndGetFriends(cm, res)})
  }

  // Retrieves the array of ACTIVE USER's files from the response object and saves to state
  setMyFilesAndGetFriends(cm, res){

      let myfiles = res.getFileinfosList();

      let feedfiles = this.state.feedFiles;

      let combinedfiles = myfiles.concat(feedfiles);

      this.setState({
          myFiles: myfiles,
          feedFiles: combinedfiles,
      })

      console.log("Files for the active user id " + this.state.myUserid + ": " + this.state.myFiles);
      console.log("All feed files: " + this.state.feedFiles);
      console.log("First filename: " + this.state.feedFiles[0].getFilename());

      let client = cm.createFriendsClient();
      let req = new GetFriendsForUserRequest();
      req.setUser(this.state.myUser);

      return client.getFriendsForUser(req, {'Authorization': this.state.authString}).then(resp => {this.getFriendsFiles(cm, resp)});
  }

  getFriendsFiles(cm, resp){
      let myfriends = resp.getFriendsList();
      this.setState({
          myFriends: myfriends,
      })

      console.log("Friends for the active user id: " +this.state.myFriends);

      /* Next, we need to iterate through the state.myFriends arrays, which is an array of userIDs
       * For each userID in the array, we conduct the same GetFilesByMetadataRequest, using a desired map
       * with the "userid" set to the friend's id
      */
      
      this.state.myFriends.forEach(friend => {
        console.log("My friend is: " +friend);
        
        let req = new GetFilesByMetadataRequest();
        let desiredMap = req.getDesiredmetadataMap();
        desiredMap.set("userID", friend.toString());

        let client = cm.createMediaClient();

        client.getFilesWithMetadata(req, {'Authorization': this.state.authString}).then(result => {this.setFriendFiles(result)});
      
      });
  }

  setFriendFiles(result) {
    console.log("Result: " + result)
 
    let friendfiles = result.getFileinfosList();
    let feedfiles = this.state.feedFiles; 
    let combinedfiles = feedfiles.concat(friendfiles);
    //console.log("Result of file infos list " + foundfiles); 

    this.setState({
      feedFiles : combinedfiles
    })
    //console.log("Friend files: " + this.state.friendFiles);
    console.log("This many pictures for feed: " +this.state.feedFiles.length);
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
                        renderItem={({item}) => <FeedPost
                                                    navigation = {this.props.navigation}
                                                    authString = {this.state.authString}
                                                    myUserid = {this.props.myUserid}
                                                    file = {item}
                                                />}
                        keyExtractor={friend => friend.userid}
                    />
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
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flex: 1,
  },
  feedPost: {
    marginTop: 30
  }
});

export default UserFeed;
