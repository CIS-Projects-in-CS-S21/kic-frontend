import { UsersClient } from "../gen/proto/UsersServiceClientPb";
import { GetUserByUsernameRequest } from '../gen/proto/users_pb';
import TokenManager from '../User-Authentication/TokenManager';

export default class MyUser {
    constructor(first, last) {
        this.userFirstName = first;
        this.userLastName = last;
        this.numPosts = 6;
    }
    getUserName() {
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

        let tm = new TokenManager();

        {/* Set request for GetUserByUserNameRequest*/ }
        let req = new GetUserByUsernameRequest();
        req.setUsername("test14");

        client.getUserByUsername(req, {'Authorization': 'Bearer ' + tm.getToken()}).then(res => {
          console.log("Tried to get username: " + res);
        }).catch(e => {
          console.log(e);
          alert("Could not get username.")
        });
    }
    getNumPosts() {
        return this.numPosts;
    }
    getUserFirstName() {
        return this.userFirstName;
    }
    getUserLastName() {
        return this.userFirstName;
    }
}