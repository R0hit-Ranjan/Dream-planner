import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Testimonials } from '../components/Testimonials';
import { WeddingStories } from '../components/WeddingStories';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';

export const ReviewsPage: React.FC = () => {
  return (
    <div className="bg-ivory min-h-screen">
      <PageHeader
        badge="Client Experiences"
        title="Testimonials & Feedback"
        subtitle="Read feedback from couples who entrusted their wedding milestones, pre-wedding memories, and films to our studio."
      />
      <Testimonials />
      <WeddingStories />

      <div className="py-16 bg-champagne-light/50 border-t border-champagne-dark/40 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-3">
            Want to see our latest live wedding feeds?
          </h2>
          <p className="text-sm text-charcoal-muted mb-6">
            Follow our daily reels and stories on Instagram @_banjaara111_.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-dark text-ivory text-xs uppercase tracking-widest font-semibold shadow-md transition-colors"
          >
            <Heart className="w-4 h-4 fill-ivory/20" />
            <span>Plan Your Wedding</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

