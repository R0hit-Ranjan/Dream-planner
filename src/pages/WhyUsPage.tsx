import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Locations } from '../components/Locations';
import { Testimonials } from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';

export const WhyUsPage: React.FC = () => {
  return (
    <div className="bg-ivory min-h-screen">
      <PageHeader
        badge="Our Core Principles"
        title="Why Choose Your Dream Planner"
        subtitle="Uncompromising focus on candid intimacy, sacred ritual documentation, and synchronized photo & film storytelling without intrusive staging."
      />
      <WhyChooseUs />
      <Locations />
      <Testimonials />

      <div className="py-16 bg-champagne-light/50 border-t border-champagne-dark/40 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-3">
            Let's create timeless memories together
          </h2>
          <p className="text-sm text-charcoal-muted mb-6">
            Meet directly with Rahul Ranjan to plan your wedding coverage.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-dark text-ivory text-xs uppercase tracking-widest font-semibold shadow-md transition-colors"
          >
            <Heart className="w-4 h-4 fill-ivory/20" />
            <span>Book a Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

