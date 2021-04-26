// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// These are messages and services relating to a storing media, such as uploading and downloading files.
'use strict';
var grpc = require('@grpc/grpc-js');
var proto_media_pb = require('../proto/media_pb.js');
var proto_common_pb = require('../proto/common_pb.js');

function serialize_kic_media_CheckForFileRequest(arg) {
  if (!(arg instanceof proto_media_pb.CheckForFileRequest)) {
    throw new Error('Expected argument of type kic.media.CheckForFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_media_CheckForFileRequest(buffer_arg) {
  return proto_media_pb.CheckForFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_media_CheckForFileResponse(arg) {
  if (!(arg instanceof proto_media_pb.CheckForFileResponse)) {
    throw new Error('Expected argument of type kic.media.CheckForFileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_media_CheckForFileResponse(buffer_arg) {
  return proto_media_pb.CheckForFileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_media_DeleteFilesWithMetaDataRequest(arg) {
  if (!(arg instanceof proto_media_pb.DeleteFilesWithMetaDataRequest)) {
    throw new Error('Expected argument of type kic.media.DeleteFilesWithMetaDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_media_DeleteFilesWithMetaDataRequest(buffer_arg) {
  return proto_media_pb.DeleteFilesWithMetaDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_media_DeleteFilesWithMetaDataResponse(arg) {
  if (!(arg instanceof proto_media_pb.DeleteFilesWithMetaDataResponse)) {
    throw new Error('Expected argument of type kic.media.DeleteFilesWithMetaDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_media_DeleteFilesWithMetaDataResponse(buffer_arg) {
  return proto_media_pb.DeleteFilesWithMetaDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_media_DownloadFileRequest(arg) {
  if (!(arg instanceof proto_media_pb.DownloadFileRequest)) {
    throw new Error('Expected argument of type kic.media.DownloadFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_media_DownloadFileRequest(buffer_arg) {
  return proto_media_pb.DownloadFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_media_DownloadFileResponse(arg) {
  if (!(arg instanceof proto_media_pb.DownloadFileResponse)) {
    throw new Error('Expected argument of type kic.media.DownloadFileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_media_DownloadFileResponse(buffer_arg) {
  return proto_media_pb.DownloadFileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_media_GetFilesByMetadataRequest(arg) {
  if (!(arg instanceof proto_media_pb.GetFilesByMetadataRequest)) {
    throw new Error('Expected argument of type kic.media.GetFilesByMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_media_GetFilesByMetadataRequest(buffer_arg) {
  return proto_media_pb.GetFilesByMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_media_GetFilesByMetadataResponse(arg) {
  if (!(arg instanceof proto_media_pb.GetFilesByMetadataResponse)) {
    throw new Error('Expected argument of type kic.media.GetFilesByMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_media_GetFilesByMetadataResponse(buffer_arg) {
  return proto_media_pb.GetFilesByMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_media_UpdateFilesWithMetadataRequest(arg) {
  if (!(arg instanceof proto_media_pb.UpdateFilesWithMetadataRequest)) {
    throw new Error('Expected argument of type kic.media.UpdateFilesWithMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_media_UpdateFilesWithMetadataRequest(buffer_arg) {
  return proto_media_pb.UpdateFilesWithMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_media_UpdateFilesWithMetadataResponse(arg) {
  if (!(arg instanceof proto_media_pb.UpdateFilesWithMetadataResponse)) {
    throw new Error('Expected argument of type kic.media.UpdateFilesWithMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_media_UpdateFilesWithMetadataResponse(buffer_arg) {
  return proto_media_pb.UpdateFilesWithMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_media_UploadFileRequest(arg) {
  if (!(arg instanceof proto_media_pb.UploadFileRequest)) {
    throw new Error('Expected argument of type kic.media.UploadFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_media_UploadFileRequest(buffer_arg) {
  return proto_media_pb.UploadFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_media_UploadFileResponse(arg) {
  if (!(arg instanceof proto_media_pb.UploadFileResponse)) {
    throw new Error('Expected argument of type kic.media.UploadFileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_media_UploadFileResponse(buffer_arg) {
  return proto_media_pb.UploadFileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// Interface provided by a service handling fetching and storing data about files.
var MediaStorageService = exports.MediaStorageService = {
  // Upload a file as a single base64 encoded string.
uploadFile: {
    path: '/kic.media.MediaStorage/UploadFile',
    requestStream: false,
    responseStream: false,
    requestType: proto_media_pb.UploadFileRequest,
    responseType: proto_media_pb.UploadFileResponse,
    requestSerialize: serialize_kic_media_UploadFileRequest,
    requestDeserialize: deserialize_kic_media_UploadFileRequest,
    responseSerialize: serialize_kic_media_UploadFileResponse,
    responseDeserialize: deserialize_kic_media_UploadFileResponse,
  },
  //
// Send a file as a stream of messages containing a base64 encoding representing the file.
downloadFileByName: {
    path: '/kic.media.MediaStorage/DownloadFileByName',
    requestStream: false,
    responseStream: true,
    requestType: proto_media_pb.DownloadFileRequest,
    responseType: proto_media_pb.DownloadFileResponse,
    requestSerialize: serialize_kic_media_DownloadFileRequest,
    requestDeserialize: deserialize_kic_media_DownloadFileRequest,
    responseSerialize: serialize_kic_media_DownloadFileResponse,
    responseDeserialize: deserialize_kic_media_DownloadFileResponse,
  },
  // Check for the existence of a file by filename.
checkForFileByName: {
    path: '/kic.media.MediaStorage/CheckForFileByName',
    requestStream: false,
    responseStream: false,
    requestType: proto_media_pb.CheckForFileRequest,
    responseType: proto_media_pb.CheckForFileResponse,
    requestSerialize: serialize_kic_media_CheckForFileRequest,
    requestDeserialize: deserialize_kic_media_CheckForFileRequest,
    responseSerialize: serialize_kic_media_CheckForFileResponse,
    responseDeserialize: deserialize_kic_media_CheckForFileResponse,
  },
  // Update a set of files with new metadata values.
updateFilesWithMetadata: {
    path: '/kic.media.MediaStorage/UpdateFilesWithMetadata',
    requestStream: false,
    responseStream: false,
    requestType: proto_media_pb.UpdateFilesWithMetadataRequest,
    responseType: proto_media_pb.UpdateFilesWithMetadataResponse,
    requestSerialize: serialize_kic_media_UpdateFilesWithMetadataRequest,
    requestDeserialize: deserialize_kic_media_UpdateFilesWithMetadataRequest,
    responseSerialize: serialize_kic_media_UpdateFilesWithMetadataResponse,
    responseDeserialize: deserialize_kic_media_UpdateFilesWithMetadataResponse,
  },
  //
// Allows for the requesting of files with specific key value pairs as metadata. The strictness can be set
// such that for example only perfect matches will be returned.
getFilesWithMetadata: {
    path: '/kic.media.MediaStorage/GetFilesWithMetadata',
    requestStream: false,
    responseStream: false,
    requestType: proto_media_pb.GetFilesByMetadataRequest,
    responseType: proto_media_pb.GetFilesByMetadataResponse,
    requestSerialize: serialize_kic_media_GetFilesByMetadataRequest,
    requestDeserialize: deserialize_kic_media_GetFilesByMetadataRequest,
    responseSerialize: serialize_kic_media_GetFilesByMetadataResponse,
    responseDeserialize: deserialize_kic_media_GetFilesByMetadataResponse,
  },
  //
// Using the same strictness settings as the above, delete particular files with certain metadata.
deleteFilesWithMetaData: {
    path: '/kic.media.MediaStorage/DeleteFilesWithMetaData',
    requestStream: false,
    responseStream: false,
    requestType: proto_media_pb.DeleteFilesWithMetaDataRequest,
    responseType: proto_media_pb.DeleteFilesWithMetaDataResponse,
    requestSerialize: serialize_kic_media_DeleteFilesWithMetaDataRequest,
    requestDeserialize: deserialize_kic_media_DeleteFilesWithMetaDataRequest,
    responseSerialize: serialize_kic_media_DeleteFilesWithMetaDataResponse,
    responseDeserialize: deserialize_kic_media_DeleteFilesWithMetaDataResponse,
  },
};

exports.MediaStorageClient = grpc.makeGenericClientConstructor(MediaStorageService);
