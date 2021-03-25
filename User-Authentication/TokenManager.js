/**
 * @fileoverview A class for managing session tokens using AsyncStorage.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class TokenManager {
    /**
    * Store a token using AsyncStorage.
    *
    * @async
    * @function storeToken
    * @param {Object} token - The token to store.
    */
    storeToken = async (token) => {
        try {
            await AsyncStorage.setItem(
                'MyToken',
                 token
            );
            console.log("Stored token: " + token);
        } catch (error) {
            console.log("Error storing token!");
            console.log(error);
        }
    }

    /**
    * Retrieve a token from AsyncStorage.
    *
    * @async
    * @function getToken
    * @return {Promise<Token>} The token retrieved from storage.
    */
    getToken = async () => {
        try {
            AsyncStorage.getItem('MyToken', (err, result) => {
                console.log("Retrieved token successfully: " + result);
                return result;
            });
        } catch (error) {
            console.log("Error fetching token!");
            console.log(error);
        }
    }

    /**
    * Clears AsyncStorage and forgets the token.
    *
    * @async
    * @function forgetToken
    */
    forgetToken = async() => {
        AsyncStorage.clear();
    }

    /**
    * Check if the current session is authenticated by attempting to retrieve the token.
    *
    * @function getToken
    * @return {boolean} A boolean signifying if the session is authenticated or not.
    */
    isAuthenticated = async() => {
        try {
            AsyncStorage.getItem('MyToken', (err, result) => {
                if (result != null){
                    console.log("I have a token: " + result);
                    return true;
                }
                else{
                    console.log("My token is null: " + result)
                    return false;
                }
            });
        } catch (error) {
            console.log("I don't have a token.");
            console.log(error);
            return false;
        }
    }
}