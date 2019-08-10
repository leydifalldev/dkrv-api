echo 'OK =========> Copying product proto'
cp -R ./config/protos/product.proto ./core/product
echo 'OK =========> finish copy product proto to dkrv core'
cp -R ./config/protos/product.proto ./search-engine/src/product/product.proto
echo 'OK =========> finish copy product proto to search-engine'
protoc --proto_path=./core/product \
       --go_out=plugins=grpc:./core/product ./core/product/product.proto
echo 'OK =========> generate protobuf to core'