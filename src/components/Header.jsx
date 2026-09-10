import Brand from './Brand';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, MessageCircle } from 'lucide-react';

const NAV_LINKS = [
  { label: 'MBBS India', href: '#india' },
  { label: 'MBBS Abroad', href: '#abroad' },
  { label: 'NEET Counselling', href: '#neet-counselling' },
  { label: 'Colleges', href: '#colleges' },
  { label: 'Tools', href: '#tools' },
  { label: 'For Parents', href: '#parents' },
];

const TopUtilityBar = () => {
  return (
    <aside aria-label="Announcement" className="bg-primary text-white text-xs font-medium py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-4">
        {/* Left: Headline with live pulse indicator */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="truncate font-semibold tracking-tight">
            NEET UG 2026 Counselling Updates
          </span>
        </div>

        {/* Center: Counselling categories (hidden on mobile) */}
        <div className="hidden lg:flex items-center gap-2 text-slate-300 text-[11px] tracking-wide select-none">
          <span>MCC</span>
          <span className="text-slate-500">•</span>
          <span>State Counselling</span>
          <span className="text-slate-500">•</span>
          <span>Seat Matrix</span>
          <span className="text-slate-500">•</span>
          <span>Cutoffs</span>
        </div>

        {/* Right: Live updates link */}
        <a
          href="#live-updates"
          className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white font-semibold transition-colors shrink-0 group"
        >
          <span>View Updates</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </aside>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press and manage body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        const items = document.querySelectorAll('#mobile-navigation a, #mobile-navigation button');
        const first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
      if (e.key === 'Escape') {
        document.querySelector('[aria-controls="mobile-navigation"]')?.focus();
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => { setIsMobileMenuOpen(false); document.querySelector('[aria-controls="mobile-navigation"]')?.focus(); };

  useEffect(() => {
    const query = window.matchMedia('(min-width: 1280px)');
    const closeOnDesktop = () => { if (query.matches) setIsMobileMenuOpen(false); };
    query.addEventListener('change', closeOnDesktop);
    return () => query.removeEventListener('change', closeOnDesktop);
  }, []);

  return (
    <>
      {/* 1. TOP UTILITY BAR (Scrolls with page so sticky header pins cleanly below it) */}
      <TopUtilityBar />

      {/* 2. STICKY HEADER (Pins to top-0 once scrolled past utility bar) */}
      <header className="sticky top-0 z-50 bg-[#020617]/90 backdrop-blur-md border-b border-white/10 shadow-lg transition-all">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-[88px] flex items-center justify-between gap-4">
          
          {/* Left: Logo */}
          <a
            href="/"
            className="flex items-center gap-2 shrink-0 py-1 rounded-lg focus-visible:outline-2 focus-visible:outline-accent"
            aria-label="JNEX Education Home"
          >
            <Brand />
          </a>

          {/* Center Navigation (hidden on mobile, visible md+) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-1 lg:gap-2"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-accent hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            {/* Talk to a Counsellor outlined gold CTA */}
            <a
              href="#counselling"
              className="hidden sm:inline-flex items-center justify-center px-4.5 py-2 text-sm font-semibold text-accent border border-accent rounded-xl hover:bg-accent hover:text-black transition-all shadow-[0_0_10px_rgba(234,179,8,0.1)]"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Talk to a Counsellor <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              className="xl:hidden inline-flex items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* 3. MOBILE SLIDE-OUT / FULL-SCREEN OVERLAY */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-[70] bg-white flex flex-col xl:hidden animate-in fade-in duration-200"
        >
          {/* Mobile Overlay Top Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 h-[88px] border-b border-slate-100">
            <a href="/" onClick={closeMenu} className="flex items-center gap-2">
              <Brand />
            </a>
            <button
              type="button"
              onClick={closeMenu}
              autoFocus
              aria-label="Close mobile menu"
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Overlay Content */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 flex flex-col justify-between">
            {/* Nav Links */}
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase px-3 mb-2">
                Navigation
              </p>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between px-3 py-3 text-base font-semibold text-slate-800 rounded-xl hover:bg-slate-50 hover:text-accent transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}

              {/* Counselling Live Updates banner link in menu */}
              <div className="pt-4">
                <a
                  href="#live-updates"
                  onClick={closeMenu}
                  className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200/80 transition-colors"
                >
                  <div className="min-w-0 pr-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-accent">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></span>
                      LIVE UPDATES
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5 font-medium truncate">
                      NEET UG 2026 Counselling & Cutoffs
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 shrink-0" />
                </a>
              </div>
            </div>

            {/* Bottom Contact / CTA Section */}
            <div className="pt-8 pb-4 space-y-3 border-t border-slate-100 mt-6">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 font-semibold text-sm hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Quick Call Button */}
              <a
                href="tel:+919876543210"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span>Call Admissions Desk</span>
              </a>

              {/* Talk to a Counsellor filled CTA */}
              <a
                href="#counselling"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-slate-800 transition-colors shadow-xs"
              >
                <span>Talk to a Counsellor</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
