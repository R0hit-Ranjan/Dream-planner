import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Packages } from '../components/Packages';
import { Locations } from '../components/Locations';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight } from 'lucide-react';

export const PackagesPage: React.FC = () => {
  return (
    <div className="bg-ivory min-h-screen">
      <PageHeader
        badge="Transparent Pricing"
        title="Packages & Investment"
        subtitle="Clear daily rates with no hidden surprises. Explore photography essentials, full cinematic coverage, or pre-wedding experiences."
      />
      <Packages />
      <Locations />

      <div className="py-16 bg-champagne-light/50 border-t border-champagne-dark/40 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-3">
            Have multiple events or special dates?
          </h2>
          <p className="text-sm text-charcoal-muted mb-6">
            Contact us directly for a comprehensive personalized quotation for your celebrations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-dark text-ivory text-xs uppercase tracking-widest font-semibold shadow-md transition-colors"
          >
            <Calculator className="w-4 h-4" />
            <span>Contact For Custom Package</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

