import { CountUp } from './HomepageMotion';

const metrics = [
  {
    value: '4.9/5',
    label: 'Student Rating',
  },
  {
    value: '5,000+',
    label: 'Students Guided',
  },
  {
    value: '250+',
    label: 'Medical Colleges Tracked',
  },
  {
    value: '20+',
    label: 'States Covered',
  },
];

const TrustStrip = () => {
  return (
    <section id="trust" className="bg-white border-y border-gray-100 py-6 md:py-8">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">
                <CountUp value={metric.value} />
              </p>
              <p className="text-sm text-gray-500 font-medium mt-1">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
