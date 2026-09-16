import { useState } from 'react';
import { ArrowRight, BookOpen, Download } from 'lucide-react';
import { referenceFiles, resources, stateGuides, contentReviewDate } from '../data/addition-content';
import { track } from '../data/config';

export default function ResourceLibrary({ preview = false }) {
  const [category, setCategory] = useState('All');
  const images = [
    ...stateGuides.filter(state => state.poster).map(state => ({ id: `poster-${state.slug}`, category: 'State References', title: `${state.name} college fee poster`, copy: 'Original supplied college and quota fee reference.', file: state.poster, href: `/mbbs-admission/${state.slug}/`, note: state.feeCopy })),
    { id: 'career-poster', category: 'Allied Health', title: 'Medical options after Class 12 PCB', copy: 'Medical, nursing, pharmacy, veterinary, allied health and research pathways.', file: 'Medical options after 12th.png', href: '/medical-admissions/', note: 'Course durations and entry routes vary by institution and intake.' },
    { id: 'abroad-poster', category: 'Medical Abroad', title: 'MBBS abroad budget reference poster', copy: 'Eight supplied country-level approximate budget ranges.', file: 'MBBS ABROAD .png', href: '/mbbs-abroad/', note: 'Budget inclusions, university recognition and performance claims are not established by this promotional poster.' },
    { id: 'bengaluru-poster', category: 'State References', title: 'Bengaluru medical college reference', copy: 'A supplied location-based college shortlist.', file: 'PHOTO-2026-07-01-11-39-47.jpg.jpeg', href: '/mbbs-admission/karnataka/#bengaluru', note: 'The “under ₹60 lakh” and “350+” claims have no confirmed fee inclusions, quota or cutoff edition.' },
  ].map(resource => ({ ...resource, format: 'Image', download: referenceFiles[resource.file] }));
  const all = [...resources, ...images];
  const visible = preview ? [resources[0], resources[2], resources[3]] : all.filter(resource => category === 'All' || resource.category === category);
  return <section id={preview ? 'guides' : 'resource-library'} className="bg-slate-50"><div className="content-wrap">
    <p className="eyebrow">JNEX ADMISSION RESOURCES</p><h2>{preview ? 'Read a little. Plan with more clarity.' : 'Guides for your next admission decision.'}</h2>
    <p className="section-copy">Explore readable course and college information, then open the original guides for more context. Supplied fee and cutoff figures are planning references that need official confirmation.</p>
    {!preview && <div className="reference-tabs" role="group" aria-label="Filter resources by category">{['All', ...new Set(all.map(resource => resource.category))].map(value => <button type="button" aria-pressed={category === value} key={value} onClick={() => setCategory(value)}>{value}</button>)}</div>}
    <div className="discovery-grid">{visible.map(resource => <article id={preview ? undefined : resource.id} className="discovery-card resource-card" key={resource.id}>
      <div className="resource-meta"><BookOpen size={18} aria-hidden="true" /><span>{resource.category}</span><span>{resource.format}</span></div>
      <h3>{resource.title}</h3><p>{resource.copy}</p>{!preview && <p className="reference-note">{resource.note}</p>}
      <a className="text-link" href={resource.href}>Explore on the website <ArrowRight size={15} aria-hidden="true" /></a>
      {!preview && <a className="resource-download" href={resource.download} download onClick={() => track('resource_download', { resource: resource.id })}><Download size={15} aria-hidden="true" />Download original {resource.format}</a>}
    </article>)}</div>
    {preview ? <a className="primary-button mt-8" href="/resources/">Explore all guides & resources <ArrowRight size={16} aria-hidden="true" /></a> : <p className="data-note">Content reviewed {contentReviewDate}. Downloaded originals retain their supplied wording; website notes explain unresolved units and claims. Original files have not been revised.</p>}
  </div></section>;
}
