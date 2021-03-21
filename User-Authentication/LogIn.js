/**
 * @fileoverview Login page - allows users to login to their account.
 */
import './SignUpStyle.css';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; 
import { useState} from 'react';
import {Button, Image} from 'react-native';
import { UsersClient } from "../gen/proto/UsersServiceClientPb";
import { GetJWTTokenRequest } from '../gen/proto/users_pb';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TokenManager from './TokenManager';
import {TouchableOpacity, View, Text} from "react-native-web";
import KIC_Style from "../Components/Style";

export default function logIn() {

  const navigation = useNavigation(); 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    let url = "";

    // Check if running in production or development
    if (__DEV__) {
        console.log("Running in development mode");
        url = "http://test.api.keeping-it-casual.com";
    } else {
        console.log("Running in production mode");
        url = "https://api.keeping-it-casual.com";
    }
    const client = new UsersClient(url);

    // Set request for GetJWTTokenRequest
    let req = new GetJWTTokenRequest();
    req.setUsername(username);
    req.setPassword(password);

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        // On successful login, store token and go to user feed
        if (res.array.length > 0){
            // Log token to store
            console.log("Should store: " + res);

            // Create TokenManager
            let tokenManager = new TokenManager();

            // Clear token
            tokenManager.forgetToken();

            // Store token
            tokenManager.storeToken(res);

            // Try to retrieve token and log in console
            let token = tokenManager.getToken();
            console.log("Retrieved " + token);

            navigation.navigate('TabNavigation');
        }
        else{
            console.log("No token received!");
            // ALERT USER: WRONG PASSWORD
            alert("Incorrect password. Please try again");
        }
    }).catch(e => {
          console.log(e);
          alert("Account does not exist. Please sign up or enter valid account credentials.")
    });
  };

  return (
    <View style = {KIC_Style.container}>
        <div className="login">
          <h1>Keeping It Casual: Log In Page</h1>
          <Image
                style={{width: 180, height: 180, alignItems: "center", resizeMode: 'contain'}}
                source = {require('../assets/kic.png')}
          />
          <div className="form">
                  <form onSubmit={handleSubmit}>
                    <div className="formInput">
                      <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="formDefault" placeholder="Username" required="required" />
                    </div>
                    <div className="formInput">
                      <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="formDefault" placeholder="Password" required="required" />
                    </div>
                    <div className="formInput">
                        <button type="submit" value="submit">Log in</button>
                    </div>
                  </form>
                  <TouchableOpacity style={KIC_Style.button} onPress={() =>
                      navigation.navigate('SignUp')
                  }>
                  <Text style = {KIC_Style.button_font}>Sign Up</Text>
                  </TouchableOpacity>
          </div>
        </div>
    </View>
  );
}