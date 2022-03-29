/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./proto_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.HolaServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.HolaServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 *   !proto.HolaRequest,
 *   !proto.HolaResponse>}
 */
const methodDescriptor_HolaService_Hola = new grpc.web.MethodDescriptor(
  '/HolaService/Hola',
  grpc.web.MethodType.UNARY,
  proto.HolaRequest,
  proto.HolaResponse,
  /**
   * @param {!proto.HolaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.HolaResponse.deserializeBinary
);


/**
 * @param {!proto.HolaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.HolaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.HolaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.HolaServiceClient.prototype.hola =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/HolaService/Hola',
      request,
      metadata || {},
      methodDescriptor_HolaService_Hola,
      callback);
};


/**
 * @param {!proto.HolaRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.HolaResponse>}
 *     Promise that resolves to the response
 */
proto.HolaServicePromiseClient.prototype.hola =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/HolaService/Hola',
      request,
      metadata || {},
      methodDescriptor_HolaService_Hola);
};


module.exports = proto;

