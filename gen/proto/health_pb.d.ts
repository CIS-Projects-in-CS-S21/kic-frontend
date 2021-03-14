import * as jspb from 'google-protobuf'

import * as proto_common_pb from '../proto/common_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class HealthDataErrorResponse extends jspb.Message {
  getError(): HealthDataError;
  setError(value: HealthDataError): HealthDataErrorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthDataErrorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HealthDataErrorResponse): HealthDataErrorResponse.AsObject;
  static serializeBinaryToWriter(message: HealthDataErrorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthDataErrorResponse;
  static deserializeBinaryFromReader(message: HealthDataErrorResponse, reader: jspb.BinaryReader): HealthDataErrorResponse;
}

export namespace HealthDataErrorResponse {
  export type AsObject = {
    error: HealthDataError,
  }
}

export class GetHealthDataForUserRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): GetHealthDataForUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHealthDataForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHealthDataForUserRequest): GetHealthDataForUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetHealthDataForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHealthDataForUserRequest;
  static deserializeBinaryFromReader(message: GetHealthDataForUserRequest, reader: jspb.BinaryReader): GetHealthDataForUserRequest;
}

export namespace GetHealthDataForUserRequest {
  export type AsObject = {
    userid: number,
  }
}

export class MentalHealthLog extends jspb.Message {
  getLogdate(): proto_common_pb.Date | undefined;
  setLogdate(value?: proto_common_pb.Date): MentalHealthLog;
  hasLogdate(): boolean;
  clearLogdate(): MentalHealthLog;

  getScore(): number;
  setScore(value: number): MentalHealthLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MentalHealthLog.AsObject;
  static toObject(includeInstance: boolean, msg: MentalHealthLog): MentalHealthLog.AsObject;
  static serializeBinaryToWriter(message: MentalHealthLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MentalHealthLog;
  static deserializeBinaryFromReader(message: MentalHealthLog, reader: jspb.BinaryReader): MentalHealthLog;
}

export namespace MentalHealthLog {
  export type AsObject = {
    logdate?: proto_common_pb.Date.AsObject,
    score: number,
  }
}

export class GetHealthDataForUserResponse extends jspb.Message {
  getError(): HealthDataError;
  setError(value: HealthDataError): GetHealthDataForUserResponse;

  getHealthdataList(): Array<MentalHealthLog>;
  setHealthdataList(value: Array<MentalHealthLog>): GetHealthDataForUserResponse;
  clearHealthdataList(): GetHealthDataForUserResponse;
  addHealthdata(value?: MentalHealthLog, index?: number): MentalHealthLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHealthDataForUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHealthDataForUserResponse): GetHealthDataForUserResponse.AsObject;
  static serializeBinaryToWriter(message: GetHealthDataForUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHealthDataForUserResponse;
  static deserializeBinaryFromReader(message: GetHealthDataForUserResponse, reader: jspb.BinaryReader): GetHealthDataForUserResponse;
}

export namespace GetHealthDataForUserResponse {
  export type AsObject = {
    error: HealthDataError,
    healthdataList: Array<MentalHealthLog.AsObject>,
  }
}

export class AddHealthDataForUserRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): AddHealthDataForUserRequest;

  getNewentry(): MentalHealthLog | undefined;
  setNewentry(value?: MentalHealthLog): AddHealthDataForUserRequest;
  hasNewentry(): boolean;
  clearNewentry(): AddHealthDataForUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddHealthDataForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddHealthDataForUserRequest): AddHealthDataForUserRequest.AsObject;
  static serializeBinaryToWriter(message: AddHealthDataForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddHealthDataForUserRequest;
  static deserializeBinaryFromReader(message: AddHealthDataForUserRequest, reader: jspb.BinaryReader): AddHealthDataForUserRequest;
}

export namespace AddHealthDataForUserRequest {
  export type AsObject = {
    userid: number,
    newentry?: MentalHealthLog.AsObject,
  }
}

export class DeleteHealthDataForUserRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): DeleteHealthDataForUserRequest;

  getAll(): boolean;
  setAll(value: boolean): DeleteHealthDataForUserRequest;

  getDatetoremove(): proto_common_pb.Date | undefined;
  setDatetoremove(value?: proto_common_pb.Date): DeleteHealthDataForUserRequest;
  hasDatetoremove(): boolean;
  clearDatetoremove(): DeleteHealthDataForUserRequest;

  getDataCase(): DeleteHealthDataForUserRequest.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteHealthDataForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteHealthDataForUserRequest): DeleteHealthDataForUserRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteHealthDataForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteHealthDataForUserRequest;
  static deserializeBinaryFromReader(message: DeleteHealthDataForUserRequest, reader: jspb.BinaryReader): DeleteHealthDataForUserRequest;
}

export namespace DeleteHealthDataForUserRequest {
  export type AsObject = {
    userid: number,
    all: boolean,
    datetoremove?: proto_common_pb.Date.AsObject,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    ALL = 2,
    DATETOREMOVE = 3,
  }
}

export class DeleteHealthDataForUserResponse extends jspb.Message {
  getError(): HealthDataError;
  setError(value: HealthDataError): DeleteHealthDataForUserResponse;

  getEntriesdeleted(): number;
  setEntriesdeleted(value: number): DeleteHealthDataForUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteHealthDataForUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteHealthDataForUserResponse): DeleteHealthDataForUserResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteHealthDataForUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteHealthDataForUserResponse;
  static deserializeBinaryFromReader(message: DeleteHealthDataForUserResponse, reader: jspb.BinaryReader): DeleteHealthDataForUserResponse;
}

export namespace DeleteHealthDataForUserResponse {
  export type AsObject = {
    error: HealthDataError,
    entriesdeleted: number,
  }
}

export class UpdateHealthDataForDateRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): UpdateHealthDataForDateRequest;

  getDesiredloginfo(): MentalHealthLog | undefined;
  setDesiredloginfo(value?: MentalHealthLog): UpdateHealthDataForDateRequest;
  hasDesiredloginfo(): boolean;
  clearDesiredloginfo(): UpdateHealthDataForDateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateHealthDataForDateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateHealthDataForDateRequest): UpdateHealthDataForDateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateHealthDataForDateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateHealthDataForDateRequest;
  static deserializeBinaryFromReader(message: UpdateHealthDataForDateRequest, reader: jspb.BinaryReader): UpdateHealthDataForDateRequest;
}

export namespace UpdateHealthDataForDateRequest {
  export type AsObject = {
    userid: number,
    desiredloginfo?: MentalHealthLog.AsObject,
  }
}

export enum HealthDataError { 
  USER_NOT_FOUND = 0,
  DATE_NOT_FOUND = 1,
}
