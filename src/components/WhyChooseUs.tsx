import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, Film, Sparkles, Compass, Users, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const iconMap: Record<string, React.ReactNode> = {
  Camera: <Camera className="w-5 h-5 text-gold" />,
  Heart: <Heart className="w-5 h-5 text-rose" />,
  Film: <Film className="w-5 h-5 text-gold" />,
  Sparkles: <Sparkles className="w-5 h-5 text-gold" />,
  Compass: <Compass className="w-5 h-5 text-gold" />,
  Users: <Users className="w-5 h-5 text-gold" />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-dark font-medium mb-3">
            <CheckCircle className="w-3.5 h-3.5 text-gold" />
            <span>Honest Values &amp; Artistry</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal mb-4">
            Why Entrust Your Dream Planner?
          </h2>

          <p className="text-sm sm:text-base text-charcoal-muted max-w-xl mx-auto font-light">
            Founded with a passion for preserving authentic Indian celebrations without forced poses, exaggerated claims, or artificial promises.
          </p>
        </div>

        {/* 6 Core Genuine Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-8 rounded-2xl bg-champagne-light/30 border border-champagne-dark/50 hover:border-gold hover:bg-champagne-light/60 transition-all duration-300 shadow-sm hover:shadow-subtle group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-ivory border border-champagne-dark/60 flex items-center justify-center shadow-sm mb-6 group-hover:scale-105 transition-transform duration-300">
                {iconMap[item.icon] || <Sparkles className="w-5 h-5 text-gold" />}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-medium text-charcoal mb-3 group-hover:text-gold-dark transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-charcoal-light font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Commitment Badge */}
        <div className="mt-14 max-w-2xl mx-auto text-center border-t border-champagne-dark/40 pt-8">
          <p className="text-xs text-charcoal-muted italic">
            "Your wedding is once in a lifetime. We respect your family's time, private spaces, and sacred rituals with utmost dignity."
          </p>
        </div>

      </div>
    </section>
  );
};
