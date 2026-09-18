import Brand from './Brand';
import { navigation } from './Header';
import { contactEmail, contactHref } from '../data/config';
import { ContactNumbers } from './ReferenceUI';
import { CURRENT_YEAR } from '../data/admissions';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const footerLinks = Object.fromEntries(Object.entries({ ...navigation, 'Explore MBBS India': [['States', '/mbbs-admission/#states'], ['Private MBBS', '/private-mbbs-admission/'], ['Deemed Universities', '/deemed-university-mbbs/'], ['NRI Quota', '/nri-quota-mbbs/']], Scholarships: [['Scholarships & Funding', '/scholarships/'], ['Privacy Policy', '/privacy-policy/']] }).map(([group, links]) => [group, links.map(([label, href]) => ({label, href}))]));

  return (
    <footer className="bg-primary text-gray-400">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="/" aria-label="JNEX Education home"><Brand /></a>
            <p className="text-sm font-medium text-gray-500 max-w-xs">
              MBBS Admission Guidance Across India
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <p>
                <a href={contactHref} className="hover:text-white transition-colors">
                  {contactEmail}
                </a>
              </p>
              <ContactNumbers dark compact />
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
            © {CURRENT_YEAR} JNEX Education. All rights reserved.
            <span className="block text-xs text-gray-600 mt-1">State outlines adapted from <a href="https://github.com/VictorCazanave/svg-maps" className="underline">SVG Maps</a> (CC BY 4.0).</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
