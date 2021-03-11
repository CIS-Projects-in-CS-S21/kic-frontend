/**
* @fileoverview The profile header is a reusable component used to display the user's icon,
* display name, handle, and bio.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, SafeAreaView, Button, Pressable, TouchableOpacity } from 'react-native';

const COMMENTS = [
  {
    id: '1',
    commentText: 'First comment. First comment. First comment. First comment. First comment. First comment. First comment. First comment. First comment. ',
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

const Comment = ({ commenterHandle, commenterPosterFirstName, commenterFirstName, commentText }) => (
  <View style={styles.comment}>
    <Text style={styles.commentText}>{commentText}</Text>
  </View>
);

/**
* @class Contains function for rendering the personal page.
*/
class PostDetails extends React.Component {




    /**
    * Renders personal page components.
    * @returns {PostHeader}
    */
    render() {

      {/* Function for rendering comments */}
      const renderItem = ({ item }) => (
        <Comment commentText={item.commentText} />
      );

      return (
        <SafeAreaView style={styles.postDetailsContainer}>

            {/* Container for user's info */}
            <View style ={styles.userInfo}>
                {/* User's icon */}
                <Image
                style={styles.icon}
                source = {require('../assets/default/default_icon_2.png')}
                />

                {/* User's display name and handle */}
                <View style ={styles.userID}>
                  {/* Display name */}
                  <Text style ={styles.textUserNames}>{this.props.userFirstName} {this.props.userLastName} @{this.props.userHandle}</Text>
                </View>
            </View>

            <View style ={styles.postCaption}>

                <Text>This is a caption. This is a caption. This is a caption. This is a caption. This is a caption. This is a caption. This is a caption. This is a caption. This is a caption. </Text>

            </View>

            {/* Comments section */}
            <ScrollView style={styles.commentSection}>
            <FlatList
                data={COMMENTS}
                renderItem={renderItem}
                keyExtractor={comment => comment.id}
                marginBottom={50}
            />
            </ScrollView>
        </SafeAreaView>
      );
    }
}

/**
* @constant styles creates stylesheet for the profile header
*/
const styles = StyleSheet.create({
    postDetailsContainer: {
        paddingTop: 30,
        paddingBottom: 30,
        paddingRight: 10,
        paddingLeft: 30,
        flexDirection: 'column',
        flex: 1,
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 10,
    },
    commentSection: {
        flexGrow: 1,
    },
    comment: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 15,
        marginTop: 10,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
    },
    postCaption: {
        fontSize: 13,
        paddingBottom: 5,
        flex: 1,
    },
    icon: {
        width: 45,
        height: 45,
        borderTopRightRadius: 75,
        borderTopLeftRadius: 75,
        borderBottomRightRadius: 75,
        borderBottomLeftRadius: 75,
    },
    textUserNames: {
        alignItems: 'left',
        fontSize: 15,
        marginLeft: 5,
        marginBottom: 5,
    },
});

export default PostDetails;