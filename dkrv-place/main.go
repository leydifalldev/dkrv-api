package main

import (
	"log"
	"place/event"
	"place/place"
	"place/product"
)

func main() {
	log.Println("hello place info")
	//go collection.GrpcServer()
	go place.GrpcServer()
	go product.GrpcServer()
	go event.GrpcServer()
	select {}
}
