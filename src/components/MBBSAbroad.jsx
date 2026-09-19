import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { destinations, referenceNote, referenceFiles } from '../data/addition-content';
import { contactHref } from '../data/config';
import { medicalUniversityCountries, medicalUniversityTotal } from '../data/medical-abroad-universities';
import MedicalUniversityDirectory, { selectMedicalCountry } from './MedicalUniversityDirectory';
import { NepalSpotlight } from './NepalMBBS';

const universityCount = Object.fromEntries(medicalUniversityCountries.map(country => [country.code, country.universities.length]));
const openCountry = code => event => { event.preventDefault(); window.dispatchEvent(new CustomEvent(selectMedicalCountry, { detail: code })); };

export default function MBBSAbroad({ full = false }) {
  const [query, setQuery] = useState('');
  const featured = ['Georgia', 'Russia', 'Kazakhstan', 'Uzbekistan'];
  const visible = (full ? destinations : featured.map(name => destinations.find(destination => destination.name === name))).filter(destination => destination.name.toLowerCase().includes(query.trim().toLowerCase()));
  return <><section id="abroad" className="bg-slate-50"><div className="content-wrap">
    <p className="eyebrow">GLOBAL MEDICAL EDUCATION</p><h2>{full ? 'Explore 14 medical study destinations.' : 'Considering MBBS Abroad?'}</h2>
    <p className="section-copy">Compare complete cost, course structure, clinical training and licensing considerations before choosing a university. Country-level information is a starting point for a university-specific review.</p>
    {full && <label className="state-search"><span className="sr-only">Find a medical study destination</span><input type="search" placeholder="Find a destination" value={query} onChange={event => setQuery(event.target.value)} /></label>}
    <div className={full ? 'discovery-grid' : 'abroad-preview-grid'}>{visible.map(destination => <article id={full ? `destination-${destination.code.toLowerCase()}` : undefined} className="discovery-card destination-card" key={destination.code}>
      <div className="destination-identity"><img className="country-flag" src={`/images/flags/${destination.code.toLowerCase()}.svg`} alt="" width="56" height="40" loading="lazy" /><h3>{destination.name}</h3></div>
      <dl className="reference-facts"><div><dt>Typical duration in supplied guide</dt><dd>{destination.duration}</dd></div><div><dt>Instruction medium in supplied guide</dt><dd>{destination.medium}</dd></div>{full && <div><dt>Approximate budget in supplied poster</dt><dd>{destination.budget ? `₹${destination.budget[0]}–${destination.budget[1]} lakh` : 'Request university-specific costs'}</dd></div>}</dl>
      {full && destination.budget && <p className="reference-note">Unverified country-level total-fee reference; inclusions and charging period need confirmation. Not a university quote.</p>}
      <p className="destination-count"><strong>{universityCount[destination.code.toLowerCase()]}</strong> {destination.code === 'NP' ? 'colleges with fees' : 'medical universities'}</p>
      {full ? <a className="text-link" href={destination.code === 'NP' ? '/mbbs-abroad/nepal/' : `?country=${destination.code.toLowerCase()}#medical-universities`} onClick={destination.code === 'NP' ? undefined : openCountry(destination.code.toLowerCase())}>{destination.code === 'NP' ? 'Compare Nepal colleges & fees' : `See ${destination.name} universities`} <ArrowRight size={15} aria-hidden="true" /></a>
        : <a className="text-link" href={destination.code === 'NP' ? '/mbbs-abroad/nepal/' : `/mbbs-abroad/?country=${destination.code.toLowerCase()}#medical-universities`}>Explore {destination.name} <ArrowRight size={15} aria-hidden="true" /></a>}
    </article>)}</div>
    {!visible.length && <p className="empty-data" role="status">No matching destinations. Try another country name.</p>}
    <NepalSpotlight />
    {full ? <>
      <div className="reference-callout" id="licensing"><h3>Review the university and licensing pathway together.</h3><p>Before applying, check the complete curriculum, English instruction, clinical training, internship arrangements, eligibility for local registration and the current requirements for registration in India. A country name or directory entry does not establish that an individual course meets these requirements.</p><a className="text-link" href="https://www.nmc.org.in/rules-regulations-nmc/">Read current NMC regulations and FMGL FAQs ↗</a></div>
      <p className="data-note">{referenceNote} Typical durations may include foundation or internship requirements and vary by university. Country rankings, FMGE performance and blanket “NMC approved university” claims from the promotional poster are not adopted.</p>
      <div className="section-actions"><a className="primary-button" href="/resources/#medical-abroad">Open the medical destination guide <ArrowRight size={16} aria-hidden="true" /></a><a className="text-link" href={referenceFiles['study_abroad_guide_updated.pdf']}>View original PDF</a></div>
    </> : <div className="section-actions"><a className="primary-button" href="/mbbs-abroad/">Explore all 14 destinations <ArrowRight size={16} aria-hidden="true" /></a><a className="text-link" href="/mbbs-abroad/#medical-universities">Browse {Math.floor(medicalUniversityTotal / 10) * 10}+ medical universities</a></div>}
  </div></section>{full && <MedicalUniversityDirectory />}</>;
}
