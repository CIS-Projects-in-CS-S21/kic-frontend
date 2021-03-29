/**
 * @fileoverview gRPC-Web generated client stub for kic.friends
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_friends_pb from '../proto/friends_pb';


export class FriendsClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetFriendsUsernamesForUser = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_friends_pb.GetFriendsUsernamesForUserResponse,
    (request: proto_friends_pb.GetFriendsForUserRequest) => {
      return request.serializeBinary();
    },
    proto_friends_pb.GetFriendsUsernamesForUserResponse.deserializeBinary
  );

  getFriendsUsernamesForUser(
    request: proto_friends_pb.GetFriendsForUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_friends_pb.GetFriendsUsernamesForUserResponse>;

  getFriendsUsernamesForUser(
    request: proto_friends_pb.GetFriendsForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_friends_pb.GetFriendsUsernamesForUserResponse) => void): grpcWeb.ClientReadableStream<proto_friends_pb.GetFriendsUsernamesForUserResponse>;

  getFriendsUsernamesForUser(
    request: proto_friends_pb.GetFriendsForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_friends_pb.GetFriendsUsernamesForUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.friends.Friends/GetFriendsUsernamesForUser',
        request,
        metadata || {},
        this.methodInfoGetFriendsUsernamesForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.friends.Friends/GetFriendsUsernamesForUser',
    request,
    metadata || {},
    this.methodInfoGetFriendsUsernamesForUser);
  }

  methodInfoGetAwaitingFriendsUsernamesForUser = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_friends_pb.GetFriendsUsernamesForUserResponse,
    (request: proto_friends_pb.GetFriendsForUserRequest) => {
      return request.serializeBinary();
    },
    proto_friends_pb.GetFriendsUsernamesForUserResponse.deserializeBinary
  );

  getAwaitingFriendsUsernamesForUser(
    request: proto_friends_pb.GetFriendsForUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_friends_pb.GetFriendsUsernamesForUserResponse>;

  getAwaitingFriendsUsernamesForUser(
    request: proto_friends_pb.GetFriendsForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_friends_pb.GetFriendsUsernamesForUserResponse) => void): grpcWeb.ClientReadableStream<proto_friends_pb.GetFriendsUsernamesForUserResponse>;

  getAwaitingFriendsUsernamesForUser(
    request: proto_friends_pb.GetFriendsForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_friends_pb.GetFriendsUsernamesForUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.friends.Friends/GetAwaitingFriendsUsernamesForUser',
        request,
        metadata || {},
        this.methodInfoGetAwaitingFriendsUsernamesForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.friends.Friends/GetAwaitingFriendsUsernamesForUser',
    request,
    metadata || {},
    this.methodInfoGetAwaitingFriendsUsernamesForUser);
  }

  methodInfoGetFriendsForUser = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_friends_pb.GetFriendsForUserResponse,
    (request: proto_friends_pb.GetFriendsForUserRequest) => {
      return request.serializeBinary();
    },
    proto_friends_pb.GetFriendsForUserResponse.deserializeBinary
  );

  getFriendsForUser(
    request: proto_friends_pb.GetFriendsForUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_friends_pb.GetFriendsForUserResponse>;

  getFriendsForUser(
    request: proto_friends_pb.GetFriendsForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_friends_pb.GetFriendsForUserResponse) => void): grpcWeb.ClientReadableStream<proto_friends_pb.GetFriendsForUserResponse>;

  getFriendsForUser(
    request: proto_friends_pb.GetFriendsForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_friends_pb.GetFriendsForUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.friends.Friends/GetFriendsForUser',
        request,
        metadata || {},
        this.methodInfoGetFriendsForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.friends.Friends/GetFriendsForUser',
    request,
    metadata || {},
    this.methodInfoGetFriendsForUser);
  }

  methodInfoGetAwaitingFriendsForUser = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_friends_pb.GetFriendsForUserResponse,
    (request: proto_friends_pb.GetFriendsForUserRequest) => {
      return request.serializeBinary();
    },
    proto_friends_pb.GetFriendsForUserResponse.deserializeBinary
  );

  getAwaitingFriendsForUser(
    request: proto_friends_pb.GetFriendsForUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_friends_pb.GetFriendsForUserResponse>;

  getAwaitingFriendsForUser(
    request: proto_friends_pb.GetFriendsForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_friends_pb.GetFriendsForUserResponse) => void): grpcWeb.ClientReadableStream<proto_friends_pb.GetFriendsForUserResponse>;

  getAwaitingFriendsForUser(
    request: proto_friends_pb.GetFriendsForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_friends_pb.GetFriendsForUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.friends.Friends/GetAwaitingFriendsForUser',
        request,
        metadata || {},
        this.methodInfoGetAwaitingFriendsForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.friends.Friends/GetAwaitingFriendsForUser',
    request,
    metadata || {},
    this.methodInfoGetAwaitingFriendsForUser);
  }

  methodInfoGetConnectionBetweenUsers = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_friends_pb.ConnectionBetweenUsersResponse,
    (request: proto_friends_pb.GetConnectionBetweenUsersRequest) => {
      return request.serializeBinary();
    },
    proto_friends_pb.ConnectionBetweenUsersResponse.deserializeBinary
  );

  getConnectionBetweenUsers(
    request: proto_friends_pb.GetConnectionBetweenUsersRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_friends_pb.ConnectionBetweenUsersResponse>;

  getConnectionBetweenUsers(
    request: proto_friends_pb.GetConnectionBetweenUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_friends_pb.ConnectionBetweenUsersResponse) => void): grpcWeb.ClientReadableStream<proto_friends_pb.ConnectionBetweenUsersResponse>;

  getConnectionBetweenUsers(
    request: proto_friends_pb.GetConnectionBetweenUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_friends_pb.ConnectionBetweenUsersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.friends.Friends/GetConnectionBetweenUsers',
        request,
        metadata || {},
        this.methodInfoGetConnectionBetweenUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.friends.Friends/GetConnectionBetweenUsers',
    request,
    metadata || {},
    this.methodInfoGetConnectionBetweenUsers);
  }

  methodInfoGetRecommendationsForUser = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_friends_pb.GetRecommendationsForUserResponse,
    (request: proto_friends_pb.GetRecommendationsForUserRequest) => {
      return request.serializeBinary();
    },
    proto_friends_pb.GetRecommendationsForUserResponse.deserializeBinary
  );

  getRecommendationsForUser(
    request: proto_friends_pb.GetRecommendationsForUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_friends_pb.GetRecommendationsForUserResponse>;

  getRecommendationsForUser(
    request: proto_friends_pb.GetRecommendationsForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_friends_pb.GetRecommendationsForUserResponse) => void): grpcWeb.ClientReadableStream<proto_friends_pb.GetRecommendationsForUserResponse>;

  getRecommendationsForUser(
    request: proto_friends_pb.GetRecommendationsForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_friends_pb.GetRecommendationsForUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.friends.Friends/GetRecommendationsForUser',
        request,
        metadata || {},
        this.methodInfoGetRecommendationsForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.friends.Friends/GetRecommendationsForUser',
    request,
    metadata || {},
    this.methodInfoGetRecommendationsForUser);
  }

  methodInfoCreateConnectionForUsers = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_friends_pb.CreateConnectionForUsersResponse,
    (request: proto_friends_pb.CreateConnectionForUsersRequest) => {
      return request.serializeBinary();
    },
    proto_friends_pb.CreateConnectionForUsersResponse.deserializeBinary
  );

  createConnectionForUsers(
    request: proto_friends_pb.CreateConnectionForUsersRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_friends_pb.CreateConnectionForUsersResponse>;

  createConnectionForUsers(
    request: proto_friends_pb.CreateConnectionForUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_friends_pb.CreateConnectionForUsersResponse) => void): grpcWeb.ClientReadableStream<proto_friends_pb.CreateConnectionForUsersResponse>;

  createConnectionForUsers(
    request: proto_friends_pb.CreateConnectionForUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_friends_pb.CreateConnectionForUsersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.friends.Friends/CreateConnectionForUsers',
        request,
        metadata || {},
        this.methodInfoCreateConnectionForUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.friends.Friends/CreateConnectionForUsers',
    request,
    metadata || {},
    this.methodInfoCreateConnectionForUsers);
  }

  methodInfoAddAwaitingFriend = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_friends_pb.AddAwaitingFriendResponse,
    (request: proto_friends_pb.AddAwaitingFriendRequest) => {
      return request.serializeBinary();
    },
    proto_friends_pb.AddAwaitingFriendResponse.deserializeBinary
  );

  addAwaitingFriend(
    request: proto_friends_pb.AddAwaitingFriendRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_friends_pb.AddAwaitingFriendResponse>;

  addAwaitingFriend(
    request: proto_friends_pb.AddAwaitingFriendRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_friends_pb.AddAwaitingFriendResponse) => void): grpcWeb.ClientReadableStream<proto_friends_pb.AddAwaitingFriendResponse>;

  addAwaitingFriend(
    request: proto_friends_pb.AddAwaitingFriendRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_friends_pb.AddAwaitingFriendResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.friends.Friends/AddAwaitingFriend',
        request,
        metadata || {},
        this.methodInfoAddAwaitingFriend,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.friends.Friends/AddAwaitingFriend',
    request,
    metadata || {},
    this.methodInfoAddAwaitingFriend);
  }

  methodInfoUpdateConnectionBetweenUsers = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_friends_pb.ConnectionBetweenUsersResponse,
    (request: proto_friends_pb.UpdateConnectionBetweenUsersRequest) => {
      return request.serializeBinary();
    },
    proto_friends_pb.ConnectionBetweenUsersResponse.deserializeBinary
  );

  updateConnectionBetweenUsers(
    request: proto_friends_pb.UpdateConnectionBetweenUsersRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_friends_pb.ConnectionBetweenUsersResponse>;

  updateConnectionBetweenUsers(
    request: proto_friends_pb.UpdateConnectionBetweenUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_friends_pb.ConnectionBetweenUsersResponse) => void): grpcWeb.ClientReadableStream<proto_friends_pb.ConnectionBetweenUsersResponse>;

  updateConnectionBetweenUsers(
    request: proto_friends_pb.UpdateConnectionBetweenUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_friends_pb.ConnectionBetweenUsersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.friends.Friends/UpdateConnectionBetweenUsers',
        request,
        metadata || {},
        this.methodInfoUpdateConnectionBetweenUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.friends.Friends/UpdateConnectionBetweenUsers',
    request,
    metadata || {},
    this.methodInfoUpdateConnectionBetweenUsers);
  }

  methodInfoDeleteConnectionBetweenUsers = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_friends_pb.DeleteConnectionBetweenUsersResponse,
    (request: proto_friends_pb.DeleteConnectionBetweenUsersRequest) => {
      return request.serializeBinary();
    },
    proto_friends_pb.DeleteConnectionBetweenUsersResponse.deserializeBinary
  );

  deleteConnectionBetweenUsers(
    request: proto_friends_pb.DeleteConnectionBetweenUsersRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_friends_pb.DeleteConnectionBetweenUsersResponse>;

  deleteConnectionBetweenUsers(
    request: proto_friends_pb.DeleteConnectionBetweenUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_friends_pb.DeleteConnectionBetweenUsersResponse) => void): grpcWeb.ClientReadableStream<proto_friends_pb.DeleteConnectionBetweenUsersResponse>;

  deleteConnectionBetweenUsers(
    request: proto_friends_pb.DeleteConnectionBetweenUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_friends_pb.DeleteConnectionBetweenUsersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.friends.Friends/DeleteConnectionBetweenUsers',
        request,
        metadata || {},
        this.methodInfoDeleteConnectionBetweenUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.friends.Friends/DeleteConnectionBetweenUsers',
    request,
    metadata || {},
    this.methodInfoDeleteConnectionBetweenUsers);
  }

}

