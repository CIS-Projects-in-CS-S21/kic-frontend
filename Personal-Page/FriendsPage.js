/**
 * @fileoverview The screen for the Detailed View of a post, which is accessed when clicking on a post.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
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
import FeedHeader from '../Components/FeedHeader';


/**
 * @class Contains functions for rendering the friends page.
 */
class FriendsPage extends React.Component {

    /**
     * Class constructor
     * @param {String} username The username of the current active user
     * @param {String} userid The userid of the current active user
     * @param {String} bio The bio of the user to be displayed
     * @param {String} userid The id of the user who owns the page that this blurb is being displayed on
     * @param {Number} yearPosted year of user post
     * @param {Number} monthPosted month of post of user
     * @param {Number} dayPosted day of post of user
     * @param {boolean} showFriends default set to true so friends are shown
     * @param {boolean} isMyPage default set to true, so user is on user's page
     */
    constructor(props) {
        super();

        // Define the initial state:
        this.state = {
            navigation: props.route.params.navigation,
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
    */
    componentDidMount(){
        this.compareIDs();
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.setState({
                showFriends: true,
            });
            this.compareIDs();
        })
    }

    /**
    * Runs when the props change and updates the component accordingly.
    *
    */
    componentDidUpdate(prevProps) {
      if (this.props.userid !== prevProps.userid) {
        this._unsubscribe();
        this.setState({
            showFriends: true,
            myUserid: this.props.route.params.myUserid,
            userid: this.props.route.params.userid,
            username: this.props.route.params.username,
        })
        this.compareIDs();
      }
    }

    /**
    * Runs before the component is unmounted
    */
  componentWillUnmount() {
    this._unsubscribe();
  }

    /**
    * Compares the user IDs of the active user and the user to whom this friends page belongs
    *
    */
    compareIDs(){
        //console.log("My id is " + this.state.myUserid + " and this friendlist belongs to userid " + this.state.userid)
        // Check if this is our own page
        if (this.state.myUserid == this.props.route.params.userid){
            //console.log("This is my friends list!");
            this.setState({
                isMyPage: true,
            })
        } else {
            //console.log("This is not my friends list!");
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
        <SafeAreaView style={KIC_Style.outContainer}>
        <FeedHeader navigation={this.state.navigation} />
        <SafeAreaView style={styles.container}>
            {/* Switches between friends/requests list */}
            {(!this.state.showFriends) ? <RequestsList
                                                                  navigation = {this.state.navigation}
                                                                  userid = {this.props.route.params.userid}
                                                                  username = {this.props.route.params.username}
                                                                  myUserid = {this.props.route.params.myUserid}
                                                                /> :
                                        <FriendsList
                                           navigation = {this.state.navigation}
                                           userid = {this.props.route.params.userid}
                                           username = {this.props.route.params.username}
                                           myUserid = {this.props.route.params.myUserid}
                                       />}
            <View style={styles.content}>

            {/* Allow user to switch between friends/requests list by clicking button */}
            {(this.state.showFriends && this.state.isMyPage) ?  <TouchableOpacity
                                            style={KIC_Style.button}
                                            onPress = {() =>
                                                this.setState({ showFriends:false })}>
                                            <Text style={KIC_Style.button_font}>Pending Requests</Text>
                                        </TouchableOpacity> :
             (!this.state.showFriends && this.state.isMyPage) ?
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
        </SafeAreaView>
      );
  }
}

/**
 * @constant styles creates stylesheet for a FriendsPage
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
        ...Platform.select({
            ios: {
              top:30,
              marginBottom:30,
            },
            android: {
              top:30,
              marginBottom:30,
            },
            default: {
              top:60,
              marginBottom: 60,
            }
          }),
    },
    content: {
        alignItems: 'center',
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