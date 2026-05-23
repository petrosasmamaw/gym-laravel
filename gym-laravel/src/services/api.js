import axios from 'axios'

const api = axios.create({
  // Use relative URLs during development and proxy through Vite to avoid cross-site cookie issues
  baseURL: import.meta.env.DEV ? '' : (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'),
  withCredentials: true,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
})

// Helper to ensure CSRF cookie is set (Laravel Sanctum)
export async function ensureCsrf() {
  try {
    await api.get('/sanctum/csrf-cookie')
    // Ensure axios header is populated from cookie (some environments don't auto-populate)
    try {
      if (typeof document !== 'undefined' && document.cookie) {
        const m = document.cookie.match(new RegExp('(^| )XSRF-TOKEN=([^;]+)'))
        if (m) api.defaults.headers.common['X-XSRF-TOKEN'] = decodeURIComponent(m[2])
      }
    } catch (err) {
      // ignore
    }
  } catch (e) {
    // ignore
  }
}

export default api
