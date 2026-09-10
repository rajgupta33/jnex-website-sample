import { ArrowRight } from 'lucide-react';

const resources = [
  {
    number: '01',
    title: 'Admission Profile Builder',
    linkText: 'Check options',
    href: '#counselling',
  },
  {
    number: '02',
    title: 'College Fees Overview',
    linkText: 'Explore fees',
    href: '#colleges',
  },
  {
    number: '03',
    title: 'Counselling Roadmap',
    linkText: 'See the steps',
    href: '#neet-counselling',
  },
  {
    number: '04',
    title: 'College Comparison',
    linkText: 'Compare colleges',
    href: '#comparison',
  },
];

const FreeResources = () => {
  return (
    <section id="tools" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <p className="text-xs font-bold tracking-widest text-accent uppercase mb-3">
            JNEX TOOLS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            Useful before you talk to anyone.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <a
              key={resource.number}
              href={resource.href}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="block text-3xl font-extrabold text-accent/15 mb-4 group-hover:text-accent/25 transition-colors">
                  {resource.number}
                </span>
                <h3 className="font-bold text-base text-primary">
                  {resource.title}
                </h3>
              </div>

              <div className="text-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all mt-6">
                <span>{resource.linkText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
