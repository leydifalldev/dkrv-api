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

echo 'OK =========> start coping collection proto to collection folder'
cp -R ./config/protos/collection.proto ./store/collection/collection.proto
echo 'OK =========> start generating collection proto code for collection.store'
protoc --proto_path=./store/collection \
       --go_out=plugins=grpc:./store/collection ./store/collection/collection.proto

echo 'OK =========> start coping event proto to event folder'
cp -R ./config/protos/event.proto ./dkrv-event/event/event.proto
echo 'OK =========> start generating event proto code for event.store'
protoc --proto_path=./dkrv-event/event \
       --go_out=plugins=grpc:./dkrv-event/event ./dkrv-event/event/event.proto