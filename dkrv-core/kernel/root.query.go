package kernel

import (
	product "core/product"

	graphql "github.com/graphql-go/graphql"
)

//GetRootFields return field
func GetRootFields() graphql.Fields {
	return graphql.Fields{
		"product": product.GetProductQuery(),
	}
}
