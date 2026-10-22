import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Check, Heart, Calculator, MessageSquare } from 'lucide-react';
import { siteConfig, PackageItem } from '../config/siteConfig';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface PackagesProps {
  onSelectPackage?: (pkg: PackageItem) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  const navigate = useNavigate();
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [selectedCalcPkg, setSelectedCalcPkg] = useState<'20000' | '30000' | '35000'>('30000');
  const [eventDays, setEventDays] = useState(2);
  const [locationType, setLocationType] = useState<'patna' | 'outstation'>('patna');

  const basePricePerDay = parseInt(selectedCalcPkg, 10);
  const estimatedSubtotal = basePricePerDay * eventDays;

  const handleCalculatorWhatsApp = () => {
    const pkgName =
      selectedCalcPkg === '20000'
        ? 'Photography Essentials (₹20,000/day)'
        : selectedCalcPkg === '30000'
        ? 'Complete Wedding Story (₹30,000/day)'
        : 'Pre-Wedding Experience (₹35,000/day)';

    const link = buildWhatsAppLink({
      packageName: pkgName,
      weddingLocation: locationType === 'patna' ? 'Patna, Bihar' : 'Outstation (Requires Travel/Stay)',
      customMessage: `Estimated requirement: ${eventDays} day(s) of coverage for ${pkgName}. Estimated budget: ₹${estimatedSubtotal.toLocaleString('en-IN')}. Please confirm availability.`,
    });

    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="packages" className="py-20 sm:py-28 bg-champagne-light/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-dark font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Honest &amp; Transparent Investment</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal mb-4">
            Wedding Photography &amp; Film Packages
          </h2>

          <p className="text-sm sm:text-base text-charcoal-muted max-w-xl mx-auto font-light">
            Clear, transparent daily rates for celebrations in Patna and outstation. Crafted to preserve every emotion with timeless fidelity.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setCalculatorOpen(!calculatorOpen)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ivory text-charcoal border border-gold/60 text-xs uppercase tracking-wider font-medium shadow-sm hover:bg-gold hover:text-ivory transition-colors"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>{calculatorOpen ? 'Hide Multi-Day Estimator' : 'Open Multi-Day Quotation Estimator'}</span>
            </button>
          </div>
        </div>

        {/* Interactive Multi-Day Estimator Panel */}
        {calculatorOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-14 p-6 sm:p-8 rounded-2xl bg-ivory border-2 border-gold/40 shadow-luxury max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-between pb-4 border-b border-champagne-dark/40 mb-6">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal">
                  Multi-Day Wedding Estimate Calculator
                </h3>
                <p className="text-xs text-charcoal-muted">
                  Quickly calculate your estimated investment based on published rates.
                </p>
              </div>
              <span className="text-xs uppercase font-mono px-3 py-1 rounded bg-champagne text-charcoal font-semibold">
                Transparent Pricing
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block mb-2">
                  Select Package
                </label>
                <select
                  value={selectedCalcPkg}
                  onChange={(e) => setSelectedCalcPkg(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl border border-champagne-dark bg-ivory text-xs sm:text-sm text-charcoal focus:ring-2 focus:ring-gold focus:outline-none"
                >
                  <option value="20000">Photography Essentials (₹20,000/day)</option>
                  <option value="30000">Complete Wedding Story (₹30,000/day)</option>
                  <option value="35000">Pre-Wedding Shoot (₹35,000/day)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block mb-2">
                  Number of Days
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setEventDays(d)}
                      className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                        eventDays === d
                          ? 'bg-charcoal text-ivory border-charcoal'
                          : 'bg-ivory border-champagne-dark text-charcoal hover:border-gold'
                      }`}
                    >
                      {d} {d === 1 ? 'Day' : 'Days'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block mb-2">
                  Destination / City
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setLocationType('patna')}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                      locationType === 'patna'
                        ? 'bg-charcoal text-ivory border-charcoal'
                        : 'bg-ivory border-champagne-dark text-charcoal hover:border-gold'
                    }`}
                  >
                    Patna Base
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocationType('outstation')}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                      locationType === 'outstation'
                        ? 'bg-charcoal text-ivory border-charcoal'
                        : 'bg-ivory border-champagne-dark text-charcoal hover:border-gold'
                    }`}
                  >
                    Outstation
                  </button>
                </div>
              </div>
            </div>

            {/* Estimated Total & Action */}
            <div className="p-4 rounded-xl bg-champagne-light flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-charcoal-muted block">
                  Estimated Total ({eventDays} Day{eventDays > 1 ? 's' : ''})
                </span>
                <span className="font-serif text-3xl font-bold text-charcoal">
                  ₹{estimatedSubtotal.toLocaleString('en-IN')}
                </span>
                {locationType === 'outstation' && (
                  <span className="text-[11px] text-charcoal-muted block">
                    + Outstation travel &amp; stay borne by client
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={handleCalculatorWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-gold-dark text-ivory text-xs uppercase tracking-widest font-semibold transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Send Estimate via WhatsApp</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* 3 Main Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {siteConfig.packages.map((pkg, index) => {
            const isFeatured = pkg.recommended;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 relative ${
                  isFeatured
                    ? 'bg-ivory border-2 border-gold shadow-luxury-hover scale-100 md:-translate-y-2'
                    : 'bg-ivory/80 border border-champagne-dark/60 shadow-sm hover:shadow-luxury hover:border-gold/50'
                }`}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold shadow-sm ${
                        isFeatured
                          ? 'bg-gold text-ivory'
                          : 'bg-champagne text-charcoal border border-champagne-dark'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Package Title */}
                  <h3 className="font-serif text-2xl font-medium text-charcoal text-center mt-2 mb-2">
                    {pkg.name}
                  </h3>

                  <p className="text-xs text-charcoal-muted text-center font-light mb-6 min-h-[36px]">
                    {pkg.summary}
                  </p>

                  {/* Price Block */}
                  <div className="text-center py-6 border-y border-champagne-dark/40 mb-6 bg-champagne-light/30 rounded-xl">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-serif text-4xl sm:text-5xl font-bold text-charcoal tracking-tight">
                        {pkg.price}
                      </span>
                    </div>
                    <span className="text-xs uppercase tracking-wider text-charcoal-muted font-medium mt-1 block">
                      {pkg.period}
                    </span>
                  </div>

                  {/* Includes List */}
                  <div className="mb-8">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-charcoal block mb-4">
                      Package Inclusions:
                    </span>
                    <ul className="space-y-3">
                      {pkg.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-light">
                          <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTAs */}
                <div className="space-y-3 pt-4 border-t border-champagne-dark/30">
                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectPackage) {
                        onSelectPackage(pkg);
                      } else {
                        navigate('/contact', { state: { package: `${pkg.name} (${pkg.price})` } });
                      }
                    }}
                    className={`w-full py-3 px-4 rounded-xl text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-gold hover:bg-gold-dark text-ivory shadow-sm hover:shadow-gold-glow'
                        : 'bg-charcoal hover:bg-charcoal-dark text-ivory'
                    }`}
                  >
                    <Heart className="w-3.5 h-3.5 fill-ivory/20" />
                    <span>Enquire About This Package</span>
                  </button>

                  <Link
                    to="/contact"
                    className="w-full py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider font-medium text-charcoal hover:text-gold-dark border border-champagne-dark hover:border-gold text-center block transition-colors"
                  >
                    Get a Custom Quote
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mandatory Prompt Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto p-4 rounded-xl bg-ivory border border-champagne-dark/60 shadow-sm">
          <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed font-light">
            {siteConfig.packagesDisclaimer}
          </p>
        </div>

      </div>
    </section>
  );
};
