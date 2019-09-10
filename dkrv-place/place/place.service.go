package place

import (
	context "context"
	"log"
	"place/repository"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
)

//Search return List of info
func (s *Server) Search(ctx context.Context, req *SearchRequest) (*ListResponse, error) {
	var data []*Place
	var cpt int64
	c := repository.GetRepository("dkrv", "place")
	cur, status, err := c.GetList()
	defer cur.Close(ctx)
	cpt = 0
	for cur.Next(context.TODO()) {
		cpt++
		var p Place
		err := cur.Decode(&p)
		if err != nil {
			log.Fatal(err)
		}

		data = append(data, &p)
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
	c := repository.GetRepository("dkrv", "place")
	var p *Place
	cur, status, err := c.Get(req.GetId())
	derr := cur.Decode(&p)
	if derr != nil {
		//log.Fatal(derr)
		log.Println(derr)
		status = 404
		err = "DATABASE ERROR: Cannot get document from database"
	}

	return &DetailResponse{
		Status:  status,
		Error:   err,
		Payload: p,
	}, nil
}

//Add allows to add info
func (s *Server) Add(ctx context.Context, req *CreateRequest) (*CreateResponse, error) {
	c := repository.GetRepository("dkrv", "place")
	event := req.GetPayload()
	uuid, err := uuid.NewUUID()
	if err != nil {
		log.Println("Cannot not generate uuid for inserting document")
	}
	event.Id = uuid.String()
	res, status, errc := c.Create(event)

	return &CreateResponse{
		Status:  status,
		Error:   errc,
		Id:      event.Id,
		Payload: res,
	}, nil
}

//Update allow to update
func (s *Server) Update(ctx context.Context, req *UpdateRequest) (*UpdateResponse, error) {
	c := repository.GetRepository("dkrv", "place")
	place := req.GetPayload()
	log.Println(place)
	update := bson.D{{Key: "$set", Value: place}}
	res, status, err := c.Update(req.GetId(), update)

	return &UpdateResponse{
		Status:  status,
		Error:   err,
		Payload: res,
	}, nil
}

//Delete allow to delete
func (s *Server) Delete(ctx context.Context, req *DeleteRequest) (*DeleteResponse, error) {
	c := repository.GetRepository("dkrv", "place")
	res, status, err := c.Delete(req.GetId())

	return &DeleteResponse{
		Status:  status,
		Error:   err,
		Payload: res,
	}, nil
}
