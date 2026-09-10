const steps = [
  {
    number: '01',
    title: 'Profile Analysis',
    description: 'Rank, state, category and budget.',
  },
  {
    number: '02',
    title: 'College Mapping',
    description: 'Identify realistic options.',
  },
  {
    number: '03',
    title: 'Choice Strategy',
    description: 'Build round-wise preferences.',
  },
  {
    number: '04',
    title: 'Counselling Support',
    description: 'Registration and documentation.',
  },
  {
    number: '05',
    title: 'Allotment',
    description: 'Evaluate the allotted seat.',
  },
  {
    number: '06',
    title: 'Joining',
    description: 'Admission support until completion.',
  },
];

const CounsellingRoadmap = () => {
  return (
    <section id="neet-counselling" className="py-20 md:py-28 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
            HOW JNEX WORKS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight text-balance max-w-3xl">
            From NEET result to college joining.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-5 md:p-6 border border-slate-200/80 hover:border-slate-300 transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl font-extrabold text-accent/20 tracking-tight select-none block">
                  {step.number}
                </span>
                <h3 className="font-bold text-base text-primary mt-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounsellingRoadmap;
