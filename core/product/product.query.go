package product

import (
	"log"

	graphql "github.com/graphql-go/graphql"
)

//GetProductQuery return product Field
func GetProductQuery() *graphql.Field {
	return &graphql.Field{
		Type: graphql.NewList(ProductType),
		Resolve: func(params graphql.ResolveParams) (interface{}, error) {
			conn := GRPCConnect(URL)
			result := GetAllProduct(conn)
			log.Println(result)
			return result, nil
		},
	}
}
