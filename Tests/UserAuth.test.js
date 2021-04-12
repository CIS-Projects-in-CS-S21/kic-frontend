/**
 * @fileoverview A testing suite for User Authentication, specifically in generating error messaging.
 */

import TokenManager from "../Managers/TokenManager";
import { AddUserRequest, GetJWTTokenRequest } from "../gen/proto/users_pb";
import {UsersClient} from "../gen/proto/UsersServiceClientPb";
import {Date} from "../gen/proto/common_pb";


test('isAuthenticatedReturnsTrueAfterSuccessfulLogIn', () => {

    // Log into mock account
    const client = new UsersClient("https://api.keeping-it-casual.com");
    let req = new GetJWTTokenRequest();
    req.setUsername("test14");
    req.setPassword("test14");

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        if (res.array.length > 0){
            // Create TokenManager
            let tm = new TokenManager();

            // TEST STORING TOKEN
            tm.storeToken(res);
            // TEST: isAuthenticated should return true
            expect(tm.isAuthenticated()).toBe(true);
        }
        else{
            console.log("No token received");
        }
    }).catch(e => {
        console.log(e);
    });
});


test('getTokenIsTruthyAfterSuccessfulLogIn', () => {

    // Log into mock account
    const client = new UsersClient("https://api.keeping-it-casual.com");
    let req = new GetJWTTokenRequest();
    req.setUsername("test14");
    req.setPassword("test14");

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        if (res.array.length > 0){
            // Create TokenManager
            let tm = new TokenManager();

            // TEST CLEARING TOKEN
            tm.storeToken(res);
            // TEST: isAuthenticated should return a Promise
            expect(tm.getToken()).toBeTruthy();
        }
        else{
            console.log("No token received");
        }
    }).catch(e => {
        console.log(e);
    });
});

test('isAuthenticatedReturnsFalseAfterBadPassword', () => {

    // Create TokenManager
    let tm = new TokenManager();

    // Make sure storage is clear
    tm.forgetToken();

    // Log in using invalid password
    const client = new UsersClient("https://api.keeping-it-casual.com");
    let req = new GetJWTTokenRequest();
    req.setUsername("test14"); //correct username
    req.setPassword("test13"); //incorrect password

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        if (res.array.length > 0){

            // TEST: isAuthenticated should return false
            expect(tm.isAuthenticated()).toBe(false);
        }
        else{
            console.log("No token received");
        }
    }).catch(e => {
        console.log(e);
    });
});

test('isAuthenticatedReturnsFalseAfterBadUsername', () => {

    // Create TokenManager
    let tm = new TokenManager();

    // Make sure storage is clear
    tm.forgetToken();

    // Log in using invalid password
    const client = new UsersClient("https://api.keeping-it-casual.com");
    let req = new GetJWTTokenRequest();
    req.setUsername("test144"); //incorrect username
    req.setPassword("test14"); //correct password

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        if (res.array.length > 0){

            // TEST: isAuthenticated should return false
            expect(tm.isAuthenticated()).toBe(false);
        }
        else{
            console.log("No token received");
        }
    }).catch(e => {
        console.log(e);
    });
});

test('isAuthenticatedReturnsFalseAfterBadSignUpExistingUsername', () => {

    // Create TokenManager
    let tm = new TokenManager();

    // Make sure storage is clear
    tm.forgetToken();

    // Sign up using invalid password
    const client = new UsersClient("https://api.keeping-it-casual.com");
    let req = new AddUserRequest();
    let date = new Date();
    date.setYear(1998);
    date.setMonth(8);
    date.setDay(21);
    req.setEmail("test14@gmail.com");
    req.setBirthday(date);
    req.setCity("city");
    req.setDesiredusername("test14"); //existing username
    req.setDesiredpassword("abcdefgh"); //existing password

    //should not add user with existing username
    client.addUser(req, {})
    // req.setUsername("test14"); // existing username
    // req.setPassword("abcdefgh"); // password

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        if (res.array.length > 0){

            // TEST: isAuthenticated should return false
            expect(tm.isAuthenticated()).toBe(false);
        }
        else{
            console.log("No token received");
        }
    }).catch(e => {
        console.log(e);
    });
});


test('isAuthenticatedReturnsFalseAfterBadSignUpBadPassword', () => {

    // Create TokenManager
    let tm = new TokenManager();

    // Make sure storage is clear
    tm.forgetToken();

    // Sign up using invalid password
    const client = new UsersClient("https://api.keeping-it-casual.com");
    let req = new AddUserRequest();
    let date = new Date();
    date.setYear(1998);
    date.setMonth(8);
    date.setDay(21);
    req.setEmail("test14@gmail.com");
    req.setBirthday(date);
    req.setCity("city");
    req.setDesiredusername("random123"); //new username
    req.setDesiredpassword(""); //no password

    //should not add user with existing username
    client.addUser(req, {})

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        if (res.array.length > 0){

            // TEST: isAuthenticated should return false
            expect(tm.isAuthenticated()).toBe(false);
        }
        else{
            console.log("No token received");
        }
    }).catch(e => {
        console.log(e);
    });
});

test('isAuthenticatedReturnsFalseAfterBadSignUpBadPassword2', () => {

    // Create TokenManager
    let tm = new TokenManager();

    // Make sure storage is clear
    tm.forgetToken();

    // Sign up using invalid password
    const client = new UsersClient("https://api.keeping-it-casual.com");
    let req = new AddUserRequest();
    let date = new Date();
    date.setYear(1998);
    date.setMonth(8);
    date.setDay(21);
    req.setEmail("test14@gmail.com");
    req.setBirthday(date);
    req.setCity("city");
    req.setDesiredusername("random123"); //new username
    req.setDesiredpassword("abc"); //too short password

    //should not add user with existing username
    client.addUser(req, {})

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        if (res.array.length > 0){

            // TEST: isAuthenticated should return false
            expect(tm.isAuthenticated()).toBe(false);
        }
        else{
            console.log("No token received");
        }
    }).catch(e => {
        console.log(e);
    });
});

test('isAuthenticatedReturnsFalseAfterBadSignUpBadEmail', () => {

    // Create TokenManager
    let tm = new TokenManager();

    // Make sure storage is clear
    tm.forgetToken();

    // Sign up using invalid password
    const client = new UsersClient("https://api.keeping-it-casual.com");
    let req = new AddUserRequest();
    let date = new Date();
    date.setYear(1998);
    date.setMonth(8);
    date.setDay(21);
    req.setEmail(""); //no email given
    req.setBirthday(date);
    req.setCity("city");
    req.setDesiredusername("random123"); //new username
    req.setDesiredpassword("abcdefgh"); //too short password

    //should not add user with existing username
    client.addUser(req, {})

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        if (res.array.length > 0){

            // TEST: isAuthenticated should return false
            expect(tm.isAuthenticated()).toBe(false);
        }
        else{
            console.log("No token received");
        }
    }).catch(e => {
        console.log(e);
    });
});

test('isAuthenticatedReturnsTrueAfterGoodSignUp', () => {

    // Create TokenManager
    let tm = new TokenManager();

    // Make sure storage is clear
    tm.forgetToken();

    // Sign up using invalid password
    const client = new UsersClient("https://api.keeping-it-casual.com");
    let req = new AddUserRequest();
    let date = new Date();
    date.setYear(1998);
    date.setMonth(8);
    date.setDay(21);
    req.setEmail(""); //no email given
    req.setBirthday(date);
    req.setCity("city");
    req.setDesiredusername("random123456"); //new username
    req.setDesiredpassword("abcdefgh"); //good password

    //should not add user with existing username
    client.addUser(req, {})

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        if (res.array.length > 0){

            // TEST: isAuthenticated should return false
            expect(tm.isAuthenticated()).toBe(true);
        }
        else{
            console.log("Token received");
        }
    }).catch(e => {
        console.log(e);
    });
});

