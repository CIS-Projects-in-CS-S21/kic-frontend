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

    const makeRequest = () => {
        {/* Create UsersClientManager & create a UsersClient */}
        let ucm = new UsersClientManager()
        let client = ucm.createClient()

        let req = new AddUserRequest()
        let date = new Date()
        date.setYear(1998)
        date.setMonth(8)
        date.setDay(21)
        req.setEmail(email)
        req.setBirthday(date)
        req.setCity("city")
        req.setDesiredusername(username)
        req.setDesiredpassword(password1)

        // CREATE USER
        client.addUser(req, {}).then(res => {
            {/* On successful signup, return user to login screen for login */ }
            console.log("Signup result: " + res)
            console.log("Created user: " + res.getCreateduser())

            /** GET JWT USING NEWLY CREATED ACCOUNT **/
            {/* Set request for GetJWTTokenRequest*/ }
            let reqjwt = new GetJWTTokenRequest();
            console.log("Submitted credentials: username " + username + " and pw " + password1)
            reqjwt.setUsername(username);
            reqjwt.setPassword(password1);

            {/* Create TokenManager*/ }
            let tokenManager = new TokenManager();

            {/* Try to log in with request*/ }
            client.getJWTToken(reqjwt, {}).then(res2 => {
              {/* On successful login, store token and go to user feed*/ }
              if (res2.array.length > 0) {
                {/* Log token to store*/ }
                console.log("Should store: " + res2.getToken());

                {/* Clear token*/ }
                tokenManager.forgetToken();

                {/* Store token*/ }
                tokenManager.storeToken(res2.getToken());

                {/* Try to retrieve token and log in console*/ }
                let token = tokenManager.getToken();
                console.log("Retrieved " + token);

                if(tokenManager.isAuthenticated()) {
                    console.log("I am authenticated! Now trying to retrieve JWT")

                    /** GET AUTHENTICATION FROM JWT **/
                    {/* Get JWT from storage and use for authorization */}
                    let authString = "Bearer "
                    tokenManager.getToken().then(value => {
                        authString += value

                        let extra = value.split(".")[0]
                        let token = value.split(".")[1]

                        //console.log(atob(extra))
                        console.log("Token: " + atob(token))

                        var tokenObj = JSON.parse(atob(token));
                        console.log('User ID from token: ' + tokenObj.uid);

                        {/* Init request for GetUserByIDRequest*/ }
                        let reqgetuser = new GetUserByIDRequest();
                        reqgetuser.setUserid(tokenObj.uid);

                        /** LOOK UP THE USER THAT WAS JUST CREATED **/
                        {/* Use token to make request */}
                        client.getUserByID(reqgetuser, {'Authorization': authString}).then(res3 => {
                            console.log("User found: " + res3);

                            // init request to update user info with bio - setBio works
                            let reqbio = new UpdateUserInfoRequest()
                            console.log("User of id " + tokenObj.uid + ": " + res3)

                            console.log("The updateuserinforequest: " + reqbio)
                            reqbio.setUserid(tokenObj.uid)
                            reqbio.setBio(bio)
                            console.log("New bio to set: " + reqbio.getBio())
                            console.log("The updateuserinforequest after setBio(): " + reqbio)

                            /** USE THE USER WE FOUND TO UPDATE THEIR BIO **/
                            client.updateUserInfo(reqbio, {'Authorization': authString}).then(res4 => {
                                {/* After signup & bio storage, return user to login screen for login */ }

                                //updateUserInfoResponse currently returns true
                                console.log("UpdateUserInfo result: " + res4)

                                //getUpdateduser() currently returns undefined
                                console.log("Updated user: " + res4.getUpdateduser())

                                //error - can't getBio() of undefined since getUpdateduser() returns undefined
                                console.log("Updated user bio: " + res4.getUpdateduser().getBio())
                            }).catch(e4 => {
                                // updateuserinforequest failed
                                console.log(e4);
                            });
                        }).catch(e3 => {
                            console.log(e3);
                            alert("Could not get username.")
                        });
                    }, reason => {
                        console.log(reason)
                    });
                }
                else {
                  alert("Invalid account.");
                }
              }
              else {
                console.log("No token received!");
                {/*ALERT USER: WRONG PASSWORD*/ }
                alert("Incorrect password. Please try again");
              }
            }).catch(e2 => {
              console.log(e2);
              alert("Account does not exist. Please sign up or enter valid account credentials.")
            });
            navigation.navigate('LogIn')
        }).catch(e => {
            console.log(e);
            alert("Invalid signup. Please use different credentials and try again. If problem persists, contact administrators.")
        });





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

