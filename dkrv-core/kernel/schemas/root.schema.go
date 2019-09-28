package schemas

import (
	"core/kernel/queries"
	"core/kernel/types"
	"encoding/json"
	"log"

	"github.com/graphql-go/graphql"
	"github.com/graphql-go/handler"
)

//Recipes is a struct
type Recipes struct {
	Name     string `json:"name"`
	Quantity int16  `json:"quantity"`
}

//Product is a struct
type Product struct {
	Name    string  `json:"name"`
	Recipes Recipes `json:"recipes"`
}

//GetGraphQLHandler return entrypoint for graphql
func GetGraphQLHandler() *handler.Handler {
	log.Println("GetGraphQLHandler")
	rootMutation := graphql.NewObject(graphql.ObjectConfig{
		Name: "RootMutation",
		Fields: graphql.Fields{
			"createProduct": &graphql.Field{
				Type: types.ProductType,
				Args: graphql.FieldConfigArgument{
					"name": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"recipes": &graphql.ArgumentConfig{
						Type: types.RecipeType,
					},
				},
				Resolve: func(p graphql.ResolveParams) (interface{}, error) {
					newProduct, _ := p.Source.(*Product)
					log.Println(newProduct)
					pstr, _ := json.Marshal(newProduct)
					log.Println(string(pstr))
					//gateway := product.NewProductGateway()
					//resp := gateway.AddProduct(&newProduct)
					//log.Println(resp)
					//return json.Marshal(resp)
					return json.Marshal(p)
				},
			},
		},
	})

	schemaConfig := graphql.SchemaConfig{
		Query: graphql.NewObject(graphql.ObjectConfig{
			Name:   "RootQuery",
			Fields: queries.GetRootFields(),
		}),
		Mutation: rootMutation,
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
