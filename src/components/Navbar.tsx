import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Calendar, Sparkles, Instagram } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface NavbarProps {
  onOpenDateChecker: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDateChecker }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/story' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Stories', path: '/stories' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-20 flex items-center ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-subtle border-b border-champagne-dark/40'
            : 'bg-gradient-to-b from-charcoal/70 via-charcoal/30 to-transparent text-ivory'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold flex-shrink-0"
            >
              <div className="w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] rounded-full bg-ivory/95 p-1.5 border border-gold/40 shadow-sm flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/images/logo-transparent.png"
                  alt="Your Dream Planner Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span
                  className={`font-serif text-base sm:text-lg font-medium tracking-wide whitespace-nowrap transition-colors ${
                    isScrolled ? 'text-charcoal' : 'text-ivory drop-shadow-sm'
                  }`}
                >
                  {siteConfig.brand.name}
                </span>
                <span
                  className={`text-[9px] tracking-widest uppercase font-medium whitespace-nowrap transition-colors ${
                    isScrolled ? 'text-charcoal-muted' : 'text-ivory/80'
                  }`}
                >
                  Patna • Bihar
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with Named Routes and Active State */}
            <nav className="hidden lg:flex items-center justify-center gap-2 xl:gap-3.5 2xl:gap-5 flex-1 px-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[11px] xl:text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-300 relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold ${
                      isActive
                        ? isScrolled
                          ? 'text-rose-dark font-semibold'
                          : 'text-ivory font-semibold'
                        : isScrolled
                        ? 'text-charcoal hover:text-gold-dark'
                        : 'text-ivory/85 hover:text-ivory'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 h-[1.5px] bg-gold transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 hover:w-full'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden sm:flex items-center gap-2 lg:gap-2.5 xl:gap-3 flex-shrink-0">
              {/* Instagram Button */}
              <a
                href={siteConfig.brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Rahul Ranjan on Instagram @_banjaara111_"
                className={`w-8 h-8 lg:w-9 lg:h-9 rounded-full flex items-center justify-center border transition-all duration-300 flex-shrink-0 ${
                  isScrolled
                    ? 'border-champagne-dark text-charcoal hover:text-gold hover:border-gold bg-champagne-light/50'
                    : 'border-ivory/40 text-ivory hover:text-champagne hover:border-ivory bg-ivory/10 backdrop-blur-sm'
                }`}
              >
                <Instagram className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
              </a>

              {/* Check Your Date Button */}
              <button
                type="button"
                onClick={onOpenDateChecker}
                className={`flex items-center gap-1.5 px-3 lg:px-3.5 py-1.5 lg:py-2 rounded-full text-[11px] uppercase tracking-wider font-semibold border transition-all duration-300 shadow-sm active:scale-95 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  isScrolled
                    ? 'border-gold text-charcoal bg-champagne-light hover:bg-gold hover:text-ivory'
                    : 'border-ivory/60 text-ivory bg-ivory/15 hover:bg-ivory hover:text-charcoal backdrop-blur-sm'
                }`}
              >
                <Calendar className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>Check Your Date</span>
              </button>

              {/* Book Now Button (Restored & Optimized so it never clips) */}
              <Link
                to="/contact"
                className="flex items-center gap-1.5 px-3.5 lg:px-4 py-1.5 lg:py-2 rounded-full text-[11px] lg:text-xs uppercase tracking-wider font-semibold bg-gold hover:bg-gold-dark text-ivory shadow-sm transition-all duration-300 hover:shadow-gold-glow active:scale-95 whitespace-nowrap flex-shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Book Now</span>
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden flex-shrink-0">
              <a
                href={siteConfig.brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full border text-xs ${
                  isScrolled
                    ? 'border-champagne-dark text-charcoal bg-champagne-light/50'
                    : 'border-ivory/40 text-ivory bg-ivory/10 backdrop-blur-sm'
                }`}
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenDateChecker}
                className={`sm:hidden p-2 rounded-full text-xs border ${
                  isScrolled
                    ? 'border-gold/60 text-charcoal bg-champagne-light'
                    : 'border-ivory/40 text-ivory bg-ivory/10 backdrop-blur-sm'
                }`}
                title="Check Your Date"
              >
                <Calendar className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                className={`p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold ${
                  isScrolled ? 'text-charcoal hover:bg-champagne/50' : 'text-ivory hover:bg-white/10'
                }`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-over panel */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-ivory shadow-2xl flex flex-col justify-between transition-transform duration-500 ease-out transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="p-6 border-b border-champagne-dark/30 flex items-center justify-between">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="w-14 h-14 rounded-full bg-ivory p-1.5 border border-gold/40 shadow-sm flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/logo-transparent.png"
                  alt="Your Dream Planner Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-serif text-base font-medium text-charcoal">
                  {siteConfig.brand.name}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-charcoal-muted">
                  Patna, Bihar
                </div>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full text-charcoal-muted hover:text-charcoal hover:bg-champagne/40"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links with Named Routes */}
          <div className="px-6 py-6 overflow-y-auto flex-1 flex flex-col justify-center space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `font-serif text-xl sm:text-2xl transition-colors py-1 flex items-center justify-between group ${
                    isActive ? 'text-rose-dark font-semibold' : 'text-charcoal hover:text-gold'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-xs uppercase tracking-widest text-charcoal-muted group-hover:text-gold transition-colors font-sans">
                  →
                </span>
              </NavLink>
            ))}
          </div>

          {/* Drawer Actions */}
          <div className="p-6 border-t border-champagne-dark/30 bg-champagne-light/50 space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDateChecker();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gold text-charcoal bg-ivory font-medium text-sm tracking-wide shadow-sm hover:bg-gold hover:text-ivory transition-colors"
            >
              <Calendar className="w-4 h-4 text-gold" />
              <span>Check Your Wedding Date</span>
            </button>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold hover:bg-gold-dark text-ivory font-medium text-sm tracking-wide shadow-md transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Consultation</span>
            </Link>

            <a
              href={siteConfig.brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-champagne-dark text-charcoal bg-ivory text-xs uppercase tracking-wider font-semibold transition-colors hover:border-gold"
            >
              <Instagram className="w-4 h-4 text-rose-dark" />
              <span>Follow Rahul on Instagram</span>
            </a>

            <p className="text-center text-[11px] text-charcoal-muted pt-2">
              Based in Kumhrar, Patna • Available for Outstation
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
