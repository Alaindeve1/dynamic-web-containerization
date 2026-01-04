#!/bin/bash

# Deployment Script for Portfolio System 26442

echo "Deploying Portfolio System..."

# Build Images
echo "Building backend image..."
docker build -t portfolio-backend-26442:latest ./backend

echo "Building frontend image..."
docker build -t portfolio-frontend-26442:latest ./frontend

# Check if Swarm is active, else use Compose
if [ "$(docker info --format '{{.Swarm.LocalNodeState}}')" == "active" ]; then
    echo "Swarm detected. Deploying stack..."
    docker stack deploy -c docker-stack.yml portfolio-26442
else
    echo "Swarm not active. Deploying with Compose..."
    docker-compose up -d
fi

echo "Deployment complete."
