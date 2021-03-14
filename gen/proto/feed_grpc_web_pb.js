/**
 * @fileoverview gRPC-Web generated client stub for kic.feed
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
proto.kic.feed = require('./feed_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.kic.feed.FeedClient =
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
proto.kic.feed.FeedPromiseClient =
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
 *   !proto.kic.feed.GenerateFeedForUserRequest,
 *   !proto.kic.feed.GenerateFeedForUserResponse>}
 */
const methodDescriptor_Feed_GenerateFeedForUser = new grpc.web.MethodDescriptor(
  '/kic.feed.Feed/GenerateFeedForUser',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.kic.feed.GenerateFeedForUserRequest,
  proto.kic.feed.GenerateFeedForUserResponse,
  /**
   * @param {!proto.kic.feed.GenerateFeedForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.feed.GenerateFeedForUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.feed.GenerateFeedForUserRequest,
 *   !proto.kic.feed.GenerateFeedForUserResponse>}
 */
const methodInfo_Feed_GenerateFeedForUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.feed.GenerateFeedForUserResponse,
  /**
   * @param {!proto.kic.feed.GenerateFeedForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.feed.GenerateFeedForUserResponse.deserializeBinary
);


/**
 * @param {!proto.kic.feed.GenerateFeedForUserRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.kic.feed.GenerateFeedForUserResponse>}
 *     The XHR Node Readable Stream
 */
proto.kic.feed.FeedClient.prototype.generateFeedForUser =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/kic.feed.Feed/GenerateFeedForUser',
      request,
      metadata || {},
      methodDescriptor_Feed_GenerateFeedForUser);
};


/**
 * @param {!proto.kic.feed.GenerateFeedForUserRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.kic.feed.GenerateFeedForUserResponse>}
 *     The XHR Node Readable Stream
 */
proto.kic.feed.FeedPromiseClient.prototype.generateFeedForUser =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/kic.feed.Feed/GenerateFeedForUser',
      request,
      metadata || {},
      methodDescriptor_Feed_GenerateFeedForUser);
};


module.exports = proto.kic.feed;

