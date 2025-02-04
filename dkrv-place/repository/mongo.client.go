package repository

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func getClient() *mongo.Client {
	uri := fmt.Sprintf("%s%s", "mongodb://", os.Getenv("DKRV_MONGO"))
	log.Println(uri)
	clientOptions := options.Client().ApplyURI(uri)
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

//GetRepository return store
func GetRepository(dbName string, collectionName string) *Store {
	conn := getClient()
	return &Store{conn: conn, dbName: dbName, collectionName: collectionName}
}

//GetList retrieve list
func (s Store) GetList() (*mongo.Cursor, int32, string) {
	c, ctx, _ := getCollection(s.conn, s.dbName, s.collectionName)
	defer s.conn.Disconnect(ctx)
	opt := options.Find()
	//opt.SetLimit(2)
	cur, err := c.Find(ctx, bson.D{{}}, opt)
	if err != nil {
		log.Fatal(err)
		return nil, 500, "DATABASE ERROR: Cannot retrieve documents from database"
	}
	return cur, 200, "none"
}

//Get return entity
func (s Store) Get(id string) (*mongo.SingleResult, int32, string) {
	c, ctx, _ := getCollection(s.conn, s.dbName, s.collectionName)
	defer s.conn.Disconnect(ctx)
	filter := bson.M{"id": id}
	d := c.FindOne(context.TODO(), filter)
	return d, 200, "none"
}

//Create insert a new document at database
func (s Store) Create(d interface{}) (bool, int32, string) {
	c, ctx, _ := getCollection(s.conn, s.dbName, s.collectionName)
	defer s.conn.Disconnect(ctx)
	res, err := c.InsertOne(ctx, d)
	log.Printf("New Item on database ====> %s", res)
	if err != nil {
		return false, 500, "DATABASE ERROR: Cannot insert document to database"
	}
	return true, 200, "none"
}

//Update update a document
func (s Store) Update(id string, content bson.D) (bool, int32, string) {
	c, ctx, _ := getCollection(s.conn, s.dbName, s.collectionName)
	res, err := c.UpdateOne(ctx, bson.D{{Key: "id", Value: id}}, content)
	if err != nil {
		log.Fatal(err)
		return false, 500, "DATABASE ERROR: Cannot update document"
	}
	log.Println(res)
	return (res.ModifiedCount > 0), 200, "none"
}

//Delete delete document
func (s Store) Delete(id string) (bool, int32, string) {
	c, ctx, _ := getCollection(s.conn, s.dbName, s.collectionName)
	res, err := c.DeleteOne(ctx, bson.M{"id": id})
	if err != nil {
		log.Fatal(err)
		return false, 500, "Can not delete document"
	}
	return (res.DeletedCount > 0), 200, "none"
}
