import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  withCredentials: true,
})

// Helper to ensure CSRF cookie is set (Laravel Sanctum)
export async function ensureCsrf() {
  try {
    await api.get('/sanctum/csrf-cookie')
  } catch (e) {
    // ignore
  }
}

export default api
