import Brand from './Brand';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Admissions: [
      { label: 'MBBS India', href: '#india' },
      { label: 'NEET Counselling', href: '#neet-counselling' },
      { label: 'Private MBBS', href: '#colleges' },
      { label: 'Deemed Universities', href: '#colleges' },
      { label: 'MBBS Abroad', href: '#abroad' },
    ],
    Explore: [
      { label: 'Colleges', href: '#colleges' },
      { label: 'Admission Profile', href: '#counselling' },
      { label: 'Compare Colleges', href: '#comparison' },
      { label: 'Counselling Tracker', href: '#live-updates' },
    ],
    Resources: [
      { label: 'Cutoffs', href: '#colleges' },
      { label: 'Fees', href: '#colleges' },
      { label: 'Seat Matrix', href: '#colleges' },
      { label: 'Guides', href: '#neet-counselling' },
      { label: 'Parent Guidance', href: '#parents' },
      { label: 'FAQs', href: '#faqs' },
    ],
    Company: [
      { label: 'About Jnex', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'For Parents', href: '#parents' },
    ],
  };

  return (
    <footer className="bg-primary text-gray-400">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="#home" aria-label="JNEX Education home"><Brand /></a>
            <p className="text-sm font-medium text-gray-500 max-w-xs">
              Medical Admission & Counselling Guidance
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <p>
                <a href="mailto:info@jnexeducation.com" className="hover:text-white transition-colors">
                  info@jnexeducation.com
                </a>
              </p>
              <p>
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-medium hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm font-medium text-gray-500">
            Medical education. Thoughtful guidance.
            
            
            
            
          </div>
          <p className="text-sm text-gray-500">
            © 2026 Jnex Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
