package handlers

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

// Define the struct for the JSON response here
type EnvironmentResponse struct {
	Environment string `json:"environment"`
}

func ApiHandler(c *gin.Context) {
	env := os.Getenv("ENVIRONMENT")
	if env == "" {
		env = "unknown" // Fallback if the variable is not set
	}

	// Return a JSON response
	c.JSON(http.StatusOK, EnvironmentResponse{
		Environment: env,
	})
}
