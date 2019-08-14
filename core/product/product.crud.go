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
	req := &SearchRequest{Q: "Hello", From: 0, To: 10}
	result, _ := client.Search(context.Background(), req)
	products = result.GetData()
	log.Println(result)
	return products
}

//AddProduct add product via grpc
func AddProduct(conn *grpc.ClientConn, product *Product) *CreateResponse {
	client := NewProductServiceClient(conn)
	result, _ := client.AddProduct(context.Background(), product)
	return result
}
