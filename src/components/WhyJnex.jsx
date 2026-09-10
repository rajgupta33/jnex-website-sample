const points = [
  {
    title: 'RANK',
    description: 'Previous counselling trends',
  },
  {
    title: 'COST',
    description: 'Realistic fee estimates',
  },
  {
    title: 'FIT',
    description: 'Profile-based college options',
  },
  {
    title: 'STRATEGY',
    description: 'Round-wise counselling guidance',
  },
];

const WhyJnex = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
            A BETTER WAY TO CHOOSE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary max-w-3xl leading-tight">
            Admission decisions should be based on data — not promises.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {points.map((point) => (
            <div key={point.title} className="border-t-2 border-primary pt-6">
              <h3 className="text-lg font-bold text-primary mb-2 tracking-wide">
                {point.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-lg md:text-xl font-semibold text-primary mt-12 md:mt-16 max-w-2xl">
          We help you understand your options before you make a decision.
        </p>
      </div>
    </section>
  );
};

export default WhyJnex;
