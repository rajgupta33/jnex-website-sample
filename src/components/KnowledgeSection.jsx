import { ArrowRight, Clock } from 'lucide-react';

const cards = [
  {
    category: 'GUIDE',
    badgeClass: 'bg-blue-50 text-blue-700',
    title: 'UP NEET Counselling 2026: Dates, Fees & Process',
    readTime: '8 min read',
    href: '#up-neet-counselling-2026',
  },
  {
    category: 'CUTOFF',
    badgeClass: 'bg-amber-50 text-amber-700',
    title: 'Private MBBS Cutoff Trends — State by State',
    readTime: '5 min read',
    href: '#private-mbbs-cutoff-trends',
  },
  {
    category: 'EXPLAINER',
    badgeClass: 'bg-green-50 text-green-700',
    title: 'Private vs Deemed MBBS: What Actually Changes?',
    readTime: '6 min read',
    href: '#private-vs-deemed-mbbs',
  },
];

const KnowledgeSection = () => {
  return (
    <section id="resources" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-12">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
            ADMISSION INTELLIGENCE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            What students are checking right now.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span
                  className={`inline-block text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-md ${card.badgeClass}`}
                >
                  {card.category}
                </span>
                <h3 className="font-bold text-base md:text-lg text-primary mt-3 group-hover:text-accent transition-colors leading-snug">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-gray-400 mt-2 flex items-center gap-1.5 pt-4">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span>{card.readTime}</span>
              </p>
            </a>
          ))}
        </div>

        <div className="mt-10 md:mt-12">
          <a
            href="#admission-guides"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline text-base group"
          >
            <span>Explore Medical Admission Guides</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
