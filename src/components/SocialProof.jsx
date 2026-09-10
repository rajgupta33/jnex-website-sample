import { Star } from 'lucide-react';

const outcomes = [
  {
    id: 1,
    badge: 'NEET 2025',
    score: 'AIR 74,8XX',
    state: 'Uttar Pradesh',
    college: 'XYZ Medical College',
    type: 'Private MBBS',
    storyLink: '#story-1',
  },
  {
    id: 2,
    badge: 'NEET 2025',
    score: 'Score 5XX',
    state: 'Rajasthan',
    college: 'ABC University',
    type: 'MBBS',
    storyLink: '#story-2',
  },
  {
    id: 3,
    badge: 'MBBS ABROAD',
    score: 'NEET Qualified',
    state: 'Delhi',
    college: 'European University, Georgia',
    type: '',
    storyLink: '#story-3',
  },
];

const SocialProof = () => {
  return (
    <section id="stories" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
            REAL OUTCOMES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            Students. Scores. Colleges.
          </h2>
        </div>

        {/* Outcome Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                {/* Top Section: NEET year badge + score/rank + state */}
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-700">
                    {item.badge}
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight mt-4">
                    {item.score}
                  </div>
                  <p className="text-sm font-medium text-gray-500 mt-1">
                    {item.state}
                  </p>
                </div>

                {/* Arrow */}
                <div className="my-5 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-accent text-sm font-bold select-none">
                    &rarr;
                  </div>
                  <div className="h-px flex-1 bg-gray-100" />
                </div>

                {/* Bottom Section: College name + type */}
                <div>
                  <h3 className="font-bold text-lg text-primary leading-snug">
                    {item.college}
                  </h3>
                  {item.type && (
                    <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 mt-2">
                      {item.type}
                    </span>
                  )}
                </div>
              </div>

              {/* Small link: View Story */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a
                  href={item.storyLink}
                  className="inline-flex items-center text-xs font-semibold text-accent hover:text-accent-light transition-colors cursor-pointer group"
                >
                  View Story &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Below Cards: Review proof and link */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-6 py-3.5 rounded-2xl bg-gray-50/80 border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="flex items-center text-amber-400" aria-label="5 stars rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-primary">
                4.9/5 from verified student reviews
              </span>
            </div>
            <span className="hidden sm:inline text-gray-300" aria-hidden="true">
              •
            </span>
            <a
              href="#reviews"
              className="text-sm font-semibold text-accent hover:text-accent-light transition-colors cursor-pointer"
            >
              Read Student Reviews &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
