import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { WeddingStories } from '../components/WeddingStories';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';

export const StoriesPage: React.FC = () => {
  return (
    <div className="bg-ivory min-h-screen">
      <PageHeader
        badge="Curated Love Chronicles"
        title="Wedding Stories"
        subtitle="Step inside our featured real celebrations — from Vedic Mithila traditions in Patna to destination Awadhi nights in Lucknow and sunset ghat pre-weddings."
      />
      <WeddingStories />

      <div className="py-16 bg-champagne-light/50 border-t border-champagne-dark/40 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-3">
            Ready to tell your own wedding story?
          </h2>
          <p className="text-sm text-charcoal-muted mb-6">
            Let us craft a timeless editorial archive for you and your family to cherish for generations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-dark text-ivory text-xs uppercase tracking-widest font-semibold shadow-md transition-colors"
          >
            <Heart className="w-4 h-4 fill-ivory/20" />
            <span>Start Your Story With Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

