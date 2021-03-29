/**
 * @fileoverview gRPC-Web generated client stub for kic.media
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_media_pb from '../proto/media_pb';


export class MediaStorageClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoDownloadFileByName = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_media_pb.DownloadFileResponse,
    (request: proto_media_pb.DownloadFileRequest) => {
      return request.serializeBinary();
    },
    proto_media_pb.DownloadFileResponse.deserializeBinary
  );

  downloadFileByName(
    request: proto_media_pb.DownloadFileRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/kic.media.MediaStorage/DownloadFileByName',
      request,
      metadata || {},
      this.methodInfoDownloadFileByName);
  }

  methodInfoCheckForFileByName = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_media_pb.CheckForFileResponse,
    (request: proto_media_pb.CheckForFileRequest) => {
      return request.serializeBinary();
    },
    proto_media_pb.CheckForFileResponse.deserializeBinary
  );

  checkForFileByName(
    request: proto_media_pb.CheckForFileRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_media_pb.CheckForFileResponse>;

  checkForFileByName(
    request: proto_media_pb.CheckForFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_media_pb.CheckForFileResponse) => void): grpcWeb.ClientReadableStream<proto_media_pb.CheckForFileResponse>;

  checkForFileByName(
    request: proto_media_pb.CheckForFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_media_pb.CheckForFileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.media.MediaStorage/CheckForFileByName',
        request,
        metadata || {},
        this.methodInfoCheckForFileByName,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.media.MediaStorage/CheckForFileByName',
    request,
    metadata || {},
    this.methodInfoCheckForFileByName);
  }

  methodInfoUpdateFilesWithMetadata = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_media_pb.UpdateFilesWithMetadataResponse,
    (request: proto_media_pb.UpdateFilesWithMetadataRequest) => {
      return request.serializeBinary();
    },
    proto_media_pb.UpdateFilesWithMetadataResponse.deserializeBinary
  );

  updateFilesWithMetadata(
    request: proto_media_pb.UpdateFilesWithMetadataRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_media_pb.UpdateFilesWithMetadataResponse>;

  updateFilesWithMetadata(
    request: proto_media_pb.UpdateFilesWithMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_media_pb.UpdateFilesWithMetadataResponse) => void): grpcWeb.ClientReadableStream<proto_media_pb.UpdateFilesWithMetadataResponse>;

  updateFilesWithMetadata(
    request: proto_media_pb.UpdateFilesWithMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_media_pb.UpdateFilesWithMetadataResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.media.MediaStorage/UpdateFilesWithMetadata',
        request,
        metadata || {},
        this.methodInfoUpdateFilesWithMetadata,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.media.MediaStorage/UpdateFilesWithMetadata',
    request,
    metadata || {},
    this.methodInfoUpdateFilesWithMetadata);
  }

  methodInfoGetFilesWithMetadata = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_media_pb.GetFilesByMetadataResponse,
    (request: proto_media_pb.GetFilesByMetadataRequest) => {
      return request.serializeBinary();
    },
    proto_media_pb.GetFilesByMetadataResponse.deserializeBinary
  );

  getFilesWithMetadata(
    request: proto_media_pb.GetFilesByMetadataRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_media_pb.GetFilesByMetadataResponse>;

  getFilesWithMetadata(
    request: proto_media_pb.GetFilesByMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_media_pb.GetFilesByMetadataResponse) => void): grpcWeb.ClientReadableStream<proto_media_pb.GetFilesByMetadataResponse>;

  getFilesWithMetadata(
    request: proto_media_pb.GetFilesByMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_media_pb.GetFilesByMetadataResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.media.MediaStorage/GetFilesWithMetadata',
        request,
        metadata || {},
        this.methodInfoGetFilesWithMetadata,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.media.MediaStorage/GetFilesWithMetadata',
    request,
    metadata || {},
    this.methodInfoGetFilesWithMetadata);
  }

  methodInfoDeleteFilesWithMetaData = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_media_pb.DeleteFilesWithMetaDataResponse,
    (request: proto_media_pb.DeleteFilesWithMetaDataRequest) => {
      return request.serializeBinary();
    },
    proto_media_pb.DeleteFilesWithMetaDataResponse.deserializeBinary
  );

  deleteFilesWithMetaData(
    request: proto_media_pb.DeleteFilesWithMetaDataRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_media_pb.DeleteFilesWithMetaDataResponse>;

  deleteFilesWithMetaData(
    request: proto_media_pb.DeleteFilesWithMetaDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_media_pb.DeleteFilesWithMetaDataResponse) => void): grpcWeb.ClientReadableStream<proto_media_pb.DeleteFilesWithMetaDataResponse>;

  deleteFilesWithMetaData(
    request: proto_media_pb.DeleteFilesWithMetaDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_media_pb.DeleteFilesWithMetaDataResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.media.MediaStorage/DeleteFilesWithMetaData',
        request,
        metadata || {},
        this.methodInfoDeleteFilesWithMetaData,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.media.MediaStorage/DeleteFilesWithMetaData',
    request,
    metadata || {},
    this.methodInfoDeleteFilesWithMetaData);
  }

}

