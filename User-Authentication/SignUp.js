/**
 * @fileoverview The screen for the signup page, containing a link
 * back to the log in page.
 */
import "./SignUpStyle.css";
import React from 'react';
import { useState } from 'react'; 
import request from 'users_grpc_web_pb.js'; 
import { AddUserRequest } from "../gen/proto/users_pb";


/**
 * @class Contains function for rendering the signup page
 */

export default function signUp() {
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState(""); 
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState(""); 
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState(""); 
  
  const handleSubmit = evt => {
    evt.preventDefault(); 
    if(password1 !== password2) {
      alert('Error: Passwords must be equal.');
    } else {
      makeRequest(); 
      //Handle request
    }
}; 

const makeRequest = () => {
  const client = new UsersClient("http://test.api.keeping-it-casual.com");
  let req = new AddUserRequest();
  client.addUser(req).then(res => {console.log(res.getSuccess())})
}


  return (
        <div className="signUp">
          <h1>Keeping It Casual: Sign Up Page</h1>
          <div className="form"> 
                <form onSubmit={handleSubmit}>
                  <div className="formInput">
                      <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="formDefault" placeholder = "First name" required="required"/>
                  </div>
                  <div className="formInput">
                      <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="formDefault" placeholder = "Last name" required="required"/>
                  </div>
                  <div className="formInput">
                      <input type="text" value={username} onChange={e => setUserName(e.target.value)} className="formDefault" placeholder = "First name" required="required"/>
                  </div>
                  <div className="formInput">
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="formDefault" placeholder = "Email" required="required"/>
                  </div>
                  <div className="formInput">
                      <input type="password" value={password1} onChange={e => setPassword1(e.target.value)} className="formDefault" placeholder = "Password" required="required"/>
                  </div>
                  <div className="formInput">
                      <input type="password" value={password2} onChange={e => setPassword2(e.target.value)} className="formDefault" placeholder = "Retype password" required="required"/>
                  </div>
                  <div className="formInput">
                      <button type="submit" value="submit">Register</button> 
                  </div>
                </form>
          </div>
        </div>
      );
  }

