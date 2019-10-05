package repository

import (
	"context"
	"log"
	"place/gateway"

	"go.mongodb.org/mongo-driver/mongo"
)

//GetProductByQuery return entity
func (s Store) GetProductByQuery(filter *gateway.ProductFilter) (*mongo.Cursor, int32, string) {
	c, ctx, _ := getCollection(s.conn, s.dbName, s.collectionName)
	defer s.conn.Disconnect(ctx)
	p, err := c.Find(context.TODO(), filter)
	if err != nil {
		log.Println(err)
	}
	return p, 200, "none"
}
