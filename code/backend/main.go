package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

// Define a struct for the JSON response
type EnvironmentResponse struct {
	Environment string `json:"environment"`
}

func main() {
	// create a new router
	router := gin.Default()

	// --- NEW: Define the API endpoint for the frontend ---
	router.GET("/api/environment", func(c *gin.Context) {
		// Read the ENVIRONMENT variable set by Kustomize
		env := os.Getenv("ENVIRONMENT")
		if env == "" {
			env = "unknown" // Fallback if the variable is not set
		}

		// Return a JSON response
		c.JSON(http.StatusOK, EnvironmentResponse{
			Environment: env,
		})
	})

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
