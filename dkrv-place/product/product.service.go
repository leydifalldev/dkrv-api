package product

import (
	context "context"
	"encoding/json"
	"log"
	"place/gateway"
	"place/repository"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
)

//Search return List of info
func (s *Server) Search(ctx context.Context, req *gateway.SearchParams) (*gateway.ProductListResponse, error) {
	log.Println("Search")
	var data []*gateway.Product
	var cpt int64
	c := repository.GetRepository("place", "product")
	cur, status, err := c.GetList()
	defer cur.Close(ctx)
	cpt = 0
	for cur.Next(context.TODO()) {
		cpt++
		var p gateway.Product
		err := cur.Decode(&p)
		if err != nil {
			log.Println(err)
		}

		data = append(data, &p)
	}
	log.Println(data)
	return &gateway.ProductListResponse{
		Status:   status,
		Error:    err,
		Total:    cpt,
		Products: data,
	}, nil
}

//Get return List of info
func (s *Server) Get(ctx context.Context, req *gateway.ProductDetailRequest) (*gateway.ProductDetailResponse, error) {
	c := repository.GetRepository("place", "product")
	var p *gateway.Product
	cur, status, err := c.Get(req.GetId())
	derr := cur.Decode(&p)
	if derr != nil {
		//log.Fatal(derr)
		log.Println(derr)
		status = 500
		err = "Impossible to get document"
	}

	return &gateway.ProductDetailResponse{
		Status:  status,
		Error:   err,
		Product: p,
	}, nil
}

//GetByQuery return List of info
func (s *Server) GetByQuery(ctx context.Context, filter *gateway.ProductFilter) (*gateway.ProductListResponse, error) {
	c := repository.GetRepository("place", "product")
	var data []*gateway.Product
	var cpt int64
	log.Println(filter)
	cur, status, err := c.GetProductByQuery(filter)
	defer cur.Close(ctx)
	cpt = 0
	for cur.Next(context.TODO()) {
		cpt++
		var p gateway.Product
		err := cur.Decode(&p)
		if err != nil {
			log.Println(err)
		}

		data = append(data, &p)
	}
	log.Println(data)
	return &gateway.ProductListResponse{
		Status:   status,
		Error:    err,
		Total:    cpt,
		Products: data,
	}, nil
}

//Add allows to add info
func (s *Server) Add(ctx context.Context, req *gateway.ProductCreateRequest) (*gateway.ProductCreateResponse, error) {

	c := repository.GetRepository("place", "product")
	product := req.GetProduct()
	uuid, err := uuid.NewUUID()
	if err != nil {
		log.Println("Cannot not generate uuid for inserting document")
	}
	product.Id = uuid.String()
	productString, _ := json.Marshal(product)
	log.Println(string(productString))
	res, status, errc := c.Create(product)

	return &gateway.ProductCreateResponse{
		Status:  status,
		Error:   errc,
		Created: res,
	}, nil
}

//Update allow to update
func (s *Server) Update(ctx context.Context, req *gateway.ProductUpdateRequest) (*gateway.ProductUpdateResponse, error) {
	c := repository.GetRepository("place", "product")
	product := req.GetProduct()
	log.Println(product)
	update := bson.D{{Key: "$set", Value: product}}
	res, status, err := c.Update(product.Id, update)

	return &gateway.ProductUpdateResponse{
		Status:  status,
		Error:   err,
		Updated: res,
	}, nil
}

//Delete allow to delete
func (s *Server) Delete(ctx context.Context, req *gateway.ProductDeleteRequest) (*gateway.ProductDeleteResponse, error) {
	c := repository.GetRepository("place", "product")
	res, status, err := c.Delete(req.GetId())

	return &gateway.ProductDeleteResponse{
		Status:  status,
		Error:   err,
		Deleted: res,
	}, nil
}
