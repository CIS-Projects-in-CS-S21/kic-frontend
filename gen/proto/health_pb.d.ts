// package: kic.health
// file: proto/health.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_common_pb from "../proto/common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetHealthDataForUserRequest extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): GetHealthDataForUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetHealthDataForUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetHealthDataForUserRequest): GetHealthDataForUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    hasLogdate(): boolean;
    clearLogdate(): void;
    getLogdate(): proto_common_pb.Date | undefined;
    setLogdate(value?: proto_common_pb.Date): MentalHealthLog;
    getScore(): number;
    setScore(value: number): MentalHealthLog;
    getJournalname(): string;
    setJournalname(value: string): MentalHealthLog;
    getUserid(): number;
    setUserid(value: number): MentalHealthLog;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MentalHealthLog.AsObject;
    static toObject(includeInstance: boolean, msg: MentalHealthLog): MentalHealthLog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MentalHealthLog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MentalHealthLog;
    static deserializeBinaryFromReader(message: MentalHealthLog, reader: jspb.BinaryReader): MentalHealthLog;
}

export namespace MentalHealthLog {
    export type AsObject = {
        logdate?: proto_common_pb.Date.AsObject,
        score: number,
        journalname: string,
        userid: number,
    }
}

export class GetHealthDataForUserResponse extends jspb.Message { 
    clearHealthdataList(): void;
    getHealthdataList(): Array<MentalHealthLog>;
    setHealthdataList(value: Array<MentalHealthLog>): GetHealthDataForUserResponse;
    addHealthdata(value?: MentalHealthLog, index?: number): MentalHealthLog;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetHealthDataForUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetHealthDataForUserResponse): GetHealthDataForUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetHealthDataForUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetHealthDataForUserResponse;
    static deserializeBinaryFromReader(message: GetHealthDataForUserResponse, reader: jspb.BinaryReader): GetHealthDataForUserResponse;
}

export namespace GetHealthDataForUserResponse {
    export type AsObject = {
        healthdataList: Array<MentalHealthLog.AsObject>,
    }
}

export class GetHealthDataByDateRequest extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): GetHealthDataByDateRequest;

    hasLogdate(): boolean;
    clearLogdate(): void;
    getLogdate(): proto_common_pb.Date | undefined;
    setLogdate(value?: proto_common_pb.Date): GetHealthDataByDateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetHealthDataByDateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetHealthDataByDateRequest): GetHealthDataByDateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetHealthDataByDateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetHealthDataByDateRequest;
    static deserializeBinaryFromReader(message: GetHealthDataByDateRequest, reader: jspb.BinaryReader): GetHealthDataByDateRequest;
}

export namespace GetHealthDataByDateRequest {
    export type AsObject = {
        userid: number,
        logdate?: proto_common_pb.Date.AsObject,
    }
}

export class GetHealthDataByDateResponse extends jspb.Message { 
    clearHealthdataList(): void;
    getHealthdataList(): Array<MentalHealthLog>;
    setHealthdataList(value: Array<MentalHealthLog>): GetHealthDataByDateResponse;
    addHealthdata(value?: MentalHealthLog, index?: number): MentalHealthLog;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetHealthDataByDateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetHealthDataByDateResponse): GetHealthDataByDateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetHealthDataByDateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetHealthDataByDateResponse;
    static deserializeBinaryFromReader(message: GetHealthDataByDateResponse, reader: jspb.BinaryReader): GetHealthDataByDateResponse;
}

export namespace GetHealthDataByDateResponse {
    export type AsObject = {
        healthdataList: Array<MentalHealthLog.AsObject>,
    }
}

export class AddHealthDataForUserRequest extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): AddHealthDataForUserRequest;

    hasNewentry(): boolean;
    clearNewentry(): void;
    getNewentry(): MentalHealthLog | undefined;
    setNewentry(value?: MentalHealthLog): AddHealthDataForUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddHealthDataForUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddHealthDataForUserRequest): AddHealthDataForUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

export class AddHealthDataForUserResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): AddHealthDataForUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddHealthDataForUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddHealthDataForUserResponse): AddHealthDataForUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddHealthDataForUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddHealthDataForUserResponse;
    static deserializeBinaryFromReader(message: AddHealthDataForUserResponse, reader: jspb.BinaryReader): AddHealthDataForUserResponse;
}

export namespace AddHealthDataForUserResponse {
    export type AsObject = {
        success: boolean,
    }
}

export class DeleteHealthDataForUserRequest extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): DeleteHealthDataForUserRequest;

    hasAll(): boolean;
    clearAll(): void;
    getAll(): boolean;
    setAll(value: boolean): DeleteHealthDataForUserRequest;

    hasDatetoremove(): boolean;
    clearDatetoremove(): void;
    getDatetoremove(): proto_common_pb.Date | undefined;
    setDatetoremove(value?: proto_common_pb.Date): DeleteHealthDataForUserRequest;

    getDataCase(): DeleteHealthDataForUserRequest.DataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteHealthDataForUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteHealthDataForUserRequest): DeleteHealthDataForUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    getEntriesdeleted(): number;
    setEntriesdeleted(value: number): DeleteHealthDataForUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteHealthDataForUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteHealthDataForUserResponse): DeleteHealthDataForUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteHealthDataForUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteHealthDataForUserResponse;
    static deserializeBinaryFromReader(message: DeleteHealthDataForUserResponse, reader: jspb.BinaryReader): DeleteHealthDataForUserResponse;
}

export namespace DeleteHealthDataForUserResponse {
    export type AsObject = {
        entriesdeleted: number,
    }
}

export class UpdateHealthDataForDateRequest extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): UpdateHealthDataForDateRequest;

    hasDesiredloginfo(): boolean;
    clearDesiredloginfo(): void;
    getDesiredloginfo(): MentalHealthLog | undefined;
    setDesiredloginfo(value?: MentalHealthLog): UpdateHealthDataForDateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateHealthDataForDateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateHealthDataForDateRequest): UpdateHealthDataForDateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

export class UpdateHealthDataForDateResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): UpdateHealthDataForDateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateHealthDataForDateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateHealthDataForDateResponse): UpdateHealthDataForDateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateHealthDataForDateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateHealthDataForDateResponse;
    static deserializeBinaryFromReader(message: UpdateHealthDataForDateResponse, reader: jspb.BinaryReader): UpdateHealthDataForDateResponse;
}

export namespace UpdateHealthDataForDateResponse {
    export type AsObject = {
        success: boolean,
    }
}

export class GetMentalHealthScoreForUserRequest extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): GetMentalHealthScoreForUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMentalHealthScoreForUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMentalHealthScoreForUserRequest): GetMentalHealthScoreForUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMentalHealthScoreForUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMentalHealthScoreForUserRequest;
    static deserializeBinaryFromReader(message: GetMentalHealthScoreForUserRequest, reader: jspb.BinaryReader): GetMentalHealthScoreForUserRequest;
}

export namespace GetMentalHealthScoreForUserRequest {
    export type AsObject = {
        userid: number,
    }
}

export class GetMentalHealthScoreForUserResponse extends jspb.Message { 
    getScore(): number;
    setScore(value: number): GetMentalHealthScoreForUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMentalHealthScoreForUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMentalHealthScoreForUserResponse): GetMentalHealthScoreForUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMentalHealthScoreForUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMentalHealthScoreForUserResponse;
    static deserializeBinaryFromReader(message: GetMentalHealthScoreForUserResponse, reader: jspb.BinaryReader): GetMentalHealthScoreForUserResponse;
}

export namespace GetMentalHealthScoreForUserResponse {
    export type AsObject = {
        score: number,
    }
}
