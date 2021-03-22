/**
 * @fileoverview The screen for the user's personal page, containing links
 * to the Mental Health Log page and User Feed.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';
import KIC_Style from "../Components/Style";
import ProfileHeader from "../Components/ProfileHeader";
import PostsGrid from "../Components/PostsGrid";
import TokenManager from '../User-Authentication/TokenManager';
import UserBlurb from '../Components/UserBlurb';

/*
* Mock array of friends
*/
const FRIENDS = [
  {
    username: 'friendA',
    displayName: 'Friend A',
    bio: 'My name is Friend A.',
  },
  {
    username: 'friendB',
    displayName: 'Friend B',
    bio: 'My name is Friend B.',
  },
  {
    username: 'friendC',
    displayName: 'Friend C',
    bio: 'My name is Friend C.',
  },
  {
    username: 'friendD',
    displayName: 'Friend D',
    bio: 'My name is Friend D.',
  }
];

/**
 * @class Contains function for rendering the personal page.
 */
class FriendsPage extends React.Component {

  /**
   * Gets user's friends
   */
  fetchUsers = () => {
      // Request list of friends
  }

  /**
   * Renders personal page components.
   * @returns {FriendsPage}
   */
  render() {

      {/* Function for rendering user blurbs */}
      const renderItem = ({ user }) => (
        <UserBlurb username={user.username} displayName={user.displayName} bio={user.bio} />
      );

      return (
        <View>
            {/* The list of friends */}
            <View>
                <FlatList
                    data={FRIENDS}
                    renderItem={renderItem}
                    keyExtractor={user => user.bio}
                />
            </View>
        </View>
      );
  }
}

/**
 * @constant styles creates stylesheet for personal page components
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flex: 1,
  },
});

export default FriendsPage;
