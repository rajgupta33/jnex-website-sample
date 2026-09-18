import { TypedIntro, useReducedMotion } from './HomepageMotion';
import { useEffect, useState } from 'react';
import {
  ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Clock, MapPin, TrendingUp, Landmark, Globe, Pause, Play,
  GraduationCap, ChartColumnIncreasing, Wallet, LayoutGrid, Monitor, Cpu, RadioTower, Cog, Building2, Server,
  School, Route, Users, FileText, Plane, Stethoscope, HeartPulse, BookOpen, Briefcase,
} from 'lucide-react';

import { domicileOptions as DOMICILE_STATES } from '../data/admissions';
import { track } from '../data/config';

const SLIDE_DURATION = 4000;

// Slides 2–4 share one layout; each entry supplies its copy, form options and pathway panel.
const pathwaySlides = [
  {
    id: 'engineering',
    label: 'Engineering admissions',
    image: 'slide-2',
    eyebrow: 'ENGINEERING • TECHNOLOGY • INDIA ADMISSIONS',
    title: 'Your Rank.',
    highlight: 'Your Engineering Options.',
    copy: 'Compare engineering colleges, courses, eligibility and admission pathways. Find the right college and build a future that matches your ambitions.',
    fields: [
      { key: 'exam', label: 'Entrance exam', placeholder: 'Entrance Exam', icon: GraduationCap, options: ['JEE Main', 'JEE Advanced', 'MHT-CET', 'KCET', 'COMEDK UGET', 'TNEA', 'BITSAT', 'Other State CET'] },
      { key: 'state', label: 'Preferred state', placeholder: 'Select State', icon: MapPin, options: DOMICILE_STATES },
    ],
    cta: 'Explore Engineering Colleges',
    href: () => '/india-admissions/engineering/',
    panelTitle: 'Your Engineering Profile',
    panelCopy: 'Your exam. Your state. Colleges that fit your plan.',
    tiles: [
      { label: 'Entrance Exam', field: 'exam', fallback: 'Your exam', icon: GraduationCap },
      { label: 'Percentile / Rank', fallback: 'Your rank', icon: ChartColumnIncreasing },
      { label: 'State / Domicile', field: 'state', fallback: 'Your state', icon: MapPin },
      { label: 'Budget', fallback: 'Set in profile', icon: Wallet },
    ],
    listTitle: 'Popular Engineering Pathways',
    items: [
      { label: 'B.Tech Computer Science (CSE)', icon: Monitor, href: '/india-admissions/engineering/' },
      { label: 'AI & Data Science', icon: Cpu, href: '/india-admissions/engineering/' },
      { label: 'Electronics & Communication (ECE)', icon: RadioTower, href: '/india-admissions/engineering/' },
      { label: 'Mechanical Engineering', icon: Cog, href: '/india-admissions/engineering/' },
      { label: 'Civil Engineering', icon: Building2, href: '/india-admissions/engineering/' },
      { label: 'Information Technology (IT)', icon: Server, href: '/india-admissions/engineering/' },
    ],
    features: [
      { label: 'Colleges Across India', icon: School },
      { label: 'Compare Locations', icon: Wallet },
      { label: 'State + All India Routes', icon: Route },
      { label: 'Branch & Career Guidance', icon: Users },
    ],
  },
  {
    id: 'study-abroad',
    label: 'Study abroad',
    image: 'slide-3',
    eyebrow: 'STUDY ABROAD • UG • PG • MBA',
    title: 'Your Profile.',
    highlight: 'Your Global Options.',
    copy: 'Compare countries, universities, programs, costs, scholarships and application pathways. Get expert guidance to turn your global education plans into reality.',
    fields: [
      { key: 'level', label: 'Study level', placeholder: 'Select Study Level', icon: GraduationCap, options: ['Undergraduate (UG)', 'Postgraduate (PG)', 'MBA', 'Diploma / Foundation'] },
      { key: 'destination', label: 'Preferred destination', placeholder: 'Select Destination', icon: MapPin, options: ['United Kingdom', 'United States', 'Canada', 'Australia', 'Germany', 'Ireland', 'New Zealand', 'France', 'Singapore', 'UAE', 'Not decided yet'] },
    ],
    cta: 'Build My Study Abroad Plan',
    href: () => '/study-abroad/#destinations',
    panelTitle: 'Your Global Study Plan',
    panelCopy: 'Explore study abroad options tailored to your profile.',
    tiles: [
      { label: 'Study Level', field: 'level', fallback: 'UG / PG / MBA', icon: GraduationCap },
      { label: 'Preferred Course', fallback: 'Select course', icon: LayoutGrid },
      { label: 'Destination', field: 'destination', fallback: 'Select country', icon: MapPin },
      { label: 'Budget', fallback: 'Select range', icon: Wallet },
    ],
    listTitle: 'Popular Study Destinations',
    items: [
      { label: 'United Kingdom', flag: 'gb', href: '/study-abroad/#destinations' },
      { label: 'Canada', flag: 'ca', href: '/study-abroad/#destinations' },
      { label: 'Australia', flag: 'au', href: '/study-abroad/#destinations' },
      { label: 'Germany', flag: 'de', href: '/study-abroad/#destinations' },
      { label: 'Ireland', flag: 'ie', href: '/study-abroad/#destinations' },
      { label: 'United States', flag: 'us', href: '/study-abroad/#destinations' },
    ],
    moreLink: { label: 'Explore All Countries', href: '/study-abroad/#destinations' },
    features: [
      { label: 'Global Universities', icon: School },
      { label: 'Scholarship Guidance', icon: FileText },
      { label: 'Visa & Applications', icon: Plane },
      { label: 'End-to-End Counselling', icon: Globe },
    ],
  },
  {
    id: 'india-admissions',
    label: 'India admissions',
    image: 'slide-4',
    eyebrow: 'INDIA ADMISSIONS • UNDERGRADUATE • POSTGRADUATE',
    title: 'One Destination.',
    highlight: 'Thousands of Possibilities.',
    copy: 'Explore colleges and universities across India for Medical, Paramedical, Engineering, IT, Management and more. Get expert guidance, compare options and choose the right path for your future.',
    fields: [
      { key: 'category', label: 'Course category', placeholder: 'Course Category', icon: GraduationCap, options: ['Medical (MBBS, BDS, etc.)', 'Paramedical & Allied Health', 'Engineering & Technology', 'Management (BBA, MBA, etc.)', 'Computer & IT', 'Law, Design, Arts & Other Courses'] },
      { key: 'state', label: 'Preferred state', placeholder: 'Select State', icon: MapPin, options: DOMICILE_STATES },
    ],
    cta: 'Explore All Courses',
    href: values => categoryHref[values.category] || '/india-admissions/',
    panelTitle: 'Find Your Perfect Course',
    panelCopy: 'Tell us your preferences and explore the best options across India.',
    tiles: [
      { label: 'Course Level', fallback: 'UG / PG', icon: GraduationCap },
      { label: 'Course Category', field: 'category', fallback: 'Select category', icon: LayoutGrid },
      { label: 'State / City', field: 'state', fallback: 'Select location', icon: MapPin },
      { label: 'Budget', fallback: 'Select range', icon: Wallet },
    ],
    listTitle: 'Explore Popular Categories',
    items: [
      { label: 'Medical (MBBS, BDS, etc.)', icon: Stethoscope, href: '/medical-admissions/' },
      { label: 'Paramedical & Allied Health', icon: HeartPulse, href: '/medical-admissions/#allied-health' },
      { label: 'Engineering & Technology', icon: Cog, href: '/india-admissions/engineering/' },
      { label: 'Management (BBA, MBA, etc.)', icon: Briefcase, href: '/india-admissions/#management-&-business' },
      { label: 'Computer & IT', icon: Monitor, href: '/india-admissions/#computer-&-it' },
      { label: 'Law, Design, Arts & Other Courses', icon: BookOpen, href: '/india-admissions/#professional-courses' },
    ],
    features: [
      { label: 'Colleges Across India', icon: School },
      { label: 'Compare Courses', icon: FileText },
      { label: 'Expert Counselling', icon: Users },
      { label: 'Career Guidance', icon: ChartColumnIncreasing },
    ],
  },
];

const categoryHref = Object.fromEntries(pathwaySlides[2].items.map(item => [item.label, item.href]));

function HeroMedia({ image }) {
  return (
    <div className="hero-media" aria-hidden="true">
      <picture>
        <source media={image === 'slide-1' ? '(min-width: 768px)' : '(min-width: 1024px)'} srcSet={`/images/hero/${image}-desktop.webp`} />
        <img src={`/images/hero/${image}-mobile.webp`} alt="" decoding="async" fetchPriority={image === 'slide-1' ? 'high' : 'low'} />
      </picture>
      {image === 'slide-1' ? <>
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-transparent md:to-[#020617]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
      </> : <div className="hero-shade"></div>}
    </div>
  );
}

function PathwaySlide({ slide }) {
  const [values, setValues] = useState({});
  const handleSubmit = event => {
    event.preventDefault();
    track('hero_slide_cta', { slide: slide.id });
    window.location.href = slide.href(values);
  };
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full">
      <div className="hero-layout pathway-layout">
        <div className="hero-copy">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-xs font-bold text-accent tracking-[0.2em] uppercase">{slide.eyebrow}</span>
            <div className="w-12 h-px bg-accent/50"></div>
          </div>
          <h2 className="hero-title font-bold text-white mb-6">
            {slide.title}<br />
            <span className="gold-gradient-text font-serif italic">{slide.highlight}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-xl">{slide.copy}</p>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl max-w-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {slide.fields.map(({ key, label, placeholder, icon: Icon, options }) => (
                  <div className="relative" key={key}>
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Icon className="h-5 w-5 text-slate-400" />
                    </div>
                    <select
                      aria-label={label}
                      value={values[key] || ''}
                      onChange={event => setValues(previous => ({ ...previous, [key]: event.target.value }))}
                      className="w-full appearance-none rounded-xl border border-slate-600 bg-slate-900/50 pl-11 pr-10 py-3.5 text-sm sm:text-base text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors cursor-pointer"
                    >
                      <option value="" className="bg-slate-900">{placeholder}</option>
                      {options.map(option => <option key={option} value={option} className="bg-slate-900">{option}</option>)}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
              <button type="submit" className="w-full gold-gradient-bg hover:brightness-110 text-black font-bold text-base sm:text-lg py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                <span>{slide.cta}</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <div className="flex items-center justify-center gap-1.5 pt-2 text-xs text-slate-400 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>Takes less than 60 seconds.</span>
              </div>
            </form>
          </div>

          <ul className="hero-features">
            {slide.features.map(({ label, icon: Icon }) => <li key={label}><Icon aria-hidden="true" /><span>{label}</span></li>)}
          </ul>
        </div>

        <div className="pathway-panel glass-panel">
          <div className="pathway-panel-glow" aria-hidden="true"></div>
          <h3>{slide.panelTitle}</h3>
          <p className="pathway-panel-copy">{slide.panelCopy}</p>
          <div className="pathway-tiles">
            {slide.tiles.map(({ label, field, fallback, icon: Icon }) => (
              <div key={label}><span>{label}</span><strong>{(field && values[field]) || fallback}</strong><Icon aria-hidden="true" /></div>
            ))}
          </div>
          <p className="pathway-list-title">{slide.listTitle}</p>
          <ul className="pathway-list">
            {slide.items.map(({ label, icon: Icon, flag, href }) => (
              <li key={label}>
                <a href={href} onClick={() => track('hero_pathway_click', { slide: slide.id, pathway: label })}>
                  {flag ? <img className="pathway-flag" src={`/images/flags/${flag}.svg`} alt="" width="28" height="21" loading="lazy" /> : <Icon aria-hidden="true" />}
                  <span>{label}</span>
                  <ChevronRight className="pathway-chevron" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          {slide.moreLink && <a className="pathway-more" href={slide.moreLink.href}>{slide.moreLink.label} <ArrowRight aria-hidden="true" /></a>}
        </div>
      </div>
    </div>
  );
}

const Hero = ({ onStartProfile }) => {
  const [scoreOrRank, setScoreOrRank] = useState('');
  const [domicileState, setDomicileState] = useState('');
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [engaged, setEngaged] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const reduced = useReducedMotion();
  const slideCount = pathwaySlides.length + 1;
  const running = ready && !userPaused && !hovering && !focused && !engaged && !pageHidden;

  useEffect(() => {
    setReady(true);
    const update = () => setPageHidden(document.hidden);
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => setActive(index => (index + 1) % slideCount), SLIDE_DURATION);
    return () => window.clearTimeout(timer);
  }, [active, running, slideCount]);

  const goTo = index => setActive((index + slideCount) % slideCount);
  const [touchStart, setTouchStart] = useState(null);
  const handleTouchEnd = event => {
    if (touchStart === null) return;
    const distance = event.changedTouches[0].clientX - touchStart;
    setTouchStart(null);
    if (Math.abs(distance) > 60) goTo(active + (distance < 0 ? 1 : -1));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    track('hero_profile_start');
    onStartProfile({ score: scoreOrRank, domicile: domicileState });
    const target = document.getElementById('counselling');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  // Autoplay holds while a visitor points at a panel, focuses a field, or has started filling a form.
  const panelHover = event => setHovering(Boolean(event.target.closest?.('.glass-panel')));
  const handleFocus = event => setFocused(Boolean(event.target.closest?.('form')));
  const handleBlur = event => { if (!event.relatedTarget?.closest?.('#home form')) setFocused(false); };
  const togglePlayback = () => {
    if (running) { setUserPaused(true); return; }
    setUserPaused(false); setEngaged(false); setFocused(false);
  };

  return (
    <section
      id="home"
      className={`hero-section hero-slider relative overflow-hidden ${ready ? 'is-ready' : ''} ${reduced ? 'is-reduced' : ''}`}
      aria-roledescription="carousel"
      aria-label="JNEX admission pathways"
      onPointerOver={panelHover}
      onPointerLeave={() => setHovering(false)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onInput={() => setEngaged(true)}
      onTouchStart={event => setTouchStart(event.target.closest('form, a, button') ? null : event.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero-slides">
        <div className={`hero-slide slide-medical ${active === 0 ? 'is-active' : ''}`} role="group" aria-roledescription="slide" aria-label={`1 of ${slideCount}: MBBS admissions`} aria-hidden={active !== 0} inert={active !== 0}>
          <HeroMedia image="slide-1" />
          <div className="hero-slide-inner flex items-center">
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
          </div>
        </div>

        {pathwaySlides.map((slide, index) => {
          const isActive = active === index + 1;
          return (
            <div key={slide.id} className={`hero-slide slide-${slide.id} ${isActive ? 'is-active' : ''}`} role="group" aria-roledescription="slide" aria-label={`${index + 2} of ${slideCount}: ${slide.label}`} aria-hidden={!isActive} inert={!isActive}>
              <HeroMedia image={slide.image} />
              <div className="hero-slide-inner flex items-center">
                <PathwaySlide slide={slide} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="hero-controls">
        <button type="button" className="hero-arrow" onClick={() => goTo(active - 1)} aria-label="Previous slide"><ChevronLeft aria-hidden="true" /></button>
        <div className="hero-dots">
          {Array.from({ length: slideCount }, (_, index) => (
            <button
              type="button"
              key={index}
              className={`hero-dot ${index === active ? 'is-active' : ''}`}
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === active ? 'true' : undefined}
              onClick={() => goTo(index)}
            >
              <span key={`${active}-${running}`} className={running && index === active ? 'is-running' : ''} style={{ animationDuration: `${SLIDE_DURATION}ms` }} />
            </button>
          ))}
        </div>
        <button type="button" className="hero-arrow" onClick={() => goTo(active + 1)} aria-label="Next slide"><ChevronRight aria-hidden="true" /></button>
        <button type="button" className="hero-arrow hero-pause" onClick={togglePlayback} aria-label={running ? 'Pause slideshow' : 'Play slideshow'}>
          {running ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
        </button>
      </div>
    </section>
  );
};

export default Hero;
