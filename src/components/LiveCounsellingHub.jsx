import { CURRENT_YEAR, updates } from '../data/admissions';
import { track } from '../data/config';
export default function LiveCounsellingHub() {
  const live = updates.filter(u => u.current_year === CURRENT_YEAR && u.official_url && u.last_updated).sort((a,b) => new Date(b.last_updated) - new Date(a.last_updated)).slice(0,4);
  return <section id="live-updates" className="bg-white"><div className="content-wrap"><p className="eyebrow">NEET {CURRENT_YEAR} COUNSELLING</p><h2>Don't miss a counselling deadline.</h2>
  {live.length ? <div className="discovery-grid">{live.map(u => <article className="discovery-card" key={u.official_url + u.title}><p className="eyebrow">{u.authority}</p><h3>{u.title}</h3><p>{u.summary}</p><p>{u.deadline_datetime && `Deadline: ${u.deadline_datetime}`}</p><p>Last updated: {u.last_updated}</p><a href={u.official_url} onClick={() => track('counselling_update_click')}>Official update ↗</a></article>)}</div> : <div className="empty-data"><h3>No new update published</h3><p>Check the relevant official counselling authority for current schedules, notices and seat matrices.</p><a className="text-link" href="https://mcc.nic.in/ug-medical-counselling/" onClick={() => track('counselling_update_click')}>MCC / All India Counselling ↗</a></div>}
  <div className="section-actions"><a href="/neet-counselling-tracker/" className="primary-button">View Counselling Tracker →</a><a href="/mbbs-admission/#states" className="text-link">Explore My State →</a></div></div></section>;
}
