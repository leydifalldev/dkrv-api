package place

import (
	context "context"
	"log"
	"place/gateway"
	"place/repository"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
)

//Search return List of info
func (s *Server) Search(ctx context.Context, req *gateway.SearchParams) (*gateway.PlaceListResponse, error) {
	var data []*gateway.Place
	var cpt int64
	c := repository.GetRepository("place", "place")
	cur, status, err := c.GetList()
	defer cur.Close(ctx)
	cpt = 0
	for cur.Next(context.TODO()) {
		cpt++
		var p gateway.Place
		err := cur.Decode(&p)
		if err != nil {
			log.Println(err)
		}

		data = append(data, &p)
	}
	return &gateway.PlaceListResponse{
		Status: status,
		Error:  err,
		Total:  cpt,
		Places: data,
	}, nil
}

//Get return List of info
func (s *Server) Get(ctx context.Context, req *gateway.PlaceDetailRequest) (*gateway.PlaceDetailResponse, error) {
	c := repository.GetRepository("place", "place")
	var p *gateway.Place
	cur, status, err := c.Get(req.GetId())
	derr := cur.Decode(&p)
	if derr != nil {
		//log.Fatal(derr)
		log.Println(derr)
		status = 404
		err = "DATABASE ERROR: Cannot get document from database"
	}

	return &gateway.PlaceDetailResponse{
		Status: status,
		Error:  err,
		Place:  p,
	}, nil
}

//Add allows to add info
func (s *Server) Add(ctx context.Context, req *gateway.PlaceCreateRequest) (*gateway.PlaceCreateResponse, error) {
	c := repository.GetRepository("place", "place")
	var payload = "null"
	place := req.GetPlace()
	uuid, err := uuid.NewUUID()
	if err != nil {
		log.Println("Cannot not generate uuid for inserting document")
	}
	place.Id = uuid.String()
	res, status, errc := c.Create(place)
	if res {
		payload = place.Id
	}
	log.Println(payload)
	return &gateway.PlaceCreateResponse{
		Status:  status,
		Error:   errc,
		Payload: payload,
	}, nil
}

//Update allow to update
func (s *Server) Update(ctx context.Context, req *gateway.PlaceUpdateRequest) (*gateway.PlaceUpdateResponse, error) {
	c := repository.GetRepository("place", "place")
	place := req.GetPlace()
	log.Println(place)
	update := bson.D{{Key: "$set", Value: place}}
	res, status, err := c.Update(place.Id, update)

	return &gateway.PlaceUpdateResponse{
		Status:  status,
		Error:   err,
		Updated: res,
	}, nil
}

//Delete allow to delete
func (s *Server) Delete(ctx context.Context, req *gateway.PlaceDeleteRequest) (*gateway.PlaceDeleteResponse, error) {
	c := repository.GetRepository("place", "place")
	res, status, err := c.Delete(req.GetId())

	return &gateway.PlaceDeleteResponse{
		Status:  status,
		Error:   err,
		Deleted: res,
	}, nil
}
