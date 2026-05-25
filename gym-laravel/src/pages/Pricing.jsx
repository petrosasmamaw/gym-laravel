import React, { useState } from 'react'
import '../styles/pricing.css'
import { images } from '../assets/imageUrls'

function Tier({ title, price, perks, featured }){
  return (
    <div className={"tier" + (featured? ' featured':'')}>
      {featured && <div className="tier-badge">Most popular</div>}
      <h3>{title}</h3>
      <div className="tier-price">{price}</div>
      <ul className="tier-perks">
        {perks.map((p,i)=>(<li key={i}>{p}</li>))}
      </ul>
      <button className={"tier-cta" + (featured? ' primary':'')}>Choose {title}</button>
    </div>
  )
}

export default function Pricing(){
  const [annual, setAnnual] = useState(true)
  const monthly = annual ? 'Save 20% — billed annually' : 'Billed monthly'

  const calc = (m) => annual ? Math.round(m*12*0.8) + '/yr' : m + '/mo'

  return (
    <div className="g pricing-page">
      <div className="pricing-hero">
        <div>
          <h1>Pricing built for results</h1>
          <p>Transparent plans — no surprises. Pick a tier that matches your commitment and goals.</p>
        </div>
        <img src={images.prog2} alt="pricing" />
      </div>

      <div className="pricing-toggle">
        <div className="pt-left">{monthly}</div>
        <div className="pt-right">
          <span className={annual? 'off':'on'} onClick={()=>setAnnual(false)}>Monthly</span>
          <label className="switch">
            <input type="checkbox" checked={annual} onChange={e=>setAnnual(e.target.checked)} />
            <span className="slider" />
          </label>
          <span className={annual? 'on':'off'} onClick={()=>setAnnual(true)}>Annual</span>
        </div>
      </div>

      <div className="tiers-grid">
        <Tier title="Basic" price={calc(9)} perks={["Access to gym library","3 training plans","Community support"]} />
        <Tier title="Pro" price={calc(29)} perks={["Everything in Basic","Personalized plan","Weekly coach check-ins"]} featured />
        <Tier title="Elite" price={calc(79)} perks={["Everything in Pro","1:1 coaching","Nutrition plan + macros"]} />
      </div>

      <div className="pricing-foot">
        <p>All plans include a 7-day free trial. No credit card required for trial.</p>
        <button className="btn-g">Start Free Trial</button>
      </div>
    </div>
  )
}
