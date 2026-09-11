import { medical, broader } from '../data/portfolio';
import { guides } from '../data/admissions';
export function MedicalDiscovery() {
 return <section id="other-medical" className="bg-white"><div className="content-wrap"><p className="eyebrow">BEYOND MBBS</p><h2>Explore other medical admission pathways.</h2><p className="section-copy">JNEX also supports students exploring dental, AYUSH, nursing, pharmacy, physiotherapy, allied-health and paramedical programs.</p><div className="discovery-grid">{medical.map(([title, copy]) => <a className="discovery-card" key={title} href={'/medical-admissions/#' + title.toLowerCase().replaceAll(' ', '-')}><h3>{title}</h3><p>{copy}</p><span className="text-link">Explore {title} →</span></a>)}</div><a className="primary-button mt-8" href="/medical-admissions/">Explore Medical Admissions →</a></div></section>;
}
export function BroaderDiscovery() {
 return <section className="bg-white" id="broader-admissions"><div className="content-wrap"><h2>More ways JNEX can help you plan your next admission.</h2><div className="discovery-grid">{broader.map(([title, copy, url]) => <a className="discovery-card" href={url} key={title}><h3>{title}</h3><p>{copy}</p><span className="text-link">Explore {title} →</span></a>)}</div></div></section>;
}
export function Guides() {
 const published = guides.filter(g => g.published && g.updated_at && g.official_sources?.length);
 return <section id="guides" className="bg-slate-50"><div className="content-wrap"><p className="eyebrow">ADMISSION GUIDES</p><h2>What students are checking right now.</h2><div className="discovery-grid">{published.length ? published.map(g => <a className="discovery-card" href={g.url} key={g.slug}><h3>{g.title}</h3><p>{g.excerpt}</p><small>Updated: {g.updated_at}</small></a>) : [['State-wise counselling', 'Start with your state and understand which routes need closer review.', '/mbbs-admission/#states'], ['Private vs Deemed MBBS', 'Compare the counselling route, eligibility and complete cost.', '/mbbs-admission/#admission-routes'], ['MBBS fees and total cost', 'Organise tuition, living costs and additional charges before a decision.', '/tools/mbbs-cost-calculator/']].map(([title, copy, url]) => <a className="discovery-card" key={title} href={url}><h3>{title}</h3><p>{copy}</p><span className="text-link">Explore the guide →</span></a>)}</div></div></section>;
}
