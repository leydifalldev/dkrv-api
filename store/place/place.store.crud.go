package place

import (
	context "context"
	"log"
	"store/db"

	"go.mongodb.org/mongo-driver/bson"
)

//GetList return List of info
func (s *Server) GetList(ctx context.Context, req *Empty) (*ListResponse, error) {
	var data []*PlaceStore
	var cpt int64
	c := db.NewConnect("dkrv", "place")
	cur, status, err := c.GetList()
	defer cur.Close(ctx)
	cpt = 0
	for cur.Next(context.TODO()) {
		cpt++
		var p PlaceStore
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
	var res *DetailResponse
	c := db.NewConnect("dkrv", "place")
	var p *PlaceStore
	cur, status, err := c.Get()
	derr := cur.Decode(&p)
	if derr != nil {
		log.Fatal(derr)
		err = "DATABASE ERROR: Cannot get document from database"
	}
	res = &DetailResponse{
		Status: status,
		Error:  err,
		Data:   p,
	}
	return res, nil
}

//Add allows to add info
func (s *Server) Add(ctx context.Context, req *PlaceStore) (*CreateResponse, error) {
	var response *CreateResponse
	c := db.NewConnect("dkrv", "place")
	id, status, err := c.Create(req)
	response = &CreateResponse{
		Status: status,
		Error:  err,
		Id:     id,
	}
	return response, nil
}

//Update allow to update
func (s *Server) Update(ctx context.Context, req *PlaceStore) (*UpdateResponse, error) {
	var response *UpdateResponse
	c := db.NewConnect("dkrv", "place")
	id, status, err := c.Update(bson.M{"place_id": req.Id}, req)
	if id != nil {
		log.Println("Hello")
	}
	response = &UpdateResponse{
		Status: status,
		Error:  err,
		Id:     "done",
	}
	return response, nil
}

//Delete allow to delete
func (s *Server) Delete(ctx context.Context, req *ID) (*DeleteResponse, error) {
	var response *DeleteResponse
	response = &DeleteResponse{
		Status: 200,
		Error:  "null",
		Id:     "XXXXXXXXX",
	}
	return response, nil
}
