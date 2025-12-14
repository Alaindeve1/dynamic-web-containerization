# Deployment Guide

## Single Node (Docker Compose)
1. Ensure `.env` is configured (copy from `.env.example`).
2. Run `docker-compose up -d --build`.
3. Verify services are running with `docker-compose ps`.

## Multi-Node (Docker Swarm)
### Prerequisites
- Manager Node (e.g., Ubuntu)
- Worker Nodes (e.g., CentOS)
- Network connectivity between nodes (ports 2377, 7946, 4789).

### Setup
1. **Initialize Swarm** (on Manager):
   ```bash
   docker swarm init --advertise-addr <MANAGER-IP>
   ```

2. **Join Worker**:
   Run the command outputted by the init step on the worker node.

3. **Deploy Stack**:
   ```bash
   docker stack deploy -c docker-stack.yml portfolio-26442
   ```

### Scaling
Scale backend services:
```bash
./scripts/scale.sh backend-26442 5
```

## Traefik & SSL
- Traefik is configured to use Let's Encrypt.
- Update `traefik.yml` with a valid email.
- Ensure your DOMAIN points to the Manager node IP.
