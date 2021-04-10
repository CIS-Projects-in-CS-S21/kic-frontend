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
 * @class Contains a FeedPost component, which consists of a KIC_Image, username of the poster, and image caption
 * pass in myUserid, userid, and authstring
 */
class ProfilePost extends React.Component {

    /*
      * Class constructor
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


    componentDidMount(){
      this.parseFileinfo().then(response => {
          console.log("Success");
      }).catch(error => {
          console.log(error)
      });
    }

    parseFileinfo(){
        console.log("My naem is " + this.state.file)
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

    updateState(res){
        console.log("1");
        let poster = res.getUser();
        let posterusername = poster.getUsername();

        console.log("Username: " + posterusername + " and user: " + poster);

        this.setState({
            posterusername: posterusername,
        })
    }

    /**
    * Renders a user's post
    * @returns {FeedPost}
    */
    render() {
      return (
        <View style>
            <KIC_Image
              navigation = {this.props.navigation}
              authString = {this.props.authString}
              fileInfo = {this.props.file}
            />
        </View>
      );
    }
}


export default ProfilePost;