package product

import (
	"github.com/graphql-go/graphql"
)

//ProductType for Product
var ProductType = graphql.NewObject(graphql.ObjectConfig{
	Name: "Product",
	Fields: graphql.Fields{
		"name":         &graphql.Field{Type: graphql.String},
		"place_logo":   &graphql.Field{Type: graphql.String},
		"type":         &graphql.Field{Type: graphql.String},
		"description":  &graphql.Field{Type: graphql.String},
		"category":     &graphql.Field{Type: graphql.String},
		"price":        &graphql.Field{Type: graphql.Float},
		"main_picture": &graphql.Field{Type: graphql.Int},
		"discount":     &graphql.Field{Type: graphql.Float},
		"address":      &graphql.Field{Type: graphql.String},
		"cpc":          &graphql.Field{Type: graphql.String},
		"phone":        &graphql.Field{Type: graphql.String},
		"cooking_time": &graphql.Field{Type: graphql.String},
		"like":         &graphql.Field{Type: graphql.Int},
		"notation":     &graphql.Field{Type: graphql.Int},
		"place_name":   &graphql.Field{Type: graphql.String},
		"place_ref":    &graphql.Field{Type: graphql.String},
		"size":         &graphql.Field{Type: graphql.String},
		"quantity":     &graphql.Field{Type: graphql.Int},
		"spicy_level":  &graphql.Field{Type: graphql.Int},
	},
})
