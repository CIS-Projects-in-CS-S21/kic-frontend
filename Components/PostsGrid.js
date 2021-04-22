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
* @class Contains function for rendering the posts grid.
*/
class PostsGrid extends React.Component {
  /*
   * Class constructor
    * @param {String} authString The authstring for making requests
    * @param {String} myUserid The id of the current active user
    * @param {String} userid The id of the user who owns the page that this blurb is being displayed on
   */
    constructor(props) {
        super();

        // Define the initial state:
        this.state = {
            myUserid: props.myUserid,
            username: props.username,
            userid: props.userid,
            user: null,
            authString: '',
            myFiles: [],
            finishedFetching: false,
        };
        this.callGetAuthString = this.callGetAuthString.bind(this);
    }

    /**
    * Runs when component first loads
    *
    */
    componentDidMount(){
        this.callGetAuthString().then(response => {
            console.log("Mounted posts for user id " + this.state.userid + " successfully");
        }).catch(error => {
            console.log(error)
        });
    }

    /**
    * Runs when the props change and updates the component accordingly.
    *
    */
    componentDidUpdate(prevProps) {
        if (this.props.userid !== prevProps.userid) {
            console.log("Updated postsgrid")
            this.setState({
                myUserid: this.props.myUserid,
                userid: this.props.userid,
                username: this.props.username,
                myFiles: [],
                finishedFetching: false,
            })
            this.callGetAuthString().then(response => {
                console.log("Updated with posts for user id " + this.state.userid + " successfully");
            }).catch(error => {
                console.log("Error fetching posts: " + error)
            });
        }
    }

    /**
    * Creates a UserManager to fetch the authString, then calls callGetUserByUserID
    *
    * @returns {String} authString The authorization string to be used for requests
    */
    callGetAuthString(){
        let um = new UserManager();
        return um.getAuthString().then(authString => {this.callGetUserByUserID(um, authString)});
    }

    /**
    * Gets a user by their user ID via a GetUserByIDRequest
    *
    * @params {UserManager} um The UserManager to be reused
    * @params {String} authString The authorization string to be used for requests
    * @returns {GetUserByIDResponse} res The response object to a GetUserByIDRequest
    */
    callGetUserByUserID(um, authString){
        this.setState({
            authString: authString,
        })

        let cm = new ClientManager();
        let client = cm.createUsersClient();

        console.log("For userid " + this.state.userid)
        let req = new GetUserByIDRequest();
        req.setUserid(this.state.userid);
        return client.getUserByID(req, {'Authorization': authString}).then(res => {this.getUser(cm, res)})
    }

    /**
    * Saves the user to state then fetches their files via GetFilesByMetadataRequest
    *
    * @params {ClientManager} cm The ClientManager to be reused
    * @params {GetFilesByMetadataResponse} res The response object to a GetFilesByMetadataRequest
    */
    getUser(cm, res){
        let user = res.getUser();
        this.setState({
            user: user,
        })

        // Create a new request that will search for files with metadata containing user's userid
        let req = new GetFilesByMetadataRequest();
        let desiredMap = req.getDesiredmetadataMap();
        desiredMap.set("userID", this.state.userid.toString());
        console.log("REQUESTING FILES FOR " + this.state.userid);

        let client = cm.createMediaClient();

        return client.getFilesWithMetadata(req, {'Authorization': this.state.authString}).then(res => {this.getMyFiles(cm, res)})
    }

    /**
    * Saves the user's files to state
    *
    * @params {ClientManager} cm The ClientManager to be reused
    * @params {GetFilesByMetadataResponse} res The response object to a GetFilesByMetadataRequest
    */
    getMyFiles(cm, res){

        let myfiles = res.getFileinfosList();

        this.setState({
            myFiles: myfiles,
            finishedFetching: true,
        })

        console.log("FILES FOR " + this.state.userid + ": " + myfiles);
        console.log("FILES FOR " + this.state.userid + ": " + this.state.myFiles);
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
                {(this.state.finishedFetching && (this.state.myFiles.length > 0)) ? <FlatList
                    data={this.state.myFiles}
                    renderItem={renderItem}
                    keyExtractor={file => file.filename}
                    numColumns={6}
                /> : <View><Text style = {{fontStyle: 'italic'}}>No posts to show.</Text></View>}
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