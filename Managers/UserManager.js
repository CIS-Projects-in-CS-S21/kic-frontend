/**
 * @fileoverview A class with functions for extracting information about Users
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { UsersClient } from "../gen/proto/UsersServiceClientPb";
import ClientManager from './ClientManager';
import TokenManager from './TokenManager';
import { GetUserByIDRequest, GetUserByUsernameRequest, UpdateUserInfoRequest } from '../gen/proto/users_pb';

import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

export default class UserManager {
    /**
    * Retrieves the active user's unique userid
    *
    * @return {Object} The token.uid object retrieved
    */
    getMyUserID = () => {
        let tm = new TokenManager();
        return tm.getToken().then(value => {
            let extra = value.split(".")[0]
            let token = value.split(".")[1]

            var tokenObj = JSON.parse(atob(token));
            console.log('User ID from token: ' + tokenObj.uid);
            return tokenObj.uid;
        }, reason => {
            console.log(reason)
        });
    }

    /**
    * Builds the authorization header string using the stored token
    *
    * @return {String} The Authorization header built using the token
    */
    getAuthString = () => {
        let tm = new TokenManager();

        let authString = "Bearer "
        return tm.getToken().then(value => {
            authString += value
            return authString;
        }, reason => {
            console.log(reason)
        });
    }

}