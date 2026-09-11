import { Plus, MessageCircle, ArrowRight } from 'lucide-react';

import { faq as questions } from '../data/admissions';

export default function FAQ() {
  return <section id="faqs" className="bg-white">
    <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 faq-layout">
      <div>
        <p className="text-xs font-bold tracking-widest text-accent uppercase mb-3">A LITTLE MORE CLARITY</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight mb-5">Common questions about MBBS admissions in India.</h2>
        <p className="text-base text-slate-600 leading-relaxed mb-7">A few things students and parents often want to know before taking the next step.</p>
        <a href="mailto:info@jnexeducation.com" className="faq-contact inline-flex items-center gap-2 text-sm font-semibold text-primary"><MessageCircle size={18} /> Ask your question <ArrowRight size={16} /></a>
      </div>
      <div className="faq-list">
        {questions.map(([question, answer], index) => <details name="homepage-faq" className="faq-item" key={question}>
          <summary><span className="faq-number" aria-hidden="true">0{index + 1}</span><span>{question}</span><Plus className="faq-plus" size={18} aria-hidden="true" /></summary>
          <div className="faq-answer"><p>{answer}</p>{index === 5 && <a href="#live-updates">Open counselling updates <ArrowRight size={14} /></a>}</div>
        </details>)}
      </div>
    </div>
  </section>;
}
