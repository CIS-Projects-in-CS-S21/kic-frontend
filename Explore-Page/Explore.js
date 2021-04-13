/**
 * @fileoverview Explore page - allows users to discover friends and search for users.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import FeedHeader from '../Components/FeedHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TextInput, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import KIC_Style from '../Components/Style';
import UserBlurb from "../Components/UserBlurb";
import TokenManager from "../Managers/TokenManager";
import ClientManager from "../Managers/ClientManager";
import UserManager from '../Managers/UserManager';
import { GetUserByIDRequest, GetUserByUsernameRequest, UpdateUserInfoRequest } from '../gen/proto/users_pb';
import Ionicons from 'react-native-vector-icons/Ionicons';


/**
 * @class Contains function for rendering Explore screen.
 */
class Explore extends React.Component {


  /*
   * Class constructor
   */
  constructor(props) {
    super();

    // Define the initial state:
    this.state = {
      userid: "0",
      username: "default",
      bio: "bio",
      birthDay: 0,
      birthMonth: 0,
      birthYear: 0,
      searchString: '',
      finishedLoading: false,
    };

    this.callGetAuthString = this.callGetAuthString.bind(this)
    this.setSearchString = this.setSearchString(this)
    this.handleSearch = this.handleSearch(this)

  }

  componentDidMount() {
    //this.fetchUserInfo()
    this.fetchUserInfo().then(response => {
      console.log("Success");
    }).catch(error => {
      console.log(error)
    });
  }

    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.userid !== prevProps.userid) {
        this.fetchUserInfo().then(response => {
            console.log("Success");
        }).catch(error => {
            console.log(error)
        });
      }
    }

    fetchUserInfo() {
        return this.callGetAuthString();
    }
    callGetAuthString(){
        let um = new UserManager();
        return um.getAuthString().then(authString => {this.callGetUserID(um, authString)});
    }
    callGetUserID(um, authString){
        this.setState({
            authString: authString,
        })
        return um.getMyUserID().then(userID => {this.callGetUserByUserID(authString, userID)});
    }
    callGetUserByUserID(authString, userID){

        let cm = new ClientManager();
        let client = cm.createUsersClient();

        let req = new GetUserByIDRequest();
        req.setUserid(userID);
        return client.getUserByID(req, {'Authorization': authString}).then(res => {this.setUserInfo(res, userID)})
    }
    setUserInfo(res, userID){
        {/* Store user information */}
        let myusername = res.getUser().getUsername();
        let bday = res.getUser().getBirthday().toString();
        let mybirthyear = bday.split(",")[0];
        let mybirthmonth = bday.split(",")[1];
        let mybirthday = bday.split(",")[2]
        let mycity = res.getUser().getCity();
        let mybio = res.getUser().getBio();

        this.setState({
            username: myusername,
            bio: mybio,
            city: mycity,
            birthDay: mybirthday,
            birthMonth: mybirthmonth,
            birthYear: mybirthyear,
            userid: userID,
            finishedLoading: true,
        })
    }

    setSearchString = (text) => {
      this.setState({ searchString: text })
    }

    handleSearch() {
        //do smth
    }

  render() {
    /**
     * Renders Explore screen components.
     * @returns {Component}
     */
    return (
        <SafeAreaView style={KIC_Style.outContainer}>
            <FeedHeader navigation={this.props.navigation} />
            <SafeAreaView style={KIC_Style.innerContainer}>
                <View style={{flexDirection: 'row', marginTop: 30, justifyContent: 'center' }}>
                    <TextInput
                        style={KIC_Style.searchInput}
                        textAlign = {'center'}
                        onChange={(e) => this.setSearchString(e.nativeEvent.text)}
                        placeholder="Search for a user . . ."
                    />
                    <TouchableOpacity
                        style={{ backgroundColor: '#b3d2db', borderRadius: 10, height: 30, justifyContent: 'center' }}
                        onPress = {this.handleSearch}>
                        <Ionicons name="search-circle-outline" color='#ffff' size={25} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.toptext}>Displaying friend recommendations for @{this.state.username}</Text>

                {(this.state.finishedLoading) ? <ScrollView>
                    <UserBlurb
                        navigation = {this.props.navigation}
                        authString = {this.state.authString}
                        myUsername = {this.state.username}
                        myUserid = {this.state.userid}
                        userid = {this.state.userid} // This page belongs to the active user
                        blurbUserid = {130}
                    />
                    <UserBlurb
                        navigation = {this.props.navigation}
                        authString = {this.state.authString}
                        myUsername = {this.state.username}
                        myUserid = {this.state.userid}
                        userid = {this.state.userid} // This page belongs to the active user
                        blurbUserid = {131}
                    />
                    <UserBlurb
                        navigation = {this.props.navigation}
                        authString = {this.state.authString}
                        myUsername = {this.state.username}
                        myUserid = {this.state.userid}
                        userid = {this.state.userid} // This page belongs to the active user
                        blurbUserid = {134}
                    />
                    <UserBlurb
                        navigation = {this.props.navigation}
                        authString = {this.state.authString}
                        myUsername = {this.state.username}
                        myUserid = {this.state.userid}
                        userid = {this.state.userid} // This page belongs to the active user
                        blurbUserid = {135}
                    />
                    <StatusBar style="auto" />
                </ScrollView> : <View></View>}
            </SafeAreaView>
        </SafeAreaView>
    );
  }
}

/**
 * @constant styles creates stylesheet for Explore screen components
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toptext: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#707070',
        marginTop: 5,
        marginBottom: 5,
        paddingBottom: 5,
        textAlign: 'center',
    }
});

export default Explore;
