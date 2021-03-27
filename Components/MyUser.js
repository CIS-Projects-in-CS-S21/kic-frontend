import { UsersClient } from "../gen/proto/UsersServiceClientPb";
import { GetUserByUsernameRequest } from '../gen/proto/users_pb';
import TokenManager from '../User-Authentication/TokenManager';

export default class MyUser {
    constructor(username) {
        // test values
        this.username = username;
        this.userFirstName = "firstname";
        this.userLastName = "lastname";
    }

    /**
    * Request and return a user's username from the server.
    *
    * @function getUsername
    * @return String The user's username, retrieved from the server
    */
    getUsername() {
        console.log("Trying to get username");
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

        {/* Init token manager */}
        let tm = new TokenManager();

        {/* Set request for GetUserByUserNameRequest*/ }
        let req = new GetUserByUsernameRequest();
        req.setUsername("test14");

        {/* Request username using authorization bearer token header */}
        client.getUserByUsername(req, {'Authorization': 'Bearer ' + tm.getToken()}).then(res => {
          console.log("Tried to get username: " + res);

          //eventually return username from response
          return this.username;
        }).catch(e => {
          console.log(e);
          alert("Could not get username.")
        });
    }

    /**
    * Request and return a user's first name from the server.
    *
    * @function getUserFirstName
    * @return String The user's first name, retrieved from the server
    */
    getUserFirstName() {
        return this.userFirstName;
    }

    /**
    * Request and return a user's last name from the server.
    *
    * @function getUserFirstName
    * @return String The user's last name, retrieved from the server
    */
    getUserLastName() {
        return this.userLastName;
    }
}