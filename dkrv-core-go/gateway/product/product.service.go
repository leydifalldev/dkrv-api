package product

import (
	context "context"
	"log"
)

//GetAllProducts allow get products list
func (pg ProductGateway) GetAllProducts() []*Product {
	var products []*Product
	defer pg.conn.Close()
	req := &SearchParams{Q: "Hello", From: 0, To: 10}
	result, err := pg.client.Search(context.Background(), req)
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	products = result.GetPayload()
	return products
}

//AddProduct add product via grpc
func (pg ProductGateway) AddProduct(product *Product) *CreateResponse {
	defer pg.conn.Close()
	req := &CreateRequest{Payload: product}
	result, err := pg.client.Add(context.Background(), req)
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	return result
}
