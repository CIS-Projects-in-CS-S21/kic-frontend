/**
 * @fileoverview A class for creating users, friends, feed, media storage, and health tracking service clients.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { UsersClient } from "../gen/proto/UsersServiceClientPb";
import { MediaStorageClient } from "../gen/proto/MediaServiceClientPb";
import { FeedClient } from "../gen/proto/FeedServiceClientPb";
import { FriendsClient } from "../gen/proto/FriendsServiceClientPb";
import { HealthTrackingClient } from "../gen/proto/HealthServiceClientPb";

export default class ClientManager {
    /**
    * Checks for production or development mode, then sets the correct URL to use
    *
    * @function getURL
    * @return {String} The URL to use
    */
    getURL = () => {
        let url = "";

        {/* Check if running in production or development*/ }
        if (__DEV__) {
          console.log("Running in development mode");
          url = "http://test.api.keeping-it-casual.com";
        } else {
          console.log("Running in production mode");
          url = "https://test.api.keeping-it-casual.com";
        }
        return url;
    }

    /**
    * Initializes a UsersClient using the appropriate url, then
    * returns the client
    *
    * @function createUsersClient
    * @return {UsersClient} The UsersClient created
    */
    createUsersClient = () => {
        const client = new UsersClient(this.getURL());

        return client;
    }

    /**
    * Initializes a MediaServiceClient using the appropriate url, then
    * returns the client
    *
    * @function createMediaServiceClient
    * @return {MediaServiceClient} The MediaServiceClient created
    */
    createMediaClient = () => {
        const client = new MediaStorageClient(this.getURL());

        return client;
    }

    /**
    * Initializes a FeedClient using the appropriate url, then
    * returns the client
    *
    * @function createFeedClient
    * @return {FeedClient} The FeedClient created
    */
    createFeedClient = () => {
        const client = new FeedClient(this.getURL());

        return client;
    }

    /**
    * Initializes a HealthTrackingClient using the appropriate url, then
    * returns the client
    *
    * @function createHealthClient
    * @return {HealthTrackingClient} The HealthTrackingClient created
    */
    createHealthClient = () => {
        const client = new HealthTrackingClient(this.getURL());

        return client;
    }

    /**
    * Initializes a FriendsClient using the appropriate url, then
    * returns the client
    *
    * @function createFriendsClient
    * @return {FriendsClient} The FriendsClient created
    */
    createFriendsClient = () => {
        const client = new FriendsClient(this.getURL());

        return client;
    }

}
