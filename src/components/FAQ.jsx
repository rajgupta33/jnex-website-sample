import { Plus, MessageCircle, ArrowRight } from 'lucide-react';

const questions = [
  ['Where should I start?', 'Start with the admission profile builder. Enter your NEET score or rank, domicile, category, budget and preferred pathway to organise your details before a counselling discussion.'],
  ['Can I explore both India and abroad?', 'Yes. The homepage includes India and abroad pathways, a college overview and an illustrative comparison. Use these to identify the questions you want to discuss with a counsellor.'],
  ['What information should I have ready?', 'Keep your score or rank, domicile state, category, approximate course budget and preferred locations handy. You can review your answers as you move through the profile builder.'],
  ['Can parents be part of the discussion?', 'The parent guidance section is designed to help families consider the course budget, college options and counselling route together. Use the contact link to ask about a joint discussion.'],
  ['Does the online profile guarantee an admission?', 'No. The current profile builder organises your answers into a summary; it does not issue an admission offer or predict a confirmed seat. College examples on this homepage are illustrative.'],
  ['Where can I check current counselling notices?', 'The counselling updates section links to the official MCC and Karnataka admission portals. Check the relevant official authority for the latest notices and schedules.'],
  ['How do I contact JNEX after building my profile?', 'Use the email contact link below or the contact details in the footer. The profile summary currently stays in your browser and is not automatically sent to the team.'],
];

export default function FAQ() {
  return <section id="faqs" className="bg-white">
    <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 faq-layout">
      <div>
        <p className="text-xs font-bold tracking-widest text-accent uppercase mb-3">A LITTLE MORE CLARITY</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight mb-5">Big decisions.<br />Clear answers.</h2>
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
