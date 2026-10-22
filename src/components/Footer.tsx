import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowUp, MessageCircle, MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ivory border-t border-champagne-dark pt-16 pb-12 text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-champagne-dark/50">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3.5 group">
              <div className="w-16 h-16 rounded-full bg-champagne-light/70 p-2 border border-gold/40 shadow-sm flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/images/logo-transparent.png"
                  alt="Your Dream Planner Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-wide text-charcoal group-hover:text-gold transition-colors">
                  {siteConfig.brand.name}
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-charcoal-muted">
                  Founded by Rahul Ranjan • Kumhrar, Patna
                </p>
              </div>
            </Link>

            <p className="font-serif italic text-base sm:text-lg text-rose-dark max-w-sm">
              "{siteConfig.brand.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-charcoal-light font-light leading-relaxed max-w-md">
              Specialists in candid moments, sacred traditional rituals, and cinematic wedding films. Celebrating union stories in Patna, Bihar, and destination celebrations across India.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={buildWhatsAppLink({ customMessage: "Hello! Reaching out via the website footer to enquire about wedding photography." })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-champagne-light hover:bg-gold hover:text-ivory text-charcoal border border-gold/50 text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={siteConfig.brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ivory hover:bg-champagne-light text-charcoal border border-champagne-dark text-xs uppercase tracking-wider font-semibold transition-colors"
                title="Follow Rahul Ranjan on Instagram @_banjaara111_"
              >
                <Instagram className="w-3.5 h-3.5 text-rose-dark" />
                <span>@_banjaara111_</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) with Named Routes */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-charcoal">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-charcoal-light">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-gold transition-colors">Our Story</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/stories" className="hover:text-gold transition-colors">Wedding Stories</Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-gold transition-colors">Packages &amp; Pricing</Link>
              </li>
              <li>
                <Link to="/why-us" className="hover:text-gold transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-gold transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services Column (2 cols) with Named Routes */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-charcoal">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-charcoal-light">
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">Candid Photography</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">Traditional Videography</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">Wedding Films</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">Pre-Wedding Shoots</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">Pre-Wedding Films</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">Engagement &amp; Reception</Link>
              </li>
            </ul>
          </div>

          {/* Studio Location & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-charcoal">
              Studio &amp; Base
            </h4>
            
            <div className="space-y-3 text-xs text-charcoal-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  Kumhrar, Patna — Bihar, India<br />
                  <span className="text-[11px] text-charcoal-muted">(Available for Outstation Assignments)</span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{siteConfig.brand.displayPhone}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{siteConfig.brand.email}</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-charcoal-muted">
              <p>Past destinations: Patna, Delhi, Lucknow, Mughalsarai.</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-muted">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {currentYear} {siteConfig.brand.name}. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Owned by Rahul Ranjan</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-rose fill-rose" /> for timeless love stories
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full border border-champagne-dark hover:border-gold hover:bg-champagne-light transition-colors text-charcoal"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
