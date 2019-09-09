package product

import (
	context "context"
	"log"

	"google.golang.org/grpc"
)

//GetAllProduct allow get products list
func GetAllProduct(conn *grpc.ClientConn) []*Product {
	var products []*Product
	client := NewProductServiceClient(conn)
	defer conn.Close()
	req := &SearchRequest{Q: "Hello", From: 0, To: 10}
	result, err := client.Search(context.Background(), req)
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	products = result.GetData()
	log.Println(result)
	return products
}

//AddProduct add product via grpc
func AddProduct(conn *grpc.ClientConn, product *Product) *CreateResponse {
	client := NewProductServiceClient(conn)
	defer conn.Close()
	result, err := client.AddProduct(context.Background(), product)
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	return result
}
