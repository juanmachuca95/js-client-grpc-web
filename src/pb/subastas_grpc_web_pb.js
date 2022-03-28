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

const proto = require('./subastas_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ClienteServiceClient =
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
proto.ClienteServicePromiseClient =
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
 *   !proto.ClienteId,
 *   !proto.Cliente>}
 */
const methodDescriptor_ClienteService_GetCliente = new grpc.web.MethodDescriptor(
  '/ClienteService/GetCliente',
  grpc.web.MethodType.UNARY,
  proto.ClienteId,
  proto.Cliente,
  /**
   * @param {!proto.ClienteId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cliente.deserializeBinary
);


/**
 * @param {!proto.ClienteId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cliente)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cliente>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ClienteServiceClient.prototype.getCliente =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ClienteService/GetCliente',
      request,
      metadata || {},
      methodDescriptor_ClienteService_GetCliente,
      callback);
};


/**
 * @param {!proto.ClienteId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cliente>}
 *     Promise that resolves to the response
 */
proto.ClienteServicePromiseClient.prototype.getCliente =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ClienteService/GetCliente',
      request,
      metadata || {},
      methodDescriptor_ClienteService_GetCliente);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ProductoServiceClient =
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
proto.ProductoServicePromiseClient =
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
 *   !proto.CreateProductoReq,
 *   !proto.Producto>}
 */
const methodDescriptor_ProductoService_Create = new grpc.web.MethodDescriptor(
  '/ProductoService/Create',
  grpc.web.MethodType.UNARY,
  proto.CreateProductoReq,
  proto.Producto,
  /**
   * @param {!proto.CreateProductoReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Producto.deserializeBinary
);


/**
 * @param {!proto.CreateProductoReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Producto)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Producto>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProductoServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProductoService/Create',
      request,
      metadata || {},
      methodDescriptor_ProductoService_Create,
      callback);
};


/**
 * @param {!proto.CreateProductoReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Producto>}
 *     Promise that resolves to the response
 */
proto.ProductoServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProductoService/Create',
      request,
      metadata || {},
      methodDescriptor_ProductoService_Create);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.SubastaServiceClient =
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
proto.SubastaServicePromiseClient =
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
 *   !proto.SubastaId,
 *   !proto.Subasta>}
 */
const methodDescriptor_SubastaService_GetSubasta = new grpc.web.MethodDescriptor(
  '/SubastaService/GetSubasta',
  grpc.web.MethodType.UNARY,
  proto.SubastaId,
  proto.Subasta,
  /**
   * @param {!proto.SubastaId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Subasta.deserializeBinary
);


/**
 * @param {!proto.SubastaId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Subasta)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Subasta>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SubastaServiceClient.prototype.getSubasta =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SubastaService/GetSubasta',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetSubasta,
      callback);
};


/**
 * @param {!proto.SubastaId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Subasta>}
 *     Promise that resolves to the response
 */
proto.SubastaServicePromiseClient.prototype.getSubasta =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SubastaService/GetSubasta',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetSubasta);
};


module.exports = proto;

