/**
* @fileoverview The PostDetails component is a reusable component for the Detailed View of a post,
* consisting of the user's handle, display name, timestamps, and a CommentSection.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import ProfilePicture from "./ProfilePicture";

/**
* @class Contains function for rendering a PostDetails component.
*/
class PostDetails extends React.Component {
    /*
    * Class constructor
    */
    constructor(props) {
        super();

        this.state = {
            day: props.dayPosted,
            month: props.monthPosted,
            year: props.yearPosted,
            caption: props.caption,
        };
    }

    goToUserPage = () => {
        this.props.navigation.navigate('UserPage', {
          navigation: this.props.navigation,
          myUserid: this.props.myUserid,
          userid: this.props.userid,
        })
        console.log("Blurb belongs to " + this.state.username);
    }

    /**
    * Renders the details of the post.
    * @returns {PostDetails}
    */
    render() {
      return (
        <SafeAreaView style={styles.postDetailsContainer}>

            {/* Container for user's info */}
            <View style ={styles.userInfo}>
                {/* User's icon */}
                <TouchableOpacity
                    onPress = {this.goToUserPage}>
                    <ProfilePicture
                        style = {styles.icon}
                        userid = {this.props.userid}
                        authString = {this.props.authString}
                    />
                </TouchableOpacity>
                {/* User's display name and handle */}
                <Text style ={styles.textUsername}>@{this.props.username}</Text>
            </View>

            <View style={styles.captionContainer}>
            <ScrollView style ={styles.captionBox}>
                <Text style ={styles.captionText}>{this.props.caption}</Text>
            </ScrollView>
            </View>

            <Text style={styles.postTimestamp}>Posted on {this.state.day} {this.state.month} {this.state.year}</Text>

        </SafeAreaView>
      );
    }
}

/**
* @constant styles creates stylesheet for the post details, which includes the original poster's
* information, the post description, and timestamps.
*/
const styles = StyleSheet.create({
    postDetailsContainer: {
        marginTop: 10,
        paddingTop: 10,
        flexDirection: 'column',
        flex: 1,
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 10,
    },
    captionContainer: {
        maxHeight: 150,
    },
    captionBox: {
        width: '100%',
        marginBottom: 5,
        flexGrow: 0,
    },
    captionText: {
        fontSize: 13,
    },
    postTimestamp: {
        fontSize: 10,
        fontStyle: 'italic',
        color: '#707070',
        textAlign: 'right',
    },
    icon: {
        width: 45,
        height: 45,
        borderTopRightRadius: 75,
        borderTopLeftRadius: 75,
        borderBottomRightRadius: 75,
        borderBottomLeftRadius: 75,
    },
    textUsername: {
        textAlign: 'left',
        fontSize: 15,
        marginLeft: 5,
        marginBottom: 5,
    },
});

export default PostDetails;