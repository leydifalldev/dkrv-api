package product

import (
	"log"

	"google.golang.org/grpc"
)

//URL is the grpc esearch address
var URL = "search-engine:5000"

//StartGRPCService is the function for starting grpc service
func StartGRPCService(uri string) {
	conn := GRPCConnect(uri)
	defer conn.Close()
}

//GRPCConnect is the grpc client for search engine
func GRPCConnect(uri string) *grpc.ClientConn {
	conn, err := grpc.Dial(uri, grpc.WithInsecure())
	if err != nil {
		log.Fatal(err)
	}
	log.Println("gRPC ready to work")
	return conn
}
