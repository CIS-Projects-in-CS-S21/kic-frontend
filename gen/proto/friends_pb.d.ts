import * as jspb from 'google-protobuf'

import * as proto_common_pb from '../proto/common_pb';


export class GetFriendsForUserRequest extends jspb.Message {
  getUser(): proto_common_pb.User | undefined;
  setUser(value?: proto_common_pb.User): GetFriendsForUserRequest;
  hasUser(): boolean;
  clearUser(): GetFriendsForUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFriendsForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFriendsForUserRequest): GetFriendsForUserRequest.AsObject;
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
  getFriendsList(): Array<number>;
  setFriendsList(value: Array<number>): GetFriendsForUserResponse;
  clearFriendsList(): GetFriendsForUserResponse;
  addFriends(value: number, index?: number): GetFriendsForUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFriendsForUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFriendsForUserResponse): GetFriendsForUserResponse.AsObject;
  static serializeBinaryToWriter(message: GetFriendsForUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFriendsForUserResponse;
  static deserializeBinaryFromReader(message: GetFriendsForUserResponse, reader: jspb.BinaryReader): GetFriendsForUserResponse;
}

export namespace GetFriendsForUserResponse {
  export type AsObject = {
    friendsList: Array<number>,
  }
}

export class GetRecommendationsForUserRequest extends jspb.Message {
  getUser(): proto_common_pb.User | undefined;
  setUser(value?: proto_common_pb.User): GetRecommendationsForUserRequest;
  hasUser(): boolean;
  clearUser(): GetRecommendationsForUserRequest;

  getNumberrecommendations(): number;
  setNumberrecommendations(value: number): GetRecommendationsForUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecommendationsForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecommendationsForUserRequest): GetRecommendationsForUserRequest.AsObject;
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
  getRecommendationsList(): Array<proto_common_pb.User>;
  setRecommendationsList(value: Array<proto_common_pb.User>): GetRecommendationsForUserResponse;
  clearRecommendationsList(): GetRecommendationsForUserResponse;
  addRecommendations(value?: proto_common_pb.User, index?: number): proto_common_pb.User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecommendationsForUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecommendationsForUserResponse): GetRecommendationsForUserResponse.AsObject;
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
  getError(): ConnectionError;
  setError(value: ConnectionError): ConnectionBetweenUsersResponse;

  getConnectionstrength(): number;
  setConnectionstrength(value: number): ConnectionBetweenUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionBetweenUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionBetweenUsersResponse): ConnectionBetweenUsersResponse.AsObject;
  static serializeBinaryToWriter(message: ConnectionBetweenUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionBetweenUsersResponse;
  static deserializeBinaryFromReader(message: ConnectionBetweenUsersResponse, reader: jspb.BinaryReader): ConnectionBetweenUsersResponse;
}

export namespace ConnectionBetweenUsersResponse {
  export type AsObject = {
    error: ConnectionError,
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
  getError(): ConnectionError;
  setError(value: ConnectionError): DeleteConnectionBetweenUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConnectionBetweenUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConnectionBetweenUsersResponse): DeleteConnectionBetweenUsersResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteConnectionBetweenUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConnectionBetweenUsersResponse;
  static deserializeBinaryFromReader(message: DeleteConnectionBetweenUsersResponse, reader: jspb.BinaryReader): DeleteConnectionBetweenUsersResponse;
}

export namespace DeleteConnectionBetweenUsersResponse {
  export type AsObject = {
    error: ConnectionError,
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
  getError(): ConnectionError;
  setError(value: ConnectionError): CreateConnectionForUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConnectionForUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConnectionForUsersResponse): CreateConnectionForUsersResponse.AsObject;
  static serializeBinaryToWriter(message: CreateConnectionForUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConnectionForUsersResponse;
  static deserializeBinaryFromReader(message: CreateConnectionForUsersResponse, reader: jspb.BinaryReader): CreateConnectionForUsersResponse;
}

export namespace CreateConnectionForUsersResponse {
  export type AsObject = {
    error: ConnectionError,
  }
}

export enum ConnectionError { 
  NO_FRIENDSHIP = 0,
  USER_ONE_DNE = 1,
  USER_TWO_DNE = 2,
}
