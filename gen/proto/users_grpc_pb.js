// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// These are messages and services relating to users and user authentication.
// Some of the data models that will be used in the end products will be supplied from
// the Envoy project, specifically those found here for external authentication
// services: https://github.com/envoyproxy/envoy/blob/main/api/envoy/service/auth/v3/external_auth.proto
// We will implement the server side logic for the service they define, allowing Istio to
// send gRPC requests to our authentication server.
'use strict';
var grpc = require('@grpc/grpc-js');
var proto_users_pb = require('../proto/users_pb.js');
var proto_common_pb = require('../proto/common_pb.js');

function serialize_kic_users_AddUserRequest(arg) {
  if (!(arg instanceof proto_users_pb.AddUserRequest)) {
    throw new Error('Expected argument of type kic.users.AddUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_users_AddUserRequest(buffer_arg) {
  return proto_users_pb.AddUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_users_AddUserResponse(arg) {
  if (!(arg instanceof proto_users_pb.AddUserResponse)) {
    throw new Error('Expected argument of type kic.users.AddUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_users_AddUserResponse(buffer_arg) {
  return proto_users_pb.AddUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_users_DeleteUserByIDRequest(arg) {
  if (!(arg instanceof proto_users_pb.DeleteUserByIDRequest)) {
    throw new Error('Expected argument of type kic.users.DeleteUserByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_users_DeleteUserByIDRequest(buffer_arg) {
  return proto_users_pb.DeleteUserByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_users_DeleteUserByIDResponse(arg) {
  if (!(arg instanceof proto_users_pb.DeleteUserByIDResponse)) {
    throw new Error('Expected argument of type kic.users.DeleteUserByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_users_DeleteUserByIDResponse(buffer_arg) {
  return proto_users_pb.DeleteUserByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_users_GetJWTTokenRequest(arg) {
  if (!(arg instanceof proto_users_pb.GetJWTTokenRequest)) {
    throw new Error('Expected argument of type kic.users.GetJWTTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_users_GetJWTTokenRequest(buffer_arg) {
  return proto_users_pb.GetJWTTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_users_GetJWTTokenResponse(arg) {
  if (!(arg instanceof proto_users_pb.GetJWTTokenResponse)) {
    throw new Error('Expected argument of type kic.users.GetJWTTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_users_GetJWTTokenResponse(buffer_arg) {
  return proto_users_pb.GetJWTTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_users_GetUserByIDRequest(arg) {
  if (!(arg instanceof proto_users_pb.GetUserByIDRequest)) {
    throw new Error('Expected argument of type kic.users.GetUserByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_users_GetUserByIDRequest(buffer_arg) {
  return proto_users_pb.GetUserByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_users_GetUserByIDResponse(arg) {
  if (!(arg instanceof proto_users_pb.GetUserByIDResponse)) {
    throw new Error('Expected argument of type kic.users.GetUserByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_users_GetUserByIDResponse(buffer_arg) {
  return proto_users_pb.GetUserByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_users_GetUserByUsernameRequest(arg) {
  if (!(arg instanceof proto_users_pb.GetUserByUsernameRequest)) {
    throw new Error('Expected argument of type kic.users.GetUserByUsernameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_users_GetUserByUsernameRequest(buffer_arg) {
  return proto_users_pb.GetUserByUsernameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_users_GetUserByUsernameResponse(arg) {
  if (!(arg instanceof proto_users_pb.GetUserByUsernameResponse)) {
    throw new Error('Expected argument of type kic.users.GetUserByUsernameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_users_GetUserByUsernameResponse(buffer_arg) {
  return proto_users_pb.GetUserByUsernameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_users_GetUserNameByIDRequest(arg) {
  if (!(arg instanceof proto_users_pb.GetUserNameByIDRequest)) {
    throw new Error('Expected argument of type kic.users.GetUserNameByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_users_GetUserNameByIDRequest(buffer_arg) {
  return proto_users_pb.GetUserNameByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_users_GetUserNameByIDResponse(arg) {
  if (!(arg instanceof proto_users_pb.GetUserNameByIDResponse)) {
    throw new Error('Expected argument of type kic.users.GetUserNameByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_users_GetUserNameByIDResponse(buffer_arg) {
  return proto_users_pb.GetUserNameByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_users_UpdateUserInfoRequest(arg) {
  if (!(arg instanceof proto_users_pb.UpdateUserInfoRequest)) {
    throw new Error('Expected argument of type kic.users.UpdateUserInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_users_UpdateUserInfoRequest(buffer_arg) {
  return proto_users_pb.UpdateUserInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_users_UpdateUserInfoResponse(arg) {
  if (!(arg instanceof proto_users_pb.UpdateUserInfoResponse)) {
    throw new Error('Expected argument of type kic.users.UpdateUserInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_users_UpdateUserInfoResponse(buffer_arg) {
  return proto_users_pb.UpdateUserInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// Interface provided by a service handling fetching and storing data about users.
var UsersService = exports.UsersService = {
  // Authenticate the client session and return a JWT that can be utilized for all further contact requiring
// authentication
getJWTToken: {
    path: '/kic.users.Users/GetJWTToken',
    requestStream: false,
    responseStream: false,
    requestType: proto_users_pb.GetJWTTokenRequest,
    responseType: proto_users_pb.GetJWTTokenResponse,
    requestSerialize: serialize_kic_users_GetJWTTokenRequest,
    requestDeserialize: deserialize_kic_users_GetJWTTokenRequest,
    responseSerialize: serialize_kic_users_GetJWTTokenResponse,
    responseDeserialize: deserialize_kic_users_GetJWTTokenResponse,
  },
  // Add a new user to the database.
addUser: {
    path: '/kic.users.Users/AddUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_users_pb.AddUserRequest,
    responseType: proto_users_pb.AddUserResponse,
    requestSerialize: serialize_kic_users_AddUserRequest,
    requestDeserialize: deserialize_kic_users_AddUserRequest,
    responseSerialize: serialize_kic_users_AddUserResponse,
    responseDeserialize: deserialize_kic_users_AddUserResponse,
  },
  // Request user information from a username.
getUserByUsername: {
    path: '/kic.users.Users/GetUserByUsername',
    requestStream: false,
    responseStream: false,
    requestType: proto_users_pb.GetUserByUsernameRequest,
    responseType: proto_users_pb.GetUserByUsernameResponse,
    requestSerialize: serialize_kic_users_GetUserByUsernameRequest,
    requestDeserialize: deserialize_kic_users_GetUserByUsernameRequest,
    responseSerialize: serialize_kic_users_GetUserByUsernameResponse,
    responseDeserialize: deserialize_kic_users_GetUserByUsernameResponse,
  },
  // Request user information from a User ID.
getUserByID: {
    path: '/kic.users.Users/GetUserByID',
    requestStream: false,
    responseStream: false,
    requestType: proto_users_pb.GetUserByIDRequest,
    responseType: proto_users_pb.GetUserByIDResponse,
    requestSerialize: serialize_kic_users_GetUserByIDRequest,
    requestDeserialize: deserialize_kic_users_GetUserByIDRequest,
    responseSerialize: serialize_kic_users_GetUserByIDResponse,
    responseDeserialize: deserialize_kic_users_GetUserByIDResponse,
  },
  // Request only a username from a User ID.
getUserNameByID: {
    path: '/kic.users.Users/GetUserNameByID',
    requestStream: false,
    responseStream: false,
    requestType: proto_users_pb.GetUserNameByIDRequest,
    responseType: proto_users_pb.GetUserNameByIDResponse,
    requestSerialize: serialize_kic_users_GetUserNameByIDRequest,
    requestDeserialize: deserialize_kic_users_GetUserNameByIDRequest,
    responseSerialize: serialize_kic_users_GetUserNameByIDResponse,
    responseDeserialize: deserialize_kic_users_GetUserNameByIDResponse,
  },
  // Delete the user with the given ID, this will need to cascade to other services.
deleteUserByID: {
    path: '/kic.users.Users/DeleteUserByID',
    requestStream: false,
    responseStream: false,
    requestType: proto_users_pb.DeleteUserByIDRequest,
    responseType: proto_users_pb.DeleteUserByIDResponse,
    requestSerialize: serialize_kic_users_DeleteUserByIDRequest,
    requestDeserialize: deserialize_kic_users_DeleteUserByIDRequest,
    responseSerialize: serialize_kic_users_DeleteUserByIDResponse,
    responseDeserialize: deserialize_kic_users_DeleteUserByIDResponse,
  },
  // Update a user's information to that sent by the client.
updateUserInfo: {
    path: '/kic.users.Users/UpdateUserInfo',
    requestStream: false,
    responseStream: false,
    requestType: proto_users_pb.UpdateUserInfoRequest,
    responseType: proto_users_pb.UpdateUserInfoResponse,
    requestSerialize: serialize_kic_users_UpdateUserInfoRequest,
    requestDeserialize: deserialize_kic_users_UpdateUserInfoRequest,
    responseSerialize: serialize_kic_users_UpdateUserInfoResponse,
    responseDeserialize: deserialize_kic_users_UpdateUserInfoResponse,
  },
};

exports.UsersClient = grpc.makeGenericClientConstructor(UsersService);
