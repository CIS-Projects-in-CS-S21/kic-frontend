/**
 * @fileoverview gRPC-Web generated client stub for kic.users
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_users_pb from '../proto/users_pb';


export class UsersClient {
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

  methodInfoGetJWTToken = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_users_pb.GetJWTTokenResponse,
    (request: proto_users_pb.GetJWTTokenRequest) => {
      return request.serializeBinary();
    },
    proto_users_pb.GetJWTTokenResponse.deserializeBinary
  );

  getJWTToken(
    request: proto_users_pb.GetJWTTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_users_pb.GetJWTTokenResponse>;

  getJWTToken(
    request: proto_users_pb.GetJWTTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_users_pb.GetJWTTokenResponse) => void): grpcWeb.ClientReadableStream<proto_users_pb.GetJWTTokenResponse>;

  getJWTToken(
    request: proto_users_pb.GetJWTTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_users_pb.GetJWTTokenResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.users.Users/GetJWTToken',
        request,
        metadata || {},
        this.methodInfoGetJWTToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.users.Users/GetJWTToken',
    request,
    metadata || {},
    this.methodInfoGetJWTToken);
  }

  methodInfoAddUser = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_users_pb.AddUserResponse,
    (request: proto_users_pb.AddUserRequest) => {
      return request.serializeBinary();
    },
    proto_users_pb.AddUserResponse.deserializeBinary
  );

  addUser(
    request: proto_users_pb.AddUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_users_pb.AddUserResponse>;

  addUser(
    request: proto_users_pb.AddUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_users_pb.AddUserResponse) => void): grpcWeb.ClientReadableStream<proto_users_pb.AddUserResponse>;

  addUser(
    request: proto_users_pb.AddUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_users_pb.AddUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.users.Users/AddUser',
        request,
        metadata || {},
        this.methodInfoAddUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.users.Users/AddUser',
    request,
    metadata || {},
    this.methodInfoAddUser);
  }

  methodInfoGetUserByUsername = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_users_pb.GetUserByUsernameResponse,
    (request: proto_users_pb.GetUserByUsernameRequest) => {
      return request.serializeBinary();
    },
    proto_users_pb.GetUserByUsernameResponse.deserializeBinary
  );

  getUserByUsername(
    request: proto_users_pb.GetUserByUsernameRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_users_pb.GetUserByUsernameResponse>;

  getUserByUsername(
    request: proto_users_pb.GetUserByUsernameRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_users_pb.GetUserByUsernameResponse) => void): grpcWeb.ClientReadableStream<proto_users_pb.GetUserByUsernameResponse>;

  getUserByUsername(
    request: proto_users_pb.GetUserByUsernameRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_users_pb.GetUserByUsernameResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.users.Users/GetUserByUsername',
        request,
        metadata || {},
        this.methodInfoGetUserByUsername,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.users.Users/GetUserByUsername',
    request,
    metadata || {},
    this.methodInfoGetUserByUsername);
  }

  methodInfoGetUserByID = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_users_pb.GetUserByIDResponse,
    (request: proto_users_pb.GetUserByIDRequest) => {
      return request.serializeBinary();
    },
    proto_users_pb.GetUserByIDResponse.deserializeBinary
  );

  getUserByID(
    request: proto_users_pb.GetUserByIDRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_users_pb.GetUserByIDResponse>;

  getUserByID(
    request: proto_users_pb.GetUserByIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_users_pb.GetUserByIDResponse) => void): grpcWeb.ClientReadableStream<proto_users_pb.GetUserByIDResponse>;

  getUserByID(
    request: proto_users_pb.GetUserByIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_users_pb.GetUserByIDResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.users.Users/GetUserByID',
        request,
        metadata || {},
        this.methodInfoGetUserByID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.users.Users/GetUserByID',
    request,
    metadata || {},
    this.methodInfoGetUserByID);
  }

  methodInfoGetUserNameByID = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_users_pb.GetUserNameByIDResponse,
    (request: proto_users_pb.GetUserNameByIDRequest) => {
      return request.serializeBinary();
    },
    proto_users_pb.GetUserNameByIDResponse.deserializeBinary
  );

  getUserNameByID(
    request: proto_users_pb.GetUserNameByIDRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_users_pb.GetUserNameByIDResponse>;

  getUserNameByID(
    request: proto_users_pb.GetUserNameByIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_users_pb.GetUserNameByIDResponse) => void): grpcWeb.ClientReadableStream<proto_users_pb.GetUserNameByIDResponse>;

  getUserNameByID(
    request: proto_users_pb.GetUserNameByIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_users_pb.GetUserNameByIDResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.users.Users/GetUserNameByID',
        request,
        metadata || {},
        this.methodInfoGetUserNameByID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.users.Users/GetUserNameByID',
    request,
    metadata || {},
    this.methodInfoGetUserNameByID);
  }

  methodInfoDeleteUserByID = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_users_pb.DeleteUserByIDResponse,
    (request: proto_users_pb.DeleteUserByIDRequest) => {
      return request.serializeBinary();
    },
    proto_users_pb.DeleteUserByIDResponse.deserializeBinary
  );

  deleteUserByID(
    request: proto_users_pb.DeleteUserByIDRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_users_pb.DeleteUserByIDResponse>;

  deleteUserByID(
    request: proto_users_pb.DeleteUserByIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_users_pb.DeleteUserByIDResponse) => void): grpcWeb.ClientReadableStream<proto_users_pb.DeleteUserByIDResponse>;

  deleteUserByID(
    request: proto_users_pb.DeleteUserByIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_users_pb.DeleteUserByIDResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.users.Users/DeleteUserByID',
        request,
        metadata || {},
        this.methodInfoDeleteUserByID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.users.Users/DeleteUserByID',
    request,
    metadata || {},
    this.methodInfoDeleteUserByID);
  }

  methodInfoUpdateUserInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_users_pb.UpdateUserInfoResponse,
    (request: proto_users_pb.UpdateUserInfoRequest) => {
      return request.serializeBinary();
    },
    proto_users_pb.UpdateUserInfoResponse.deserializeBinary
  );

  updateUserInfo(
    request: proto_users_pb.UpdateUserInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_users_pb.UpdateUserInfoResponse>;

  updateUserInfo(
    request: proto_users_pb.UpdateUserInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_users_pb.UpdateUserInfoResponse) => void): grpcWeb.ClientReadableStream<proto_users_pb.UpdateUserInfoResponse>;

  updateUserInfo(
    request: proto_users_pb.UpdateUserInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_users_pb.UpdateUserInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.users.Users/UpdateUserInfo',
        request,
        metadata || {},
        this.methodInfoUpdateUserInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.users.Users/UpdateUserInfo',
    request,
    metadata || {},
    this.methodInfoUpdateUserInfo);
  }

}

