// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// These are messages and services relating to a user feed, such as viewing and generating the feed.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var proto_feed_pb = require('../proto/feed_pb.js');
var proto_common_pb = require('../proto/common_pb.js');

function serialize_kic_feed_GenerateFeedForUserRequest(arg) {
  if (!(arg instanceof proto_feed_pb.GenerateFeedForUserRequest)) {
    throw new Error('Expected argument of type kic.feed.GenerateFeedForUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_feed_GenerateFeedForUserRequest(buffer_arg) {
  return proto_feed_pb.GenerateFeedForUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_feed_GenerateFeedForUserResponse(arg) {
  if (!(arg instanceof proto_feed_pb.GenerateFeedForUserResponse)) {
    throw new Error('Expected argument of type kic.feed.GenerateFeedForUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_feed_GenerateFeedForUserResponse(buffer_arg) {
  return proto_feed_pb.GenerateFeedForUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// Interface provided by a service handling generating data for user feed
var FeedService = exports.FeedService = {
  // Generate a stream of posts until either exhausted or the client requests an end.
generateFeedForUser: {
    path: '/kic.feed.Feed/GenerateFeedForUser',
    requestStream: false,
    responseStream: true,
    requestType: proto_feed_pb.GenerateFeedForUserRequest,
    responseType: proto_feed_pb.GenerateFeedForUserResponse,
    requestSerialize: serialize_kic_feed_GenerateFeedForUserRequest,
    requestDeserialize: deserialize_kic_feed_GenerateFeedForUserRequest,
    responseSerialize: serialize_kic_feed_GenerateFeedForUserResponse,
    responseDeserialize: deserialize_kic_feed_GenerateFeedForUserResponse,
  },
};

exports.FeedClient = grpc.makeGenericClientConstructor(FeedService);
