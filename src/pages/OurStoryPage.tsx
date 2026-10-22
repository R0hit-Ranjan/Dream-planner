import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { OurStory } from '../components/OurStory';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Locations } from '../components/Locations';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';

export const OurStoryPage: React.FC = () => {
  return (
    <div className="bg-ivory min-h-screen">
      <PageHeader
        badge="Our Heritage & Vision"
        title="Our Story"
        subtitle="Behind every beautiful photograph is an authentic story of laughter, sacred promises, and love documented since 2023 by Rahul Ranjan."
      />
      <OurStory />
      <WhyChooseUs />
      <Locations />

      {/* Page bottom CTA */}
      <div className="py-16 bg-champagne-light/50 border-t border-champagne-dark/40 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-3">
            Want us to chronicle your love story?
          </h2>
          <p className="text-sm text-charcoal-muted mb-6">
            We'd love to learn about your wedding dates, rituals, and ceremonies.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-dark text-ivory text-xs uppercase tracking-widest font-semibold shadow-md transition-colors"
          >
            <Heart className="w-4 h-4 fill-ivory/20" />
            <span>Connect With Rahul Ranjan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

