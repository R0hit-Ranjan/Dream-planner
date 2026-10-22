import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Check, ArrowRight, Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const navigate = useNavigate();
  return (
    <section id="services" className="py-20 sm:py-28 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-dark font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Comprehensive Wedding Coverage</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal mb-4">
            Services Crafted for Timeless Memories
          </h2>

          <p className="text-sm sm:text-base text-charcoal-muted max-w-xl mx-auto font-light">
            From the quiet morning haldi to the grand baraat entrance and sacred pheras, our services ensure every chapter of your wedding is captured with artistry and reverence.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-champagne-light/30 rounded-2xl overflow-hidden border border-champagne-dark/50 hover:border-gold/60 shadow-sm hover:shadow-luxury transition-all duration-500 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative h-52 overflow-hidden bg-champagne-light">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                  {service.badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-ivory/95 backdrop-blur-md text-charcoal border border-gold/40 shadow-sm">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Details */}
                <div className="p-6">
                  <span className="text-[11px] uppercase tracking-wider text-rose-dark font-medium block mb-1">
                    {service.tagline}
                  </span>

                  <h3 className="font-serif text-2xl font-medium text-charcoal mb-3 group-hover:text-gold-dark transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-light font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-charcoal-muted">
                        <Check className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Enquiry Action */}
              <div className="px-6 pb-6 pt-2 border-t border-champagne-dark/30">
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectService) {
                      onSelectService(service.title);
                    } else {
                      navigate('/contact', { state: { service: service.title } });
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-gold/60 text-charcoal bg-ivory/80 hover:bg-gold hover:text-ivory text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-sm group-hover:border-gold"
                >
                  <Heart className="w-3.5 h-3.5 text-rose group-hover:text-ivory transition-colors" />
                  <span>Enquire For This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-charcoal-muted group-hover:text-ivory" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote on customized packages */}
        <div className="mt-12 p-6 rounded-2xl bg-champagne-light/50 border border-champagne-dark/50 text-center max-w-2xl mx-auto">
          <p className="font-serif italic text-base text-charcoal mb-2">
            "Planning a multi-day wedding with diverse rituals in Patna or outstation?"
          </p>
          <p className="text-xs text-charcoal-muted mb-4 font-light">
            We tailor custom crews for multiple events across engagements, haldi, sangeet, wedding ceremony, and receptions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-dark hover:text-charcoal font-semibold underline underline-offset-4"
          >
            Get a Personalized Multi-Day Quote →
          </Link>
        </div>

      </div>
    </section>
  );
};
