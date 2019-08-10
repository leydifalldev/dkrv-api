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
	result, _ := client.GetAll(context.Background(), &RequestEmpty{})
	products = result.GetProducts()
	log.Println(result)
	return products
}

//AddProduct add product via grpc
func AddProduct(conn *grpc.ClientConn, *Product) *Product {
	client := NewProductServiceClient(conn)
	result, _ := client.GetAll(context.Background(), &RequestEmpty{})
}
