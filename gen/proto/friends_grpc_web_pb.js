/**
 * @fileoverview gRPC-Web generated client stub for kic.friends
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
proto.kic.friends = require('./friends_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.kic.friends.FriendsClient =
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
proto.kic.friends.FriendsPromiseClient =
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
 *   !proto.kic.friends.GetFriendsForUserRequest,
 *   !proto.kic.friends.GetFriendsUsernamesForUserResponse>}
 */
const methodDescriptor_Friends_GetFriendsUsernamesForUser = new grpc.web.MethodDescriptor(
  '/kic.friends.Friends/GetFriendsUsernamesForUser',
  grpc.web.MethodType.UNARY,
  proto.kic.friends.GetFriendsForUserRequest,
  proto.kic.friends.GetFriendsUsernamesForUserResponse,
  /**
   * @param {!proto.kic.friends.GetFriendsForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.friends.GetFriendsUsernamesForUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.friends.GetFriendsForUserRequest,
 *   !proto.kic.friends.GetFriendsUsernamesForUserResponse>}
 */
const methodInfo_Friends_GetFriendsUsernamesForUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.friends.GetFriendsUsernamesForUserResponse,
  /**
   * @param {!proto.kic.friends.GetFriendsForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.friends.GetFriendsUsernamesForUserResponse.deserializeBinary
);


/**
 * @param {!proto.kic.friends.GetFriendsForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.friends.GetFriendsUsernamesForUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.friends.GetFriendsUsernamesForUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.friends.FriendsClient.prototype.getFriendsUsernamesForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.friends.Friends/GetFriendsUsernamesForUser',
      request,
      metadata || {},
      methodDescriptor_Friends_GetFriendsUsernamesForUser,
      callback);
};


/**
 * @param {!proto.kic.friends.GetFriendsForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.friends.GetFriendsUsernamesForUserResponse>}
 *     Promise that resolves to the response
 */
proto.kic.friends.FriendsPromiseClient.prototype.getFriendsUsernamesForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.friends.Friends/GetFriendsUsernamesForUser',
      request,
      metadata || {},
      methodDescriptor_Friends_GetFriendsUsernamesForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.friends.GetFriendsForUserRequest,
 *   !proto.kic.friends.GetFriendsForUserResponse>}
 */
const methodDescriptor_Friends_GetFriendsForUser = new grpc.web.MethodDescriptor(
  '/kic.friends.Friends/GetFriendsForUser',
  grpc.web.MethodType.UNARY,
  proto.kic.friends.GetFriendsForUserRequest,
  proto.kic.friends.GetFriendsForUserResponse,
  /**
   * @param {!proto.kic.friends.GetFriendsForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.friends.GetFriendsForUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.friends.GetFriendsForUserRequest,
 *   !proto.kic.friends.GetFriendsForUserResponse>}
 */
const methodInfo_Friends_GetFriendsForUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.friends.GetFriendsForUserResponse,
  /**
   * @param {!proto.kic.friends.GetFriendsForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.friends.GetFriendsForUserResponse.deserializeBinary
);


/**
 * @param {!proto.kic.friends.GetFriendsForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.friends.GetFriendsForUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.friends.GetFriendsForUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.friends.FriendsClient.prototype.getFriendsForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.friends.Friends/GetFriendsForUser',
      request,
      metadata || {},
      methodDescriptor_Friends_GetFriendsForUser,
      callback);
};


/**
 * @param {!proto.kic.friends.GetFriendsForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.friends.GetFriendsForUserResponse>}
 *     Promise that resolves to the response
 */
proto.kic.friends.FriendsPromiseClient.prototype.getFriendsForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.friends.Friends/GetFriendsForUser',
      request,
      metadata || {},
      methodDescriptor_Friends_GetFriendsForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.friends.GetFriendsForUserRequest,
 *   !proto.kic.friends.GetFriendsForUserResponse>}
 */
const methodDescriptor_Friends_GetAwaitingFriendsForUser = new grpc.web.MethodDescriptor(
  '/kic.friends.Friends/GetAwaitingFriendsForUser',
  grpc.web.MethodType.UNARY,
  proto.kic.friends.GetFriendsForUserRequest,
  proto.kic.friends.GetFriendsForUserResponse,
  /**
   * @param {!proto.kic.friends.GetFriendsForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.friends.GetFriendsForUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.friends.GetFriendsForUserRequest,
 *   !proto.kic.friends.GetFriendsForUserResponse>}
 */
const methodInfo_Friends_GetAwaitingFriendsForUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.friends.GetFriendsForUserResponse,
  /**
   * @param {!proto.kic.friends.GetFriendsForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.friends.GetFriendsForUserResponse.deserializeBinary
);


/**
 * @param {!proto.kic.friends.GetFriendsForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.friends.GetFriendsForUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.friends.GetFriendsForUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.friends.FriendsClient.prototype.getAwaitingFriendsForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.friends.Friends/GetAwaitingFriendsForUser',
      request,
      metadata || {},
      methodDescriptor_Friends_GetAwaitingFriendsForUser,
      callback);
};


/**
 * @param {!proto.kic.friends.GetFriendsForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.friends.GetFriendsForUserResponse>}
 *     Promise that resolves to the response
 */
proto.kic.friends.FriendsPromiseClient.prototype.getAwaitingFriendsForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.friends.Friends/GetAwaitingFriendsForUser',
      request,
      metadata || {},
      methodDescriptor_Friends_GetAwaitingFriendsForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.friends.GetConnectionBetweenUsersRequest,
 *   !proto.kic.friends.ConnectionBetweenUsersResponse>}
 */
const methodDescriptor_Friends_GetConnectionBetweenUsers = new grpc.web.MethodDescriptor(
  '/kic.friends.Friends/GetConnectionBetweenUsers',
  grpc.web.MethodType.UNARY,
  proto.kic.friends.GetConnectionBetweenUsersRequest,
  proto.kic.friends.ConnectionBetweenUsersResponse,
  /**
   * @param {!proto.kic.friends.GetConnectionBetweenUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.friends.ConnectionBetweenUsersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.friends.GetConnectionBetweenUsersRequest,
 *   !proto.kic.friends.ConnectionBetweenUsersResponse>}
 */
const methodInfo_Friends_GetConnectionBetweenUsers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.friends.ConnectionBetweenUsersResponse,
  /**
   * @param {!proto.kic.friends.GetConnectionBetweenUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.friends.ConnectionBetweenUsersResponse.deserializeBinary
);


/**
 * @param {!proto.kic.friends.GetConnectionBetweenUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.friends.ConnectionBetweenUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.friends.ConnectionBetweenUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.friends.FriendsClient.prototype.getConnectionBetweenUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.friends.Friends/GetConnectionBetweenUsers',
      request,
      metadata || {},
      methodDescriptor_Friends_GetConnectionBetweenUsers,
      callback);
};


/**
 * @param {!proto.kic.friends.GetConnectionBetweenUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.friends.ConnectionBetweenUsersResponse>}
 *     Promise that resolves to the response
 */
proto.kic.friends.FriendsPromiseClient.prototype.getConnectionBetweenUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.friends.Friends/GetConnectionBetweenUsers',
      request,
      metadata || {},
      methodDescriptor_Friends_GetConnectionBetweenUsers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.friends.GetRecommendationsForUserRequest,
 *   !proto.kic.friends.GetRecommendationsForUserResponse>}
 */
const methodDescriptor_Friends_GetRecommendationsForUser = new grpc.web.MethodDescriptor(
  '/kic.friends.Friends/GetRecommendationsForUser',
  grpc.web.MethodType.UNARY,
  proto.kic.friends.GetRecommendationsForUserRequest,
  proto.kic.friends.GetRecommendationsForUserResponse,
  /**
   * @param {!proto.kic.friends.GetRecommendationsForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.friends.GetRecommendationsForUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.friends.GetRecommendationsForUserRequest,
 *   !proto.kic.friends.GetRecommendationsForUserResponse>}
 */
const methodInfo_Friends_GetRecommendationsForUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.friends.GetRecommendationsForUserResponse,
  /**
   * @param {!proto.kic.friends.GetRecommendationsForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.friends.GetRecommendationsForUserResponse.deserializeBinary
);


/**
 * @param {!proto.kic.friends.GetRecommendationsForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.friends.GetRecommendationsForUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.friends.GetRecommendationsForUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.friends.FriendsClient.prototype.getRecommendationsForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.friends.Friends/GetRecommendationsForUser',
      request,
      metadata || {},
      methodDescriptor_Friends_GetRecommendationsForUser,
      callback);
};


/**
 * @param {!proto.kic.friends.GetRecommendationsForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.friends.GetRecommendationsForUserResponse>}
 *     Promise that resolves to the response
 */
proto.kic.friends.FriendsPromiseClient.prototype.getRecommendationsForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.friends.Friends/GetRecommendationsForUser',
      request,
      metadata || {},
      methodDescriptor_Friends_GetRecommendationsForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.friends.CreateConnectionForUsersRequest,
 *   !proto.kic.friends.CreateConnectionForUsersResponse>}
 */
const methodDescriptor_Friends_CreateConnectionForUsers = new grpc.web.MethodDescriptor(
  '/kic.friends.Friends/CreateConnectionForUsers',
  grpc.web.MethodType.UNARY,
  proto.kic.friends.CreateConnectionForUsersRequest,
  proto.kic.friends.CreateConnectionForUsersResponse,
  /**
   * @param {!proto.kic.friends.CreateConnectionForUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.friends.CreateConnectionForUsersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.friends.CreateConnectionForUsersRequest,
 *   !proto.kic.friends.CreateConnectionForUsersResponse>}
 */
const methodInfo_Friends_CreateConnectionForUsers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.friends.CreateConnectionForUsersResponse,
  /**
   * @param {!proto.kic.friends.CreateConnectionForUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.friends.CreateConnectionForUsersResponse.deserializeBinary
);


/**
 * @param {!proto.kic.friends.CreateConnectionForUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.friends.CreateConnectionForUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.friends.CreateConnectionForUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.friends.FriendsClient.prototype.createConnectionForUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.friends.Friends/CreateConnectionForUsers',
      request,
      metadata || {},
      methodDescriptor_Friends_CreateConnectionForUsers,
      callback);
};


/**
 * @param {!proto.kic.friends.CreateConnectionForUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.friends.CreateConnectionForUsersResponse>}
 *     Promise that resolves to the response
 */
proto.kic.friends.FriendsPromiseClient.prototype.createConnectionForUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.friends.Friends/CreateConnectionForUsers',
      request,
      metadata || {},
      methodDescriptor_Friends_CreateConnectionForUsers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.friends.AddAwaitingFriendRequest,
 *   !proto.kic.friends.AddAwaitingFriendResponse>}
 */
const methodDescriptor_Friends_AddAwaitingFriend = new grpc.web.MethodDescriptor(
  '/kic.friends.Friends/AddAwaitingFriend',
  grpc.web.MethodType.UNARY,
  proto.kic.friends.AddAwaitingFriendRequest,
  proto.kic.friends.AddAwaitingFriendResponse,
  /**
   * @param {!proto.kic.friends.AddAwaitingFriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.friends.AddAwaitingFriendResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.friends.AddAwaitingFriendRequest,
 *   !proto.kic.friends.AddAwaitingFriendResponse>}
 */
const methodInfo_Friends_AddAwaitingFriend = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.friends.AddAwaitingFriendResponse,
  /**
   * @param {!proto.kic.friends.AddAwaitingFriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.friends.AddAwaitingFriendResponse.deserializeBinary
);


/**
 * @param {!proto.kic.friends.AddAwaitingFriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.friends.AddAwaitingFriendResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.friends.AddAwaitingFriendResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.friends.FriendsClient.prototype.addAwaitingFriend =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.friends.Friends/AddAwaitingFriend',
      request,
      metadata || {},
      methodDescriptor_Friends_AddAwaitingFriend,
      callback);
};


/**
 * @param {!proto.kic.friends.AddAwaitingFriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.friends.AddAwaitingFriendResponse>}
 *     Promise that resolves to the response
 */
proto.kic.friends.FriendsPromiseClient.prototype.addAwaitingFriend =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.friends.Friends/AddAwaitingFriend',
      request,
      metadata || {},
      methodDescriptor_Friends_AddAwaitingFriend);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.friends.UpdateConnectionBetweenUsersRequest,
 *   !proto.kic.friends.ConnectionBetweenUsersResponse>}
 */
const methodDescriptor_Friends_UpdateConnectionBetweenUsers = new grpc.web.MethodDescriptor(
  '/kic.friends.Friends/UpdateConnectionBetweenUsers',
  grpc.web.MethodType.UNARY,
  proto.kic.friends.UpdateConnectionBetweenUsersRequest,
  proto.kic.friends.ConnectionBetweenUsersResponse,
  /**
   * @param {!proto.kic.friends.UpdateConnectionBetweenUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.friends.ConnectionBetweenUsersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.friends.UpdateConnectionBetweenUsersRequest,
 *   !proto.kic.friends.ConnectionBetweenUsersResponse>}
 */
const methodInfo_Friends_UpdateConnectionBetweenUsers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.friends.ConnectionBetweenUsersResponse,
  /**
   * @param {!proto.kic.friends.UpdateConnectionBetweenUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.friends.ConnectionBetweenUsersResponse.deserializeBinary
);


/**
 * @param {!proto.kic.friends.UpdateConnectionBetweenUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.friends.ConnectionBetweenUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.friends.ConnectionBetweenUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.friends.FriendsClient.prototype.updateConnectionBetweenUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.friends.Friends/UpdateConnectionBetweenUsers',
      request,
      metadata || {},
      methodDescriptor_Friends_UpdateConnectionBetweenUsers,
      callback);
};


/**
 * @param {!proto.kic.friends.UpdateConnectionBetweenUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.friends.ConnectionBetweenUsersResponse>}
 *     Promise that resolves to the response
 */
proto.kic.friends.FriendsPromiseClient.prototype.updateConnectionBetweenUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.friends.Friends/UpdateConnectionBetweenUsers',
      request,
      metadata || {},
      methodDescriptor_Friends_UpdateConnectionBetweenUsers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kic.friends.DeleteConnectionBetweenUsersRequest,
 *   !proto.kic.friends.DeleteConnectionBetweenUsersResponse>}
 */
const methodDescriptor_Friends_DeleteConnectionBetweenUsers = new grpc.web.MethodDescriptor(
  '/kic.friends.Friends/DeleteConnectionBetweenUsers',
  grpc.web.MethodType.UNARY,
  proto.kic.friends.DeleteConnectionBetweenUsersRequest,
  proto.kic.friends.DeleteConnectionBetweenUsersResponse,
  /**
   * @param {!proto.kic.friends.DeleteConnectionBetweenUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.friends.DeleteConnectionBetweenUsersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kic.friends.DeleteConnectionBetweenUsersRequest,
 *   !proto.kic.friends.DeleteConnectionBetweenUsersResponse>}
 */
const methodInfo_Friends_DeleteConnectionBetweenUsers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kic.friends.DeleteConnectionBetweenUsersResponse,
  /**
   * @param {!proto.kic.friends.DeleteConnectionBetweenUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kic.friends.DeleteConnectionBetweenUsersResponse.deserializeBinary
);


/**
 * @param {!proto.kic.friends.DeleteConnectionBetweenUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kic.friends.DeleteConnectionBetweenUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kic.friends.DeleteConnectionBetweenUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kic.friends.FriendsClient.prototype.deleteConnectionBetweenUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kic.friends.Friends/DeleteConnectionBetweenUsers',
      request,
      metadata || {},
      methodDescriptor_Friends_DeleteConnectionBetweenUsers,
      callback);
};


/**
 * @param {!proto.kic.friends.DeleteConnectionBetweenUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kic.friends.DeleteConnectionBetweenUsersResponse>}
 *     Promise that resolves to the response
 */
proto.kic.friends.FriendsPromiseClient.prototype.deleteConnectionBetweenUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kic.friends.Friends/DeleteConnectionBetweenUsers',
      request,
      metadata || {},
      methodDescriptor_Friends_DeleteConnectionBetweenUsers);
};


module.exports = proto.kic.friends;

