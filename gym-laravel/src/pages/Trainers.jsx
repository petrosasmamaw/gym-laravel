import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrainers } from '../store/trainerSlice'
import Navbar from '../components/Navbar'
import '../styles/mag.css'

export default function Trainers(){
  const dispatch = useDispatch()
  const { items = [], status, error } = useSelector(s => s.trainers || {})
  const [showAll, setShowAll] = useState(false)

  useEffect(()=>{ if(status==='idle') dispatch(fetchTrainers()) },[dispatch,status])

  const visible = showAll ? items : items.slice(0,3)

  return (
    <div className="g">
      <Navbar />
      <div className="hero">
        <div className="hero-l">
          <div className="hero-pill"><div className="dot"></div>Elite Coaches</div>
          <h1 className="hero-h1">Train With<br/><em>World-Class</em><br/>Coaches.</h1>
          <p className="hero-p">Our trainers bring proven expertise, personalized programming, and relentless support to help you reach your goals faster.</p>
          <div className="hero-btns">
            <button className="btn-o">Start Training</button>
            <button className="btn-g"> <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg> Watch Intro</button>
          </div>
          <div className="stats">
            <div><div className="sn">3K+</div><div className="sl">Active Clients</div></div>
            <div><div className="sn">120+</div><div className="sl">Years Combined</div></div>
            <div><div className="sn">4.9★</div><div className="sl">Average Rating</div></div>
            <div><div className="sn">100%</div><div className="sl">Satisfaction</div></div>
          </div>
        </div>

        <div className="hero-r">
          <img src="https://picsum.photos/seed/trainers/800/600" alt="Trainers" />
          <div className="hero-overlay"></div>
          <div className="hero-badge">
            <div className="hb-n">+120</div>
            <div className="hb-l">Certified Coaches</div>
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="sec-label">Our Team</div>
        <h2 className="sec-h">Meet The Trainers</h2>
        <p className="sec-p">Elite coaches hand-picked for results: certified, experienced, and ready to guide you.</p>

        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:18}}>
          <div />
          <button onClick={()=>setShowAll(s=>!s)} className="trainer-btn">{showAll? 'Hide Trainers' : 'View All Trainers'}</button>
        </div>

        <div className="tgrid">
          {visible.map(t => (
            <div key={t.id} className="tcard">
              <img src={`https://picsum.photos/seed/tr${t.id}/600/400`} alt={t.name} />
              <div className="tbody">
                <div className="tname">{t.name}</div>
                <div className="tmeta"><div className="ttag">{t.specialty || 'Coach'}</div></div>
                <div className="tdesc">{t.bio || t.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
