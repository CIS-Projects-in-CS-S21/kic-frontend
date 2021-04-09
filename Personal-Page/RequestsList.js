/**
* @fileoverview A friends list of fixed height and scrollbar populated by UserBlurbs.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import RequestBlurb from "../Components/RequestBlurb";
import AddFriendButton from "../Components/AddFriendButton";

/*
* Mock array of requests
*/
const REQUESTS = [
  {
    id: '5',
    username: 'acquaintance1',
    bio: 'I could be your new friend',
  },
  {
    id: '6',
    username: 'acquaintance2',
    bio: 'bio',
  },
  {
    id: '7',
    username: 'acquaintance3',
    bio: 'bio',
  },
  {
    id: '8',
    username: 'acquaintance4',
    bio: 'bio',
  },
];




/**
* @class Contains function for rendering the request list.
*/
class RequestsList extends React.Component {

  /*
   * Class constructor
   */
    constructor(props) {
        super();

        // Define the initial state:
        this.state = {
            authString: "authstring",
            userid: props.userid,
            username: props.username,
            pending: [],
        };

        //this.fetchPending = this.fetchPending.bind(this)
    }

    /**
    * Renders a scrollable RequestsList of user blurbs.
    * @returns {RequestsList}
    */
    render() {
        {/* Function for rendering users */}
        const renderItem = ({ item }) => (
            <RequestBlurb
                username = {item.username}
                bio = {item.bio}
            />
        );

        return (
            <View style={styles.requestsList}>
                <Text style={styles.requestsCounter}>{REQUESTS.length} pending requests</Text>

                <View style={styles.requestsList}>
                    <FlatList
                        style={styles.listcontainer}
                        data={REQUESTS}
                        renderItem={renderItem}
                        keyExtractor={friend => friend.username}
                    />
                </View>

            </View>
        );
    }
}

/**
* @constant styles creates stylesheet for the RequestsList
*/
const styles = StyleSheet.create({
    requestsList: {
        flex: 1,
    },
    userBar: {
        flexDirection: 'row',
    },
    requestsCounter: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#707070',
        marginTop: 5,
        marginBottom: 5,
        paddingBottom: 5,
        textAlign: 'center',
    }
});

export default RequestsList;