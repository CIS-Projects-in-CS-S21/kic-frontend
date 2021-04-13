/**
* @fileoverview The PostsGrid component is a reusable component used to display a given user's
* posts in a grid format. Automatically wraps content to next line depending on screen size.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View, Image, Modal, Button, FlatList, TouchableOpacity } from 'react-native';
import ProfilePost from "../Personal-Page/ProfilePost";
import { GetUserByIDRequest, GetUserByUsernameRequest, UpdateUserInfoRequest } from '../gen/proto/users_pb';
import { GetFilesByMetadataRequest } from "../gen/proto/media_pb";
import ClientManager from "../Managers/ClientManager";
import UserManager from '../Managers/UserManager';

/**
* @class Contains function for rendering the posts grid. Takes in a username and userid
*/
class PostsGrid extends React.Component {
    /*
    * Class constructor
    */
    constructor(props) {
        super();

        // Define the initial state:
        this.state = {
            username: props.username,
            userid: props.userid,
            user: null,
            authString: '',
            myFiles: [],
            finishedFetching: false,
        };
        this.callGetAuthString = this.callGetAuthString.bind(this);
    }

    componentDidMount(){
      this.callGetAuthString().then(response => {
          console.log("Mounted profile success");
      }).catch(error => {
          console.log(error)
      });
    }

    callGetAuthString(){
        let um = new UserManager();
        return um.getAuthString().then(authString => {this.callGetUserByUserID(um, authString)});
    }
    callGetUserByUserID(um, authString){
        this.setState({
            authString: authString,
        })

        let cm = new ClientManager();
        let client = cm.createUsersClient();

        console.log("For userid " + this.props.userid)
        let req = new GetUserByIDRequest();
        req.setUserid(this.props.userid);
        return client.getUserByID(req, {'Authorization': authString}).then(res => {this.getUser(cm, res)})
    }

    // Sets the active userID to the state and then inits a GetFilesByMetadataRequest to retrieve user's own posts
    getUser(cm, res){
        let user = res.getUser();
        this.setState({
            user: user,
        })

        // Create a new request that will search for files with metadata containing user's userid
        let req = new GetFilesByMetadataRequest();
        let desiredMap = req.getDesiredmetadataMap();
        desiredMap.set("userID", this.props.userid);

        let client = cm.createMediaClient();

        return client.getFilesWithMetadata(req, {'Authorization': this.state.authString}).then(res => {this.getMyFiles(cm, res)})
    }

    // Retrieves the array of user's files from the response object and saves to state
    getMyFiles(cm, res){

        let myfiles = res.getFileinfosList();

        this.setState({
            myFiles: myfiles,
            finishedFetching: true,
        })

        console.log("FILES FOR " + this.state.userid + ": " + myfiles);
        console.log("FILES FOR " + this.state.userid + ": " + this.state.myFiles);

        //console.log("Files for the active user id " + this.state.myUserid + ": " + this.state.myFiles);
        //console.log("All feed files: " + this.state.feedFiles);
        //console.log("First filename: " + this.state.feedFiles[0].getFilename());
    }

    /**
    * Renders a grid of the user's posts
    * @returns {PostsGrid}
    */
    render() {
        {/* Function for rendering comments */}
        const renderItem = ({ item }) => (
            <ProfilePost
                navigation = {this.props.navigation}
                myUserid = {this.state.myUserid}
                authString = {this.state.authString}
                file = {item}
                filename = {item.filename}
            />
        );
        return (
            <View style ={styles.postGrid}>
                {(this.state.finishedFetching) ? <FlatList
                    data={this.state.myFiles}
                    renderItem={renderItem}
                    keyExtractor={file => file.filename}
                    numColumns={3}
                /> : <View></View>}
            </View>
        );
    }
}

/**
* @constant styles creates stylesheet for the PostsGrid component
*/
const styles = StyleSheet.create({
  postGrid: {
    backgroundColor: '#b3d2db',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  postImage: {
    width: 300,
    height: 300,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    resizeMode: 'contain',
  },
});

export default PostsGrid;