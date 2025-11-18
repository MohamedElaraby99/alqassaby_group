# Elkassaby Group Backend API

Backend API for managing products and blogs with featured flags, built with Express.js and MongoDB.

## Features

- **Products Management**: Full CRUD operations for products
- **Blogs Management**: Full CRUD operations for blogs with slug-based routing
- **File Upload**: Image upload support for products and blogs
- **Featured Items**: Toggle featured status for both products and blogs
- **Filtering & Pagination**: Query products and blogs with various filters
- **Input Validation**: Comprehensive validation using express-validator
- **Error Handling**: Centralized error handling middleware
- **MongoDB Integration**: Mongoose ODM for database operations

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Multer** - File upload middleware
- **express-validator** - Input validation
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger
- **dotenv** - Environment variable management

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/elkassaby-group
NODE_ENV=development
```

## Running the Server

### Development mode (with auto-reload):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
- **GET** `/api/health` - Check server status

### Products API

#### Get All Products
- **GET** `/api/products`
- Query Parameters:
  - `featured` (boolean): Filter by featured status
  - `category` (string): Filter by category
  - `inStock` (boolean): Filter by stock status
  - `limit` (number): Items per page (default: 10)
  - `page` (number): Page number (default: 1)

Example: `/api/products?featured=true&limit=5&page=1`

#### Get Featured Products
- **GET** `/api/products/featured`
- Query Parameters:
  - `limit` (number): Maximum number of items (default: 10)

#### Get Product by ID
- **GET** `/api/products/:id`

#### Create Product
- **POST** `/api/products`
- Content-Type: `multipart/form-data` (with file) or `application/json` (URL only)

**Option 1: With File Upload (multipart/form-data)**
```javascript
// Using FormData
const formData = new FormData();
formData.append('name', 'Product Name');
formData.append('description', 'Product description');
formData.append('price', '99.99');
formData.append('category', 'Electronics');
formData.append('image', fileInput.files[0]); // Image file
formData.append('featured', 'false');
formData.append('inStock', 'true');

fetch('http://localhost:5000/api/products', {
  method: 'POST',
  body: formData
});
```

**Option 2: With Image URL (application/json)**
```json
{
  "name": "Product Name",
  "description": "Product description",
  "price": 99.99,
  "category": "Electronics",
  "image": "https://example.com/image.jpg",
  "featured": false,
  "inStock": true,
  "tags": ["tag1", "tag2"],
  "specifications": {
    "weight": "500g",
    "dimensions": "10x10x5cm"
  }
}
```

#### Update Product
- **PUT** `/api/products/:id`
- Body: Same as create (all fields)

#### Toggle Featured Status
- **PATCH** `/api/products/:id/featured`
- No body required - toggles current status

#### Delete Product
- **DELETE** `/api/products/:id`

### Blogs API

#### Get All Blogs
- **GET** `/api/blogs`
- Query Parameters:
  - `featured` (boolean): Filter by featured status
  - `category` (string): Filter by category
  - `published` (boolean): Filter by published status
  - `limit` (number): Items per page (default: 10)
  - `page` (number): Page number (default: 1)

Example: `/api/blogs?featured=true&published=true&limit=5`

#### Get Featured Blogs
- **GET** `/api/blogs/featured`
- Query Parameters:
  - `limit` (number): Maximum number of items (default: 10)

#### Get Blog by Slug
- **GET** `/api/blogs/slug/:slug`

Example: `/api/blogs/slug/my-first-blog-post`

#### Get Blog by ID
- **GET** `/api/blogs/:id`

#### Create Blog
- **POST** `/api/blogs`
- Content-Type: `multipart/form-data` (with file) or `application/json` (URL only)

**Option 1: With File Upload (multipart/form-data)**
```javascript
// Using FormData
const formData = new FormData();
formData.append('title', 'Blog Title');
formData.append('slug', 'blog-title');
formData.append('content', 'Full blog content here...');
formData.append('excerpt', 'Short summary of the blog');
formData.append('author', 'Author Name');
formData.append('image', fileInput.files[0]); // Image file
formData.append('featured', 'false');
formData.append('published', 'true');
formData.append('category', 'News');

fetch('http://localhost:5000/api/blogs', {
  method: 'POST',
  body: formData
});
```

**Option 2: With Image URL (application/json)**
```json
{
  "title": "Blog Title",
  "slug": "blog-title",
  "content": "Full blog content here...",
  "excerpt": "Short summary of the blog",
  "author": "Author Name",
  "image": "https://example.com/image.jpg",
  "featured": false,
  "published": true,
  "category": "News",
  "tags": ["tag1", "tag2"]
}
```

#### Update Blog
- **PUT** `/api/blogs/:id`
- Body: Same as create (all fields)

#### Toggle Featured Status
- **PATCH** `/api/blogs/:id/featured`
- No body required - toggles current status

#### Increment Views
- **PATCH** `/api/blogs/:id/views`
- No body required - increments view count by 1

#### Delete Blog
- **DELETE** `/api/blogs/:id`

### File Upload API

#### Upload Image
- **POST** `/api/upload/image`
- Content-Type: `multipart/form-data`
- Body: Form data with field name `image`

**Response:**
```json
{
  "status": "success",
  "message": "File uploaded successfully",
  "data": {
    "filename": "product-1234567890-123456789.jpg",
    "originalName": "product.jpg",
    "url": "/uploads/product-1234567890-123456789.jpg",
    "size": 123456,
    "mimetype": "image/jpeg"
  }
}
```

**Example using cURL:**
```bash
curl -X POST http://localhost:5000/api/upload/image \
  -F "image=@/path/to/your/image.jpg"
```

**Example using JavaScript:**
```javascript
const formData = new FormData();
formData.append('image', fileInput.files[0]);

fetch('http://localhost:5000/api/upload/image', {
  method: 'POST',
  body: formData
})
.then(res => res.json())
.then(data => {
  console.log('Image URL:', data.data.url);
  // Use data.data.url when creating/updating products or blogs
});
```

**Upload Multiple Images:**
- **POST** `/api/upload/images`
- Content-Type: `multipart/form-data`
- Body: Form data with field name `images` (array of files, max 10)

### File Upload Specifications

- **Supported Formats**: JPEG, JPG, PNG, GIF, WebP
- **Maximum File Size**: 5MB per file
- **Storage Location**: Files are stored in `backend/uploads/` directory
- **Access URL**: Uploaded images are accessible at `http://localhost:5000/uploads/filename.jpg`
- **Automatic Handling**: When uploading files directly in create/update endpoints, the `image` field is automatically set

## Response Format

### Success Response
```json
{
  "status": "success",
  "message": "Optional message",
  "data": { /* response data */ },
  "results": 5,
  "total": 50,
  "page": 1,
  "totalPages": 10
}
```

### Error Response
```json
{
  "status": "error",
  "message": "Error message",
  "errors": [ /* validation errors if any */ ]
}
```

## Database Schema

### Product Schema
```javascript
{
  name: String (required, max 200 chars),
  description: String (required),
  price: Number (required, min 0),
  category: String (required),
  image: String,
  featured: Boolean (default: false),
  inStock: Boolean (default: true),
  tags: [String],
  specifications: Map of String,
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

### Blog Schema
```javascript
{
  title: String (required, max 200 chars),
  slug: String (required, unique),
  content: String (required),
  excerpt: String (required, max 500 chars),
  author: String (required),
  image: String,
  featured: Boolean (default: false),
  published: Boolean (default: true),
  category: String (required),
  tags: [String],
  views: Number (default: 0),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

## MongoDB Setup

### Local MongoDB
1. Install MongoDB on your machine
2. Start MongoDB service:
```bash
# Windows
net start MongoDB

# macOS (Homebrew)
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

3. Update `MONGODB_URI` in `.env` to:
```
MONGODB_URI=mongodb://localhost:27017/elkassaby-group
```

### MongoDB Atlas (Cloud)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env` to:
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/elkassaby-group
```

## Testing the API

### Using cURL

**Create a product (with JSON):**
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sample Product",
    "description": "This is a sample product",
    "price": 49.99,
    "category": "Electronics",
    "featured": true
  }'
```

**Create a product (with image file):**
```bash
curl -X POST http://localhost:5000/api/products \
  -F "name=Sample Product" \
  -F "description=This is a sample product" \
  -F "price=49.99" \
  -F "category=Electronics" \
  -F "featured=true" \
  -F "image=@/path/to/image.jpg"
```

**Upload an image:**
```bash
curl -X POST http://localhost:5000/api/upload/image \
  -F "image=@/path/to/image.jpg"
```

**Get all featured products:**
```bash
curl http://localhost:5000/api/products/featured
```

**Toggle featured status:**
```bash
curl -X PATCH http://localhost:5000/api/products/<product-id>/featured
```

### Using Postman or Thunder Client
1. Import the endpoints from this README
2. Set base URL to `http://localhost:5000`
3. Test each endpoint with sample data

## Project Structure
```
backend/
├── config/
│   └── database.js          # MongoDB connection
├── controllers/
│   ├── productController.js # Product business logic
│   └── blogController.js    # Blog business logic
├── middleware/
│   ├── validate.js          # Validation middleware
│   └── upload.js            # File upload middleware (Multer)
├── models/
│   ├── Product.js           # Product schema
│   └── Blog.js              # Blog schema
├── routes/
│   ├── productRoutes.js     # Product routes
│   ├── blogRoutes.js        # Blog routes
│   └── uploadRoutes.js      # File upload routes
├── uploads/                 # Uploaded images directory (auto-created)
├── .env                     # Environment variables (create this)
├── .env.example             # Example environment file
├── .gitignore
├── package.json
├── server.js                # Entry point
└── README.md
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/elkassaby-group |
| `NODE_ENV` | Environment (development/production) | development |

## Error Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `404` - Not Found
- `500` - Internal Server Error

## Development Tips

1. **Validation**: All inputs are validated. Check validation errors in response.
2. **Slug Format**: Blog slugs must be lowercase with hyphens only (e.g., "my-blog-post")
3. **Featured Items**: Use the dedicated toggle endpoint to change featured status
4. **Pagination**: Always use pagination for large datasets to improve performance
5. **Categories**: Consider creating a predefined list of categories for consistency

## Next Steps

1. Add authentication and authorization
2. Add search functionality
3. Implement caching (Redis)
4. Add rate limiting
5. Set up logging service
6. Create admin dashboard
7. Add API documentation (Swagger)
8. Add image optimization/resizing

## Support

For issues or questions, please contact the development team.

---

**Version:** 1.0.0  
**Last Updated:** 2024

