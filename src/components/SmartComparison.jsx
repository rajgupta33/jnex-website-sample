import { ArrowRight } from 'lucide-react';

const SmartComparison = () => {
  return (
    <section id="comparison" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left side (lg:w-1/2) */}
          <div className="w-full lg:w-1/2">
            <p className="text-xs font-bold tracking-widest text-accent uppercase mb-3">
              SMART COMPARISON
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight">
              Confused between two colleges?
            </h2>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              Compare fees, cutoff trends, hostel, bond, seats and counselling route side by side.
            </p>
            <a href="#colleges" className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-xl mt-8 transition-colors inline-flex items-center gap-2 group cursor-pointer shadow-sm">
              <span>Explore Medical Colleges</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right side (lg:w-1/2): Minimal comparison preview card */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-gray-100">
                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                  Side-by-Side Comparison
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-accent">
                  NEET UG 2026
                </span>
              </div>

              {/* College Comparison Grid */}
              <div className="grid grid-cols-[1fr_auto_1fr] gap-3 sm:gap-6 items-stretch">
                {/* College A Column */}
                <div className="space-y-4">
                  <div className="min-h-[48px] sm:min-h-[52px]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-accent block mb-1">
                      College A
                    </span>
                    <h3 className="font-bold text-primary text-base sm:text-lg leading-tight">
                      SRMS IMS, Bareilly
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-xl p-3.5 sm:p-4 border border-gray-100">
                      <p className="text-xs font-medium text-gray-500 mb-1">Annual Tuition</p>
                      <p className="text-base sm:text-lg font-extrabold text-primary">
                        ₹13.73L<span className="text-xs font-normal text-gray-500">/year</span>
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3.5 sm:p-4 border border-gray-100">
                      <p className="text-xs font-medium text-gray-500 mb-1">Cutoff Trend</p>
                      <p className="text-xs sm:text-sm md:text-base font-bold text-primary">
                        Closing AIR 1,15,450
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3.5 sm:p-4 border border-gray-100">
                      <p className="text-xs font-medium text-gray-500 mb-1">Seat Matrix</p>
                      <p className="text-xs sm:text-sm md:text-base font-bold text-primary">
                        150 Seats
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center 'vs.' divider */}
                <div className="flex flex-col items-center justify-center relative px-0.5 sm:px-1">
                  <div className="w-px h-full bg-gray-100"></div>
                  <div className="absolute top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-500 font-bold text-xs flex items-center justify-center shadow-xs">
                    vs.
                  </div>
                </div>

                {/* College B Column */}
                <div className="space-y-4">
                  <div className="min-h-[48px] sm:min-h-[52px]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                      College B
                    </span>
                    <h3 className="font-bold text-primary text-base sm:text-lg leading-tight">
                      TMU Medical College
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-xl p-3.5 sm:p-4 border border-gray-100">
                      <p className="text-xs font-medium text-gray-500 mb-1">Annual Tuition</p>
                      <p className="text-base sm:text-lg font-extrabold text-primary">
                        ₹18.50L<span className="text-xs font-normal text-gray-500">/year</span>
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3.5 sm:p-4 border border-gray-100">
                      <p className="text-xs font-medium text-gray-500 mb-1">Cutoff Trend</p>
                      <p className="text-xs sm:text-sm md:text-base font-bold text-primary">
                        Closing AIR 98,200
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3.5 sm:p-4 border border-gray-100">
                      <p className="text-xs font-medium text-gray-500 mb-1">Seat Matrix</p>
                      <p className="text-xs sm:text-sm md:text-base font-bold text-primary">
                        150 Seats
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>Confirm current fees and cutoffs with the college.</span>
                <span className="font-semibold text-accent flex items-center gap-1">
                  Illustrative comparison
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartComparison;
