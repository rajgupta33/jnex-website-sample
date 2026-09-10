import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    flag: 'GE',
    name: 'Georgia',
    duration: '6 Years',
    tuition: 'From ₹4.5L/year',
    medium: 'English',
    href: '#counselling',
  },
  {
    flag: 'RU',
    name: 'Russia',
    duration: '6 Years',
    tuition: 'From ₹3.5L/year',
    medium: 'English',
    href: '#counselling',
  },
  {
    flag: 'KZ',
    name: 'Kazakhstan',
    duration: '5 Years',
    tuition: 'From ₹4L/year',
    medium: 'English',
    href: '#counselling',
  },
  {
    flag: 'UZ',
    name: 'Uzbekistan',
    duration: '6 Years',
    tuition: 'From ₹3L/year',
    medium: 'English',
    href: '#counselling',
  },
];

const MBBSAbroad = () => {
  return (
    <section id="abroad" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
            GLOBAL MEDICAL EDUCATION
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            Considering MBBS Abroad?
          </h2>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            Compare complete cost, duration and eligibility before choosing a destination.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="group flex flex-col justify-between bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all"
            >
              <div>
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-600 font-bold text-sm tracking-widest mb-4 select-none"
                  
                  aria-hidden="true"
                >
                  {destination.flag}
                </div>
                <h3 className="font-bold text-lg text-primary">
                  {destination.name}
                </h3>

                <div className="space-y-2.5 my-5 py-4 border-y border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 text-xs font-medium">Course Duration</span>
                    <span className="font-semibold text-primary">{destination.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 text-xs font-medium">Estimated Tuition</span>
                    <span className="font-semibold text-primary">{destination.tuition}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 text-xs font-medium">Medium</span>
                    <span className="font-semibold text-primary">{destination.medium}</span>
                  </div>
                </div>
              </div>

              <a
                href={destination.href}
                className="text-accent font-semibold text-sm inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all mt-2"
              >
                <span>Discuss {destination.name}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <a
            href="#counselling"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-sm"
          >
            <span>Discuss MBBS Abroad Options</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MBBSAbroad;
