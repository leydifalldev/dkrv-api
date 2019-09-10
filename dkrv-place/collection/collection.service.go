package collection

import (
	context "context"
	"log"
	"place/repository"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
)

//Search return List of info
func (s *Server) Search(ctx context.Context, req *SearchParams) (*ListResponse, error) {
	var data []*Collection
	var cpt int64
	c := repository.GetRepository("dkrv", "collection")
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
		Status:  status,
		Error:   err,
		Total:   cpt,
		Payload: data,
	}, nil
}

//Get return List of info
func (s *Server) Get(ctx context.Context, req *DetailRequest) (*DetailResponse, error) {
	c := repository.GetRepository("dkrv", "collection")
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
		Status:  status,
		Error:   err,
		Payload: p,
	}, nil
}

//Add allows to add info
func (s *Server) Add(ctx context.Context, req *CreateRequest) (*CreateResponse, error) {
	c := repository.GetRepository("dkrv", "collection")
	collection := req.GetPayload()
	uuid, err := uuid.NewUUID()
	if err != nil {
		log.Println("Cannot not generate uuid for inserting document")
	}
	collection.Id = uuid.String()
	res, status, errc := c.Create(collection)

	return &CreateResponse{
		Status:  status,
		Error:   errc,
		Id:      collection.Id,
		Payload: res,
	}, nil
}

//Update allow to update
func (s *Server) Update(ctx context.Context, req *UpdateRequest) (*UpdateResponse, error) {
	c := repository.GetRepository("dkrv", "collection")
	collection := req.GetPayload()
	log.Println(collection)
	update := bson.D{{Key: "$set", Value: collection}}
	res, status, err := c.Update(req.GetId(), update)

	return &UpdateResponse{
		Status:  status,
		Error:   err,
		Payload: res,
	}, nil
}

//Delete allow to delete
func (s *Server) Delete(ctx context.Context, req *DeleteRequest) (*DeleteResponse, error) {
	c := repository.GetRepository("dkrv", "collection")
	res, status, err := c.Delete(req.GetId())

	return &DeleteResponse{
		Status:  status,
		Error:   err,
		Payload: res,
	}, nil
}
