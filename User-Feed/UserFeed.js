/**
 * @fileoverview The screen for the user's feed
 */

import React from 'react';
import { FlatList, Platform, StyleSheet, ScrollView, StatusBar, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeedHeader from '../Components/FeedHeader';
import FeedPost from '../Components/FeedPost';
import KIC_Style from '../Components/Style';
import { GetUserByIDRequest, GetUserByUsernameRequest, UpdateUserInfoRequest } from '../gen/proto/users_pb';
import { GenerateFeedForUserRequest } from "../gen/proto/feed_pb"
import ClientManager from "../Managers/ClientManager";
import UserManager from '../Managers/UserManager';


/**
 * @class Contains function for rendering the user feed.
 */
class UserFeed extends React.Component {
  /**
   * Class constructor
   * @param {String} myUserid The id of the current active user
   * @param {User} myUser defaults to null, is current user
   * @param {Array} feedFiles contains files of userfeed
   * @param {boolean} finishedLoading default set to false and is set to true when loading is finished
   */
  constructor(props) {
    super();

    // Define the initial state:
    this.state = {
      myUser: null,
      myUserid: '',
      authString: '',
      feedFiles: [],
      finishedLoading: false,
      triggers: [],
    };
    this.parseTriggers = this.parseTriggers.bind(this);
  }

  /**
  * Runs when component first loads
  *
  */
  async componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.setState({
        finishedLoading: false,
      })
      this.fetchUserInfo().then(response => {
        //console.log("Mounted userfeed success");
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
  * Calls callGetAuthString. Starts the process of fetching active user info.
  *
  */
  fetchUserInfo() {
    return this.callGetAuthString();
  }

  /**
  * Creates a UserManager to fetch the authString, then calls callGetUserID
  *
  * @returns {String} authString The authorization string to be used for requests
  */
  callGetAuthString() {
    let um = new UserManager();
    return um.getAuthString().then(authString => { this.callGetUserID(um, authString) });
  }

  /**
  * Saves authString to state then calls getUserByID
  *
  * @params {UserManager} um The UserManager to be reused
  * @params {String} authString The authorization string to be used for requests
  * @returns {String} userID A string of the active user's ID
  */
  callGetUserID(um, authString) {
    this.setState({
      authString: authString,
    })
    return um.getMyUserID().then(userID => { this.callGetUserByUserID(userID) });
  }

  /**
  * Gets a user by their user ID via a GetUserByIDRequest
  *
  * @params {String} userID A string of the active user's ID
  * @returns {GetUserByIDResponse} res The response object to a GetUserByIDRequest
  */
  callGetUserByUserID(userID) {
    let cm = new ClientManager();
    let client = cm.createUsersClient();

    let req = new GetUserByIDRequest();
    req.setUserid(userID);
    return client.getUserByID(req, { 'Authorization': this.state.authString }).then(res => { this.setUserInfo(cm, res, userID) })
  }

  /**
  * Parses user's info from the GetUserByIDResponse and then inits a GetFilesByMetadataRequest to retrieve user's own posts
  *
  * @params {ClientManager} cm The ClientManager to reuse
  * @params {GetUserByIDResponse} res The response object to a GetUserByIDRequest
  * @params {String} userID A string of the active user's ID
  * @returns {GenerateFeedForUserResponse} res The response object to a GenerateFeedForUserRequest
  */
  setUserInfo(cm, res, userID) {
    let user = res.getUser();
    //let myusername = user.getUsername();
    this.setState({
      myUserid: userID,
      myUser: user,
      feedFiles: []
    })

    this.parseTriggers()
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
      let files = this.state.feedFiles;
      //console.log("Files: " + file);
      let fileTriggers = file.getMetadataMap().get('trigger');
      let triggersNoCommas = fileTriggers.replace(",", " ");
      let triggersParsed = triggersNoCommas.split(/[' ',',',//]/);
      triggersParsed = triggersParsed.filter(e => e !== '');
      fileTriggers = triggersParsed; 
      //console.log("Got triggers: " + fileTriggers);
      if (fileTriggers == '' || fileTriggers == null) {
        //console.log("A file has no triggers, adding to feed");
        let combinedfiles = files.concat(file);
        this.setState({
          feedFiles: combinedfiles,
        })
      } else {
        //console.log("This file has triggers, lets check if they match")
        fileTriggers.forEach(trigger => {
          //console.log("Do our triggers, " + this.state.triggers + " match this trigger: " + trigger);
          if (!this.state.triggers.includes(trigger)) {
            //console.log("It doesnt include it! Adding to feed");
            let combinedfiles = files.concat(file);
            this.setState({
              feedFiles: combinedfiles,
            })
          } else {
            //console.log("A file had " + fileTriggers + ", not adding to feed");
          }
        });
      }



    }.bind(this));

    //Prints and handles errors
    stream.on('status', function (status) {

    });

    //When stream is over
    stream.on('end', function (end) {
      this.setState({
        finishedLoading: true,
      })
    }.bind(this));
  }


  /**
   * @constant parseTriggers parse triggers from text input (given in //trigger format)
   * @returns triggersParsed array of parsed triggers
   */
  parseTriggers = () => {
    let triggerString = this.state.myUser.getTriggers();
    let triggersNoCommas = triggerString.replace(",", " ");
    let triggersParsed = triggersNoCommas.split(/[' ',',',//]/);
    triggersParsed = triggersParsed.filter(e => e !== '');
    this.state.triggers = triggersParsed;
    console.log(triggersParsed);
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
          {(this.state.finishedLoading) ? <ScrollView>
            {/* FlatList that renders a FeedPost per post in feed */}
            <FlatList
              style={styles.listcontainer}
              data={this.state.feedFiles}
              renderItem={({ item }) => <FeedPost
                navigation={this.props.navigation}
                authString={this.state.authString}
                myUserid={this.state.myUserid}
                accountTriggers={this.state.triggers}
                file={item}
              />}
              keyExtractor={friend => friend.userid}
            />
            <StatusBar style="auto" />
          </ScrollView> : <View></View>}
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
