/**
* @fileoverview The FeedPost file holds the content of a user's post for the user feed. 
This includes a user handle at top, image in middle, and user handle and caption at the bottom. 
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import KIC_Image from "./KIC_Image";
import { GetUserByIDRequest } from '../gen/proto/users_pb';
import ClientManager from "../Managers/ClientManager";

/**
* @class Contains function for rendering a post
*/
class FeedPost extends React.Component {
    /**
    * Renders a user's post
    * @returns {FeedPost}
    */


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
      //console.log("My name is " + this.state.file)
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
    render() {
      return (
        <View style ={styles.feedPost}>
          {/* Handle of user who posted image */}
            <Text style = {styles.headerHandle}>@{this.state.posterusername}</Text>
            {/* Image of post */}
            <KIC_Image
              authString = {this.props.authString}
              navigation = {this.props.navigation}
              fileInfo = {this.props.file}
              userid = {this.state.posterid}
              myUserid = {this.props.myUserid}
            />
            {/* Handle of user who posted image and caption */}
            <Text style = {styles.bottomText}>@{this.state.posterusername}: {this.state.caption}</Text>
        </View>
      );
    }
}

/**
* @constant styles creates stylesheet for the PostsGrid component
*/
const styles = StyleSheet.create({
  feedPost: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
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
  headerHandle: {
    alignSelf: 'auto'
  },
  postImage: {
    borderWidth: 5, 
    borderColor: 'black', 
    width: 350,
    height: 350,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  bottomText: {
    alignSelf: 'auto'
  },
});

export default FeedPost;