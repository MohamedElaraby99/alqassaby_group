# File Upload Guide

## Overview
The backend now supports file uploads for blog and product images. You can upload images in two ways:

1. **Direct upload during create/update** - Upload files directly when creating or updating blogs/products
2. **Separate upload endpoint** - Upload files first, then use the returned URL

## Supported Image Formats
- JPEG/JPG
- PNG
- GIF
- WebP

## File Size Limit
- Maximum file size: **5MB**

## Upload Methods

### Method 1: Direct Upload (Recommended)

When creating or updating a blog/product, you can include the image file directly in the request.

#### Create Blog with Image
```bash
POST /api/blogs
Content-Type: multipart/form-data

Form Data:
- title: "My Blog Title"
- slug: "my-blog-title"
- content: "Blog content here..."
- excerpt: "Short excerpt"
- author: "Author Name"
- category: "News"
- image: [FILE] (optional - upload image file)
```

#### Create Product with Image
```bash
POST /api/products
Content-Type: multipart/form-data

Form Data:
- name: "Product Name"
- description: "Product description"
- price: 99.99
- category: "Electronics"
- image: [FILE] (optional - upload image file)
```

#### Using cURL
```bash
curl -X POST http://localhost:5000/api/products \
  -F "name=My Product" \
  -F "description=Product description" \
  -F "price=99.99" \
  -F "category=Electronics" \
  -F "image=@/path/to/image.jpg"
```

#### Using JavaScript (FormData)
```javascript
const formData = new FormData();
formData.append('name', 'My Product');
formData.append('description', 'Product description');
formData.append('price', '99.99');
formData.append('category', 'Electronics');
formData.append('image', fileInput.files[0]); // file from input element

fetch('http://localhost:5000/api/products', {
  method: 'POST',
  body: formData
});
```

### Method 2: Separate Upload Endpoint

Upload the image first, then use the returned URL when creating/updating.

#### Upload Image
```bash
POST /api/upload/image
Content-Type: multipart/form-data

Form Data:
- image: [FILE]
```

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

Then use the `url` field when creating/updating:
```bash
POST /api/products
Content-Type: application/json

{
  "name": "My Product",
  "description": "Product description",
  "price": 99.99,
  "category": "Electronics",
  "image": "/uploads/product-1234567890-123456789.jpg"
}
```

## Image URLs

Uploaded images are stored in the `backend/uploads/` directory and served at:
```
http://localhost:5000/uploads/filename.jpg
```

The image field in blogs/products will contain the path: `/uploads/filename.jpg`

## Notes

- If you upload a file, it will automatically set the `image` field
- If you don't upload a file, you can still provide an `image` URL string in the JSON body
- The uploads directory is automatically created if it doesn't exist
- File names are automatically sanitized and made unique with timestamps

