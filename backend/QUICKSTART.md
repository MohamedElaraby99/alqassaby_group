# Quick Start Guide

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas account)
- npm or yarn

## Setup in 3 Steps

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment
The `.env` file has been created with default values. Update if needed:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/elkassaby-group
NODE_ENV=development
```

### 3. Start the Server
```bash
# Development mode (auto-reload)
npm run dev

# OR Production mode
npm start
```

## Verify Installation
Once the server starts, test it:
```bash
curl http://localhost:5000/api/health
```

You should see:
```json
{
  "status": "success",
  "message": "Server is running",
  "timestamp": "2024-..."
}
```

## Create Your First Product
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sample Product",
    "description": "This is a test product",
    "price": 99.99,
    "category": "Test",
    "featured": true
  }'
```

## Create Your First Blog
```bash
curl -X POST http://localhost:5000/api/blogs \
  -H "Content-Type: application/json" \
  -d '{
    "title": "First Blog Post",
    "slug": "first-blog-post",
    "content": "This is the full content of my first blog post...",
    "excerpt": "A short summary",
    "author": "Admin",
    "category": "News",
    "featured": true
  }'
```

## Next Steps
- Read the full [README.md](README.md) for all API endpoints
- Set up MongoDB if using local installation
- Test all endpoints using Postman or Thunder Client
- Integrate with your Next.js frontend

## Troubleshooting

### Can't connect to MongoDB?
1. Make sure MongoDB is running locally, or
2. Use MongoDB Atlas and update the `MONGODB_URI` in `.env`

### Port already in use?
Change the `PORT` in `.env` to another port (e.g., 5001)

### Dependencies not installing?
Try: `npm install --legacy-peer-deps`

---
Happy coding! 🚀

