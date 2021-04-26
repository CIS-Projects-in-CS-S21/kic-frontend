// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// These are messages and services relating to a friend services, such as viewing, adding,
// and removing friends, as well as generating friend recommendations for a user.
'use strict';
var grpc = require('@grpc/grpc-js');
var proto_friends_pb = require('../proto/friends_pb.js');
var proto_common_pb = require('../proto/common_pb.js');

function serialize_kic_friends_AddAwaitingFriendRequest(arg) {
  if (!(arg instanceof proto_friends_pb.AddAwaitingFriendRequest)) {
    throw new Error('Expected argument of type kic.friends.AddAwaitingFriendRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_friends_AddAwaitingFriendRequest(buffer_arg) {
  return proto_friends_pb.AddAwaitingFriendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_friends_AddAwaitingFriendResponse(arg) {
  if (!(arg instanceof proto_friends_pb.AddAwaitingFriendResponse)) {
    throw new Error('Expected argument of type kic.friends.AddAwaitingFriendResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_friends_AddAwaitingFriendResponse(buffer_arg) {
  return proto_friends_pb.AddAwaitingFriendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_friends_ConnectionBetweenUsersResponse(arg) {
  if (!(arg instanceof proto_friends_pb.ConnectionBetweenUsersResponse)) {
    throw new Error('Expected argument of type kic.friends.ConnectionBetweenUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_friends_ConnectionBetweenUsersResponse(buffer_arg) {
  return proto_friends_pb.ConnectionBetweenUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_friends_CreateConnectionForUsersRequest(arg) {
  if (!(arg instanceof proto_friends_pb.CreateConnectionForUsersRequest)) {
    throw new Error('Expected argument of type kic.friends.CreateConnectionForUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_friends_CreateConnectionForUsersRequest(buffer_arg) {
  return proto_friends_pb.CreateConnectionForUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_friends_CreateConnectionForUsersResponse(arg) {
  if (!(arg instanceof proto_friends_pb.CreateConnectionForUsersResponse)) {
    throw new Error('Expected argument of type kic.friends.CreateConnectionForUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_friends_CreateConnectionForUsersResponse(buffer_arg) {
  return proto_friends_pb.CreateConnectionForUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_friends_DeleteConnectionBetweenUsersRequest(arg) {
  if (!(arg instanceof proto_friends_pb.DeleteConnectionBetweenUsersRequest)) {
    throw new Error('Expected argument of type kic.friends.DeleteConnectionBetweenUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_friends_DeleteConnectionBetweenUsersRequest(buffer_arg) {
  return proto_friends_pb.DeleteConnectionBetweenUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_friends_DeleteConnectionBetweenUsersResponse(arg) {
  if (!(arg instanceof proto_friends_pb.DeleteConnectionBetweenUsersResponse)) {
    throw new Error('Expected argument of type kic.friends.DeleteConnectionBetweenUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_friends_DeleteConnectionBetweenUsersResponse(buffer_arg) {
  return proto_friends_pb.DeleteConnectionBetweenUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_friends_GetConnectionBetweenUsersRequest(arg) {
  if (!(arg instanceof proto_friends_pb.GetConnectionBetweenUsersRequest)) {
    throw new Error('Expected argument of type kic.friends.GetConnectionBetweenUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_friends_GetConnectionBetweenUsersRequest(buffer_arg) {
  return proto_friends_pb.GetConnectionBetweenUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_friends_GetFriendsForUserRequest(arg) {
  if (!(arg instanceof proto_friends_pb.GetFriendsForUserRequest)) {
    throw new Error('Expected argument of type kic.friends.GetFriendsForUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_friends_GetFriendsForUserRequest(buffer_arg) {
  return proto_friends_pb.GetFriendsForUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_friends_GetFriendsForUserResponse(arg) {
  if (!(arg instanceof proto_friends_pb.GetFriendsForUserResponse)) {
    throw new Error('Expected argument of type kic.friends.GetFriendsForUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_friends_GetFriendsForUserResponse(buffer_arg) {
  return proto_friends_pb.GetFriendsForUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_friends_GetFriendsUsernamesForUserResponse(arg) {
  if (!(arg instanceof proto_friends_pb.GetFriendsUsernamesForUserResponse)) {
    throw new Error('Expected argument of type kic.friends.GetFriendsUsernamesForUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_friends_GetFriendsUsernamesForUserResponse(buffer_arg) {
  return proto_friends_pb.GetFriendsUsernamesForUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_friends_GetRecommendationsForUserRequest(arg) {
  if (!(arg instanceof proto_friends_pb.GetRecommendationsForUserRequest)) {
    throw new Error('Expected argument of type kic.friends.GetRecommendationsForUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_friends_GetRecommendationsForUserRequest(buffer_arg) {
  return proto_friends_pb.GetRecommendationsForUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_friends_GetRecommendationsForUserResponse(arg) {
  if (!(arg instanceof proto_friends_pb.GetRecommendationsForUserResponse)) {
    throw new Error('Expected argument of type kic.friends.GetRecommendationsForUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_friends_GetRecommendationsForUserResponse(buffer_arg) {
  return proto_friends_pb.GetRecommendationsForUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_friends_UpdateConnectionBetweenUsersRequest(arg) {
  if (!(arg instanceof proto_friends_pb.UpdateConnectionBetweenUsersRequest)) {
    throw new Error('Expected argument of type kic.friends.UpdateConnectionBetweenUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_friends_UpdateConnectionBetweenUsersRequest(buffer_arg) {
  return proto_friends_pb.UpdateConnectionBetweenUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// Interface provided by a service handling fetching and storing data about friends.
var FriendsService = exports.FriendsService = {
  // Request a list of the usernames of all friends of a particular user.
getFriendsUsernamesForUser: {
    path: '/kic.friends.Friends/GetFriendsUsernamesForUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_friends_pb.GetFriendsForUserRequest,
    responseType: proto_friends_pb.GetFriendsUsernamesForUserResponse,
    requestSerialize: serialize_kic_friends_GetFriendsForUserRequest,
    requestDeserialize: deserialize_kic_friends_GetFriendsForUserRequest,
    responseSerialize: serialize_kic_friends_GetFriendsUsernamesForUserResponse,
    responseDeserialize: deserialize_kic_friends_GetFriendsUsernamesForUserResponse,
  },
  // Request a list of the usernames of all awaiting friends of a particular user.
getAwaitingFriendsUsernamesForUser: {
    path: '/kic.friends.Friends/GetAwaitingFriendsUsernamesForUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_friends_pb.GetFriendsForUserRequest,
    responseType: proto_friends_pb.GetFriendsUsernamesForUserResponse,
    requestSerialize: serialize_kic_friends_GetFriendsForUserRequest,
    requestDeserialize: deserialize_kic_friends_GetFriendsForUserRequest,
    responseSerialize: serialize_kic_friends_GetFriendsUsernamesForUserResponse,
    responseDeserialize: deserialize_kic_friends_GetFriendsUsernamesForUserResponse,
  },
  // Request a list of the IDs of all friends of a particular user.
getFriendsForUser: {
    path: '/kic.friends.Friends/GetFriendsForUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_friends_pb.GetFriendsForUserRequest,
    responseType: proto_friends_pb.GetFriendsForUserResponse,
    requestSerialize: serialize_kic_friends_GetFriendsForUserRequest,
    requestDeserialize: deserialize_kic_friends_GetFriendsForUserRequest,
    responseSerialize: serialize_kic_friends_GetFriendsForUserResponse,
    responseDeserialize: deserialize_kic_friends_GetFriendsForUserResponse,
  },
  // Request a list of the IDs of all pending friends of a particular user.
getAwaitingFriendsForUser: {
    path: '/kic.friends.Friends/GetAwaitingFriendsForUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_friends_pb.GetFriendsForUserRequest,
    responseType: proto_friends_pb.GetFriendsForUserResponse,
    requestSerialize: serialize_kic_friends_GetFriendsForUserRequest,
    requestDeserialize: deserialize_kic_friends_GetFriendsForUserRequest,
    responseSerialize: serialize_kic_friends_GetFriendsForUserResponse,
    responseDeserialize: deserialize_kic_friends_GetFriendsForUserResponse,
  },
  // Request information about the connection between two users, checking for existence and strength.
getConnectionBetweenUsers: {
    path: '/kic.friends.Friends/GetConnectionBetweenUsers',
    requestStream: false,
    responseStream: false,
    requestType: proto_friends_pb.GetConnectionBetweenUsersRequest,
    responseType: proto_friends_pb.ConnectionBetweenUsersResponse,
    requestSerialize: serialize_kic_friends_GetConnectionBetweenUsersRequest,
    requestDeserialize: deserialize_kic_friends_GetConnectionBetweenUsersRequest,
    responseSerialize: serialize_kic_friends_ConnectionBetweenUsersResponse,
    responseDeserialize: deserialize_kic_friends_ConnectionBetweenUsersResponse,
  },
  // Request a list of given size of users who might be friends of the requesting user.
getRecommendationsForUser: {
    path: '/kic.friends.Friends/GetRecommendationsForUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_friends_pb.GetRecommendationsForUserRequest,
    responseType: proto_friends_pb.GetRecommendationsForUserResponse,
    requestSerialize: serialize_kic_friends_GetRecommendationsForUserRequest,
    requestDeserialize: deserialize_kic_friends_GetRecommendationsForUserRequest,
    responseSerialize: serialize_kic_friends_GetRecommendationsForUserResponse,
    responseDeserialize: deserialize_kic_friends_GetRecommendationsForUserResponse,
  },
  // Add two users as friends and create a connection between them.
createConnectionForUsers: {
    path: '/kic.friends.Friends/CreateConnectionForUsers',
    requestStream: false,
    responseStream: false,
    requestType: proto_friends_pb.CreateConnectionForUsersRequest,
    responseType: proto_friends_pb.CreateConnectionForUsersResponse,
    requestSerialize: serialize_kic_friends_CreateConnectionForUsersRequest,
    requestDeserialize: deserialize_kic_friends_CreateConnectionForUsersRequest,
    responseSerialize: serialize_kic_friends_CreateConnectionForUsersResponse,
    responseDeserialize: deserialize_kic_friends_CreateConnectionForUsersResponse,
  },
  // Create a friend request between two users.
addAwaitingFriend: {
    path: '/kic.friends.Friends/AddAwaitingFriend',
    requestStream: false,
    responseStream: false,
    requestType: proto_friends_pb.AddAwaitingFriendRequest,
    responseType: proto_friends_pb.AddAwaitingFriendResponse,
    requestSerialize: serialize_kic_friends_AddAwaitingFriendRequest,
    requestDeserialize: deserialize_kic_friends_AddAwaitingFriendRequest,
    responseSerialize: serialize_kic_friends_AddAwaitingFriendResponse,
    responseDeserialize: deserialize_kic_friends_AddAwaitingFriendResponse,
  },
  // Update a connection strength between two users.
updateConnectionBetweenUsers: {
    path: '/kic.friends.Friends/UpdateConnectionBetweenUsers',
    requestStream: false,
    responseStream: false,
    requestType: proto_friends_pb.UpdateConnectionBetweenUsersRequest,
    responseType: proto_friends_pb.ConnectionBetweenUsersResponse,
    requestSerialize: serialize_kic_friends_UpdateConnectionBetweenUsersRequest,
    requestDeserialize: deserialize_kic_friends_UpdateConnectionBetweenUsersRequest,
    responseSerialize: serialize_kic_friends_ConnectionBetweenUsersResponse,
    responseDeserialize: deserialize_kic_friends_ConnectionBetweenUsersResponse,
  },
  // Delete the connection between two users.
deleteConnectionBetweenUsers: {
    path: '/kic.friends.Friends/DeleteConnectionBetweenUsers',
    requestStream: false,
    responseStream: false,
    requestType: proto_friends_pb.DeleteConnectionBetweenUsersRequest,
    responseType: proto_friends_pb.DeleteConnectionBetweenUsersResponse,
    requestSerialize: serialize_kic_friends_DeleteConnectionBetweenUsersRequest,
    requestDeserialize: deserialize_kic_friends_DeleteConnectionBetweenUsersRequest,
    responseSerialize: serialize_kic_friends_DeleteConnectionBetweenUsersResponse,
    responseDeserialize: deserialize_kic_friends_DeleteConnectionBetweenUsersResponse,
  },
  // Delete the pending friend request between two users.
deleteAwaitingFriendBetweenUsers: {
    path: '/kic.friends.Friends/DeleteAwaitingFriendBetweenUsers',
    requestStream: false,
    responseStream: false,
    requestType: proto_friends_pb.DeleteConnectionBetweenUsersRequest,
    responseType: proto_friends_pb.DeleteConnectionBetweenUsersResponse,
    requestSerialize: serialize_kic_friends_DeleteConnectionBetweenUsersRequest,
    requestDeserialize: deserialize_kic_friends_DeleteConnectionBetweenUsersRequest,
    responseSerialize: serialize_kic_friends_DeleteConnectionBetweenUsersResponse,
    responseDeserialize: deserialize_kic_friends_DeleteConnectionBetweenUsersResponse,
  },
};

exports.FriendsClient = grpc.makeGenericClientConstructor(FriendsService);
