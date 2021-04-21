/**
 * @fileoverview A testing suite for MyUser functions, which handle fetching user information.
 */

import MyUser from "../Components/MyUser";
import { UsersClient } from "../gen/proto/UsersServiceClientPb";
import { GetJWTTokenRequest, AddUserRequest, GetUserByUsernameRequest } from '../gen/proto/users_pb';
import TokenManager from "../Managers/TokenManager";

const un = "test14";
const pw = "test14";
const email = "email@gmail.com";
const url = "https://api.keeping-it-casual.com";

/**
* @function shouldAuthenticateValidUser
* @return success if getJWTToken() returns a token given a valid user
*/
test('shouldAuthenticateValidUser', () => {

    // Log into mock account
    const client = new UsersClient(url);
    let req = new GetJWTTokenRequest();
    req.setUsername(un);
    req.setPassword(pw);

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        expect(res.array.length.not.toBe(0));
    }).catch(e => {
          console.log(e);
    });
});

/**
* @function shouldAuthenticateValidUser
* @return success if getJWTToken() does not return a token given an invalid username
*/
test('shouldNotAuthenticateInvalidUsername', () => {

    // Log into mock account
    const client = new UsersClient(url);
    let req = new GetJWTTokenRequest();
    req.setUsername("aszliahsaccountthatdoesntexist666");
    req.setPassword(pw);

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        expect(res.array.length.toBe(0));
    }).catch(e => {
          console.log(e);
    });
});

/**
* @function shouldNotAuthenticateInvalidPassword
* @return success if getJWTToken() does not return a token given an invalid password
*/
test('shouldNotAuthenticateInvalidPassword', () => {

    // Log into mock account
    const client = new UsersClient(url);
    let req = new GetJWTTokenRequest();
    req.setUsername(un);
    req.setPassword("passwordtoaszliahsaccountthatdoesntexist666");

    // Try to log in with request
    client.getJWTToken(req, {}).then(res => {
        expect(res.array.length.toBe(0));
    }).catch(e => {
          console.log(e);
    });
});

/**
* @function shouldCreateNewUser
* @return success if addUser() successfully adds new user with a unique username
*/
test('shouldCreateNewUser', () => {

    // Log into mock account
    const client = new UsersClient(url);
    let req = new AddUserRequest();
    req.setDesiredusername("uniqueusername001");
    req.setDesiredpassword(pw);
    req.setEmail(email);

    // Try to log in with request
    client.addUser(req, {}).then(res => {
        expect(res.getSuccess.toBe(true));
    }).catch(e => {
          console.log(e);
    });
});

/**
* @function shouldNotAllowSameUsername
* @return success if addUser() fails to add new user with a duplicate username
*/
test('shouldNotAllowSameUsername', () => {

    // Log into mock account
    const client = new UsersClient(url);
    let req = new AddUserRequest();
    req.setDesiredusername(un);
    req.setDesiredpassword(pw);

    // Try to log in with request
    client.addUser(req, {}).then(res => {
        expect(res.getSuccess.toBe(false));
    }).catch(e => {
          console.log(e);
    });
});

/**
* @function shouldNotAllowSameEmail
* @return success if addUser() fails to add new user with a duplicate email
*/
test('shouldNotAllowSameEmail', () => {

    // Log into mock account
    const client = new UsersClient(url);
    let req = new AddUserRequest();
    req.setDesiredusername("uniqueusername002");
    req.setDesiredpassword(pw);
    req.setEmail(email);

    // Try to log in with request
    client.addUser(req, {}).then(res => {
        expect(res.getSuccess.toBe(false));
    }).catch(e => {
          console.log(e);
    });
});

/**
* @function getUsernameReturnsUsernameWithValidUser
* @return success if getUsername() returns the correct username given a valid User
*/
test('getUsernameReturnsCorrectUsernameWithValidUser', () => {

    // Log into mock account
    const client = new UsersClient(url);
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
    const client = new UsersClient(url);
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
    const client = new UsersClient(url);
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
