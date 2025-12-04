import axios from 'axios';

// Detect if we're in production based on hostname or environment
const isProduction = 
  import.meta.env.VITE_API_URL?.includes('api.elkassaby.com') ||
  import.meta.env.MODE === 'production' ||
  (typeof window !== 'undefined' && 
   (window.location.hostname === 'adminpanel.elkassaby.com' || 
    window.location.hostname === 'www.adminpanel.elkassaby.com'));

// Use production API URL by default, fallback to localhost for development
const API_BASE_URL = import.meta.env.VITE_API_URL || 
  (isProduction 
    ? 'https://api.elkassaby.com/api' 
    : 'http://localhost:5006/api');

export const BASE_URL = import.meta.env.VITE_BASE_URL || 
  (isProduction 
    ? 'https://api.elkassaby.com' 
    : 'http://localhost:5006');

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Products API
export const productsAPI = {
  getAll: (params = {}) => api.get('/products', { params }),
  getById: (id) => api.get(`/products/${id}`),
  create: (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'image' && data[key] instanceof File) {
        formData.append('image', data[key]);
      } else if (key === 'tags' && Array.isArray(data[key])) {
        data[key].forEach(tag => formData.append('tags', tag));
      } else if (key === 'specifications' && typeof data[key] === 'object') {
        // Only include specifications if it has values
        const specs = data[key];
        if (specs && Object.keys(specs).length > 0) {
          // Send as JSON string - backend middleware will parse it
          formData.append('specifications', JSON.stringify(specs));
        }
        // Skip empty specifications object
      } else if (data[key] !== null && data[key] !== undefined) {
        formData.append(key, data[key]);
      }
    });
    return api.post('/products', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  update: (id, data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'image' && data[key] instanceof File) {
        formData.append('image', data[key]);
      } else if (key === 'tags' && Array.isArray(data[key])) {
        data[key].forEach(tag => formData.append('tags', tag));
      } else if (key === 'specifications' && typeof data[key] === 'object') {
        // Only include specifications if it has values
        const specs = data[key];
        if (specs && Object.keys(specs).length > 0) {
          // Send as JSON string - backend middleware will parse it
          formData.append('specifications', JSON.stringify(specs));
        }
        // Skip empty specifications object
      } else if (data[key] !== null && data[key] !== undefined) {
        formData.append(key, data[key]);
      }
    });
    return api.put(`/products/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  delete: (id) => api.delete(`/products/${id}`),
  toggleFeatured: (id) => api.patch(`/products/${id}/featured`),
};

// Blogs API
export const blogsAPI = {
  getAll: (params = {}) => api.get('/blogs', { params }),
  getById: (id) => api.get(`/blogs/${id}`),
  getBySlug: (slug) => api.get(`/blogs/slug/${slug}`),
  create: (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'image' && data[key] instanceof File) {
        formData.append('image', data[key]);
      } else if (key === 'tags' && Array.isArray(data[key])) {
        data[key].forEach(tag => formData.append('tags', tag));
      } else if (data[key] !== null && data[key] !== undefined) {
        formData.append(key, data[key]);
      }
    });
    return api.post('/blogs', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  update: (id, data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'image' && data[key] instanceof File) {
        formData.append('image', data[key]);
      } else if (key === 'tags' && Array.isArray(data[key])) {
        data[key].forEach(tag => formData.append('tags', tag));
      } else if (data[key] !== null && data[key] !== undefined) {
        formData.append(key, data[key]);
      }
    });
    return api.put(`/blogs/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  delete: (id) => api.delete(`/blogs/${id}`),
  toggleFeatured: (id) => api.patch(`/blogs/${id}/featured`),
  incrementViews: (id) => api.patch(`/blogs/${id}/views`),
};

// Newsletter API
export const newsletterAPI = {
  getAll: (params = {}) => api.get('/newsletter/subscribers', { params }),
  getStats: () => api.get('/newsletter/stats'),
  unsubscribe: (id) => api.patch(`/newsletter/unsubscribe/${id}`),
  delete: (id) => api.delete(`/newsletter/${id}`),
};

// Contact API
export const contactAPI = {
  getAll: (params = {}) => api.get('/contact/submissions', { params }),
  getById: (id) => api.get(`/contact/${id}`),
  getStats: () => api.get('/contact/stats'),
  markAsRead: (id) => api.patch(`/contact/${id}/read`),
  markAsReplied: (id) => api.patch(`/contact/${id}/replied`),
  delete: (id) => api.delete(`/contact/${id}`),
};

// Users API
export const usersAPI = {
  getAll: (params = {}) => api.get('/users', { params }),
  getById: (id) => api.get(`/users/${id}`),
  create: (data) => api.post('/users', data),
  update: (id, data) => api.put(`/users/${id}`, data),
  delete: (id) => api.delete(`/users/${id}`),
};

export default api;

