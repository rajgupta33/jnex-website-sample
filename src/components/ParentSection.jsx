import { ArrowRight } from 'lucide-react';

const ParentSection = () => {
  return (
    <section id="parents" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Replace the illustrative photo after client approval. */}
          <div className="w-full lg:w-1/2">
            <div className="parent-planning-card rounded-2xl p-8 text-white"><p className="text-xs tracking-widest text-amber-200 mb-6">A DECISION YOU MAKE TOGETHER</p><h3 className="text-3xl font-bold mb-6">Before you commit.</h3>{[['01', 'Complete cost', 'Tuition, hostel, living costs and other disclosed charges.'], ['02', 'Eligible route', 'Domicile, category and the current counselling rules.'], ['03', 'Your next step', 'Compare the shortlist and review the joining decision.']].map(([number, title, copy]) => <div key={number} className="flex gap-4 border-t border-white/15 py-5"><span className="text-amber-200">{number}</span><div><h4 className="font-bold">{title}</h4><p className="text-sm text-slate-300 mt-1">{copy}</p></div></div>)}</div>
          </div>

          {/* Right side: Reassuring, clear guidance */}
          <div className="w-full lg:w-1/2">
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              FOR PARENTS
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight mt-3">
              Understand the complete decision before paying a fee.
            </h2>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              Compare total cost, counselling route, eligibility and realistic MBBS options with a JNEX counsellor before you commit.
            </p>
            <div>
              <a
                href="mailto:info@jnexeducation.com?subject=Parent%20and%20student%20counselling"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-light text-white font-bold py-4 px-8 rounded-xl mt-8 transition-colors"
              >
                Book Parent + Student Counselling &rarr;
              </a>
            </div>
            <div>
              <a
                href="/tools/mbbs-cost-calculator/"
                className="text-accent hover:text-accent-light font-semibold text-sm mt-4 flex items-center gap-1 transition-colors w-fit"
              >
                <span>Understand MBBS Costs</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentSection;
