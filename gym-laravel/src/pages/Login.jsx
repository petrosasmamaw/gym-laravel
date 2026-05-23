import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    const res = await dispatch(login({ email, password }))
    if (res.type.endsWith('fulfilled')) navigate('/')
  }

  return (
    <div className="g" style={{padding:40}}>
      <h2>Login</h2>
      <form onSubmit={submit} style={{maxWidth:400}}>
        <div><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" /></div>
        <div><input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" /></div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
