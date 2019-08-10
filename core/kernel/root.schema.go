package kernel

import (
	"fmt"

	"github.com/graphql-go/graphql"
	"github.com/graphql-go/handler"
)

//GetGraphQLHandler return entrypoint for graphql
func GetGraphQLHandler() *handler.Handler {
	schemaConfig := graphql.SchemaConfig{
		Query: graphql.NewObject(graphql.ObjectConfig{
			Name:   "RootQuery",
			Fields: GetRootFields(),
		}),
	}

	schema, err := graphql.NewSchema(schemaConfig)

	if err != nil {
		fmt.Println("Failed to create new schema, error: %v", err)
	}

	httpHandler := handler.New(&handler.Config{
		Schema: &schema,
	})
	return httpHandler
}
