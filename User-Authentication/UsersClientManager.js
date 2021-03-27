/**
 * @fileoverview A class for managing a UsersClient.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { UsersClient } from "../gen/proto/UsersServiceClientPb";

export default class UsersClientManager {
    /**
    * @constructor
    * @property {UsersClient} client The UsersClient that's initialized
    */
    constructor(props) {
        // Only initialize a client if there is not yet a client in AsyncStorage
        if(!(this.hasClientInStorage())){
            this.initAndStoreClient();
        }
    }

    /**
    * Checks for production or development mode, initializes a UsersClient using the appropriate url, stores
    * the resulting client using AsyncStorage, then returns the client
    *
    * @function initClient
    * @return {UsersClient} The UsersClient created
    */
    initAndStoreClient = () => {
        let url = "";

        {/* Check if running in production or development*/ }
        if (__DEV__) {
          console.log("Running in development mode");
          url = "http://test.api.keeping-it-casual.com";
        } else {
          console.log("Running in production mode");
          url = "https://api.keeping-it-casual.com";
        }
        const client = new UsersClient(url);

        // Store client
        this.storeUsersClient(client);

        return client;
    }

    /**
    * Store a UsersClient using AsyncStorage.
    *
    * @async
    * @function storeUsersClient
    * @return {boolean} A boolean signifying if the UsersClient was successfully stored
    */
    storeUsersClient = async (usersclient) => {
        try {
            await AsyncStorage.setItem(
                'MyUsersClient',
                 usersclient
            );
            console.log("Stored client: " + client);
            return true;
        } catch (error) {
            console.log("Error storing client!");
            console.log(error);
            return false;
        }
    }

    /**
    * Removes a UsersClient from AsyncStorage.
    *
    * @async
    * @function forgetUsersClient
    * @return {boolean} A boolean signifying if the UsersClient was successfully removed.
    */
    forgetUsersClient = async () => {
        try {
            await AsyncStorage.removeItem('MyUsersClient');
            return true;
        }
        catch(exception) {
            return false;
        }
    }

    /**
    * Retrieve a UsersClient from AsyncStorage.
    *
    * @async
    * @function getClient
    * @return {UsersClient} The UsersClient retrieved from storage.
    */
    getClient = async () => {
        try {
            AsyncStorage.getItem('MyUsersClient', (err, result) => {
                console.log("Retrieved UsersClient successfully: " + result);
                return result;
            });
        } catch (error) {
            console.log("Error fetching UsersClient!");
            console.log(error);
        }
    }

    /**
    * Check if there is already an existing UsersClient stored in AsyncStorage.
    *
    * @function hasClientInStorage
    * @return {boolean} A boolean signifying if there is an existing UsersClient in AsyncStorage.
    */
    hasClientInStorage = async() => {
        try {
            AsyncStorage.getItem('MyUsersClient', (err, result) => {
                if (result != null){
                    console.log("I have a UsersClient: " + result);
                    return true;
                }
                else{
                    console.log("My UsersClient is null: " + result)
                    return false;
                }
            });
        } catch (error) {
            console.log("I don't have a UsersClient.");
            console.log(error);
            return false;
        }
    }

}