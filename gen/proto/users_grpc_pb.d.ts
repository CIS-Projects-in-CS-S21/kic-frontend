// package: kic.users
// file: proto/users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as proto_users_pb from "../proto/users_pb";
import * as proto_common_pb from "../proto/common_pb";

interface IUsersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getJWTToken: IUsersService_IGetJWTToken;
    addUser: IUsersService_IAddUser;
    getUserByUsername: IUsersService_IGetUserByUsername;
    getUserByID: IUsersService_IGetUserByID;
    getUserNameByID: IUsersService_IGetUserNameByID;
    deleteUserByID: IUsersService_IDeleteUserByID;
    updateUserInfo: IUsersService_IUpdateUserInfo;
}

interface IUsersService_IGetJWTToken extends grpc.MethodDefinition<proto_users_pb.GetJWTTokenRequest, proto_users_pb.GetJWTTokenResponse> {
    path: "/kic.users.Users/GetJWTToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_users_pb.GetJWTTokenRequest>;
    requestDeserialize: grpc.deserialize<proto_users_pb.GetJWTTokenRequest>;
    responseSerialize: grpc.serialize<proto_users_pb.GetJWTTokenResponse>;
    responseDeserialize: grpc.deserialize<proto_users_pb.GetJWTTokenResponse>;
}
interface IUsersService_IAddUser extends grpc.MethodDefinition<proto_users_pb.AddUserRequest, proto_users_pb.AddUserResponse> {
    path: "/kic.users.Users/AddUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_users_pb.AddUserRequest>;
    requestDeserialize: grpc.deserialize<proto_users_pb.AddUserRequest>;
    responseSerialize: grpc.serialize<proto_users_pb.AddUserResponse>;
    responseDeserialize: grpc.deserialize<proto_users_pb.AddUserResponse>;
}
interface IUsersService_IGetUserByUsername extends grpc.MethodDefinition<proto_users_pb.GetUserByUsernameRequest, proto_users_pb.GetUserByUsernameResponse> {
    path: "/kic.users.Users/GetUserByUsername";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_users_pb.GetUserByUsernameRequest>;
    requestDeserialize: grpc.deserialize<proto_users_pb.GetUserByUsernameRequest>;
    responseSerialize: grpc.serialize<proto_users_pb.GetUserByUsernameResponse>;
    responseDeserialize: grpc.deserialize<proto_users_pb.GetUserByUsernameResponse>;
}
interface IUsersService_IGetUserByID extends grpc.MethodDefinition<proto_users_pb.GetUserByIDRequest, proto_users_pb.GetUserByIDResponse> {
    path: "/kic.users.Users/GetUserByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_users_pb.GetUserByIDRequest>;
    requestDeserialize: grpc.deserialize<proto_users_pb.GetUserByIDRequest>;
    responseSerialize: grpc.serialize<proto_users_pb.GetUserByIDResponse>;
    responseDeserialize: grpc.deserialize<proto_users_pb.GetUserByIDResponse>;
}
interface IUsersService_IGetUserNameByID extends grpc.MethodDefinition<proto_users_pb.GetUserNameByIDRequest, proto_users_pb.GetUserNameByIDResponse> {
    path: "/kic.users.Users/GetUserNameByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_users_pb.GetUserNameByIDRequest>;
    requestDeserialize: grpc.deserialize<proto_users_pb.GetUserNameByIDRequest>;
    responseSerialize: grpc.serialize<proto_users_pb.GetUserNameByIDResponse>;
    responseDeserialize: grpc.deserialize<proto_users_pb.GetUserNameByIDResponse>;
}
interface IUsersService_IDeleteUserByID extends grpc.MethodDefinition<proto_users_pb.DeleteUserByIDRequest, proto_users_pb.DeleteUserByIDResponse> {
    path: "/kic.users.Users/DeleteUserByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_users_pb.DeleteUserByIDRequest>;
    requestDeserialize: grpc.deserialize<proto_users_pb.DeleteUserByIDRequest>;
    responseSerialize: grpc.serialize<proto_users_pb.DeleteUserByIDResponse>;
    responseDeserialize: grpc.deserialize<proto_users_pb.DeleteUserByIDResponse>;
}
interface IUsersService_IUpdateUserInfo extends grpc.MethodDefinition<proto_users_pb.UpdateUserInfoRequest, proto_users_pb.UpdateUserInfoResponse> {
    path: "/kic.users.Users/UpdateUserInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_users_pb.UpdateUserInfoRequest>;
    requestDeserialize: grpc.deserialize<proto_users_pb.UpdateUserInfoRequest>;
    responseSerialize: grpc.serialize<proto_users_pb.UpdateUserInfoResponse>;
    responseDeserialize: grpc.deserialize<proto_users_pb.UpdateUserInfoResponse>;
}

export const UsersService: IUsersService;

export interface IUsersServer extends grpc.UntypedServiceImplementation {
    getJWTToken: grpc.handleUnaryCall<proto_users_pb.GetJWTTokenRequest, proto_users_pb.GetJWTTokenResponse>;
    addUser: grpc.handleUnaryCall<proto_users_pb.AddUserRequest, proto_users_pb.AddUserResponse>;
    getUserByUsername: grpc.handleUnaryCall<proto_users_pb.GetUserByUsernameRequest, proto_users_pb.GetUserByUsernameResponse>;
    getUserByID: grpc.handleUnaryCall<proto_users_pb.GetUserByIDRequest, proto_users_pb.GetUserByIDResponse>;
    getUserNameByID: grpc.handleUnaryCall<proto_users_pb.GetUserNameByIDRequest, proto_users_pb.GetUserNameByIDResponse>;
    deleteUserByID: grpc.handleUnaryCall<proto_users_pb.DeleteUserByIDRequest, proto_users_pb.DeleteUserByIDResponse>;
    updateUserInfo: grpc.handleUnaryCall<proto_users_pb.UpdateUserInfoRequest, proto_users_pb.UpdateUserInfoResponse>;
}

export interface IUsersClient {
    getJWTToken(request: proto_users_pb.GetJWTTokenRequest, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetJWTTokenResponse) => void): grpc.ClientUnaryCall;
    getJWTToken(request: proto_users_pb.GetJWTTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetJWTTokenResponse) => void): grpc.ClientUnaryCall;
    getJWTToken(request: proto_users_pb.GetJWTTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetJWTTokenResponse) => void): grpc.ClientUnaryCall;
    addUser(request: proto_users_pb.AddUserRequest, callback: (error: grpc.ServiceError | null, response: proto_users_pb.AddUserResponse) => void): grpc.ClientUnaryCall;
    addUser(request: proto_users_pb.AddUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.AddUserResponse) => void): grpc.ClientUnaryCall;
    addUser(request: proto_users_pb.AddUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.AddUserResponse) => void): grpc.ClientUnaryCall;
    getUserByUsername(request: proto_users_pb.GetUserByUsernameRequest, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetUserByUsernameResponse) => void): grpc.ClientUnaryCall;
    getUserByUsername(request: proto_users_pb.GetUserByUsernameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetUserByUsernameResponse) => void): grpc.ClientUnaryCall;
    getUserByUsername(request: proto_users_pb.GetUserByUsernameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetUserByUsernameResponse) => void): grpc.ClientUnaryCall;
    getUserByID(request: proto_users_pb.GetUserByIDRequest, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetUserByIDResponse) => void): grpc.ClientUnaryCall;
    getUserByID(request: proto_users_pb.GetUserByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetUserByIDResponse) => void): grpc.ClientUnaryCall;
    getUserByID(request: proto_users_pb.GetUserByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetUserByIDResponse) => void): grpc.ClientUnaryCall;
    getUserNameByID(request: proto_users_pb.GetUserNameByIDRequest, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetUserNameByIDResponse) => void): grpc.ClientUnaryCall;
    getUserNameByID(request: proto_users_pb.GetUserNameByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetUserNameByIDResponse) => void): grpc.ClientUnaryCall;
    getUserNameByID(request: proto_users_pb.GetUserNameByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetUserNameByIDResponse) => void): grpc.ClientUnaryCall;
    deleteUserByID(request: proto_users_pb.DeleteUserByIDRequest, callback: (error: grpc.ServiceError | null, response: proto_users_pb.DeleteUserByIDResponse) => void): grpc.ClientUnaryCall;
    deleteUserByID(request: proto_users_pb.DeleteUserByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.DeleteUserByIDResponse) => void): grpc.ClientUnaryCall;
    deleteUserByID(request: proto_users_pb.DeleteUserByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.DeleteUserByIDResponse) => void): grpc.ClientUnaryCall;
    updateUserInfo(request: proto_users_pb.UpdateUserInfoRequest, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UpdateUserInfoResponse) => void): grpc.ClientUnaryCall;
    updateUserInfo(request: proto_users_pb.UpdateUserInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UpdateUserInfoResponse) => void): grpc.ClientUnaryCall;
    updateUserInfo(request: proto_users_pb.UpdateUserInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UpdateUserInfoResponse) => void): grpc.ClientUnaryCall;
}

export class UsersClient extends grpc.Client implements IUsersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getJWTToken(request: proto_users_pb.GetJWTTokenRequest, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetJWTTokenResponse) => void): grpc.ClientUnaryCall;
    public getJWTToken(request: proto_users_pb.GetJWTTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetJWTTokenResponse) => void): grpc.ClientUnaryCall;
    public getJWTToken(request: proto_users_pb.GetJWTTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetJWTTokenResponse) => void): grpc.ClientUnaryCall;
    public addUser(request: proto_users_pb.AddUserRequest, callback: (error: grpc.ServiceError | null, response: proto_users_pb.AddUserResponse) => void): grpc.ClientUnaryCall;
    public addUser(request: proto_users_pb.AddUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.AddUserResponse) => void): grpc.ClientUnaryCall;
    public addUser(request: proto_users_pb.AddUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.AddUserResponse) => void): grpc.ClientUnaryCall;
    public getUserByUsername(request: proto_users_pb.GetUserByUsernameRequest, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetUserByUsernameResponse) => void): grpc.ClientUnaryCall;
    public getUserByUsername(request: proto_users_pb.GetUserByUsernameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetUserByUsernameResponse) => void): grpc.ClientUnaryCall;
    public getUserByUsername(request: proto_users_pb.GetUserByUsernameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetUserByUsernameResponse) => void): grpc.ClientUnaryCall;
    public getUserByID(request: proto_users_pb.GetUserByIDRequest, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetUserByIDResponse) => void): grpc.ClientUnaryCall;
    public getUserByID(request: proto_users_pb.GetUserByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetUserByIDResponse) => void): grpc.ClientUnaryCall;
    public getUserByID(request: proto_users_pb.GetUserByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetUserByIDResponse) => void): grpc.ClientUnaryCall;
    public getUserNameByID(request: proto_users_pb.GetUserNameByIDRequest, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetUserNameByIDResponse) => void): grpc.ClientUnaryCall;
    public getUserNameByID(request: proto_users_pb.GetUserNameByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetUserNameByIDResponse) => void): grpc.ClientUnaryCall;
    public getUserNameByID(request: proto_users_pb.GetUserNameByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.GetUserNameByIDResponse) => void): grpc.ClientUnaryCall;
    public deleteUserByID(request: proto_users_pb.DeleteUserByIDRequest, callback: (error: grpc.ServiceError | null, response: proto_users_pb.DeleteUserByIDResponse) => void): grpc.ClientUnaryCall;
    public deleteUserByID(request: proto_users_pb.DeleteUserByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.DeleteUserByIDResponse) => void): grpc.ClientUnaryCall;
    public deleteUserByID(request: proto_users_pb.DeleteUserByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.DeleteUserByIDResponse) => void): grpc.ClientUnaryCall;
    public updateUserInfo(request: proto_users_pb.UpdateUserInfoRequest, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UpdateUserInfoResponse) => void): grpc.ClientUnaryCall;
    public updateUserInfo(request: proto_users_pb.UpdateUserInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UpdateUserInfoResponse) => void): grpc.ClientUnaryCall;
    public updateUserInfo(request: proto_users_pb.UpdateUserInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UpdateUserInfoResponse) => void): grpc.ClientUnaryCall;
}
