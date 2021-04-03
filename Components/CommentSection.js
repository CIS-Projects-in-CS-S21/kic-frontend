/**
* @fileoverview A Comment Section of fixed height and scrollbar populated by Comments.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

/*
* Mock array of comments
*/
const COMMENTS = [
  {
    id: '1',
    commenterUsername: 'One',
    commentText: 'Comments should be a maximum of 150 characters long. ',
  },
  {
    id: '2',
    commenterUsername: 'Two',
    commentText: 'Second comment',
  },
  {
    id: '3',
    commenterUsername: 'Three',
    commentText: 'Third comment',
  },
  {
    id: '4',
    commenterUsername: 'Four',
    commentText: 'Fourth comment',
  },
  {
    id: '5',
    commenterUsername: 'Five',
    commentText: 'Fifth comment',
  },
  {
    id: '6',
    commenterUsername: 'Six',
    commentText: 'Sixth comment',
  },
];

/**
* Format individual comment
*/
const Comment = ({ commenterUsername, commentText }) => (
  <View style={styles.comments}>
    <Text style={styles.textCommenterUsername}>{commenterUsername} says...</Text>
    <Text style={styles.textComment}>{commentText}</Text>
  </View>
);

/**
* @class Contains function for rendering the comment section.
*/
class CommentSection extends React.Component {
    /**
    * Gets a post's comments to render on the page.
    */
    fetchPostComments = () => {
      // Request post's comments from backend.
    }

    /**
    * Renders comments section.
    * @returns {CommentSection}
    */
    render() {
      {/* Function for rendering comments */}
      const renderItem = ({ item }) => (
        <Comment commenterUsername={item.commenterUsername} commentText={item.commentText} />
      );

      return (
        <View style={{ flex: 1 }}>
            <Text style={styles.commentCounter}>{COMMENTS.length} comments</Text>

            {/* The comment box of fixed height */}
            <View style={styles.commentSection}>
                <FlatList
                    data={COMMENTS}
                    renderItem={renderItem}
                    keyExtractor={comment => comment.id}
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
        width: '100%',
        flex: 1,
    },
    comments: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 15,
        marginTop: 10,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
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