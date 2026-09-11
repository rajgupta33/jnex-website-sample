import { TypedIntro } from './HomepageMotion';
import { useState } from 'react';
import { ArrowRight, ChevronDown, Clock, MapPin, TrendingUp, Landmark, Globe } from 'lucide-react';

import { domicileOptions as DOMICILE_STATES } from '../data/admissions';
import { track } from '../data/config';

const Hero = ({ onStartProfile }) => {
  const [scoreOrRank, setScoreOrRank] = useState('');
  const [domicileState, setDomicileState] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    track('hero_profile_start');
    onStartProfile({ score: scoreOrRank, domicile: domicileState });
    const target = document.getElementById('counselling');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section relative overflow-hidden flex items-center">
      {/* Background Images - Desktop & Mobile */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="/hero image desktop.png" 
          alt="" 
          className="hidden md:block w-full h-full object-cover object-[80%_center]"
        />
        <img 
          src="/hero mobile.png" 
          alt="" 
          className="block md:hidden w-full h-full object-cover object-center"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-transparent md:to-[#020617]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="hero-layout">
          
          {/* Left Side: 55% */}
          <div className="hero-copy">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-xs font-bold text-accent tracking-[0.2em] uppercase">
                MBBS ADMISSIONS • NEET COUNSELLING • PAN-INDIA
              </span>
              <div className="w-12 h-px bg-accent/50"></div>
            </div>

            <h1 className="hero-title font-bold text-white mb-6">
              Your NEET Rank.<br />
              <span className="gold-gradient-text font-serif italic">Your Best Possible<br/>MBBS Options.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-lg">
              Explore realistic MBBS admission options across India based on your NEET score or AIR, domicile, category, budget and counselling eligibility.
            </p>

            <TypedIntro />

            {/* Interactive Hero Tool */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl max-w-xl">
              <form onSubmit={handleSearch} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <TrendingUp className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      aria-label="NEET score or All India Rank"
                      required
                      maxLength={24}
                      type="text"
                      value={scoreOrRank}
                      onChange={(e) => setScoreOrRank(e.target.value)}
                      pattern="(?:[Aa][Ii][Rr] *)?[0-9][0-9, ]*" placeholder="e.g. 487 / AIR 92,340"
                      className="w-full rounded-xl border border-slate-600 bg-slate-900/50 pl-11 pr-4 py-3.5 text-sm sm:text-base text-white placeholder-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-slate-400" />
                    </div>
                    <select
                      aria-label="Domicile state"
                      required
                      value={domicileState}
                      onChange={(e) => setDomicileState(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-slate-600 bg-slate-900/50 pl-11 pr-10 py-3.5 text-sm sm:text-base text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors cursor-pointer"
                    >
                      <option value="" className="bg-slate-900">Domicile State</option>
                      {DOMICILE_STATES.map((state) => (
                        <option key={state} value={state} className="bg-slate-900">{state}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full gold-gradient-bg hover:brightness-110 text-black font-bold text-base sm:text-lg py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                >
                  <span>Find My College Options</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <div className="flex items-center justify-center gap-1.5 pt-2 text-xs text-slate-400 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Takes less than 60 seconds.</span>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side: 45% - Your Admission Snapshot Card */}
          <div className="hero-snapshot relative">
            <div className="glass-panel rounded-3xl p-6 xl:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
              {/* Subtle top glow */}
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
              
              <h2 className="text-xl font-bold text-white mb-1">Your Admission Snapshot</h2>
              <p className="text-sm text-slate-400 mb-8">Your NEET profile. Your state options. Your next decision.</p>
              
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50">
                  <p className="text-xs text-slate-400 mb-1">NEET Score</p>
                  <div className="flex items-end justify-between">
                    <p className="text-base font-bold text-white break-words">{scoreOrRank || 'Your score'}</p>
                    <TrendingUp className="w-5 h-5 text-emerald-400 mb-1" />
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50">
                  <p className="text-xs text-slate-400 mb-1">Domicile</p>
                  <div className="flex items-end justify-between">
                    <p className="text-base font-bold text-white leading-tight">{domicileState || 'Your state'}</p>
                    <MapPin className="w-5 h-5 text-blue-400 mb-1" />
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50">
                  <p className="text-xs text-slate-400 mb-1">Budget</p>
                  <div className="flex items-end justify-between">
                    <p className="text-base font-bold text-white">Set in profile</p>
                    
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <p className="text-sm font-semibold text-slate-300 mb-2">Possible Pathways</p>
                
                <div className="flex items-center justify-between p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                      <Landmark className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-200 text-sm">Private MBBS</p>
                      <p className="text-xs text-slate-400 mt-0.5">Explore realistic state options</p>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-500 -rotate-90 group-hover:text-accent transition-colors" />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-500/20 p-2 rounded-lg">
                      <Globe className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-200 text-sm">Deemed Universities</p>
                      <p className="text-xs text-slate-400 mt-0.5">Compare total cost + cutoff trends</p>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-500 -rotate-90 group-hover:text-accent transition-colors" />
                </div>
              </div>
              
              <div className="rounded-xl border border-slate-700/50 p-4 text-slate-200"><p className="font-bold text-sm">State / AIQ Counselling</p><p className="text-xs text-slate-400 mt-1">Review eligible routes</p></div><a href="#counselling" className="inline-block text-accent text-sm font-semibold mt-5">Build My Full Profile →</a><div className="text-center mt-6">
                <p className="font-serif italic text-2xl text-slate-300">
                  More Doctors<br/>
                  <span className="gold-gradient-text font-bold">A Healthier Tomorrow</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
