/**
 * @fileoverview The screen for the Detailed View of a post, which is accessed when clicking on a post.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Modal, Button, Pressable, TouchableOpacity } from 'react-native';
import KIC_Style from "../Components/Style";
import { SafeAreaView } from 'react-native-safe-area-context';
import PostDetails from "../Components/PostDetails";
import ProfileHeader from "../Components/ProfileHeader";
import FriendsList from "./FriendsList";
import RequestsList from "./RequestsList";
import ClientManager from "../Managers/ClientManager";
import UserManager from '../Managers/UserManager';
import { GetUserByIDRequest, GetUserByUsernameRequest, UpdateUserInfoRequest } from '../gen/proto/users_pb';
import { GetFriendsForUserRequest, CreateConnectionForUsersRequest } from '../gen/proto/friends_pb';

/**
 * @class Contains function for rendering the friends page.
 */
class FriendsPage extends React.Component {

  /*
   * Class constructor
   */
    constructor(props) {
        super();

        // Define the initial state:
        this.state = {
            myUserid: props.route.params.myUserid,
            userid: props.route.params.userid,
            username: props.route.params.username,
            bio: props.route.params.bio,
            yearPosted: 0,
            monthPosted: 0,
            dayPosted: 0,
            showFriends: true,
            isMyPage: true,
        };

        this.compareIDs = this.compareIDs.bind(this)

    }

    /**
    * Runs when component first loads
    *
    * @function componentDidMount()
    */
    componentDidMount(){
      this.compareIDs();
    }

    componentDidUpdate(prevProps) {
      if (this.props.userid !== prevProps.userid) {
        this.setState({
            myUserid: this.props.route.params.myUserid,
            userid: this.props.route.params.userid,
            username: this.props.route.params.username,
            isMyPage: this.props.isMyPage,
        })
        this.compareIDs();
      }
    }

    compareIDs(){
        console.log("My id is " + this.state.myUserid + " and this friendlist belongs to userid " + this.state.userid)
        // Check if this is our own page
        if (this.state.myUserid == this.state.userid){
            console.log("This is my friends list!");
            this.setState({
                isMyPage: true,
            })
        } else {
            console.log("This is not my friends list!");
            this.setState({
                isMyPage: false,
            })
        }
    }

  /**
   * Renders the FriendsPage.
   * @returns a {FriendsPage}
   */
  render() {

      const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
      return (
        <SafeAreaView style={styles.container}>
            {/* Switches between friends/requests list */}
            {(!this.state.showFriends) ? <RequestsList
                                                                  userid = {this.state.userid}
                                                                  username = {this.state.username}
                                                                /> :
                                        <FriendsList
                                           navigation = {this.props.navigation}
                                           userid = {this.props.route.params.userid}
                                           username = {this.props.route.params.username}
                                           myUserid = {this.props.route.params.myUserid}
                                       />}
            <View style={styles.content}>

            {/* Allow user to switch between friends/requests list by clicking button */}
            {(this.state.showFriends) ?  <TouchableOpacity
                                            style={KIC_Style.button}
                                            onPress = {() =>
                                                this.setState({ showFriends:false })}>
                                            <Text style={KIC_Style.button_font}>Pending Requests</Text>
                                        </TouchableOpacity> :
             (!this.state.showFriends) ?
                                        <TouchableOpacity
                                            style={KIC_Style.button}
                                            onPress = {() =>
                                                this.setState({ showFriends:true })}>
                                            <Text style={KIC_Style.button_font}>Friends</Text>
                                        </TouchableOpacity> :
                                        <View></View>}

            <StatusBar style="auto" />
            </View>
        </SafeAreaView>
      );
  }
}

/**
 * @constant styles creates stylesheet for an individual DetailedPostView's components.
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        height: 'auto',
        marginLeft: '10%',
        marginRight: '10%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingVertical: 20,
    },
    content: {
        alignItems:'center',
        paddingBottom: 5,
    },
    icon: {
        width: 100,
        height: 100,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        marginRight: 20,
        marginLeft: 20,
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
        fontSize: 18,
        marginRight: 5,
        fontWeight: "bold",
    },
});

export default FriendsPage;