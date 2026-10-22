import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, Heart, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-20 sm:py-28 bg-champagne-light/50 relative overflow-hidden">
      {/* Subtle background flourishes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blush/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-champagne/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Multi-layered Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image: Intimate Couple Moment */}
              <div className="rounded-2xl overflow-hidden shadow-luxury border-4 border-ivory aspect-[4/5] relative z-10 group">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop"
                  alt="Intimate bridal mehndi and jewellery ritual"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 text-ivory text-xs">
                  <p className="font-serif italic text-sm">"Preserving how it felt, not just how it looked."</p>
                  <p className="text-[10px] uppercase tracking-wider text-champagne-light">Rahul Ranjan • Founder &amp; Lead</p>
                </div>
              </div>

              {/* Secondary Layered Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-3/5 rounded-xl overflow-hidden shadow-2xl border-4 border-ivory z-20 aspect-[4/3] bg-ivory">
                <img
                  src="https://images.unsplash.com/photo-1544077960-604201fe74bc?q=80&w=600&auto=format&fit=crop"
                  alt="Traditional Indian wedding ceremony ritual"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Decorative Stamp Badge */}
              <div className="absolute -top-5 -left-5 z-20 w-24 h-24 rounded-full bg-ivory shadow-lg border border-gold/40 flex flex-col items-center justify-center text-center p-2">
                <Sparkles className="w-4 h-4 text-gold mb-1" />
                <span className="text-[10px] font-serif font-bold uppercase tracking-wider text-charcoal">Est. 2023</span>
                <span className="text-[8px] text-charcoal-muted uppercase">Patna, Bihar</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Milestones */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="space-y-6">
              {/* Category Subheading */}
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-dark font-medium">
                <Heart className="w-3.5 h-3.5 text-rose" />
                <span>Our Heritage &amp; Philosophy</span>
              </div>

              {/* Main Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal leading-tight">
                {siteConfig.story.heading}
              </h2>

              {/* Story Narrative Paragraphs */}
              <p className="text-base sm:text-lg text-charcoal-light leading-relaxed font-light">
                {siteConfig.story.body1}
              </p>

              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-normal">
                {siteConfig.story.body2}
              </p>

              {/* Pull quote */}
              <div className="border-l-2 border-gold pl-5 py-1 my-4 bg-ivory/60 rounded-r-xl">
                <p className="font-serif italic text-base sm:text-lg text-charcoal">
                  "{siteConfig.story.ownerQuote}"
                </p>
                <span className="text-xs text-charcoal-muted mt-1 block">
                  — Rahul Ranjan, Founder of Your Dream Planner, Kumhrar, Patna
                </span>
              </div>

              {/* Journey Milestones since 2023 */}
              <div className="pt-4">
                <h3 className="text-xs uppercase tracking-widest text-charcoal font-semibold mb-4 flex items-center gap-2">
                  <Camera className="w-3.5 h-3.5 text-gold" />
                  <span>The Journey Since Inception</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {siteConfig.story.milestones.map((milestone) => (
                    <div
                      key={milestone.year}
                      className="p-4 rounded-xl bg-ivory border border-champagne-dark/50 shadow-sm hover:border-gold transition-colors"
                    >
                      <div className="font-serif text-xl font-bold text-gold-dark">
                        {milestone.year}
                      </div>
                      <div className="text-xs font-semibold text-charcoal mt-1">
                        {milestone.title}
                      </div>
                      <div className="text-[11px] text-charcoal-muted mt-1 leading-snug">
                        {milestone.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal hover:bg-charcoal-dark text-ivory text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span>Discover Our Approach</span>
                  <ArrowRight className="w-3.5 h-3.5 text-champagne" />
                </Link>

                <div className="flex items-center gap-2 text-xs text-charcoal-muted">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span>Kumhrar, Patna • Serving Nationwide</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
