echo 'OK =========> Copying product proto'
cp -R ./product.proto ../product
echo 'OK =========> finish copy product proto to dkrv core'
cp -R ./product.proto ../../search-engine/src/product/product.proto
echo 'OK =========> finish copy place proto to dkrv-place'
cp -R ./place.proto ../../dkrv-place/place/place.proto
echo 'OK =========> finish copy place proto to dkrv-place'
protoc --proto_path=../../dkrv-place/place --proto_path=third_party \
       --go_out=plugins=grpc:../../dkrv-place/place ../../dkrv-place/place/place.proto
echo 'OK =========> finish copy place proto to search-engine'
protoc --proto_path=../product --proto_path=third_party \
       --go_out=plugins=grpc:../product ../product/product.proto

echo 'OK =========> start coping event proto to event folder'
cp -R ./dkrv-place/place.product.proto ../../dkrv-place/product/product.proto
echo 'OK =========> start generating event proto code for event.store'
protoc --proto_path=../../dkrv-place/product --proto_path=third_party \
       --go_out=plugins=grpc:../../dkrv-place/product ../../dkrv-place/product/product.proto
protoc-go-inject-tag -XXX_skip=bson -input=./../../dkrv-place/product/product.pb.go

echo 'OK =========> start coping collection proto to collection folder'
cp -R ./collection.proto ../../dkrv-place/collection/collection.proto
echo 'OK =========> start generating collection proto code for collection.store'
protoc --proto_path=../../dkrv-place/collection --proto_path=third_party \
       --go_out=plugins=grpc:../../dkrv-place/collection ../../dkrv-place/collection/collection.proto
echo 'OK =========> start coping event proto to event folder'
cp -R ./event.proto ../../dkrv-place/event/event.proto
echo 'OK =========> start generating event proto code for event.store'
protoc --proto_path=../../dkrv-place/event --proto_path=third_party \
       --go_out=plugins=grpc:../../dkrv-place/event ../../dkrv-place/event/event.proto
protoc-go-inject-tag -XXX_skip=bson -input=./../../dkrv-place/event/event.pb.go
