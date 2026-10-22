import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ badge, title, subtitle }) => {
  return (
    <div className="pt-28 pb-12 sm:pt-36 sm:pb-16 bg-gradient-to-b from-champagne-light/70 via-ivory to-ivory border-b border-champagne-dark/40 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blush/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-champagne/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <nav className="inline-flex items-center gap-1.5 text-xs text-charcoal-muted uppercase tracking-wider mb-4" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-champagne-dark" />
          <span className="text-charcoal font-medium">{title}</span>
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ivory border border-gold/40 text-[11px] uppercase tracking-widest text-gold-dark font-medium shadow-2xs mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>{badge}</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium text-charcoal tracking-tight mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-charcoal-muted max-w-2xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

