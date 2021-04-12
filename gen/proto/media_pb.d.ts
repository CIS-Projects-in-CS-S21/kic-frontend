import * as jspb from 'google-protobuf'

import * as proto_common_pb from '../proto/common_pb';


export class UploadFileRequest extends jspb.Message {
  getFileinfo(): proto_common_pb.File | undefined;
  setFileinfo(value?: proto_common_pb.File): UploadFileRequest;
  hasFileinfo(): boolean;
  clearFileinfo(): UploadFileRequest;

  getFileuri(): string;
  setFileuri(value: string): UploadFileRequest;

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
    fileuri: string,
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
  getChunk(): string;
  setChunk(value: string): DownloadFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadFileResponse): DownloadFileResponse.AsObject;
  static serializeBinaryToWriter(message: DownloadFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadFileResponse;
  static deserializeBinaryFromReader(message: DownloadFileResponse, reader: jspb.BinaryReader): DownloadFileResponse;
}

export namespace DownloadFileResponse {
  export type AsObject = {
    chunk: string,
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
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteFilesWithMetaDataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFilesWithMetaDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFilesWithMetaDataResponse): DeleteFilesWithMetaDataResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteFilesWithMetaDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFilesWithMetaDataResponse;
  static deserializeBinaryFromReader(message: DeleteFilesWithMetaDataResponse, reader: jspb.BinaryReader): DeleteFilesWithMetaDataResponse;
}

export namespace DeleteFilesWithMetaDataResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class UpdateFilesWithMetadataRequest extends jspb.Message {
  getDesiredmetadataMap(): jspb.Map<string, string>;
  clearDesiredmetadataMap(): UpdateFilesWithMetadataRequest;

  getFiltermetadataMap(): jspb.Map<string, string>;
  clearFiltermetadataMap(): UpdateFilesWithMetadataRequest;

  getStrictness(): MetadataStrictness;
  setStrictness(value: MetadataStrictness): UpdateFilesWithMetadataRequest;

  getUpdateflag(): UpdateFlag;
  setUpdateflag(value: UpdateFlag): UpdateFilesWithMetadataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFilesWithMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFilesWithMetadataRequest): UpdateFilesWithMetadataRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFilesWithMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFilesWithMetadataRequest;
  static deserializeBinaryFromReader(message: UpdateFilesWithMetadataRequest, reader: jspb.BinaryReader): UpdateFilesWithMetadataRequest;
}

export namespace UpdateFilesWithMetadataRequest {
  export type AsObject = {
    desiredmetadataMap: Array<[string, string]>,
    filtermetadataMap: Array<[string, string]>,
    strictness: MetadataStrictness,
    updateflag: UpdateFlag,
  }
}

export class UpdateFilesWithMetadataResponse extends jspb.Message {
  getNumfilesupdated(): number;
  setNumfilesupdated(value: number): UpdateFilesWithMetadataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFilesWithMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFilesWithMetadataResponse): UpdateFilesWithMetadataResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateFilesWithMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFilesWithMetadataResponse;
  static deserializeBinaryFromReader(message: UpdateFilesWithMetadataResponse, reader: jspb.BinaryReader): UpdateFilesWithMetadataResponse;
}

export namespace UpdateFilesWithMetadataResponse {
  export type AsObject = {
    numfilesupdated: number,
  }
}

export enum UpdateFlag { 
  OVERWRITE = 0,
  APPEND = 1,
}
export enum MetadataStrictness { 
  STRICT = 0,
  CASUAL = 1,
  STRICTLY_OPPOSITE = 2,
  CASUALLY_OPPOSITE = 3,
}
