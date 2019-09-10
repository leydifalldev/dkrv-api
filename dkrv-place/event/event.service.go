package event

import (
	context "context"
	"log"
	"place/repository"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
)

//Search return List of info
func (s *Server) Search(ctx context.Context, req *SearchRequest) (*ListResponse, error) {
	var data []*Event
	var cpt int64
	c := repository.GetRepository("dkrv", "event")
	cur, status, err := c.GetList()
	defer cur.Close(ctx)
	cpt = 0
	for cur.Next(context.TODO()) {
		cpt++
		var e Event
		err := cur.Decode(&e)
		if err != nil {
			log.Fatal(err)
		}

		data = append(data, &e)
	}
	return &ListResponse{
		Status:  status,
		Error:   err,
		Total:   cpt,
		Payload: data,
	}, nil
}

//Get return List of info
func (s *Server) Get(ctx context.Context, req *DetailRequest) (*DetailResponse, error) {
	c := repository.GetRepository("dkrv", "event")
	var e *Event
	cur, status, err := c.Get(req.GetId())
	derr := cur.Decode(&e)
	if derr != nil {
		//log.Fatal(derr)
		log.Println(derr)
		status = 404
		err = "DATABASE ERROR: Cannot get document from database"
	}
	return &DetailResponse{
		Status:  status,
		Error:   err,
		Payload: e,
	}, nil
}

//Add allows to add info
func (s *Server) Add(ctx context.Context, req *CreateRequest) (*CreateResponse, error) {
	c := repository.GetRepository("dkrv", "event")
	event := req.GetPayload()
	uuid, err := uuid.NewUUID()
	if err != nil {
		log.Println("Cannot not generate uuid for inserting document")
	}
	event.Id = uuid.String()
	res, status, errres := c.Create(event)
	return &CreateResponse{
		Status:  status,
		Error:   errres,
		Id:      event.Id,
		Payload: res,
	}, nil
}

//Update allow to update
func (s *Server) Update(ctx context.Context, req *UpdateRequest) (*UpdateResponse, error) {
	c := repository.GetRepository("dkrv", "event")
	event := req.GetPayload()
	log.Println(event)
	update := bson.D{{Key: "$set", Value: event}}
	res, status, err := c.Update(req.GetId(), update)

	return &UpdateResponse{
		Status:  status,
		Error:   err,
		Payload: res,
	}, nil
}

//UpdateLocation allow to update
func (s *Server) UpdateLocation(ctx context.Context, req *UpdateLocationRequest) (*UpdateResponse, error) {
	c := repository.GetRepository("dkrv", "event")
	placeevent := req.GetPayload()
	log.Println(placeevent)
	update := bson.D{{Key: "$set", Value: bson.M{"place.location": placeevent}}}
	res, status, err := c.Update(req.GetId(), update)

	return &UpdateResponse{
		Status:  status,
		Error:   err,
		Payload: res,
	}, nil
}

//Delete allow to delete
func (s *Server) Delete(ctx context.Context, req *DeleteRequest) (*DeleteResponse, error) {
	c := repository.GetRepository("dkrv", "event")
	res, status, err := c.Delete(req.GetId())

	return &DeleteResponse{
		Status:  status,
		Error:   err,
		Payload: res,
	}, nil
}
