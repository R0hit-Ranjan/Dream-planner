import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Heart, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteConfig.testimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-blush-light/50 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blush/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-dark font-medium mb-3">
            <Heart className="w-3.5 h-3.5 text-rose" />
            <span>Client Experiences</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal mb-4">
            Words From Our Couples
          </h2>

          {/* Prompt requirement: clearly labeled sample placeholder note */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory/80 border border-gold/40 text-[11px] text-charcoal-muted shadow-sm">
            <AlertCircle className="w-3.5 h-3.5 text-gold" />
            <span>Sample Client Experiences (Pre-Launch Placeholders)</span>
          </div>
        </div>

        {/* Testimonial Carousel Card */}
        <div className="relative bg-ivory rounded-3xl p-8 sm:p-14 border border-champagne-dark/50 shadow-luxury max-w-4xl mx-auto">
          {/* Quote icon mark */}
          <div className="w-12 h-12 rounded-full bg-champagne-light flex items-center justify-center text-gold mb-6 mx-auto">
            <Quote className="w-6 h-6 rotate-180" />
          </div>

          <div className="min-h-[160px] sm:min-h-[140px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-charcoal leading-relaxed max-w-3xl mx-auto mb-8 font-light">
                  "{current.quote}"
                </p>

                <div className="space-y-1">
                  <div className="font-serif text-lg font-medium text-charcoal">
                    {current.couple}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-rose-dark font-medium">
                    {current.event} • {current.location}
                  </div>
                  <div className="text-[10px] text-charcoal-muted uppercase tracking-widest pt-1">
                    {current.date}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-champagne-dark/30">
            <button
              type="button"
              onClick={handlePrev}
              className="p-3 rounded-full border border-champagne-dark bg-champagne-light/50 hover:bg-gold hover:text-ivory text-charcoal transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-6 bg-gold' : 'w-2 bg-champagne-dark'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="p-3 rounded-full border border-champagne-dark bg-champagne-light/50 hover:bg-gold hover:text-ivory text-charcoal transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Authentic Transparency Note */}
        <div className="mt-8 text-center text-xs text-charcoal-muted max-w-xl mx-auto">
          <p>{siteConfig.sampleNotice}</p>
        </div>

      </div>
    </section>
  );
};
