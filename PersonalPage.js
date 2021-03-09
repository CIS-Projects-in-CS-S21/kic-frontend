/**
 * @fileoverview The screen for the user's personal page, containing links
 * to the Mental Health Log page and User Feed.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import {Button} from "react-native-web";
import Modal from 'modal-enhanced-react-native-web';

/**
 * @class Contains function for rendering the personal page.
 */
class PersonalPage extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      personalDisplayName: "Display Name",
      personalUserName: "@username",
      personalBio: "This is a one-line bio.",
      postDescription: "This is a one-line post description.",
      modalVisible: false,
    };
  }

  /**
   * Handles opening the modal.
   */
  openDetailedView = () => {
      this.setState({
          modalVisible: true
      })
  }

  /**
   * Handles closing the modal.
   */
  closeDetailedView = () => {
      this.setState({
          modalVisible: false
      })
  }

  /**
   * Gets user's posts.
   */
  fetchPosts = () => {
      {/** Request posts for user */}
  }

  /**
   * Gets image of post.
   */
  fetchPostImage = () => {
      this.setState({
          /** Get image of clicked post */
      })
  }

  /**
   * Gets post's description.
   */
  fetchPostDescription = () => {
      this.setState({
          /** Get description of clicked post */
      })
  }

  /**
   * Gets post's description.
   */
  fetchPostMetadata = () => {
      this.setState({
          /** Get metadata of clicked post */
      })
  }

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
                  <Text style ={styles.textDisplayName}>{this.state.personalDisplayName}</Text>

                  {/* Username */}
                  <Text style ={styles.textUsername}>@username</Text>
              </View>

              {/* User's bio */}
              <Text style ={styles.textBio}>{this.state.personalBio}</Text>

          </View>

        </View>

        {/* postsContainer */}
        <View style ={styles.postGrid}>
            <View style ={styles.postRow}>
                <TouchableOpacity
                    onPress={this.openDetailedView}
                >
                <Image
                  style ={styles.postImage}
                  source = {require('./assets/default/default_icon_2.png')}
                />
                </TouchableOpacity>

                <Image
                  style ={styles.postImage}
                  source = {require('./assets/default/default_icon_2.png')}
                />
                <Image
                  style ={styles.postImage}
                  source = {require('./assets/default/default_icon_2.png')}
                />
                <Image
                  style ={styles.postImage}
                  source = {require('./assets/default/default_icon_2.png')}
                />
            </View>

            <View style ={styles.postRow}>
                <Image
                  style ={styles.postImage}
                  source = {require('./assets/default/default_icon_2.png')}
                />
                <Image
                  style ={styles.postImage}
                  source = {require('./assets/default/default_icon_2.png')}
                />
            </View>

        </View>

        {/* DETAILED VIEW */}
        <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
        >
            <View style={styles.detailedViewPopUp}>

              {/* The image */}
              <Image
                style ={styles.detailedViewImage}
                source = {require('./assets/default/default_icon.png')}
              />

              <View style={styles.postDetails}>

                <Text style={styles.detailedViewDisplayName}>{this.state.personalDisplayName}</Text>
                <Text style={styles.detailedViewDisplayName}>{this.state.personalUserName}</Text>
                <Text style={styles.detailedViewDisplayName}>{this.state.postDescription}</Text>

                <Button style={styles.closeDetailedViewButton}
                  title = "Close"
                  onPress = {this.closeDetailedView}
                />

              </View>

            </View>
        </Modal>

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
  postGrid: {
    backgroundColor: '#b3d2db',
    alignItems: 'left',
    justifyContent:'center',
    width: '75%',
    marginTop: 15,
    marginBottom: 15,
  },
  postRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  postImage: {
    alignSelf: 'flex-start',
    width: 230,
    height: 230,
    marginLeft: 5,
    marginRight: 5,
  },
  detailedViewPopUp: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeftLeft: 20,
    paddingRight: 20,
  },
  detailedViewImage: {
    width: 500,
    height: 500,
    marginLeft: 20,
    marginRight: 20,
  },
  postDetails: {
    flexDirection: 'column',
  },
  detailedViewIcon: {
    width: 20,
    height: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginRight: 5,
    marginLeft: 5,
  },
  detailedViewDisplayName: {
    fontSize: 15,
  },
  detailedViewUsername: {
    fontSize: 15,
    fontWeight: "bold",
  },
  detailedViewText: {
    fontSize: 14,
  },
  closeDetailedViewButton: {
    height: 5,
    width: 5,
  }
});

export default PersonalPage;
