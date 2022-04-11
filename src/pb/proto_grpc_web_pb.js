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
 *   !proto.SubastaProductoId,
 *   !proto.SubastaProductoFinish>}
 */
const methodDescriptor_SubastaService_GetWinner = new grpc.web.MethodDescriptor(
  '/SubastaService/GetWinner',
  grpc.web.MethodType.UNARY,
  proto.SubastaProductoId,
  proto.SubastaProductoFinish,
  /**
   * @param {!proto.SubastaProductoId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SubastaProductoFinish.deserializeBinary
);


/**
 * @param {!proto.SubastaProductoId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SubastaProductoFinish)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SubastaProductoFinish>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SubastaServiceClient.prototype.getWinner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SubastaService/GetWinner',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetWinner,
      callback);
};


/**
 * @param {!proto.SubastaProductoId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SubastaProductoFinish>}
 *     Promise that resolves to the response
 */
proto.SubastaServicePromiseClient.prototype.getWinner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SubastaService/GetWinner',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetWinner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SubastaProductoId,
 *   !proto.SubastaOferta>}
 */
const methodDescriptor_SubastaService_GetSubastaOfertaWinner = new grpc.web.MethodDescriptor(
  '/SubastaService/GetSubastaOfertaWinner',
  grpc.web.MethodType.UNARY,
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
 * @param {!proto.SubastaProductoId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SubastaOferta)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SubastaOferta>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SubastaServiceClient.prototype.getSubastaOfertaWinner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SubastaService/GetSubastaOfertaWinner',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetSubastaOfertaWinner,
      callback);
};


/**
 * @param {!proto.SubastaProductoId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SubastaOferta>}
 *     Promise that resolves to the response
 */
proto.SubastaServicePromiseClient.prototype.getSubastaOfertaWinner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SubastaService/GetSubastaOfertaWinner',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetSubastaOfertaWinner);
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
const methodDescriptor_SubastaService_GetSubastaProductoEnSubasta = new grpc.web.MethodDescriptor(
  '/SubastaService/GetSubastaProductoEnSubasta',
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
proto.SubastaServiceClient.prototype.getSubastaProductoEnSubasta =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SubastaService/GetSubastaProductoEnSubasta',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetSubastaProductoEnSubasta,
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
proto.SubastaServicePromiseClient.prototype.getSubastaProductoEnSubasta =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SubastaService/GetSubastaProductoEnSubasta',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetSubastaProductoEnSubasta);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SubastaId,
 *   !proto.SubastaProducto>}
 */
const methodDescriptor_SubastaService_GetSubastaProductoEnEspera = new grpc.web.MethodDescriptor(
  '/SubastaService/GetSubastaProductoEnEspera',
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
proto.SubastaServiceClient.prototype.getSubastaProductoEnEspera =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SubastaService/GetSubastaProductoEnEspera',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetSubastaProductoEnEspera,
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
proto.SubastaServicePromiseClient.prototype.getSubastaProductoEnEspera =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SubastaService/GetSubastaProductoEnEspera',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetSubastaProductoEnEspera);
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
 *   !proto.SubastaOfertaCreate,
 *   !proto.Empty>}
 */
const methodDescriptor_SubastaService_AddSubastaOferta = new grpc.web.MethodDescriptor(
  '/SubastaService/AddSubastaOferta',
  grpc.web.MethodType.UNARY,
  proto.SubastaOfertaCreate,
  proto.Empty,
  /**
   * @param {!proto.SubastaOfertaCreate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Empty.deserializeBinary
);


/**
 * @param {!proto.SubastaOfertaCreate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SubastaServiceClient.prototype.addSubastaOferta =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SubastaService/AddSubastaOferta',
      request,
      metadata || {},
      methodDescriptor_SubastaService_AddSubastaOferta,
      callback);
};


/**
 * @param {!proto.SubastaOfertaCreate} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Empty>}
 *     Promise that resolves to the response
 */
proto.SubastaServicePromiseClient.prototype.addSubastaOferta =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SubastaService/AddSubastaOferta',
      request,
      metadata || {},
      methodDescriptor_SubastaService_AddSubastaOferta);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SubastaProductoId,
 *   !proto.Empty>}
 */
const methodDescriptor_SubastaService_SetProductoEnSubasta = new grpc.web.MethodDescriptor(
  '/SubastaService/SetProductoEnSubasta',
  grpc.web.MethodType.UNARY,
  proto.SubastaProductoId,
  proto.Empty,
  /**
   * @param {!proto.SubastaProductoId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Empty.deserializeBinary
);


/**
 * @param {!proto.SubastaProductoId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SubastaServiceClient.prototype.setProductoEnSubasta =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SubastaService/SetProductoEnSubasta',
      request,
      metadata || {},
      methodDescriptor_SubastaService_SetProductoEnSubasta,
      callback);
};


/**
 * @param {!proto.SubastaProductoId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Empty>}
 *     Promise that resolves to the response
 */
proto.SubastaServicePromiseClient.prototype.setProductoEnSubasta =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SubastaService/SetProductoEnSubasta',
      request,
      metadata || {},
      methodDescriptor_SubastaService_SetProductoEnSubasta);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SubastaProductoId,
 *   !proto.Empty>}
 */
const methodDescriptor_SubastaService_SetProductoSubastado = new grpc.web.MethodDescriptor(
  '/SubastaService/SetProductoSubastado',
  grpc.web.MethodType.UNARY,
  proto.SubastaProductoId,
  proto.Empty,
  /**
   * @param {!proto.SubastaProductoId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Empty.deserializeBinary
);


/**
 * @param {!proto.SubastaProductoId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SubastaServiceClient.prototype.setProductoSubastado =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SubastaService/SetProductoSubastado',
      request,
      metadata || {},
      methodDescriptor_SubastaService_SetProductoSubastado,
      callback);
};


/**
 * @param {!proto.SubastaProductoId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Empty>}
 *     Promise that resolves to the response
 */
proto.SubastaServicePromiseClient.prototype.setProductoSubastado =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SubastaService/SetProductoSubastado',
      request,
      metadata || {},
      methodDescriptor_SubastaService_SetProductoSubastado);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SubastaProductoId,
 *   !proto.SubastaOferta>}
 */
const methodDescriptor_SubastaService_GetStreamSubastaOfertas = new grpc.web.MethodDescriptor(
  '/SubastaService/GetStreamSubastaOfertas',
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
proto.SubastaServiceClient.prototype.getStreamSubastaOfertas =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/SubastaService/GetStreamSubastaOfertas',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetStreamSubastaOfertas);
};


/**
 * @param {!proto.SubastaProductoId} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.SubastaOferta>}
 *     The XHR Node Readable Stream
 */
proto.SubastaServicePromiseClient.prototype.getStreamSubastaOfertas =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/SubastaService/GetStreamSubastaOfertas',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetStreamSubastaOfertas);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SubastaProductoId,
 *   !proto.SubastaOferta>}
 */
const methodDescriptor_SubastaService_GetStreamSubastaOfertaWinner = new grpc.web.MethodDescriptor(
  '/SubastaService/GetStreamSubastaOfertaWinner',
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
proto.SubastaServiceClient.prototype.getStreamSubastaOfertaWinner =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/SubastaService/GetStreamSubastaOfertaWinner',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetStreamSubastaOfertaWinner);
};


/**
 * @param {!proto.SubastaProductoId} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.SubastaOferta>}
 *     The XHR Node Readable Stream
 */
proto.SubastaServicePromiseClient.prototype.getStreamSubastaOfertaWinner =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/SubastaService/GetStreamSubastaOfertaWinner',
      request,
      metadata || {},
      methodDescriptor_SubastaService_GetStreamSubastaOfertaWinner);
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


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.LoginServiceClient =
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
proto.LoginServicePromiseClient =
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
 *   !proto.LoginRequest,
 *   !proto.LoginResponse>}
 */
const methodDescriptor_LoginService_Login = new grpc.web.MethodDescriptor(
  '/LoginService/Login',
  grpc.web.MethodType.UNARY,
  proto.LoginRequest,
  proto.LoginResponse,
  /**
   * @param {!proto.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.LoginServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/LoginService/Login',
      request,
      metadata || {},
      methodDescriptor_LoginService_Login,
      callback);
};


/**
 * @param {!proto.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.LoginServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/LoginService/Login',
      request,
      metadata || {},
      methodDescriptor_LoginService_Login);
};


module.exports = proto;

