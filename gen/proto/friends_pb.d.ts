// package: kic.friends
// file: proto/friends.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_common_pb from "../proto/common_pb";

export class GetFriendsForUserRequest extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): proto_common_pb.User | undefined;
    setUser(value?: proto_common_pb.User): GetFriendsForUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFriendsForUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFriendsForUserRequest): GetFriendsForUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFriendsForUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFriendsForUserRequest;
    static deserializeBinaryFromReader(message: GetFriendsForUserRequest, reader: jspb.BinaryReader): GetFriendsForUserRequest;
}

export namespace GetFriendsForUserRequest {
    export type AsObject = {
        user?: proto_common_pb.User.AsObject,
    }
}

export class GetFriendsForUserResponse extends jspb.Message { 
    clearFriendsList(): void;
    getFriendsList(): Array<number>;
    setFriendsList(value: Array<number>): GetFriendsForUserResponse;
    addFriends(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFriendsForUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetFriendsForUserResponse): GetFriendsForUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFriendsForUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFriendsForUserResponse;
    static deserializeBinaryFromReader(message: GetFriendsForUserResponse, reader: jspb.BinaryReader): GetFriendsForUserResponse;
}

export namespace GetFriendsForUserResponse {
    export type AsObject = {
        friendsList: Array<number>,
    }
}

export class GetFriendsUsernamesForUserResponse extends jspb.Message { 
    clearFriendsList(): void;
    getFriendsList(): Array<string>;
    setFriendsList(value: Array<string>): GetFriendsUsernamesForUserResponse;
    addFriends(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFriendsUsernamesForUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetFriendsUsernamesForUserResponse): GetFriendsUsernamesForUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFriendsUsernamesForUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFriendsUsernamesForUserResponse;
    static deserializeBinaryFromReader(message: GetFriendsUsernamesForUserResponse, reader: jspb.BinaryReader): GetFriendsUsernamesForUserResponse;
}

export namespace GetFriendsUsernamesForUserResponse {
    export type AsObject = {
        friendsList: Array<string>,
    }
}

export class GetRecommendationsForUserRequest extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): proto_common_pb.User | undefined;
    setUser(value?: proto_common_pb.User): GetRecommendationsForUserRequest;
    getNumberrecommendations(): number;
    setNumberrecommendations(value: number): GetRecommendationsForUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRecommendationsForUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRecommendationsForUserRequest): GetRecommendationsForUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRecommendationsForUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRecommendationsForUserRequest;
    static deserializeBinaryFromReader(message: GetRecommendationsForUserRequest, reader: jspb.BinaryReader): GetRecommendationsForUserRequest;
}

export namespace GetRecommendationsForUserRequest {
    export type AsObject = {
        user?: proto_common_pb.User.AsObject,
        numberrecommendations: number,
    }
}

export class GetRecommendationsForUserResponse extends jspb.Message { 
    clearRecommendationsList(): void;
    getRecommendationsList(): Array<proto_common_pb.User>;
    setRecommendationsList(value: Array<proto_common_pb.User>): GetRecommendationsForUserResponse;
    addRecommendations(value?: proto_common_pb.User, index?: number): proto_common_pb.User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRecommendationsForUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRecommendationsForUserResponse): GetRecommendationsForUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRecommendationsForUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRecommendationsForUserResponse;
    static deserializeBinaryFromReader(message: GetRecommendationsForUserResponse, reader: jspb.BinaryReader): GetRecommendationsForUserResponse;
}

export namespace GetRecommendationsForUserResponse {
    export type AsObject = {
        recommendationsList: Array<proto_common_pb.User.AsObject>,
    }
}

export class UpdateConnectionBetweenUsersRequest extends jspb.Message { 
    getFirstuserid(): number;
    setFirstuserid(value: number): UpdateConnectionBetweenUsersRequest;
    getSeconduserid(): number;
    setSeconduserid(value: number): UpdateConnectionBetweenUsersRequest;
    getUpdatevalue(): number;
    setUpdatevalue(value: number): UpdateConnectionBetweenUsersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateConnectionBetweenUsersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateConnectionBetweenUsersRequest): UpdateConnectionBetweenUsersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateConnectionBetweenUsersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateConnectionBetweenUsersRequest;
    static deserializeBinaryFromReader(message: UpdateConnectionBetweenUsersRequest, reader: jspb.BinaryReader): UpdateConnectionBetweenUsersRequest;
}

export namespace UpdateConnectionBetweenUsersRequest {
    export type AsObject = {
        firstuserid: number,
        seconduserid: number,
        updatevalue: number,
    }
}

export class GetConnectionBetweenUsersRequest extends jspb.Message { 
    getFirstuserid(): number;
    setFirstuserid(value: number): GetConnectionBetweenUsersRequest;
    getSeconduserid(): number;
    setSeconduserid(value: number): GetConnectionBetweenUsersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConnectionBetweenUsersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetConnectionBetweenUsersRequest): GetConnectionBetweenUsersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConnectionBetweenUsersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConnectionBetweenUsersRequest;
    static deserializeBinaryFromReader(message: GetConnectionBetweenUsersRequest, reader: jspb.BinaryReader): GetConnectionBetweenUsersRequest;
}

export namespace GetConnectionBetweenUsersRequest {
    export type AsObject = {
        firstuserid: number,
        seconduserid: number,
    }
}

export class ConnectionBetweenUsersResponse extends jspb.Message { 
    getConnectionstrength(): number;
    setConnectionstrength(value: number): ConnectionBetweenUsersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectionBetweenUsersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectionBetweenUsersResponse): ConnectionBetweenUsersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectionBetweenUsersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectionBetweenUsersResponse;
    static deserializeBinaryFromReader(message: ConnectionBetweenUsersResponse, reader: jspb.BinaryReader): ConnectionBetweenUsersResponse;
}

export namespace ConnectionBetweenUsersResponse {
    export type AsObject = {
        connectionstrength: number,
    }
}

export class DeleteConnectionBetweenUsersRequest extends jspb.Message { 
    getFirstuserid(): number;
    setFirstuserid(value: number): DeleteConnectionBetweenUsersRequest;
    getSeconduserid(): number;
    setSeconduserid(value: number): DeleteConnectionBetweenUsersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteConnectionBetweenUsersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteConnectionBetweenUsersRequest): DeleteConnectionBetweenUsersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteConnectionBetweenUsersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteConnectionBetweenUsersRequest;
    static deserializeBinaryFromReader(message: DeleteConnectionBetweenUsersRequest, reader: jspb.BinaryReader): DeleteConnectionBetweenUsersRequest;
}

export namespace DeleteConnectionBetweenUsersRequest {
    export type AsObject = {
        firstuserid: number,
        seconduserid: number,
    }
}

export class DeleteConnectionBetweenUsersResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteConnectionBetweenUsersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteConnectionBetweenUsersResponse): DeleteConnectionBetweenUsersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteConnectionBetweenUsersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteConnectionBetweenUsersResponse;
    static deserializeBinaryFromReader(message: DeleteConnectionBetweenUsersResponse, reader: jspb.BinaryReader): DeleteConnectionBetweenUsersResponse;
}

export namespace DeleteConnectionBetweenUsersResponse {
    export type AsObject = {
    }
}

export class CreateConnectionForUsersRequest extends jspb.Message { 
    getFirstuserid(): number;
    setFirstuserid(value: number): CreateConnectionForUsersRequest;
    getSeconduserid(): number;
    setSeconduserid(value: number): CreateConnectionForUsersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateConnectionForUsersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateConnectionForUsersRequest): CreateConnectionForUsersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateConnectionForUsersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateConnectionForUsersRequest;
    static deserializeBinaryFromReader(message: CreateConnectionForUsersRequest, reader: jspb.BinaryReader): CreateConnectionForUsersRequest;
}

export namespace CreateConnectionForUsersRequest {
    export type AsObject = {
        firstuserid: number,
        seconduserid: number,
    }
}

export class CreateConnectionForUsersResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): CreateConnectionForUsersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateConnectionForUsersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateConnectionForUsersResponse): CreateConnectionForUsersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateConnectionForUsersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateConnectionForUsersResponse;
    static deserializeBinaryFromReader(message: CreateConnectionForUsersResponse, reader: jspb.BinaryReader): CreateConnectionForUsersResponse;
}

export namespace CreateConnectionForUsersResponse {
    export type AsObject = {
        success: boolean,
    }
}

export class AddAwaitingFriendRequest extends jspb.Message { 
    getFirstuserid(): number;
    setFirstuserid(value: number): AddAwaitingFriendRequest;
    getSeconduserid(): number;
    setSeconduserid(value: number): AddAwaitingFriendRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddAwaitingFriendRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddAwaitingFriendRequest): AddAwaitingFriendRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddAwaitingFriendRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddAwaitingFriendRequest;
    static deserializeBinaryFromReader(message: AddAwaitingFriendRequest, reader: jspb.BinaryReader): AddAwaitingFriendRequest;
}

export namespace AddAwaitingFriendRequest {
    export type AsObject = {
        firstuserid: number,
        seconduserid: number,
    }
}

export class AddAwaitingFriendResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): AddAwaitingFriendResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddAwaitingFriendResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddAwaitingFriendResponse): AddAwaitingFriendResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddAwaitingFriendResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddAwaitingFriendResponse;
    static deserializeBinaryFromReader(message: AddAwaitingFriendResponse, reader: jspb.BinaryReader): AddAwaitingFriendResponse;
}

export namespace AddAwaitingFriendResponse {
    export type AsObject = {
        success: boolean,
    }
}
