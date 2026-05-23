import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTrainers = createAsyncThunk('trainers/fetch', async () => {
  const res = await fetch('http://127.0.0.1:8000/api/trainers')
  if (!res.ok) throw new Error('Network error')
  return res.json()
})

const trainerSlice = createSlice({
  name: 'trainers',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrainers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTrainers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchTrainers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default trainerSlice.reducer
