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
    /*
    * Class constructor
    */
     constructor(props) {
      super();

      // Define the initial state
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

          //account triggers
          accountTriggers: props.accountTriggers,

          //assume does not have banned triggers
          hasBannedTriggers: false,

          //triggers
          triggers: [],

          //triggerstring
          triggerString: "",

          finishedUpdating: false,
      };

      this.parseFileinfo = this.parseFileinfo.bind(this)
  }

    /**
    * Runs when component first loads
    *
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
     * post condition: updateState of reponse
    */
  parseFileinfo(){
      //console.log("My name is " + this.state.file)
      let map = this.state.file.getMetadataMap();
      let posterid = map.get("userID");
      let caption = map.get("caption");

      //get triggers associated with image
      let triggerString = map.get("trigger");
      let triggersNoCommas = triggerString.replace(",", " ");
      let triggersParsed = triggersNoCommas.split(/[' ',',',//]/);
      triggersParsed = triggersParsed.filter(e => e !== '');


      if (triggersParsed.some(v => this.state.accountTriggers.includes(v))) {
          this.setState({
            hasBannedTriggers: true
          })
      }

      this.setState({
          caption: caption,
          posterid: posterid,
          metadata: map,
          triggers: triggersParsed,
          triggerString: triggerString
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
     * precondition: parseFileInfo
    */
  updateState(res){
      console.log("1");
      let poster = res.getUser();
      let posterusername = poster.getUsername();

      console.log("Username: " + posterusername + " and user: " + poster);

      this.setState({
          posterusername: posterusername,
          finishedUpdating: true,
      })
  }

    /**
    * Renders a user's post
    * @returns {FeedPost}
    */
    render() {
      return (
        <View style ={styles.feedPost}>
          {/* Handle of user who posted image */}
            {!this.state.hasBannedTriggers && <Text style = {styles.headerHandle}>@{this.state.posterusername}</Text>}
            {/* Image of post */}
            { (this.state.finishedUpdating && !this.state.hasBannedTriggers) ? <KIC_Image
              authString = {this.props.authString}
              navigation = {this.props.navigation}
              fileInfo = {this.props.file}
              userid = {this.state.posterid}
              username = {this.state.posterusername}
              myUserid = {this.props.myUserid}
            /> : <View></View>}
            {/* Handle of user who posted image and caption */}
            {!this.state.hasBannedTriggers && <Text style = {styles.bottomText}>@{this.state.posterusername}: {this.state.caption}</Text>}
            {!this.state.hasBannedTriggers && <Text style={styles.bottomText}> triggers: {this.state.triggerString}</Text>}
        </View>
      );
    }
}

/**
* @constant styles creates stylesheet for the FeedPost component
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