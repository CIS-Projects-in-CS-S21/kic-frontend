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
    commentText: 'First comment. First comment. First comment. First comment. ',
  },
  {
    id: '2',
    commentText: 'Second comment',
  },
  {
    id: '3',
    commentText: 'Third comment',
  },
  {
    id: '4',
    commentText: 'Fourth comment',
  },
  {
    id: '5',
    commentText: 'Fifth comment',
  },
  {
    id: '6',
    commentText: 'Sixth comment',
  },
];

/**
* Format individual comment
*/
const Comment = ({ commenterHandle, commenterPosterFirstName, commenterFirstName, commentText }) => (
  <View style={styles.comment}>
    <Text style={styles.commentText}>{commentText}</Text>
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
        <Comment commentText={item.commentText} />
      );

      return (
        <View>
            <Text style={styles.commentCounter}>{this.props.numComments} comments</Text>

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
        height: 200,
        width: '100%',
        flex: 1,
    },
    comment: {
        backgroundColor: '#fff',
        width: '95%',
        padding: 15,
        marginTop: 10,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
    },
    commentCounter: {
        fontSize: 10,
        fontStyle: 'italic',
        color: '#707070',
        paddingBottom: 5,
        textAlign: 'right',
    }
});

export default CommentSection;