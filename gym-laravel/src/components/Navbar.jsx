import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, clearUser, setUser } from '../store/authSlice'
import { fetchCurrentUser } from '../store/authSlice'
import './navbar.css'

export default function Navbar(){
  const user = useSelector(s => s.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const doLogout = async () => {
    // optimistically clear local user so UI updates immediately
    dispatch(clearUser())
    try {
      await dispatch(logout())
    } catch (e) {
      // ignore - local state already cleared
    }
    navigate('/login')

    // verify session cleared on server; if not, restore user and warn
    setTimeout(async () => {
      const res = await dispatch(fetchCurrentUser())
      if (res.type.endsWith('fulfilled') && res.payload) {
        // server still has session; restore local state and notify
        dispatch(setUser(res.payload))
        console.warn('Server-side logout failed; session still active')
        alert('Logout failed on server. Please try again.')
      }
    }, 300)
  }

  return (
    <nav className="nav">
      <div className="logo">
        <div className="logo-sq">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" y1="6" x2="8" y2="6"/><line x1="16" y1="6" x2="20" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/></svg>
        </div>
        <div>
          <div className="logo-name">IRONPEAK</div>
          <div className="logo-sub">Elite Fitness</div>
        </div>
      </div>
      {user && (
        <div className="nav-r">
          <NavLink to="/" end className={({isActive}) => "nl" + (isActive ? " on" : "")}>Home</NavLink>
          <NavLink to="/programs" className={({isActive}) => "nl" + (isActive ? " on" : "")}>Programs</NavLink>
          <NavLink to="/trainers" className={({isActive}) => "nl" + (isActive ? " on" : "")}>Trainers</NavLink>
          <NavLink to="/nutrition" className={({isActive}) => "nl" + (isActive ? " on" : "")}>Nutrition</NavLink>
          <NavLink to="/pricing" className={({isActive}) => "nl" + (isActive ? " on" : "")}>Pricing</NavLink>
        </div>
      )}
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        {user ? (
          <>
            <div style={{color:'#fff'}}>{user.name}</div>
            <button className="njoin" onClick={doLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={({isActive}) => "nl" + (isActive ? " on" : "")}>Login</NavLink>
            <NavLink to="/register" className={({isActive}) => "nl" + (isActive ? " on" : "")}>Register</NavLink>
          </>
        )}
      </div>
    </nav>
  )
}
