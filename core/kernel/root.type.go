package kernel

import (
	"core/product"

	"github.com/graphql-go/graphql"
)

//GetRootQuery return graphql query root
func GetRootQuery() *graphql.Object {
	rootQuery := graphql.NewObject(graphql.ObjectConfig{
		Name: "Query",
		Fields: graphql.Fields{
			"products": &graphql.Field{
				Type: graphql.NewList(product.ProductType),
				Resolve: func(params graphql.ResolveParams) (interface{}, error) {
					return nil, nil
				},
			},
		},
	})

	return rootQuery
}
