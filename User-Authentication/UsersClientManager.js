/**
 * @fileoverview A class for managing a UsersClient.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { UsersClient } from "../gen/proto/UsersServiceClientPb";

export default class UsersClientManager {
    /**
    * Checks for production or development mode, initializes a UsersClient using the appropriate url, then
    * returns the client
    *
    * @function createClient
    * @return {UsersClient} The UsersClient created
    */
    createClient = () => {
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

        return client;
    }

}