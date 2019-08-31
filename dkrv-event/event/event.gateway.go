package event

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

//GrpcServer start server
func GrpcServer() {
	lis, err := net.Listen("tcp", "0.0.0.0:4000")
	if err != nil {
		log.Println("grpcServer ===> Error to connect to 0.0.0.0:4000")
	}
	g := grpc.NewServer()
	RegisterEventServiceServer(g, NewServer())
	g.Serve(lis)
}
