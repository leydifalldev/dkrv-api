package main

import (
	"log"
	"store/place"
)

func main() {
	log.Println("hello place info")
	go place.GrpcServer()
	select {}
}
