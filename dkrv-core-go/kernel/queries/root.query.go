package queries

import (
	"github.com/graphql-go/graphql"
)

//GetRootFields return graphql query root
func GetRootFields() graphql.Fields {
	return graphql.Fields{
		"products": GetProductFields(),
	}
}
