import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api, { ensureCsrf } from '../services/api'

export const fetchCurrentUser = createAsyncThunk('auth/fetchCurrentUser', async (_, { rejectWithValue }) => {
  try {
    const res = await api.get('/api/me')
    return res.data.user
  } catch (err) {
    return rejectWithValue(null)
  }
})

export const register = createAsyncThunk('auth/register', async (payload, { rejectWithValue }) => {
  try {
    await ensureCsrf()
    const res = await api.post('/api/register', payload)
    return res.data.user
  } catch (err) {
    return rejectWithValue(err.response?.data || { message: 'Registration failed' })
  }
})

export const login = createAsyncThunk('auth/login', async (payload, { rejectWithValue }) => {
  try {
    await ensureCsrf()
    const res = await api.post('/api/login', payload)
    return res.data.user
  } catch (err) {
    return rejectWithValue(err.response?.data || { message: 'Login failed' })
  }
})

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await api.post('/api/logout')
    return true
  } catch (err) {
    return rejectWithValue(null)
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => { state.user = action.payload; state.status = 'succeeded' })
      .addCase(fetchCurrentUser.rejected, (state) => { state.user = null; state.status = 'idle' })
      .addCase(register.fulfilled, (state, action) => { state.user = action.payload; state.status = 'authenticated' })
      .addCase(register.rejected, (state, action) => { state.error = action.payload; state.status = 'failed' })
      .addCase(login.fulfilled, (state, action) => { state.user = action.payload; state.status = 'authenticated' })
      .addCase(login.rejected, (state, action) => { state.error = action.payload; state.status = 'failed' })
      .addCase(logout.fulfilled, (state) => { state.user = null; state.status = 'idle' })
  }
})

export default authSlice.reducer
