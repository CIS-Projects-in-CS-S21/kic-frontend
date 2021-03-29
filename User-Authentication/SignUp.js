/**
 * @fileoverview The screen for the signup page, containing a link
 * back to the log in page.
 */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { GetJWTTokenRequest, AddUserRequest, GetUserByIDRequest, UpdateUserInfoRequest } from "../gen/proto/users_pb";
import { UsersClient } from "../gen/proto/UsersServiceClientPb";
import TokenManager from './TokenManager';
import UserManager from './UserManager';
import UsersClientManager from './UsersClientManager.js';
import { Date } from "../gen/proto/common_pb";
import KIC_Style from "../Components/Style";
import { Text, TouchableOpacity, Image, View, TextInput } from "react-native";

/**
 * @class Contains function for rendering the signup page
 */

export default function signUp() {
    const navigation = useNavigation();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [bio, setBio] = useState("");
    const [myUser, setMyUser] = useState("");

    const handleSubmit = evt => {
        evt.preventDefault();
        if (password1 !== password2) {
            alert('Error: Passwords must be equal.');
        } else if (username == null || username == "") {
            alert('Error: Must input username');
        } else if (password1 == null || password1 == "") {
            alert('Error: Must input password');
        } else if (password2 == null || password2 == "") {
            alert('Error: Must input password');
        } else if (password1.length < 8) {
            alert('Error: Passwords must be at least 8 characters.');
        } else if (email.includes("@") == false) {
            alert('Error: Must include a valid email.');
        } else if (firstName == "" || lastName == "") {
            alert('Missing first or last name entries.');
        } else if (bio.length >= 250) {
            alert('Sorry, your bio must be less than 250 characters long!');
        } else {
            makeRequest();
        }
    };

    const makeRequest = async () => {
      callAddUser().then(response => {
        console.log("Successfully added user");
      }).catch(error => {
        console.log(error);
      });
    }
    const callAddUser = () => {
        let ucm = new UsersClientManager();
        let client = ucm.createClient();

        let req = new AddUserRequest();
        let date = new Date();
        date.setYear(1998);
        date.setMonth(8);
        date.setDay(21);
        req.setEmail(email);
        req.setBirthday(date);
        req.setCity("city");
        req.setDesiredusername(username);
        req.setDesiredpassword(password1);

        return client.addUser(req, {}).then(res => {callGetJWTToken(client)});
    }
    const callGetJWTToken = (client) => {
        let req = new GetJWTTokenRequest();
        req.setUsername(username);
        req.setPassword(password1);

        return client.getJWTToken(req, {}).then(res => {callStoreToken(res)});
    }
    const callStoreToken = (res) => {
        let tm = new TokenManager();
        return tm.storeToken(res.getToken()).then(res => {callGetAuthString()});
    }
    const callGetAuthString = () => {
        console.log("callgetauthstr");
        let um = new UserManager();
        return um.getAuthString().then(authString => {callGetUserID(um, authString)});
    }
    const callGetUserID = (um, authString) => {
        console.log("callgetuserid");
        return um.getMyUserID().then(userID => {callGetUserByUserID(authString, userID)});
    }
    const callGetUserByUserID = (authString, userID) => {
        console.log("callgetuserbyuserid");
        let ucm = new UsersClientManager();
        let client = ucm.createClient();

        let req = new GetUserByIDRequest();
        req.setUserid(userID);

        return client.getUserByID(req, {'Authorization': authString}).then(res => {callUpdateUserInfo(client, authString, userID)});
    }
    const callUpdateUserInfo = (client, authString, userID) => {
        console.log("callupdateuserinfo");
        let req = new UpdateUserInfoRequest();
        req.setUserid(userID);
        req.setBio(bio);

        return client.updateUserInfo(req, {'Authorization': authString}).then(res => { finishSignUp(res) });
    }
    const finishSignUp = (res) => {
        console.log("User: " + res.getUpdateduser());
        navigation.navigate('LogIn');
    }

    return (
        <View style={KIC_Style.container}>
            <Text style={KIC_Style.title}>Keeping It Casual: Sign Up Page</Text>
            <Image
                style={{ width: 180, height: 180, alignItems: "center", resizeMode: 'contain' }}
                source={require('../assets/kic.png')} />
            <TextInput
                style={KIC_Style.input}
                value={firstName}
                onChange={e => setFirstName(e.nativeEvent.text)}
                placeholder=" First name"
                required="required" />
            <TextInput
                style={KIC_Style.input}
                value={lastName}
                onChange={e => setLastName(e.nativeEvent.text)}
                placeholder=" Last name"
                required="required" />
            <TextInput
                style={KIC_Style.input}
                value={username}
                onChange={e => setUserName(e.nativeEvent.text)}
                placeholder=" Username"
                required="required" />
            <TextInput
                style={KIC_Style.input}
                value={email}
                onChange={e => setEmail(e.nativeEvent.text)}
                placeholder=" Email"
                required="required" />
            <TextInput
                style={KIC_Style.input}
                value={password1}
                onChange={e => setPassword1(e.nativeEvent.text)}
                placeholder=" Password"
                required="required"
                secureTextEntry={true} />
            <TextInput
                style={KIC_Style.input}
                value={password2}
                onChange={e => setPassword2(e.nativeEvent.text)}
                placeholder=" Retype password"
                required="required"
                secureTextEntry={true} />
            <TextInput
                style={KIC_Style.input}
                value={bio}
                onChange={e => setBio(e.nativeEvent.text)}
                placeholder=" Bio (max. 250 characters)" />
            <TouchableOpacity
                style={KIC_Style.button}
                onPress={handleSubmit}>
                <Text style={KIC_Style.button_font}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={KIC_Style.button}
                onPress={() => navigation.navigate('LogIn')}>
                <Text style={KIC_Style.button_font}>Log In</Text>
            </TouchableOpacity>
        </View>
    );
}

