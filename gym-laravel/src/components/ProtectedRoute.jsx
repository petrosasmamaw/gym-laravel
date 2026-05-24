import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }){
  const user = useSelector(s => s.auth.user)
  const status = useSelector(s => s.auth.status)

  // while session is being restored, don't redirect (avoid flashing to login)
  if (status === 'loading') return null

  if (!user) return <Navigate to="/login" replace />
  return children
}
