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


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.Subastas>}
 */
const methodDescriptor_SubastaService_GetSubastas = new grpc.web.MethodDescriptor(
  '/SubastaService/GetSubastas',
  grpc.web.MethodType.UNARY,
  proto.Empty,
  proto.Subastas,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Subastas.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Subastas)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Subastas>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SubastaServiceClient.prototype.getSubastas =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SubastaService/GetSubastas',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetSubastas,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Subastas>}
 *     Promise that resolves to the response
 */
proto.SubastaServicePromiseClient.prototype.getSubastas =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SubastaService/GetSubastas',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetSubastas);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SubastaId,
 *   !proto.SubastaProducto>}
 */
const methodDescriptor_SubastaService_GetSubastaProducto = new grpc.web.MethodDescriptor(
  '/SubastaService/GetSubastaProducto',
  grpc.web.MethodType.UNARY,
  proto.SubastaId,
  proto.SubastaProducto,
  /**
   * @param {!proto.SubastaId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SubastaProducto.deserializeBinary
);


/**
 * @param {!proto.SubastaId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SubastaProducto)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SubastaProducto>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SubastaServiceClient.prototype.getSubastaProducto =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SubastaService/GetSubastaProducto',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetSubastaProducto,
      callback);
};


/**
 * @param {!proto.SubastaId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SubastaProducto>}
 *     Promise that resolves to the response
 */
proto.SubastaServicePromiseClient.prototype.getSubastaProducto =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SubastaService/GetSubastaProducto',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetSubastaProducto);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SubastaId,
 *   !proto.SubastaProductos>}
 */
const methodDescriptor_SubastaService_GetSubastaProductos = new grpc.web.MethodDescriptor(
  '/SubastaService/GetSubastaProductos',
  grpc.web.MethodType.UNARY,
  proto.SubastaId,
  proto.SubastaProductos,
  /**
   * @param {!proto.SubastaId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SubastaProductos.deserializeBinary
);


/**
 * @param {!proto.SubastaId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SubastaProductos)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SubastaProductos>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SubastaServiceClient.prototype.getSubastaProductos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SubastaService/GetSubastaProductos',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetSubastaProductos,
      callback);
};


/**
 * @param {!proto.SubastaId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SubastaProductos>}
 *     Promise that resolves to the response
 */
proto.SubastaServicePromiseClient.prototype.getSubastaProductos =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SubastaService/GetSubastaProductos',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetSubastaProductos);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SubastaProductoId,
 *   !proto.SubastaOferta>}
 */
const methodDescriptor_SubastaService_GetSubastaOfertas = new grpc.web.MethodDescriptor(
  '/SubastaService/GetSubastaOfertas',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.SubastaProductoId,
  proto.SubastaOferta,
  /**
   * @param {!proto.SubastaProductoId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SubastaOferta.deserializeBinary
);


/**
 * @param {!proto.SubastaProductoId} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.SubastaOferta>}
 *     The XHR Node Readable Stream
 */
proto.SubastaServiceClient.prototype.getSubastaOfertas =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/SubastaService/GetSubastaOfertas',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetSubastaOfertas);
};


/**
 * @param {!proto.SubastaProductoId} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.SubastaOferta>}
 *     The XHR Node Readable Stream
 */
proto.SubastaServicePromiseClient.prototype.getSubastaOfertas =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/SubastaService/GetSubastaOfertas',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetSubastaOfertas);
};


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
 *   !proto.ProductoId,
 *   !proto.Producto>}
 */
const methodDescriptor_ProductoService_GetProducto = new grpc.web.MethodDescriptor(
  '/ProductoService/GetProducto',
  grpc.web.MethodType.UNARY,
  proto.ProductoId,
  proto.Producto,
  /**
   * @param {!proto.ProductoId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Producto.deserializeBinary
);


/**
 * @param {!proto.ProductoId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Producto)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Producto>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProductoServiceClient.prototype.getProducto =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProductoService/GetProducto',
      request,
      metadata || {},
      methodDescriptor_ProductoService_GetProducto,
      callback);
};


/**
 * @param {!proto.ProductoId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Producto>}
 *     Promise that resolves to the response
 */
proto.ProductoServicePromiseClient.prototype.getProducto =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProductoService/GetProducto',
      request,
      metadata || {},
      methodDescriptor_ProductoService_GetProducto);
};


module.exports = proto;

