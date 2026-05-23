import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/mag.css'

export default function Home(){
  return (
    <div className="g">
      <Navbar />

      <div className="hero">
        <div className="hero-l">
          <div className="hero-pill"><div className="dot"></div>No.1 Elite Gym Platform</div>
          <h1 className="hero-h1">Forge Your<br/><em>Strongest</em><br/>Body Ever.</h1>
          <p className="hero-p">Train under world-class coaches, follow science-backed programs, and unlock the body you've always wanted — whether at the gym or at home.</p>
          <div className="hero-btns">
            <button className="btn-o">Start Free Trial</button>
            <button className="btn-g"> <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg> Watch Intro</button>
          </div>
          <div className="stats">
            <div><div className="sn">12K+</div><div className="sl">Members</div></div>
            <div><div className="sn">48</div><div className="sl">Programs</div></div>
            <div><div className="sn">4.9★</div><div className="sl">Rating</div></div>
            <div><div className="sn">24/7</div><div className="sl">Access</div></div>
          </div>
        </div>

        <div className="hero-r">
          <img src="https://picsum.photos/seed/gym001/800/600" alt="Athlete training" />
          <div className="hero-overlay"></div>
          <div className="hero-badge">
            <div className="hb-n">+3,200</div>
            <div className="hb-l">Active this week</div>
          </div>
        </div>
      </div>

      <div className="mag-grid">
        <div className="mg-big">
          <img src="https://picsum.photos/seed/gym002/900/400" alt="Strength training" />
          <div className="mg-cap">
            <div className="mg-tag">Cover story</div>
            <div className="mg-title">The Science of Strength: How Elite Athletes Build Power That Lasts</div>
          </div>
        </div>
        <div className="mg-col">
          <div className="mg-sm">
            <img src="https://picsum.photos/seed/gym003/500/250" alt="Cardio" />
            <div className="mg-cap">
              <div className="mg-tag">Cardio</div>
              <div className="mg-title">HIIT vs Steady-State: Which Burns More Fat?</div>
            </div>
          </div>
          <div className="mg-sm">
            <img src="https://picsum.photos/seed/gym004/500/250" alt="Nutrition" />
            <div className="mg-cap">
              <div className="mg-tag">Nutrition</div>
              <div className="mg-title">Pre-Workout Meals That Actually Fuel Performance</div>
            </div>
          </div>
        </div>
      </div>

      <div className="feat4" style={{marginTop:24}}>
        <div className="fc"><div className="fi">🔥</div><div className="ft">HIIT Programs</div><div className="fd">High-intensity intervals designed to burn fat fast and push your limits.</div></div>
        <div className="fc"><div className="fi">🏋️</div><div className="ft">Strength Training</div><div className="fd">Progressive overload plans built by certified strength coaches.</div></div>
        <div className="fc"><div className="fi">🥗</div><div className="ft">Nutrition Plans</div><div className="fd">Custom meal plans synced to your training goals and body type.</div></div>
        <div className="fc"><div className="fi">📈</div><div className="ft">Progress Tracking</div><div className="fd">Live analytics and weekly check-ins to keep you on target.</div></div>
      </div>

      <div className="prog-grid" style={{marginTop:20}}>
        <div className="pg-item"><img src="https://picsum.photos/seed/gym007/500/400" alt="p1" /><div className="pg-cap"><div className="pg-level">Beginner</div><div className="pg-name">Total Body Burn</div><div className="pg-weeks">8 weeks · 4 days/week</div></div></div>
        <div className="pg-item"><img src="https://picsum.photos/seed/gym008/500/400" alt="p2" /><div className="pg-cap"><div className="pg-level">Intermediate</div><div className="pg-name">Power & Mass</div><div className="pg-weeks">12 weeks · 5 days/week</div></div></div>
        <div className="pg-item"><img src="https://picsum.photos/seed/gym009/500/400" alt="p3" /><div className="pg-cap"><div className="pg-level">Advanced</div><div className="pg-name">Elite Athlete Protocol</div><div className="pg-weeks">16 weeks · 6 days/week</div></div></div>
      </div>

      <div className="quote-band" style={{marginTop:24}}>
        <div className="qb-q">"I lost 18kg in 3 months. The coaches, the community, the structure — nothing comes close to what IronPeak gave me."</div>
        <div className="qb-a">— Daniel K., IronPeak member since 2024</div>
      </div>

    </div>
  )
}
