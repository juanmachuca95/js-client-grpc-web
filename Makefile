gentest:
	protoc -I=src/protos proto.proto \
    --js_out=import_style=commonjs:src/pb \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/pb
gen:
	protoc -I=src/protos subastas.proto \
    --js_out=import_style=commonjs:src/pb \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/pb
clean:
	rm -rf src/pb/*