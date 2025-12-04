/**
 * Application Configuration
 * Centralized configuration for API URLs and site URLs
 */

// Get API base URL from environment variable or use default
export const API_BASE_URL = 
  process.env.NEXT_PUBLIC_API_URL || 
  (process.env.NODE_ENV === 'production' 
    ? 'https://api.elkassaby.com/api' 
    : 'http://localhost:5000/api')

// Get API host (without /api) for image URLs
export const API_HOST = 
  process.env.NEXT_PUBLIC_API_HOST || 
  (process.env.NODE_ENV === 'production' 
    ? 'https://api.elkassaby.com' 
    : 'http://localhost:5000')

// Get site URL
export const SITE_URL = 
  process.env.NEXT_PUBLIC_SITE_URL || 
  (process.env.NODE_ENV === 'production' 
    ? 'https://elkassaby.com' 
    : 'http://localhost:3000')

// Frontend domains
export const FRONTEND_DOMAINS = [
  'elkassaby.com',
  'www.elkassaby.com',
  'localhost:3000',
]

// Backend domain
export const BACKEND_DOMAIN = 
  process.env.NODE_ENV === 'production' 
    ? 'api.elkassaby.com' 
    : 'localhost:5000'

