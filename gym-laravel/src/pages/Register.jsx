import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [password_confirmation,setPasswordConfirmation] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    const res = await dispatch(register({ name, email, password, password_confirmation }))
    if (res.type.endsWith('fulfilled')) navigate('/')
  }

  return (
    <div className="g" style={{padding:40}}>
      <h2>Register</h2>
      <form onSubmit={submit} style={{maxWidth:400}}>
        <div><input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" /></div>
        <div><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" /></div>
        <div><input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" /></div>
        <div><input value={password_confirmation} onChange={e=>setPasswordConfirmation(e.target.value)} placeholder="Confirm password" type="password" /></div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
