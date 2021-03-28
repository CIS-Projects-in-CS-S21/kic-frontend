/**
 * @fileoverview gRPC-Web generated client stub for kic.health
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_health_pb from '../proto/health_pb';


export class HealthTrackingClient {
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

  methodInfoGetHealthDataForUser = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_health_pb.GetHealthDataForUserResponse,
    (request: proto_health_pb.GetHealthDataForUserRequest) => {
      return request.serializeBinary();
    },
    proto_health_pb.GetHealthDataForUserResponse.deserializeBinary
  );

  getHealthDataForUser(
    request: proto_health_pb.GetHealthDataForUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_health_pb.GetHealthDataForUserResponse>;

  getHealthDataForUser(
    request: proto_health_pb.GetHealthDataForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_health_pb.GetHealthDataForUserResponse) => void): grpcWeb.ClientReadableStream<proto_health_pb.GetHealthDataForUserResponse>;

  getHealthDataForUser(
    request: proto_health_pb.GetHealthDataForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_health_pb.GetHealthDataForUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.health.HealthTracking/GetHealthDataForUser',
        request,
        metadata || {},
        this.methodInfoGetHealthDataForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.health.HealthTracking/GetHealthDataForUser',
    request,
    metadata || {},
    this.methodInfoGetHealthDataForUser);
  }

  methodInfoAddHealthDataForUser = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_health_pb.AddHealthDataForUserResponse,
    (request: proto_health_pb.AddHealthDataForUserRequest) => {
      return request.serializeBinary();
    },
    proto_health_pb.AddHealthDataForUserResponse.deserializeBinary
  );

  addHealthDataForUser(
    request: proto_health_pb.AddHealthDataForUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_health_pb.AddHealthDataForUserResponse>;

  addHealthDataForUser(
    request: proto_health_pb.AddHealthDataForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_health_pb.AddHealthDataForUserResponse) => void): grpcWeb.ClientReadableStream<proto_health_pb.AddHealthDataForUserResponse>;

  addHealthDataForUser(
    request: proto_health_pb.AddHealthDataForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_health_pb.AddHealthDataForUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.health.HealthTracking/AddHealthDataForUser',
        request,
        metadata || {},
        this.methodInfoAddHealthDataForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.health.HealthTracking/AddHealthDataForUser',
    request,
    metadata || {},
    this.methodInfoAddHealthDataForUser);
  }

  methodInfoDeleteHealthDataForUser = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_health_pb.DeleteHealthDataForUserResponse,
    (request: proto_health_pb.DeleteHealthDataForUserRequest) => {
      return request.serializeBinary();
    },
    proto_health_pb.DeleteHealthDataForUserResponse.deserializeBinary
  );

  deleteHealthDataForUser(
    request: proto_health_pb.DeleteHealthDataForUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_health_pb.DeleteHealthDataForUserResponse>;

  deleteHealthDataForUser(
    request: proto_health_pb.DeleteHealthDataForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_health_pb.DeleteHealthDataForUserResponse) => void): grpcWeb.ClientReadableStream<proto_health_pb.DeleteHealthDataForUserResponse>;

  deleteHealthDataForUser(
    request: proto_health_pb.DeleteHealthDataForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_health_pb.DeleteHealthDataForUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.health.HealthTracking/DeleteHealthDataForUser',
        request,
        metadata || {},
        this.methodInfoDeleteHealthDataForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.health.HealthTracking/DeleteHealthDataForUser',
    request,
    metadata || {},
    this.methodInfoDeleteHealthDataForUser);
  }

  methodInfoUpdateHealthDataForDate = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_health_pb.UpdateHealthDataForDateResponse,
    (request: proto_health_pb.UpdateHealthDataForDateRequest) => {
      return request.serializeBinary();
    },
    proto_health_pb.UpdateHealthDataForDateResponse.deserializeBinary
  );

  updateHealthDataForDate(
    request: proto_health_pb.UpdateHealthDataForDateRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_health_pb.UpdateHealthDataForDateResponse>;

  updateHealthDataForDate(
    request: proto_health_pb.UpdateHealthDataForDateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_health_pb.UpdateHealthDataForDateResponse) => void): grpcWeb.ClientReadableStream<proto_health_pb.UpdateHealthDataForDateResponse>;

  updateHealthDataForDate(
    request: proto_health_pb.UpdateHealthDataForDateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_health_pb.UpdateHealthDataForDateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kic.health.HealthTracking/UpdateHealthDataForDate',
        request,
        metadata || {},
        this.methodInfoUpdateHealthDataForDate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kic.health.HealthTracking/UpdateHealthDataForDate',
    request,
    metadata || {},
    this.methodInfoUpdateHealthDataForDate);
  }

}

