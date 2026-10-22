import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Heart, CheckCircle2 } from 'lucide-react';
import { WeddingStory } from '../config/siteConfig';

interface StoryModalProps {
  story: WeddingStory | null;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ story, onClose }) => {
  useEffect(() => {
    if (story) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [story]);

  if (!story) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal/80 backdrop-blur-md">
        <div
          className="fixed inset-0"
          onClick={onClose}
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-4xl max-h-[90vh] w-full bg-ivory rounded-2xl shadow-2xl overflow-y-auto border border-champagne-dark z-10"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-ivory/80 hover:bg-ivory text-charcoal border border-champagne-dark shadow-sm transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Banner in Modal */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={story.coverImage}
              alt={story.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-ivory">
              <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider bg-gold text-ivory font-semibold shadow-sm inline-block mb-2">
                {story.category}
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-medium text-ivory">
                {story.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-xs text-champagne-light mt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  {story.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-gold" />
                  {story.year}
                </span>
              </div>
            </div>
          </div>

          {/* Story Narrative Content */}
          <div className="p-6 sm:p-10 space-y-8">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-charcoal mb-3">
                {story.subtitle}
              </h3>
              <p className="text-sm sm:text-base text-charcoal-light leading-relaxed font-light">
                {story.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="p-5 rounded-xl bg-champagne-light/60 border border-champagne-dark/40">
              <h4 className="text-xs uppercase tracking-widest text-charcoal font-semibold mb-3">
                Story Moments &amp; Visual Notes
              </h4>
              <ul className="space-y-2">
                {story.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-light">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Mini-Gallery */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-charcoal font-semibold mb-4">
                Selected Vignettes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {story.gallery.map((imgUrl, i) => (
                  <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden border border-champagne-dark shadow-sm">
                    <img
                      src={imgUrl}
                      alt={`Vignette ${i + 1} from ${story.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA in modal */}
            <div className="pt-6 border-t border-champagne-dark/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-charcoal-muted text-center sm:text-left">
                Want a similar timeless visual coverage for your wedding?
              </div>
              <Link
                to="/contact"
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-gold-dark text-ivory text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                <Heart className="w-3.5 h-3.5 fill-ivory/20" />
                <span>Discuss Your Wedding</span>
              </Link>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
