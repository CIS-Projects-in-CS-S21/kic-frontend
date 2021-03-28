/**
 * @fileoverview A testing suite for UsersClientManager functions, which manages the UsersClient of a session.
 */

import UsersClientManager from "../User-Authentication/UsersClientManager";

test('createUsersClientIsTruthy', () => {

    // Create a UsersClientManager
    let ucm = new UsersClientManager();

    // Function should return a client
    expect(ucm.createClient()).toBeTruthy();

});
