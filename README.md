# Restaurant Service

This repository contains a Node.js-based restaurant service with authentication and geospatial querying capabilities. The service is containerized using Docker for easy deployment and scaling.

## Features

- User registration and authentication
- CRUD operations for restaurants
- Geospatial queries to find nearby restaurants
- Search for restaurants within a specified range

## Live Demo

The service is deployed at: https://restaurants-api-8z9b.onrender.com/

**Note:** As this service is hosted on Render's free tier, it may take a few minutes to load initially. Once loaded, you'll see a "Welcome to Restaurant API" message on the page.

## Prerequisites

- Docker
- Docker Compose (optional, for easy setup)

## Getting Started

### Using Docker

1. Pull the Docker image:
   ```
   docker pull jishnujp/restaurants-api:1.0
   ```

2. Run the container:
   ```
   docker run -p 5000:5000 -e MONGODB_URI=your_mongodb_uri -e JWT_SECRET=your_jwt_secret jishnujp/restaurant-api:1.0
   ```

   Replace `your_mongodb_uri` with your MongoDB connection string and `your_jwt_secret` with a secret key for JWT token generation.

### Using Docker Compose (Alternative)

1. Create a `docker-compose.yml` file in your project directory:

   ```yaml
   version: '3'
   services:
     restaurant-service:
       image: jishnujp/restaurants-api:1.0
       ports:
         - "5000:5000"
       environment:
         - MONGODB_URI=your_mongodb_uri
         - JWT_SECRET=your_jwt_secret
   ```

2. Run the service:
   ```
   docker-compose up
   ```

## API Endpoints

All endpoints are prefixed with `api/`. For example, `https://restaurants-api-8z9b.onrender.com/api/auth/register`.

### Authentication

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login and receive a JWT token

### Restaurants

- `GET /api/restaurants`: Get all restaurants
- `POST /api/restaurants`: Create a new restaurant
- `GET /api/restaurants/:id`: Get a specific restaurant
- `PUT /api/restaurants/:id`: Update a restaurant
- `DELETE /api/restaurants/:id`: Delete a restaurant
- `GET /api/restaurants/nearby`: Get nearby restaurants
- `GET /api/restaurants/range`: Get restaurants within a specified range

## Usage Examples

Replace `http://localhost:5000` with `https://restaurants-api-8z9b.onrender.com` in the following examples to use the deployed service.

### Register a User

```bash
curl -X POST https://restaurants-api-8z9b.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "email": "test@example.com", "password": "password123"}'
```

### Login

```bash
curl -X POST https://restaurants-api-8z9b.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "password123"}'
```

### Create a Restaurant

```bash
curl -X POST https://restaurants-api-8z9b.onrender.com/api/restaurants \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"name": "Test Restaurant", "description": "A test restaurant", "location": {"type": "Point", "coordinates": [-73.9667, 40.78]}, "ratings": [4, 5, 3]}'
```

### Get Nearby Restaurants

```bash
curl -X GET https://restaurants-api-8z9b.onrender.com/api/restaurants/nearby \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"latitude": 40.78, "longitude": -73.9667, "radius": 1000}'
```
