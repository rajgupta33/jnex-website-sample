import { ArrowRight } from 'lucide-react';

const counsellingUpdates = [
  { badge: 'MCC', eventName: 'All India Counselling', timing: 'Find notices, schedules and counselling information.', linkText: 'Visit MCC', href: 'https://mcc.nic.in/', lastUpdated: 'Medical Counselling Committee' },
  { badge: 'KARNATAKA', eventName: 'Karnataka Admissions', timing: 'Explore the state admission portal and notices.', linkText: 'Visit KEA', href: 'https://cetonline.karnataka.gov.in/kea/', lastUpdated: 'Karnataka Examinations Authority' },
  { badge: 'YOUR NEXT STEP', eventName: 'Plan Your Counselling', timing: 'Understand the steps from your profile to joining.', linkText: 'Explore the roadmap', href: '#neet-counselling', lastUpdated: 'JNEX counselling roadmap' },
];

const LiveCounsellingHub = () => {
  return (
    <section id="live-updates" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <p className="text-xs font-bold tracking-widest text-accent uppercase">
              NEET 2026
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            Don't miss a counselling deadline.
          </h2>
        </div>

        {/* 3 Update Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {counsellingUpdates.map((card) => (
            <div
              key={card.badge}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Title badge at top */}
                <span className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-primary">
                  {card.badge}
                </span>

                {/* Event name */}
                <h3 className="font-bold text-lg text-primary mt-4 mb-2">
                  {card.eventName}
                </h3>

                {/* Date or time */}
                <p className="text-sm text-gray-500 mb-6">
                  {card.timing}
                </p>

                {/* Link */}
                <a
                  href={card.href}
                  className="text-accent hover:text-accent-light font-semibold text-sm inline-flex items-center gap-1 group transition-colors"
                >
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Footer note on each card */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400">
                  {card.lastUpdated}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button Below Cards */}
        <div className="mt-12 text-center">
          <a href="https://mcc.nic.in/" className="bg-accent hover:bg-accent/90 text-white font-semibold text-base py-3.5 px-8 rounded-xl transition-all duration-200 inline-flex items-center gap-2 shadow-sm hover:shadow cursor-pointer">
            <span>View Official MCC Notices</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LiveCounsellingHub;
