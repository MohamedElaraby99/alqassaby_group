/**
 * Simple API Test Script
 * Run this after starting the server to verify everything works
 * Usage: node test-api.js
 */

const http = require('http');

const BASE_URL = 'http://localhost:5000';

// Helper function to make HTTP requests
function makeRequest(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      }
    };

    const req = http.request(url, options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const response = {
            status: res.statusCode,
            data: body ? JSON.parse(body) : null
          };
          resolve(response);
        } catch (e) {
          resolve({ status: res.statusCode, data: body });
        }
      });
    });

    req.on('error', reject);
    
    if (data) {
      req.write(JSON.stringify(data));
    }
    
    req.end();
  });
}

// Test functions
async function testHealthCheck() {
  console.log('\n🏥 Testing Health Check...');
  const response = await makeRequest('GET', '/api/health');
  if (response.status === 200) {
    console.log('✅ Health check passed');
    return true;
  } else {
    console.log('❌ Health check failed');
    return false;
  }
}

async function testCreateProduct() {
  console.log('\n📦 Testing Create Product...');
  const product = {
    name: 'Test Product',
    description: 'This is a test product',
    price: 99.99,
    category: 'Test',
    featured: true
  };
  
  const response = await makeRequest('POST', '/api/products', product);
  if (response.status === 201) {
    console.log('✅ Product created successfully');
    console.log('   ID:', response.data.data._id);
    return response.data.data._id;
  } else {
    console.log('❌ Product creation failed');
    console.log('   Error:', response.data);
    return null;
  }
}

async function testGetProducts() {
  console.log('\n📋 Testing Get Products...');
  const response = await makeRequest('GET', '/api/products');
  if (response.status === 200) {
    console.log('✅ Products retrieved successfully');
    console.log('   Count:', response.data.results);
    return true;
  } else {
    console.log('❌ Failed to get products');
    return false;
  }
}

async function testGetFeaturedProducts() {
  console.log('\n⭐ Testing Get Featured Products...');
  const response = await makeRequest('GET', '/api/products/featured');
  if (response.status === 200) {
    console.log('✅ Featured products retrieved successfully');
    console.log('   Count:', response.data.results);
    return true;
  } else {
    console.log('❌ Failed to get featured products');
    return false;
  }
}

async function testCreateBlog() {
  console.log('\n📝 Testing Create Blog...');
  const blog = {
    title: 'Test Blog Post',
    slug: 'test-blog-post',
    content: 'This is the full content of the test blog post.',
    excerpt: 'This is a test blog',
    author: 'Test Author',
    category: 'Test',
    featured: true
  };
  
  const response = await makeRequest('POST', '/api/blogs', blog);
  if (response.status === 201) {
    console.log('✅ Blog created successfully');
    console.log('   ID:', response.data.data._id);
    console.log('   Slug:', response.data.data.slug);
    return response.data.data._id;
  } else {
    console.log('❌ Blog creation failed');
    console.log('   Error:', response.data);
    return null;
  }
}

async function testGetBlogs() {
  console.log('\n📋 Testing Get Blogs...');
  const response = await makeRequest('GET', '/api/blogs');
  if (response.status === 200) {
    console.log('✅ Blogs retrieved successfully');
    console.log('   Count:', response.data.results);
    return true;
  } else {
    console.log('❌ Failed to get blogs');
    return false;
  }
}

async function testGetBlogBySlug() {
  console.log('\n🔍 Testing Get Blog by Slug...');
  const response = await makeRequest('GET', '/api/blogs/slug/test-blog-post');
  if (response.status === 200) {
    console.log('✅ Blog retrieved by slug successfully');
    console.log('   Title:', response.data.data.title);
    return true;
  } else {
    console.log('❌ Failed to get blog by slug');
    return false;
  }
}

async function testToggleFeatured(productId) {
  console.log('\n🔄 Testing Toggle Featured...');
  const response = await makeRequest('PATCH', `/api/products/${productId}/featured`);
  if (response.status === 200) {
    console.log('✅ Featured status toggled successfully');
    console.log('   Featured:', response.data.data.featured);
    return true;
  } else {
    console.log('❌ Failed to toggle featured status');
    return false;
  }
}

async function testDeleteProduct(productId) {
  console.log('\n🗑️  Testing Delete Product...');
  const response = await makeRequest('DELETE', `/api/products/${productId}`);
  if (response.status === 200) {
    console.log('✅ Product deleted successfully');
    return true;
  } else {
    console.log('❌ Failed to delete product');
    return false;
  }
}

async function testDeleteBlog(blogId) {
  console.log('\n🗑️  Testing Delete Blog...');
  const response = await makeRequest('DELETE', `/api/blogs/${blogId}`);
  if (response.status === 200) {
    console.log('✅ Blog deleted successfully');
    return true;
  } else {
    console.log('❌ Failed to delete blog');
    return false;
  }
}

// Run all tests
async function runTests() {
  console.log('🚀 Starting API Tests...');
  console.log('Make sure the server is running on', BASE_URL);
  
  try {
    // Test health
    const healthOk = await testHealthCheck();
    if (!healthOk) {
      console.log('\n❌ Server is not running or not responding');
      console.log('   Start the server with: npm run dev');
      return;
    }

    // Test products
    const productId = await testCreateProduct();
    await testGetProducts();
    await testGetFeaturedProducts();
    
    if (productId) {
      await testToggleFeatured(productId);
      await testDeleteProduct(productId);
    }

    // Test blogs
    const blogId = await testCreateBlog();
    await testGetBlogs();
    await testGetBlogBySlug();
    
    if (blogId) {
      await testDeleteBlog(blogId);
    }

    console.log('\n✨ All tests completed!');
    console.log('\n📚 Next steps:');
    console.log('   - Review the API_EXAMPLES.md for more examples');
    console.log('   - Integrate with your frontend');
    console.log('   - Add authentication if needed');
    
  } catch (error) {
    console.error('\n❌ Error during testing:', error.message);
    console.log('   Make sure MongoDB is running');
  }
}

// Run the tests
runTests();

