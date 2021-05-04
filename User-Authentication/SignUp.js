/**
 * @fileoverview The screen for the signup page, containing a link
 * back to the log in page.
 */
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { GetJWTTokenRequest, AddUserRequest, GetUserByIDRequest, UpdateUserInfoRequest } from "../gen/proto/users_pb";
import { CreateConnectionForUsersRequest } from '../gen/proto/friends_pb';
import { SafeAreaView } from 'react-native-safe-area-context';
import TokenManager from "../Managers/TokenManager";
import ClientManager from '../Managers/ClientManager';
import UserManager from '../Managers/UserManager';
import { Date as CommonDate } from "../gen/proto/common_pb";
import KIC_Style from "../Components/Style";
import { Text, TouchableOpacity, Image, TextInput, Animated, Keyboard, KeyboardAvoidingView } from "react-native";
import { DatePickerModal } from 'react-native-paper-dates';


/**
 * @class Contains function for rendering the signup page
 */

export default function signUp() {

    const IMAGE_HEIGHT = 180;
    const IMAGE_HEIGHT_SMALL = (100);
    const imageHeight = new Animated.Value(IMAGE_HEIGHT);
    const TITLE_SIZE = 30;
    const TITLE_SIZE_SMALL = 12;
    const titleSize = new Animated.Value(TITLE_SIZE);
    const navigation = useNavigation();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [bio, setBio] = useState("");
    const [myUser, setMyUser] = useState("");
    const [birthday, setBirthday] = useState("");
    const [city, setCity] = useState("");
    const [visible, setVisible] = useState(false);
    const [convertedBday, setConvertedBday] = useState(" Choose Birthday"); 

    /**
     * @constant onDismiss represents setting visible to false when dismissed
     */
    const onDismiss = React.useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    /**
     * @constant onChange  represents setting visible to false when there is change
     * @callback date takes in particular date for calendar
     */
    const onChange = React.useCallback(({ date }) => {
        setVisible(false);
        setBirthday(date);
        let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        let month = monthNames[date.getMonth()];
        let day = (date.getDay()+2).toString(); 
        let year = date.getFullYear().toString(); 
        let convertString = " "+ month+ " " +day+ ", "+ year; 
        setConvertedBday(convertString);
        console.log({ date });
    }, []);

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

    // Source: http://stackoverflow.com/questions/497790
    var dates = {
        convert: function (d) {
            // Converts the date in d to a date-object. The input can be:
            //   a date object: returned without modification
            //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
            //   a number     : Interpreted as number of milliseconds
            //                  since 1 Jan 1970 (a timestamp) 
            //   a string     : Any format supported by the javascript engine, like
            //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
            //  an object     : Interpreted as an object with year, month and date
            //                  attributes.  **NOTE** month is 0-11.
            return (
                d.constructor === Date ? d :
                    d.constructor === Array ? new Date(d[0], d[1], d[2]) :
                        d.constructor === Number ? new Date(d) :
                            d.constructor === String ? new Date(d) :
                                typeof d === "object" ? new Date(d.year, d.month, d.date) :
                                    NaN
            );
        },
        compare: function (a, b) {
            // Compare two dates (could be of any type supported by the convert
            // function above) and returns:
            //  -1 : if a < b
            //   0 : if a = b
            //   1 : if a > b
            // NaN : if a or b is an illegal date
            // NOTE: The code inside isFinite does an assignment (=).
            return (
                isFinite(a = this.convert(a).valueOf()) &&
                    isFinite(b = this.convert(b).valueOf()) ?
                    (a > b) - (a < b) :
                    NaN
            );
        },
        inRange: function (d, start, end) {
            // Checks if date in d is between dates in start and end.
            // Returns a boolean or NaN:
            //    true  : if d is between start and end (inclusive)
            //    false : if d is before start or after end
            //    NaN   : if one or more of the dates is illegal.
            // NOTE: The code inside isFinite does an assignment (=).
            return (
                isFinite(d = this.convert(d).valueOf()) &&
                    isFinite(start = this.convert(start).valueOf()) &&
                    isFinite(end = this.convert(end).valueOf()) ?
                    start <= d && d <= end :
                    NaN
            );
        }
    }
    /**
    * Handles submitting a signup form
    */
    const handleSubmit = evt => {
        evt.preventDefault();
        let today = Date();
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
        } else if (city == null || city == "") {
            alert('Must input city.');
        } else if (birthday == null || birthday == "") {
            alert('Must input birthday.');
        } else if (dates.compare(birthday, today) == 1) {
            alert('Birthday cannot be in future.');
        } else {
            makeRequest();
        }
    };

    /**
    * Handles initiating the Promise chain of signup methods
    * @returns {Promise} res The Promise object returned by a callAddUser() call
    */
    const makeRequest = async () => {
        callAddUser().then(response => {
            console.log("Successfully added user");
        }).catch(error => {
            console.log(error);
            if (error.message == 'User already exists') {
                alert('Error: Username or email taken. Please try again.');
            }
        });
    }

    /**
    * Handles making the AddUser request
    * @returns {AddUserResponse} res The response object to a AddUserRequest
    */
    const callAddUser = () => {
        let cm = new ClientManager();
        let client = cm.createUsersClient();

        let req = new AddUserRequest();
        let date = new CommonDate();
        date.setDay(birthday.getDay());
        date.setMonth(birthday.getMonth());
        date.setYear(birthday.getFullYear());
        req.setEmail(email);
        req.setBirthday(date);
        req.setCity(city);
        req.setDesiredusername(username);
        req.setDesiredpassword(password1);

        return client.addUser(req, {}).then(res => { callGetJWTToken(cm, client) });
    }

    /**
    * Handles making a getJWTToken request
    * @returns {GetJWTTokenResponse} res The response object to a GetJWTTokenRequest
    */
    const callGetJWTToken = (cm, client) => {
        let req = new GetJWTTokenRequest();
        req.setUsername(username);
        req.setPassword(password1);

        return client.getJWTToken(req, {}).then(res => { callStoreToken(cm, client, res) });
    }

    /**
    * Handles storing the retrieved token to TokenManager
    * @params {ClientManager} cm The ClientManager to be reused
    * @params {UsersClient} client The UsersClient to be reused
    * @params {GetJWTTokenResponse} res The response object returned by a GetJWTTokenRequest
    * @returns {Promise} res The Promise object returned by a storeToken() call
    */
    const callStoreToken = (cm, client, res) => {
        let tm = new TokenManager();
        return tm.storeToken(res.getToken()).then(res => { callGetAuthString(cm, client) });
    }

    /**
    * Handles fetching the authString from a UserManager
    * @params {ClientManager} cm The ClientManager to be reused
    * @params {UsersClient} client The UsersClient to be reused
    * @returns {String} authString The authorization string to be used in future requests
    */
    const callGetAuthString = (cm, client) => {
        let um = new UserManager();
        return um.getAuthString().then(authString => { callGetUserID(cm, client, um, authString) });
    }

    /**
    * Handles fetching the active user's userID
    * @params {ClientManager} cm The ClientManager to be reused
    * @params {UserManager} um The UserManager to be reused
    * @params {UsersClient} client The UsersClient to be reused
    * @params {String} authString The authorization string to be used in future requests
    * @returns {String} userID The active user's userID
    */
    const callGetUserID = (cm, client, um, authString) => {
        return um.getMyUserID().then(userID => { callGetUserByUserID(cm, client, authString, userID) });
    }

    /**
    * Handles fetching the active user's userID via a GetUserByIDRequest
    * @params {ClientManager} cm The ClientManager to be reused
    * @params {UsersClient} client The UsersClient to be reused
    * @params {String} authString The authorization string to be used in future requests
    * @params {String} userID The active user's userID
    * @returns {GetUserByIDResponse} res The response object to a GetUserByIDRequest
    */
    const callGetUserByUserID = (cm, client, authString, userID) => {
        let req = new GetUserByIDRequest();
        req.setUserid(userID);

        return client.getUserByID(req, { 'Authorization': authString }).then(res => { callUpdateUserInfo(cm, client, authString, userID) });
    }

    /**
    * Handles updating the active user's info via a UpdateUserInfoRequest
    * @params {ClientManager} cm The ClientManager to be reused
    * @params {UsersClient} client The UsersClient to be reused
    * @params {String} authString The authorization string to be used in future requests
    * @params {String} userID The active user's userID
    * @returns {UpdateUserInfoResponse} res The response object to a UpdateUserInfoRequest
    */
    const callUpdateUserInfo = (cm, client, authString, userID) => {
        console.log("callupdateuserinfo");
        let req = new UpdateUserInfoRequest();
        req.setUserid(userID);
        req.setBio(bio);

        return client.updateUserInfo(req, { 'Authorization': authString }).then(res => { addDefaultFriend(cm, authString, res, userID) });
    }

    /**
    * Handles giving the user a default friend via a CreateConnectionForUsersRequest
    * @params {ClientManager} cm The ClientManager to be reused
    * @params {String} authString The authorization string to be used in future requests
    * @params {UpdateUserInfoResponse} res The response object to a UpdateUserInfoRequest
    * @params {String} userID The active user's userID
    * @returns {CreateConnectionForUsersResponse} res The response object to a CreateConnectionForUsersRequest
    */
    const addDefaultFriend = (cm, authString, res, userID) => {
        let req = new CreateConnectionForUsersRequest();
        req.setFirstuserid(userID);
        req.setSeconduserid('153');

        let client = cm.createFriendsClient();

        return client.createConnectionForUsers(req, { 'Authorization': authString }).then(res => { finishSignUp(res) });
    }

    /**
    * The final method in the signup process that redirects user to the login page
    * @params {CreateConnectionForUsersResponse} res The response object to a CreateConnectionForUsersRequest
    */
    const finishSignUp = (res) => {
        navigation.navigate('LogIn');
    }

    return (
        <SafeAreaView style={KIC_Style.container}>
            <KeyboardAvoidingView
                behavior={"padding"}
                style={KIC_Style.container}>
                <Animated.Image
                    style={{ width: 180, height: imageHeight, alignItems: "center", resizeMode: 'contain' }}
                    source={require('../assets/kic.png')} />
                <Animated.Text style={[KIC_Style.title, { fontSize: titleSize }]}>Sign Up</Animated.Text>
                <TextInput
                    style={KIC_Style.authInput}
                    value={firstName}
                    onChange={e => setFirstName(e.nativeEvent.text)}
                    placeholder=" First name"
                    required="required" />
                <TextInput
                    style={KIC_Style.authInput}
                    value={lastName}
                    onChange={e => setLastName(e.nativeEvent.text)}
                    placeholder=" Last name"
                    required="required" />
                <TextInput
                    style={KIC_Style.authInput}
                    value={username}
                    onChange={e => setUserName(e.nativeEvent.text)}
                    placeholder=" Username"
                    required="required" />
                <TextInput
                    style={KIC_Style.authInput}
                    value={email}
                    onChange={e => setEmail(e.nativeEvent.text)}
                    placeholder=" Email"
                    required="required" />
                <TextInput
                    style={KIC_Style.authInput}
                    value={password1}
                    onChange={e => setPassword1(e.nativeEvent.text)}
                    placeholder=" Password"
                    required="required"
                    secureTextEntry={true} />
                <TextInput
                    style={KIC_Style.authInput}
                    value={password2}
                    onChange={e => setPassword2(e.nativeEvent.text)}
                    placeholder=" Retype password"
                    required="required"
                    secureTextEntry={true} />
                <TextInput
                    style={KIC_Style.authInput}
                    value={bio}
                    onChange={e => setBio(e.nativeEvent.text)}
                    placeholder=" Bio (max. 250 characters)" />
                <TextInput
                    style={KIC_Style.authInput}
                    value={city}
                    onChange={e => setCity(e.nativeEvent.text)}
                    placeholder=" City"
                    required="required"
                    onSubmitEditing={handleSubmit} />
                <DatePickerModal
                    visible={visible}
                    onDismiss={onDismiss}
                    date={birthday}
                    onConfirm={onChange}
                    label="Choose Birthday"
                    animationType="slide"
                    mode={"single"}
                    onSubmitEditing={handleSubmit}
                />
                <TouchableOpacity
                    style={[KIC_Style.authInput, {backgroundColor: '#b3d3dc'}]}
                    onPress={() =>
                        setVisible(true)
                    }>
                    <Text style={{color: "white"}}>{convertedBday}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={KIC_Style.authButton}
                    onPress={handleSubmit}>
                    <Text style={KIC_Style.button_font}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={KIC_Style.authButton}
                    onPress={() => navigation.navigate('LogIn')}>
                    <Text style={KIC_Style.button_font}>Log In</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}