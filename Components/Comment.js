/**
* @fileoverview A Comment Section of fixed height and scrollbar populated by Comments.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { GetUserByUsernameRequest } from '../gen/proto/users_pb';
import ClientManager from "../Managers/ClientManager";

/**
* @class Contains function for rendering a comment.
*/
class Comment extends React.Component {

  /*
   * Class constructor
   */
    constructor(props) {
        super();

        // Define the initial state:
        this.state = {
            // active user's userid
            myUserid: props.myUserid,

            navigation: props.navigation,
            authString: props.authString,

            // poster's username & userid
            commenterUsername: props.commenterUsername,
            commentText: props.commentText,
            commenterUserid: null,
        };

        this.initComment = this.initComment.bind(this);
        this.goToUserPage = this.goToUserPage.bind(this);
    }

    /**
    * Runs when component first loads
    *
    */
    componentDidMount(){
        this.initComment().then(response => {
          //console.log("Mounted comment successfully");
        }).catch(error => {
          console.log("Error mounting comment: " + error);
        });
    }

    /**
    * Handles making the GetUserByUsername request
    *
    * @param {String} authString the auth string to be used as part of the authorization header for requests
    * @returns {GetUserByIDResponse} res The response object from a GetUserByIDRequest
    */
    initComment() {
        let cm = new ClientManager();
        let client = cm.createUsersClient();

        let req = new GetUserByUsernameRequest();
        req.setUsername(this.props.commenterUsername);
        return client.getUserByUsername(req, {'Authorization': this.props.authString}).then(res => {this.setUserInfo(res)})
    }

    /**
    * Parses user information from a GetUserByIDResponse, updates the state, then checks for a connection
    * between this user and the active user via the GetConnectionBetweenUsersRequest
    * @param {GetUserByIDResponse} res The response object from a GetUserByIDRequest
    * @returns {GetConnectionBetweenUsersResponse} res The response object from a GetConnectionBetweenUsersRequest
    */
    setUserInfo(res){
        {/* Store user information */}
        let myid = res.getUser().getUserid();
        this.setState({
            commenterUserid: myid,
        })

        if (this.state.commenterUserid == this.state.myUserid){
            this.setState({
                isMyComment: true,
            })
        } else {
            this.setState({
                isMyComment: false,
            })
        }

    }

    /**
    * Handles navigating to the user's page, given a userid
    *
    */
    goToUserPage = () => {
        this.props.navigation.navigate('UserPage', {
          navigation: this.props.navigation,
          myUserid: this.state.myUserid,
          userid: this.state.commenterUserid,
          username: this.state.commenterUsername,
        })
    }

    /**
    * Renders comments section.
    * @returns {CommentSection}
    */
    render() {
      return (
        <View style={styles.comment}>
            <TouchableOpacity
                onPress = {this.goToUserPage}>
                <Text style={styles.textCommenterUsername}>{this.props.commenterUsername} says...</Text>
            </TouchableOpacity>

            <Text style={styles.textComment}>{this.props.commentText}</Text>
        </View>
      );
    }
}

/**
* @constant styles creates stylesheet for the Comment Section
*/
const styles = StyleSheet.create({
    comment: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 15,
        marginTop: 10,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
    },
    textCommenterUsername: {
        fontSize: 11,
        fontStyle: 'italic',
        fontWeight: "bold",
    },
    textComment: {
        fontSize: 11,
    }
});

export default Comment;