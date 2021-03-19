/**
 * @fileoverview Login page - allows users to login to their account.
 */
import './SignUpStyle.css';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; 
import { useState} from 'react';
import { Button } from 'react-native';
import { UsersClient } from "../gen/proto/UsersServiceClientPb";
import { GetJWTTokenRequest } from '../gen/proto/users_pb';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TokenManager from './TokenManager';

export default function logIn() {

  const navigation = useNavigation(); 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    let url = "";
    if (__DEV__) {
        console.log("Running in development mode");
        url = "http://test.api.keeping-it-casual.com";
    } else {
        console.log("Running in production mode");
        url = "https://api.keeping-it-casual.com";
    }

    const client = new UsersClient(url);

    let req = new GetJWTTokenRequest();
    req.setUsername(username);
    req.setPassword(password);

    client.getJWTToken(req, {}).then(res => {
        // On successful login, store token and go to user feed
        if (res.array.length > 0){
            // Log token to store
            console.log("Should store: " + res)

            // Create TokenManager
            let tokenManager = new TokenManager();

            // Store token
            tokenManager.storeToken(res);

            // Try to retrieve token and log in console
            let token = tokenManager.getToken();
            console.log("Retrieved " + token);

            navigation.navigate('TabNavigation')
        }
        else{
            console.log("No token received!")
            // ALERT USER: WRONG PASSWORD
        }
    }).catch(e => {
          console.log(e);
    });
  };

  return (
    <div className="login">
      <h1>Keeping It Casual: Log In Page</h1>
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
              <Button
                  title="Sign up"
                  onPress = {() =>
                      navigation.navigate('SignUp')
                  }
              />
      </div>
    </div>
  );
}