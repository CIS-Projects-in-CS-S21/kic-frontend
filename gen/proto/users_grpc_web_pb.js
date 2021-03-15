/**
 * @fileoverview gRPC-Web generated client stub for kic.users
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
proto.kic.users = require('./users_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.kic.users.UsersClient =
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
proto.kic.users.UsersPromiseClient =
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
 *   !proto.kic.users.GetJWTTokenRequest,
 *   !proto.kic.users.GetJWTTokenResponse>}
 */
const methodDescriptor_Users_GetJWTToken = new grpc.web.MethodDescriptor(
  '/kic.users.Users/GetJWTToken',
  grpc.web.MethodType.UNARY,
  proto.kic.users.GetJWTTokenRequest,
  proto.kic.users.GetJWTTokenResponse,
  /**
   * @param {!proto.kic.users.GetJWTTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.users.GetJWTTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.users.GetJWTTokenRequest,
 *   !proto.kic.users.GetJWTTokenResponse>}
 */
const methodInfo_Users_GetJWTToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.users.GetJWTTokenResponse,
  /**
   * @param {!proto.kic.users.GetJWTTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.users.GetJWTTokenResponse.deserializeBinary
);


/**
 * @param {!proto.kic.users.GetJWTTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.users.GetJWTTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.users.GetJWTTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.users.UsersClient.prototype.getJWTToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.users.Users/GetJWTToken',
      request,
      metadata || {},
      methodDescriptor_Users_GetJWTToken,
      callback);
};


/**
 * @param {!proto.kic.users.GetJWTTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.users.GetJWTTokenResponse>}
 *     Promise that resolves to the response
 */
proto.kic.users.UsersPromiseClient.prototype.getJWTToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.users.Users/GetJWTToken',
      request,
      metadata || {},
      methodDescriptor_Users_GetJWTToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.users.AddUserRequest,
 *   !proto.kic.users.AddUserResponse>}
 */
const methodDescriptor_Users_AddUser = new grpc.web.MethodDescriptor(
  '/kic.users.Users/AddUser',
  grpc.web.MethodType.UNARY,
  proto.kic.users.AddUserRequest,
  proto.kic.users.AddUserResponse,
  /**
   * @param {!proto.kic.users.AddUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.users.AddUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.users.AddUserRequest,
 *   !proto.kic.users.AddUserResponse>}
 */
const methodInfo_Users_AddUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.users.AddUserResponse,
  /**
   * @param {!proto.kic.users.AddUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.users.AddUserResponse.deserializeBinary
);


/**
 * @param {!proto.kic.users.AddUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.users.AddUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.users.AddUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.users.UsersClient.prototype.addUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.users.Users/AddUser',
      request,
      metadata || {},
      methodDescriptor_Users_AddUser,
      callback);
};


/**
 * @param {!proto.kic.users.AddUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.users.AddUserResponse>}
 *     Promise that resolves to the response
 */
proto.kic.users.UsersPromiseClient.prototype.addUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.users.Users/AddUser',
      request,
      metadata || {},
      methodDescriptor_Users_AddUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.users.GetUserByUsernameRequest,
 *   !proto.kic.users.GetUserByUsernameResponse>}
 */
const methodDescriptor_Users_GetUserByUsername = new grpc.web.MethodDescriptor(
  '/kic.users.Users/GetUserByUsername',
  grpc.web.MethodType.UNARY,
  proto.kic.users.GetUserByUsernameRequest,
  proto.kic.users.GetUserByUsernameResponse,
  /**
   * @param {!proto.kic.users.GetUserByUsernameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.users.GetUserByUsernameResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.users.GetUserByUsernameRequest,
 *   !proto.kic.users.GetUserByUsernameResponse>}
 */
const methodInfo_Users_GetUserByUsername = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.users.GetUserByUsernameResponse,
  /**
   * @param {!proto.kic.users.GetUserByUsernameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.users.GetUserByUsernameResponse.deserializeBinary
);


/**
 * @param {!proto.kic.users.GetUserByUsernameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.users.GetUserByUsernameResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.users.GetUserByUsernameResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.users.UsersClient.prototype.getUserByUsername =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.users.Users/GetUserByUsername',
      request,
      metadata || {},
      methodDescriptor_Users_GetUserByUsername,
      callback);
};


/**
 * @param {!proto.kic.users.GetUserByUsernameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.users.GetUserByUsernameResponse>}
 *     Promise that resolves to the response
 */
proto.kic.users.UsersPromiseClient.prototype.getUserByUsername =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.users.Users/GetUserByUsername',
      request,
      metadata || {},
      methodDescriptor_Users_GetUserByUsername);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.users.GetUserByIDRequest,
 *   !proto.kic.users.GetUserByIDResponse>}
 */
const methodDescriptor_Users_GetUserByID = new grpc.web.MethodDescriptor(
  '/kic.users.Users/GetUserByID',
  grpc.web.MethodType.UNARY,
  proto.kic.users.GetUserByIDRequest,
  proto.kic.users.GetUserByIDResponse,
  /**
   * @param {!proto.kic.users.GetUserByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.users.GetUserByIDResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.users.GetUserByIDRequest,
 *   !proto.kic.users.GetUserByIDResponse>}
 */
const methodInfo_Users_GetUserByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.users.GetUserByIDResponse,
  /**
   * @param {!proto.kic.users.GetUserByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.users.GetUserByIDResponse.deserializeBinary
);


/**
 * @param {!proto.kic.users.GetUserByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.users.GetUserByIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.users.GetUserByIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.users.UsersClient.prototype.getUserByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.users.Users/GetUserByID',
      request,
      metadata || {},
      methodDescriptor_Users_GetUserByID,
      callback);
};


/**
 * @param {!proto.kic.users.GetUserByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.users.GetUserByIDResponse>}
 *     Promise that resolves to the response
 */
proto.kic.users.UsersPromiseClient.prototype.getUserByID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.users.Users/GetUserByID',
      request,
      metadata || {},
      methodDescriptor_Users_GetUserByID);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.users.GetUserNameByIDRequest,
 *   !proto.kic.users.GetUserNameByIDResponse>}
 */
const methodDescriptor_Users_GetUserNameByID = new grpc.web.MethodDescriptor(
  '/kic.users.Users/GetUserNameByID',
  grpc.web.MethodType.UNARY,
  proto.kic.users.GetUserNameByIDRequest,
  proto.kic.users.GetUserNameByIDResponse,
  /**
   * @param {!proto.kic.users.GetUserNameByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.users.GetUserNameByIDResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.users.GetUserNameByIDRequest,
 *   !proto.kic.users.GetUserNameByIDResponse>}
 */
const methodInfo_Users_GetUserNameByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.users.GetUserNameByIDResponse,
  /**
   * @param {!proto.kic.users.GetUserNameByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.users.GetUserNameByIDResponse.deserializeBinary
);


/**
 * @param {!proto.kic.users.GetUserNameByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.users.GetUserNameByIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.users.GetUserNameByIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.users.UsersClient.prototype.getUserNameByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.users.Users/GetUserNameByID',
      request,
      metadata || {},
      methodDescriptor_Users_GetUserNameByID,
      callback);
};


/**
 * @param {!proto.kic.users.GetUserNameByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.users.GetUserNameByIDResponse>}
 *     Promise that resolves to the response
 */
proto.kic.users.UsersPromiseClient.prototype.getUserNameByID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.users.Users/GetUserNameByID',
      request,
      metadata || {},
      methodDescriptor_Users_GetUserNameByID);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.users.DeleteUserByIDRequest,
 *   !proto.kic.users.DeleteUserByIDResponse>}
 */
const methodDescriptor_Users_DeleteUserByID = new grpc.web.MethodDescriptor(
  '/kic.users.Users/DeleteUserByID',
  grpc.web.MethodType.UNARY,
  proto.kic.users.DeleteUserByIDRequest,
  proto.kic.users.DeleteUserByIDResponse,
  /**
   * @param {!proto.kic.users.DeleteUserByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.users.DeleteUserByIDResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.users.DeleteUserByIDRequest,
 *   !proto.kic.users.DeleteUserByIDResponse>}
 */
const methodInfo_Users_DeleteUserByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.users.DeleteUserByIDResponse,
  /**
   * @param {!proto.kic.users.DeleteUserByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.users.DeleteUserByIDResponse.deserializeBinary
);


/**
 * @param {!proto.kic.users.DeleteUserByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.users.DeleteUserByIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.users.DeleteUserByIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.users.UsersClient.prototype.deleteUserByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.users.Users/DeleteUserByID',
      request,
      metadata || {},
      methodDescriptor_Users_DeleteUserByID,
      callback);
};


/**
 * @param {!proto.kic.users.DeleteUserByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.users.DeleteUserByIDResponse>}
 *     Promise that resolves to the response
 */
proto.kic.users.UsersPromiseClient.prototype.deleteUserByID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.users.Users/DeleteUserByID',
      request,
      metadata || {},
      methodDescriptor_Users_DeleteUserByID);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.users.UpdateUserInfoRequest,
 *   !proto.kic.users.UpdateUserInfoResponse>}
 */
const methodDescriptor_Users_UpdateUserInfo = new grpc.web.MethodDescriptor(
  '/kic.users.Users/UpdateUserInfo',
  grpc.web.MethodType.UNARY,
  proto.kic.users.UpdateUserInfoRequest,
  proto.kic.users.UpdateUserInfoResponse,
  /**
   * @param {!proto.kic.users.UpdateUserInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.users.UpdateUserInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.users.UpdateUserInfoRequest,
 *   !proto.kic.users.UpdateUserInfoResponse>}
 */
const methodInfo_Users_UpdateUserInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.users.UpdateUserInfoResponse,
  /**
   * @param {!proto.kic.users.UpdateUserInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.users.UpdateUserInfoResponse.deserializeBinary
);


/**
 * @param {!proto.kic.users.UpdateUserInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.users.UpdateUserInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.users.UpdateUserInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.users.UsersClient.prototype.updateUserInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.users.Users/UpdateUserInfo',
      request,
      metadata || {},
      methodDescriptor_Users_UpdateUserInfo,
      callback);
};


/**
 * @param {!proto.kic.users.UpdateUserInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.users.UpdateUserInfoResponse>}
 *     Promise that resolves to the response
 */
proto.kic.users.UsersPromiseClient.prototype.updateUserInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.users.Users/UpdateUserInfo',
      request,
      metadata || {},
      methodDescriptor_Users_UpdateUserInfo);
};


module.exports = proto.kic.users;

