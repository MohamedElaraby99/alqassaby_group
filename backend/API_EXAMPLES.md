# API Usage Examples

Complete examples for testing your Products and Blogs API.

## Base URL
```
http://localhost:5000/api
```

---

## 📦 Products API Examples

### 1. Get All Products
```bash
# Get all products
curl http://localhost:5000/api/products

# Get products with pagination
curl "http://localhost:5000/api/products?page=1&limit=10"

# Filter by category
curl "http://localhost:5000/api/products?category=Electronics"

# Get only featured products (using main endpoint)
curl "http://localhost:5000/api/products?featured=true"

# Get in-stock products
curl "http://localhost:5000/api/products?inStock=true"

# Combined filters
curl "http://localhost:5000/api/products?featured=true&category=Electronics&limit=5"
```

### 2. Get Featured Products
```bash
# Get featured products (dedicated endpoint)
curl http://localhost:5000/api/products/featured

# Limit featured products
curl "http://localhost:5000/api/products/featured?limit=5"
```

### 3. Get Single Product
```bash
# Replace <product-id> with actual MongoDB ObjectId
curl http://localhost:5000/api/products/<product-id>
```

### 4. Create Product
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Premium Laptop",
    "description": "High-performance laptop with latest specifications",
    "price": 1299.99,
    "category": "Electronics",
    "image": "https://example.com/laptop.jpg",
    "featured": true,
    "inStock": true,
    "tags": ["laptop", "premium", "electronics"],
    "specifications": {
      "processor": "Intel i7",
      "ram": "16GB",
      "storage": "512GB SSD"
    }
  }'
```

### 5. Update Product
```bash
curl -X PUT http://localhost:5000/api/products/<product-id> \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Premium Gaming Laptop",
    "description": "High-performance gaming laptop",
    "price": 1499.99,
    "category": "Electronics",
    "featured": true,
    "inStock": true,
    "tags": ["laptop", "gaming", "premium"]
  }'
```

### 6. Toggle Featured Status
```bash
# Toggle featured on/off
curl -X PATCH http://localhost:5000/api/products/<product-id>/featured
```

### 7. Delete Product
```bash
curl -X DELETE http://localhost:5000/api/products/<product-id>
```

---

## 📝 Blogs API Examples

### 1. Get All Blogs
```bash
# Get all blogs
curl http://localhost:5000/api/blogs

# Get blogs with pagination
curl "http://localhost:5000/api/blogs?page=1&limit=10"

# Filter by category
curl "http://localhost:5000/api/blogs?category=News"

# Get only featured blogs (using main endpoint)
curl "http://localhost:5000/api/blogs?featured=true"

# Get only published blogs
curl "http://localhost:5000/api/blogs?published=true"

# Combined filters
curl "http://localhost:5000/api/blogs?featured=true&published=true&category=News&limit=5"
```

### 2. Get Featured Blogs
```bash
# Get featured blogs (dedicated endpoint)
curl http://localhost:5000/api/blogs/featured

# Limit featured blogs
curl "http://localhost:5000/api/blogs/featured?limit=5"
```

### 3. Get Blog by Slug
```bash
# Get blog using its slug (SEO-friendly URL)
curl http://localhost:5000/api/blogs/slug/my-first-blog-post
```

### 4. Get Blog by ID
```bash
# Replace <blog-id> with actual MongoDB ObjectId
curl http://localhost:5000/api/blogs/<blog-id>
```

### 5. Create Blog
```bash
curl -X POST http://localhost:5000/api/blogs \
  -H "Content-Type: application/json" \
  -d '{
    "title": "How to Build a REST API",
    "slug": "how-to-build-rest-api",
    "content": "In this comprehensive guide, we will explore how to build a REST API using Node.js and Express. We will cover routing, middleware, database integration, and more...",
    "excerpt": "Learn how to build a REST API from scratch using Node.js and Express",
    "author": "John Doe",
    "image": "https://example.com/api-guide.jpg",
    "featured": true,
    "published": true,
    "category": "Tutorial",
    "tags": ["nodejs", "express", "api", "tutorial"]
  }'
```

### 6. Update Blog
```bash
curl -X PUT http://localhost:5000/api/blogs/<blog-id> \
  -H "Content-Type: application/json" \
  -d '{
    "title": "How to Build a REST API - Updated",
    "slug": "how-to-build-rest-api-updated",
    "content": "Updated content...",
    "excerpt": "Updated excerpt...",
    "author": "John Doe",
    "featured": true,
    "published": true,
    "category": "Tutorial",
    "tags": ["nodejs", "express", "api"]
  }'
```

### 7. Toggle Featured Status
```bash
# Toggle featured on/off
curl -X PATCH http://localhost:5000/api/blogs/<blog-id>/featured
```

### 8. Increment Views
```bash
# Increment view counter (call this when blog is viewed)
curl -X PATCH http://localhost:5000/api/blogs/<blog-id>/views
```

### 9. Delete Blog
```bash
curl -X DELETE http://localhost:5000/api/blogs/<blog-id>
```

---

## 🔧 PowerShell Examples (Windows)

If you're on Windows, use these PowerShell equivalents:

### Create Product (PowerShell)
```powershell
$body = @{
    name = "Premium Laptop"
    description = "High-performance laptop"
    price = 1299.99
    category = "Electronics"
    featured = $true
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/products" -Method Post -Body $body -ContentType "application/json"
```

### Get Featured Products (PowerShell)
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/products/featured" -Method Get
```

### Create Blog (PowerShell)
```powershell
$body = @{
    title = "My Blog Post"
    slug = "my-blog-post"
    content = "Full content here..."
    excerpt = "Short summary"
    author = "John Doe"
    category = "News"
    featured = $true
    published = $true
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/blogs" -Method Post -Body $body -ContentType "application/json"
```

---

## 📊 Response Examples

### Successful GET (Multiple Items)
```json
{
  "status": "success",
  "results": 5,
  "total": 25,
  "page": 1,
  "totalPages": 3,
  "data": [
    {
      "_id": "6547abc123def456789012",
      "name": "Premium Laptop",
      "description": "High-performance laptop",
      "price": 1299.99,
      "category": "Electronics",
      "featured": true,
      "inStock": true,
      "createdAt": "2024-01-01T10:00:00.000Z",
      "updatedAt": "2024-01-01T10:00:00.000Z"
    }
    // ... more items
  ]
}
```

### Successful POST/PUT
```json
{
  "status": "success",
  "message": "Product created successfully",
  "data": {
    "_id": "6547abc123def456789012",
    "name": "Premium Laptop",
    "price": 1299.99,
    "featured": true
    // ... other fields
  }
}
```

### Successful DELETE
```json
{
  "status": "success",
  "message": "Product deleted successfully"
}
```

### Validation Error
```json
{
  "status": "error",
  "message": "Validation failed",
  "errors": [
    {
      "field": "price",
      "message": "Price must be a number",
      "value": "invalid"
    }
  ]
}
```

### Not Found Error
```json
{
  "status": "error",
  "message": "Product not found"
}
```

---

## 🧪 Testing Workflow

### Complete Product Workflow
```bash
# 1. Create a product
PRODUCT_ID=$(curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Product","description":"Test","price":99,"category":"Test"}' \
  | jq -r '.data._id')

# 2. Get the product
curl http://localhost:5000/api/products/$PRODUCT_ID

# 3. Mark as featured
curl -X PATCH http://localhost:5000/api/products/$PRODUCT_ID/featured

# 4. Get all featured products
curl http://localhost:5000/api/products/featured

# 5. Update the product
curl -X PUT http://localhost:5000/api/products/$PRODUCT_ID \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Product","description":"Updated","price":149,"category":"Test"}'

# 6. Delete the product
curl -X DELETE http://localhost:5000/api/products/$PRODUCT_ID
```

### Complete Blog Workflow
```bash
# 1. Create a blog
BLOG_ID=$(curl -X POST http://localhost:5000/api/blogs \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Blog","slug":"test-blog","content":"Content","excerpt":"Excerpt","author":"Test","category":"Test"}' \
  | jq -r '.data._id')

# 2. Get blog by slug
curl http://localhost:5000/api/blogs/slug/test-blog

# 3. Increment views
curl -X PATCH http://localhost:5000/api/blogs/$BLOG_ID/views

# 4. Mark as featured
curl -X PATCH http://localhost:5000/api/blogs/$BLOG_ID/featured

# 5. Get all featured blogs
curl http://localhost:5000/api/blogs/featured

# 6. Delete the blog
curl -X DELETE http://localhost:5000/api/blogs/$BLOG_ID
```

---

## 🎯 Use Cases

### Frontend Integration

**Fetch featured products for homepage:**
```javascript
fetch('http://localhost:5000/api/products/featured?limit=6')
  .then(res => res.json())
  .then(data => console.log(data.data));
```

**Fetch blog by slug for blog detail page:**
```javascript
const slug = 'my-blog-post';
fetch(`http://localhost:5000/api/blogs/slug/${slug}`)
  .then(res => res.json())
  .then(data => console.log(data.data));
```

**Increment blog views when page loads:**
```javascript
const blogId = '6547abc123def456789012';
fetch(`http://localhost:5000/api/blogs/${blogId}/views`, {
  method: 'PATCH'
});
```

---

## 📌 Tips

1. **Save IDs**: When creating items, save the returned `_id` for later operations
2. **Slugs**: Use lowercase letters, numbers, and hyphens only
3. **Featured Toggle**: No body needed - just call the endpoint
4. **Pagination**: Always use pagination for production
5. **Categories**: Be consistent with category names (case-sensitive)

---

Happy Testing! 🚀






