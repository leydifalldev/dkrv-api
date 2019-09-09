package collection

import (
	context "context"
	"log"
	"store/mongo"

	"go.mongodb.org/mongo-driver/bson"
)

//GetList return List of info
func (s *Server) GetList(ctx context.Context, req *Empty) (*ListResponse, error) {
	var data []*Collection
	var cpt int64
	c := mongo.GetRepository("dkrv", "place")
	cur, status, err := c.GetList()
	defer cur.Close(ctx)
	cpt = 0
	for cur.Next(context.TODO()) {
		cpt++
		var p Collection
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
	var p *Collection
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
func (s *Server) Add(ctx context.Context, req *CreateRequest) (*CreateResponse, error) {
	c := mongo.GetRepository("dkrv", "place")
	id, status, err := c.Create(req)
	return &CreateResponse{
		Status: status,
		Error:  err,
		Id:     id,
	}, nil
}

//Update allow to update
func (s *Server) Update(ctx context.Context, req *UpdateRequest) (*UpdateResponse, error) {
	c := mongo.GetRepository("dkrv", "place")
	update := bson.M{"$set": req.Payload}
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
