package event

import (
	context "context"
	"log"
	"place/gateway"
	"place/repository"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
)

//Search return List of info
func (s *Server) Search(ctx context.Context, req *gateway.EventSearchParams) (*gateway.EventListResponse, error) {
	var data []*gateway.Event
	var cpt int64
	c := repository.GetRepository("place", "event")
	cur, status, err := c.GetList()
	defer cur.Close(ctx)
	cpt = 0
	for cur.Next(context.TODO()) {
		cpt++
		var e gateway.Event
		err := cur.Decode(&e)
		if err != nil {
			log.Fatal(err)
		}

		data = append(data, &e)
	}
	return &gateway.EventListResponse{
		Status: status,
		Error:  err,
		Total:  cpt,
		Events: data,
	}, nil
}

//Get return List of info
func (s *Server) Get(ctx context.Context, req *gateway.EventDetailRequest) (*gateway.EventDetailResponse, error) {
	c := repository.GetRepository("place", "event")
	var e *gateway.Event
	cur, status, err := c.Get(req.GetId())
	derr := cur.Decode(&e)
	if derr != nil {
		//log.Fatal(derr)
		log.Println(derr)
		status = 404
		err = "DATABASE ERROR: Cannot get document from database"
	}
	return &gateway.EventDetailResponse{
		Status: status,
		Error:  err,
		Event:  e,
	}, nil
}

//Add allows to add info
func (s *Server) Add(ctx context.Context, req *gateway.EventCreateRequest) (*gateway.EventCreateResponse, error) {
	c := repository.GetRepository("place", "event")
	event := req.GetEvent()
	uuid, err := uuid.NewUUID()
	if err != nil {
		log.Println("Cannot not generate uuid for inserting document")
	}
	event.Id = uuid.String()
	res, status, errres := c.Create(event)
	return &gateway.EventCreateResponse{
		Status:  status,
		Error:   errres,
		Created: res,
	}, nil
}

//Update allow to update
func (s *Server) Update(ctx context.Context, req *gateway.EventUpdateRequest) (*gateway.EventUpdateResponse, error) {
	c := repository.GetRepository("place", "event")
	event := req.GetEvent()
	log.Println(event)
	update := bson.D{{Key: "$set", Value: event}}
	res, status, err := c.Update(event.Id, update)

	return &gateway.EventUpdateResponse{
		Status:  status,
		Error:   err,
		Updated: res,
	}, nil
}

//UpdateLocation allow to update
func (s *Server) UpdateLocation(ctx context.Context, req *gateway.UpdateLocationRequest) (*gateway.EventUpdateResponse, error) {
	c := repository.GetRepository("place", "event")
	placeevent := req.GetPayload()
	log.Println(placeevent)
	update := bson.D{{Key: "$set", Value: bson.M{"place.location": placeevent}}}
	res, status, err := c.Update(req.GetId(), update)

	return &gateway.EventUpdateResponse{
		Status:  status,
		Error:   err,
		Updated: res,
	}, nil
}

//Delete allow to delete
func (s *Server) Delete(ctx context.Context, req *gateway.EventDeleteRequest) (*gateway.EventDeleteResponse, error) {
	c := repository.GetRepository("place", "event")
	res, status, err := c.Delete(req.GetId())

	return &gateway.EventDeleteResponse{
		Status:  status,
		Error:   err,
		Deleted: res,
	}, nil
}
