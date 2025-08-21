package main

import (
	"log"
	"os"

	"github.com/Daniel-Makhoba-Emmanuel/Customizing-Kubernetes-Deployments-with-Kustomize/routes"
	"github.com/gin-gonic/gin"
)

func main() {
	// create a new router
	router := gin.Default()

	routes.ApiRoute(router)

	// Read the API_PORT from environment variables or use a default
	port := os.Getenv("API_PORT")
	if port == "" {
		port = "8080"
	}

	listenAddr := ":" + port

	log.Printf("Starting server on port %s", listenAddr)

	// Start the server
	err := router.Run(listenAddr)
	if err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
