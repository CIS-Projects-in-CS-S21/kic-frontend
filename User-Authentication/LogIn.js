/**
 * @fileoverview Login page - allows users to login to their account.
 */


import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { TextInput, Keyboard, Animated, TouchableOpacity, KeyboardAvoidingView, Text } from 'react-native';
import { GetJWTTokenRequest } from '../gen/proto/users_pb';
import TokenManager from "../Managers/TokenManager";
import ClientManager from '../Managers/ClientManager';
import KIC_Style from "../Components/Style";


export default function logIn() {

  const IMAGE_HEIGHT = 180;
  const IMAGE_HEIGHT_SMALL = (100);
  const imageHeight = new Animated.Value(IMAGE_HEIGHT);
  const TITLE_SIZE = 30;
  const TITLE_SIZE_SMALL = 20;
  const titleSize = new Animated.Value(TITLE_SIZE);
  const navigation = useNavigation();
  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', keyboardWillShow);
    Keyboard.addListener('keyboardWillHide', keyboardWillHide);
    return () => {
      Keyboard.removeListener('keyboardWillShow');
      Keyboard.removeListener('keyboardWillHide');
    }
  }, [])

  const keyboardWillShow = (event) => {
    Animated.timing(imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
      useNativeDriver:false
    }).start();
    Animated.timing(titleSize, {
      duration: event.duration,
      toValue: TITLE_SIZE_SMALL,
      useNativeDriver:false
    }).start();
  };

  const keyboardWillHide = (event) => {
    Animated.timing(imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
      useNativeDriver:false
    }).start();
    Animated.timing(titleSize, {
      duration: event.duration,
      toValue: TITLE_SIZE,
      useNativeDriver:false
    }).start();
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /**
  * Function that handles submitting a login form
  */
  const handleSubmit = evt => {
    evt.preventDefault();

    {/* Create UsersClientManager & create a UsersClient */ }
    let cm = new ClientManager();
    let client = cm.createUsersClient();

    {/* Set request for GetJWTTokenRequest*/ }
    let req = new GetJWTTokenRequest();
    req.setUsername(username);
    req.setPassword(password);

    {/* Try to log in with request*/ }
    client.getJWTToken(req, {}).then(res => {
      {/* On successful login, store token and go to user feed*/ }
      if (res.array.length > 0) {
        {/* Create TokenManager*/ }
        let tokenManager = new TokenManager();

        {/* Clear token*/ }
        tokenManager.forgetToken();

        {/* Store token*/ }
        tokenManager.storeToken(res.getToken());

        {/* Try to retrieve token and log in console*/ }
        let token = tokenManager.getToken();
        console.log("Retrieved " + token);

        if (tokenManager.isAuthenticated()) {
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

  /**
   * Renders the LogIn page
   * @returns {LogIn}
   */
  return (
    <SafeAreaView style={KIC_Style.container}>
      <KeyboardAvoidingView
        style= {KIC_Style.container}
        behavior={"padding"}>
        <Animated.Image
          style={{ width: 180, height: imageHeight, alignItems: "center", resizeMode: 'contain' }}
          source={require('../assets/kic.png')}
        />
        <Animated.Text style={[KIC_Style.title, {fontSize: titleSize}]}>Log In</Animated.Text>
        <TextInput
          style={KIC_Style.authInput}
          value={username}
          onChange={(e) => setUsername(e.nativeEvent.text)}
          placeholder=" Username"
          required="required"
        />
        <TextInput
          style={KIC_Style.authInput}
          value={password}
          onChange={(e) => setPassword(e.nativeEvent.text)}
          placeholder=" Password"
          required="required"
          secureTextEntry={true}
          onSubmitEditing={handleSubmit}
        />
        <TouchableOpacity
          style={KIC_Style.authButton}
          onPress={handleSubmit}>
          <Text style={KIC_Style.button_font}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={KIC_Style.authButton}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={KIC_Style.button_font}>Sign Up</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
