import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Brand from './Brand';
import { CURRENT_YEAR } from '../data/admissions';
import { contactHref, track } from '../data/config';
export const navigation = {
  'Medical Admissions': [['MBBS India', '/mbbs-admission/'], ['NEET Counselling', '/neet-ug-counselling/'], ['MBBS Abroad', '/mbbs-abroad/'], ...['BDS', 'AYUSH', 'Nursing', 'Physiotherapy', 'Pharmacy', 'Allied Health', 'Paramedical', 'Veterinary', 'Research'].map(name => [name, '/medical-admissions/#' + name.toLowerCase().replaceAll(' ', '-')])],
  'India Admissions': ['Engineering & Technology', 'Computer & IT', 'Management & Business', "Bachelor’s", "Master’s", 'Professional Courses'].map(name => [name, name === 'Engineering & Technology' ? '/india-admissions/engineering/' : '/india-admissions/']),
  'Study Abroad': ["Bachelor’s", "Master’s", 'MBA', 'Engineering', 'IT', 'Business', 'Healthcare', 'Destinations'].map(name => [name, '/study-abroad/']),
  'Resources': [['Medical Colleges', '/medical-colleges/'], ['College Predictor', '/tools/neet-college-predictor/'], ['Compare Colleges', '/compare-medical-colleges/'], ['Counselling Tracker', '/neet-counselling-tracker/'], ['College Fee References', '/medical-colleges/'], ['Guides & Downloads', '/resources/'], ['FAQs', '/#faqs']],
  'About': [['About JNEX', '/#about'], ['For Parents', '/#parents'], ['Services', '/services/'], ['Contact', '/#contact']],
};
export default function Header() {
  const [open, setOpen] = useState(false), dialog = useRef(null), trigger = useRef(null);
  const close = () => { setOpen(false); trigger.current?.focus(); };
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow; document.body.style.overflow = 'hidden'; dialog.current?.querySelector('button')?.focus();
    const keydown = e => { if (e.key === 'Escape') close(); if (e.key !== 'Tab') return;
      const items = [...dialog.current.querySelectorAll('a, button, summary')].filter(el => el.getClientRects().length), first = items[0], last = items.at(-1);
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    const resize = () => { if (window.innerWidth >= 1280) close(); };
    window.addEventListener('keydown', keydown); window.addEventListener('resize', resize);
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', keydown); window.removeEventListener('resize', resize); };
  }, [open]);
  const group = (title, links) => <details key={title} className="nav-group" name={open ? 'mobile-groups' : 'desktop-groups'} onKeyDown={e => { if (e.key === 'Escape') { e.currentTarget.open = false; e.currentTarget.querySelector('summary').focus(); } }}>
    <summary>{title}<ChevronDown size={14} /></summary><div className="nav-dropdown">{links.map(([label, href]) => <a href={href} key={label} onClick={e => { e.currentTarget.closest('details').open = false; if (open) close(); }}>{label}</a>)}</div>
  </details>;
  return <><aside aria-label="Announcement" className="bg-primary text-white text-xs py-2 px-4"><div className="content-wrap flex items-center justify-between gap-3"><span>NEET UG {CURRENT_YEAR} Counselling Updates</span><a href="/neet-counselling-tracker/" className="shrink-0">View Updates →</a></div></aside>
    <header className="sticky top-0 z-50 border-b border-white/10"><div className="content-wrap flex items-center justify-between gap-3 h-[88px]">
      <a href="/" aria-label="JNEX Education Home"><Brand /></a><nav aria-label="Primary Navigation" className="hidden xl:flex items-center gap-1">{Object.entries(navigation).filter(([title]) => title !== 'About').map(([title, links]) => group(title, links))}<a className="nav-single" href="/scholarships/">Scholarships</a>{group('About', navigation.About)}</nav>
      <div className="flex items-center gap-2"><a href={contactHref} onClick={() => track('counsellor_click')} className="header-talk gold-gradient-bg text-primary font-bold rounded-xl px-3 py-3 text-sm"><span className="hidden sm:inline">Talk to a Counsellor</span><span className="sm:hidden">Talk</span></a><button ref={trigger} aria-label="Open mobile menu" aria-controls="mobile-navigation" aria-expanded={open} className="xl:hidden p-2 text-white" onClick={() => setOpen(true)}><Menu /></button></div>
    </div></header>
    {open && <div ref={dialog} id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Mobile navigation" className="fixed inset-0 z-[80] bg-white flex flex-col"><div className="flex items-center justify-between p-4 border-b"><Brand /><button aria-label="Close mobile menu" onClick={close} className="p-3"><X /></button></div><nav className="mobile-nav overflow-y-auto p-5" aria-label="Mobile navigation links">{Object.entries(navigation).map(([title, links]) => group(title, links))}<a href="/scholarships/" className="block py-5 font-bold" onClick={close}>Scholarships</a><a href={contactHref} className="primary-button" onClick={close}>Talk to a Counsellor →</a></nav></div>}
  </>;
}
