package se

import (
	context "context"
	"log"

	"google.golang.org/grpc"
)

//URL is the grpc esearch address
//var URL = "search-engine:5000"
var uri = "0.0.0.0:5000"

//StartGRPCService is the function for starting grpc service
func StartGRPCService(uri string) {
	conn := GRPCConnect(uri)
	defer conn.Close()
}

//SEClient define the search-engine struct
type SEClient struct {
	conn *grpc.ClientConn
}

//NewESClient return SEClient
func NewESClient() *SEClient {
	conn := GRPCConnect(uri)
	return &SEClient{conn: conn}
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

//InsertProduct insert data to search-engine
func (se *SEClient) InsertProduct(product *Product) *CreateResponse {
	client := NewProductServiceClient(se.conn)
	defer se.conn.Close()
	req := &CreateRequest{
		Payload: product,
	}
	result, err := client.AddProduct(context.Background(), req)
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	return result
}
