import { ArrowRight } from 'lucide-react';

const paths = [
  {
    title: 'MBBS IN INDIA',
    desc: 'Private • Deemed • Government • NRI',
    linkText: 'Explore India',
    href: '#colleges',
  },
  {
    title: 'NEET COUNSELLING',
    desc: 'AIQ • State • Choice Filling • Seat Strategy',
    linkText: 'Plan Counselling',
    href: '#counselling',
  },
  {
    title: 'MBBS ABROAD',
    desc: 'Compare countries, universities and complete costs.',
    linkText: 'Explore Abroad',
    href: '#abroad',
  },
  {
    title: 'PG MEDICAL',
    desc: 'MD/MS counselling and college guidance',
    linkText: 'Explore PG',
    href: 'mailto:info@jnexeducation.com?subject=PG%20medical%20counselling',
  },
];

const ChoosePath = () => {
  return (
    <section id="india" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
            START HERE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            What are you planning?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path) => (
            <a
              key={path.title}
              href={path.href}
              className="group flex flex-col justify-between p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
            >
              <div>
                <h3 className="font-bold text-lg text-primary mb-2.5">
                  {path.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {path.desc}
                </p>
              </div>
              <div className="text-accent font-semibold text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all mt-6">
                <span>{path.linkText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChoosePath;
