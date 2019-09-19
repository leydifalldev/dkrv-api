package product

import (
	"log"
	"os"

	"google.golang.org/grpc"
)

//URL is the grpc esearch address
//var URL = "search-engine:5000"
var producturi = os.Getenv("DKRV_PLACE_PRODUCT")

//ProductGateway is a struct for product gateway
type ProductGateway struct {
	conn   *grpc.ClientConn
	client ProductServiceClient
}

//NewProductGateway return product gateway instance
func NewProductGateway() *ProductGateway {
	conn := GRPCConnect(producturi)
	client := NewProductServiceClient(conn)
	return &ProductGateway{conn: conn, client: client}
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
