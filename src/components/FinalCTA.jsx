import { ArrowRight } from 'lucide-react';
import { contactHref } from '../data/config';
import { ContactNumbers } from './ReferenceUI';

const FinalCTA = ({ path = '/' }) => {
  const mbbsIntent = path === '/' || /mbbs|neet|medical-colleges|compare-medical/.test(path);
  return (
    <section id="contact" className="py-20 md:py-28 bg-primary text-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
          YOUR NEXT DECISION
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight max-w-3xl mx-auto">
          {mbbsIntent ? 'Know your options before the next counselling round.' : 'Plan your next admission with a clearer shortlist.'}
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          {mbbsIntent ? 'Share your NEET profile and get a personalised MBBS admission roadmap across the states and counselling routes relevant to you.' : 'Discuss your course interests, academic profile, preferred locations and budget with a JNEX counsellor.'}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href={mbbsIntent ? '/#counselling' : contactHref} className="w-full sm:w-auto bg-accent hover:bg-accent-light text-white font-bold text-lg py-4 px-8 rounded-xl transition-colors flex items-center justify-center gap-2">
            {mbbsIntent ? 'Check My College Options' : 'Discuss My Course Options'} <ArrowRight size={20} />
          </a>
          <a href={contactHref} className="w-full sm:w-auto bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-bold text-lg py-4 px-8 rounded-xl transition-colors">
            Talk to a JNEX Counsellor
          </a>
        </div>
        <ContactNumbers dark />
        <p className="text-sm font-medium text-gray-400 mt-8">
          {mbbsIntent ? 'Profile analysis · State-wise options · College shortlist · Counselling guidance' : 'Course selection · College shortlist · Application planning · Admission guidance'}
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
