echo 'OK =========> Copying product proto'
cp -R ./config/protos/product.proto ./core/product
echo 'OK =========> finish copy product proto to dkrv core'
cp -R ./config/protos/product.proto ./search-engine/src/product/product.proto
echo 'OK =========> finish copy product proto to search-engine'
cp -R ./config/protos/place.proto ./search-engine/src/place/place.proto
echo 'OK =========> finish copy place proto to search-engine'
protoc --proto_path=./core/product \
       --go_out=plugins=grpc:./core/product ./core/product/product.proto
echo 'OK =========> generate protobuf to core'

echo 'OK =========> start coping place-info proto to place-info folder'
cp -R ./config/protos/place.store.proto ./store/place/place.store.proto
echo 'OK =========> start generating place.store proto code for place.store'
protoc --proto_path=./store/place \
       --go_out=plugins=grpc:./store/place ./store/place/place.store.proto
