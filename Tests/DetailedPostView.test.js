/**
 * @fileoverview A testing suite for DetailedPostView tests.
 */

import { UsersClient } from "../gen/proto/UsersServiceClientPb";
import { GetJWTTokenRequest, AddUserRequest, GetUserByUsernameRequest, GetUserByIDRequest } from '../gen/proto/users_pb';
import { FriendsClient } from "../gen/proto/FriendsServiceClientPb";
import { GetFriendsForUserRequest } from '../gen/proto/friends_pb';
import { MediaStorageClient } from "../gen/proto/MediaServiceClientPb";
import { GetFilesByMetadataRequest, DownloadFileRequest } from '../gen/proto/media_pb';

const un = "kic_team";
const email = "email@gmail.com";
const url = "https://api.keeping-it-casual.com";
authString = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTkwMTYzNjYsInVpZCI6IjEyOCJ9.Qeo6Xowy6XWih3XXoILgePC6frLoMCcFNBkbP_iBNeE";
const userid = '128';

/**
* @function shouldReturnPostMetadata
* @return success if getFilesWithMetadata() returns valid files with metadata.
*/
test('shouldReturnPostMetadata', () => {

    let req = new GetFilesByMetadataRequest();
    let desiredMap = req.getDesiredmetadataMap();
    desiredMap.set("userID", userid);
    let client = new MediaStorageClient(url);

    client.getFilesWithMetadata(req, {'Authorization': authString}).then(res => {
        let files = res.getFileinfosList();
        let file = files[0];

        // File composed of a non-empty array of post metadata
        expect(file).toBeTruthy();
    }).catch(e => {
        console.log(e);
    });
});

/**
* @function shouldReturnPostImage
* @return success if downloadFileByName() successfully streams the file's image uri.
*/
test('shouldReturnPostImage', () => {
    let req = new GetFilesByMetadataRequest();
    let desiredMap = req.getDesiredmetadataMap();
    desiredMap.set("userID", userid);
    let client = new MediaStorageClient(url);

    client.getFilesWithMetadata(req, {'Authorization': authString}).then(res => {
        let files = res.getFileinfosList();
        let file = files[0];

        let req = new DownloadFileRequest();
        req.setFileinfo(file);

        let byte64 = '';

        let stream = client.downloadFileByName(req, {'Authorization': this.props.authString});
        stream.on('data', function (response) {
            byte64 += response.getChunk();
        });

        stream.on('status', function (status) {
            // This function prints the status of the stream. This handles errors if they happen
        });

        stream.on('end', function (end) {

            expect(byte64).toBeTruthy();
        });

    }).catch(e => {
        console.log(e);
    });

});

/**
* @function shouldReturnComments
* @return success if getFilesWithMetadata() returns valid files with non-empty comments array.
*/
test('shouldReturnComments', () => {

    let req = new GetFilesByMetadataRequest();
    let desiredMap = req.getDesiredmetadataMap();
    desiredMap.set("userID", userid);
    let client = new MediaStorageClient(url);

    client.getFilesWithMetadata(req, {'Authorization': authString}).then(res => {
        let files = res.getFileinfosList();
        let file = files[0];

        // File composed of a non-empty array of post metadata
        expect(file.get("comments").length).not.toBe(0);
    }).catch(e => {
        console.log(e);
    });
});