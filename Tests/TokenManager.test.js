/**
 * @fileoverview A testing suite for TokenManager functions, which handle token storage, maintenance, and deletion.
 */

import TokenManager from "../User-Authentication/TokenManager";
import { AddUserRequest, GetJWTTokenRequest } from "../gen/proto/users_pb";
import {UsersClient} from "../gen/proto/UsersServiceClientPb";

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

test('isAuthenticatedReturnsFalseAfterBadLogIn', () => {

    // Create TokenManager
    let tm = new TokenManager();

    // Make sure storage is clear
    tm.forgetToken();

    // Log in using invalid credentials
    const client = new UsersClient("https://api.keeping-it-casual.com");
    let req = new GetJWTTokenRequest();
    req.setUsername("test1234234");
    req.setPassword("abcdef");

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

test('getTokenReturnsNullAfterBadLogIn', () => {

    // Create TokenManager
    let tm = new TokenManager();

    // Make sure storage is clear
    tm.forgetToken();

    // Log in using invalid credentials
    const client = new UsersClient("https://api.keeping-it-casual.com");
    let req = new GetJWTTokenRequest();
    req.setUsername("test1234234");
    req.setPassword("abcdef");

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        if (res.array.length > 0){

            // TEST: Expect getToken to return null
            expect(tm.getToken()).toBeNull();
        }
        else{
            console.log("No token received");
        }
    }).catch(e => {
          console.log(e);
    });
});

test('getTokenReturnsNullAfterForgetToken', () => {

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
            tm.forgetToken();

            // getToken should return null
            expect(tm.getToken()).toBeNull();
        }
        else{
            console.log("No token received");
        }
    }).catch(e => {
          console.log(e);
    });
});

test('isAuthenticatedReturnsFalseAfterForgetToken', () => {

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
            tm.forgetToken();
            // isAuthenticated returns false
            expect(tm.isAuthenticated()).toBe(false);
        }
        else{
            console.log("No token received");
        }
    }).catch(e => {
          console.log(e);
    });
});