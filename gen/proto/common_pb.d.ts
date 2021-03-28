import * as jspb from 'google-protobuf'



export class User extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): User;

  getUsername(): string;
  setUsername(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getBirthday(): Date | undefined;
  setBirthday(value?: Date): User;
  hasBirthday(): boolean;
  clearBirthday(): User;

  getCity(): string;
  setCity(value: string): User;

  getBio(): string;
  setBio(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
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
  }
}

export class File extends jspb.Message {
  getFilename(): string;
  setFilename(value: string): File;

  getFilelocation(): string;
  setFilelocation(value: string): File;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): File;

  getDatestored(): Date | undefined;
  setDatestored(value?: Date): File;
  hasDatestored(): boolean;
  clearDatestored(): File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): File.AsObject;
  static toObject(includeInstance: boolean, msg: File): File.AsObject;
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

