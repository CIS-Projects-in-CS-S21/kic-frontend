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
import { Video, AVPlaybackStatus } from 'expo-av';
import Filter from 'bad-words';

/**
 * @class Contains function for rendering the detailed post view.
 */
class DetailedPostViewWeb extends React.Component {

  /*
   * Class constructor
    * @param {String} authString The authstring for making requests
    * @param {useNavigation} navigation The navigation prop used to navigate between pages
    * @param {String} myUserid The id of the current active user
    * @param {String} userid The id of this file's poster
    * @param {String} username The username of this file's poster
    * @param {File} fileinfo The File object to be displayed in this postview
    * @param {Array} comments The array of comments to be displayed in this postview
    * @param {String} imageSrc The uri of the image to be displayed in this postview
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
            comments: props.route.params.fileinfo.getMetadataMap().get("comments"),
            metadata: [],
            imageSrc: props.route.params.imageSrc,
            isVideo: false,
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

    /**
    * Runs when component first loads
    *
    * @function componentDidMount()
     * precondition: initPostView waits for init post view to start
    */
    async componentDidMount() {
      await this.initPostView();
    }

    /**
    * Handles initiating the post view
    * @function initPostView
    * @returns {GetUserByIDResponse} res The response object to a GetUserByIDRequest
     * post condition: getUserByUserID
    */
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

        // Extract metadata info
        this.setState({
            filename: this.state.fileinfo.getMetadataMap().get("filename"),
            yearPosted: this.state.fileinfo.getDatestored().getYear().toString(),
            monthPosted: monthNames[this.state.fileinfo.getDatestored().getMonth()],
            dayPosted: this.state.fileinfo.getDatestored().getDay().toString(),
            caption: this.state.fileinfo.getMetadataMap().get("caption"),
            finishedInit: true,
        })

        // Only parse if there are comments to avoid error
        if (this.state.comments.length > 0){
            this.setState({
                comments: JSON.parse(this.state.fileinfo.getMetadataMap().get("comments")),
            })
        }

        //determines if media is video or not
        if (this.state.fileinfo.getMetadataMap().get("format") == "video") {
            this.setState({
                isVideo: true
            })
        }
        // Get active user's username
        let cm = new ClientManager();
        let client = cm.createUsersClient();
        let req = new GetUserByIDRequest();
        req.setUserid(this.state.myUserid);
        return client.getUserByID(req, {'Authorization': this.state.authString}).then(res => {this.setMyUsername(res)})
    }

    /**
    * Handles updating the myUsername state variable
    * @function handleDelete
    * @params {GetUserByIDResponse} res The response object to a GetUserByIDRequest
    */
    setMyUsername(res){
        let myusername = res.getUser().getUsername();
        this.setState({
            myUsername: myusername,
        })
    }

    /**
    * Handles deleting a post via a DeleteFilesWithMetaDataRequest
    * @function handleDelete
    * @returns {DeleteFilesWithMetaDataResponse} res The response object to a DeleteFilesWithMetaDataRequest
     * post condition: deleteFilesWithMetadata deletes files as necessary
    */
    handleDelete() {
        let cm = new ClientManager();
        let client = cm.createMediaClient();
        let req = new DeleteFilesWithMetaDataRequest();
        let map = req.getMetadataMap();
        //console.log("My filename is " + this.state.fileinfo.getMetadataMap().get("filename"));
        map.set("filename", this.state.fileinfo.getMetadataMap().get("filename"));

        return client.deleteFilesWithMetaData(req, {'Authorization': this.state.authString}).then(res => {this.redirectUser(res)});
    }

    /**
    * Handles redirecting user after a post is deleted
    * @function redirectUser
    * @params {DeleteFilesWithMetaDataResponse} res The response object to a DeleteFilesWithMetaDataRequest
    */
    redirectUser(res) {
        console.log("Deleted post");
        //alert("Post deleted!");
        this.props.navigation.goBack();
    }

    /**
    * Handles updating the comment state variable
    * @function setCommentText
    */
   setCommentText = (text) => {
      this.setState({ commentText: text })
      //console.log("Comment: " + this.state.commentText);
   }

    /**
    * An async function that handles adding a comment to a file
    * @function handleAddComment
    * @returns {UpdateFilesWithMetadataResponse} res The response object to an UpdateFilesWithMetadataRequest
     * precondition: randomizesCommentID provides a random comment ID
     * postCondition: updatesFilesWithMetaData of additional comment
    */
    async handleAddComment() {
        await this.randomizeCommentID();

        let commenterusername = this.state.myUsername;
        this.setState({
            commenterUsername: commenterusername,
        })

        // Log new comment
        //console.log("Comment: " + this.state.commentText + " // comment id: " + this.state.commentID + " // commenter: " + this.state.commenterUsername);

        let filter = new Filter({ placeHolder: ' '});
        let filtered = ['die', 'kill'];
        filter.addWords(...filtered);
        let cleanComment = filter.clean(this.state.commentText);

        // Create a Comment object with commentID, commenterUsername, and commentTest as keys
        let comment = {
            commentID: this.state.commentID,
            commenterUsername: this.state.commenterUsername,
            commentText: cleanComment,
        }

        // Create an array containing the single new comment
        //let comments = [];
        //comments.push(comment);

        // Set the state with new comment
        this.setState({
            comments: [
              ...this.state.comments,
              comment
            ]
        })

        // Send update file request
        let cm = new ClientManager();
        let client = cm.createMediaClient();
        let req = new UpdateFilesWithMetadataRequest();

        // Search for this file using its unique filename
        let filtermap = req.getFiltermetadataMap();
        filtermap.set("filename", this.state.fileinfo.getMetadataMap().get("filename"));

        // Overwrite the previous comments array (since we manually concatenate the new and old comments above)
        req.setUpdateflag(0);

        let desiredComments = this.state.comments;
        let desiredCommentsJSON = JSON.stringify(desiredComments);

        // Checks: All IDs logged should match (not undefined)
        // Check ID from comment object
        console.log("comment id: " + comment.commentID);
        // Check ID from state.comments
        console.log("comment id from state concatenated comment map: " + this.state.comments[0].commentID);
        // Check ID from desiredComments (metadata used in update request)
        console.log("Comment id from desiredComments (the metadata in update req): " + desiredComments[0].commentID);

        // Set the map to be updated -- we are updating the comments array with the updatedComments array
        let desiredmap = req.getDesiredmetadataMap();
        desiredmap.set("comments", desiredCommentsJSON);
        // Send the request and print the # of files updated
        return client.updateFilesWithMetadata(req, {'Authorization': this.state.authString}).then(res => {console.log("Result: " + res)}).catch(error => console.log("Saving comment failed: " + error));
    }

    /**
    * An async function that randomizes a string ID for the comment ID
    * @function randomizeCommentID
    * @returns {String} vtoString(16) The comment ID
    */
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
   * Renders the DetailedPostViewWeb components.
   * @returns a {DetailedPostViewWeb}
   */
  render() {
    const video = null;
    return (
      <SafeAreaView style={KIC_Style.outContainer}>
        <FeedHeader navigation={this.props.navigation} />
        <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 10, }}>
            {(this.state.finishedInit) ? <View style={styles.container}>
                {!this.state.isVideo && <Image
                    style={styles.postImage}
                    source = {this.state.imageSrc}
                    />}
                {this.state.isVideo && <Video
                    ref={video}
                    style={styles.postImage}
                    source={
                        this.state.imageSrc
                    }
                    useNativeControls = {true}
                    resizeMode="contain"
                />}
                <View style={styles.detailsAndComments}>
                    {/* Pass parent's (DetailedPostView) state data to the child (PostDetails) */}
                    <PostDetails
                        myUserid = {this.state.myUserid}
                        navigation = {this.state.navigation}
                        authString = {this.state.authString}
                        userid = {this.state.userid}
                        username = {this.state.username}
                        yearPosted = {this.state.yearPosted}
                        monthPosted = {this.state.monthPosted}
                        dayPosted = {this.state.dayPosted}
                        caption = {this.state.caption}
                    />

                    {/* Only show display button if this is active user's own post */}
                    {(this.state.isMyPost) ? <TouchableOpacity
                        onPress = {this.handleDelete.bind(this)}>
                            <Text style = {{ textAlign: 'right', fontSize: 10, fontStyle: 'italic', color: '#707070', }} >Delete post</Text>
                    </TouchableOpacity> : <View></View>}

                    <View style={{ height: 200 }}>
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
                            style={{ justifyContent: 'center' }}
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
 * @constant styles creates stylesheet for a DetailedPostViewWeb.
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