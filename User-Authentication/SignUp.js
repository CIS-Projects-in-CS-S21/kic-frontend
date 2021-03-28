/**
 * @fileoverview The screen for the signup page, containing a link
 * back to the log in page.
 */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { GetJWTTokenRequest, AddUserRequest, UpdateUserInfoRequest } from "../gen/proto/users_pb";
import { UsersClient } from "../gen/proto/UsersServiceClientPb";
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
        req.setCity("test")
        req.setDesiredusername(username)
        req.setDesiredpassword(password1)

        // req.setBio(bio)

        // send adduser request
        client.addUser(req, {}).then(res => {
            {/* On successful signup, return user to login screen for login */ }
            console.log("Signup result: " + res)
            console.log("Created user: " + res.getCreateduser())

            // init request to update user info with bio
            let reqbio = new UpdateUserInfoRequest()
            reqbio.setBio(bio)
            console.log("Bio: " + reqbio.getBio())

            // pass the created user from addUser in? - gives a "s.setdesiredinfo() is not a function" error
            //reqbio.setDesiredinfo(res.getCreateduser())

            // send request to update user info? - gives an "unknown content type received" error
            client.updateUserInfo(reqbio, {}).then(res2 => {
                {/* On successful signup, return user to login screen for login */ }
                console.log("UpdateUserInfo result: " + res2)
                console.log("Updated user: " + res2.getUpdateduser())

                navigation.navigate('LogIn')
            }).catch(e => {
                // updateuserinforequest failed
                console.log(e);
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

