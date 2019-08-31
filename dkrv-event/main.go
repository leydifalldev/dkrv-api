package main

import (
	"log"
	"store/collection"
)

func main() {
	log.Println("grpc server: starting ...")
	go collection.GrpcServer()
	select {}
}
