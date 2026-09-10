import { ArrowRight } from 'lucide-react';

const ParentSection = () => {
  return (
    <section id="parents" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Replace the illustrative photo after client approval. */}
          <div className="w-full lg:w-1/2">
            <figure className="parent-photo-card">
              <img src="/images/counselling-family.png" alt="Illustrative AI scene of a student and her parents discussing college options with a counsellor" width="1536" height="1024" loading="lazy" decoding="async" />
              <figcaption>
                <p className="text-xs uppercase tracking-[.18em] text-amber-200 mb-3">A decision you make together</p>
                <p className="text-2xl sm:text-3xl text-white font-serif">Their ambition. <span className="text-amber-200 italic">Your peace of mind.</span></p>
                <span className="image-credit">AI-generated illustration / Preview imagery</span>
              </figcaption>
            </figure>
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
              Compare total cost, counselling route and realistic admission options with a Jnex counsellor.
            </p>
            <div>
              <a
                href="#counselling"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-light text-white font-bold py-4 px-8 rounded-xl mt-8 transition-colors"
              >
                Book Parent + Student Counselling &rarr;
              </a>
            </div>
            <div>
              <a
                href="#comparison"
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
