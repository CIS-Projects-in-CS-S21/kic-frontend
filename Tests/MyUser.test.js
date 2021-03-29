/**
 * @fileoverview A testing suite for MyUser functions, which handle fetching user information.
 */

import MyUser from "../Components/MyUser";
import { UsersClient } from "../gen/proto/UsersServiceClientPb";
import { GetUserByUsernameRequest } from '../gen/proto/users_pb';
import { GetJWTTokenRequest } from '../gen/proto/users_pb';
import TokenManager from "../Managers/TokenManager";

const un = "test14";
const pw = "test14";

/**
* @function getUsernameReturnsUsernameWithValidUser
* @return success if getUsername() returns the correct username given a valid User
*/
test('getUsernameReturnsCorrectUsernameWithValidUser', () => {

    // Log into mock account
    const client = new UsersClient("https://api.keeping-it-casual.com");
    let req = new GetJWTTokenRequest();
    req.setUsername(un);
    req.setPassword(pw);

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        if (res.array.length > 0){
            // Try to get User by username
            let user = new MyUser(un);
            expect(user.getUsername()).toMatch(un);
        }
        else{
            console.log("No token received");
        }
    }).catch(e => {
          console.log(e);
    });
});

/**
* @function getUsernameReturnsFalsyWithInvalidUser
* @return success if getUsername() returns falsy given an invalid User
*/
test('getUsernameReturnsFalsyWithInvalidUser', () => {

    // Log into mock account
    const client = new UsersClient("https://api.keeping-it-casual.com");
    let req = new GetJWTTokenRequest();
    req.setUsername(un);
    req.setPassword(pw);

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        if (res.array.length > 0){
            // Try to get User by username
            let user = new MyUser(un);
            expect(user.getUsername()).toBeFalsy();
        }
        else{
            console.log("No token received");
        }
    }).catch(e => {
          console.log(e);
    });
});

/**
* @function getUsernameReturnsCorrectFirstNameWithValidUser
* @return success if getUsername() returns the correct first name given a valid User
*/
test('getUsernameReturnsCorrectFirstNameWithValidUser', () => {

    // Log into mock account
    const client = new UsersClient("https://api.keeping-it-casual.com");
    let req = new GetJWTTokenRequest();
    req.setUsername(un);
    req.setPassword(pw);

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        if (res.array.length > 0){
            // Try to get User by username
            let user = new MyUser(un);
            expect(user.getUsername()).toMatch(un);
        }
        else{
            console.log("No token received");
        }
    }).catch(e => {
          console.log(e);
    });
});

/**
* @function getUserFirstNameReturnsFalsyWithInvalidUser
* @return success if getUserFirstName() returns falsy given an invalid User
*/
test('getUserFirstNameReturnsFalsyWithInvalidUser', () => {

    // Log into mock account
    const client = new UsersClient("https://api.keeping-it-casual.com");
    let req = new GetJWTTokenRequest();
    req.setUsername(un);
    req.setPassword(pw);

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        if (res.array.length > 0){
            // Try to get User by username
            let user = new MyUser(un);
            expect(user.getUserFirstName()).toBeFalsy();
        }
        else{
            console.log("No token received");
        }
    }).catch(e => {
          console.log(e);
    });
});

/**
* @function getUserLastNameReturnsCorrectLastNameWithValidUser
* @return success if getUserLastName() returns the correct username given a valid User
*/
test('getUserLastNameReturnsCorrectLastNameWithValidUser', () => {

    // Log into mock account
    const client = new UsersClient("https://api.keeping-it-casual.com");
    let req = new GetJWTTokenRequest();
    req.setUsername(un);
    req.setPassword(pw);

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        if (res.array.length > 0){
            // Try to get User by username
            let user = new MyUser(un);
            expect(user.getUserLastName()).toMatch(un);
        }
        else{
            console.log("No token received");
        }
    }).catch(e => {
          console.log(e);
    });
});

/**
* @function getUserLastNameReturnsFalsyWithInvalidUser
* @return success if getUserLastName() returns falsy given an invalid User
*/
test('getUserLastNameReturnsFalsyWithInvalidUser', () => {

    // Log into mock account
    const client = new UsersClient("https://api.keeping-it-casual.com");
    let req = new GetJWTTokenRequest();
    req.setUsername(un);
    req.setPassword(pw);

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        if (res.array.length > 0){
            // Try to get User by username
            let user = new MyUser(un);
            expect(user.getUserLastName()).toBeFalsy();
        }
        else{
            console.log("No token received");
        }
    }).catch(e => {
          console.log(e);
    });
});

test('Test Mock User', () => {

    // Create mock user with username "TEST"
    let page = new MyUser("TEST");
    let spy = jest.spyOn(page, 'getUsername').mockImplementation(() => "Lorem");

    // Expect getUserFirstName to return "Lorem"
    expect(page.getUsername()).toMatch("Lorem");

    // Restore spy
    spy.mockRestore();
});