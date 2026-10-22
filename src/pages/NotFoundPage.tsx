import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-champagne-light text-rose-dark border border-champagne-dark flex items-center justify-center mx-auto shadow-sm">
          <Heart className="w-8 h-8 fill-rose/20" />
        </div>

        <h1 className="font-serif text-5xl font-medium text-charcoal">
          404
        </h1>

        <h2 className="font-serif text-2xl text-charcoal">
          Story Not Found
        </h2>

        <p className="text-sm text-charcoal-muted leading-relaxed font-light">
          The page you are looking for may have moved or doesn't exist. Let's return to the gallery of memories.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-gold-dark text-ivory text-xs uppercase tracking-widest font-semibold shadow-md transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-champagne-dark text-charcoal hover:border-gold text-xs uppercase tracking-wider font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

