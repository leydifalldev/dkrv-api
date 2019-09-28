package main

import (
	"core/kernel/schemas"
	"log"
	"net/http"
	"os"
)

var coreuri = os.Getenv("DKRV_CORE")

func main() {
	//gRPCServer()
	go StartGQLServer()
	//go esearch.StartGRPCService("0.0.0.0:9500")
	select {}
}

//StartGQLServer start Graphql Server
func StartGQLServer() error {
	http.Handle("/graphql", schemas.GetGraphQLHandler())
	log.Printf("Initializing server: %s", coreuri)
	http.ListenAndServe(coreuri, nil)
	log.Printf("Server launched at %s", coreuri)
	return nil
}
