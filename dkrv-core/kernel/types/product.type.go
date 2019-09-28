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

var RecipeType = graphql.NewObject(graphql.ObjectConfig{
	Name: "Recipe",
	Fields: graphql.Fields{
		"name": &graphql.Field{
			Type: graphql.NewNonNull(graphql.Int),
		},
		"quantity": &graphql.Field{
			Type: graphql.String,
		},
	},
})

var ProductInput = graphql.NewInputObject(graphql.InputObjectConfig{
	Name: "ProductInput",
	Fields: graphql.InputObjectConfigFieldMap{
		"name": &graphql.InputObjectFieldConfig{
			Type: graphql.String,
		},
		"recipes": &graphql.InputObjectFieldConfig{
			Type: graphql.NewNonNull(RecipeInput),
		},
	},
})

var ProductType = graphql.NewObject(graphql.ObjectConfig{
	Name: "Product",
	Fields: graphql.Fields{
		"id": &graphql.Field{
			Type: graphql.String,
		},
		"name": &graphql.Field{
			Type: graphql.String,
		},
		"recipes": &graphql.Field{
			Type: graphql.NewList(RecipeType),
		},
	},
})
