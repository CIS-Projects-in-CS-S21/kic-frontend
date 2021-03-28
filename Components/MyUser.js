import { UsersClient } from "../gen/proto/UsersServiceClientPb";
import { GetUserByIDRequest, GetUserByUsernameRequest, UpdateUserInfoRequest } from '../gen/proto/users_pb';
import TokenManager from '../User-Authentication/TokenManager';
import UsersClientManager from '../User-Authentication/UsersClientManager';

export default class MyUser {
    /*
    * Class constructor
    */
    constructor(props) {
        this.username = "default_username";
        this.initMyUser();
    }

    /**
    * Initializes a MyUser with details requested from the server and saves each one
    *
    * @function initMyUser
    */
    initMyUser() {
        {/* Init UsersClientManager & get client */}
        let ucm = new UsersClientManager();
        let client = ucm.createClient();

        {/* Init token manager */}
        let tm = new TokenManager();

        {/* Init request for GetUserByIDRequest*/ }
        let req = new GetUserByIDRequest();

        {/* Get JWT from storage and use for authorization */}
        let authString = "Bearer "
        tm.getToken().then(value => {
            authString += value

            let extra = value.split(".")[0]
            let token = value.split(".")[1]

            //console.log(atob(extra))
            console.log(atob(token))

            var tokenObj = JSON.parse(atob(token));
            console.log('User ID: ' + tokenObj.uid);
            this.userID = tokenObj.uid;
            req.setUserid(tokenObj.uid);

            {/* Use token to make request */}
            client.getUserByID(req, {'Authorization': authString}).then(res => {
                console.log("User: " + res);

                {/* Store user information */}
                this.username = res.getUser().getUsername();
                console.log("Username: " + this.username);

                let bday = res.getUser().getBirthday().toString();
                let year = bday.split(",")[0];
                let month = bday.split(",")[1];
                let day = bday.split(",")[2]
                console.log("Birthday: " + year + " " + month + " " + day);

                this.bio = res.getUser().getBio();
            }).catch(e => {
                console.log(e);
                alert("Could not get username.")
            });
        }, reason => {
            console.log(reason)
        });
    }


    /**
    * Returns username
    *
    * @function getUsername
    * @return String The user's username, retrieved from the server
    */
    getUsername() {
        console.log("Returning username: " + this.username);
        return this.username;
    }

    /**
    * Returns userID
    *
    * @function getUserID
    * @return String The user's unique userID
    */
    getUserID() {
        return this.userID;
    }

    /**
    * Returns birthday
    *
    * @function getBirthday
    * @return Date The user's unique userID
    */
    getBirthday() {
        return this.birthday;
    }

}