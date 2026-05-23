import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({previewTrainers = []}) {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-white">
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-semibold tracking-tight text-[color:var(--accent)]">IRONPEAK</div>
          <div className="text-sm text-[color:var(--secondary)]">Elite Fitness</div>
        </div>
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-sm text-[color:var(--secondary)]">Home</Link>
          <Link to="/trainers" className="text-sm text-[color:var(--secondary)]">Trainers</Link>
          <Link to="/trainers" className="bg-[color:var(--accent)] text-black px-4 py-2 rounded font-semibold">Join Now</Link>
        </nav>
      </header>
      

      <main className="px-8">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col justify-center">
            <span className="inline-block bg-[color:var(--accent)]/10 text-[color:var(--accent)] px-3 py-1 rounded-full text-xs font-semibold">FEATURED</span>
            <h1 className="text-5xl font-semibold tracking-tight mt-6 text-[color:var(--accent)]">IRONPEAK Elite Fitness</h1>
            <p className="mt-4 text-[color:var(--secondary)] max-w-xl">Train with the best — elite coaches, bespoke programs, and community support to push you further.</p>
            <div className="mt-6 flex gap-4">
              <Link to="/trainers" className="bg-[color:var(--accent)] px-5 py-3 rounded-md font-semibold text-black transform hover:scale-[1.02]">Get Started</Link>
              <a href="#programs" className="border border-white/10 px-5 py-3 rounded-md text-[color:var(--secondary)] hover:scale-[1.02]">Programs</a>
            </div>

            <div className="mt-8 flex gap-8">
              <div>
                <div className="text-2xl font-bold">12k+</div>
                <div className="text-[color:var(--secondary)] text-sm">Active Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold">150+</div>
                <div className="text-[color:var(--secondary)] text-sm">Certified Coaches</div>
              </div>
            </div>
          </div>

          <div className="relative h-96 lg:h-auto">
            <img src="https://picsum.photos/seed/gym001/800/600" alt="hero" className="w-full h-full object-cover brightness-[0.75] rounded-lg" />
            <div className="absolute left-6 bottom-6 bg-[color:var(--surface)]/80 px-4 py-2 rounded-md">
              <div className="text-sm text-[color:var(--secondary)]">Active Members</div>
              <div className="text-xl font-semibold text-[color:var(--accent)]">12,432</div>
            </div>
          </div>
        </section>

        {/* Magazine Photo Grid */}
        <section className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative surface-card rounded-lg overflow-hidden">
              <img src="https://picsum.photos/seed/gym002/900/400" alt="mag" className="w-full h-96 object-cover brightness-[0.7]" />
              <div className="absolute left-6 bottom-6 text-white">
                <div className="inline-block bg-[color:var(--accent)] px-2 py-1 rounded text-xs font-semibold">FEATURE</div>
                <h3 className="text-2xl font-semibold mt-2">Peak Performance: Training Smarter</h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative surface-card rounded-lg overflow-hidden">
              <img src="https://picsum.photos/seed/gym003/500/250" alt="mag-sm1" className="w-full h-44 object-cover brightness-[0.7]" />
              <div className="absolute left-4 bottom-4 text-white">
                <div className="inline-block bg-[color:var(--accent)] px-2 py-1 rounded text-xs font-semibold">TRAIN</div>
                <h4 className="mt-1 font-semibold">HIIT Essentials</h4>
              </div>
            </div>
            <div className="relative surface-card rounded-lg overflow-hidden">
              <img src="https://picsum.photos/seed/gym004/500/250" alt="mag-sm2" className="w-full h-44 object-cover brightness-[0.7]" />
              <div className="absolute left-4 bottom-4 text-white">
                <div className="inline-block bg-[color:var(--accent)] px-2 py-1 rounded text-xs font-semibold">NUTRITION</div>
                <h4 className="mt-1 font-semibold">Fuel for Growth</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Features row */}
        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {['HIIT','Strength','Nutrition','Progress'].map((t,i)=> (
            <div key={t} className="surface-card p-6 rounded-lg">
              <div className="w-12 h-12 bg-[color:var(--accent)] flex items-center justify-center rounded text-black font-bold">{t[0]}</div>
              <h4 className="mt-4 font-semibold">{t}</h4>
              <p className="mt-2 text-[color:var(--secondary)] text-sm">High-quality coaching and measurable progress tracking to meet your goals.</p>
            </div>
          ))}
        </section>

        {/* Split sections */}
        <section className="mt-12 grid lg:grid-cols-2 gap-6 items-stretch">
          <div>
            <img src="https://picsum.photos/seed/gym005/700/500" alt="split1" className="w-full h-full object-cover rounded-lg brightness-[0.75]" />
          </div>
          <div className="surface-card p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-[color:var(--accent)]">Personalized Plans</h3>
            <p className="mt-3 text-[color:var(--secondary)]">Tailored training and nutrition plans to fit your lifestyle.</p>
            <ul className="mt-4 space-y-2 text-[color:var(--secondary)]">
              <li>✅ Customized workouts</li>
              <li>✅ Weekly check-ins</li>
              <li>✅ Progress analytics</li>
            </ul>
            <div className="mt-6">
              <a href="#" className="bg-[color:var(--accent)] px-4 py-2 rounded font-semibold text-black">Start Your Plan</a>
            </div>
          </div>
        </section>

        <section className="mt-12 grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="surface-card p-8 rounded-lg bg-[color:var(--accent)] text-black">
            <h3 className="text-2xl font-semibold">Transform with Structure</h3>
            <p className="mt-3">Progressive programming and expert coaching for lasting results.</p>
            <ul className="mt-4 space-y-2">
              <li>• Goal-focused training</li>
              <li>• Coach support</li>
            </ul>
            <div className="mt-6">
              <a href="#" className="bg-black px-4 py-2 rounded font-semibold text-white">Learn More</a>
            </div>
          </div>
          <div>
            <img src="https://picsum.photos/seed/gym006/700/500" alt="split2" className="w-full h-full object-cover rounded-lg brightness-[0.75]" />
          </div>
        </section>

        {/* Programs */}
        <section id="programs" className="mt-12">
          <h3 className="text-2xl font-semibold">Programs</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {['gym007','gym008','gym009'].map((s,i)=> (
              <div key={s} className="relative rounded-lg overflow-hidden">
                <img src={`https://picsum.photos/seed/${s}/500/400`} alt={s} className="w-full h-64 object-cover brightness-[0.75]" />
                <div className="absolute left-4 bottom-4 text-white">
                  <div className="inline-block bg-[color:var(--accent)] px-2 py-1 rounded text-xs">Level {i+1}</div>
                  <h4 className="mt-2 font-semibold">Program {i+1}</h4>
                  <div className="text-[color:var(--secondary)] text-sm">8 weeks • 3 days/week</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quote band */}
        <section className="mt-12 bg-[color:var(--accent)] text-black p-8 rounded-lg">
          <blockquote className="text-2xl font-semibold">"IRONPEAK transformed my life — stronger, leaner, and more confident."</blockquote>
          <cite className="block mt-3">— Jordan Matthews, Member</cite>
        </section>

      </main>
    </div>
  )
}
