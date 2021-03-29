/**
 * @fileoverview A testing suite for UsersClientManager functions, which manages the UsersClient of a session.
 */

import ClientManager from "../Managers/ClientManager";

test('createUsersClientIsTruthy', () => {

    // Create a UsersClientManager
    let cm = new ClientManager();

    // Function should return a client
    expect(cm.createUsersClient()).toBeTruthy();

});

test('createFeedClientIsTruthy', () => {

    // Create a UsersClientManager
    let cm = new ClientManager();

    // Function should return a client
    expect(cm.createFeedClient()).toBeTruthy();

});

test('createMediaClientIsTruthy', () => {

    // Create a UsersClientManager
    let cm = new ClientManager();

    // Function should return a client
    expect(cm.createMediaClient()).toBeTruthy();

});

test('createHealthClientIsTruthy', () => {

    // Create a UsersClientManager
    let cm = new ClientManager();

    // Function should return a client
    expect(cm.createHealthClient()).toBeTruthy();

});

test('createFriendsClientIsTruthy', () => {

    // Create a UsersClientManager
    let cm = new ClientManager();

    // Function should return a client
    expect(cm.createFriendsClient()).toBeTruthy();

});