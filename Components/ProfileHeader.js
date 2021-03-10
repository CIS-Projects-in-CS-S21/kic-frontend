/**
* @fileoverview The screen for the user's personal page, containing links
* to the Mental Health Log page and User Feed.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Modal, Button, Pressable, TouchableOpacity } from 'react-native';

/**
* @class Contains function for rendering the personal page.
*/
class ProfileHeader extends React.Component {

    /**
    * Renders personal page components.
    * @returns {Component}
    */
    render() {
      return (
        <View style={styles.profileHeaderContainer}>

            {/* HEADER */}
            <View style ={styles.profileHeader}>

              {/* User's icon */}
              <Image
                style={styles.icon}
                source = {require('../assets/default/default_icon_2.png')}
              />

              {/* User's info */}
              <View style ={styles.userInfo}>

                  {/* User's display name and username */}
                  <View style ={styles.userID}>
                      {/* Display name */}
                      <Text style ={styles.textDisplayName}>{this.state.personalDisplayName}</Text>

                      {/* Username */}
                      <Text style ={styles.textUsername}>@username</Text>
                  </View>

                  {/* User's bio */}
                  <Text style ={styles.textBio}>{this.state.personalBio}</Text>
              </View>
            </View>
        </View>
      );
    }
}

/**
* @constant styles creates stylesheet for personal page components
*/
const styles = StyleSheet.create({
profileHeaderContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 20,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'flex-start',
},
profileHeader: {
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: 'row',
    width: '75%',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#b3d2db',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
},
icon: {
    width: 150,
    height: 150,
    borderTopRightRadius: 75,
    borderTopLeftRadius: 75,
    borderBottomRightRadius: 75,
    borderBottomLeftRadius: 75,
    marginRight: 20,
    marginLeft: 20,
},
userInfo: {
    flexDirection: 'column',
},
userID: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 10,
},
textDisplayName: {
    fontSize: 18,
    marginRight: 5,
},
textUsername: {
    fontSize: 18,
    fontWeight: "bold",
},
textBio: {
    width: 745,
    fontSize: 15,
},
});

export default ProfileHeader;