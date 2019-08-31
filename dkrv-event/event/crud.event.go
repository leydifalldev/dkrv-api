package event

import (
	context "context"
)

//Search return List of info
func (s *Server) Search(ctx context.Context, req *SearchRequest) (*ListResponse, error) {
	return &ListResponse{
		Status:  200,
		Error:   "null",
		Total:   1,
		Payload: []*Event{},
	}, nil
}

//Get return List of info
func (s *Server) Get(ctx context.Context, req *ID) (*DetailResponse, error) {
}

//Add allows to add info
func (s *Server) Add(ctx context.Context, req *CreateRequest) (*CreateResponse, error) {
}

//Update allow to update
func (s *Server) Update(ctx context.Context, req *UpdateRequest) (*UpdateResponse, error) {
}

//Delete allow to delete
func (s *Server) Delete(ctx context.Context, req *ID) (*DeleteResponse, error) {
}
