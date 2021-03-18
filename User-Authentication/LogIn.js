/**
 * @fileoverview Login page - allows users to login to their account.
 */
import './SignUpStyle.css';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; 
import { useState} from 'react';
import {Button, SafeAreaView, View} from 'react-native';
import { UsersClient } from "../gen/proto/UsersServiceClientPb";
import { GetJWTTokenRequest } from '../gen/proto/users_pb';
import KIC_Style from "../Components/Style";


export default function logIn() {

  const navigation = useNavigation(); 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    const client = new UsersClient(
      "https://test.api.keeping-it-casual.com"
    );
    let req = new GetJWTTokenRequest();
    req.setUsername(username);
    req.setPassword(password);
    client.getJWTToken(req, {}).then(res => {
      // On successful login, take user to user feed
      console.log(res)
      navigation.navigate('TabNavigation')
    }).catch(e => {
        //else if it does not work, show error messaging with why it did not work
        console.log(e);
        alert("Record not found. Please check username and password.");

    });
  };
  return (
      <View style = {KIC_Style.container}>
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
      </View>
  );
}