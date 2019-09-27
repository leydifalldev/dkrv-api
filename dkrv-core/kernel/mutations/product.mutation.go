package mutations

import (
	"core/gateway/product"
	"core/kernel/types"
	"log"

	"github.com/graphql-go/graphql"
)

// CreateProductMutation creates a new user and returns it.
func CreateProductMutation() *graphql.Field {
	return &graphql.Field{
		Type: types.ProductInput,
		Args: graphql.FieldConfigArgument{
			"id": &graphql.ArgumentConfig{
				Type: graphql.NewNonNull(graphql.String),
			},
			"name": &graphql.ArgumentConfig{
				Type: graphql.NewNonNull(graphql.String),
			},
			"recipes": &graphql.ArgumentConfig{
				Type: graphql.NewList(graphql.String),
			},
		},
		Resolve: func(params graphql.ResolveParams) (interface{}, error) {
			product := &product.Product{
				Id:   params.Args["id"].(string),
				Name: params.Args["name"].(string),
			}

			log.Println(params.Args["recipes"].([]interface{}))

			// Add your user in database here

			return product, nil
		},
	}
}
