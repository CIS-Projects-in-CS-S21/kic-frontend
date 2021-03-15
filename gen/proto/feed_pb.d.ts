import * as jspb from 'google-protobuf'

import * as proto_common_pb from '../proto/common_pb';


export class GenerateFeedForUserRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): GenerateFeedForUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateFeedForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateFeedForUserRequest): GenerateFeedForUserRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateFeedForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateFeedForUserRequest;
  static deserializeBinaryFromReader(message: GenerateFeedForUserRequest, reader: jspb.BinaryReader): GenerateFeedForUserRequest;
}

export namespace GenerateFeedForUserRequest {
  export type AsObject = {
    userid: number,
  }
}

export class GenerateFeedForUserResponse extends jspb.Message {
  getFileinfo(): proto_common_pb.File | undefined;
  setFileinfo(value?: proto_common_pb.File): GenerateFeedForUserResponse;
  hasFileinfo(): boolean;
  clearFileinfo(): GenerateFeedForUserResponse;

  getError(): GenerateFeedError;
  setError(value: GenerateFeedError): GenerateFeedForUserResponse;

  getDataCase(): GenerateFeedForUserResponse.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateFeedForUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateFeedForUserResponse): GenerateFeedForUserResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateFeedForUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateFeedForUserResponse;
  static deserializeBinaryFromReader(message: GenerateFeedForUserResponse, reader: jspb.BinaryReader): GenerateFeedForUserResponse;
}

export namespace GenerateFeedForUserResponse {
  export type AsObject = {
    fileinfo?: proto_common_pb.File.AsObject,
    error: GenerateFeedError,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    FILEINFO = 1,
    ERROR = 2,
  }
}

export enum GenerateFeedError { 
  USER_NOT_FOUND = 0,
  OUT_OF_POSTS = 1,
}
