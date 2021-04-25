/**
 * @fileoverview A testing suite for PersonalPage tests.
 */

import { UsersClient } from "../gen/proto/UsersServiceClientPb";
import { GetJWTTokenRequest, AddUserRequest, GetUserByUsernameRequest, GetUserByIDRequest } from '../gen/proto/users_pb';
import { FeedClient } from "../gen/proto/FeedServiceClientPb";
import { GenerateFeedForUserRequest } from "../gen/proto/feed_pb";
import { MediaStorageClient } from "../gen/proto/MediaServiceClientPb";
import { GetFilesByMetadataRequest } from '../gen/proto/media_pb';

const un = "kic_team";
const email = "email@gmail.com";
const url = "https://api.keeping-it-casual.com";
authString = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTkwMTYzNjYsInVpZCI6IjEyOCJ9.Qeo6Xowy6XWih3XXoILgePC6frLoMCcFNBkbP_iBNeE";
const userid = '128';

/**
* @function shouldGetPosts
* @return success if generateFeedForUser() streams at least one post.
*/
test('shouldGetPosts', () => {
    let req = new GenerateFeedForUserRequest();
    req.setUserid(userid);
    let client = new FeedClient();

    let stream = client.generateFeedForUser(req, { 'Authorization': authString });

    stream.on('data', function (response) {
        let file = response.getFileinfo();
        expect(file).toBeTruthy();
    });

    stream.on('status', function (status) {
        //Prints and handles errors
    });


    stream.on('end', function (end) {
        //When stream is over
    });
});