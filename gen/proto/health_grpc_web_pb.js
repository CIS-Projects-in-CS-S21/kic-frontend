/**
 * @fileoverview gRPC-Web generated client stub for kic.health
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_common_pb = require('../proto/common_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.kic = {};
proto.kic.health = require('./health_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.kic.health.HealthTrackingClient =
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
proto.kic.health.HealthTrackingPromiseClient =
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
 *   !proto.kic.health.GetHealthDataForUserRequest,
 *   !proto.kic.health.GetHealthDataForUserResponse>}
 */
const methodDescriptor_HealthTracking_GetHealthDataForUser = new grpc.web.MethodDescriptor(
  '/kic.health.HealthTracking/GetHealthDataForUser',
  grpc.web.MethodType.UNARY,
  proto.kic.health.GetHealthDataForUserRequest,
  proto.kic.health.GetHealthDataForUserResponse,
  /**
   * @param {!proto.kic.health.GetHealthDataForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.health.GetHealthDataForUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.health.GetHealthDataForUserRequest,
 *   !proto.kic.health.GetHealthDataForUserResponse>}
 */
const methodInfo_HealthTracking_GetHealthDataForUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.health.GetHealthDataForUserResponse,
  /**
   * @param {!proto.kic.health.GetHealthDataForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.health.GetHealthDataForUserResponse.deserializeBinary
);


/**
 * @param {!proto.kic.health.GetHealthDataForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.health.GetHealthDataForUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.health.GetHealthDataForUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.health.HealthTrackingClient.prototype.getHealthDataForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.health.HealthTracking/GetHealthDataForUser',
      request,
      metadata || {},
      methodDescriptor_HealthTracking_GetHealthDataForUser,
      callback);
};


/**
 * @param {!proto.kic.health.GetHealthDataForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.health.GetHealthDataForUserResponse>}
 *     Promise that resolves to the response
 */
proto.kic.health.HealthTrackingPromiseClient.prototype.getHealthDataForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.health.HealthTracking/GetHealthDataForUser',
      request,
      metadata || {},
      methodDescriptor_HealthTracking_GetHealthDataForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.health.AddHealthDataForUserRequest,
 *   !proto.kic.health.HealthDataErrorResponse>}
 */
const methodDescriptor_HealthTracking_AddHealthDataForUser = new grpc.web.MethodDescriptor(
  '/kic.health.HealthTracking/AddHealthDataForUser',
  grpc.web.MethodType.UNARY,
  proto.kic.health.AddHealthDataForUserRequest,
  proto.kic.health.HealthDataErrorResponse,
  /**
   * @param {!proto.kic.health.AddHealthDataForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.health.HealthDataErrorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.health.AddHealthDataForUserRequest,
 *   !proto.kic.health.HealthDataErrorResponse>}
 */
const methodInfo_HealthTracking_AddHealthDataForUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.health.HealthDataErrorResponse,
  /**
   * @param {!proto.kic.health.AddHealthDataForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.health.HealthDataErrorResponse.deserializeBinary
);


/**
 * @param {!proto.kic.health.AddHealthDataForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.health.HealthDataErrorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.health.HealthDataErrorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.health.HealthTrackingClient.prototype.addHealthDataForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.health.HealthTracking/AddHealthDataForUser',
      request,
      metadata || {},
      methodDescriptor_HealthTracking_AddHealthDataForUser,
      callback);
};


/**
 * @param {!proto.kic.health.AddHealthDataForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.health.HealthDataErrorResponse>}
 *     Promise that resolves to the response
 */
proto.kic.health.HealthTrackingPromiseClient.prototype.addHealthDataForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.health.HealthTracking/AddHealthDataForUser',
      request,
      metadata || {},
      methodDescriptor_HealthTracking_AddHealthDataForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.health.DeleteHealthDataForUserRequest,
 *   !proto.kic.health.DeleteHealthDataForUserResponse>}
 */
const methodDescriptor_HealthTracking_DeleteHealthDataForUser = new grpc.web.MethodDescriptor(
  '/kic.health.HealthTracking/DeleteHealthDataForUser',
  grpc.web.MethodType.UNARY,
  proto.kic.health.DeleteHealthDataForUserRequest,
  proto.kic.health.DeleteHealthDataForUserResponse,
  /**
   * @param {!proto.kic.health.DeleteHealthDataForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.health.DeleteHealthDataForUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.health.DeleteHealthDataForUserRequest,
 *   !proto.kic.health.DeleteHealthDataForUserResponse>}
 */
const methodInfo_HealthTracking_DeleteHealthDataForUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.health.DeleteHealthDataForUserResponse,
  /**
   * @param {!proto.kic.health.DeleteHealthDataForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.health.DeleteHealthDataForUserResponse.deserializeBinary
);


/**
 * @param {!proto.kic.health.DeleteHealthDataForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.health.DeleteHealthDataForUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.health.DeleteHealthDataForUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.health.HealthTrackingClient.prototype.deleteHealthDataForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.health.HealthTracking/DeleteHealthDataForUser',
      request,
      metadata || {},
      methodDescriptor_HealthTracking_DeleteHealthDataForUser,
      callback);
};


/**
 * @param {!proto.kic.health.DeleteHealthDataForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.health.DeleteHealthDataForUserResponse>}
 *     Promise that resolves to the response
 */
proto.kic.health.HealthTrackingPromiseClient.prototype.deleteHealthDataForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.health.HealthTracking/DeleteHealthDataForUser',
      request,
      metadata || {},
      methodDescriptor_HealthTracking_DeleteHealthDataForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.health.UpdateHealthDataForDateRequest,
 *   !proto.kic.health.HealthDataErrorResponse>}
 */
const methodDescriptor_HealthTracking_UpdateHealthDataForDate = new grpc.web.MethodDescriptor(
  '/kic.health.HealthTracking/UpdateHealthDataForDate',
  grpc.web.MethodType.UNARY,
  proto.kic.health.UpdateHealthDataForDateRequest,
  proto.kic.health.HealthDataErrorResponse,
  /**
   * @param {!proto.kic.health.UpdateHealthDataForDateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.health.HealthDataErrorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.health.UpdateHealthDataForDateRequest,
 *   !proto.kic.health.HealthDataErrorResponse>}
 */
const methodInfo_HealthTracking_UpdateHealthDataForDate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.health.HealthDataErrorResponse,
  /**
   * @param {!proto.kic.health.UpdateHealthDataForDateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.health.HealthDataErrorResponse.deserializeBinary
);


/**
 * @param {!proto.kic.health.UpdateHealthDataForDateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.health.HealthDataErrorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.health.HealthDataErrorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.health.HealthTrackingClient.prototype.updateHealthDataForDate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.health.HealthTracking/UpdateHealthDataForDate',
      request,
      metadata || {},
      methodDescriptor_HealthTracking_UpdateHealthDataForDate,
      callback);
};


/**
 * @param {!proto.kic.health.UpdateHealthDataForDateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.health.HealthDataErrorResponse>}
 *     Promise that resolves to the response
 */
proto.kic.health.HealthTrackingPromiseClient.prototype.updateHealthDataForDate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.health.HealthTracking/UpdateHealthDataForDate',
      request,
      metadata || {},
      methodDescriptor_HealthTracking_UpdateHealthDataForDate);
};


module.exports = proto.kic.health;

