/**
 * @fileoverview gRPC-Web generated client stub for kic.feed
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_feed_pb from '../proto/feed_pb';


export class FeedClient {
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

  methodInfoGenerateFeedForUser = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_feed_pb.GenerateFeedForUserResponse,
    (request: proto_feed_pb.GenerateFeedForUserRequest) => {
      return request.serializeBinary();
    },
    proto_feed_pb.GenerateFeedForUserResponse.deserializeBinary
  );

  generateFeedForUser(
    request: proto_feed_pb.GenerateFeedForUserRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/kic.feed.Feed/GenerateFeedForUser',
      request,
      metadata || {},
      this.methodInfoGenerateFeedForUser);
  }

}

