package event

import (
	context "context"
	"event/database"
	"log"
)

//Search return List of info
func (s *Server) Search(ctx context.Context, req *SearchRequest) (*ListResponse, error) {
	var data []*Event
	var cpt int64
	c := database.GetRepository("dkrv", "event")
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
	c := database.GetRepository("dkrv", "event")
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
	c := database.GetRepository("dkrv", "event")
	id, status, err := c.Create(req)
	return &CreateResponse{
		Status:  status,
		Error:   err,
		Payload: id,
	}, nil
}

//Update allow to update
func (s *Server) Update(ctx context.Context, req *UpdateRequest) (*UpdateResponse, error) {
	c := database.GetRepository("dkrv", "place")

	id, status, _ := c.Update(req.GetId(), req.Payload)
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
}
