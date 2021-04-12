/**
 * @fileoverview The screen for the Detailed View of a post, which is accessed when clicking on a post.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, TextInput, View, Image, Modal, Button, Pressable, TouchableOpacity } from 'react-native';
import KIC_Style from "../Components/Style";
import {SafeAreaView} from 'react-native-safe-area-context';
import PostDetails from "./PostDetails";
import CommentSection from "./CommentSection";
import FeedHeader from '../Components/FeedHeader';
import ClientManager from "../Managers/ClientManager";
import { DeleteFilesWithMetaDataRequest, UpdateFilesWithMetadataRequest } from "../gen/proto/media_pb";
import { GetUserByIDRequest } from '../gen/proto/users_pb';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * @class Contains function for rendering the detailed post view.
 */
class DetailedPostViewWeb extends React.Component {

  /*
   * Class constructor
   */
    constructor(props) {
        super();

        // Define the initial state:
        this.state = {
            // active user's userid & authstring
            myUserid: props.route.params.myUserid,
            myUsername: 'default',
            authString: props.route.params.authString,
            navigation: props.route.params.navigation,

             // poster's userid and username
            userid: props.route.params.userid,
            username: props.route.params.username,

            // image info
            yearPosted: 0,
            monthPosted: 0,
            dayPosted: 0,
            fileinfo: props.route.params.fileinfo,
            filename: '',
            comments: [],
            metadata: [],
            imageSrc: props.route.params.imageSrc,
            caption: 'Default caption',

            finishedInit: false,
            isMyPost: false,

            // For comment adding
            comment: {},
            commentText: '',
            commentID: '',
            commenterUsername: '',
        };
        this.initPostView = this.initPostView.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleAddComment = this.handleAddComment.bind(this)
    }

    async componentDidMount() {
      await this.initPostView();
    }

    initPostView() {
        console.log("Web");
        console.log("My id: " + this.state.myUserid + " // poster id: " + this.state.userid);

        // Check if this is the active user's own post
        if (this.state.myUserid == this.state.userid){
            this.setState({
                isMyPost: true,
            })
        } else {
            this.setState({
                isMyPost: false,
            })
        }

        // Month name strings
        let monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];

        this.setState({
            filename: this.state.fileinfo.getMetadataMap().get("filename"),
            comments: this.state.fileinfo.getMetadataMap().get("comments"),
            yearPosted: this.state.fileinfo.getDatestored().getYear().toString(),
            monthPosted: monthNames[this.state.fileinfo.getDatestored().getMonth()],
            dayPosted: this.state.fileinfo.getDatestored().getDay().toString(),
            caption: this.state.fileinfo.getMetadataMap().get("caption"),
            finishedInit: true,
        })

        // Get active user's username
        let cm = new ClientManager();
        let client = cm.createUsersClient();
        let req = new GetUserByIDRequest();
        req.setUserid(this.state.myUserid);
        return client.getUserByID(req, {'Authorization': this.state.authString}).then(res => {this.setMyUsername(res)})
    }

    setMyUsername(res){
        let myusername = res.getUser().getUsername();
        this.setState({
            myUsername: myusername,
        })
        console.log("active user's username is: " + this.state.myUsername);
    }

    handleDelete() {
        let cm = new ClientManager();
        let client = cm.createMediaClient();
        let req = new DeleteFilesWithMetaDataRequest();
        let map = req.getMetadataMap();
        console.log("My filename is " + this.state.fileinfo.getMetadataMap().get("filename"));
        map.set("filename", this.state.fileinfo.getMetadataMap().get("filename"));

        return client.deleteFilesWithMetaData(req, {'Authorization': this.state.authString}).then(res => {this.redirectUser});
    }

    redirectUser(res) {
        alert("Post deleted!");
        this.props.navigation.navigate('Profile');
    }

   setCommentText = (text) => {
      this.setState({ commentText: text })
      //console.log("Comment: " + this.state.commentText);
   }

    async handleAddComment() {
        await this.randomizeCommentID();

        let commenterusername = this.state.myUsername;
        this.setState({
            commenterUsername: commenterusername,
            comments: this.state.fileinfo.getMetadataMap().get("comments"),
        })

        // Log new comment
        console.log("Comment: " + this.state.commentText + " // comment id: " + this.state.commentID + " // commenter: " + this.state.commenterUsername);

        // Create a Comment object with commentID, commenterUsername, and commentTest as keys
        let comment = {
            commentID: this.state.commentID,
            commenterUsername: this.state.commenterUsername,
            commentText: this.state.commentText,
          }

        // Create an array containing the single new comment
        let comments = [];
        comments.push(comment);

        // OVERWRITE METHOD - if overwriting, concatenate old and new comments manually and set desiredmap to updatedComments, not comments
        // Concatenate the current state.comments with the new comments -- adds new comment to comments array
        // We have to concat and not just setState due to state array immutability
        // updatedComments should be an array of the previous comments and the newly added comment
        let oldComments = this.state.comments;
        let updatedComments = oldComments.concat(comments);


        // Checks: all 3 should be the same id (not undefined)
        console.log("comment id: " + comment.commentID);
        console.log("comment id from comment map: " + comments[0].commentID);
        // updatedComments logs undefined - it looks like this.state.comments is undefined for some reason?
        console.log("comment id from concatenated comment map: " + updatedComments[0].commentID);

        // Set state.comments to the updatedComments array. Allows updated comments to show up onscreen
        this.setState({
            comments: updatedComments,
        })

        // Send update file request
        let cm = new ClientManager();
        let client = cm.createMediaClient();
        let req = new UpdateFilesWithMetadataRequest();

        // Search for this file using its unique filename
        let filtermap = req.getFiltermetadataMap();
        filtermap.set("filename", this.state.fileinfo.getMetadataMap().get("filename"));

        // Overwrite the previous comments array (since we manually concatenate the new and old comments above)
        req.setUpdateflag(1);

        // Set the map to be updated -- we are updating the comments array with the updatedComments array
        let desiredmap = req.getDesiredmetadataMap();
        desiredmap.set("comments", updatedComments);

        // Send the request and print the # of files updated
        return client.updateFilesWithMetadata(req, {'Authorization': this.state.authString}).then(res => {console.log("Result: " + res)});
    }

    async randomizeCommentID() {
      let string = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
      this.setState({
        commentID: string,
      })
    }

  /**
   * Renders the DetailedPostView components.
   * @returns a {DetailedPostView}
   */
  render() {
    return (
      <SafeAreaView style={KIC_Style.outContainer}>
        <FeedHeader navigation={this.props.navigation} />
        <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 10, }}>
            {(this.state.finishedInit) ? <View style={styles.container}>
                <Image
                    style={styles.postImage}
                    source = {this.state.imageSrc}
                    />

                <View style={styles.detailsAndComments}>
                    {/* Pass parent's (DetailedPostView) state data to the child (PostDetails) */}
                    <PostDetails
                        userID = {this.state.userid}
                        username = {this.state.username}
                        yearPosted = {this.state.yearPosted}
                        monthPosted = {this.state.monthPosted}
                        dayPosted = {this.state.dayPosted}
                        caption = {this.state.caption}
                    />

                    {/* Only show display button if this is active user's own post */}
                    {(this.state.isMyPost) ? <TouchableOpacity
                        onPress = {this.handleDelete}>
                            <Text style = {{ textAlign: 'right', fontSize: 10, fontStyle: 'italic', color: '#707070', }} >Delete post</Text>
                    </TouchableOpacity> : <View></View>}

                    <View style={{ flex: 1, height: 200 }}>
                        <CommentSection
                            comments = {this.state.comments}
                        />
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            style={KIC_Style.commentInput}
                            textAlign = {'center'}
                            onChange={(e) => this.setCommentText(e.nativeEvent.text)}
                            placeholder="Leave a comment . . ."
                        />
                        <TouchableOpacity
                            onPress = {this.handleAddComment}>
                            <Ionicons name="chatbubble-ellipses-outline" color='#ffff' size={25} />
                        </TouchableOpacity>
                    </View>
                    <StatusBar style="auto" />
                </View>

            </View> : <View></View>}
        </View>
      </SafeAreaView>
    );
  }
}

/**
 * @constant styles creates stylesheet for an individual DetailedPostView's components.
 */
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    width: '60%',
    backgroundColor: '#b3d2db',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    marginTop: 20,
    paddingRight: 15,
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
  },
  detailsAndComments: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
    padding: 10,
  },
  postImage: {
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    width: 475,
    height: 475,
  }
});

export default DetailedPostViewWeb;