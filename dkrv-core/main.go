package main

import (
	"core/kernel/schemas"
	"log"
	"net/http"
)

func main() {
	//gRPCServer()
	go StartGQLServer()
	//go esearch.StartGRPCService("0.0.0.0:9500")
	select {}
	log.Print("ready: listening...\n")
}

//StartGQLServer start Graphql Server
func StartGQLServer() error {
	http.Handle("/graphql", schemas.GetGraphQLHandler())
	log.Println("Initializing server: 9000")
	http.ListenAndServe(":9000", nil)
	log.Println("Serve: 9000")
	return nil
}
