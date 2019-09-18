package place

import (
	"log"
	"net"
	"os"

	grpc "google.golang.org/grpc"
)

// Server is the struct of server
type Server struct{}

// NewServer return Server Struct
func NewServer() *Server {
	return &Server{}
}

var uri = os.Getenv("DKRV_PLACE_PLACE")

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
