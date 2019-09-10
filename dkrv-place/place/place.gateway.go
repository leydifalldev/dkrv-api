package place

import (
	"log"
	"net"

	grpc "google.golang.org/grpc"
)

// Server is the struct of server
type Server struct{}

// NewServer return Server Struct
func NewServer() *Server {
	return &Server{}
}

var uri = "0.0.0.0:7000"

//GrpcServer start server
func GrpcServer() {
	lis, err := net.Listen("tcp", uri)
	if err != nil {
		log.Printf("grpcServer ===> Error to connect %s", uri)
	}
	g := grpc.NewServer()
	RegisterPlaceServiceServer(g, NewServer())
	g.Serve(lis)
}
