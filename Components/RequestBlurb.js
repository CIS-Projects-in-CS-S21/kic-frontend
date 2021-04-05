/**
 * @fileoverview A component that displays a user's name, username, and bio
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Modal, Button, Pressable, TouchableOpacity } from 'react-native';
import KIC_Style from "../Components/Style";
import PostDetails from "../Components/PostDetails";
import ProfileHeader from "../Components/ProfileHeader";
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * @class Contains function for rendering the detailed post view.
 */
class RequestBlurb extends React.Component {

  /*
   * Class constructor
   */
    constructor(props) {
        super();

        // Define the initial state:
        this.state = {
            canAdd: true,
            status: "",
        };
    }

    handleAccept = () => {
        this.setState({
            canAdd: false,
            status: "Accepted", });
        console.log("Accepting request");
    }

    handleDeny = () => {
        this.setState({
            canAdd: false,
            status: "Denied", });
        console.log("Rejecting request");
    }

    doNothing = () => {
        //do nothing
    }

    /**
    * Renders the UserBlurb components.
    * @returns a {UserBlurb}
    */
    render() {
      return (
        <View style={styles.container}>
              {/* User's icon */}
              <Image
                style={styles.icon}
                source = {require('../assets/default/default_icon_2.png')}
              />

              {/* User's blurb */}
              <View style ={styles.userInfo}>
                  {/* User's display name and handle */}
                  <View style ={styles.userID}>
                      {/* Display name */}
                      <Text style ={styles.textUsername}>{this.props.username}</Text>
                  </View>
                  {/* # of posts and friends */}
                  <Text style ={styles.textBio}>{this.props.bio}</Text>
              </View>

            {(this.state.canAdd) ?  <View><TouchableOpacity
                                            style={styles.choiceButton}
                                            onPress={this.handleAccept}>
                                            <Ionicons name="add-circle-outline" color='#ffff' size={25} />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.choiceButton}
                                            onPress={this.handleDeny}>
                                            <Ionicons name="close-circle-outline" color='#ffff' size={25} />
                                        </TouchableOpacity></View> :
                                        <View><TouchableOpacity
                                            style={KIC_Style.disabledButton}
                                            onPress={this.doNothing}>
                                            <Text style={{ color: '#000000' }}>{this.status}</Text>
                                        </TouchableOpacity></View>}

          <StatusBar style="auto" />
        </View>
      );
    }
}

/**
 * @constant styles creates stylesheet for an individual UserBlurb's components.
 */
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#c3dee6',
        paddingVertical: 20,
        justifyContent: 'flex-start',
        paddingTop: 30,
        paddingBottom: 30,
        paddingRight: 10,
        paddingLeft: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
    },
    icon: {
        width: 70,
        height: 70,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35,
        marginRight: 15,
        marginLeft: 15,
    },
    userInfo: {
        flexDirection: 'column',
        width: '80%',
        paddingRight: 10,
        flex: 1,
    },
    userID: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    textUsername: {
        fontSize: 15,
        marginRight: 5,
        fontWeight: "bold",
    },
    textBio: {
        fontSize: 13,
    },
    choiceButton: {
        borderRadius: 25,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#7ab7dd",
        marginTop: 7,
        padding: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    disabledButton: {
        width: "80%",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#8a8a8a",
        marginTop: 7,
        padding: 10,
    },
});

export default RequestBlurb;