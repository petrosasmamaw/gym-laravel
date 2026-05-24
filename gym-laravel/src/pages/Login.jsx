import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'
import { images } from '../assets/imageUrls'
import '../styles/mag.css'

export default function Login(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch()
  const status = useSelector(s => s.auth.status)
  const error = useSelector(s => s.auth.error)
  const user = useSelector(s => s.auth.user)
  const navigate = useNavigate()

  if (user) return <Navigate to="/" replace />

  const submit = async (e) => {
    e.preventDefault()
    const res = await dispatch(login({ email, password }))
    if (res.type.endsWith('fulfilled')) navigate('/')
  }

  return (
    <div className="g auth-page">
      <div className="auth-bg" style={{backgroundImage:`url(${images.hero})`}} />
      <div className="auth-card">
        <h2 style={{marginBottom:8}}>Welcome back</h2>
        <p style={{color:'#bbb',marginBottom:18}}>Sign in to your account to continue</p>
        <form onSubmit={submit} className="auth-form">
          {error && <div style={{color:'#ff8b8b',fontSize:13,marginBottom:6}}>{error.message || 'Login failed'}</div>}
          <div className="auth-input"><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" /></div>
          <div className="auth-input"><input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" /></div>
          <button className="auth-btn" type="submit" disabled={status==='loading'}>{status==='loading' ? 'Logging in...' : 'Login'}</button>
        </form>
      </div>
    </div>
  )
}
