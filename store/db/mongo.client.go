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

func getCollection(conn *mongo.Client, databaseName string, collectionName string) (*mongo.Collection, context.Context, context.CancelFunc) {
	c := conn.Database(databaseName).Collection(collectionName)
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	return c, ctx, cancel
}

//Store is the struct for the mongo connection
type Store struct {
	conn           *mongo.Client
	dbName         string
	collectionName string
}

//NewConnect return store
func NewConnect(dbName string, collectionName string) *Store {
	conn := getClient()
	return &Store{conn: conn, dbName: dbName, collectionName: collectionName}
}

//GetList retrieve list
func (s Store) GetList() (*mongo.Cursor, int32, string) {
	c, ctx, _ := getCollection(s.conn, s.dbName, s.collectionName)
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
	c, ctx, _ := getCollection(s.conn, s.dbName, s.collectionName)
	defer s.conn.Disconnect(ctx)
	filter := bson.M{"_id": "Hello"}
	d := c.FindOne(context.TODO(), filter)
	return d, 200, "none"
}

//Create insert a new document at database
func (s Store) Create(d interface{}) (string, int32, string) {
	c, ctx, _ := getCollection(s.conn, s.dbName, s.collectionName)
	defer s.conn.Disconnect(ctx)
	res, err := c.InsertOne(ctx, d)
	if err != nil {
		return "null", 500, "DATABASE ERROR: Cannot insert document to database"
	}
	return res.InsertedID.(primitive.ObjectID).Hex(), 200, "none"
}

//Update update a document
func (s Store) Update(id bson.D, d interface{}) (*mongo.UpdateResult, int32, string) {
	upd := bson.D{
		{
			"$inc", bson.D{
				d,
			},
		},
	}
	c, ctx, _ := getCollection(s.conn, s.dbName, s.collectionName)
	res, err := c.UpdateOne(ctx, id, d)
	if err != nil {
		log.Fatal(err)
		return res, 500, "DATABASE ERROR: Cannot update document"
	}
	return res, 200, "none"
}

//Delete delete document
func (s Store) Delete(id *bson.D) *mongo.DeleteResult {
	c, ctx, _ := getCollection(s.conn, s.dbName, s.collectionName)
	res, err := c.DeleteOne(ctx, id)
	if err != nil {
		log.Fatal(err)
	}
	return res
}
