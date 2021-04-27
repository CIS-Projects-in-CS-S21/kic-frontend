/**
* @fileoverview A Comment Section of fixed height and scrollbar populated by Comments.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Comment from "./Comment";

/**
* @class Contains function for rendering the comment section.
*/
class CommentSection extends React.Component {

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
        };

    }

    /**
    * Renders comments section.
    * @returns {CommentSection}
    */
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'stretch' }}>
            <Text style={styles.commentCounter}>{this.props.comments.length} comments</Text>

            {/* The comment box of fixed height */}
            <View style={styles.commentSection}>
                <FlatList
                    data={this.props.comments}
                    renderItem={({item}) => <Comment
                        navigation = {this.props.navigation}
                        authString = {this.props.authString}
                        myUserid = {this.props.myUserid}
                        isMyPost = {this.props.isMyPost}
                        filename = {this.props.filename}
                        fileinfo = {this.props.fileinfo}
                        comments = {this.props.comments}
                        commentID = {item.commentID}
                        commenterUsername = {item.commenterUsername}
                        commentText = {item.commentText}
                    />}
                    keyExtractor={comment => comment.commentID}
                />
            </View>
        </View>
      );
    }
}

/**
* @constant styles creates stylesheet for the Comment Section
*/
const styles = StyleSheet.create({
    commentSection: {
        flex: 1,
        alignItems: 'stretch',
    },
    commenterIcon: {
        width: '10%',
        height: '10%',
    },
    commentCounter: {
        fontSize: 10,
        fontStyle: 'italic',
        color: '#707070',
        paddingBottom: 5,
        textAlign: 'right',
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

export default CommentSection;