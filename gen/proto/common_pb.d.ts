// package: kic.common
// file: proto/common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class User extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): User;
    getUsername(): string;
    setUsername(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;

    hasBirthday(): boolean;
    clearBirthday(): void;
    getBirthday(): Date | undefined;
    setBirthday(value?: Date): User;
    getCity(): string;
    setCity(value: string): User;
    getBio(): string;
    setBio(value: string): User;
    getTriggers(): string;
    setTriggers(value: string): User;
    getIsprivate(): string;
    setIsprivate(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        userid: number,
        username: string,
        email: string,
        birthday?: Date.AsObject,
        city: string,
        bio: string,
        triggers: string,
        isprivate: string,
    }
}

export class File extends jspb.Message { 
    getFilename(): string;
    setFilename(value: string): File;
    getFilelocation(): string;
    setFilelocation(value: string): File;

    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;

    hasDatestored(): boolean;
    clearDatestored(): void;
    getDatestored(): Date | undefined;
    setDatestored(value?: Date): File;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): File.AsObject;
    static toObject(includeInstance: boolean, msg: File): File.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): File;
    static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
    export type AsObject = {
        filename: string,
        filelocation: string,

        metadataMap: Array<[string, string]>,
        datestored?: Date.AsObject,
    }
}

export class Date extends jspb.Message { 
    getYear(): number;
    setYear(value: number): Date;
    getMonth(): number;
    setMonth(value: number): Date;
    getDay(): number;
    setDay(value: number): Date;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Date.AsObject;
    static toObject(includeInstance: boolean, msg: Date): Date.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Date, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Date;
    static deserializeBinaryFromReader(message: Date, reader: jspb.BinaryReader): Date;
}

export namespace Date {
    export type AsObject = {
        year: number,
        month: number,
        day: number,
    }
}
