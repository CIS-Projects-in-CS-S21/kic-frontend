/**
* @fileoverview A friends list of fixed height and scrollbar populated by UserBlurbs.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import UserBlurb from "../Components/UserBlurb";
import AddFriendButton from "../Components/AddFriendButton";

/*
* Mock array of friends
*/
const FRIENDS = [
  {
    id: '1',
    username: 'friend1',
    bio: 'bio',
  },
  {
    id: '2',
    username: 'friend2',
    bio: 'bio',
  },
  {
    id: '3',
    username: 'friend3',
    bio: 'bio',
  },
  {
    id: '4',
    username: 'friend4',
    bio: 'bio',
  },
];




/**
* @class Contains function for rendering the comment section.
*/
class FriendsList extends React.Component {

  /*
   * Class constructor
   */
    constructor(props) {
        super();

        // Define the initial state:
        this.state = {
            userid: props.userid,
            username: props.username,
        };
    }

    /**
    * Gets this user's friends.
    */
    fetchFriends = () => {
      // Request this user's friends from backend.
    }

    /**
    * Renders a scrollable FriendsList of user blurbs.
    * @returns {FriendsList}
    */
    render() {
        {/* Function for rendering comments */}
        const renderItem = ({ item }) => (
            <UserBlurb
                username = {item.username}
                bio = {item.bio}
            />
        );

        return (
            <View
                style={styles.friendsList}
                onLayout={event => {
                const layout = event.nativeEvent.layout;
                console.log('height:', layout.height);
                console.log('width:', layout.width);
                console.log('x:', layout.x);
                console.log('y:', layout.y);
                }}
                >
                <Text style={styles.friendCounter}>Displaying {FRIENDS.length} friends for @{this.state.username}</Text>

                {/* The comment box of fixed height */}
                <View style={styles.friendsList}>
                    <FlatList
                        style={styles.listcontainer}
                        data={FRIENDS}
                        renderItem={renderItem}
                        keyExtractor={friend => friend.username}
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
    friendsList: {
        flex: 1,
    },
    userBar: {
        flexDirection: 'row',
    },
    friendBlurb: {
        backgroundColor: '#fff',
        width: '95%',
        padding: 15,
        marginBottom: 10,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    friendCounter: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#707070',
        marginTop: 5,
        marginBottom: 5,
        paddingBottom: 5,
        textAlign: 'center',
    }
});

export default FriendsList;