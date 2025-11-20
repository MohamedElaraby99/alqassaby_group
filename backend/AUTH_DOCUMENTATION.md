# Authentication & User Management API Documentation

## Overview

This backend includes a complete authentication and user management system with JWT-based authentication, role-based access control (RBAC), and comprehensive user management endpoints.

## Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt password hashing with salt rounds
- **Role-Based Access Control**: Three roles - admin, editor, user
- **User Management**: Full CRUD operations for users
- **Protected Routes**: Middleware to protect routes
- **Password Updates**: Secure password change functionality

## User Roles

- **admin**: Full access to all resources and user management
- **editor**: Can manage content (products, blogs)
- **user**: Basic access (read-only or limited)

## Environment Variables

Add these to your `.env` file:

```env
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=30d
```

## Authentication Endpoints

### Register User
**POST** `/api/auth/register`

Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "user" // optional, defaults to "user"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "...",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user",
      "isActive": true,
      "createdAt": "..."
    },
    "token": "jwt-token-here"
  }
}
```

### Login
**POST** `/api/auth/login`

Login with email and password.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Login successful",
  "data": {
    "user": {
      "id": "...",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user",
      "isActive": true,
      "lastLogin": "...",
      "createdAt": "..."
    },
    "token": "jwt-token-here"
  }
}
```

### Get Current User
**GET** `/api/auth/me`

Get the currently authenticated user's information.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "user": {
      "id": "...",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user",
      "isActive": true,
      "avatar": "",
      "lastLogin": "...",
      "createdAt": "...",
      "updatedAt": "..."
    }
  }
}
```

### Update Password
**PUT** `/api/auth/update-password`

Update the current user's password.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "currentPassword": "oldpassword123",
  "newPassword": "newpassword123"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Password updated successfully",
  "data": {
    "token": "new-jwt-token-here"
  }
}
```

### Logout
**POST** `/api/auth/logout`

Logout (client-side token removal).

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "status": "success",
  "message": "Logged out successfully"
}
```

## User Management Endpoints (Admin Only)

### Get All Users
**GET** `/api/users`

Get a list of all users with pagination and filtering.

**Headers:**
```
Authorization: Bearer <admin-token>
```

**Query Parameters:**
- `role` (optional): Filter by role (admin, editor, user)
- `isActive` (optional): Filter by active status (true/false)
- `search` (optional): Search by name or email
- `limit` (optional): Number of results per page (default: 10)
- `page` (optional): Page number (default: 1)

**Example:**
```
GET /api/users?role=admin&isActive=true&limit=20&page=1
```

**Response:**
```json
{
  "status": "success",
  "results": 5,
  "total": 10,
  "page": 1,
  "totalPages": 1,
  "data": [
    {
      "_id": "...",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "admin",
      "isActive": true,
      "avatar": "",
      "lastLogin": "...",
      "createdAt": "...",
      "updatedAt": "..."
    }
  ]
}
```

### Get User by ID
**GET** `/api/users/:id`

Get a specific user by ID.

**Headers:**
```
Authorization: Bearer <admin-token>
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "admin",
    "isActive": true,
    "avatar": "",
    "lastLogin": "...",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### Create User
**POST** `/api/users`

Create a new user (Admin only).

**Headers:**
```
Authorization: Bearer <admin-token>
```

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "password123",
  "role": "editor",
  "isActive": true
}
```

**Response:**
```json
{
  "status": "success",
  "message": "User created successfully",
  "data": {
    "id": "...",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "role": "editor",
    "isActive": true,
    "createdAt": "..."
  }
}
```

### Update User
**PUT** `/api/users/:id`

Update a user's information (Admin only).

**Headers:**
```
Authorization: Bearer <admin-token>
```

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "role": "admin",
  "isActive": true,
  "avatar": "/uploads/avatar.jpg"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "User updated successfully",
  "data": {
    "_id": "...",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "role": "admin",
    "isActive": true,
    "avatar": "/uploads/avatar.jpg",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### Update Own Profile
**PUT** `/api/users/me`

Update your own profile information.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "name": "John Smith",
  "avatar": "/uploads/avatar.jpg"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Profile updated successfully",
  "data": {
    "_id": "...",
    "name": "John Smith",
    "email": "john@example.com",
    "role": "user",
    "isActive": true,
    "avatar": "/uploads/avatar.jpg",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### Toggle User Active Status
**PATCH** `/api/users/:id/active`

Activate or deactivate a user account (Admin only).

**Headers:**
```
Authorization: Bearer <admin-token>
```

**Response:**
```json
{
  "status": "success",
  "message": "User deactivated successfully",
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "isActive": false,
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### Delete User
**DELETE** `/api/users/:id`

Delete a user account (Admin only). Cannot delete yourself.

**Headers:**
```
Authorization: Bearer <admin-token>
```

**Response:**
```json
{
  "status": "success",
  "message": "User deleted successfully"
}
```

## Using Authentication in Your Requests

### Example with cURL

```bash
# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@elkassaby.com",
    "password": "admin123"
  }'

# Use token in subsequent requests
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Example with JavaScript (Fetch)

```javascript
// Login
const loginResponse = await fetch('http://localhost:5000/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'admin@elkassaby.com',
    password: 'admin123'
  })
});

const loginData = await loginResponse.json();
const token = loginData.data.token;

// Use token in subsequent requests
const meResponse = await fetch('http://localhost:5000/api/auth/me', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

const userData = await meResponse.json();
```

## Creating an Admin User

Run the script to create an initial admin user:

```bash
node scripts/createAdmin.js
```

This will create:
- Email: `admin@elkassaby.com`
- Password: `admin123`
- Role: `admin`

**⚠️ Important:** Change the password after first login!

## Protecting Routes

To protect routes in your application, use the `protect` middleware:

```javascript
const { protect } = require('./middleware/auth');

router.get('/protected-route', protect, yourController);
```

To restrict to specific roles:

```javascript
const { protect, restrictTo } = require('./middleware/auth');

router.delete('/admin-only', protect, restrictTo('admin'), yourController);
```

## Error Responses

All endpoints return consistent error responses:

```json
{
  "status": "error",
  "message": "Error message here"
}
```

Common HTTP status codes:
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (authentication required)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `500` - Internal Server Error

## Security Notes

1. **JWT Secret**: Always use a strong, random secret in production
2. **Password**: Minimum 6 characters (consider increasing for production)
3. **HTTPS**: Always use HTTPS in production
4. **Token Expiry**: Tokens expire after 30 days (configurable via JWT_EXPIRE)
5. **Password Hashing**: Uses bcrypt with 12 salt rounds
6. **Rate Limiting**: Consider adding rate limiting for login/register endpoints

