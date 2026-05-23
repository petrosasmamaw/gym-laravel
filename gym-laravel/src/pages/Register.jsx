import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'
import { images } from '../assets/imageUrls'
import '../styles/mag.css'

export default function Register(){
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [password_confirmation,setPasswordConfirmation] = useState('')
  const dispatch = useDispatch()
  const status = useSelector(s => s.auth.status)
  const error = useSelector(s => s.auth.error)
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    const res = await dispatch(register({ name, email, password, password_confirmation }))
    if (res.type.endsWith('fulfilled')) navigate('/')
  }

  return (
    <div className="g auth-page">
      <div className="auth-bg" style={{backgroundImage:`url(${images.trainersHero || images.hero})`}} />
      <div className="auth-card">
        <h2 style={{marginBottom:8}}>Create account</h2>
        <p style={{color:'#bbb',marginBottom:18}}>Start your fitness journey with IRONPEAK</p>
        <form onSubmit={submit} className="auth-form">
          {error && <div style={{color:'#ff8b8b',fontSize:13,marginBottom:6}}>{error.message || 'Registration failed'}</div>}
          <div className="auth-input"><input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" /></div>
          <div className="auth-input"><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" /></div>
          <div className="auth-input"><input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" /></div>
          <div className="auth-input"><input value={password_confirmation} onChange={e=>setPasswordConfirmation(e.target.value)} placeholder="Confirm password" type="password" /></div>
          <button className="auth-btn" type="submit" disabled={status==='loading'}>{status==='loading' ? 'Registering...' : 'Register'}</button>
        </form>
      </div>
    </div>
  )
}
