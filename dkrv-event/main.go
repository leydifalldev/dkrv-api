package main

import (
	"event/event"
	"log"
)

func main() {
	log.Println("grpc server: starting ...")
	go event.GrpcServer()
	select {}
}
