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
* @function shouldFindLocation
* @return success if getUserByID() returns an array including the user's location.
*/
test('shouldFindLocation', () => {

    let req = new GetUserByIDRequest();
    req.setUserid('163');

    let client = new UsersClient(url);

    client.getUserByID(req, {'Authorization': authString}).then(res => {
        let user = res.getUser();
        expect(user.getCity()).toBe('city');
    }).catch(e => {
        console.log(e);
    });
});

/**
* @function shouldFindLocation
* @return success if getUserByID() returns an array including the user's location.
*/
test('getNearbyProfessionals', () => {
    let req = new GetUserByIDRequest();
    req.setUserid('163');

    let client = new UsersClient(url);

    client.getUserByID(req, {'Authorization': authString}).then(res => {
        let user = res.getUser();
        let city = user.getCity();

        let testurl = 'https://www.google.com/maps/search/mental+health+professionals+near+' + city + '/@39.979961,-75.2054723,13z/data=!3m1!4b1';
        let url = 'https://www.google.com/maps/search/mental+health+professionals+near+city/@39.979961,-75.2054723,13z/data=!3m1!4b1';

        expect(testurl).toMatch(url);

    }).catch(e => {
        console.log(e);
    });

});
