import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, MapPin, Search, Building2, Landmark } from 'lucide-react';
import { universityCountries } from '../data/study-abroad-universities';
import { contactHref, track } from '../data/config';
import { CollegeCrest } from './Visuals';

const PAGE_SIZE = 24;
const groups = [['popular', 'Popular destinations'], ['asia', 'Asia & Middle East'], ['europe', 'Europe']];
const tileCodes = ['gb', 'us', 'ca', 'au', 'nz', 'de', 'ie', 'fr', 'it', 'sg', 'ae', 'cn', 'jp'];
const byCode = Object.fromEntries(universityCountries.map(country => [country.code, country]));
const total = universityCountries.reduce((sum, country) => sum + country.universities.length, 0);
const cityOf = ([, city]) => (city || '').split(' / ')[0];
const regionPlural = { Nation: 'nations', State: 'states', Province: 'provinces', 'State / Territory': 'states & territories', Emirate: 'emirates' };

function flag(code, className) {
  return <img className={className} src={`/images/flags/${code}.svg`} alt="" width="40" height="30" loading="lazy" />;
}

// Destination tiles and the directory share the selected country, so a tile opens that country's list.
export default function StudyAbroadExplorer() {
  const [code, setCode] = useState('gb');
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('');
  const [shown, setShown] = useState(PAGE_SIZE);
  const country = byCode[code];

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('country');
    if (requested && byCode[requested]) setCode(requested);
  }, []);

  const select = (next, scroll) => {
    setCode(next); setQuery(''); setRegion(''); setShown(PAGE_SIZE);
    track('university_country_select', { country: next });
    if (scroll) document.getElementById('universities')?.scrollIntoView({ behavior: 'smooth' });
  };

  const regions = useMemo(() => country.regionLabel ? [...new Set(country.universities.map(u => u[2]).filter(Boolean))].sort() : [], [country]);
  const cities = useMemo(() => {
    const counts = {};
    country.universities.forEach(u => { const city = cityOf(u) || u[2]; if (city) counts[city] = (counts[city] || 0) + 1; });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [country]);
  const matches = country.universities.filter(u => (!region || u[2] === region) && `${u[0]} ${u[1] || ''} ${u[2] || ''}`.toLowerCase().includes(query.trim().toLowerCase()));

  return <>
    <section id="destinations" className="bg-slate-50 section-decor"><div className="content-wrap">
      <p className="eyebrow">POPULAR DESTINATIONS</p><h2>Where would you like to study?</h2>
      <p className="section-copy">Pick a country to see its universities, then compare programs, costs, scholarships and visa requirements with a JNEX counsellor.</p>
      <div className="destination-grid">{tileCodes.map(tile => <a className="destination-tile" key={tile} href={`?country=${tile}#universities`} onClick={event => { event.preventDefault(); select(tile, true); }}>
        {flag(tile, 'destination-flag')}<span><strong>{byCode[tile].name}</strong><small>{byCode[tile].universities.length} universities</small></span><ArrowRight size={16} aria-hidden="true" />
      </a>)}</div>
    </div></section>

    <section id="universities" className="bg-white university-directory"><div className="content-wrap">
      <p className="eyebrow">UNIVERSITY DIRECTORY</p>
      <h2>Explore {Math.floor(total / 50) * 50}+ universities in {universityCountries.length} countries.</h2>
      <p className="section-copy">Choose a destination, then search by university or city. Shortlist the names you like and we will help you compare courses, entry requirements, costs and intakes.</p>

      <div className="country-picker">{groups.map(([group, label]) => <div className="country-group" key={group}>
        <p>{label}</p>
        <div role="group" aria-label={label}>{universityCountries.filter(c => c.group === group).map(c => <button type="button" key={c.code} aria-pressed={c.code === code} onClick={() => select(c.code)}>
          {flag(c.code, 'picker-flag')}{c.name}<span>{c.universities.length}</span>
        </button>)}</div>
      </div>)}</div>

      <div className="country-banner">
        <div className="country-banner-flag">{flag(code, '')}</div>
        <div className="country-banner-copy">
          <p className="eyebrow">STUDY IN</p>
          <h3>{country.name}</h3>
          <ul className="country-stats">
            <li><Building2 size={18} aria-hidden="true" /><strong>{country.universities.length}</strong> universities</li>
            {cities.length > 0 && <li><MapPin size={18} aria-hidden="true" /><strong>{cities.length}</strong> locations</li>}
          </ul>
          {cities.length > 0 && <div className="country-cities">{cities.slice(0, 6).map(([city]) => <span key={city}>{city}</span>)}</div>}
        </div>
        <a className="primary-button" href={`${contactHref}?subject=${encodeURIComponent(`Study in ${country.name} enquiry`)}`}>Discuss studying in {country.name} <ArrowRight size={16} aria-hidden="true" /></a>
      </div>

      <div className="directory-tools">
        <label className="state-search"><Search size={18} aria-hidden="true" /><span className="sr-only">Search universities</span><input type="search" placeholder={`Search ${country.name} universities or cities`} value={query} onChange={event => { setQuery(event.target.value); setShown(PAGE_SIZE); }} /></label>
        {regions.length > 0 && <label className="region-select"><span className="sr-only">{country.regionLabel}</span><select value={region} onChange={event => { setRegion(event.target.value); setShown(PAGE_SIZE); }}><option value="">All {regionPlural[country.regionLabel]}</option>{regions.map(value => <option key={value}>{value}</option>)}</select></label>}
      </div>
      <p className="result-count" role="status">{matches.length} {matches.length === 1 ? 'university' : 'universities'}{region ? ` in ${region}` : ''}</p>

      {matches.length ? <ul className="university-grid">{matches.slice(0, shown).map(([name, city, regionName, areas]) => <li className="university-card" key={name}>
        <CollegeCrest name={name} />
        <div>
          <h4>{name}</h4>
          {(city || regionName) && <p><MapPin size={13} aria-hidden="true" />{[city, regionName !== city ? regionName : null].filter(Boolean).join(', ')}</p>}
          {areas && <div className="college-chips">{areas.map(area => <span key={area}>{area}</span>)}</div>}
        </div>
      </li>)}</ul> : <div className="empty-data"><h3>No matching universities</h3><p>Try another name or city, or ask us about institutions not listed here.</p><button type="button" className="text-link" onClick={() => { setQuery(''); setRegion(''); }}>Clear search</button></div>}
      {matches.length > shown && <div className="section-actions directory-more"><button type="button" className="reference-pagination-more" onClick={() => setShown(shown + PAGE_SIZE)}>Show {Math.min(PAGE_SIZE, matches.length - shown)} more universities</button></div>}

      <p className="data-note"><Landmark size={13} aria-hidden="true" /> Names and locations are listed as supplied in JNEX’s destination list; this is a directory, not a ranking. Confirm current programmes, entry requirements, fees and intakes with each university.</p>
    </div></section>
  </>;
}
