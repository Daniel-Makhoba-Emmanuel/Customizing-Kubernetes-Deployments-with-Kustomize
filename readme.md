# Customizing Kubernetes Deployments with Kustomize

Hello!, welcome to my kustomize project!. This repository contains a set of Kubernetes manifests and Kustomize configurations to demonstrate how to manage deployments across different environments (development, production) using overlays.

## Prerequisites

- A Kubernetes cluster (minikube, kind, or manages kubernetes service)
- kubectl (v1.14+)
- Kustomize (bundled with kubectl v1.14+, or standalone)

## Table of contents

- [Customizing Kubernetes Deployments with Kustomize](#customizing-kubernetes-deployments-with-kustomize)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting started](#getting-started)
  - [Navigating the project](#navigating-the-project)
    - [`apps/` directory](#apps-directory)
      - [backend and frontend applications](#backend-and-frontend-applications)
    - [`deploy-environment/` directory](#deploy-environment-directory)
    - [`Cluster/` directory](#cluster-directory)
    - [`code/` directory](#code-directory)
  - [Running the project](#running-the-project)
  - [Contributing](#contributing)


## Getting started
Your first step in this project would be cloning it. you can do this running the following command in your terminal:

```bash
git clone https://github.com/Daniel-Makhoba-Emmanuel/Customizing-Kubernetes-Deployments-with-Kustomize.git
```

## Navigating the project
The project is broken into three main directories:
- `apps/` - contains the application manifests and overlays for different environments.
- `Cluster/` - contains cluster-wide resources like namespaces and config.yaml
- `code/` - contains the actual code for the frontend and backend applications.

### `apps/` directory
This directory contains the Kustomize configurations for deploying applications in different environments. Each environment has its own overlay that customizes the base manifests.

#### backend and frontend applications
The backend and frontend applications are structured as follows:  

- `base/` - contains the base manifests for the backend application. specifically the deployment and service manifests. The kustomization.yaml file in this directory references the deployment and service manifests, and is used as the base for all overlays.

- `overlays/` - contains environment-specific customizations for the backend application. Each overlay (e.g., `dev`, `prod`) modifies the base manifests to suit the environment's needs. For example adding a prefix to the resource names, changing the number of replicas, or modifying environment variables. 

You may notice an additional file called `deployment-patch.yaml`, this file is used to patch the deployment manifest in the base directory. It is used to change the number of replicas for the backend application in the dev environment. It's mostly used when precise/surgical changes are required without modifying the entire manifest.

### `deploy-environment/` directory
This directory contains the Kustomize configurations for deploying the backend and frontend applications in different environments.

- `deploy-dev/` - contains the Kustomize configuration for deploying the backend and frontend applications in the development environment. It references the overlays for both applications and applies them to create a complete deployment configuration.
- `deploy-prod/` - contains the Kustomize configuration for deploying the backend and frontend applications in the production environment. Similar to the dev environment, it references the overlays for both applications and applies them to create a complete deployment configuration.

### `Cluster/` directory
This directory contains cluster-wide resources that are not specific to any application. It includes namespaces and other cluster-level configurations.

### `code/` directory

**Caution: There seems to be a misconfiguration somewhere haha( i suspect the nginx.conf in the frontend code). So when the pods are live and the frontend pods try to connect to the backend pods, it fails. Howeve if you perform network troubleshooting, you will find that the backend pods are actually reachable.**

This directory contains the actual code for the backend and frontend applications. The backend is a simple Go application that serves as an API, while the frontend is a React application that consumes the API.

## Running the project
To run the project, you need to apply the Kustomize configurations to your Kubernetes cluster.  

1. Navigate to the `apps/deploy-environment/deploy-dev` directory for development or `apps/deploy-environment/deploy-prod` for production.

2. Run the following command to see the combined and final Kustomize configuration:
```bash
kubectl kustomize .
```
3. If everything looks good, apply the configuration to your cluster:
```bash
kubectl apply -k .
```
4. To verify that the deployments were successful, you can check the status of the pods:
```bash
kubectl get pods -n <namespace>
``` 
5. When your done navigate to the deploy-dev or deploy-prod directory and run the following command to delete the resources:
```bash
kubectl delete -k .
```

## Contributing
Contributions are welcome! If you have suggestions for improvements or find bugs, please open an issue or submit a pull request. If you still need further clarification on how to use kustomize, feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/daniel-makhoba-emmanuel/) or read this article [Medium](https://medium.com/@iamdanielemmanuelmark5/customizing-kubernetes-deployments-with-kustomize-ec58f171257d).


