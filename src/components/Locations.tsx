import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, CheckCircle2, Info } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Locations: React.FC = () => {
  const verifiedDestinations = [
    {
      city: 'Patna, Bihar',
      role: 'Home Studio & Base',
      desc: 'Based in Kumhrar, Patna. Full local presence with zero outstation travel overhead for local weddings.',
      highlight: true
    },
    {
      city: 'Delhi & NCR',
      role: 'Outstation Documented',
      desc: 'Experienced in grand destination farmhouses, hotel ballrooms, and multi-cultural ceremonies.',
      highlight: false
    },
    {
      city: 'Lucknow, UP',
      role: 'Outstation Documented',
      desc: 'Capturing royal Awadhi grandeur, regal lawns, and intimate family mehfils.',
      highlight: false
    },
    {
      city: 'Mughalsarai / Chandauli',
      role: 'Outstation Documented',
      desc: 'Seamless coverage of traditional Eastern UP & Bihar heritage ceremonies.',
      highlight: false
    }
  ];

  return (
    <section id="locations" className="py-20 sm:py-28 bg-champagne-light/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-dark font-medium mb-3">
            <Compass className="w-3.5 h-3.5 text-gold" />
            <span>Where We Tell Stories</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal mb-4">
            Based in Patna, Ready for Outstation
          </h2>

          <p className="text-sm sm:text-base text-charcoal-muted max-w-xl mx-auto font-light">
            Rooted in Kumhrar, Patna — our team loves traveling across India to chronicle unique love stories and diverse regional wedding traditions.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {verifiedDestinations.map((dest, index) => (
            <motion.div
              key={dest.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                dest.highlight
                  ? 'bg-ivory border-2 border-gold shadow-luxury'
                  : 'bg-ivory/80 border-champagne-dark/50 shadow-sm hover:border-gold hover:shadow-subtle'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${dest.highlight ? 'bg-champagne text-gold-dark' : 'bg-champagne-light text-charcoal'}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  {dest.highlight && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-gold text-ivory">
                      Home Base
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl font-medium text-charcoal mb-1">
                  {dest.city}
                </h3>

                <span className="text-[11px] uppercase tracking-wider text-rose-dark font-semibold block mb-3">
                  {dest.role}
                </span>

                <p className="text-xs text-charcoal-light font-light leading-relaxed">
                  {dest.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-champagne-dark/30 flex items-center gap-1.5 text-[11px] text-charcoal-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                <span>Available for bookings</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transparent Travel Policy Callout */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-ivory p-6 sm:p-8 border border-champagne-dark/60 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="p-3 rounded-full bg-champagne-light text-gold-dark flex-shrink-0">
            <Info className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-medium text-charcoal mb-2">
              Our Transparent Outstation Policy
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-light font-light leading-relaxed mb-3">
              {siteConfig.travelPolicy.policyStatement}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-charcoal-muted">
              <span className="flex items-center gap-1">
                <Navigation className="w-3.5 h-3.5 text-gold" /> Transparent transit coordination
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Reliable crew arrival well before wedding rituals begin
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
