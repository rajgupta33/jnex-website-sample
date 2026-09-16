import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { colleges, states, dataNote } from '../data/admissions';
import { medicalReferences, money, referenceNote } from '../data/addition-content';
import { track, contactHref } from '../data/config';
import { Pagination } from './ReferenceUI';

export default function CollegeExplorer({ full = false, initialState = '', initialManagement = '' }) {
  const [state, setState] = useState(initialState), [query, setQuery] = useState(''), [management, setManagement] = useState(initialManagement), [page, setPage] = useState(1);
  const verified = colleges.filter(record => record.published && record.source_urls?.length && record.last_updated).map(record => ({ ...record, id: record.slug, name: record.college_name, management: record.management_type, verified: true }));
  const all = [...verified, ...medicalReferences];
  const visible = all.filter(record => (!state || record.state === state) && (!management || record.management === management) && `${record.name} ${record.city || ''} ${record.state} ${record.university || ''}`.toLowerCase().includes(query.trim().toLowerCase()));
  const pageSize = full ? 12 : 6;
  const pages = Math.max(1, Math.ceil(visible.length / pageSize));
  const records = visible.slice((page - 1) * pageSize, page * pageSize);
  const stateNames = [...new Set([...states.map(record => record.name), ...all.map(record => record.state)])].sort();
  const update = (setter, value) => { setter(value); setPage(1); };
  useEffect(() => {
    if (!full || initialState) return;
    const selectedState = new URLSearchParams(window.location.search).get('state');
    if (selectedState && stateNames.includes(selectedState)) setState(selectedState);
  }, [full, initialState]);
  const verifiedDatum = (record, field, year) => record[field] != null && record[year] ? `${record[field]} (${record[year]})` : 'Check current details';
  const directoryHref = `/medical-colleges/${state ? `?state=${encodeURIComponent(state)}` : ''}`;
  return <section id="colleges" className="bg-slate-50"><div className="content-wrap">
    <p className="eyebrow">MEDICAL COLLEGE EXPLORER</p><h2>{full ? 'Explore colleges. Ask better questions.' : 'Start your college shortlist with the details that matter.'}</h2>
    <p className="section-copy">Explore private and deemed institution references by state, college name or university. Keep supplied figures separate from confirmed fees and current allotment data.</p>
    <div className="college-filters"><label>State<select value={state} onChange={event => update(setState, event.target.value)}><option value="">All states & UTs</option>{stateNames.map(name => <option key={name}>{name}</option>)}</select></label><label>Search colleges<input type="search" placeholder="Medical college, city, state or university" value={query} onChange={event => update(setQuery, event.target.value)} /></label><label>Management in reference<select value={management} onChange={event => update(setManagement, event.target.value)}><option value="">All types</option>{['Government', 'Private', 'Deemed'].map(value => <option key={value}>{value}</option>)}</select></label></div>
    <p className="result-count" role="status">{visible.length} source records{visible.length ? ` · Showing ${(page - 1) * pageSize + 1}–${Math.min(page * pageSize, visible.length)}` : ''}</p>
    {records.length ? <div className="discovery-grid">{records.map(record => <article className="discovery-card medical-reference-card" key={record.id}>
      <span className={`reference-badge ${record.verified ? 'verified' : ''}`}>{record.verified ? 'Verified record' : 'JNEX planning reference'}</span><h3>{record.name}</h3><p>{record.city ? `${record.city}, ` : ''}{record.state} · {record.management} in source</p>
      <dl className="reference-facts">{record.verified ? [['Annual tuition', verifiedDatum(record, 'annual_tuition', 'fee_year')], ['MBBS seats', verifiedDatum(record, 'mbbs_seats', 'seat_year')], ['Previous closing rank', verifiedDatum(record, 'closing_rank_or_range', 'cutoff_year')]].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>) : <>
        <div><dt>Reported fee · period unconfirmed</dt><dd>{money(record.reportedFee)}</dd></div><div><dt>Reported seats · verify current intake</dt><dd>{record.reportedSeats > 0 ? record.reportedSeats : 'Confirm current intake'}</dd></div>{record.university && <div><dt>University in source</dt><dd>{record.university}</dd></div>}
      </>}</dl>
      <details className="reference-source"><summary>{record.verified ? 'Official source' : 'Source & fee notes'}</summary>{record.verified ? <><p>Last updated {record.last_updated}</p><a href={record.source_urls[0]}>Official source ↗</a></> : <><p>Supplied 2026 workbook · {record.source.sheet} · Row {record.source.row}. Original fee heading: “{record.feeLabelInSource}”. The charging period and quota are unconfirmed because the supplied references conflict. This amount is not used in automatic cost calculations.</p>{record.established && <p>Establishment year in source: {record.established}</p>}<a href={record.source.url}>Open original fee workbook</a></>}</details>
      <a className="text-link" href={`${contactHref}?subject=${encodeURIComponent(record.name + ' MBBS admission enquiry')}`} onClick={() => track('college_enquiry_click')}>Discuss this college <ArrowRight size={15} aria-hidden="true" /></a>
    </article>)}</div> : <div className="empty-data"><h3>{state ? `No matching records in ${state}` : 'No matching college records'}</h3><p>Try a broader search, or share your profile to discuss options beyond this supplied dataset.</p><button className="text-link" onClick={() => { setState(''); setQuery(''); setManagement(''); setPage(1); }}>Clear filters</button></div>}
    {full && <Pagination page={page} pages={pages} setPage={setPage} label="Medical college" />}
    <div className="section-actions">{!full && <a className="primary-button" href={directoryHref}>Explore the full college directory <ArrowRight size={16} aria-hidden="true" /></a>}<a className="text-link" href="https://www.nmc.org.in/information-desk/college-and-course-search/">Check the official NMC college directory ↗</a><a className="text-link" href="/resources/#medical-fees">Open the fee reference workbook</a></div>
    <p className="data-note">{referenceNote} {dataNote} The supplied private-state summary has conflicting totals and is not used for aggregate seat claims. Source records may overlap across supplied lists.</p>
  </div></section>;
}
