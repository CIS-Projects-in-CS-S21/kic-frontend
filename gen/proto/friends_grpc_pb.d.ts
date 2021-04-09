// package: kic.friends
// file: proto/friends.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as proto_friends_pb from "./friends_pb";
import * as proto_common_pb from "../../../pro-keeping-it-casual/gen/nodejs/proto/common_pb";

interface IFriendsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getFriendsUsernamesForUser: IFriendsService_IGetFriendsUsernamesForUser;
    getAwaitingFriendsUsernamesForUser: IFriendsService_IGetAwaitingFriendsUsernamesForUser;
    getFriendsForUser: IFriendsService_IGetFriendsForUser;
    getAwaitingFriendsForUser: IFriendsService_IGetAwaitingFriendsForUser;
    getConnectionBetweenUsers: IFriendsService_IGetConnectionBetweenUsers;
    getRecommendationsForUser: IFriendsService_IGetRecommendationsForUser;
    createConnectionForUsers: IFriendsService_ICreateConnectionForUsers;
    addAwaitingFriend: IFriendsService_IAddAwaitingFriend;
    updateConnectionBetweenUsers: IFriendsService_IUpdateConnectionBetweenUsers;
    deleteConnectionBetweenUsers: IFriendsService_IDeleteConnectionBetweenUsers;
    deleteAwaitingFriendBetweenUsers: IFriendsService_IDeleteAwaitingFriendBetweenUsers;
}

interface IFriendsService_IGetFriendsUsernamesForUser extends grpc.MethodDefinition<proto_friends_pb.GetFriendsForUserRequest, proto_friends_pb.GetFriendsUsernamesForUserResponse> {
    path: "/kic.friends.Friends/GetFriendsUsernamesForUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_friends_pb.GetFriendsForUserRequest>;
    requestDeserialize: grpc.deserialize<proto_friends_pb.GetFriendsForUserRequest>;
    responseSerialize: grpc.serialize<proto_friends_pb.GetFriendsUsernamesForUserResponse>;
    responseDeserialize: grpc.deserialize<proto_friends_pb.GetFriendsUsernamesForUserResponse>;
}
interface IFriendsService_IGetAwaitingFriendsUsernamesForUser extends grpc.MethodDefinition<proto_friends_pb.GetFriendsForUserRequest, proto_friends_pb.GetFriendsUsernamesForUserResponse> {
    path: "/kic.friends.Friends/GetAwaitingFriendsUsernamesForUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_friends_pb.GetFriendsForUserRequest>;
    requestDeserialize: grpc.deserialize<proto_friends_pb.GetFriendsForUserRequest>;
    responseSerialize: grpc.serialize<proto_friends_pb.GetFriendsUsernamesForUserResponse>;
    responseDeserialize: grpc.deserialize<proto_friends_pb.GetFriendsUsernamesForUserResponse>;
}
interface IFriendsService_IGetFriendsForUser extends grpc.MethodDefinition<proto_friends_pb.GetFriendsForUserRequest, proto_friends_pb.GetFriendsForUserResponse> {
    path: "/kic.friends.Friends/GetFriendsForUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_friends_pb.GetFriendsForUserRequest>;
    requestDeserialize: grpc.deserialize<proto_friends_pb.GetFriendsForUserRequest>;
    responseSerialize: grpc.serialize<proto_friends_pb.GetFriendsForUserResponse>;
    responseDeserialize: grpc.deserialize<proto_friends_pb.GetFriendsForUserResponse>;
}
interface IFriendsService_IGetAwaitingFriendsForUser extends grpc.MethodDefinition<proto_friends_pb.GetFriendsForUserRequest, proto_friends_pb.GetFriendsForUserResponse> {
    path: "/kic.friends.Friends/GetAwaitingFriendsForUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_friends_pb.GetFriendsForUserRequest>;
    requestDeserialize: grpc.deserialize<proto_friends_pb.GetFriendsForUserRequest>;
    responseSerialize: grpc.serialize<proto_friends_pb.GetFriendsForUserResponse>;
    responseDeserialize: grpc.deserialize<proto_friends_pb.GetFriendsForUserResponse>;
}
interface IFriendsService_IGetConnectionBetweenUsers extends grpc.MethodDefinition<proto_friends_pb.GetConnectionBetweenUsersRequest, proto_friends_pb.ConnectionBetweenUsersResponse> {
    path: "/kic.friends.Friends/GetConnectionBetweenUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_friends_pb.GetConnectionBetweenUsersRequest>;
    requestDeserialize: grpc.deserialize<proto_friends_pb.GetConnectionBetweenUsersRequest>;
    responseSerialize: grpc.serialize<proto_friends_pb.ConnectionBetweenUsersResponse>;
    responseDeserialize: grpc.deserialize<proto_friends_pb.ConnectionBetweenUsersResponse>;
}
interface IFriendsService_IGetRecommendationsForUser extends grpc.MethodDefinition<proto_friends_pb.GetRecommendationsForUserRequest, proto_friends_pb.GetRecommendationsForUserResponse> {
    path: "/kic.friends.Friends/GetRecommendationsForUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_friends_pb.GetRecommendationsForUserRequest>;
    requestDeserialize: grpc.deserialize<proto_friends_pb.GetRecommendationsForUserRequest>;
    responseSerialize: grpc.serialize<proto_friends_pb.GetRecommendationsForUserResponse>;
    responseDeserialize: grpc.deserialize<proto_friends_pb.GetRecommendationsForUserResponse>;
}
interface IFriendsService_ICreateConnectionForUsers extends grpc.MethodDefinition<proto_friends_pb.CreateConnectionForUsersRequest, proto_friends_pb.CreateConnectionForUsersResponse> {
    path: "/kic.friends.Friends/CreateConnectionForUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_friends_pb.CreateConnectionForUsersRequest>;
    requestDeserialize: grpc.deserialize<proto_friends_pb.CreateConnectionForUsersRequest>;
    responseSerialize: grpc.serialize<proto_friends_pb.CreateConnectionForUsersResponse>;
    responseDeserialize: grpc.deserialize<proto_friends_pb.CreateConnectionForUsersResponse>;
}
interface IFriendsService_IAddAwaitingFriend extends grpc.MethodDefinition<proto_friends_pb.AddAwaitingFriendRequest, proto_friends_pb.AddAwaitingFriendResponse> {
    path: "/kic.friends.Friends/AddAwaitingFriend";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_friends_pb.AddAwaitingFriendRequest>;
    requestDeserialize: grpc.deserialize<proto_friends_pb.AddAwaitingFriendRequest>;
    responseSerialize: grpc.serialize<proto_friends_pb.AddAwaitingFriendResponse>;
    responseDeserialize: grpc.deserialize<proto_friends_pb.AddAwaitingFriendResponse>;
}
interface IFriendsService_IUpdateConnectionBetweenUsers extends grpc.MethodDefinition<proto_friends_pb.UpdateConnectionBetweenUsersRequest, proto_friends_pb.ConnectionBetweenUsersResponse> {
    path: "/kic.friends.Friends/UpdateConnectionBetweenUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_friends_pb.UpdateConnectionBetweenUsersRequest>;
    requestDeserialize: grpc.deserialize<proto_friends_pb.UpdateConnectionBetweenUsersRequest>;
    responseSerialize: grpc.serialize<proto_friends_pb.ConnectionBetweenUsersResponse>;
    responseDeserialize: grpc.deserialize<proto_friends_pb.ConnectionBetweenUsersResponse>;
}
interface IFriendsService_IDeleteConnectionBetweenUsers extends grpc.MethodDefinition<proto_friends_pb.DeleteConnectionBetweenUsersRequest, proto_friends_pb.DeleteConnectionBetweenUsersResponse> {
    path: "/kic.friends.Friends/DeleteConnectionBetweenUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_friends_pb.DeleteConnectionBetweenUsersRequest>;
    requestDeserialize: grpc.deserialize<proto_friends_pb.DeleteConnectionBetweenUsersRequest>;
    responseSerialize: grpc.serialize<proto_friends_pb.DeleteConnectionBetweenUsersResponse>;
    responseDeserialize: grpc.deserialize<proto_friends_pb.DeleteConnectionBetweenUsersResponse>;
}
interface IFriendsService_IDeleteAwaitingFriendBetweenUsers extends grpc.MethodDefinition<proto_friends_pb.DeleteConnectionBetweenUsersRequest, proto_friends_pb.DeleteConnectionBetweenUsersResponse> {
    path: "/kic.friends.Friends/DeleteAwaitingFriendBetweenUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_friends_pb.DeleteConnectionBetweenUsersRequest>;
    requestDeserialize: grpc.deserialize<proto_friends_pb.DeleteConnectionBetweenUsersRequest>;
    responseSerialize: grpc.serialize<proto_friends_pb.DeleteConnectionBetweenUsersResponse>;
    responseDeserialize: grpc.deserialize<proto_friends_pb.DeleteConnectionBetweenUsersResponse>;
}

export const FriendsService: IFriendsService;

export interface IFriendsServer extends grpc.UntypedServiceImplementation {
    getFriendsUsernamesForUser: grpc.handleUnaryCall<proto_friends_pb.GetFriendsForUserRequest, proto_friends_pb.GetFriendsUsernamesForUserResponse>;
    getAwaitingFriendsUsernamesForUser: grpc.handleUnaryCall<proto_friends_pb.GetFriendsForUserRequest, proto_friends_pb.GetFriendsUsernamesForUserResponse>;
    getFriendsForUser: grpc.handleUnaryCall<proto_friends_pb.GetFriendsForUserRequest, proto_friends_pb.GetFriendsForUserResponse>;
    getAwaitingFriendsForUser: grpc.handleUnaryCall<proto_friends_pb.GetFriendsForUserRequest, proto_friends_pb.GetFriendsForUserResponse>;
    getConnectionBetweenUsers: grpc.handleUnaryCall<proto_friends_pb.GetConnectionBetweenUsersRequest, proto_friends_pb.ConnectionBetweenUsersResponse>;
    getRecommendationsForUser: grpc.handleUnaryCall<proto_friends_pb.GetRecommendationsForUserRequest, proto_friends_pb.GetRecommendationsForUserResponse>;
    createConnectionForUsers: grpc.handleUnaryCall<proto_friends_pb.CreateConnectionForUsersRequest, proto_friends_pb.CreateConnectionForUsersResponse>;
    addAwaitingFriend: grpc.handleUnaryCall<proto_friends_pb.AddAwaitingFriendRequest, proto_friends_pb.AddAwaitingFriendResponse>;
    updateConnectionBetweenUsers: grpc.handleUnaryCall<proto_friends_pb.UpdateConnectionBetweenUsersRequest, proto_friends_pb.ConnectionBetweenUsersResponse>;
    deleteConnectionBetweenUsers: grpc.handleUnaryCall<proto_friends_pb.DeleteConnectionBetweenUsersRequest, proto_friends_pb.DeleteConnectionBetweenUsersResponse>;
    deleteAwaitingFriendBetweenUsers: grpc.handleUnaryCall<proto_friends_pb.DeleteConnectionBetweenUsersRequest, proto_friends_pb.DeleteConnectionBetweenUsersResponse>;
}

export interface IFriendsClient {
    getFriendsUsernamesForUser(request: proto_friends_pb.GetFriendsForUserRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsUsernamesForUserResponse) => void): grpc.ClientUnaryCall;
    getFriendsUsernamesForUser(request: proto_friends_pb.GetFriendsForUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsUsernamesForUserResponse) => void): grpc.ClientUnaryCall;
    getFriendsUsernamesForUser(request: proto_friends_pb.GetFriendsForUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsUsernamesForUserResponse) => void): grpc.ClientUnaryCall;
    getAwaitingFriendsUsernamesForUser(request: proto_friends_pb.GetFriendsForUserRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsUsernamesForUserResponse) => void): grpc.ClientUnaryCall;
    getAwaitingFriendsUsernamesForUser(request: proto_friends_pb.GetFriendsForUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsUsernamesForUserResponse) => void): grpc.ClientUnaryCall;
    getAwaitingFriendsUsernamesForUser(request: proto_friends_pb.GetFriendsForUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsUsernamesForUserResponse) => void): grpc.ClientUnaryCall;
    getFriendsForUser(request: proto_friends_pb.GetFriendsForUserRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsForUserResponse) => void): grpc.ClientUnaryCall;
    getFriendsForUser(request: proto_friends_pb.GetFriendsForUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsForUserResponse) => void): grpc.ClientUnaryCall;
    getFriendsForUser(request: proto_friends_pb.GetFriendsForUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsForUserResponse) => void): grpc.ClientUnaryCall;
    getAwaitingFriendsForUser(request: proto_friends_pb.GetFriendsForUserRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsForUserResponse) => void): grpc.ClientUnaryCall;
    getAwaitingFriendsForUser(request: proto_friends_pb.GetFriendsForUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsForUserResponse) => void): grpc.ClientUnaryCall;
    getAwaitingFriendsForUser(request: proto_friends_pb.GetFriendsForUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsForUserResponse) => void): grpc.ClientUnaryCall;
    getConnectionBetweenUsers(request: proto_friends_pb.GetConnectionBetweenUsersRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.ConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    getConnectionBetweenUsers(request: proto_friends_pb.GetConnectionBetweenUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.ConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    getConnectionBetweenUsers(request: proto_friends_pb.GetConnectionBetweenUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.ConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    getRecommendationsForUser(request: proto_friends_pb.GetRecommendationsForUserRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetRecommendationsForUserResponse) => void): grpc.ClientUnaryCall;
    getRecommendationsForUser(request: proto_friends_pb.GetRecommendationsForUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetRecommendationsForUserResponse) => void): grpc.ClientUnaryCall;
    getRecommendationsForUser(request: proto_friends_pb.GetRecommendationsForUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetRecommendationsForUserResponse) => void): grpc.ClientUnaryCall;
    createConnectionForUsers(request: proto_friends_pb.CreateConnectionForUsersRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.CreateConnectionForUsersResponse) => void): grpc.ClientUnaryCall;
    createConnectionForUsers(request: proto_friends_pb.CreateConnectionForUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.CreateConnectionForUsersResponse) => void): grpc.ClientUnaryCall;
    createConnectionForUsers(request: proto_friends_pb.CreateConnectionForUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.CreateConnectionForUsersResponse) => void): grpc.ClientUnaryCall;
    addAwaitingFriend(request: proto_friends_pb.AddAwaitingFriendRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.AddAwaitingFriendResponse) => void): grpc.ClientUnaryCall;
    addAwaitingFriend(request: proto_friends_pb.AddAwaitingFriendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.AddAwaitingFriendResponse) => void): grpc.ClientUnaryCall;
    addAwaitingFriend(request: proto_friends_pb.AddAwaitingFriendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.AddAwaitingFriendResponse) => void): grpc.ClientUnaryCall;
    updateConnectionBetweenUsers(request: proto_friends_pb.UpdateConnectionBetweenUsersRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.ConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    updateConnectionBetweenUsers(request: proto_friends_pb.UpdateConnectionBetweenUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.ConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    updateConnectionBetweenUsers(request: proto_friends_pb.UpdateConnectionBetweenUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.ConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    deleteConnectionBetweenUsers(request: proto_friends_pb.DeleteConnectionBetweenUsersRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.DeleteConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    deleteConnectionBetweenUsers(request: proto_friends_pb.DeleteConnectionBetweenUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.DeleteConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    deleteConnectionBetweenUsers(request: proto_friends_pb.DeleteConnectionBetweenUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.DeleteConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    deleteAwaitingFriendBetweenUsers(request: proto_friends_pb.DeleteConnectionBetweenUsersRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.DeleteConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    deleteAwaitingFriendBetweenUsers(request: proto_friends_pb.DeleteConnectionBetweenUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.DeleteConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    deleteAwaitingFriendBetweenUsers(request: proto_friends_pb.DeleteConnectionBetweenUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.DeleteConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
}

export class FriendsClient extends grpc.Client implements IFriendsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getFriendsUsernamesForUser(request: proto_friends_pb.GetFriendsForUserRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsUsernamesForUserResponse) => void): grpc.ClientUnaryCall;
    public getFriendsUsernamesForUser(request: proto_friends_pb.GetFriendsForUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsUsernamesForUserResponse) => void): grpc.ClientUnaryCall;
    public getFriendsUsernamesForUser(request: proto_friends_pb.GetFriendsForUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsUsernamesForUserResponse) => void): grpc.ClientUnaryCall;
    public getAwaitingFriendsUsernamesForUser(request: proto_friends_pb.GetFriendsForUserRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsUsernamesForUserResponse) => void): grpc.ClientUnaryCall;
    public getAwaitingFriendsUsernamesForUser(request: proto_friends_pb.GetFriendsForUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsUsernamesForUserResponse) => void): grpc.ClientUnaryCall;
    public getAwaitingFriendsUsernamesForUser(request: proto_friends_pb.GetFriendsForUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsUsernamesForUserResponse) => void): grpc.ClientUnaryCall;
    public getFriendsForUser(request: proto_friends_pb.GetFriendsForUserRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsForUserResponse) => void): grpc.ClientUnaryCall;
    public getFriendsForUser(request: proto_friends_pb.GetFriendsForUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsForUserResponse) => void): grpc.ClientUnaryCall;
    public getFriendsForUser(request: proto_friends_pb.GetFriendsForUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsForUserResponse) => void): grpc.ClientUnaryCall;
    public getAwaitingFriendsForUser(request: proto_friends_pb.GetFriendsForUserRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsForUserResponse) => void): grpc.ClientUnaryCall;
    public getAwaitingFriendsForUser(request: proto_friends_pb.GetFriendsForUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsForUserResponse) => void): grpc.ClientUnaryCall;
    public getAwaitingFriendsForUser(request: proto_friends_pb.GetFriendsForUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetFriendsForUserResponse) => void): grpc.ClientUnaryCall;
    public getConnectionBetweenUsers(request: proto_friends_pb.GetConnectionBetweenUsersRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.ConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    public getConnectionBetweenUsers(request: proto_friends_pb.GetConnectionBetweenUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.ConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    public getConnectionBetweenUsers(request: proto_friends_pb.GetConnectionBetweenUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.ConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    public getRecommendationsForUser(request: proto_friends_pb.GetRecommendationsForUserRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetRecommendationsForUserResponse) => void): grpc.ClientUnaryCall;
    public getRecommendationsForUser(request: proto_friends_pb.GetRecommendationsForUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetRecommendationsForUserResponse) => void): grpc.ClientUnaryCall;
    public getRecommendationsForUser(request: proto_friends_pb.GetRecommendationsForUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.GetRecommendationsForUserResponse) => void): grpc.ClientUnaryCall;
    public createConnectionForUsers(request: proto_friends_pb.CreateConnectionForUsersRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.CreateConnectionForUsersResponse) => void): grpc.ClientUnaryCall;
    public createConnectionForUsers(request: proto_friends_pb.CreateConnectionForUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.CreateConnectionForUsersResponse) => void): grpc.ClientUnaryCall;
    public createConnectionForUsers(request: proto_friends_pb.CreateConnectionForUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.CreateConnectionForUsersResponse) => void): grpc.ClientUnaryCall;
    public addAwaitingFriend(request: proto_friends_pb.AddAwaitingFriendRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.AddAwaitingFriendResponse) => void): grpc.ClientUnaryCall;
    public addAwaitingFriend(request: proto_friends_pb.AddAwaitingFriendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.AddAwaitingFriendResponse) => void): grpc.ClientUnaryCall;
    public addAwaitingFriend(request: proto_friends_pb.AddAwaitingFriendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.AddAwaitingFriendResponse) => void): grpc.ClientUnaryCall;
    public updateConnectionBetweenUsers(request: proto_friends_pb.UpdateConnectionBetweenUsersRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.ConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    public updateConnectionBetweenUsers(request: proto_friends_pb.UpdateConnectionBetweenUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.ConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    public updateConnectionBetweenUsers(request: proto_friends_pb.UpdateConnectionBetweenUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.ConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    public deleteConnectionBetweenUsers(request: proto_friends_pb.DeleteConnectionBetweenUsersRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.DeleteConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    public deleteConnectionBetweenUsers(request: proto_friends_pb.DeleteConnectionBetweenUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.DeleteConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    public deleteConnectionBetweenUsers(request: proto_friends_pb.DeleteConnectionBetweenUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.DeleteConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    public deleteAwaitingFriendBetweenUsers(request: proto_friends_pb.DeleteConnectionBetweenUsersRequest, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.DeleteConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    public deleteAwaitingFriendBetweenUsers(request: proto_friends_pb.DeleteConnectionBetweenUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.DeleteConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
    public deleteAwaitingFriendBetweenUsers(request: proto_friends_pb.DeleteConnectionBetweenUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_friends_pb.DeleteConnectionBetweenUsersResponse) => void): grpc.ClientUnaryCall;
}
