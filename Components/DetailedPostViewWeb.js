/**
 * @fileoverview The screen for the Detailed View of a post, which is accessed when clicking on a post.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Modal, Button, Pressable, TouchableOpacity } from 'react-native';
import KIC_Style from "../Components/Style";
import PostDetails from "./PostDetails";
import CommentSection from "./CommentSection";
import FeedHeader from '../Components/FeedHeader';
import ClientManager from "../Managers/ClientManager";
import { DeleteFilesWithMetaDataRequest } from "../gen/proto/media_pb";

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
        };
        this.initPostView = this.initPostView.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
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

  /**
   * Renders the DetailedPostView components.
   * @returns a {DetailedPostView}
   */
  render() {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 10, }}>
            <FeedHeader />
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
                    <StatusBar style="auto" />
                </View>

            </View> : <View></View>}
        </View>
      );
  }
}

/**
 * @constant styles creates stylesheet for an individual DetailedPostView's components.
 */
const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    flex: 1,
    flexDirection:'row',
    width: '60%',
    backgroundColor: '#b3d2db',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    marginTop: 20,
    paddingRight: 15,
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