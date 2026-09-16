import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { destinations, referenceNote, referenceFiles } from '../data/addition-content';
import { contactHref } from '../data/config';

export default function MBBSAbroad({ full = false }) {
  const [query, setQuery] = useState('');
  const featured = ['Georgia', 'Russia', 'Kazakhstan', 'Uzbekistan'];
  const visible = (full ? destinations : featured.map(name => destinations.find(destination => destination.name === name))).filter(destination => destination.name.toLowerCase().includes(query.trim().toLowerCase()));
  return <section id="abroad" className="bg-slate-50"><div className="content-wrap">
    <p className="eyebrow">GLOBAL MEDICAL EDUCATION</p><h2>{full ? 'Explore 14 medical study destinations.' : 'Considering MBBS Abroad?'}</h2>
    <p className="section-copy">Compare complete cost, course structure, clinical training and licensing considerations before choosing a university. Country-level information is a starting point for a university-specific review.</p>
    {full && <label className="state-search"><span className="sr-only">Find a medical study destination</span><input type="search" placeholder="Find a destination" value={query} onChange={event => setQuery(event.target.value)} /></label>}
    <div className={full ? 'discovery-grid' : 'abroad-preview-grid'}>{visible.map(destination => <article id={full ? `destination-${destination.code.toLowerCase()}` : undefined} className="discovery-card destination-card" key={destination.code}>
      <span className="destination-code" aria-hidden="true">{destination.code}</span><h3>{destination.name}</h3>
      <dl className="reference-facts"><div><dt>Typical duration in supplied guide</dt><dd>{destination.duration}</dd></div><div><dt>Instruction medium in supplied guide</dt><dd>{destination.medium}</dd></div>{full && <div><dt>Approximate budget in supplied poster</dt><dd>{destination.budget ? `₹${destination.budget[0]}–${destination.budget[1]} lakh` : 'Request university-specific costs'}</dd></div>}</dl>
      {full && destination.budget && <p className="reference-note">Unverified country-level total-fee reference; inclusions and charging period need confirmation. Not a university quote.</p>}
      <a className="text-link" href={full ? `${contactHref}?subject=${encodeURIComponent('Medical study in ' + destination.name)}` : `/mbbs-abroad/#destination-${destination.code.toLowerCase()}`}>{full ? `Discuss ${destination.name}` : `Explore ${destination.name}`} <ArrowRight size={15} aria-hidden="true" /></a>
    </article>)}</div>
    {!visible.length && <p className="empty-data" role="status">No matching destinations. Try another country name.</p>}
    {full ? <>
      <div className="reference-callout" id="licensing"><h3>Review the university and licensing pathway together.</h3><p>Before applying, check the complete curriculum, English instruction, clinical training, internship arrangements, eligibility for local registration and the current requirements for registration in India. A country name or directory entry does not establish that an individual course meets these requirements.</p><a className="text-link" href="https://www.nmc.org.in/rules-regulations-nmc/">Read current NMC regulations and FMGL FAQs ↗</a></div>
      <p className="data-note">{referenceNote} Typical durations may include foundation or internship requirements and vary by university. Country rankings, FMGE performance and blanket “NMC approved university” claims from the promotional poster are not adopted.</p>
      <div className="section-actions"><a className="primary-button" href="/resources/#medical-abroad">Open the medical destination guide <ArrowRight size={16} aria-hidden="true" /></a><a className="text-link" href={referenceFiles['study_abroad_guide_updated.pdf']}>View original PDF</a></div>
    </> : <div className="section-actions"><a className="primary-button" href="/mbbs-abroad/">Explore all 14 destinations <ArrowRight size={16} aria-hidden="true" /></a><a className="text-link" href="/resources/#medical-abroad">Read the medical study guide</a></div>}
  </div></section>;
}
