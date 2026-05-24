import axios from 'axios'

const api = axios.create({
  // Use localhost (not 127.0.0.1) for consistency with frontend origin
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  withCredentials: true,
})

// Helper to extract cookie by name
function getCookie(name) {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? decodeURIComponent(match[2]) : null
}

// Helper to ensure CSRF cookie is set and token is available (Laravel Sanctum)
export async function ensureCsrf() {
  try {
    // Request CSRF cookie from the backend
    const response = await api.get('/sanctum/csrf-cookie')
    
    // Wait a tick for the cookie to be available
    await new Promise(r => setTimeout(r, 50))
    
    // Extract and set the CSRF token header
    const token = getCookie('XSRF-TOKEN')
    if (token) {
      api.defaults.headers.common['X-XSRF-TOKEN'] = token
      console.log('CSRF token set:', token.substring(0, 20) + '...')
    } else {
      console.warn('XSRF-TOKEN cookie not found after CSRF request')
    }
  } catch (e) {
    console.error('CSRF token fetch failed:', e)
  }
}

// Add request interceptor to ensure CSRF token is present before each request
api.interceptors.request.use((config) => {
  const token = getCookie('XSRF-TOKEN')
  if (token) {
    config.headers['X-XSRF-TOKEN'] = token
  }
  return config
})

// Response interceptor to log errors
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 419) {
      console.error('419 CSRF Token Mismatch - Token:', getCookie('XSRF-TOKEN')?.substring(0, 20))
      console.error('Response:', error.response?.data)
    }
    return Promise.reject(error)
  }
)

export default api
