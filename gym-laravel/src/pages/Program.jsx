import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import api, { ensureCsrf } from '../services/api'
import '../styles/program.css'

const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

function DayColumn({ day, items, onAdd, onRemove }){
  const [text, setText] = useState('')
  return (
    <div className="prog-day">
      <div className="pd-head">{day}</div>
      <div className="pd-list">
        {items.map((it,idx) => (
          <div key={idx} className="pd-item">
            <div className="pd-item-t">{it}</div>
            <button className="pd-item-x" onClick={() => onRemove(day, idx)}>×</button>
          </div>
        ))}
      </div>
      <div className="pd-add">
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="Add exercise or note" />
        <button onClick={() => { if (text.trim()){ onAdd(day, text.trim()); setText('') } }}>Add</button>
      </div>
    </div>
  )
}

export default function Program(){
  const user = useSelector(s => s.auth.user)
  const [schedule, setSchedule] = useState(() => {
    try {
      const key = localStorage.getItem('ip_program_schedule')
      return key ? JSON.parse(key) : DAYS.reduce((a,d)=> (a[d]=[],a), {})
    } catch { return DAYS.reduce((a,d)=> (a[d]=[],a), {}) }
  })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    localStorage.setItem('ip_program_schedule', JSON.stringify(schedule))
  }, [schedule])

  useEffect(() => {
    // if user is signed in, try to load saved program from server
    let mounted = true
    ;(async () => {
      if (!user) return
      try {
        await ensureCsrf()
        const res = await api.get('/api/programs')
        if (!mounted) return
        if (res.data?.program?.schedule) setSchedule(res.data.program.schedule)
      } catch (e) {
        // ignore - keep local schedule
        console.warn('Could not load remote program', e)
      }
    })()
    return () => { mounted = false }
  }, [user])

  const addItem = (day, text) => {
    setSchedule(s => ({...s, [day]: [...s[day], text]}))
  }
  const removeItem = (day, idx) => {
    setSchedule(s => ({...s, [day]: s[day].filter((_,i)=>i!==idx)}))
  }

  async function syncToServer(){
    if (!user) { alert('Sign in to save to your account'); return }
    setSaving(true)
    try {
      await ensureCsrf()
      await api.post('/api/programs', { schedule })
      alert('Program saved to server')
    } catch (e) {
      console.error(e)
      alert('Failed to save to server — saved locally instead')
    } finally { setSaving(false) }
  }

  return (
    <div className="g program-page">
      <div className="prog-hero">
        <div className="prog-hero-left">
          <h1>Weekly Training Program</h1>
          <p>Create a day-by-day plan for your training week. Add exercises, rest notes, or custom sessions for each day.</p>
          <div style={{display:'flex',gap:10,marginTop:12}}>
            <button className="btn-g" onClick={syncToServer} disabled={saving}>{saving? 'Saving...' : 'Save to Account'}</button>
            <button className="btn-o" onClick={() => { localStorage.setItem('ip_program_schedule', JSON.stringify(schedule)); alert('Saved locally') }}>Save Locally</button>
          </div>
        </div>
        <div className="prog-hero-right">
          <div className="prog-stats">Personalized • Trackable • Shareable</div>
        </div>
      </div>

      <div className="prog-grid">
        {DAYS.map(d => (
          <DayColumn key={d} day={d} items={schedule[d]||[]} onAdd={addItem} onRemove={removeItem} />
        ))}
      </div>
    </div>
  )
}
