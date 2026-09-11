import { CURRENT_YEAR, admissionRoutes, states, publishedState } from './data/admissions';
import { medical, india, abroad, scholarships, services } from './data/portfolio';
import { contactHref } from './data/config';
import PanIndia from './components/PanIndia';
import ProfileConversion from './components/ProfileConversion';
import CollegeExplorer from './components/CollegeExplorer';
import CounsellingRoadmap from './components/CounsellingRoadmap';
import LiveCounsellingHub from './components/LiveCounsellingHub';
import MBBSAbroad from './components/MBBSAbroad';
import { CostComparison, Checklist } from './components/DecisionTools';
import FAQ from './components/FAQ';

export const pages = {
 '/': ['MBBS Admission & NEET Counselling ' + CURRENT_YEAR + ' | JNEX Education', 'Get MBBS admission guidance across India based on NEET rank, domicile, category and budget. Compare colleges, fees, cutoffs and counselling routes.'],
 '/mbbs-admission/': ['MBBS Admission in India ' + CURRENT_YEAR + ' | Counselling, Colleges & Fees | JNEX', 'Explore MBBS admission in India through NEET counselling. Compare state-wise options, Government, Private and Deemed colleges, fees, cutoffs and admission routes with JNEX.', `MBBS Admission in India ${CURRENT_YEAR}: State-wise Counselling, Colleges & Options`],
 '/medical-admissions/': ['Medical Admissions | JNEX Education', 'Explore MBBS, dental, AYUSH, nursing, physiotherapy, pharmacy and allied-health admission guidance.', 'Medical Admissions'],
 '/india-admissions/': ['India Admissions | JNEX Education', 'Explore engineering, IT, management, undergraduate, postgraduate and professional course guidance with JNEX.', 'Plan your next admission in India.'],
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
 '/private-mbbs-admission/': ['Private MBBS Admission | JNEX Education', admissionRoutes[3][1], 'Private MBBS Admission'],
 '/deemed-university-mbbs/': ['Deemed University MBBS | JNEX Education', admissionRoutes[4][1], 'Deemed University MBBS Admission'],
 '/nri-quota-mbbs/': ['NRI Quota MBBS Guidance | JNEX Education', admissionRoutes[5][1], 'NRI / Other Applicable Quotas'],
 '/privacy-policy/': ['Privacy & Admission Enquiries | JNEX Education', 'How the admission profile and enquiry form handle your information.', 'Privacy & Admission Enquiries'],
};
for (const state of states.filter(publishedState)) pages[`/mbbs-admission/${state.slug}/`] = [state.seo_title, state.meta_description, state.h1];
export function PageIntro({ path }) {
 const page = pages[path];
 return <section className="page-intro"><div className="content-wrap"><nav aria-label="Breadcrumb" className="breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>{page?.[2] || 'Page not found'}</span></nav><p className="eyebrow">JNEX EDUCATION</p><h1>{page?.[2] || 'Page not found'}</h1><p>{path === '/mbbs-admission/' ? 'Understand your MBBS admission pathways across India using your NEET score or AIR, domicile, category, budget and preferences. Compare state counselling, All India counselling, Government, Private and Deemed University options with current data and clear next steps.' : page?.[1] || 'This page is not published. Explore MBBS admissions in India or return to the homepage.'}</p><div className="section-actions"><a href="/#counselling" className="primary-button">Check My MBBS Options →</a><a className="text-link" href="/mbbs-admission/#states">Explore My State →</a></div></div></section>;
}
function Portfolio({ items }) { return <section className="bg-white"><div className="content-wrap"><div className="discovery-grid">{items.map(([title, copy]) => <article id={title.toLowerCase().replaceAll(' ', '-')} className="discovery-card" key={title}><h2 className="portfolio-title">{title}</h2><p>{copy}</p><a className="text-link" href={`${contactHref}?subject=${encodeURIComponent(title + ' admission enquiry')}`}>Discuss {title} →</a></article>)}</div></div></section>; }
export function AdmissionRoutes() { return <section id="admission-routes" className="bg-white"><div className="content-wrap"><h2>Understand MBBS admission routes.</h2><p className="section-copy">MBBS admission in India is not a single counselling process. The route available to a student can depend on NEET eligibility and rank, domicile, category, the type of institution, the counselling authority and the rules for the current academic year. JNEX Education helps students and parents compare these routes before making a preference or payment decision.</p><div className="discovery-grid">{admissionRoutes.map(([title, copy]) => <article className="discovery-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="section-actions"><a href="/private-mbbs-admission/" className="text-link">Private MBBS →</a><a href="/deemed-university-mbbs/" className="text-link">Deemed Universities →</a><a href="/nri-quota-mbbs/" className="text-link">NRI Quota →</a></div></div></section>; }
export default function PageContent({ path }) {
 if (path === '/mbbs-admission/') return <><PanIndia full /><AdmissionRoutes /><ProfileConversion /><CollegeExplorer /><CostComparison /><LiveCounsellingHub /><Checklist /><FAQ /></>;
 if (path === '/medical-admissions/') return <><section className="bg-white"><div className="content-wrap"><div className="section-actions"><a href="/mbbs-admission/" className="primary-button">MBBS India →</a><a href="/neet-ug-counselling/" className="text-link">NEET Counselling →</a><a href="/mbbs-abroad/" className="text-link">MBBS Abroad →</a></div></div></section><Portfolio items={medical} /></>;
 if (path === '/india-admissions/') return <Portfolio items={india} />;
 if (path === '/study-abroad/') return <Portfolio items={abroad} />;
 if (path === '/scholarships/') return <section className="bg-white"><div className="content-wrap"><h2>Explore funding opportunities.</h2><p className="section-copy">Compare eligibility, award coverage, application requirements and deadlines with the relevant scholarship provider before applying.</p><div className="funding-tags">{scholarships.map(x => <a href={`${contactHref}?subject=${encodeURIComponent(x + ' scholarship enquiry')}`} key={x}>{x}</a>)}</div></div></section>;
 if (path === '/services/') return <section className="bg-white"><div className="content-wrap"><div className="funding-tags">{services.map(x => <a href={`${contactHref}?subject=${encodeURIComponent(x + ' enquiry')}`} key={x}>{x} →</a>)}</div><CounsellingRoadmap /></div></section>;
 if (path === '/neet-ug-counselling/') return <><CounsellingRoadmap /><AdmissionRoutes /><Checklist /><LiveCounsellingHub /></>;
 if (path === '/medical-colleges/') return <CollegeExplorer />;
 if (path === '/neet-counselling-tracker/') return <><LiveCounsellingHub /><PanIndia editorial /></>;
 if (path === '/compare-medical-colleges/') return <CostComparison />;
 if (path === '/tools/neet-college-predictor/') return <ProfileConversion />;
 if (path === '/tools/mbbs-cost-calculator/') return <CostComparison single />;
 if (path === '/tools/counselling-checklist/') return <Checklist />;
 if (path === '/mbbs-abroad/') return <MBBSAbroad />;
 if (['/private-mbbs-admission/', '/deemed-university-mbbs/', '/nri-quota-mbbs/'].includes(path)) return <><AdmissionRoutes /><CollegeExplorer /><ProfileConversion /></>;
 if (path === '/privacy-policy/') return <section className="bg-white"><div className="content-wrap prose-copy"><h2>Your profile and contact details</h2><p>The profile builder uses your entries to display an admission planning summary in this page. Profile entries are not saved in browser storage.</p><p>When you request a shortlist by email, the site prepares a draft containing the information you entered. The email is sent only when you send it from your email app. If an online enquiry service is enabled, the form sends your contact details, profile and enquiry context to that service when you submit.</p><p>Your details are used to respond to your admission enquiry and personalise your options. A JNEX counsellor may contact you by phone or WhatsApp regarding your enquiry.</p><h2>Usage and external services</h2><p>The site records interaction event names for measurement. Personal contact details, NEET rank, category and budget are not included in these analytics events. External email, WhatsApp, fonts and linked authority websites operate under their own privacy terms.</p><p>For questions about your information or to request correction or deletion, <a href={contactHref}>contact JNEX by email</a>.</p></div></section>;
 const state = states.find(s => `/mbbs-admission/${s.slug}/` === path && publishedState(s));
 if (state) return <><section className="bg-white"><div className="content-wrap prose-copy"><p>{state.intro}</p><p>Last reviewed: {state.last_reviewed}</p><a href={state.authority_url}>{state.counselling_authority} ↗</a>{state.sections.map(section => <article key={section.heading}><h2>{section.heading}</h2><p>{section.content}</p></article>)}{state.faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section><ProfileConversion initialProfile={{ domicile: state.name }} /></>;
 return null;
}
