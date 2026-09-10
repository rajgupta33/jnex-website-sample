import { useState } from 'react';
import { Search } from 'lucide-react';

const colleges = [
  {
    name: 'Shri Ram Murti Smarak IMS',
    image: '/images/campus-india.png',
    imageAlt: 'Illustrative AI-generated university campus with landscaped grounds',
    location: 'Bareilly, UP',
    type: 'Private',
    annualTuition: '₹13.73L',
    mbbsSeats: '150 seats',
    previousClosingRank: '1,15,450',
    counselling: 'UP NEET',
    tags: ['Private', 'Under ₹75L'],
  },
  {
    name: 'Teerthanker Mahaveer Medical College',
    image: '/images/campus-courtyard.png',
    imageAlt: 'Illustrative AI-generated university courtyard',
    location: 'Moradabad, UP',
    type: 'Private',
    annualTuition: '₹18.50L',
    mbbsSeats: '150 seats',
    previousClosingRank: '98,200',
    counselling: 'UP NEET',
    tags: ['Private'],
  },
  {
    name: 'Tbilisi State Medical University',
    image: '/images/campus-classic.jpg',
    imageAlt: 'Illustrative stock photo of a historic university building',
    location: 'Tbilisi, Georgia',
    type: 'International',
    annualTuition: '₹4.50L',
    mbbsSeats: '200 seats',
    previousClosingRank: 'NEET Qualified',
    counselling: 'Direct',
    tags: ['Under ₹50L', 'Under ₹75L', 'NRI', 'International'],
  },
];

const filterChips = [
  'Government',
  'Private',
  'Deemed',
  'Under ₹50L',
  'Under ₹75L',
  'NRI',
];

const CollegeExplorer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState(null);

  const filteredColleges = colleges.filter((college) => {
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      college.name.toLowerCase().includes(query) ||
      college.location.toLowerCase().includes(query) ||
      college.counselling.toLowerCase().includes(query) ||
      college.type.toLowerCase().includes(query);

    const matchesChip =
      !activeFilter ||
      college.tags?.includes(activeFilter) ||
      college.type.toLowerCase() === activeFilter.toLowerCase();

    return matchesSearch && matchesChip;
  });

  return (
    <section id="colleges" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-12">
          <p className="text-xs font-bold tracking-widest text-accent uppercase mb-3">
            COLLEGE EXPLORER
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight mb-8">
            Compare what actually matters.
          </h2>

          <p className="text-sm text-slate-500 mb-6">Sample college data for exploration. Confirm current fees, seats and cutoffs before making a decision.</p>
          <div className="relative max-w-2xl mb-6">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
              aria-hidden="true"
            />
            <input
              aria-label="Search colleges"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search medical college, city, or state..."
              className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-base text-foreground placeholder:text-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition shadow-xs"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {filterChips.map((chip) => {
              const isActive = activeFilter === chip;
              return (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setActiveFilter(isActive ? null : chip)}
                  aria-pressed={isActive}
                  className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition ${
                    isActive
                      ? 'bg-accent text-white border border-accent shadow-xs'
                      : 'bg-white border border-gray-200 text-gray-700 hover:border-accent hover:text-accent'
                  }`}
                >
                  {chip}
                </button>
              );
            })}
          </div>
        </div>

        {filteredColleges.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.map((college) => (
              <div
                key={college.name}
                className="college-image-card bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <figure className="college-photo">
                    <img src={college.image} alt={college.imageAlt} width="1000" height="625" loading="lazy" decoding="async" />
                    <figcaption>Illustrative campus image</figcaption>
                  </figure>
                  <h3 className="font-bold text-lg text-primary mb-1">
                    {college.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">
                    {college.location}
                  </p>
                  <div className="mb-6">
                    <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-semibold">
                      {college.type}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-3 mb-6 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500 font-medium mb-1">
                        Annual Tuition
                      </p>
                      <p className="font-bold text-primary text-base">
                        {college.annualTuition}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium mb-1">
                        MBBS Seats
                      </p>
                      <p className="font-bold text-primary text-base">
                        {college.mbbsSeats}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium mb-1">
                        Previous Closing Rank
                      </p>
                      <p className="font-bold text-primary text-base">
                        {college.previousClosingRank}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium mb-1">
                        Counselling
                      </p>
                      <p className="font-bold text-primary text-base">
                        {college.counselling}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a href="#counselling"
                    className="flex-1 bg-accent hover:bg-accent-light text-white font-semibold py-2.5 px-4 rounded-xl transition text-sm flex items-center justify-center cursor-pointer shadow-xs"
                  >
                    Check My Chances &rarr;
                  </a>
                  <a
                    href="#comparison"
                    className="text-sm font-semibold text-gray-600 hover:text-accent transition cursor-pointer"
                  >
                    Compare
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center max-w-lg mx-auto">
            <p className="text-gray-600 font-medium mb-4">
              No colleges match your current search or filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveFilter(null);
              }}
              className="px-4 py-2 bg-accent text-white rounded-xl text-sm font-semibold hover:bg-accent-light transition cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CollegeExplorer;
