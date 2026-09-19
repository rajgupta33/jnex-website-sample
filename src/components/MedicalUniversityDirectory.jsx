import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, MapPin, Search, Building2, Landmark, Clock, Languages } from 'lucide-react';
import { medicalUniversityCountries, medicalUniversityGroups, medicalUniversityTotal } from '../data/medical-abroad-universities';
import { destinations } from '../data/addition-content';
import { contactHref, track } from '../data/config';
import { CollegeCrest } from './Visuals';

const PAGE_SIZE = 18;
const byCode = Object.fromEntries(medicalUniversityCountries.map(country => [country.code, country]));
const facts = Object.fromEntries(destinations.map(destination => [destination.code.toLowerCase(), destination]));
export const selectMedicalCountry = 'medical-country-select';

function flag(code, className) {
  return <img className={className} src={`/images/flags/${code}.svg`} alt="" width="40" height="30" loading="lazy" />;
}

// Destination cards elsewhere on the page dispatch `selectMedicalCountry` to open a country here without reloading.
export default function MedicalUniversityDirectory() {
  const [code, setCode] = useState('ru');
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState('');
  const [shown, setShown] = useState(PAGE_SIZE);
  const country = byCode[code];
  const fact = facts[code];

  const select = next => { setCode(next); setQuery(''); setTag(''); setShown(PAGE_SIZE); track('medical_university_country_select', { country: next }); };

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('country');
    if (requested && byCode[requested]) setCode(requested);
    const listener = event => { if (byCode[event.detail]) { select(event.detail); document.getElementById('medical-universities')?.scrollIntoView({ behavior: 'smooth' }); } };
    window.addEventListener(selectMedicalCountry, listener);
    return () => window.removeEventListener(selectMedicalCountry, listener);
  }, []);

  // Type-style tags (Public / Private / affiliation) become filters; tuition and accreditation notes stay as card chips.
  const tags = useMemo(() => ['ge', 'am'].includes(country.code) ? [] : [...new Set(country.universities.map(u => u[2]).filter(Boolean))], [country]);
  const cityCount = useMemo(() => new Set(country.universities.map(u => u[1])).size, [country]);
  const matches = country.universities.filter(u => (!tag || u[2] === tag) && `${u[0]} ${u[1]}`.toLowerCase().includes(query.trim().toLowerCase()));

  return <section id="medical-universities" className="bg-white university-directory"><div className="content-wrap">
    <p className="eyebrow">MEDICAL UNIVERSITY DIRECTORY</p>
    <h2>{Math.floor(medicalUniversityTotal / 10) * 10}+ medical universities across {medicalUniversityCountries.length} countries.</h2>
    <p className="section-copy">Choose a destination to see its medical universities and cities. Shortlist the names that interest you and a JNEX counsellor will compare the curriculum, clinical training, fees and licensing pathway with you.</p>

    <div className="country-picker">{medicalUniversityGroups.map(([group, label]) => <div className="country-group" key={group}>
      <p>{label}</p>
      <div role="group" aria-label={label}>{medicalUniversityCountries.filter(c => c.group === group).map(c => <button type="button" key={c.code} aria-pressed={c.code === code} onClick={() => select(c.code)}>
        {flag(c.code, 'picker-flag')}{c.name}<span>{c.universities.length}</span>
      </button>)}</div>
    </div>)}</div>

    <div className="country-banner medical-country-banner">
      <div className="country-banner-flag">{flag(code, '')}</div>
      <div className="country-banner-copy">
        <p className="eyebrow">MBBS IN</p>
        <h3>{country.name}</h3>
        <ul className="country-stats">
          <li><Building2 size={18} aria-hidden="true" /><strong>{country.universities.length}</strong> {code === 'np' ? 'colleges' : 'universities'}</li>
          <li><MapPin size={18} aria-hidden="true" /><strong>{cityCount}</strong> {cityCount === 1 ? 'city' : 'cities'}</li>
          {fact && <li><Clock size={18} aria-hidden="true" />{fact.duration}</li>}
          {fact && <li><Languages size={18} aria-hidden="true" />{fact.medium}</li>}
        </ul>
        {fact?.budget && <p className="country-budget">Supplied budget reference <strong>₹{fact.budget[0]}–{fact.budget[1]} lakh</strong> total</p>}
      </div>
      <div className="country-banner-actions">
        {country.feature && <a className="primary-button" href={country.feature}>Compare fees & seats <ArrowRight size={16} aria-hidden="true" /></a>}
        <a className={country.feature ? 'banner-secondary' : 'primary-button'} href={`${contactHref}?subject=${encodeURIComponent(`MBBS in ${country.name} enquiry`)}`}>Discuss MBBS in {country.name} {!country.feature && <ArrowRight size={16} aria-hidden="true" />}</a>
      </div>
    </div>

    <div className="directory-tools">
      <label className="state-search"><Search size={18} aria-hidden="true" /><span className="sr-only">Search medical universities</span><input type="search" placeholder={`Search ${country.name} universities or cities`} value={query} onChange={event => { setQuery(event.target.value); setShown(PAGE_SIZE); }} /></label>
      {tags.length > 1 && <div className="tag-filter" role="group" aria-label="Filter by type">{['', ...tags].map(value => <button type="button" key={value || 'all'} aria-pressed={tag === value} onClick={() => { setTag(value); setShown(PAGE_SIZE); }}>{value || 'All'}</button>)}</div>}
    </div>
    <p className="result-count" role="status">{matches.length} {matches.length === 1 ? 'institution' : 'institutions'}{tag ? ` · ${tag}` : ''}</p>

    {matches.length ? <ul className="university-grid">{matches.slice(0, shown).map(([name, city, extra]) => <li className="university-card" key={name}>
      <CollegeCrest name={name} />
      <div>
        <h4>{name}</h4>
        <p><MapPin size={13} aria-hidden="true" />{city}</p>
        {extra && <div className="college-chips"><span className={country.code === 'ge' ? 'chip-fee' : undefined} title={country.tagLabel}>{extra}</span></div>}
      </div>
    </li>)}</ul> : <div className="empty-data"><h3>No matching institutions</h3><p>Try another name or city, or ask us about institutions not listed here.</p><button type="button" className="text-link" onClick={() => { setQuery(''); setTag(''); }}>Clear search</button></div>}
    {matches.length > shown && <div className="section-actions directory-more"><button type="button" className="reference-pagination-more" onClick={() => setShown(shown + PAGE_SIZE)}>Show {Math.min(PAGE_SIZE, matches.length - shown)} more</button></div>}

    {country.note && <p className="reference-note">{country.note}</p>}
    <p className="data-note"><Landmark size={13} aria-hidden="true" /> Names and cities are listed as supplied in JNEX’s medical university list; this is a directory, not a ranking or a recognition list. Confirm the programme, English-medium teaching, clinical training and current eligibility for registration in India before applying.</p>
  </div></section>;
}
