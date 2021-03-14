/**
 * @fileoverview Login page - allows users to login to their account.
 */
import './SignUpStyle.css';
import React from 'react';
import { useState } from 'react'; 
import { createStackNavigator } from '@react-navigation/stack';
import {UsersClient} from "../gen/proto/UsersServiceClientPb";
import { GetJWTTokenRequest } from '../gen/proto/users_pb';


export default function logIn() {
  
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  
  const handleSubmit = evt => {
    evt.preventDefault(); 
    //Handle request,  if successful link to User Feed 
    const client = new UsersClient(
      "http://test.api.keeping-it-casual.com"
  );
  let req = new GetJWTTokenRequest();
  req.getUsername(email);
  req.getPassword(password); 
  client.getJWTToken(req, {}).then(res => {
    console.log(res) 
  })
};

  return (
        <div className="login">
          <h1>Keeping It Casual: Log In Page</h1>
          <div className="form"> 
                <form onSubmit={handleSubmit}>
                  <div className="formInput">
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="formDefault" placeholder = "Email" required="required"/>
                  </div>
                  <div className="formInput">
                      <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="formDefault" placeholder = "Password" required="required"/>
                  </div>
                  <div className="formInput">
                      <button type="submit" value="submit">Log In</button> 
                  </div>
                </form>
          </div>
        </div>
      );
  }
