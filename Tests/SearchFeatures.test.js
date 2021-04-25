/**
 * @fileoverview A testing suite for MyUser functions, which handle fetching user information.
 */

import { UsersClient } from "../gen/proto/UsersServiceClientPb";
import { GetJWTTokenRequest, AddUserRequest, GetUserByUsernameRequest } from '../gen/proto/users_pb';
import { Friends } from "../gen/proto/FriendsServiceClientPb";
import { GetRecommendationsForUserRequest } from '../gen/proto/friends_pb';
import ClientManager from "../Managers/ClientManager";

const un = "test14";
const pw = "test14";
const email = "email@gmail.com";
const url = "https://api.keeping-it-casual.com";
authString = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTkwMTYzNjYsInVpZCI6IjEyOCJ9.Qeo6Xowy6XWih3XXoILgePC6frLoMCcFNBkbP_iBNeE";

/**
* @function shouldFindMockUsername
* @return success if getUserByUsername() returns a user given a valid username
*/
test('shouldFindMockUsername', () => {

    let client = new UsersClient(url);

    let req = new GetUserByUsernameRequest();
    req.setUsername(un);
    return client.getUserByUsername(req, {'Authorization': authString}).then(
        res => { let success = res.hasUser();
                 expect(success).toBe(true)});
});

/**
* @function shouldNotFindMockUserName
* @return success if getUserByUsername() does not return a user given an invalid username
*/
test('shouldNotFindMockUserName', () => {

    let client = new UsersClient(url);

    let req = new GetUserByUsernameRequest();
    req.setUsername("NJGJWEIFRGJGJIEFSU98EFW89R4");

    client.getUserByUsername(req, {'Authorization': authString}).then(res => {
        expect(res.getSuccess.toBe(false));
    }).catch(e => {
        expect(res.array.length).toBe(0);
    });
});

/**
* @function shouldRecommendUsers
* @return success if getRecommendationsForUser() returns an array of friend recommendations 10 friend recommendations.
*/
test('shouldRecommendUsers', () => {

    let client = new UsersClient(url);

    let req = new GetUserByUsernameRequest();

    // This user has at least one friend
    req.setUsername("tinky_winky");

    client.getUserByUsername(req, {'Authorization': authString}).then(res => {
        let user = res.getUser();

        let client = new FriendsClient(url);
        let req = new GetRecommendationsForUserRequest();
        req.setUser(user);
        req.setNumberrecommendations(10);

        client.getRecommendationsForUser(req, {'Authorization': authString}).then(res => {
            expect(res.getRecommendationsList().length).toBe(10);
        }).catch(e => {
            console.log(e);
        });

    }).catch(e => {
        console.log(e);
    });
});

/**
* @function shouldNotRecommendUsers
* @return success if getRecommendationsForUser() returns an empty array of friend recommendations.
*/
test('shouldNotRecommendUsers', () => {

    let client = new UsersClient(url);

    let req = new GetUserByUsernameRequest();

    // This user has no friends
    req.setUsername(un);

    client.getUserByUsername(req, {'Authorization': authString}).then(res => {
        let user = res.getUser();

        let client = new FriendsClient(url);
        let req = new GetRecommendationsForUserRequest();
        req.setUser(user);
        req.setNumberrecommendations(10);

        client.getRecommendationsForUser(req, {'Authorization': authString}).then(res => {
            expect(res.getRecommendationsList().length).toBe(0);
        }).catch(e => {
            console.log(e);
        });

    }).catch(e => {
        console.log(e);
    });
});