import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Heart, MapPin } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { PetalCanvas } from './PetalCanvas';

interface HeroProps {
  onOpenDateChecker: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDateChecker }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory pt-28 pb-16"
    >
      {/* Background Wedding Image with editorial depth */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.hero.bgImage}
          alt="Majestic Indian Wedding couple portrait in traditional ceremonial attire"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Multi-layered luxury ivory & warm vignette overlay ensuring flawless text contrast while keeping colors luminous */}
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/70 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/90 via-ivory/60 to-transparent" />
        <div className="absolute inset-0 bg-champagne-light/20 backdrop-blur-[0.5px]" />
      </div>

      {/* Floating Petals Canvas */}
      <PetalCanvas count={16} />

      {/* Subtle decorative fine borders (spaced below fixed navbar) */}
      <div className="absolute top-24 sm:top-26 bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 border border-gold/20 pointer-events-none rounded-2xl z-10 hidden md:block" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-12 sm:pt-16 pb-8">
        {/* Subtle Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ivory/90 backdrop-blur-md border border-gold/40 shadow-subtle mb-6 text-xs uppercase tracking-widest text-charcoal font-medium"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>Traditional + Candid Specialist</span>
          <span className="w-1 h-1 rounded-full bg-gold" />
          <span className="flex items-center gap-1 text-charcoal-muted">
            <MapPin className="w-3 h-3 text-gold" /> Kumhrar, Patna
          </span>
        </motion.div>

        {/* Main Serif Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-charcoal leading-[1.12] mb-6 max-w-3xl"
        >
          Every <span className="italic font-normal text-rose-dark">Love Story</span> Deserves to Be{' '}
          <span className="relative inline-block">
            Remembered.
            <span className="absolute bottom-1.5 left-0 w-full h-[3px] bg-gradient-to-r from-champagne-dark via-gold to-transparent -z-10 rounded-full" />
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-charcoal-light font-light max-w-2xl leading-relaxed mb-8 sm:mb-10 text-balance"
        >
          {siteConfig.hero.subheadline}
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-start"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-dark text-ivory text-xs sm:text-sm uppercase tracking-widest font-semibold shadow-luxury hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Heart className="w-4 h-4 fill-ivory/20" />
            <span>{siteConfig.hero.primaryCta}</span>
          </Link>

          <Link
            to="/stories"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-ivory/80 hover:bg-ivory text-charcoal border border-champagne-dark text-xs sm:text-sm uppercase tracking-widest font-medium transition-all duration-300 shadow-sm hover:border-gold hover:text-gold-dark transform hover:-translate-y-0.5"
          >
            <span>{siteConfig.hero.secondaryCta}</span>
          </Link>

          <button
            type="button"
            onClick={onOpenDateChecker}
            className="w-full sm:w-auto text-xs uppercase tracking-wider text-charcoal-muted hover:text-charcoal font-medium underline underline-offset-4 decoration-gold/60 py-2 sm:px-3 transition-colors"
          >
            Check Availability →
          </button>
        </motion.div>

        {/* Quick Trust Attributes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 pt-8 border-t border-charcoal/10 flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-charcoal-muted"
        >
          <div>
            <span className="font-serif text-lg font-semibold text-charcoal block">2023</span>
            <span className="tracking-wide">Established in Patna</span>
          </div>
          <div className="hidden sm:block w-px h-7 bg-champagne-dark" />
          <div>
            <span className="font-serif text-lg font-semibold text-charcoal block">Bihar &amp; Beyond</span>
            <span className="tracking-wide">Patna, Delhi, Lucknow &amp; Mughalsarai</span>
          </div>
          <div className="hidden sm:block w-px h-7 bg-champagne-dark" />
          <div>
            <span className="font-serif text-lg font-semibold text-charcoal block">Photo + Cinema</span>
            <span className="tracking-wide">End-to-End Visual Harmony</span>
          </div>
        </motion.div>
      </div>

      {/* Refined Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 text-charcoal-muted"
      >
        <span className="text-[10px] uppercase tracking-widest font-light">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
};
