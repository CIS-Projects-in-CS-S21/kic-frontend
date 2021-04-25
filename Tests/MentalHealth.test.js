/**
 * @fileoverview A testing suite for Mental Health Log, specifically in terms of storing and deleting entries
 */

import UserManager from "../Managers/UserManager";
import {HealthTrackingClient} from "../gen/proto/HealthServiceClientPb";
import {GetHealthDataForUserRequest} from "../gen/proto/health_pb";
import {UsersClient} from "../gen/proto/UsersServiceClientPb";
import {GetJWTTokenRequest} from "../gen/proto/users_pb";
import TokenManager from "../Managers/TokenManager";

const un = "test424";
const pw = "test424!";




/**
 * @function shouldReturnUserEntries
 * @return success if given a mock user with a given number of MoodEntries, this test should return an array of mock MoodEntries belonging to that user.

 */
test('shouldReturnUserEntries', () => {
    // Log into mock account
    const c = new UsersClient("https://api.keeping-it-casual.com");
    let userReq = new GetJWTTokenRequest();
    userReq.setUsername(un);
    userReq.setPassword(pw);

    // Try to log in with request
    c.getJWTToken(userReq, {}).then(res => {
        if (res.array.length > 0){
            // Create TokenManager
            let tm = new TokenManager();

            // TEST CLEARING TOKEN
            tm.storeToken(res);
            // TEST: isAuthenticated should return a Promise
            expect(tm.getToken()).toBeTruthy();
        }
        else{
            console.log("No token received");
        }
    }).catch(e => {
        console.log(e);
    });

    let client = new HealthTrackingClient("https://api.keeping-it-casual.com")
    //create health client

    let um = new UserManager();
    let authString = um.getAuthString();

    let userID = um.getMyUserID();


    // Create the request & set the active user's ID
    let req = new GetHealthDataForUserRequest();
    req.setUserid(userID);

    client.getHealthDataForUser(req, {'Authorization': authString}).then(res => {
        console.log(res);
    }).catch(error =>
        console.log(error)
    );

});