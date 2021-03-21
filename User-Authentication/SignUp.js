/**
 * @fileoverview The screen for the signup page, containing a link
 * back to the log in page.
 */
import "./SignUpStyle.css";
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { AddUserRequest } from "../gen/proto/users_pb";
import {UsersClient} from "../gen/proto/UsersServiceClientPb";
import {Date} from "../gen/proto/common_pb";
import {Button, Image, View} from "react-native";
import personalPage from "../Personal-Page/PersonalPage"
import KIC_Style from "../Components/Style";
import {Text, TouchableOpacity} from "react-native-web";


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
  
  const handleSubmit = evt => {
    evt.preventDefault(); 
    if(password1 !== password2) {
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
    }else if (firstName == "" || lastName == "") {
        alert('Missing first or last name entries.');
    } else {
      makeRequest();       
    }
}; 

const makeRequest = () => {
    let url = "";
    if (__DEV__) {
        url = "http://test.api.keeping-it-casual.com";
    } else {
        url = "https://api.keeping-it-casual.com";
    }
    const client = new UsersClient(url);
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
    client.addUser(req, {}).then(res => {
        // On successful signup, return user to login screen for login
        console.log(res)
        navigation.navigate('LogIn')
    }).catch(e => {
          console.log(e);
          alert("Invalid signup. Please use different credentials and try again. If problem persists, contact administrators.")
    });
}


  return (
      <View style = {KIC_Style.container}>
          <div className="signUp">
              <h1>Sign Up Page</h1>
              <Image
                  style={{width: 180, height: 180, alignItems: "center", resizeMode: 'contain'}}
                  source = {require('../assets/kic.png')}
              />
              <div className="form">
                    <form onSubmit={handleSubmit}>
                      <div className="formInput">
                          <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="formDefault" placeholder = "First name" required="required"/>
                      </div>
                      <div className="formInput">
                          <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="formDefault" placeholder = "Last name" required="required"/>
                      </div>
                      <div className="formInput">
                          <input type="text" value={username} onChange={e => setUserName(e.target.value)} className="formDefault" placeholder = "Username" required="required"/>
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
                    <TouchableOpacity style={KIC_Style.button} onPress={() =>
                          navigation.navigate('LogIn')
                      }>
                          <Text style = {KIC_Style.button_font}>Log In</Text>
                    </TouchableOpacity>
              </div>
            </div>
        </View>
      );
  }

