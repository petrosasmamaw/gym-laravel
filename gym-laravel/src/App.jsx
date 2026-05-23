import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TrainersPage from './pages/Trainers'
import { useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const trainers = useSelector((s) => s.trainers.items)
  const status = useSelector((s) => s.trainers.status)
  const error = useSelector((s) => s.trainers.error)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home previewTrainers={trainers} />} />
        <Route path="/trainers" element={<TrainersPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
