/**
 * @fileoverview gRPC-Web generated client stub for kic.media
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_common_pb = require('../proto/common_pb.js')
const proto = {};
proto.kic = {};
proto.kic.media = require('./media_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.kic.media.MediaStorageClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.kic.media.MediaStoragePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.media.DownloadFileRequest,
 *   !proto.kic.media.DownloadFileResponse>}
 */
const methodDescriptor_MediaStorage_DownloadFileByName = new grpc.web.MethodDescriptor(
  '/kic.media.MediaStorage/DownloadFileByName',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.kic.media.DownloadFileRequest,
  proto.kic.media.DownloadFileResponse,
  /**
   * @param {!proto.kic.media.DownloadFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.media.DownloadFileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.media.DownloadFileRequest,
 *   !proto.kic.media.DownloadFileResponse>}
 */
const methodInfo_MediaStorage_DownloadFileByName = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.media.DownloadFileResponse,
  /**
   * @param {!proto.kic.media.DownloadFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.media.DownloadFileResponse.deserializeBinary
);


/**
 * @param {!proto.kic.media.DownloadFileRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.kic.media.DownloadFileResponse>}
 *     The XHR Node Readable Stream
 */
proto.kic.media.MediaStorageClient.prototype.downloadFileByName =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/kic.media.MediaStorage/DownloadFileByName',
      request,
      metadata || {},
      methodDescriptor_MediaStorage_DownloadFileByName);
};


/**
 * @param {!proto.kic.media.DownloadFileRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.kic.media.DownloadFileResponse>}
 *     The XHR Node Readable Stream
 */
proto.kic.media.MediaStoragePromiseClient.prototype.downloadFileByName =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/kic.media.MediaStorage/DownloadFileByName',
      request,
      metadata || {},
      methodDescriptor_MediaStorage_DownloadFileByName);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.media.CheckForFileRequest,
 *   !proto.kic.media.CheckForFileResponse>}
 */
const methodDescriptor_MediaStorage_CheckForFileByName = new grpc.web.MethodDescriptor(
  '/kic.media.MediaStorage/CheckForFileByName',
  grpc.web.MethodType.UNARY,
  proto.kic.media.CheckForFileRequest,
  proto.kic.media.CheckForFileResponse,
  /**
   * @param {!proto.kic.media.CheckForFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.media.CheckForFileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.media.CheckForFileRequest,
 *   !proto.kic.media.CheckForFileResponse>}
 */
const methodInfo_MediaStorage_CheckForFileByName = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.media.CheckForFileResponse,
  /**
   * @param {!proto.kic.media.CheckForFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.media.CheckForFileResponse.deserializeBinary
);


/**
 * @param {!proto.kic.media.CheckForFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.media.CheckForFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.media.CheckForFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.media.MediaStorageClient.prototype.checkForFileByName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.media.MediaStorage/CheckForFileByName',
      request,
      metadata || {},
      methodDescriptor_MediaStorage_CheckForFileByName,
      callback);
};


/**
 * @param {!proto.kic.media.CheckForFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.media.CheckForFileResponse>}
 *     Promise that resolves to the response
 */
proto.kic.media.MediaStoragePromiseClient.prototype.checkForFileByName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.media.MediaStorage/CheckForFileByName',
      request,
      metadata || {},
      methodDescriptor_MediaStorage_CheckForFileByName);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.media.UpdateFilesWithMetadataRequest,
 *   !proto.kic.media.UpdateFilesWithMetadataResponse>}
 */
const methodDescriptor_MediaStorage_UpdateFilesWithMetadata = new grpc.web.MethodDescriptor(
  '/kic.media.MediaStorage/UpdateFilesWithMetadata',
  grpc.web.MethodType.UNARY,
  proto.kic.media.UpdateFilesWithMetadataRequest,
  proto.kic.media.UpdateFilesWithMetadataResponse,
  /**
   * @param {!proto.kic.media.UpdateFilesWithMetadataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.media.UpdateFilesWithMetadataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.media.UpdateFilesWithMetadataRequest,
 *   !proto.kic.media.UpdateFilesWithMetadataResponse>}
 */
const methodInfo_MediaStorage_UpdateFilesWithMetadata = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.media.UpdateFilesWithMetadataResponse,
  /**
   * @param {!proto.kic.media.UpdateFilesWithMetadataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.media.UpdateFilesWithMetadataResponse.deserializeBinary
);


/**
 * @param {!proto.kic.media.UpdateFilesWithMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.media.UpdateFilesWithMetadataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.media.UpdateFilesWithMetadataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.media.MediaStorageClient.prototype.updateFilesWithMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.media.MediaStorage/UpdateFilesWithMetadata',
      request,
      metadata || {},
      methodDescriptor_MediaStorage_UpdateFilesWithMetadata,
      callback);
};


/**
 * @param {!proto.kic.media.UpdateFilesWithMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.media.UpdateFilesWithMetadataResponse>}
 *     Promise that resolves to the response
 */
proto.kic.media.MediaStoragePromiseClient.prototype.updateFilesWithMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.media.MediaStorage/UpdateFilesWithMetadata',
      request,
      metadata || {},
      methodDescriptor_MediaStorage_UpdateFilesWithMetadata);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.media.AddCommentToFileRequest,
 *   !proto.kic.media.AddCommentToFileResponse>}
 */
const methodDescriptor_MediaStorage_AddCommentToFile = new grpc.web.MethodDescriptor(
  '/kic.media.MediaStorage/AddCommentToFile',
  grpc.web.MethodType.UNARY,
  proto.kic.media.AddCommentToFileRequest,
  proto.kic.media.AddCommentToFileResponse,
  /**
   * @param {!proto.kic.media.AddCommentToFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.media.AddCommentToFileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.media.AddCommentToFileRequest,
 *   !proto.kic.media.AddCommentToFileResponse>}
 */
const methodInfo_MediaStorage_AddCommentToFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.media.AddCommentToFileResponse,
  /**
   * @param {!proto.kic.media.AddCommentToFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.media.AddCommentToFileResponse.deserializeBinary
);


/**
 * @param {!proto.kic.media.AddCommentToFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.media.AddCommentToFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.media.AddCommentToFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.media.MediaStorageClient.prototype.addCommentToFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.media.MediaStorage/AddCommentToFile',
      request,
      metadata || {},
      methodDescriptor_MediaStorage_AddCommentToFile,
      callback);
};


/**
 * @param {!proto.kic.media.AddCommentToFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.media.AddCommentToFileResponse>}
 *     Promise that resolves to the response
 */
proto.kic.media.MediaStoragePromiseClient.prototype.addCommentToFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.media.MediaStorage/AddCommentToFile',
      request,
      metadata || {},
      methodDescriptor_MediaStorage_AddCommentToFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.media.GetFilesByMetadataRequest,
 *   !proto.kic.media.GetFilesByMetadataResponse>}
 */
const methodDescriptor_MediaStorage_GetFilesWithMetadata = new grpc.web.MethodDescriptor(
  '/kic.media.MediaStorage/GetFilesWithMetadata',
  grpc.web.MethodType.UNARY,
  proto.kic.media.GetFilesByMetadataRequest,
  proto.kic.media.GetFilesByMetadataResponse,
  /**
   * @param {!proto.kic.media.GetFilesByMetadataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.media.GetFilesByMetadataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.media.GetFilesByMetadataRequest,
 *   !proto.kic.media.GetFilesByMetadataResponse>}
 */
const methodInfo_MediaStorage_GetFilesWithMetadata = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.media.GetFilesByMetadataResponse,
  /**
   * @param {!proto.kic.media.GetFilesByMetadataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.media.GetFilesByMetadataResponse.deserializeBinary
);


/**
 * @param {!proto.kic.media.GetFilesByMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.media.GetFilesByMetadataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.media.GetFilesByMetadataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.media.MediaStorageClient.prototype.getFilesWithMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.media.MediaStorage/GetFilesWithMetadata',
      request,
      metadata || {},
      methodDescriptor_MediaStorage_GetFilesWithMetadata,
      callback);
};


/**
 * @param {!proto.kic.media.GetFilesByMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.media.GetFilesByMetadataResponse>}
 *     Promise that resolves to the response
 */
proto.kic.media.MediaStoragePromiseClient.prototype.getFilesWithMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.media.MediaStorage/GetFilesWithMetadata',
      request,
      metadata || {},
      methodDescriptor_MediaStorage_GetFilesWithMetadata);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.media.DeleteFilesWithMetaDataRequest,
 *   !proto.kic.media.DeleteFilesWithMetaDataResponse>}
 */
const methodDescriptor_MediaStorage_DeleteFilesWithMetaData = new grpc.web.MethodDescriptor(
  '/kic.media.MediaStorage/DeleteFilesWithMetaData',
  grpc.web.MethodType.UNARY,
  proto.kic.media.DeleteFilesWithMetaDataRequest,
  proto.kic.media.DeleteFilesWithMetaDataResponse,
  /**
   * @param {!proto.kic.media.DeleteFilesWithMetaDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.media.DeleteFilesWithMetaDataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.media.DeleteFilesWithMetaDataRequest,
 *   !proto.kic.media.DeleteFilesWithMetaDataResponse>}
 */
const methodInfo_MediaStorage_DeleteFilesWithMetaData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.media.DeleteFilesWithMetaDataResponse,
  /**
   * @param {!proto.kic.media.DeleteFilesWithMetaDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.media.DeleteFilesWithMetaDataResponse.deserializeBinary
);


/**
 * @param {!proto.kic.media.DeleteFilesWithMetaDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.media.DeleteFilesWithMetaDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.media.DeleteFilesWithMetaDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.media.MediaStorageClient.prototype.deleteFilesWithMetaData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.media.MediaStorage/DeleteFilesWithMetaData',
      request,
      metadata || {},
      methodDescriptor_MediaStorage_DeleteFilesWithMetaData,
      callback);
};


/**
 * @param {!proto.kic.media.DeleteFilesWithMetaDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.media.DeleteFilesWithMetaDataResponse>}
 *     Promise that resolves to the response
 */
proto.kic.media.MediaStoragePromiseClient.prototype.deleteFilesWithMetaData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.media.MediaStorage/DeleteFilesWithMetaData',
      request,
      metadata || {},
      methodDescriptor_MediaStorage_DeleteFilesWithMetaData);
};


module.exports = proto.kic.media;

