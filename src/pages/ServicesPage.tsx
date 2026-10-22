import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Services } from '../components/Services';
import { Packages } from '../components/Packages';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-ivory min-h-screen">
      <PageHeader
        badge="Craft & Deliverables"
        title="Our Services"
        subtitle="Specialized candid photography, traditional rituals videography, cinematic films, and pre-wedding coverage coordinated seamlessly under one dedicated team."
      />
      <Services />
      <Packages />

      <div className="py-16 bg-champagne-light/50 border-t border-champagne-dark/40 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-3">
            Need a custom service combination?
          </h2>
          <p className="text-sm text-charcoal-muted mb-6">
            We adapt crew sizes and multi-day coverage based on your wedding muhurat schedule.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-dark text-ivory text-xs uppercase tracking-widest font-semibold shadow-md transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span>Request a Custom Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

