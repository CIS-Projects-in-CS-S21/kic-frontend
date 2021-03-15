/**
* @fileoverview The PostDetails component is a reusable component for the Detailed View of a post,
* consisting of the user's handle, display name, timestamps, and a CommentSection.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, SafeAreaView, Button } from 'react-native';
import CommentSection from "./CommentSection";

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
            day: 16,
            month: 'March',
            year: 1998,
            min: 23,
            hour: 2,
            ampm: 'AM',
            numComments: 7,
        };
    }

    /**
    * Gets post's description.
    */
    fetchPostDescription = () => {
       // Request the description from backend
    }

    /**
    * Gets post's metadata.
    */
    fetchPostMetadata = () => {
       // Request post metadata from backend
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
                <Image
                style={styles.icon}
                source = {require('../assets/default/default_icon_2.png')}
                />

                {/* User's display name and handle */}
                <Text style ={styles.userNamesText}>{this.props.userFirstName} {this.props.userLastName} @{this.props.userHandle}</Text>
            </View>

            <View style={styles.captionContainer}>
            <ScrollView style ={styles.captionBox}>
                <Text style ={styles.captionText}>This is a caption. It's ideally around eight lines long but a scrollbar will appear if the user will be allowed to write a description longer than eight lines' worth of words.</Text>
            </ScrollView>
            </View>

            <Text style={styles.postTimestamp}>Posted on {this.state.day} {this.state.month} {this.state.year} at {this.state.hour}:{this.state.min} {this.state.ampm}</Text>

            <CommentSection
                numComments = {this.state.numComments}
            />
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
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: -10,
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
    userNamesText: {
        textAlign: 'left',
        fontSize: 15,
        marginLeft: 5,
        marginBottom: 5,
    },
});

export default PostDetails;