import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrainers } from '../store/trainerSlice'
import { Link } from 'react-router-dom'

export default function Trainers(){
  const dispatch = useDispatch()
  const { items, status, error } = useSelector(s => s.trainers)
  const [showAll, setShowAll] = useState(false)

  useEffect(()=>{ if(status==='idle') dispatch(fetchTrainers()) },[dispatch,status])

  const visible = showAll ? items : items.slice(0,3)

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-white px-8 py-8">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold">Our Trainers</h1>
          <p className="text-[color:var(--secondary)] mt-1">World-class coaches ready to guide you.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-[color:var(--secondary)]">Home</Link>
          <button onClick={()=>setShowAll(s=>!s)} className="bg-[color:var(--accent)] px-4 py-2 rounded font-semibold text-black">{showAll? 'Hide Trainers' : 'View All Trainers'}</button>
        </div>
      </header>

      {status==='loading' && <div>Loading...</div>}
      {status==='failed' && <div className="text-red-400">{error}</div>}

      <div className="grid md:grid-cols-3 gap-6">
        {visible.map(t => (
          <article key={t.id} className="surface-card rounded-lg overflow-hidden hover:border-[2px] hover:border-[color:var(--accent)] transition-shadow">
            <img src={`https://picsum.photos/seed/trainer10${t.id}/400/300`} alt={t.name} className="w-full h-56 object-cover brightness-[0.75]" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{t.name}</h3>
                <div className="text-[color:var(--secondary)] text-sm">{t.age} • {t.sex}</div>
              </div>
              <div className="mt-2">
                <span className="inline-block bg-[color:var(--accent)] text-black px-2 py-1 rounded text-xs">Specialty</span>
              </div>
              <p className="mt-3 text-[color:var(--secondary)] text-sm">{t.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
