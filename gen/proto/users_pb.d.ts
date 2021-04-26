// package: kic.users
// file: proto/users.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_common_pb from "../proto/common_pb";

export class AddUserRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): AddUserRequest;
    getDesiredusername(): string;
    setDesiredusername(value: string): AddUserRequest;
    getDesiredpassword(): string;
    setDesiredpassword(value: string): AddUserRequest;

    hasBirthday(): boolean;
    clearBirthday(): void;
    getBirthday(): proto_common_pb.Date | undefined;
    setBirthday(value?: proto_common_pb.Date): AddUserRequest;
    getCity(): string;
    setCity(value: string): AddUserRequest;
    getBio(): string;
    setBio(value: string): AddUserRequest;
    getTriggers(): string;
    setTriggers(value: string): AddUserRequest;
    getIsprivate(): string;
    setIsprivate(value: string): AddUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddUserRequest): AddUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddUserRequest;
    static deserializeBinaryFromReader(message: AddUserRequest, reader: jspb.BinaryReader): AddUserRequest;
}

export namespace AddUserRequest {
    export type AsObject = {
        email: string,
        desiredusername: string,
        desiredpassword: string,
        birthday?: proto_common_pb.Date.AsObject,
        city: string,
        bio: string,
        triggers: string,
        isprivate: string,
    }
}

export class AddUserResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): AddUserResponse;

    hasCreateduser(): boolean;
    clearCreateduser(): void;
    getCreateduser(): proto_common_pb.User | undefined;
    setCreateduser(value?: proto_common_pb.User): AddUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddUserResponse): AddUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddUserResponse;
    static deserializeBinaryFromReader(message: AddUserResponse, reader: jspb.BinaryReader): AddUserResponse;
}

export namespace AddUserResponse {
    export type AsObject = {
        success: boolean,
        createduser?: proto_common_pb.User.AsObject,
    }
}

export class GetUserByUsernameRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): GetUserByUsernameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserByUsernameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserByUsernameRequest): GetUserByUsernameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserByUsernameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserByUsernameRequest;
    static deserializeBinaryFromReader(message: GetUserByUsernameRequest, reader: jspb.BinaryReader): GetUserByUsernameRequest;
}

export namespace GetUserByUsernameRequest {
    export type AsObject = {
        username: string,
    }
}

export class GetUserByUsernameResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): GetUserByUsernameResponse;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): proto_common_pb.User | undefined;
    setUser(value?: proto_common_pb.User): GetUserByUsernameResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserByUsernameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserByUsernameResponse): GetUserByUsernameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserByUsernameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserByUsernameResponse;
    static deserializeBinaryFromReader(message: GetUserByUsernameResponse, reader: jspb.BinaryReader): GetUserByUsernameResponse;
}

export namespace GetUserByUsernameResponse {
    export type AsObject = {
        success: boolean,
        user?: proto_common_pb.User.AsObject,
    }
}

export class GetUserByIDRequest extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): GetUserByIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserByIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserByIDRequest): GetUserByIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserByIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserByIDRequest;
    static deserializeBinaryFromReader(message: GetUserByIDRequest, reader: jspb.BinaryReader): GetUserByIDRequest;
}

export namespace GetUserByIDRequest {
    export type AsObject = {
        userid: number,
    }
}

export class GetUserByIDResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): GetUserByIDResponse;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): proto_common_pb.User | undefined;
    setUser(value?: proto_common_pb.User): GetUserByIDResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserByIDResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserByIDResponse): GetUserByIDResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserByIDResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserByIDResponse;
    static deserializeBinaryFromReader(message: GetUserByIDResponse, reader: jspb.BinaryReader): GetUserByIDResponse;
}

export namespace GetUserByIDResponse {
    export type AsObject = {
        success: boolean,
        user?: proto_common_pb.User.AsObject,
    }
}

export class GetUserNameByIDRequest extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): GetUserNameByIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserNameByIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserNameByIDRequest): GetUserNameByIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserNameByIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserNameByIDRequest;
    static deserializeBinaryFromReader(message: GetUserNameByIDRequest, reader: jspb.BinaryReader): GetUserNameByIDRequest;
}

export namespace GetUserNameByIDRequest {
    export type AsObject = {
        userid: number,
    }
}

export class GetUserNameByIDResponse extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): GetUserNameByIDResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserNameByIDResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserNameByIDResponse): GetUserNameByIDResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserNameByIDResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserNameByIDResponse;
    static deserializeBinaryFromReader(message: GetUserNameByIDResponse, reader: jspb.BinaryReader): GetUserNameByIDResponse;
}

export namespace GetUserNameByIDResponse {
    export type AsObject = {
        username: string,
    }
}

export class DeleteUserByIDRequest extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): DeleteUserByIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserByIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserByIDRequest): DeleteUserByIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserByIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserByIDRequest;
    static deserializeBinaryFromReader(message: DeleteUserByIDRequest, reader: jspb.BinaryReader): DeleteUserByIDRequest;
}

export namespace DeleteUserByIDRequest {
    export type AsObject = {
        userid: number,
    }
}

export class DeleteUserByIDResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): DeleteUserByIDResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserByIDResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserByIDResponse): DeleteUserByIDResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserByIDResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserByIDResponse;
    static deserializeBinaryFromReader(message: DeleteUserByIDResponse, reader: jspb.BinaryReader): DeleteUserByIDResponse;
}

export namespace DeleteUserByIDResponse {
    export type AsObject = {
        success: boolean,
    }
}

export class UpdateUserInfoRequest extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): UpdateUserInfoRequest;
    getEmail(): string;
    setEmail(value: string): UpdateUserInfoRequest;
    getDesiredusername(): string;
    setDesiredusername(value: string): UpdateUserInfoRequest;
    getDesiredpassword(): string;
    setDesiredpassword(value: string): UpdateUserInfoRequest;

    hasBirthday(): boolean;
    clearBirthday(): void;
    getBirthday(): proto_common_pb.Date | undefined;
    setBirthday(value?: proto_common_pb.Date): UpdateUserInfoRequest;
    getCity(): string;
    setCity(value: string): UpdateUserInfoRequest;
    getBio(): string;
    setBio(value: string): UpdateUserInfoRequest;
    getTriggers(): string;
    setTriggers(value: string): UpdateUserInfoRequest;
    getIsprivate(): string;
    setIsprivate(value: string): UpdateUserInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserInfoRequest): UpdateUserInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserInfoRequest;
    static deserializeBinaryFromReader(message: UpdateUserInfoRequest, reader: jspb.BinaryReader): UpdateUserInfoRequest;
}

export namespace UpdateUserInfoRequest {
    export type AsObject = {
        userid: number,
        email: string,
        desiredusername: string,
        desiredpassword: string,
        birthday?: proto_common_pb.Date.AsObject,
        city: string,
        bio: string,
        triggers: string,
        isprivate: string,
    }
}

export class UpdateUserInfoResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): UpdateUserInfoResponse;

    hasUpdateduser(): boolean;
    clearUpdateduser(): void;
    getUpdateduser(): proto_common_pb.User | undefined;
    setUpdateduser(value?: proto_common_pb.User): UpdateUserInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserInfoResponse): UpdateUserInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserInfoResponse;
    static deserializeBinaryFromReader(message: UpdateUserInfoResponse, reader: jspb.BinaryReader): UpdateUserInfoResponse;
}

export namespace UpdateUserInfoResponse {
    export type AsObject = {
        success: boolean,
        updateduser?: proto_common_pb.User.AsObject,
    }
}

export class GetJWTTokenRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): GetJWTTokenRequest;
    getPassword(): string;
    setPassword(value: string): GetJWTTokenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetJWTTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetJWTTokenRequest): GetJWTTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetJWTTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetJWTTokenRequest;
    static deserializeBinaryFromReader(message: GetJWTTokenRequest, reader: jspb.BinaryReader): GetJWTTokenRequest;
}

export namespace GetJWTTokenRequest {
    export type AsObject = {
        username: string,
        password: string,
    }
}

export class GetJWTTokenResponse extends jspb.Message { 
    getToken(): string;
    setToken(value: string): GetJWTTokenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetJWTTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetJWTTokenResponse): GetJWTTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetJWTTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetJWTTokenResponse;
    static deserializeBinaryFromReader(message: GetJWTTokenResponse, reader: jspb.BinaryReader): GetJWTTokenResponse;
}

export namespace GetJWTTokenResponse {
    export type AsObject = {
        token: string,
    }
}
