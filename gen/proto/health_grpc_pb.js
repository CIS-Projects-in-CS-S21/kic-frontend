// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// 
// These are messages and services relating to mental health tracking data, allowing for
// the logging of user mental health data and tracking the quality of their mental health state
// from day to day.
'use strict';
var grpc = require('@grpc/grpc-js');
var proto_health_pb = require('../proto/health_pb.js');
var proto_common_pb = require('../proto/common_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_kic_health_AddHealthDataForUserRequest(arg) {
  if (!(arg instanceof proto_health_pb.AddHealthDataForUserRequest)) {
    throw new Error('Expected argument of type kic.health.AddHealthDataForUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_health_AddHealthDataForUserRequest(buffer_arg) {
  return proto_health_pb.AddHealthDataForUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_health_AddHealthDataForUserResponse(arg) {
  if (!(arg instanceof proto_health_pb.AddHealthDataForUserResponse)) {
    throw new Error('Expected argument of type kic.health.AddHealthDataForUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_health_AddHealthDataForUserResponse(buffer_arg) {
  return proto_health_pb.AddHealthDataForUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_health_DeleteHealthDataForUserRequest(arg) {
  if (!(arg instanceof proto_health_pb.DeleteHealthDataForUserRequest)) {
    throw new Error('Expected argument of type kic.health.DeleteHealthDataForUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_health_DeleteHealthDataForUserRequest(buffer_arg) {
  return proto_health_pb.DeleteHealthDataForUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_health_DeleteHealthDataForUserResponse(arg) {
  if (!(arg instanceof proto_health_pb.DeleteHealthDataForUserResponse)) {
    throw new Error('Expected argument of type kic.health.DeleteHealthDataForUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_health_DeleteHealthDataForUserResponse(buffer_arg) {
  return proto_health_pb.DeleteHealthDataForUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_health_GetHealthDataByDateRequest(arg) {
  if (!(arg instanceof proto_health_pb.GetHealthDataByDateRequest)) {
    throw new Error('Expected argument of type kic.health.GetHealthDataByDateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_health_GetHealthDataByDateRequest(buffer_arg) {
  return proto_health_pb.GetHealthDataByDateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_health_GetHealthDataByDateResponse(arg) {
  if (!(arg instanceof proto_health_pb.GetHealthDataByDateResponse)) {
    throw new Error('Expected argument of type kic.health.GetHealthDataByDateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_health_GetHealthDataByDateResponse(buffer_arg) {
  return proto_health_pb.GetHealthDataByDateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_health_GetHealthDataForUserRequest(arg) {
  if (!(arg instanceof proto_health_pb.GetHealthDataForUserRequest)) {
    throw new Error('Expected argument of type kic.health.GetHealthDataForUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_health_GetHealthDataForUserRequest(buffer_arg) {
  return proto_health_pb.GetHealthDataForUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_health_GetHealthDataForUserResponse(arg) {
  if (!(arg instanceof proto_health_pb.GetHealthDataForUserResponse)) {
    throw new Error('Expected argument of type kic.health.GetHealthDataForUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_health_GetHealthDataForUserResponse(buffer_arg) {
  return proto_health_pb.GetHealthDataForUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_health_GetMentalHealthScoreForUserRequest(arg) {
  if (!(arg instanceof proto_health_pb.GetMentalHealthScoreForUserRequest)) {
    throw new Error('Expected argument of type kic.health.GetMentalHealthScoreForUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_health_GetMentalHealthScoreForUserRequest(buffer_arg) {
  return proto_health_pb.GetMentalHealthScoreForUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_health_GetMentalHealthScoreForUserResponse(arg) {
  if (!(arg instanceof proto_health_pb.GetMentalHealthScoreForUserResponse)) {
    throw new Error('Expected argument of type kic.health.GetMentalHealthScoreForUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_health_GetMentalHealthScoreForUserResponse(buffer_arg) {
  return proto_health_pb.GetMentalHealthScoreForUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_health_UpdateHealthDataForDateRequest(arg) {
  if (!(arg instanceof proto_health_pb.UpdateHealthDataForDateRequest)) {
    throw new Error('Expected argument of type kic.health.UpdateHealthDataForDateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_health_UpdateHealthDataForDateRequest(buffer_arg) {
  return proto_health_pb.UpdateHealthDataForDateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kic_health_UpdateHealthDataForDateResponse(arg) {
  if (!(arg instanceof proto_health_pb.UpdateHealthDataForDateResponse)) {
    throw new Error('Expected argument of type kic.health.UpdateHealthDataForDateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kic_health_UpdateHealthDataForDateResponse(buffer_arg) {
  return proto_health_pb.UpdateHealthDataForDateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// 
// Service handling fetching and storing mental health tracking data about users.
var HealthTrackingService = exports.HealthTrackingService = {
  // Given health data obtained upon user request, said health data is returned to user.
getHealthDataForUser: {
    path: '/kic.health.HealthTracking/GetHealthDataForUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_health_pb.GetHealthDataForUserRequest,
    responseType: proto_health_pb.GetHealthDataForUserResponse,
    requestSerialize: serialize_kic_health_GetHealthDataForUserRequest,
    requestDeserialize: deserialize_kic_health_GetHealthDataForUserRequest,
    responseSerialize: serialize_kic_health_GetHealthDataForUserResponse,
    responseDeserialize: deserialize_kic_health_GetHealthDataForUserResponse,
  },
  // Health data requested to be added by user is added, and error is returned if appropriate.
addHealthDataForUser: {
    path: '/kic.health.HealthTracking/AddHealthDataForUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_health_pb.AddHealthDataForUserRequest,
    responseType: proto_health_pb.AddHealthDataForUserResponse,
    requestSerialize: serialize_kic_health_AddHealthDataForUserRequest,
    requestDeserialize: deserialize_kic_health_AddHealthDataForUserRequest,
    responseSerialize: serialize_kic_health_AddHealthDataForUserResponse,
    responseDeserialize: deserialize_kic_health_AddHealthDataForUserResponse,
  },
  // Health data requested by user to be deleted is deleted and said deleted entries are returned to user.
deleteHealthDataForUser: {
    path: '/kic.health.HealthTracking/DeleteHealthDataForUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_health_pb.DeleteHealthDataForUserRequest,
    responseType: proto_health_pb.DeleteHealthDataForUserResponse,
    requestSerialize: serialize_kic_health_DeleteHealthDataForUserRequest,
    requestDeserialize: deserialize_kic_health_DeleteHealthDataForUserRequest,
    responseSerialize: serialize_kic_health_DeleteHealthDataForUserResponse,
    responseDeserialize: deserialize_kic_health_DeleteHealthDataForUserResponse,
  },
  // Health data requested to be updated by user is updated, and error is returned if appropriate.
updateHealthDataForDate: {
    path: '/kic.health.HealthTracking/UpdateHealthDataForDate',
    requestStream: false,
    responseStream: false,
    requestType: proto_health_pb.UpdateHealthDataForDateRequest,
    responseType: proto_health_pb.UpdateHealthDataForDateResponse,
    requestSerialize: serialize_kic_health_UpdateHealthDataForDateRequest,
    requestDeserialize: deserialize_kic_health_UpdateHealthDataForDateRequest,
    responseSerialize: serialize_kic_health_UpdateHealthDataForDateResponse,
    responseDeserialize: deserialize_kic_health_UpdateHealthDataForDateResponse,
  },
  // Given user ID, returns a mental health score for a user
getMentalHealthScoreForUser: {
    path: '/kic.health.HealthTracking/GetMentalHealthScoreForUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_health_pb.GetMentalHealthScoreForUserRequest,
    responseType: proto_health_pb.GetMentalHealthScoreForUserResponse,
    requestSerialize: serialize_kic_health_GetMentalHealthScoreForUserRequest,
    requestDeserialize: deserialize_kic_health_GetMentalHealthScoreForUserRequest,
    responseSerialize: serialize_kic_health_GetMentalHealthScoreForUserResponse,
    responseDeserialize: deserialize_kic_health_GetMentalHealthScoreForUserResponse,
  },
  // Given a date and user ID, return health data log for a specific date
getHealthDataByDate: {
    path: '/kic.health.HealthTracking/GetHealthDataByDate',
    requestStream: false,
    responseStream: false,
    requestType: proto_health_pb.GetHealthDataByDateRequest,
    responseType: proto_health_pb.GetHealthDataByDateResponse,
    requestSerialize: serialize_kic_health_GetHealthDataByDateRequest,
    requestDeserialize: deserialize_kic_health_GetHealthDataByDateRequest,
    responseSerialize: serialize_kic_health_GetHealthDataByDateResponse,
    responseDeserialize: deserialize_kic_health_GetHealthDataByDateResponse,
  },
};

exports.HealthTrackingClient = grpc.makeGenericClientConstructor(HealthTrackingService);
