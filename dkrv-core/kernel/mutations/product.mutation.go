package mutations

import (
	"core/gateway/product"
	"core/kernel/types"
	"encoding/json"
	"log"

	"github.com/graphql-go/graphql"
)

// CreateProductMutation creates a new user and returns it.
func CreateProductMutation() *graphql.Object {
	return graphql.NewObject(graphql.ObjectConfig{
		Name: "Product",
		Fields: graphql.Fields{
			"id": &graphql.Field{
				Type: graphql.NewNonNull(graphql.String),
			},
			"name": &graphql.Field{
				Type: graphql.String,
			},
			"recipes": &graphql.Field{
				Type: graphql.NewList(types.RecipeType),
				Resolve: func(p graphql.ResolveParams) (interface{}, error) {
					newProduct, _ := p.Source.(*product.Product)
					log.Printf("fetching comments of post with id: %d", newProduct.Id)
					gateway := product.NewProductGateway()
					resp := gateway.AddProduct(newProduct)
					return json.Marshal(resp)
				},
			},
		},
	})
}
