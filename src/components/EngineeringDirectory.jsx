import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { engineeringReferences, contentReviewDate } from '../data/addition-content';
import { contactHref } from '../data/config';
import { Pagination } from './ReferenceUI';

export default function EngineeringDirectory() {
  const [query, setQuery] = useState(''), [scope, setScope] = useState('All'), [page, setPage] = useState(1);
  const filtered = engineeringReferences.filter(record => (scope === 'All' || record.scope === scope) && `${record.name} ${record.location} ${record.status}`.toLowerCase().includes(query.trim().toLowerCase()));
  const pages = Math.max(1, Math.ceil(filtered.length / 12));
  const visible = filtered.slice((page - 1) * 12, page * 12);
  return <section id="engineering-directory" className="bg-white"><div className="content-wrap">
    <p className="eyebrow">ENGINEERING & TECHNOLOGY</p><h2>Compare institutions across India.</h2>
    <p className="section-copy">Explore institutions from the supplied India, Karnataka, Maharashtra and Tamil Nadu directories. Includes private, deemed, autonomous and some government-aided colleges; this is a directory, not a ranking.</p>
    <div className="college-filters engineering-filters"><label>Directory region<select value={scope} onChange={event => { setScope(event.target.value); setPage(1); }}><option value="All">All India</option>{['Karnataka', 'Maharashtra', 'Tamil Nadu'].map(value => <option key={value}>{value}</option>)}</select></label><label>Find an institution<input type="search" value={query} placeholder="College, city or affiliation" onChange={event => { setQuery(event.target.value); setPage(1); }} /></label></div>
    <p className="result-count" role="status">{filtered.length} institution references{filtered.length > 0 ? ` · Showing ${(page - 1) * 12 + 1}–${Math.min(page * 12, filtered.length)}` : ''}</p>
    <div className="discovery-grid">{visible.map(record => <article className="discovery-card" key={`${record.name}-${record.location}`}><span className="reference-badge">{record.scope === 'India' ? 'National directory' : record.scope}</span><h3>{record.name}</h3><p>{record.location}</p><dl className="reference-facts"><div><dt>Affiliation / status in source</dt><dd>{record.status}</dd></div></dl><details className="reference-source"><summary>Source & details to confirm</summary><p>Check current university affiliation, branch intake, entry route, approval where applicable, tuition and placement evidence.</p>{record.sources.map(source => <a key={source.file + source.page} href={source.url}>{source.file.replaceAll('_', ' ')} · Page {source.page}</a>)}</details><a className="text-link" href={`${contactHref}?subject=${encodeURIComponent(record.name + ' engineering admission enquiry')}`}>Discuss this institution <ArrowRight size={15} aria-hidden="true" /></a></article>)}</div>
    {!filtered.length && <div className="empty-data"><h3>No matching institutions</h3><p>Try a different college name or region.</p><button className="text-link" onClick={() => { setQuery(''); setScope('All'); setPage(1); }}>Clear filters</button></div>}
    <Pagination page={page} pages={pages} setPage={setPage} label="Engineering directory" />
    <div className="reference-callout"><h3>Build a shortlist around your course.</h3><p>Compare B.Tech/B.E. branches, entrance routes, campus location, complete cost and training opportunities. For postgraduate engineering, verify the university’s M.Tech/M.E. eligibility and selection process.</p><a className="text-link" href="/resources/">Open the four engineering reference PDFs <ArrowRight size={15} aria-hidden="true" /></a></div>
    <p className="data-note">Directory references reviewed {contentReviewDate}. Supplied affiliation/status is not an independently verified current approval. No unsupported fees, cutoff scores or rankings are added.</p>
  </div></section>;
}
