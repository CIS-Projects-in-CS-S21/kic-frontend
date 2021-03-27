/**
 * @fileoverview A testing suite for UsersClientManager functions, which manages the UsersClient of a session.
 */

import UsersClientManager from "../User-Authentication/UsersClientManager";

test('storeUsersClientIsTruthy', () => {

    // Create a UsersClientManager
    let ucm = new UsersClientManager();

    // Clear storage for testing
    ucm.forgetUsersClient();

    // Function should return true
    expect(ucm.storeUsersClient()).toBeTruthy();

});

test('initAndStoreClientIsTruthy', () => {

    // Create a UsersClientManager
    let ucm = new UsersClientManager();

    // Clear storage for testing
    ucm.forgetUsersClient();

    // Function should return a client
    expect(ucm.initAndStoreClient()).toBeTruthy();

});

test('hasClientInStorageIsTruthyWithExistingClient', () => {

    // Create a UsersClientManager
    let ucm = new UsersClientManager();

    // Function should return true
    expect(ucm.hasClientInStorage()).toBeTruthy();

});

test('hasClientInStorageIsFalsyWithNoExistingClient', () => {

    // Create a UsersClientManager
    let ucm = new UsersClientManager();

    // Clear storage for testing
    ucm.forgetUsersClient();

    // Function should return false
    expect(ucm.hasClientInStorage()).toBeFalsy();

});

test('forgetUsersClientIsTruthyAfterClientInit', () => {

    // Create a UsersClientManager. This automatically initializes a client.
    let ucm = new UsersClientManager();

    // Function should return true
    expect(ucm.forgetUsersClient()).toBeTruthy();

});