/**
 * @fileoverview A class for managing session tokens using AsyncStorage.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class TokenManager {
    /**
    * Store a token using AsyncStorage.
    *
    * @async
    * @param {Object} token - The token to store.
     * @exception error catches error if item is not able to be set
    */
    storeToken = async (token) => {
        try {
            await AsyncStorage.setItem(
                'MyToken',
                 token
            );
            //console.log("Stored token: " + token);
        } catch (error) {
            console.log("Error storing token!");
            console.log(error);
        }
    }

    /**
    * Retrieve a token from AsyncStorage.
    *
    * @async
    * @return {Promise<Token>} The token retrieved from storage.
    */
    getToken = async () => {
        try {
            let token = await AsyncStorage.getItem('MyToken');
            //console.log("Retrieved token successfully: " + token);
            return token
        } catch (error) {
            console.log("Error fetching token!");
            console.log(error);
        }
    }

    /**
    * Clears AsyncStorage and forgets the token.
    *
    * @async
    */
    forgetToken = async() => {
        try {
            let token = await AsyncStorage.removeItem('MyToken');
            //console.log("Removed token successfully: " + token);
            return token
        } catch (error) {
            console.log("Error removing token!");
            console.log(error);
        }
    }

    /**
    * Check if the current session is authenticated by attempting to retrieve the token.
    *
    * @return {boolean} A boolean signifying if the session is authenticated or not.
     * @exception error is caught if authentication is not able to occur
    */
    isAuthenticated = async() => {
        try {
            AsyncStorage.getItem('MyToken', (err, result) => {
                if (result != null){
                    //console.log("I have a token: " + result);
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