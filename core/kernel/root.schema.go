package kernel

import (
	"log"

	"github.com/graphql-go/graphql"
	"github.com/graphql-go/handler"
)

//GetGraphQLHandler return entrypoint for graphql
func GetGraphQLHandler() *handler.Handler {
	log.Println("GetGraphQLHandler")
	schemaConfig := graphql.SchemaConfig{
		Query: graphql.NewObject(graphql.ObjectConfig{
			Name:   "RootQuery",
			Fields: GetRootFields(),
		}),
	}

	schema, err := graphql.NewSchema(schemaConfig)

	if err != nil {
		log.Println("Failed to create new schema, error: %v", err)
	}

	httpHandler := handler.New(&handler.Config{
		Schema: &schema,
	})
	return httpHandler
}
