import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export default function Navbar(){
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
      <div className="nav-r">
        <NavLink to="/" end className={({isActive}) => "nl" + (isActive ? " on" : "")}>Home</NavLink>
        <span className="nl">Programs</span>
        <NavLink to="/trainers" className={({isActive}) => "nl" + (isActive ? " on" : "")}>Trainers</NavLink>
        <span className="nl">Nutrition</span>
        <span className="nl">Pricing</span>
      </div>
      <button className="njoin">Join Now</button>
    </nav>
  )
}
