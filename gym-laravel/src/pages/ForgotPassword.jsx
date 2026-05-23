import React, { useState } from 'react'
import api from '../services/api'

export default function ForgotPassword(){
  const [email,setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    try {
      await api.post('/api/forgot-password', { email })
      setSent(true)
    } catch (e) {
      // ignore
    }
  }

  return (
    <div className="g" style={{padding:40}}>
      <h2>Forgot Password</h2>
      {sent ? <div>Check your email for reset instructions.</div> : (
        <form onSubmit={submit} style={{maxWidth:400}}>
          <div><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" /></div>
          <button type="submit">Send Reset Link</button>
        </form>
      )}
    </div>
  )
}
