import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Search, MapPin, GraduationCap, ClipboardCheck, Download, Smile } from 'lucide-react';
import groups from '../data/bds-colleges.json';
import { contactHref } from '../data/config';
import { Pagination } from './ReferenceUI';
import './bds.css';

const colleges = groups.flatMap(group => group.colleges.map(name => ({ name, state: group.state })));
const enquire = subject => `${contactHref}?subject=${encodeURIComponent(subject + ' — BDS admission enquiry')}`;
const steps = [
  ['01', 'Find your college options', 'Explore the dental colleges listed for your preferred state.'],
  ['02', 'Compare the complete picture', 'Discuss tuition, hostel costs, clinical exposure and your priorities.'],
  ['03', 'Plan your application', 'Check the current counselling route, documents and deadlines.'],
];

export default function BDSLanding() {
  const [state, setState] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const filtered = colleges.filter(college => (!state || college.state === state) && college.name.toLowerCase().includes(query.trim().toLowerCase()));
  const pageSize = 12;
  const shown = filtered.slice((page - 1) * pageSize, page * pageSize);
  const updateState = value => { setState(value); setPage(1); };
  const reset = () => { setState(''); setQuery(''); setPage(1); };

  return <div className="bds-page">
    <section className="bds-hero">
      <div className="content-wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/medical-admissions/">Medical Admissions</a><span>/</span><span>BDS</span></nav>
        <div className="bds-hero-grid">
          <div className="bds-hero-copy">
            <p className="eyebrow">DENTAL ADMISSIONS · JNEX EDUCATION</p>
            <h1>Your future in dentistry.<br /><em>A clearer way forward.</em></h1>
            <p className="bds-lead">Explore BDS colleges, build a thoughtful shortlist and plan your next step with guidance made for you.</p>
            <div className="bds-actions"><a className="bds-button" href="#bds-colleges">Explore BDS colleges <ArrowRight size={18} /></a><a className="bds-secondary" href={enquire('Personalised shortlist')}>Talk to a counsellor <ArrowUpRight size={17} /></a></div>
            <div className="bds-hero-note"><GraduationCap size={20} aria-hidden="true" /><span>Bachelor of Dental Surgery<br /><strong>College selection & admission guidance</strong></span></div>
          </div>
          <aside className="bds-plan" aria-label="Your BDS admission plan">
            <div className="bds-plan-top"><span className="bds-symbol"><Smile size={30} strokeWidth={1.4} /></span><span>YOUR NEXT CHAPTER<br /><strong>Starts with a plan.</strong></span></div>
            <ol>{steps.map(([n, title, copy]) => <li key={n}><span>{n}</span><div><h2>{title}</h2><p>{copy}</p></div></li>)}</ol>
            <a href="#bds-colleges">Find your starting point <ArrowRight size={18} /></a>
          </aside>
        </div>
        <div className="bds-stats"><div><strong>{colleges.length}</strong><span>College entries in our directory</span></div><div><strong>{groups.length}</strong><span>State & UT groups in the source</span></div><div><strong>One focus</strong><span>Your dental admission journey</span></div></div>
      </div>
    </section>

    <section id="bds-colleges" className="bds-directory">
      <div className="content-wrap">
        <div className="bds-section-heading"><div><p className="eyebrow">FIND YOUR FIT</p><h2>Dental colleges, state by state.</h2><p>Choose a state to see its BDS college list. Search within that state to narrow your shortlist.</p></div><a className="bds-download" href="/resources/private-bds-colleges-india.pdf" download><Download size={18} /> Download directory</a></div>
        <div className="bds-filter-panel">
          <div className="bds-filters"><label htmlFor="bds-state">State / Union Territory<select id="bds-state" value={state} onChange={e => updateState(e.target.value)}><option value="">All listed states & UTs</option>{groups.map(group => <option key={group.state} value={group.state}>{group.state} ({group.colleges.length})</option>)}</select></label><label htmlFor="bds-search">College name<div className="bds-search"><Search size={18} aria-hidden="true" /><input id="bds-search" type="search" placeholder="Search dental colleges…" value={query} onChange={e => { setQuery(e.target.value); setPage(1); }} /></div></label></div>
          <div className="bds-quick-states"><span>Quick picks</span>{['Uttarakhand', 'Uttar Pradesh', 'Karnataka', 'Maharashtra'].map(name => <button key={name} type="button" aria-pressed={state === name} onClick={() => updateState(name)}>{name}</button>)}</div>
        </div>
        <div className="bds-result-row"><p role="status" aria-live="polite"><strong>{filtered.length} {filtered.length === 1 ? 'college' : 'colleges'}</strong> {state ? `in ${state}` : 'across all listed states & UTs'}{query.trim() && ' matching your search'}</p>{(state || query) && <button type="button" onClick={reset}>Clear filters</button>}</div>
        {shown.length ? <div className="bds-college-grid">{shown.map((college, index) => <article className="bds-college" key={college.state + college.name}><div className="bds-college-top"><span><MapPin size={14} aria-hidden="true" />{college.state}</span><span className="bds-course-tag">BDS</span></div><h3>{college.name}</h3><div className="bds-college-bottom"><span>{String((page - 1) * pageSize + index + 1).padStart(2, '0')}</span><a href={enquire(college.name)} aria-label={`Discuss ${college.name}`}>Discuss this college <ArrowUpRight size={16} /></a></div></article>)}</div> : <div className="bds-empty"><Search size={28} aria-hidden="true" /><h3>No matching dental colleges{state ? ` in ${state}` : ''}.</h3><p>Try another college name or clear your filters.</p><button className="bds-button" onClick={reset}>Clear filters</button></div>}
        <Pagination page={page} pages={Math.ceil(filtered.length / pageSize)} setPage={setPage} label="BDS college" />
        <p className="bds-source-note">Source: JNEX’s supplied private BDS college directory. This is a reference shortlist, not a complete national register or confirmation of current admission availability. Names and state groupings follow the supplied list; confirm current recognition, seats, fees and counselling eligibility before applying.</p>
      </div>
    </section>

    <section className="bds-guidance"><div className="content-wrap"><div className="bds-section-heading"><div><p className="eyebrow">BEYOND A COLLEGE NAME</p><h2>Make a confident, informed choice.</h2><p>A good shortlist considers your goals and the details that matter to your family.</p></div><ClipboardCheck size={42} strokeWidth={1.3} aria-hidden="true" /></div><div className="bds-guidance-grid">{[
      ['Your academic profile', 'Bring your academic details, NEET result and preferred locations so we can discuss a relevant BDS shortlist.'],
      ['Your complete budget', 'Compare tuition, hostel, living expenses and additional charges using the latest college fee information.'],
      ['Your admission checklist', 'Confirm recognition, current seat availability, applicable counselling rules and required documents before making a decision.'],
    ].map(([title, copy], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="bds-faq"><div className="content-wrap"><p className="eyebrow">A LITTLE MORE CLARITY</p><h2>Your BDS questions, answered.</h2>{[
      ['Which colleges appear in this directory?', 'Only the entries in the supplied private BDS directory appear here. Choosing a state shows only colleges listed under that state in the source; the BDS list is separate from the MBBS directory.'],
      ['Why are only two colleges listed for Uttarakhand?', 'The supplied list includes Seema Dental College & Hospital, Rishikesh, and Uttaranchal Dental College & Medical Research Institute, Dehradun. These are the only two entries shown for Uttarakhand.'],
      ['Can I compare fees and admission availability here?', 'The supplied directory contains college names, not verified current fees, cutoffs or available seats. Discuss your shortlist with JNEX and check the latest information from the college and counselling authority.'],
      ['How do I get a personalised BDS shortlist?', 'Use “Discuss this college” to open an email enquiry about a specific institution, or contact a counsellor with your academic profile, preferred states and budget.'],
    ].map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
  </div>;
}
