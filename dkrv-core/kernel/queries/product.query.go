package queries

import (
	"core/gateway/product"
	"core/kernel/types"

	graphql "github.com/graphql-go/graphql"
)

//GetProductFields return product Field
func GetProductFields() *graphql.Field {
	return &graphql.Field{
		Type: graphql.NewList(types.ProductType),
		Resolve: func(params graphql.ResolveParams) (interface{}, error) {
			gateway := product.NewProductGateway()
			products := gateway.GetAllProducts()
			return products, nil
		},
	}
}
