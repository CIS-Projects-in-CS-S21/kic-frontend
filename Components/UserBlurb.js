/**
* @fileoverview The UserBlurb component is a reusable component for a blurb of a user that
* displays their username, display name, icon, and bio.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

/**
* @class Contains function for rendering a UserBlurb.
*/
class UserBlurb extends React.Component {
    /*
    * Class constructor
    */
    constructor(props) {
        super();

        this.state = {
            username: '',
            displayName: '',
            bio: '',
        };
    }

  /**
   * Renders personal page components.
   * @returns {FriendsPage}
   */
  render() {
      return (
        <View style={styles.container}>
            <Image style={styles.icon}>{icon}</Text>
            <View style={styles.details}>
                <View style={styles.names}>
                    <Text style={styles.displayName}>{displayName}</Text>
                    <Text style={styles.userName}>{username}</Text>
                </View>
                <Text style={styles.bio}>{bio}</Text>
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
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
  },
  details: {
    justifyContent: 'flex-start',
    alignItems: 'left',
    flexDirection: 'column',
    flex: 1,
  },
  names: {
    flexDirection: 'row',
    flex: 1,
  },
  bio: {
    alignItems: 'left',
  },
  icon: {
    justifyContent: 'flex-start',
  },
});

export default UserBlurb;