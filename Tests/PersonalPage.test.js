/**
 * @fileoverview A testing suite for PersonalPage tests.
 */

import { UsersClient } from "../gen/proto/UsersServiceClientPb";
import { GetJWTTokenRequest, AddUserRequest, GetUserByUsernameRequest, GetUserByIDRequest } from '../gen/proto/users_pb';
import { FriendsClient } from "../gen/proto/FriendsServiceClientPb";
import { GetFriendsForUserRequest } from '../gen/proto/friends_pb';
import { MediaStorageClient } from "../gen/proto/MediaServiceClientPb";
import { GetFilesByMetadataRequest } from '../gen/proto/media_pb';

const un = "kic_team";
const email = "email@gmail.com";
const url = "https://api.keeping-it-casual.com";
authString = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTkwMTYzNjYsInVpZCI6IjEyOCJ9.Qeo6Xowy6XWih3XXoILgePC6frLoMCcFNBkbP_iBNeE";
const userid = '128';

/**
* @function getUserFriends
* @return success if getFriendsForUser() does not return a user given an invalid username
*/
test('shouldReturnUserFriends', () => {

    let client = new UsersClient(url);

    let req = new GetUserByUsernameRequest();

    // This user has at least one friend
    req.setUsername(un);

    client.getUserByUsername(req, {'Authorization': authString}).then(res => {
        let user = res.getUser();

        let client = new FriendsClient(url);
        let req = new GetFriendsForUserRequest();
        req.setUser(user);

        client.getFriendsForUser(req, {'Authorization': authString}).then(res => {
            expect(res.getFriendsList().length).not.toBe(0);
        }).catch(e => {
            console.log(e);
        });

    }).catch(e => {
        console.log(e);
    });
});

/**
* @function shouldReturnUserPosts
* @return success if getFilesWithMetadata() returns a non-empty array of posts for a user that has at least one post.
*/
test('shouldReturnUserPosts', () => {

    let req = new GetFilesByMetadataRequest();
    let desiredMap = req.getDesiredmetadataMap();
    desiredMap.set("userID", userid);
    let client = new MediaStorageClient(url);

    client.getFilesWithMetadata(req, {'Authorization': authString}).then(res => {
        expect(res.getFileinfosList().length).not.toBe(0);
    }).catch(e => {
        console.log(e);
    });
});

/**
* @function shouldReturnUserDetails
* @return success if getUserByID() returns an array of correct user details.
*/
test('shouldReturnUserDetails', () => {

    let req = new GetUserByIDRequest();
    req.setUserid('163');

    let client = new UsersClient(url);

    client.getUserByID(req, {'Authorization': authString}).then(res => {
        let user = res.getUser();
        expect(user.getUsername()).toBe('loremipsum');
        expect(user.getEmail()).toBe('loremipsum@gmail.com');
        expect(user.getBio()).toBe('lorem ipsum');
    }).catch(e => {
        console.log(e);
    });
});

