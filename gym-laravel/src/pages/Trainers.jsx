import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrainers } from '../store/trainerSlice'
import { Link } from 'react-router-dom'
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
