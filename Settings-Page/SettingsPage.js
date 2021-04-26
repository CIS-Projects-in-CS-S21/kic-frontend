/**
 * @fileoverview Settings page - allows users to change certain settings
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {StyleSheet, Text, Switch, View, Image, Button, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import KIC_Style from "../Components/Style";
import FeedHeader from "../Components/FeedHeader";
import UserManager from "../Managers/UserManager";
import ClientManager from "../Managers/ClientManager";
import {GetUserByIDRequest, UpdateUserInfoRequest} from "../gen/proto/users_pb";



/**
 * @class Contains function for rendering SettingsPage screen.
 */
class SettingsPage extends React.Component {
    /**
     * Class constructor
     * @param {String} myUserid The id of the current active user
     * @param {User} myUser defaults to null, is current user
     */
    constructor(props) {
        super();

        // Define the initial state:
        this.state = {
            myUser: null,
            myUserid: '',
            authString: '',
            isPrivate: false,
            triggerString: ''
        };
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.setTriggers = this.setTriggers.bind(this);
    }

    /**
     * Runs when component first loads
     *
     */
    async componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.setState({
                finishedLoading: false,
            })
            this.fetchUserInfo().then(response => {
                console.log("Mounted setting page success");
            }).catch(error => {
                console.log(error)
            });
        })
    }

    /**
     * Runs before the component is unmounted
     */
    componentWillUnmount(){
        this._unsubscribe();
    }

    /**
     * Calls callGetAuthString. Starts the process of fetching active user info.
     *
     */
    fetchUserInfo() {
        return this.callGetAuthString();
    }

    /**
     * Creates a UserManager to fetch the authString, then calls callGetUserID
     *
     * @returns {String} authString The authorization string to be used for requests
     */
    callGetAuthString() {
        let um = new UserManager();
        return um.getAuthString().then(authString => { this.callGetUserID(um, authString) });
    }

    /**
     * Saves authString to state then calls getUserByID
     *
     * @params {UserManager} um The UserManager to be reused
     * @params {String} authString The authorization string to be used for requests
     * @returns {String} userID A string of the active user's ID
     */
    callGetUserID(um, authString) {
        this.setState({
            authString: authString,
        })
        return um.getMyUserID().then(userID => { this.callGetUserByUserID(userID) });
    }

    /**
     * Gets a user by their user ID via a GetUserByIDRequest
     *
     * @params {String} userID A string of the active user's ID
     * @returns {GetUserByIDResponse} res The response object to a GetUserByIDRequest
     */
    callGetUserByUserID(userID) {
        let cm = new ClientManager();
        let client = cm.createUsersClient();

        let req = new GetUserByIDRequest();
        req.setUserid(userID);
        return client.getUserByID(req, { 'Authorization': this.state.authString }).then(res => { this.setUserInfo(cm, res, userID) })
    }

    /**
     * Parses user's info from the GetUserByIDResponse and then determines if user is private
     *
     * @params {ClientManager} cm The ClientManager to reuse
     * @params {GetUserByIDResponse} res The response object to a GetUserByIDRequest
     * @params {String} userID A string of the active user's ID
     * @returns {GenerateFeedForUserResponse} res The response object to a GenerateFeedForUserRequest
     */
    setUserInfo(cm, res, userID) {
        let user = res.getUser();
        let isPrivate = res.getUser().getIsprivate();
        let boolPriv = false;
        if (isPrivate == "1") {
            boolPriv = true;
        }
        let ogTriggers = res.getUser().getTriggers()
        //let myusername = user.getUsername();
        this.setState({
            myUserid: userID,
            myUser: user,
            isPrivate: boolPriv,
            triggerString: ogTriggers
        })
    }
    /**
     * toggles switch such that if isPrivate are enabled, account is then not private or vice cera
     *
     */
    toggleSwitch () {
        this.setState(prevState => ({
            isPrivate: !prevState.isPrivate
        }));
        let cm = new ClientManager();
        let client = cm.createUsersClient();

        let req = new UpdateUserInfoRequest();
        if (this.state.isPrivate == true) {
            req.setIsprivate("1");
        } else {
            req.setIsprivate("0");
        }
        req.setBio(this.state.myUser.getBio());
        req.setUserid(this.state.myUserid);
        req.setEmail(this.state.myUser.getEmail());
        req.setBirthday(this.state.myUser.getBirthday());
        req.setDesiredusername(this.state.myUser.getUsername());
        req.setCity(this.state.myUser.getCity());
        req.setTriggers(this.state.myUser.getTriggers());

        return client.updateUserInfo(req, { 'Authorization': this.state.authString }).then(res =>
            console.log(res)
        ).catch(error => {
            console.log("There was an error.");
            console.log(error)
        });

    }

    /**
     * set triggers based on input
     *@param {String} triggerString input in // format
     */
    setTriggers(triggerString) {
        this.setState({
            triggerString: triggerString
        })
    }

    /**
     * store triggers and update user info
     * @return {Promise<T | void>}
     */
    storeTriggers() {
        let cm = new ClientManager();
        let client = cm.createUsersClient();

        let req = new UpdateUserInfoRequest();
        req.setBio(this.state.myUser.getBio());
        req.setUserid(this.state.myUserid);
        req.setEmail(this.state.myUser.getEmail());
        req.setBirthday(this.state.myUser.getBirthday());
        req.setDesiredusername(this.state.myUser.getUsername());
        req.setCity(this.state.myUser.getCity());
        req.setTriggers(this.state.triggerString);

        return client.updateUserInfo(req, { 'Authorization': this.state.authString }).then(res =>
            console.log(res)
        ).catch(error => {
            console.log("There was an error.");
            console.log(error)
        });

    }

    render() {
        /**
         * Renders setting screen components.
         * @returns {Component}
         */
        return (
            <SafeAreaView style={KIC_Style.outContainer}>
                <FeedHeader navigation={this.props.navigation} />
                <SafeAreaView style={[KIC_Style.innerContainer, {marginTop:30}]}>
                <Image
                    style={{width: 180, height: 180, resizeMode: 'contain'}}
                    source = {require('../assets/kic.png')}
                />
                <Text>Keeping It Casual Explore Page!</Text>
                <Text style = {{margin: 30}}>Set Account as Private</Text>
                <Switch
                    style = {{marginTop: 30}}
                    trackColor={{ false: "#b3d2db", true: "#7ab7dd" }}
                    thumbColor={this.state.isPrivate ? "#ffff" : "#b3d2db"}
                    ios_backgroundColor="#ffff"
                    onValueChange={this.toggleSwitch}
                    value={this.state.isPrivate}
                />
                <Text style = {{marginTop: 30}}> Current Triggers: {this.state.triggerString} </Text>
                <TextInput
                    style={KIC_Style.postInput}
                    textAlign = {'center'}
                    onChange={(e) => this.setTriggers(e.nativeEvent.text)}
                    placeholder="Write any triggers in // format . . ."
                />
                <TouchableOpacity
                    style={KIC_Style.button2}
                    onPress={() => this.storeTriggers()}>
                    <Text style={KIC_Style.button_font}> Store Triggers </Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
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
});

export default SettingsPage;