# Portfolio CRUD System (ID: 26442)

## Student Information
- **Name**: Ndizeye Alain
- **Student ID**: 26442
- **Course**: Linux/Distributed Systems

## Project Overview
This is a production-ready Portfolio CRUD system built with a microservices architecture. It includes a Spring Boot backend, React frontend, PostgreSQL database, and is orchestrated using Docker (Compose & Swarm) with Traefik as the load balancer and reverse proxy.

### Architecture
[Client] -> [Traefik Load Balancer] -> [Frontend / Backend] -> [PostgreSQL]

## Technologies
- **Backend**: Java 17, Spring Boot 3.2.1, Spring Security (JWT)
- **Frontend**: React 18, Vite, Tailwind CSS, Axios
- **Database**: PostgreSQL 15
- **Infrastructure**: Docker, Docker Swarm, Traefik v2.10

## Prerequisites
- Docker & Docker Compose installed
- Java 17 (for local dev)
- Node.js 18+ (for local dev)

## Quick Start (Docker Compose)
1. Clone the repository.
2. Navigate to root `portfolio-system-26442`.
3. Create `acme.json`: `touch traefik/acme.json && chmod 600 traefik/acme.json`
4. Run:
   ```bash
   docker-compose up -d
   ```
5. Access the application:
   - Frontend: http://localhost
   - Backend API: http://localhost/api/v1
   - Traefik Dashboard: http://localhost:8080

## Documentation
- [Deployment Guide](DEPLOYMENT.md)
- [API Documentation](API.md)
- [Testing Guide](TESTING.md)

## Security Features
- **JWT Authentication**: Secure login and protected routes.
- **API Key**: `X-API-KEY` header validation for extra security layers.
- **HTTPS**: configured via Traefik (requires valid domain for Let's Encrypt).

## Project Structure
```
portfolio-system-26442/
├── backend/            # Spring Boot Application
├── frontend/           # React Application
├── database/           # DB Init scripts
├── traefik/            # Load Balancer Config
├── scripts/            # Utility scripts
└── docker-compose.yml  # Container Orchestration
```
