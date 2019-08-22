package db

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func getClient() *mongo.Client {
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
	// Connect to MongoDB
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}
	// Check the connection
	err = client.Ping(context.TODO(), nil)

	if err != nil {
		log.Fatal(err)
	}

	log.Println("Connected to MongoDB!")
	return client
}

func getCollection(conn *mongo.Client, databaseName string, collectionName string) (*mongo.Collection, context.Context) {
	c := conn.Database(databaseName).Collection(collectionName)
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	return c, ctx
}

//Store is the struct for the mongo connection
type Store struct {
	conn *mongo.Client
}

//NewConnect return store
func NewConnect() *Store {
	conn := getClient()
	return &Store{conn: conn}
}

//GetList retrieve list
func (s Store) GetList() (*mongo.Cursor, int32, string) {
	c, ctx := getCollection(s.conn, "dkrv", "place")
	defer s.conn.Disconnect(ctx)
	opt := options.Find()
	opt.SetLimit(2)
	cur, err := c.Find(ctx, bson.D{{}}, opt)
	if err != nil {
		log.Fatal(err)
		return nil, 500, "DATABASE ERROR: Cannot retrieve documents from database"
	}
	return cur, 200, "none"
}

//Get return entity
func (s Store) Get() (*mongo.SingleResult, int32, string) {
	c, ctx := getCollection(s.conn, "dkrv", "place")
	defer s.conn.Disconnect(ctx)
	filter := bson.M{"_id": "Hello"}
	d := c.FindOne(context.TODO(), filter)
	return d, 200, "none"
}

//Create insert a new document at database
func (s Store) Create(d interface{}) (string, int32, string) {
	c, ctx := getCollection(s.conn, "dkrv", "place")
	defer s.conn.Disconnect(ctx)
	res, err := c.InsertOne(ctx, d)
	if err != nil {
		return "null", 500, "DATABASE ERROR: Cannot insert document to database"
	}
	return res.InsertedID.(primitive.ObjectID).Hex(), 200, "none"
}

//Update update a document
func (s Store) Update(id *bson.D, d *bson.D) *mongo.UpdateResult {
	c, ctx := getCollection(s.conn, "dkrv", "place")
	res, err := c.UpdateOne(ctx, id, d)
	if err != nil {
		log.Fatal(err)
	}
	return res
}

//Delete delete document
func (s Store) Delete(id *bson.D) *mongo.DeleteResult {
	c, ctx := getCollection(s.conn, "dkrv", "place")
	res, err := c.DeleteOne(ctx, id)
	if err != nil {
		log.Fatal(err)
	}
	return res
}
