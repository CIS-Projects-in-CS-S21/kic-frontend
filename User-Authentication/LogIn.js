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


export default function logIn() {

  const navigation = useNavigation(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    const client = new UsersClient(
      "http://test.api.keeping-it-casual.com"
    );
    let req = new GetJWTTokenRequest();
    req.getUsername(email);
    req.getPassword(password);
    client.getJWTToken(req, {}).then(res => {
      // On successful login, take user to user feed
      console.log(res)
      navigation.navigate('UserFeed')
    })
  };

  return (
    <div className="login">
      <h1>Keeping It Casual: Log In Page</h1>
      <div className="form">
              <form onSubmit={handleSubmit}>
                <div className="formInput">
                  <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="formDefault" placeholder="Email" required="required" />
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