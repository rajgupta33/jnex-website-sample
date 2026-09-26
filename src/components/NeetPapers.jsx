import { useState } from 'react';
import { ArrowRight, BookOpen, Download, FileText } from 'lucide-react';
import papers from '../data/neet-papers.json';
import { track } from '../data/config';

export function NeetPapersLink() {
  return <a className="neet-paper-link" href="/resources/#neet-question-papers">
    <span className="neet-paper-link-icon"><BookOpen size={24} aria-hidden="true" /></span>
    <span><small>FREE STUDY RESOURCES · 2016–2026</small><strong>NEET UG question papers</strong><span>Browse by year. Download and practise at your own pace.</span></span>
    <ArrowRight size={22} aria-hidden="true" />
  </a>;
}

export default function NeetPapers() {
  const [year, setYear] = useState('All');
  const [expanded, setExpanded] = useState(false);
  const filtered = papers.filter(paper => year === 'All' || String(paper.year) === year);
  const visible = expanded ? filtered : filtered.slice(0, 6);
  return <section id="neet-question-papers" className="neet-papers"><div className="content-wrap">
    <div className="neet-papers-heading"><div><p className="eyebrow">THE NEET UG PAPER COLLECTION</p><h2>A little practice.<br />A clearer way forward.</h2><p className="section-copy">Explore question papers from 2016–2026 for Physics, Chemistry and Biology. Choose a year, open a paper or save it for your next practice session.</p></div><div className="neet-papers-stat"><BookOpen size={28} aria-hidden="true" /><strong>{papers.length}</strong><span>papers to explore</span></div></div>
    <div className="neet-papers-toolbar"><label htmlFor="neet-paper-year">Browse by year <select id="neet-paper-year" value={year} onChange={event => { setYear(event.target.value); setExpanded(false); }}><option value="All">All years</option>{[...new Set(papers.map(paper => paper.year))].map(value => <option key={value} value={value}>{value}</option>)}</select></label><p role="status">Showing {visible.length} of {filtered.length} papers</p></div>
    <div className="neet-paper-grid">{visible.map(paper => <article className="neet-paper-card" key={paper.id}>
      <div className="neet-paper-card-top"><span>{paper.year}</span><FileText size={23} strokeWidth={1.5} aria-hidden="true" /></div>
      <h3>NEET UG {paper.year}</h3><p className="neet-paper-edition">{paper.label}{paper.date && <span>{paper.date}</span>}</p>
      <p className="neet-paper-meta">PDF <span>·</span> {paper.pages} pages <span>·</span> {paper.size}</p>
      <div className="neet-paper-actions"><a href={paper.url} target="_blank" rel="noopener noreferrer" aria-label={`Open NEET UG ${paper.year} ${paper.label} PDF in a new tab`}>Open paper <ArrowRight size={15} aria-hidden="true" /></a><a href={paper.url} download aria-label={`Download NEET UG ${paper.year} ${paper.label} PDF`} onClick={() => track('resource_download', { resource: `neet-${paper.id}` })}><Download size={16} aria-hidden="true" />Download</a></div>
    </article>)}</div>
    {filtered.length > 6 && <button className="neet-papers-more" type="button" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>{expanded ? 'Show fewer papers' : `View all ${filtered.length} papers`} <ArrowRight size={16} aria-hidden="true" /></button>}
    <p className="data-note">Publisher-prepared copies, supplied for practice. Years and editions follow the document headings; regional and re-examination papers are listed separately. Original PDFs retain their publisher credits. Older papers may follow a different exam pattern.</p>
  </div></section>;
}
