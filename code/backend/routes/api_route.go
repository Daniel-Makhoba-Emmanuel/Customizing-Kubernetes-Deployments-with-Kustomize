package routes

import (
	"github.com/Daniel-Makhoba-Emmanuel/Customizing-Kubernetes-Deployments-with-Kustomize/handlers"
	"github.com/gin-gonic/gin"
)

func ApiRoute(r *gin.Engine) {
	r.GET("/api/environment", handlers.ApiHandler)
}
