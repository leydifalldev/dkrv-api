package product

import (
	context "context"
	"encoding/json"
	"log"
	"place/repository"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
)

//Search return List of info
func (s *Server) Search(ctx context.Context, req *SearchParams) (*ListResponse, error) {
	log.Println("Search")
	var data []*Product
	var cpt int64
	c := repository.GetRepository("place", "product")
	cur, status, err := c.GetList()
	defer cur.Close(ctx)
	cpt = 0
	for cur.Next(context.TODO()) {
		cpt++
		var p Product
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
	c := repository.GetRepository("place", "product")
	var p *Product
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

	c := repository.GetRepository("place", "product")
	product := req.GetPayload()
	uuid, err := uuid.NewUUID()
	if err != nil {
		log.Println("Cannot not generate uuid for inserting document")
	}
	product.Id = uuid.String()
	productString, _ := json.Marshal(product)
	log.Println(string(productString))
	res, status, errc := c.Create(product)

	esclient := NewESClient()
	out := esclient.InsertProduct(product)
	log.Println("se out")
	log.Println(out)
	return &CreateResponse{
		Status:  status,
		Error:   errc,
		Payload: res,
	}, nil
}

//Update allow to update
func (s *Server) Update(ctx context.Context, req *UpdateRequest) (*UpdateResponse, error) {
	c := repository.GetRepository("place", "product")
	product := req.GetPayload()
	log.Println(product)
	update := bson.D{{Key: "$set", Value: product}}
	res, status, err := c.Update(req.GetId(), update)

	return &UpdateResponse{
		Status:  status,
		Error:   err,
		Payload: res,
	}, nil
}

//Delete allow to delete
func (s *Server) Delete(ctx context.Context, req *DeleteRequest) (*DeleteResponse, error) {
	c := repository.GetRepository("place", "product")
	res, status, err := c.Delete(req.GetId())

	return &DeleteResponse{
		Status:  status,
		Error:   err,
		Payload: res,
	}, nil
}
