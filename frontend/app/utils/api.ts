import axios from 'axios'
import { API_BASE_URL } from './config'

// Create a configured axios instance with caching
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for caching (optional)
const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

apiClient.interceptors.response.use(
  (response) => {
    // Cache successful GET requests
    if (response.config.method === 'get') {
      const cacheKey = response.config.url || ''
      cache.set(cacheKey, {
        data: response.data,
        timestamp: Date.now(),
      })
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Helper function to get cached data
export function getCachedData(url: string) {
  const cached = cache.get(url)
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data
  }
  return null
}

// Helper function to clear cache
export function clearCache(url?: string) {
  if (url) {
    cache.delete(url)
  } else {
    cache.clear()
  }
}

export default apiClient

