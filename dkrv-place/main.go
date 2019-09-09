package main

import (
	"log"
	"store/collection"
)

func main() {
	log.Println("hello place info")
	go collection.GrpcServer()
	select {}
}
