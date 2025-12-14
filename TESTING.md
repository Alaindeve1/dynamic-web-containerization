# Testing Guide

## Backend Unit Tests
Run the following command in `./backend`:
```bash
mvn test
```

## Frontend Tests
(If tests are implemented)
```bash
npm test
```

## Manual Verification Checklist
- [ ] Login with valid credentials. -> Redirects to Home.
- [ ] Login with invalid credentials. -> Shows error toast.
- [ ] Create Portfolio. -> Appears in grid.
- [ ] Edit Portfolio. -> Updates reflect immediately.
- [ ] Delete Portfolio. -> Disappears from grid.
- [ ] Check Traefik Dashboard (port 8080). -> Shows router/service health.

## Load Testing
Use Apache Bench (ab):
```bash
ab -n 1000 -c 100 http://localhost/api/v1/portfolios
```
