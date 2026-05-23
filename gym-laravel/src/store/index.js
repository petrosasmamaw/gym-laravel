import { configureStore } from '@reduxjs/toolkit'
import trainerReducer from './trainerSlice'
import authReducer from './authSlice'

export const store = configureStore({
  reducer: {
    trainers: trainerReducer,
    auth: authReducer,
  },
})
