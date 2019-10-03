package event

import (
	"log"
	"net"
	"os"
	"place/gateway"

	grpc "google.golang.org/grpc"
)

var eventuri = os.Getenv("DKRV_PLACE_EVENT")

// Server is the struct of server
type Server struct{}

// NewServer return Server Struct
func NewServer() *Server {
	return &Server{}
}

//GrpcServer start server
func GrpcServer() {
	lis, err := net.Listen("tcp", eventuri)
	if err != nil {
		log.Printf("grpcServer ===> Error to connect %s", eventuri)
	}
	g := grpc.NewServer()
	gateway.RegisterEventServiceServer(g, NewServer())
	g.Serve(lis)
}
