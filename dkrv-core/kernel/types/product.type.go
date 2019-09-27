package types

import "github.com/graphql-go/graphql"

//RecipeType for Product
var RecipeInput = graphql.NewInputObject(graphql.InputObjectConfig{
	Name: "Recipes",
	Fields: graphql.InputObjectConfigFieldMap{
		"name": &graphql.InputObjectFieldConfig{
			Type: graphql.String,
		},
		"quantity": &graphql.InputObjectFieldConfig{
			Type: graphql.Float,
		},
	},
})

var ProductInput = graphql.NewInputObject(graphql.InputObjectConfig{
	Name: "ProductInput",
	Fields: graphql.InputObjectConfigFieldMap{
		"id": &graphql.InputObjectFieldConfig{
			Type: graphql.String,
		},
		"name": &graphql.InputObjectFieldConfig{
			Type: graphql.String,
		},
		"recipes": &graphql.InputObjectFieldConfig{
			Type: RecipeInput,
		},
	},
})
