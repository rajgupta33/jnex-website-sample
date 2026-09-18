import { useState } from 'react';
import { ArrowUpRight, Search, MapPin } from 'lucide-react';
import { regions, territories, states, featuredStates, publishedState, profileLink } from '../data/admissions';
import { track } from '../data/config';
import { stateGuides } from '../data/addition-content';

export default function PanIndia({ full = false, editorial = false }) {
  const [expanded, setExpanded] = useState(full);
  const [query, setQuery] = useState('');
  function card(name) {
    const state = states.find(s => s.name === name);
    const published = state && publishedState(state);
    const referenceGuide = stateGuides.find(guide => guide.name === name);
    return <a key={name} className="state-card" href={published || referenceGuide ? `/mbbs-admission/${state?.slug || referenceGuide.slug}/` : profileLink(name)} aria-label={published || referenceGuide ? `MBBS admission planning in ${name}` : `Explore MBBS pathways for a student from ${name}`} onClick={() => track('state_card_click', { state: name })}>
      <MapPin size={18} aria-hidden="true" /><span className="state-card-name"><strong>{name}</strong>{editorial && <small>{referenceGuide ? 'Explore routes, documents and labelled college fee references.' : 'Review counselling routes, eligibility and college options with your profile.'}</small>}</span><ArrowUpRight size={17} aria-hidden="true" />
    </a>;
  }
  const matches = name => name.toLowerCase().includes(query.trim().toLowerCase());
  return <section id={editorial ? 'state-explorer' : 'states'} className={editorial ? 'bg-slate-50' : 'pan-india-section'}><div className="content-wrap">
    <p className="eyebrow">{editorial ? 'STATE-WISE MBBS ADMISSIONS' : 'PAN-INDIA MBBS ADMISSIONS'}</p>
    <div className="section-heading-row"><h2>{editorial ? 'Explore MBBS admissions state by state.' : 'MBBS Admission Guidance Across India'}</h2><MapPin className="state-heading-icon" size={48} aria-hidden="true" /></div>
    {editorial ? <p className="section-copy">Check counselling routes, college types, fees, previous cutoff trends, eligibility and official updates for the state you are considering.</p> : <><p className="section-copy">Explore Government, Private, Deemed and applicable NRI pathways across India. Start with your state, then review options against your NEET rank, domicile, category and budget.</p><p className="coverage-line">All 28 States <span>•</span> State + AIQ Counselling <span>•</span> Union Territory pathways where applicable</p></>}
    {!editorial && <h3 className="text-lg font-bold mt-8 mb-4">Choose a state to explore MBBS admission options</h3>}
    {!editorial && <label className="state-search"><Search size={18} aria-hidden="true" /><span className="sr-only">Find my state</span><input type="search" placeholder="Find your state or Union Territory" value={query} onChange={e => setQuery(e.target.value)} /></label>}
    {expanded && !editorial ? Object.entries({ ...regions, 'Union Territory / Central counselling pathways where applicable': territories }).map(([region, names]) => names.some(matches) && <div key={region} className="state-region"><h3>{region}</h3><div className="state-grid">{names.filter(matches).map(card)}</div></div>) : <div className="state-grid">{(query ? [...states.map(s => s.name), ...territories] : featuredStates.slice(0, editorial ? 8 : 6)).filter(matches).map(card)}</div>}
    {query && ![...states.map(s => s.name), ...territories].some(matches) && <p role="status" className="p-5">No matching state. Try another name.</p>}
    <p className="text-sm text-slate-500 mt-5">Explore the ten available state planning pages, or select another state to personalise your profile. Supplied fee and cutoff figures remain planning references.</p>
    <div className="section-actions">{editorial ? <a className="text-link" href="/mbbs-admission/#states">View All States →</a> : <><a className="primary-button" href="/mbbs-admission/">Explore MBBS Admissions in India →</a><button className="text-link" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>{expanded ? 'Show Featured States −' : 'View All States & Union Territory Pathways +'}</button></>}</div>
  </div></section>;
}
