// package: kic.media
// file: proto/media.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as proto_media_pb from "../proto/media_pb";
import * as proto_common_pb from "../proto/common_pb";

interface IMediaStorageService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    uploadFile: IMediaStorageService_IUploadFile;
    downloadFileByName: IMediaStorageService_IDownloadFileByName;
    checkForFileByName: IMediaStorageService_ICheckForFileByName;
    updateFilesWithMetadata: IMediaStorageService_IUpdateFilesWithMetadata;
    getFilesWithMetadata: IMediaStorageService_IGetFilesWithMetadata;
    deleteFilesWithMetaData: IMediaStorageService_IDeleteFilesWithMetaData;
}

interface IMediaStorageService_IUploadFile extends grpc.MethodDefinition<proto_media_pb.UploadFileRequest, proto_media_pb.UploadFileResponse> {
    path: "/kic.media.MediaStorage/UploadFile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_media_pb.UploadFileRequest>;
    requestDeserialize: grpc.deserialize<proto_media_pb.UploadFileRequest>;
    responseSerialize: grpc.serialize<proto_media_pb.UploadFileResponse>;
    responseDeserialize: grpc.deserialize<proto_media_pb.UploadFileResponse>;
}
interface IMediaStorageService_IDownloadFileByName extends grpc.MethodDefinition<proto_media_pb.DownloadFileRequest, proto_media_pb.DownloadFileResponse> {
    path: "/kic.media.MediaStorage/DownloadFileByName";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_media_pb.DownloadFileRequest>;
    requestDeserialize: grpc.deserialize<proto_media_pb.DownloadFileRequest>;
    responseSerialize: grpc.serialize<proto_media_pb.DownloadFileResponse>;
    responseDeserialize: grpc.deserialize<proto_media_pb.DownloadFileResponse>;
}
interface IMediaStorageService_ICheckForFileByName extends grpc.MethodDefinition<proto_media_pb.CheckForFileRequest, proto_media_pb.CheckForFileResponse> {
    path: "/kic.media.MediaStorage/CheckForFileByName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_media_pb.CheckForFileRequest>;
    requestDeserialize: grpc.deserialize<proto_media_pb.CheckForFileRequest>;
    responseSerialize: grpc.serialize<proto_media_pb.CheckForFileResponse>;
    responseDeserialize: grpc.deserialize<proto_media_pb.CheckForFileResponse>;
}
interface IMediaStorageService_IUpdateFilesWithMetadata extends grpc.MethodDefinition<proto_media_pb.UpdateFilesWithMetadataRequest, proto_media_pb.UpdateFilesWithMetadataResponse> {
    path: "/kic.media.MediaStorage/UpdateFilesWithMetadata";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_media_pb.UpdateFilesWithMetadataRequest>;
    requestDeserialize: grpc.deserialize<proto_media_pb.UpdateFilesWithMetadataRequest>;
    responseSerialize: grpc.serialize<proto_media_pb.UpdateFilesWithMetadataResponse>;
    responseDeserialize: grpc.deserialize<proto_media_pb.UpdateFilesWithMetadataResponse>;
}
interface IMediaStorageService_IGetFilesWithMetadata extends grpc.MethodDefinition<proto_media_pb.GetFilesByMetadataRequest, proto_media_pb.GetFilesByMetadataResponse> {
    path: "/kic.media.MediaStorage/GetFilesWithMetadata";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_media_pb.GetFilesByMetadataRequest>;
    requestDeserialize: grpc.deserialize<proto_media_pb.GetFilesByMetadataRequest>;
    responseSerialize: grpc.serialize<proto_media_pb.GetFilesByMetadataResponse>;
    responseDeserialize: grpc.deserialize<proto_media_pb.GetFilesByMetadataResponse>;
}
interface IMediaStorageService_IDeleteFilesWithMetaData extends grpc.MethodDefinition<proto_media_pb.DeleteFilesWithMetaDataRequest, proto_media_pb.DeleteFilesWithMetaDataResponse> {
    path: "/kic.media.MediaStorage/DeleteFilesWithMetaData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_media_pb.DeleteFilesWithMetaDataRequest>;
    requestDeserialize: grpc.deserialize<proto_media_pb.DeleteFilesWithMetaDataRequest>;
    responseSerialize: grpc.serialize<proto_media_pb.DeleteFilesWithMetaDataResponse>;
    responseDeserialize: grpc.deserialize<proto_media_pb.DeleteFilesWithMetaDataResponse>;
}

export const MediaStorageService: IMediaStorageService;

export interface IMediaStorageServer extends grpc.UntypedServiceImplementation {
    uploadFile: grpc.handleUnaryCall<proto_media_pb.UploadFileRequest, proto_media_pb.UploadFileResponse>;
    downloadFileByName: grpc.handleServerStreamingCall<proto_media_pb.DownloadFileRequest, proto_media_pb.DownloadFileResponse>;
    checkForFileByName: grpc.handleUnaryCall<proto_media_pb.CheckForFileRequest, proto_media_pb.CheckForFileResponse>;
    updateFilesWithMetadata: grpc.handleUnaryCall<proto_media_pb.UpdateFilesWithMetadataRequest, proto_media_pb.UpdateFilesWithMetadataResponse>;
    getFilesWithMetadata: grpc.handleUnaryCall<proto_media_pb.GetFilesByMetadataRequest, proto_media_pb.GetFilesByMetadataResponse>;
    deleteFilesWithMetaData: grpc.handleUnaryCall<proto_media_pb.DeleteFilesWithMetaDataRequest, proto_media_pb.DeleteFilesWithMetaDataResponse>;
}

export interface IMediaStorageClient {
    uploadFile(request: proto_media_pb.UploadFileRequest, callback: (error: grpc.ServiceError | null, response: proto_media_pb.UploadFileResponse) => void): grpc.ClientUnaryCall;
    uploadFile(request: proto_media_pb.UploadFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_media_pb.UploadFileResponse) => void): grpc.ClientUnaryCall;
    uploadFile(request: proto_media_pb.UploadFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_media_pb.UploadFileResponse) => void): grpc.ClientUnaryCall;
    downloadFileByName(request: proto_media_pb.DownloadFileRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_media_pb.DownloadFileResponse>;
    downloadFileByName(request: proto_media_pb.DownloadFileRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_media_pb.DownloadFileResponse>;
    checkForFileByName(request: proto_media_pb.CheckForFileRequest, callback: (error: grpc.ServiceError | null, response: proto_media_pb.CheckForFileResponse) => void): grpc.ClientUnaryCall;
    checkForFileByName(request: proto_media_pb.CheckForFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_media_pb.CheckForFileResponse) => void): grpc.ClientUnaryCall;
    checkForFileByName(request: proto_media_pb.CheckForFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_media_pb.CheckForFileResponse) => void): grpc.ClientUnaryCall;
    updateFilesWithMetadata(request: proto_media_pb.UpdateFilesWithMetadataRequest, callback: (error: grpc.ServiceError | null, response: proto_media_pb.UpdateFilesWithMetadataResponse) => void): grpc.ClientUnaryCall;
    updateFilesWithMetadata(request: proto_media_pb.UpdateFilesWithMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_media_pb.UpdateFilesWithMetadataResponse) => void): grpc.ClientUnaryCall;
    updateFilesWithMetadata(request: proto_media_pb.UpdateFilesWithMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_media_pb.UpdateFilesWithMetadataResponse) => void): grpc.ClientUnaryCall;
    getFilesWithMetadata(request: proto_media_pb.GetFilesByMetadataRequest, callback: (error: grpc.ServiceError | null, response: proto_media_pb.GetFilesByMetadataResponse) => void): grpc.ClientUnaryCall;
    getFilesWithMetadata(request: proto_media_pb.GetFilesByMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_media_pb.GetFilesByMetadataResponse) => void): grpc.ClientUnaryCall;
    getFilesWithMetadata(request: proto_media_pb.GetFilesByMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_media_pb.GetFilesByMetadataResponse) => void): grpc.ClientUnaryCall;
    deleteFilesWithMetaData(request: proto_media_pb.DeleteFilesWithMetaDataRequest, callback: (error: grpc.ServiceError | null, response: proto_media_pb.DeleteFilesWithMetaDataResponse) => void): grpc.ClientUnaryCall;
    deleteFilesWithMetaData(request: proto_media_pb.DeleteFilesWithMetaDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_media_pb.DeleteFilesWithMetaDataResponse) => void): grpc.ClientUnaryCall;
    deleteFilesWithMetaData(request: proto_media_pb.DeleteFilesWithMetaDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_media_pb.DeleteFilesWithMetaDataResponse) => void): grpc.ClientUnaryCall;
}

export class MediaStorageClient extends grpc.Client implements IMediaStorageClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public uploadFile(request: proto_media_pb.UploadFileRequest, callback: (error: grpc.ServiceError | null, response: proto_media_pb.UploadFileResponse) => void): grpc.ClientUnaryCall;
    public uploadFile(request: proto_media_pb.UploadFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_media_pb.UploadFileResponse) => void): grpc.ClientUnaryCall;
    public uploadFile(request: proto_media_pb.UploadFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_media_pb.UploadFileResponse) => void): grpc.ClientUnaryCall;
    public downloadFileByName(request: proto_media_pb.DownloadFileRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_media_pb.DownloadFileResponse>;
    public downloadFileByName(request: proto_media_pb.DownloadFileRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_media_pb.DownloadFileResponse>;
    public checkForFileByName(request: proto_media_pb.CheckForFileRequest, callback: (error: grpc.ServiceError | null, response: proto_media_pb.CheckForFileResponse) => void): grpc.ClientUnaryCall;
    public checkForFileByName(request: proto_media_pb.CheckForFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_media_pb.CheckForFileResponse) => void): grpc.ClientUnaryCall;
    public checkForFileByName(request: proto_media_pb.CheckForFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_media_pb.CheckForFileResponse) => void): grpc.ClientUnaryCall;
    public updateFilesWithMetadata(request: proto_media_pb.UpdateFilesWithMetadataRequest, callback: (error: grpc.ServiceError | null, response: proto_media_pb.UpdateFilesWithMetadataResponse) => void): grpc.ClientUnaryCall;
    public updateFilesWithMetadata(request: proto_media_pb.UpdateFilesWithMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_media_pb.UpdateFilesWithMetadataResponse) => void): grpc.ClientUnaryCall;
    public updateFilesWithMetadata(request: proto_media_pb.UpdateFilesWithMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_media_pb.UpdateFilesWithMetadataResponse) => void): grpc.ClientUnaryCall;
    public getFilesWithMetadata(request: proto_media_pb.GetFilesByMetadataRequest, callback: (error: grpc.ServiceError | null, response: proto_media_pb.GetFilesByMetadataResponse) => void): grpc.ClientUnaryCall;
    public getFilesWithMetadata(request: proto_media_pb.GetFilesByMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_media_pb.GetFilesByMetadataResponse) => void): grpc.ClientUnaryCall;
    public getFilesWithMetadata(request: proto_media_pb.GetFilesByMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_media_pb.GetFilesByMetadataResponse) => void): grpc.ClientUnaryCall;
    public deleteFilesWithMetaData(request: proto_media_pb.DeleteFilesWithMetaDataRequest, callback: (error: grpc.ServiceError | null, response: proto_media_pb.DeleteFilesWithMetaDataResponse) => void): grpc.ClientUnaryCall;
    public deleteFilesWithMetaData(request: proto_media_pb.DeleteFilesWithMetaDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_media_pb.DeleteFilesWithMetaDataResponse) => void): grpc.ClientUnaryCall;
    public deleteFilesWithMetaData(request: proto_media_pb.DeleteFilesWithMetaDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_media_pb.DeleteFilesWithMetaDataResponse) => void): grpc.ClientUnaryCall;
}
