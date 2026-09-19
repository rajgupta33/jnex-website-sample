import { CURRENT_YEAR, admissionRoutes, states, publishedState } from './data/admissions';
import { india, abroad, scholarships, services } from './data/portfolio';
import { contactHref } from './data/config';
import PanIndia from './components/PanIndia';
import ProfileConversion from './components/ProfileConversion';
import CollegeExplorer from './components/CollegeExplorer';
import CounsellingRoadmap from './components/CounsellingRoadmap';
import LiveCounsellingHub from './components/LiveCounsellingHub';
import MBBSAbroad from './components/MBBSAbroad';
import NepalMBBS from './components/NepalMBBS';
import { CostComparison, Checklist } from './components/DecisionTools';
import FAQ from './components/FAQ';
import ResourceLibrary from './components/ResourceLibrary';
import StudyAbroadExplorer from './components/UniversityDirectory';
import MedicalPathways from './components/MedicalPathways';
import EngineeringDirectory from './components/EngineeringDirectory';
import StateAdmissionContent, { MaharashtraFunding } from './components/StateAdmissionContent';
import { stateGuides, destinations } from './data/addition-content';
import { StateShape, Flag, TopicIcon } from './components/Visuals';
import { Stethoscope, ClipboardCheck, Globe, ArrowRight } from 'lucide-react';

export const pages = {
 '/': ['MBBS Admission & NEET Counselling ' + CURRENT_YEAR + ' | JNEX Education', 'Get MBBS admission guidance across India based on NEET rank, domicile, category and budget. Compare colleges, fees, cutoffs and counselling routes.'],
 '/mbbs-admission/': ['MBBS Admission in India ' + CURRENT_YEAR + ' | Counselling, Colleges & Fees | JNEX', 'Explore MBBS admission in India through NEET counselling. Compare state-wise options, Government, Private and Deemed colleges, fees, cutoffs and admission routes with JNEX.', `MBBS Admission in India ${CURRENT_YEAR}: State-wise Counselling, Colleges & Options`],
 '/medical-admissions/': ['Medical Admissions | JNEX Education', 'Explore MBBS, dental, AYUSH, nursing, physiotherapy, pharmacy and allied-health admission guidance.', 'Medical Admissions'],
 '/india-admissions/': ['India Admissions | JNEX Education', 'Explore engineering, IT, management, undergraduate, postgraduate and professional course guidance with JNEX.', 'Plan your next admission in India.'],
 '/india-admissions/engineering/': ['Engineering College Directory in India | JNEX Education', 'Explore engineering institution references across India, Karnataka, Maharashtra and Tamil Nadu with locations and supplied affiliation details.', 'Explore engineering institutions in India.'],
 '/resources/': ['Admission Guides & Resources | JNEX Education', 'Explore JNEX medical, allied health, engineering and international medical study guides with labelled source notes and original downloads.', 'A clearer starting point for your admission plans.'],
 '/study-abroad/': ['Study Abroad | JNEX Education', 'Explore international undergraduate, postgraduate, business, technology and healthcare study pathways.', 'Find your path to studying abroad.'],
 '/scholarships/': ['Scholarships & Funding | JNEX Education', 'Explore university, merit, government and program-specific funding opportunities.', 'Scholarships & Funding'],
 '/services/': ['Admission & Counselling Services | JNEX Education', 'Explore profile analysis, college selection, application, documentation and admission support.', 'Support for your next admission decision.'],
 '/neet-ug-counselling/': [`NEET UG Counselling ${CURRENT_YEAR} | JNEX Education`, 'Plan your NEET counselling with profile analysis, college mapping, choice strategy and joining support.', 'From NEET result to college joining.'],
 '/medical-colleges/': ['Medical Colleges in India | JNEX Education', 'Explore medical college options by state and management type with verified data when available.', 'Explore medical colleges in India.'],
 '/neet-counselling-tracker/': [`NEET Counselling Tracker ${CURRENT_YEAR} | JNEX Education`, 'Follow verified counselling notices and official sources for NEET admission planning.', `NEET Counselling Tracker ${CURRENT_YEAR}`],
 '/compare-medical-colleges/': ['Compare Medical Colleges | JNEX Education', 'Compare your college cost estimates and prepare questions on fees, cutoffs, seats and counselling routes.', 'Compare your medical college options.'],
 '/tools/neet-college-predictor/': ['NEET College Profile & Pathway Tool | JNEX Education', 'Build your NEET profile to explore state and all-India admission pathways before requesting a shortlist.', 'Start with your NEET profile.'],
 '/tools/mbbs-cost-calculator/': ['MBBS Cost Calculator | JNEX Education', 'Estimate tuition, hostel, living and other MBBS costs using your own institution fee information.', 'Plan the complete cost of MBBS.'],
 '/tools/counselling-checklist/': ['Counselling Checklist | JNEX Education', 'Organise documents and choice planning before NEET counselling.', 'Get ready for counselling.'],
 '/mbbs-abroad/': ['MBBS Abroad Guidance | JNEX Education', 'Compare destinations, eligibility, costs and licensing considerations before choosing MBBS abroad.', 'Considering MBBS Abroad?'],
 '/mbbs-abroad/nepal/': ['MBBS in Nepal: College Fees, Seats & Admission | JNEX Education', 'Compare 20 Nepal medical colleges for Indian students: tuition packages, year-wise instalments, international seats, hostel costs, NEET eligibility and the MEC admission process.', 'MBBS in Nepal'],
 '/private-mbbs-admission/': ['Private MBBS Admission | JNEX Education', admissionRoutes[3][1], 'Private MBBS Admission'],
 '/deemed-university-mbbs/': ['Deemed University MBBS | JNEX Education', admissionRoutes[4][1], 'Deemed University MBBS Admission'],
 '/nri-quota-mbbs/': ['NRI Quota MBBS Guidance | JNEX Education', admissionRoutes[5][1], 'NRI / Other Applicable Quotas'],
 '/privacy-policy/': ['Privacy & Admission Enquiries | JNEX Education', 'How the admission profile and enquiry form handle your information.', 'Privacy & Admission Enquiries'],
};
for (const state of stateGuides) pages[`/mbbs-admission/${state.slug}/`] = [`MBBS Planning in ${state.name} | Colleges & Fee References | JNEX`, state.intro, `MBBS admission planning in ${state.name}.`];
for (const state of states.filter(publishedState)) pages[`/mbbs-admission/${state.slug}/`] = [state.seo_title, state.meta_description, state.h1];
const pageIntroImages = {
 '/mbbs-admission/': ['/images/page-intros/mbbs-admission.webp', false],
 '/medical-admissions/': ['/images/page-intros/medical-admissions.webp', false],
 '/india-admissions/': ['/images/page-intros/india-admissions.webp', false],
 '/india-admissions/engineering/': ['/images/page-intros/engineering-directory.webp', false],
 '/resources/': ['/images/page-intros/resources.webp', false],
 '/study-abroad/': ['/images/page-intros/study-abroad.webp', false],
 '/scholarships/': ['/images/page-intros/scholarships.webp', false],
 '/services/': ['/images/page-intros/services.webp', false],
 '/neet-ug-counselling/': ['/images/page-intros/neet-ug-counselling.webp', false],
 '/medical-colleges/': ['/images/page-intros/medical-colleges.webp', false],
 '/neet-counselling-tracker/': ['/images/page-intros/neet-counselling-tracker.webp', false],
 '/compare-medical-colleges/': ['/images/page-intros/compare-medical-colleges.webp', false],
 '/tools/neet-college-predictor/': ['/images/page-intros/neet-college-predictor.webp', false],
 '/tools/mbbs-cost-calculator/': ['/images/page-intros/mbbs-cost-calculator.webp', false],
 '/tools/counselling-checklist/': ['/images/page-intros/counselling-checklist.webp', false],
 '/mbbs-abroad/': ['/images/page-intros/mbbs-abroad.webp', false],
 '/mbbs-abroad/nepal/': ['/images/page-intros/mbbs-abroad.webp', false],
 '/private-mbbs-admission/': ['/images/page-intros/private-mbbs-admission.webp', false],
 '/deemed-university-mbbs/': ['/images/page-intros/deemed-university-mbbs.webp', false],
 '/nri-quota-mbbs/': ['/images/page-intros/nri-quota-mbbs.webp', false],
 '/privacy-policy/': ['/images/page-intros/privacy-policy.webp', true],
};
const stateIntroImages = Object.fromEntries(stateGuides.map(state => [state.slug, [`/images/page-intros/state-${state.slug}.webp`, true]]));
function introImage(path, stateSlug) {
 if (stateSlug && stateIntroImages[stateSlug]) return stateIntroImages[stateSlug];
 return pageIntroImages[path] || ['/images/page-intros/mbbs-admission.webp', false];
}
const studyAbroadFlags = ['gb', 'us', 'ca', 'au', 'de', 'ie', 'nz', 'fr'];
export function PageIntro({ path }) {
 const page = pages[path];
 const state = stateGuides.find(state => path === `/mbbs-admission/${state.slug}/`);
 const publishedStatePage = states.find(s => path === `/mbbs-admission/${s.slug}/`);
 const stateName = state?.name || publishedStatePage?.name;
 const mbbsIntent = /mbbs|neet|medical-colleges|compare-medical/.test(path);
 const primaryHref = state ? `/#counselling?state=${encodeURIComponent(state.name)}` : mbbsIntent ? '/#counselling' : `${contactHref}?subject=${encodeURIComponent((page?.[2] || 'Admission') + ' enquiry')}`;
 const [image, tinted] = introImage(path, state?.slug || publishedStatePage?.slug);
 const flags = path === '/study-abroad/' ? studyAbroadFlags : path === '/mbbs-abroad/' ? destinations.map(destination => destination.code.toLowerCase()).slice(0, 8) : null;
 const nepal = path === '/mbbs-abroad/nepal/';
 const visual = nepal ? <div className="intro-visual intro-nepal" aria-hidden="true"><img src="/images/flags/np.svg" alt="" width="120" height="146" /><span>Nepal</span></div> : stateName ? <div className="intro-visual intro-state" aria-hidden="true"><StateShape name={stateName} /><span>{stateName}</span></div>
  : flags ? <div className="intro-visual intro-flags" aria-hidden="true">{flags.map(code => <Flag key={code} code={code} className="intro-flag" />)}</div> : null;
 return <section className={`page-intro${visual ? ' has-visual' : ''}`}><div className="page-intro-media" aria-hidden="true"><img className={tinted ? 'is-tinted' : ''} src={image} alt="" decoding="async" /></div><div className="content-wrap page-intro-layout"><div className="page-intro-copy"><nav aria-label="Breadcrumb" className="breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span>{state && <><a href="/mbbs-admission/">MBBS India</a><span aria-hidden="true">/</span></>}{nepal && <><a href="/mbbs-abroad/">MBBS Abroad</a><span aria-hidden="true">/</span></>}<span>{state?.name || page?.[2] || 'Page not found'}</span></nav><p className="eyebrow">JNEX EDUCATION</p><h1>{page?.[2] || 'Page not found'}</h1><p>{path === '/mbbs-admission/' ? 'Understand your MBBS admission pathways across India using your NEET score or AIR, domicile, category, budget and preferences. Compare state counselling, All India counselling, Government, Private and Deemed University options with clear next steps.' : page?.[1] || 'This page is not published. Explore MBBS admissions in India or return to the homepage.'}</p><div className="section-actions"><a href={primaryHref} className="primary-button">{mbbsIntent ? 'Check My MBBS Options' : 'Discuss My Admission Options'} →</a><a className="text-link" href={nepal ? '#colleges' : mbbsIntent ? '/mbbs-admission/#states' : '/resources/'}>{nepal ? 'Compare college fees' : mbbsIntent ? 'Explore States' : 'Explore Guides & Resources'} →</a></div></div>{visual}</div></section>;
}
function Portfolio({ items }) { return <section className="bg-white section-decor"><div className="content-wrap"><div className="discovery-grid">{items.map(([title, copy]) => <article id={title === 'Destinations' ? 'destination-overview' : title.toLowerCase().replaceAll(' ', '-')} className="discovery-card icon-card" key={title}><TopicIcon title={title} /><h2 className="portfolio-title">{title}</h2>{title === 'Destinations' ? <div className="flag-row">{copy.split(' • ').map(country => <span key={country}><Flag country={country} />{country}</span>)}</div> : <p>{copy}</p>}<a className="text-link" href={`${contactHref}?subject=${encodeURIComponent(title + ' admission enquiry')}`}>Discuss {title} →</a></article>)}</div></div></section>; }
export function AdmissionRoutes() { return <section id="admission-routes" className="bg-white"><div className="content-wrap"><h2>Understand MBBS admission routes.</h2><p className="section-copy">MBBS admission in India is not a single counselling process. The route available to a student can depend on NEET eligibility and rank, domicile, category, the type of institution, the counselling authority and the rules for the current academic year. JNEX Education helps students and parents compare these routes before making a preference or payment decision.</p><div className="discovery-grid">{admissionRoutes.map(([title, copy]) => <article className="discovery-card icon-card" key={title}><TopicIcon title={title} /><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="section-actions"><a href="/private-mbbs-admission/" className="text-link">Private MBBS →</a><a href="/deemed-university-mbbs/" className="text-link">Deemed Universities →</a><a href="/nri-quota-mbbs/" className="text-link">NRI Quota →</a></div></div></section>; }
function QuickLinks({ links }) {
 return <section className="bg-white quick-links-section"><div className="content-wrap"><div className="quick-links">{links.map(([Icon, title, copy, href]) => <a className="quick-link" href={href} key={title}><span className="icon-badge" aria-hidden="true"><Icon strokeWidth={1.7} /></span><span><strong>{title}</strong><small>{copy}</small></span><ArrowRight size={18} aria-hidden="true" /></a>)}</div></div></section>;
}
export default function PageContent({ path }) {
 if (path === '/mbbs-admission/') return <><PanIndia full /><AdmissionRoutes /><ProfileConversion /><CollegeExplorer /><CostComparison /><LiveCounsellingHub /><Checklist /><FAQ /></>;
 if (path === '/medical-admissions/') return <><QuickLinks links={[[Stethoscope, 'MBBS in India', 'State and All India counselling routes', '/mbbs-admission/'], [ClipboardCheck, 'NEET Counselling', 'From result to college joining', '/neet-ug-counselling/'], [Globe, 'MBBS Abroad', 'Compare 14 medical destinations', '/mbbs-abroad/']]} /><MedicalPathways /></>;
 if (path === '/india-admissions/') return <><section className="bg-slate-50"><div className="content-wrap split-feature"><div><p className="eyebrow">ENGINEERING DIRECTORY</p><h2>Start with institutions, then compare your course.</h2><p className="section-copy">Explore the supplied national, Karnataka, Maharashtra and Tamil Nadu engineering directories. Compare locations and institution references before discussing branches, entry routes and complete costs.</p><ul className="state-chips">{['Karnataka', 'Maharashtra', 'Tamil Nadu'].map(name => <li key={name}><StateShape name={name} className="state-card-shape" />{name}</li>)}<li><Globe size={20} strokeWidth={1.6} aria-hidden="true" />All India</li></ul><a className="primary-button mt-6" href="/india-admissions/engineering/">Explore engineering institutions →</a></div><figure className="split-photo"><img src="/images/page-intros/india-directory-feature.webp" alt="" loading="lazy" width="1536" height="1024" /><figcaption>Illustrative campus image</figcaption></figure></div></section><Portfolio items={india} /></>;
 if (path === '/india-admissions/engineering/') return <EngineeringDirectory />;
 if (path === '/resources/') return <ResourceLibrary />;
 if (path === '/study-abroad/') return <><StudyAbroadExplorer /><Portfolio items={abroad} /><section className="bg-slate-50"><div className="content-wrap"><h2>Considering medical study overseas?</h2><p className="section-copy">Explore a separate directory of 14 medical destinations, with typical course structures, supplied budget references and licensing questions.</p><a className="primary-button mt-6" href="/mbbs-abroad/">Explore medical study abroad →</a></div></section></>;
 if (path === '/scholarships/') return <><section className="bg-white"><div className="content-wrap"><h2>Explore funding opportunities.</h2><p className="section-copy">Compare eligibility, award coverage, application requirements and deadlines with the relevant scholarship provider before applying.</p><div className="funding-tags">{scholarships.map(x => <a href={`${contactHref}?subject=${encodeURIComponent(x + ' scholarship enquiry')}`} key={x}><TopicIcon title={x} className="tag-icon" size={16} />{x}</a>)}</div></div></section><MaharashtraFunding /></>;
 if (path === '/services/') return <section className="bg-white section-decor"><div className="content-wrap"><p className="eyebrow">WHAT WE HELP WITH</p><h2>Admission support, end to end.</h2><div className="service-grid">{services.map(x => <a className="service-card" href={`${contactHref}?subject=${encodeURIComponent(x + ' enquiry')}`} key={x}><TopicIcon title={x} /><span>{x}</span><ArrowRight size={16} aria-hidden="true" /></a>)}</div><CounsellingRoadmap /></div></section>;
 if (path === '/neet-ug-counselling/') return <><CounsellingRoadmap /><AdmissionRoutes /><Checklist /><LiveCounsellingHub /></>;
 if (path === '/medical-colleges/') return <CollegeExplorer full />;
 if (path === '/neet-counselling-tracker/') return <><LiveCounsellingHub /><PanIndia editorial /></>;
 if (path === '/compare-medical-colleges/') return <CostComparison />;
 if (path === '/tools/neet-college-predictor/') return <ProfileConversion />;
 if (path === '/tools/mbbs-cost-calculator/') return <CostComparison single />;
 if (path === '/tools/counselling-checklist/') return <Checklist />;
 if (path === '/mbbs-abroad/') return <MBBSAbroad full />;
 if (path === '/mbbs-abroad/nepal/') return <NepalMBBS />;
 if (['/private-mbbs-admission/', '/deemed-university-mbbs/', '/nri-quota-mbbs/'].includes(path)) return <><AdmissionRoutes /><CollegeExplorer full initialManagement={path === '/private-mbbs-admission/' ? 'Private' : path === '/deemed-university-mbbs/' ? 'Deemed' : ''} /><ProfileConversion /></>;
 if (path === '/privacy-policy/') return <section className="bg-white"><div className="content-wrap prose-copy"><h2>Your profile and contact details</h2><p>The profile builder uses your entries to display an admission planning summary in this page. Profile entries are not saved in browser storage.</p><p>When you request a shortlist by email, the site prepares a draft containing the information you entered. The email is sent only when you send it from your email app. If an online enquiry service is enabled, the form sends your contact details, profile and enquiry context to that service when you submit.</p><p>Your details are used to respond to your admission enquiry and personalise your options. A JNEX counsellor may contact you by phone or WhatsApp regarding your enquiry.</p><h2>Usage and external services</h2><p>The site records interaction event names for measurement. Personal contact details, NEET rank, category and budget are not included in these analytics events. External email, WhatsApp, fonts and linked authority websites operate under their own privacy terms.</p><p>For questions about your information or to request correction or deletion, <a href={contactHref}>contact JNEX by email</a>.</p></div></section>;
 const state = states.find(s => `/mbbs-admission/${s.slug}/` === path && publishedState(s));
 const referenceState = stateGuides.find(s => `/mbbs-admission/${s.slug}/` === path);
 if (referenceState && !state) return <StateAdmissionContent state={referenceState} />;
 if (state) return <><section className="bg-white"><div className="content-wrap prose-copy"><p>{state.intro}</p><p>Last reviewed: {state.last_reviewed}</p><a href={state.authority_url}>{state.counselling_authority} ↗</a>{state.sections.map(section => <article key={section.heading}><h2>{section.heading}</h2><p>{section.content}</p></article>)}{state.faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section><ProfileConversion initialProfile={{ domicile: state.name }} /></>;
 return null;
}
