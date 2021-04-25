// package: kic.feed
// file: proto/feed.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as proto_feed_pb from "../proto/feed_pb";
import * as proto_common_pb from "../proto/common_pb";

interface IFeedService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    generateFeedForUser: IFeedService_IGenerateFeedForUser;
}

interface IFeedService_IGenerateFeedForUser extends grpc.MethodDefinition<proto_feed_pb.GenerateFeedForUserRequest, proto_feed_pb.GenerateFeedForUserResponse> {
    path: "/kic.feed.Feed/GenerateFeedForUser";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_feed_pb.GenerateFeedForUserRequest>;
    requestDeserialize: grpc.deserialize<proto_feed_pb.GenerateFeedForUserRequest>;
    responseSerialize: grpc.serialize<proto_feed_pb.GenerateFeedForUserResponse>;
    responseDeserialize: grpc.deserialize<proto_feed_pb.GenerateFeedForUserResponse>;
}

export const FeedService: IFeedService;

export interface IFeedServer extends grpc.UntypedServiceImplementation {
    generateFeedForUser: grpc.handleServerStreamingCall<proto_feed_pb.GenerateFeedForUserRequest, proto_feed_pb.GenerateFeedForUserResponse>;
}

export interface IFeedClient {
    generateFeedForUser(request: proto_feed_pb.GenerateFeedForUserRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_feed_pb.GenerateFeedForUserResponse>;
    generateFeedForUser(request: proto_feed_pb.GenerateFeedForUserRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_feed_pb.GenerateFeedForUserResponse>;
}

export class FeedClient extends grpc.Client implements IFeedClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public generateFeedForUser(request: proto_feed_pb.GenerateFeedForUserRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_feed_pb.GenerateFeedForUserResponse>;
    public generateFeedForUser(request: proto_feed_pb.GenerateFeedForUserRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_feed_pb.GenerateFeedForUserResponse>;
}
