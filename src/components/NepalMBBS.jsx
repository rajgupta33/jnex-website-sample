import { useMemo, useState } from 'react';
import { ArrowRight, MapPin, Search, Users, House, GraduationCap, Languages, Route, Stethoscope, BadgeCheck, FileText, ShieldCheck, TriangleAlert, Plus, MessageCircle } from 'lucide-react';
import { nepalColleges, nepalTotals, nepalSourceSession, formatNepalFee, nepalDocuments, nepalSteps, nepalFaqs } from '../data/nepal-mbbs-colleges';
import { contactHref, track } from '../data/config';
import { CollegeCrest } from './Visuals';

const affiliations = ['Tribhuvan University', 'Kathmandu University', 'Autonomous'];
const sorts = [['seats', 'Most seats'], ['inr', 'Lowest ₹ package'], ['name', 'A–Z']];
const lakh = amount => (amount / 100000).toFixed(1).replace(/\.0$/, '');

// Compact Nepal feature used on the homepage and the MBBS Abroad page.
export function NepalSpotlight() {
  const featured = ['iom', 'kmc', 'kusms', 'manipal', 'chitwan', 'bpkihs'].map(slug => nepalColleges.find(college => college.slug === slug));
  return <div className="nepal-spotlight">
    <div className="nepal-spotlight-copy">
      <p className="eyebrow"><img src="/images/flags/np.svg" alt="" width="20" height="24" /> SPOTLIGHT · MBBS IN NEPAL</p>
      <h3>MBBS next door, with fees laid out college by college.</h3>
      <p>Compare {nepalTotals.colleges} Nepal medical colleges: tuition packages, year-wise instalments, seats for international students and hostel costs.</p>
      <ul className="spotlight-stats">
        <li><strong>{nepalTotals.colleges}</strong><span>colleges</span></li>
        <li><strong>{nepalTotals.seats}</strong><span>international seats</span></li>
        <li><strong>₹{lakh(nepalTotals.inrRange[0])}–{lakh(nepalTotals.inrRange[1])} L</strong><span>tuition packages</span></li>
      </ul>
      <a className="primary-button" href="/mbbs-abroad/nepal/">Compare Nepal colleges & fees <ArrowRight size={16} aria-hidden="true" /></a>
    </div>
    <ul className="spotlight-colleges" aria-label="Featured Nepal medical colleges">{featured.map(college => <li key={college.slug}><a href={`/mbbs-abroad/nepal/#college-${college.slug}`}><CollegeCrest name={college.name} className="crest-sm" /><span><strong>{college.short}</strong><small>{college.city} · {formatNepalFee(college.total, college.currency, true)}</small></span></a></li>)}</ul>
  </div>;
}

function InstalmentBar({ college }) {
  return <div className="instalment-bar" role="img" aria-label={`Instalments: ${college.installments.map(([label, amount]) => `${label} ${formatNepalFee(amount, college.currency, true)}`).join(', ')}`}>
    {college.installments.map(([label, amount], index) => <span key={label} style={{ flexGrow: amount }} className={`tone-${index}`}><b>{label.replace('Year ', 'Y')}</b>{formatNepalFee(amount, college.currency, true)}</span>)}
  </div>;
}

function CollegeCard({ college }) {
  return <article id={`college-${college.slug}`} className="nepal-college-card">
    <div className="nepal-college-head">
      <CollegeCrest name={college.name} />
      <div><h3>{college.name}</h3><p><MapPin size={13} aria-hidden="true" />{college.area}</p></div>
    </div>
    <div className="nepal-college-tags"><span className="affiliation">{college.affiliation}</span><span className="seats"><Users size={13} aria-hidden="true" />{college.seats} international seats</span>{college.inclusive && <span className="inclusive"><House size={13} aria-hidden="true" />Hostel included</span>}</div>
    <div className="nepal-fee">
      <small>Tuition package · Indian students</small>
      <strong>{formatNepalFee(college.total, college.currency)}</strong>
      {college.currency === 'INR' && <em>₹{lakh(college.total)} lakh over {college.installments.length} instalments</em>}
      {college.currency === 'USD' && <em>Charged in US dollars over {college.installments.length} instalments</em>}
    </div>
    <InstalmentBar college={college} />
    {(college.totalNote || college.alt) && <p className="nepal-fee-note">{[college.totalNote, college.alt].filter(Boolean).join(' · ')}</p>}
    <p className="nepal-living"><House size={15} aria-hidden="true" />{college.living}</p>
    <div className="college-chips">{college.facts.map(fact => <span key={fact}>{fact}</span>)}</div>
    <a className="text-link" href={`${contactHref}?subject=${encodeURIComponent(`MBBS in Nepal: ${college.short} enquiry`)}`} onClick={() => track('nepal_college_enquiry', { college: college.slug })}>Discuss {college.short} admission <ArrowRight size={15} aria-hidden="true" /></a>
  </article>;
}

export default function NepalMBBS() {
  const [affiliation, setAffiliation] = useState('');
  const [sort, setSort] = useState('seats');
  const [query, setQuery] = useState('');
  const colleges = useMemo(() => nepalColleges
    .filter(college => (!affiliation || college.affiliation === affiliation) && `${college.name} ${college.short} ${college.area}`.toLowerCase().includes(query.trim().toLowerCase()))
    .sort((a, b) => sort === 'name' ? a.name.localeCompare(b.name) : sort === 'inr' ? (a.currency === b.currency ? a.total - b.total : a.currency === 'INR' ? -1 : 1) : b.seats - a.seats || a.name.localeCompare(b.name)), [affiliation, sort, query]);

  const reasons = [
    [Languages, 'English-medium teaching', 'Lectures and exams in English, with a curriculum pattern Indian students find familiar.'],
    [Route, 'Close to home', 'Colleges in Birgunj, Bhairahawa, Biratnagar and Janakpur sit near Indian border towns and rail heads.'],
    [House, 'Familiar food & culture', 'Similar food, festivals and daily life; several hostels run Indian mess options.'],
    [Stethoscope, 'Teaching-hospital training', 'Pre-clinical years, clinical rotations and a one-year compulsory rotating internship.'],
  ];

  return <>
    <section className="bg-white section-decor"><div className="content-wrap">
      <ul className="nepal-stat-strip">
        <li><strong>{nepalTotals.colleges}</strong><span>medical colleges compared</span></li>
        <li><strong>{nepalTotals.seats}</strong><span>seats for international students</span></li>
        <li><strong>5.5 yrs</strong><span>including 1-year internship</span></li>
        <li><strong>50th</strong><span>NEET percentile for direct entry</span></li>
      </ul>
      <p className="eyebrow">WHY NEPAL</p><h2>A short journey to a full MBBS.</h2>
      <p className="section-copy">Nepal is one of the most practical MBBS destinations for Indian families: no visa for Indian citizens, English-medium teaching and colleges a train or bus ride from home. Admissions are regulated by Nepal’s Medical Education Commission (MEC), with degrees from Tribhuvan University, Kathmandu University or an autonomous health-sciences academy.</p>
      <div className="nepal-reasons">{reasons.map(([Icon, title, copy]) => <article key={title}><span className="icon-badge" aria-hidden="true"><Icon strokeWidth={1.7} /></span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </div></section>

    <section id="eligibility" className="bg-slate-50"><div className="content-wrap">
      <p className="eyebrow">ELIGIBILITY</p><h2>Two ways in, depending on your NEET result.</h2>
      <p className="section-copy">Every applicant needs at least 50% in Physics, Chemistry and Biology at Class 12. Your NEET UG result then decides whether you apply directly or sit Nepal’s entrance exam first.</p>
      <div className="eligibility-routes">
        <article className="route-direct"><span className="route-badge">Route A</span><h3>NEET at or above the 50th percentile</h3><p>Apply directly with your NEET UG score. No separate entrance exam is needed; NEET is treated as valid for three years.</p><ul><li><BadgeCheck size={16} aria-hidden="true" />Apply with your NEET scorecard and admit card</li><li><BadgeCheck size={16} aria-hidden="true" />Class 12 with at least 50% in PCB</li></ul></article>
        <article><span className="route-badge">Route B</span><h3>NEET below the 50th percentile</h3><p>Sit and qualify the MEC’s MECEE-BL entrance examination, then apply to your preferred colleges through MEC.</p><ul><li><GraduationCap size={16} aria-hidden="true" />JNEX helps with registration and exam preparation</li></ul></article>
      </div>
    </div></section>

    <section id="colleges" className="bg-white"><div className="content-wrap">
      <p className="eyebrow">COLLEGE FEES & SEATS</p><h2>Compare {nepalTotals.colleges} Nepal medical colleges.</h2>
      <p className="section-copy">Tuition packages as quoted by each college for Indian (SAARC) students, with year-wise instalments, international seats and hostel costs. Filter by university or search by college or city.</p>
      <div className="directory-tools nepal-tools">
        <label className="state-search"><Search size={18} aria-hidden="true" /><span className="sr-only">Search Nepal medical colleges</span><input type="search" placeholder="Search colleges or cities" value={query} onChange={event => setQuery(event.target.value)} /></label>
        <div className="tag-filter" role="group" aria-label="Filter by university">{['', ...affiliations].map(value => <button type="button" key={value || 'all'} aria-pressed={affiliation === value} onClick={() => setAffiliation(value)}>{value || 'All colleges'}</button>)}</div>
        <label className="region-select"><span className="sr-only">Sort colleges</span><select value={sort} onChange={event => setSort(event.target.value)}>{sorts.map(([value, label]) => <option key={value} value={value}>Sort: {label}</option>)}</select></label>
      </div>
      <p className="result-count" role="status">{colleges.length} {colleges.length === 1 ? 'college' : 'colleges'}{affiliation ? ` · ${affiliation}` : ''}</p>
      {colleges.length ? <div className="nepal-college-grid">{colleges.map(college => <CollegeCard college={college} key={college.slug} />)}</div>
        : <div className="empty-data"><h3>No matching colleges</h3><p>Try another name or city.</p><button type="button" className="text-link" onClick={() => { setQuery(''); setAffiliation(''); }}>Clear filters</button></div>}
      <p className="data-note">Source: college fee structures for the {nepalSourceSession}, as supplied to JNEX. Packages exclude university exam fees, registration and affiliation charges unless stated, and applied to students who pre-booked before the MEC notice. Fees for the coming intake may change; USD amounts are converted at the rate on the date of payment.</p>
    </div></section>

    <section id="process" className="bg-slate-50"><div className="content-wrap nepal-process">
      <div>
        <p className="eyebrow">ADMISSION PROCESS</p><h2>Four steps from application to MEC.</h2>
        <ol className="nepal-steps">{nepalSteps.map(([title, copy], index) => <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
      </div>
      <aside className="nepal-documents">
        <FileText size={22} aria-hidden="true" /><h3>Documents to keep ready</h3>
        <ul>{nepalDocuments.map(item => <li key={item}><BadgeCheck size={16} aria-hidden="true" />{item}</li>)}</ul>
        <a className="primary-button" href="/#counselling">Check my Nepal eligibility <ArrowRight size={16} aria-hidden="true" /></a>
      </aside>
    </div></section>

    <section className="bg-white"><div className="content-wrap">
      <div className="reference-callout nepal-cautions">
        <h3><ShieldCheck size={22} aria-hidden="true" /> Before you pay a seat booking</h3>
        <ul>
          <li><TriangleAlert size={16} aria-hidden="true" /><span><strong>Pre-booking is usually non-refundable.</strong> It is refunded only if admission is not possible under MEC or college rules.</span></li>
          <li><TriangleAlert size={16} aria-hidden="true" /><span><strong>Special packages have a deadline.</strong> After the MEC notice, the regular MEC fee of about USD 75,000–80,000 applies.</span></li>
          <li><TriangleAlert size={16} aria-hidden="true" /><span><strong>Pay only into the college’s own account.</strong> Colleges do not accept responsibility for payments made to agents or other parties. We confirm the account with you first.</span></li>
        </ul>
      </div>
    </div></section>

    <section id="nepal-faqs" className="bg-white"><div className="content-wrap faq-layout">
      <div>
        <p className="eyebrow">MBBS IN NEPAL · FAQS</p>
        <h2>What parents ask us about Nepal.</h2>
        <p className="section-copy">Still deciding between Nepal, India and other destinations? Talk it through with a JNEX counsellor.</p>
        <a href={`${contactHref}?subject=${encodeURIComponent('MBBS in Nepal enquiry')}`} className="faq-contact inline-flex items-center gap-2 text-sm font-semibold text-primary mt-6"><MessageCircle size={18} /> Ask about Nepal <ArrowRight size={16} /></a>
      </div>
      <div className="faq-list">{nepalFaqs.map(([question, answer], index) => <details name="nepal-faq" className="faq-item" key={question}>
        <summary><span className="faq-number" aria-hidden="true">0{index + 1}</span><span>{question}</span><Plus className="faq-plus" size={18} aria-hidden="true" /></summary>
        <div className="faq-answer"><p>{answer}</p></div>
      </details>)}</div>
    </div></section>
  </>;
}
