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
    firstName: 'Friend',
    lastName: 'A',
    username: 'friendA',
    bio: 'This is Friend A',
  },
  {
    firstName: 'Friend',
    lastName: 'B',
    username: 'friendB',
    bio: 'TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT',
  },
  {
    firstName: 'Friend',
    lastName: 'C',
    username: 'friendC',
    bio: 'TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT',
  },
  {
    firstName: 'Friend',
    lastName: 'D',
    username: 'friendD',
    bio: 'TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT',
  },
];


/**
* @class Contains function for rendering the comment section.
*/
class FriendsList extends React.Component {
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
                userFirstName={item.firstName}
                userLastName={item.lastName}
                userHandle={item.username}
                userBio={item.bio}
            />
        );

        return (
            <View
                onLayout={event => {
                const layout = event.nativeEvent.layout;
                console.log('height:', layout.height);
                console.log('width:', layout.width);
                console.log('x:', layout.x);
                console.log('y:', layout.y);
                }}
                >
                <Text style={styles.friendCounter}>Displaying {FRIENDS.length} friends</Text>

                {/* The comment box of fixed height */}
                <View style={styles.friendsList}>
                    <FlatList
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
        flexGrow: 1,
        height: 280,
        width: '100%',
        flex: 1,
    },
    userBar: {
    flex: 0,
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