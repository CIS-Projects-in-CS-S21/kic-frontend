import * as jspb from 'google-protobuf'

import * as proto_common_pb from '../proto/common_pb';


export class UploadFileRequest extends jspb.Message {
  getFileinfo(): proto_common_pb.File | undefined;
  setFileinfo(value?: proto_common_pb.File): UploadFileRequest;
  hasFileinfo(): boolean;
  clearFileinfo(): UploadFileRequest;

  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): UploadFileRequest;

  getDataCase(): UploadFileRequest.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadFileRequest): UploadFileRequest.AsObject;
  static serializeBinaryToWriter(message: UploadFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadFileRequest;
  static deserializeBinaryFromReader(message: UploadFileRequest, reader: jspb.BinaryReader): UploadFileRequest;
}

export namespace UploadFileRequest {
  export type AsObject = {
    fileinfo?: proto_common_pb.File.AsObject,
    chunk: Uint8Array | string,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    FILEINFO = 1,
    CHUNK = 2,
  }
}

export class UploadFileResponse extends jspb.Message {
  getFileid(): string;
  setFileid(value: string): UploadFileResponse;

  getBytesread(): number;
  setBytesread(value: number): UploadFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadFileResponse): UploadFileResponse.AsObject;
  static serializeBinaryToWriter(message: UploadFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadFileResponse;
  static deserializeBinaryFromReader(message: UploadFileResponse, reader: jspb.BinaryReader): UploadFileResponse;
}

export namespace UploadFileResponse {
  export type AsObject = {
    fileid: string,
    bytesread: number,
  }
}

export class CheckForFileRequest extends jspb.Message {
  getFileinfo(): proto_common_pb.File | undefined;
  setFileinfo(value?: proto_common_pb.File): CheckForFileRequest;
  hasFileinfo(): boolean;
  clearFileinfo(): CheckForFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckForFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckForFileRequest): CheckForFileRequest.AsObject;
  static serializeBinaryToWriter(message: CheckForFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckForFileRequest;
  static deserializeBinaryFromReader(message: CheckForFileRequest, reader: jspb.BinaryReader): CheckForFileRequest;
}

export namespace CheckForFileRequest {
  export type AsObject = {
    fileinfo?: proto_common_pb.File.AsObject,
  }
}

export class CheckForFileResponse extends jspb.Message {
  getExists(): boolean;
  setExists(value: boolean): CheckForFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckForFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckForFileResponse): CheckForFileResponse.AsObject;
  static serializeBinaryToWriter(message: CheckForFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckForFileResponse;
  static deserializeBinaryFromReader(message: CheckForFileResponse, reader: jspb.BinaryReader): CheckForFileResponse;
}

export namespace CheckForFileResponse {
  export type AsObject = {
    exists: boolean,
  }
}

export class DownloadFileRequest extends jspb.Message {
  getFileinfo(): proto_common_pb.File | undefined;
  setFileinfo(value?: proto_common_pb.File): DownloadFileRequest;
  hasFileinfo(): boolean;
  clearFileinfo(): DownloadFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadFileRequest): DownloadFileRequest.AsObject;
  static serializeBinaryToWriter(message: DownloadFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadFileRequest;
  static deserializeBinaryFromReader(message: DownloadFileRequest, reader: jspb.BinaryReader): DownloadFileRequest;
}

export namespace DownloadFileRequest {
  export type AsObject = {
    fileinfo?: proto_common_pb.File.AsObject,
  }
}

export class DownloadFileResponse extends jspb.Message {
  getError(): DownloadFileByNameError;
  setError(value: DownloadFileByNameError): DownloadFileResponse;

  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): DownloadFileResponse;

  getDataCase(): DownloadFileResponse.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadFileResponse): DownloadFileResponse.AsObject;
  static serializeBinaryToWriter(message: DownloadFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadFileResponse;
  static deserializeBinaryFromReader(message: DownloadFileResponse, reader: jspb.BinaryReader): DownloadFileResponse;
}

export namespace DownloadFileResponse {
  export type AsObject = {
    error: DownloadFileByNameError,
    chunk: Uint8Array | string,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    ERROR = 1,
    CHUNK = 2,
  }
}

export class GetFilesByMetadataRequest extends jspb.Message {
  getDesiredmetadataMap(): jspb.Map<string, string>;
  clearDesiredmetadataMap(): GetFilesByMetadataRequest;

  getStrictness(): MetadataStrictness;
  setStrictness(value: MetadataStrictness): GetFilesByMetadataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFilesByMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFilesByMetadataRequest): GetFilesByMetadataRequest.AsObject;
  static serializeBinaryToWriter(message: GetFilesByMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFilesByMetadataRequest;
  static deserializeBinaryFromReader(message: GetFilesByMetadataRequest, reader: jspb.BinaryReader): GetFilesByMetadataRequest;
}

export namespace GetFilesByMetadataRequest {
  export type AsObject = {
    desiredmetadataMap: Array<[string, string]>,
    strictness: MetadataStrictness,
  }
}

export class GetFilesByMetadataResponse extends jspb.Message {
  getFileinfosList(): Array<proto_common_pb.File>;
  setFileinfosList(value: Array<proto_common_pb.File>): GetFilesByMetadataResponse;
  clearFileinfosList(): GetFilesByMetadataResponse;
  addFileinfos(value?: proto_common_pb.File, index?: number): proto_common_pb.File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFilesByMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFilesByMetadataResponse): GetFilesByMetadataResponse.AsObject;
  static serializeBinaryToWriter(message: GetFilesByMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFilesByMetadataResponse;
  static deserializeBinaryFromReader(message: GetFilesByMetadataResponse, reader: jspb.BinaryReader): GetFilesByMetadataResponse;
}

export namespace GetFilesByMetadataResponse {
  export type AsObject = {
    fileinfosList: Array<proto_common_pb.File.AsObject>,
  }
}

export class DeleteFilesWithMetaDataRequest extends jspb.Message {
  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): DeleteFilesWithMetaDataRequest;

  getStrictness(): MetadataStrictness;
  setStrictness(value: MetadataStrictness): DeleteFilesWithMetaDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFilesWithMetaDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFilesWithMetaDataRequest): DeleteFilesWithMetaDataRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFilesWithMetaDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFilesWithMetaDataRequest;
  static deserializeBinaryFromReader(message: DeleteFilesWithMetaDataRequest, reader: jspb.BinaryReader): DeleteFilesWithMetaDataRequest;
}

export namespace DeleteFilesWithMetaDataRequest {
  export type AsObject = {
    metadataMap: Array<[string, string]>,
    strictness: MetadataStrictness,
  }
}

export class DeleteFilesWithMetaDataResponse extends jspb.Message {
  getError(): DeleteFileError;
  setError(value: DeleteFileError): DeleteFilesWithMetaDataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFilesWithMetaDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFilesWithMetaDataResponse): DeleteFilesWithMetaDataResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteFilesWithMetaDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFilesWithMetaDataResponse;
  static deserializeBinaryFromReader(message: DeleteFilesWithMetaDataResponse, reader: jspb.BinaryReader): DeleteFilesWithMetaDataResponse;
}

export namespace DeleteFilesWithMetaDataResponse {
  export type AsObject = {
    error: DeleteFileError,
  }
}

export enum DownloadFileByNameError { 
  FILE_NOT_FOUND = 0,
  BUCKET_NOT_FOUND = 1,
}
export enum MetadataStrictness { 
  STRICT = 0,
  CASUAL = 1,
  STRICTLY_OPPOSITE = 2,
  CASUALLY_OPPOSITE = 3,
}
export enum DeleteFileError { 
  ACCESS_DENIED = 0,
}
