import { ArrowRight } from 'lucide-react';
import { alliedCourses, careerGroups, careerDurationNotes } from '../data/addition-content';
import { contactHref } from '../data/config';

export default function MedicalPathways() {
  return <><section id="career-pathways" className="bg-white"><div className="content-wrap">
    <p className="eyebrow">AFTER CLASS 12</p><h2>Find a healthcare path that fits your interests.</h2>
    <p className="section-copy">Explore patient care, diagnostics, rehabilitation, pharmacy, veterinary science and research. Compare the qualification, clinical training and registration requirements before choosing a course.</p>
    <div className="discovery-grid">{careerGroups.map(([title, programs, copy, href], index) => <article id={['bds', 'ayush', 'veterinary', 'nursing', 'rehabilitation', 'pharmacy', 'paramedical', 'research'][index]} className="discovery-card" key={title}>
      <span className="reference-badge">PATH {String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p className="course-programs">{programs}</p><p>{copy}</p>
      <details className="reference-source"><summary>Duration references</summary><p>Supplied Class 12 poster: {careerDurationNotes[index]} These are reference durations, not verified current admission requirements.</p></details>
      <a className="text-link" href={index === 0 || index === 4 ? href : `${contactHref}?subject=${encodeURIComponent(title + ' admission guidance')}`}>{index === 0 || index === 4 ? 'Explore these pathways' : `Discuss ${title}`} <ArrowRight size={15} aria-hidden="true" /></a>
    </article>)}</div>
    <p className="data-note">Eligibility, course length and entrance requirements vary by institution and intake. Some allied courses accept PCM or other streams; do not assume PCB is compulsory for every program.</p>
  </div></section><section id="allied-health" className="bg-slate-50"><div className="content-wrap">
    <p className="eyebrow">ALLIED HEALTH SCIENCES</p><h2>Nine ways to build a career in healthcare.</h2>
    <p className="section-copy">Start with what you enjoy: working with patients, imaging, laboratory investigation, cardiac care, surgery support or rehabilitation. These profiles summarise the supplied course guide.</p>
    <div className="allied-course-grid">{alliedCourses.map((course, index) => <article id={course.name === 'Physiotherapy' ? 'physiotherapy' : `${course.name.toLowerCase().replaceAll(' ', '-')}-course`} className="allied-course-card" key={course.name}>
      <span className="course-index">{String(index + 1).padStart(2, '0')}</span><div><h3>{course.name}</h3><p className="course-qualification">{course.qualification}</p><p className="course-duration">{course.duration}</p><p className="course-entry">{course.entry}</p>
      <details><summary>Subjects, careers & work settings</summary><div className="course-detail"><h4>What you’ll study</h4><ul>{course.subjects.map(subject => <li key={subject}>{subject}</li>)}</ul><h4>Career pathways</h4><ul>{course.careers.map(career => <li key={career}>{career}</li>)}</ul><h4>Where you could work</h4><p>{course.workplaces}</p><a className="text-link" href={`${contactHref}?subject=${encodeURIComponent(course.name + ' admission enquiry')}`}>Discuss this course <ArrowRight size={14} aria-hidden="true" /></a></div></details></div>
    </article>)}</div>
    <div className="section-actions"><a className="primary-button" href="/resources/#allied-health">Open the allied health guide <ArrowRight size={16} aria-hidden="true" /></a><a className="text-link" href="/resources/">Browse all resources</a></div>
  </div></section></>;
}
