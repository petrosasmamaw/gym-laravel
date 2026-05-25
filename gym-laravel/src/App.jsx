import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Program from './pages/Program'
import TrainersPage from './pages/Trainers'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import ProtectedRoute from './components/ProtectedRoute'
import { useDispatch } from 'react-redux'
import { fetchCurrentUser } from './store/authSlice'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    // attempt to restore session
    dispatch(fetchCurrentUser())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/trainers" element={<ProtectedRoute><TrainersPage /></ProtectedRoute>} />
        <Route path="/programs" element={<ProtectedRoute><Program /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
