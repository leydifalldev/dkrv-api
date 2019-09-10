package main

import (
	"log"
	"place/collection"
	"place/place"
)

func main() {
	log.Println("hello place info")
	go collection.GrpcServer()
	go place.GrpcServer()
	select {}
}
