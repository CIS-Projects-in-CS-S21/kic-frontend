/**
 * @fileoverview Login page - allows users to login to their account.
 */


import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { TextInput, Image } from 'react-native';
import { UsersClient } from "../gen/proto/UsersServiceClientPb";
import {GetJWTTokenRequest, GetJWTTokenResponse} from '../gen/proto/users_pb';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TokenManager from './TokenManager';
import UsersClientManager from './UsersClientManager.js';
import { TouchableOpacity, View, Text } from "react-native";

export default function logIn() {

  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = evt => {
    evt.preventDefault();

    {/* Create UsersClientManager & create a UsersClient */}
    let ucm = new UsersClientManager();
    let client = ucm.createClient();

    {/* Set request for GetJWTTokenRequest*/ }
    let req = new GetJWTTokenRequest();
    req.setUsername(username);
    req.setPassword(password);

    {/* Try to log in with request*/ }
    client.getJWTToken(req, {}).then(res => {
      {/* On successful login, store token and go to user feed*/ }
      if (res.array.length > 0) {
        {/* Log token to store*/ }
        console.log("Should store: " + res.getToken());

        {/* Create TokenManager*/ }
        let tokenManager = new TokenManager();

        {/* Clear token*/ }
        tokenManager.forgetToken();

        {/* Store token*/ }
        tokenManager.storeToken(res.getToken());

        {/* Try to retrieve token and log in console*/ }
        let token = tokenManager.getToken();
        console.log("Retrieved " + token);
        
        if(tokenManager.isAuthenticated()) {
          console.log("I am authenticated!")
          navigation.navigate('TabNavigation');
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
    }).catch(e => {
      console.log(e);
      alert("Account does not exist. Please sign up or enter valid account credentials.")
    });
  };

  return (
    <View style={KIC_Style.container}>
      <Text style={KIC_Style.title}>Keeping It Casual: Log In Page</Text>
      <Image
        style={{ width: 180, height: 180, alignItems: "center", resizeMode: 'contain' }}
        source={require('../assets/kic.png')}
      />
      <TextInput
        style={KIC_Style.input}
        value={username}
        onChange={(e) => setUsername(e.nativeEvent.text)}
        placeholder=" Username"
        required="required"
      />
      <TextInput
        style={KIC_Style.input}
        value={password}
        onChange={(e) => setPassword(e.nativeEvent.text)}
        placeholder=" Password"
        required="required"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={KIC_Style.button}
        onPress={handleSubmit}>
        <Text style={KIC_Style.button_font}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={KIC_Style.button}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={KIC_Style.button_font}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}