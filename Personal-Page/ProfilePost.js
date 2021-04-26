/**
* @fileoverview The FeedPost file holds the content of a user's post for the user feed.
This includes a user handle at top, image in middle, and user handle and caption at the bottom.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import KIC_Image from "../Components/KIC_Image";
import { GetUserByIDRequest } from '../gen/proto/users_pb';
import ClientManager from "../Managers/ClientManager";

/**
 * @class Contains a ProfilePost component
 */
class ProfilePost extends React.Component {

    /**
     * Class constructor
     * @param {String} authString The authstring for making requests
     * @param {String} myUserid The id of the current active user
     * @param {String} posterID The id of poster
     * @param {String} posterusername The username of the poster
     * @param {String} userid The id of the user who is on the friendslist
     * @param {File} file The name of the file to be displayed
     * @param {String} caption caption associated with image
     * @param {String} filename name of image file
     */
    constructor(props) {
        super();

        // Define the initial state; pro
        this.state = {
            // ID of the current active user
            myUserid: props.myUserid,

            // ID of the poster
            posterid: 0,

            // Username of the poster
            posterusername: "default",

            // Authstring
            authString: props.authString,

            // The File object to be displayed
            file: props.file,

            // The image caption
            caption: "Caption",

            filename: props.filename,
        };

        this.parseFileinfo = this.parseFileinfo.bind(this)
    }

    /**
    * Runs when component first loads
    * postcondition: parseFileInfo()
     * @exception error caught if parseFileInfo does not work correctly
    */
    componentDidMount(){
      this.parseFileinfo().then(response => {
          console.log("Success");
      }).catch(error => {
          console.log(error)
      });
    }

    /**
    * Parses the File to be displayed by this component
    * @returns {GetUserByIDResponse} res The response object to a GetUserByIDRequest
     * precondition: componentDidMount()
     * postcondition: updateState()
    */
    parseFileinfo(){
        let map = this.state.file.getMetadataMap();
        let posterid = map.get("userID");
        let caption = map.get("caption");

        this.setState({
            caption: caption,
            posterid: posterid,
            metadata: map,
        })

        let cm = new ClientManager();
        let client = cm.createUsersClient();

        let req = new GetUserByIDRequest();
        req.setUserid(posterid);

        return client.getUserByID(req, {'Authorization': this.state.authString}).then(res => {this.updateState(res)});
    }

    /**
    * Updates the state with the parsed information
    * @params {GetUserByIDResponse} res The response object to a GetUserByIDRequest
     * precondition: parseFileInfo()
    */
    updateState(res){
        let poster = res.getUser();
        let posterusername = poster.getUsername();

        this.setState({
            posterusername: posterusername,
        })
    }

    /**
    * Renders a profile post
    * @returns {ProfilePost}
    */
    render() {
      return (
        <View>
            <KIC_Image
              navigation = {this.props.navigation}
              authString = {this.props.authString}
              myUserid = {this.props.myUserid}
              userid = {this.state.posterid}
              username = {this.state.posterusername}
              fileInfo = {this.props.file}
            />
        </View>
      );
    }
}


export default ProfilePost;