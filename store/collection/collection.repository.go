package collection

import (
	context "context"
	"log"
	"reflect"
	"store/mongo"
	"strings"

	"go.mongodb.org/mongo-driver/bson"
)

//GetList return List of info
func (s *Server) GetList(ctx context.Context, req *Empty) (*ListResponse, error) {
	var data []*CollectionPayload
	var cpt int64
	c := mongo.GetRepository("dkrv", "place")
	cur, status, err := c.GetList()
	defer cur.Close(ctx)
	cpt = 0
	for cur.Next(context.TODO()) {
		cpt++
		var p CollectionPayload
		err := cur.Decode(&p)
		if err != nil {
			log.Fatal(err)
		}

		data = append(data, &p)
	}
	return &ListResponse{
		Status: status,
		Error:  err,
		Total:  cpt,
		Data:   data,
	}, nil
}

//Get return List of info
func (s *Server) Get(ctx context.Context, req *ID) (*DetailResponse, error) {
	c := mongo.GetRepository("dkrv", "place")
	var p *CollectionPayload
	cur, status, err := c.Get(req.GetId())
	derr := cur.Decode(&p)
	if derr != nil {
		//log.Fatal(derr)
		log.Println(derr)
		status = 404
		err = "DATABASE ERROR: Cannot get document from database"
	}
	return &DetailResponse{
		Status: status,
		Error:  err,
		Data:   p,
	}, nil
}

//Add allows to add info
func (s *Server) Add(ctx context.Context, req *CollectionPayload) (*CreateResponse, error) {
	c := mongo.GetRepository("dkrv", "place")
	collection := 
	id, status, err := c.Create(req)
	return &CreateResponse{
		Status: status,
		Error:  err,
		Id:     id,
	}, nil
}

func empty(v reflect.Value) bool {
	switch v.Kind() {
	case reflect.Int, reflect.Int8, reflect.Int16, reflect.Int32, reflect.Int64:
		return v.Int() == 0
	case reflect.Uint, reflect.Uint8, reflect.Uint16, reflect.Uint32, reflect.Uint64:
		return v.Uint() == 0
	case reflect.String:
		return v.String() == ""
	case reflect.Ptr, reflect.Slice, reflect.Map, reflect.Interface, reflect.Chan:
		return v.IsNil()
	case reflect.Bool:
		return !v.Bool()
	}
	return false
}

//Update allow to update
func (s *Server) Update(ctx context.Context, req *UpdateRequest) (*UpdateResponse, error) {
	c := mongo.GetRepository("dkrv", "place")
	log.Println("req.Payload")
	log.Println(req.Payload)
	input := reflect.ValueOf(req.Payload)
	if input.Kind() == reflect.Ptr {
		input = input.Elem()
	}
	values := make([]bson.E, input.NumField())
	for i := 0; i < input.NumField(); i++ {
		log.Println("input.Field(i).Interface()")
		log.Println(input.Field(i).Interface())
		values[i] = bson.E{
			Key: strings.ToLower(input.Type().Field(i).Name), Value: input.Field(i).Interface(),
		}
	}

	log.Println(values)

	update := bson.D{
		{"$set", values},
	}
	id, status, _ := c.Update(req.GetId(), update)
	if id != nil {
		log.Println("Hello")
	}
	return &UpdateResponse{
		Status: status,
		Error:  "null",
		Id:     "done",
	}, nil
}

//Delete allow to delete
func (s *Server) Delete(ctx context.Context, req *ID) (*DeleteResponse, error) {
	return &DeleteResponse{
		Status: 200,
		Error:  "null",
		Id:     "XXXXXXXXX",
	}, nil
}
