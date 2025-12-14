# API Documentation

Base URL: `/api/v1`

## Authentication

### Register
- **POST** `/auth/register`
- Body: `{ "username": "user", "email": "user@test.com", "password": "password" }`

### Login
- **POST** `/auth/authenticate`
- Body: `{ "username": "user", "password": "password" }`
- Response: `{ "token": "jwt-token" }`

## Portfolios (Requires Bearer Token)

### Local List
- **GET** `/portfolios`
- Headers: `Authorization: Bearer <token>`

### Get One
- **GET** `/portfolios/{id}`

### Create
- **POST** `/portfolios`
- Body:
  ```json
  {
    "title": "Project A",
    "description": "Desc",
    "imageUrl": "http...",
    "projectUrl": "http..."
  }
  ```

### Update
- **PUT** `/portfolios/{id}`

### Delete
- **DELETE** `/portfolios/{id}`

## Error Codes
- 401: Unauthorized (Invalid Token)
- 403: Forbidden
- 404: Not Found
- 500: Server Error
