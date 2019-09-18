package product

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

var producturi = os.Getenv("DKRV_PLACE_PRODUCT")

//GrpcServer start server
func GrpcServer() {
	lis, err := net.Listen("tcp", producturi)
	if err != nil {
		log.Printf("grpcServer ===> Error to connect %s", producturi)
	}
	g := grpc.NewServer()
	RegisterProductServiceServer(g, NewServer())
	g.Serve(lis)
}
