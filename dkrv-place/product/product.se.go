package product

import (
	context "context"
	"log"
	"os"
	"place/gateway"

	"google.golang.org/grpc"
)

//URL is the grpc esearch address
//var URL = "search-engine:5000"
var esuri = os.Getenv("SEARCH_ENGINE")

//StartGRPCService is the function for starting grpc service
func StartGRPCService(uri string) {
	conn := GRPCConnect(uri)
	defer conn.Close()
}

//SEClient define the search-engine struct
type SEClient struct {
	conn   *grpc.ClientConn
	client gateway.SearchEngineClient
}

//NewESClient return SEClient
func NewESClient() *SEClient {
	conn := GRPCConnect(esuri)
	client := gateway.NewSearchEngineClient(conn)
	return &SEClient{conn: conn, client: client}
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
func (se *SEClient) InsertProduct(product *gateway.Product) *gateway.ProductCreateResponse {
	defer se.conn.Close()
	req := &gateway.ProductCreateRequest{
		Product: product,
	}
	result, err := se.client.AddProduct(context.Background(), req)
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	log.Println("Insert result", result)
	return result
}
