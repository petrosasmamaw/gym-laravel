import React from 'react'
import { images } from '../assets/imageUrls'
import '../styles/nutrition.css'

export default function Nutrition(){
  return (
    <div className="g nutrition-page">
      <div className="nut-hero">
        <div className="nut-hero-left">
          <h1>Nutrition for Performance</h1>
          <p>Fuel your training, recovery, and everyday life with evidence-based meal plans, macro guidance, and quick recipes designed by certified coaches.</p>
          <div style={{display:'flex',gap:10,marginTop:12}}>
            <button className="btn-g">Get a Plan</button>
            <button className="btn-o">Browse Recipes</button>
          </div>
        </div>
        <div className="nut-hero-right">
          <img src={images.mag3} alt="Healthy meal" />
        </div>
      </div>

      <div className="nut-grid">
        <div className="nut-card">
          <img src={images.mag2} alt="Meal prep" />
          <h3>Simple Meal Prep</h3>
          <p>Learn how to batch-cook balanced meals that keep you full and fit your macros.</p>
        </div>
        <div className="nut-card">
          <img src={images.mag1} alt="Supplements" />
          <h3>Supplements Guide</h3>
          <p>Understand what matters and what doesn't — science-first recommendations.</p>
        </div>
        <div className="nut-card">
          <img src={images.prog1} alt="Macros" />
          <h3>Macro Calculator</h3>
          <p>Get personalized macro targets for fat loss, muscle gain, or maintenance.</p>
        </div>
      </div>

      <div className="nut-cta">
        <h2>Personalized Nutrition, Backed by Coaches</h2>
        <p>Connect with a coach to build a plan that fits your training schedule and food preferences.</p>
        <button className="btn-g">Request Coaching</button>
      </div>
    </div>
  )
}
