// package: kic.health
// file: proto/health.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as proto_health_pb from "../proto/health_pb";
import * as proto_common_pb from "../proto/common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IHealthTrackingService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getHealthDataForUser: IHealthTrackingService_IGetHealthDataForUser;
    addHealthDataForUser: IHealthTrackingService_IAddHealthDataForUser;
    deleteHealthDataForUser: IHealthTrackingService_IDeleteHealthDataForUser;
    updateHealthDataForDate: IHealthTrackingService_IUpdateHealthDataForDate;
    getMentalHealthScoreForUser: IHealthTrackingService_IGetMentalHealthScoreForUser;
    getHealthDataByDate: IHealthTrackingService_IGetHealthDataByDate;
}

interface IHealthTrackingService_IGetHealthDataForUser extends grpc.MethodDefinition<proto_health_pb.GetHealthDataForUserRequest, proto_health_pb.GetHealthDataForUserResponse> {
    path: "/kic.health.HealthTracking/GetHealthDataForUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_health_pb.GetHealthDataForUserRequest>;
    requestDeserialize: grpc.deserialize<proto_health_pb.GetHealthDataForUserRequest>;
    responseSerialize: grpc.serialize<proto_health_pb.GetHealthDataForUserResponse>;
    responseDeserialize: grpc.deserialize<proto_health_pb.GetHealthDataForUserResponse>;
}
interface IHealthTrackingService_IAddHealthDataForUser extends grpc.MethodDefinition<proto_health_pb.AddHealthDataForUserRequest, proto_health_pb.AddHealthDataForUserResponse> {
    path: "/kic.health.HealthTracking/AddHealthDataForUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_health_pb.AddHealthDataForUserRequest>;
    requestDeserialize: grpc.deserialize<proto_health_pb.AddHealthDataForUserRequest>;
    responseSerialize: grpc.serialize<proto_health_pb.AddHealthDataForUserResponse>;
    responseDeserialize: grpc.deserialize<proto_health_pb.AddHealthDataForUserResponse>;
}
interface IHealthTrackingService_IDeleteHealthDataForUser extends grpc.MethodDefinition<proto_health_pb.DeleteHealthDataForUserRequest, proto_health_pb.DeleteHealthDataForUserResponse> {
    path: "/kic.health.HealthTracking/DeleteHealthDataForUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_health_pb.DeleteHealthDataForUserRequest>;
    requestDeserialize: grpc.deserialize<proto_health_pb.DeleteHealthDataForUserRequest>;
    responseSerialize: grpc.serialize<proto_health_pb.DeleteHealthDataForUserResponse>;
    responseDeserialize: grpc.deserialize<proto_health_pb.DeleteHealthDataForUserResponse>;
}
interface IHealthTrackingService_IUpdateHealthDataForDate extends grpc.MethodDefinition<proto_health_pb.UpdateHealthDataForDateRequest, proto_health_pb.UpdateHealthDataForDateResponse> {
    path: "/kic.health.HealthTracking/UpdateHealthDataForDate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_health_pb.UpdateHealthDataForDateRequest>;
    requestDeserialize: grpc.deserialize<proto_health_pb.UpdateHealthDataForDateRequest>;
    responseSerialize: grpc.serialize<proto_health_pb.UpdateHealthDataForDateResponse>;
    responseDeserialize: grpc.deserialize<proto_health_pb.UpdateHealthDataForDateResponse>;
}
interface IHealthTrackingService_IGetMentalHealthScoreForUser extends grpc.MethodDefinition<proto_health_pb.GetMentalHealthScoreForUserRequest, proto_health_pb.GetMentalHealthScoreForUserResponse> {
    path: "/kic.health.HealthTracking/GetMentalHealthScoreForUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_health_pb.GetMentalHealthScoreForUserRequest>;
    requestDeserialize: grpc.deserialize<proto_health_pb.GetMentalHealthScoreForUserRequest>;
    responseSerialize: grpc.serialize<proto_health_pb.GetMentalHealthScoreForUserResponse>;
    responseDeserialize: grpc.deserialize<proto_health_pb.GetMentalHealthScoreForUserResponse>;
}
interface IHealthTrackingService_IGetHealthDataByDate extends grpc.MethodDefinition<proto_health_pb.GetHealthDataByDateRequest, proto_health_pb.GetHealthDataByDateResponse> {
    path: "/kic.health.HealthTracking/GetHealthDataByDate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_health_pb.GetHealthDataByDateRequest>;
    requestDeserialize: grpc.deserialize<proto_health_pb.GetHealthDataByDateRequest>;
    responseSerialize: grpc.serialize<proto_health_pb.GetHealthDataByDateResponse>;
    responseDeserialize: grpc.deserialize<proto_health_pb.GetHealthDataByDateResponse>;
}

export const HealthTrackingService: IHealthTrackingService;

export interface IHealthTrackingServer extends grpc.UntypedServiceImplementation {
    getHealthDataForUser: grpc.handleUnaryCall<proto_health_pb.GetHealthDataForUserRequest, proto_health_pb.GetHealthDataForUserResponse>;
    addHealthDataForUser: grpc.handleUnaryCall<proto_health_pb.AddHealthDataForUserRequest, proto_health_pb.AddHealthDataForUserResponse>;
    deleteHealthDataForUser: grpc.handleUnaryCall<proto_health_pb.DeleteHealthDataForUserRequest, proto_health_pb.DeleteHealthDataForUserResponse>;
    updateHealthDataForDate: grpc.handleUnaryCall<proto_health_pb.UpdateHealthDataForDateRequest, proto_health_pb.UpdateHealthDataForDateResponse>;
    getMentalHealthScoreForUser: grpc.handleUnaryCall<proto_health_pb.GetMentalHealthScoreForUserRequest, proto_health_pb.GetMentalHealthScoreForUserResponse>;
    getHealthDataByDate: grpc.handleUnaryCall<proto_health_pb.GetHealthDataByDateRequest, proto_health_pb.GetHealthDataByDateResponse>;
}

export interface IHealthTrackingClient {
    getHealthDataForUser(request: proto_health_pb.GetHealthDataForUserRequest, callback: (error: grpc.ServiceError | null, response: proto_health_pb.GetHealthDataForUserResponse) => void): grpc.ClientUnaryCall;
    getHealthDataForUser(request: proto_health_pb.GetHealthDataForUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_health_pb.GetHealthDataForUserResponse) => void): grpc.ClientUnaryCall;
    getHealthDataForUser(request: proto_health_pb.GetHealthDataForUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_health_pb.GetHealthDataForUserResponse) => void): grpc.ClientUnaryCall;
    addHealthDataForUser(request: proto_health_pb.AddHealthDataForUserRequest, callback: (error: grpc.ServiceError | null, response: proto_health_pb.AddHealthDataForUserResponse) => void): grpc.ClientUnaryCall;
    addHealthDataForUser(request: proto_health_pb.AddHealthDataForUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_health_pb.AddHealthDataForUserResponse) => void): grpc.ClientUnaryCall;
    addHealthDataForUser(request: proto_health_pb.AddHealthDataForUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_health_pb.AddHealthDataForUserResponse) => void): grpc.ClientUnaryCall;
    deleteHealthDataForUser(request: proto_health_pb.DeleteHealthDataForUserRequest, callback: (error: grpc.ServiceError | null, response: proto_health_pb.DeleteHealthDataForUserResponse) => void): grpc.ClientUnaryCall;
    deleteHealthDataForUser(request: proto_health_pb.DeleteHealthDataForUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_health_pb.DeleteHealthDataForUserResponse) => void): grpc.ClientUnaryCall;
    deleteHealthDataForUser(request: proto_health_pb.DeleteHealthDataForUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_health_pb.DeleteHealthDataForUserResponse) => void): grpc.ClientUnaryCall;
    updateHealthDataForDate(request: proto_health_pb.UpdateHealthDataForDateRequest, callback: (error: grpc.ServiceError | null, response: proto_health_pb.UpdateHealthDataForDateResponse) => void): grpc.ClientUnaryCall;
    updateHealthDataForDate(request: proto_health_pb.UpdateHealthDataForDateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_health_pb.UpdateHealthDataForDateResponse) => void): grpc.ClientUnaryCall;
    updateHealthDataForDate(request: proto_health_pb.UpdateHealthDataForDateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_health_pb.UpdateHealthDataForDateResponse) => void): grpc.ClientUnaryCall;
    getMentalHealthScoreForUser(request: proto_health_pb.GetMentalHealthScoreForUserRequest, callback: (error: grpc.ServiceError | null, response: proto_health_pb.GetMentalHealthScoreForUserResponse) => void): grpc.ClientUnaryCall;
    getMentalHealthScoreForUser(request: proto_health_pb.GetMentalHealthScoreForUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_health_pb.GetMentalHealthScoreForUserResponse) => void): grpc.ClientUnaryCall;
    getMentalHealthScoreForUser(request: proto_health_pb.GetMentalHealthScoreForUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_health_pb.GetMentalHealthScoreForUserResponse) => void): grpc.ClientUnaryCall;
    getHealthDataByDate(request: proto_health_pb.GetHealthDataByDateRequest, callback: (error: grpc.ServiceError | null, response: proto_health_pb.GetHealthDataByDateResponse) => void): grpc.ClientUnaryCall;
    getHealthDataByDate(request: proto_health_pb.GetHealthDataByDateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_health_pb.GetHealthDataByDateResponse) => void): grpc.ClientUnaryCall;
    getHealthDataByDate(request: proto_health_pb.GetHealthDataByDateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_health_pb.GetHealthDataByDateResponse) => void): grpc.ClientUnaryCall;
}

export class HealthTrackingClient extends grpc.Client implements IHealthTrackingClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getHealthDataForUser(request: proto_health_pb.GetHealthDataForUserRequest, callback: (error: grpc.ServiceError | null, response: proto_health_pb.GetHealthDataForUserResponse) => void): grpc.ClientUnaryCall;
    public getHealthDataForUser(request: proto_health_pb.GetHealthDataForUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_health_pb.GetHealthDataForUserResponse) => void): grpc.ClientUnaryCall;
    public getHealthDataForUser(request: proto_health_pb.GetHealthDataForUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_health_pb.GetHealthDataForUserResponse) => void): grpc.ClientUnaryCall;
    public addHealthDataForUser(request: proto_health_pb.AddHealthDataForUserRequest, callback: (error: grpc.ServiceError | null, response: proto_health_pb.AddHealthDataForUserResponse) => void): grpc.ClientUnaryCall;
    public addHealthDataForUser(request: proto_health_pb.AddHealthDataForUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_health_pb.AddHealthDataForUserResponse) => void): grpc.ClientUnaryCall;
    public addHealthDataForUser(request: proto_health_pb.AddHealthDataForUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_health_pb.AddHealthDataForUserResponse) => void): grpc.ClientUnaryCall;
    public deleteHealthDataForUser(request: proto_health_pb.DeleteHealthDataForUserRequest, callback: (error: grpc.ServiceError | null, response: proto_health_pb.DeleteHealthDataForUserResponse) => void): grpc.ClientUnaryCall;
    public deleteHealthDataForUser(request: proto_health_pb.DeleteHealthDataForUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_health_pb.DeleteHealthDataForUserResponse) => void): grpc.ClientUnaryCall;
    public deleteHealthDataForUser(request: proto_health_pb.DeleteHealthDataForUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_health_pb.DeleteHealthDataForUserResponse) => void): grpc.ClientUnaryCall;
    public updateHealthDataForDate(request: proto_health_pb.UpdateHealthDataForDateRequest, callback: (error: grpc.ServiceError | null, response: proto_health_pb.UpdateHealthDataForDateResponse) => void): grpc.ClientUnaryCall;
    public updateHealthDataForDate(request: proto_health_pb.UpdateHealthDataForDateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_health_pb.UpdateHealthDataForDateResponse) => void): grpc.ClientUnaryCall;
    public updateHealthDataForDate(request: proto_health_pb.UpdateHealthDataForDateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_health_pb.UpdateHealthDataForDateResponse) => void): grpc.ClientUnaryCall;
    public getMentalHealthScoreForUser(request: proto_health_pb.GetMentalHealthScoreForUserRequest, callback: (error: grpc.ServiceError | null, response: proto_health_pb.GetMentalHealthScoreForUserResponse) => void): grpc.ClientUnaryCall;
    public getMentalHealthScoreForUser(request: proto_health_pb.GetMentalHealthScoreForUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_health_pb.GetMentalHealthScoreForUserResponse) => void): grpc.ClientUnaryCall;
    public getMentalHealthScoreForUser(request: proto_health_pb.GetMentalHealthScoreForUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_health_pb.GetMentalHealthScoreForUserResponse) => void): grpc.ClientUnaryCall;
    public getHealthDataByDate(request: proto_health_pb.GetHealthDataByDateRequest, callback: (error: grpc.ServiceError | null, response: proto_health_pb.GetHealthDataByDateResponse) => void): grpc.ClientUnaryCall;
    public getHealthDataByDate(request: proto_health_pb.GetHealthDataByDateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_health_pb.GetHealthDataByDateResponse) => void): grpc.ClientUnaryCall;
    public getHealthDataByDate(request: proto_health_pb.GetHealthDataByDateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_health_pb.GetHealthDataByDateResponse) => void): grpc.ClientUnaryCall;
}
