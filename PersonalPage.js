/**
 * @fileoverview The screen for the user's personal page, containing links
 * to the Mental Health Log page and User Feed.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Button} from "react-native-web";

/**
 * @class Contains function for rendering the personal page.
 */
class PersonalPage extends React.Component {
  /**
   * Renders personal page components.
   * @returns {Component}
   */
  render() {
      return (
        <View style={styles.container}>

        {/* HEADER */}
        <View style ={styles.profileHeader}>

          {/* User's icon */}
          <Image
            style={styles.icon}
            source = {require('./assets/default/default_icon_2.png')}
          />

          {/* User's info */}
          <View style ={styles.userInfo}>

              {/* User's display name and username */}
              <View style ={styles.userID}>
                  {/* Display name */}
                  <Text style ={styles.textDisplayName}>Display Name </Text>

                  {/* Username */}
                  <Text style ={styles.textUsername}>@username</Text>
              </View>

              {/* User's bio */}
              <Text style ={styles.textBio}>Sample user bio. Sample user bio. Sample user bio. Sample user bio. Sample user bio. Sample user bio. Sample user bio. Sample user bio. Sample user bio. Sample user bio. Sample user bio. Sample user bio. Sample user bio. Sample user bio. Sample user bio. Sample user bio. </Text>

          </View>

        </View>

        {/* postsContainer */}
        <View style ={styles.postsContainer}>

            <Text style ={styles.text}>Posts will go here.</Text>

        </View>

        {/* NAVIGATION */}
          <Button
            title = "Mental Health Tracker!"
            onPress = {() =>
                this.props.navigation.navigate('MentalHealthLog')
            }
          />
          <Button
            title = "User Feed!"
            onPress = {() =>
                this.props.navigation.navigate('UserFeed')
            }
          />
          <StatusBar style="auto" />
        </View>
      );
  }
}

/**
 * @constant styles creates stylesheet for personal page components
 */
const styles = StyleSheet.create({
  container: {
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
  textUsername: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textDisplayName: {
    fontSize: 18,
  },
  textBio: {
    width: 745,
    fontSize: 15,
  },
  postsContainer: {
    backgroundColor: '#b3d2db',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '75%',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default PersonalPage;
