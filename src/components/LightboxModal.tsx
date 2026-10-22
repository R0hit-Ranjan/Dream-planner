import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Tag, Heart } from 'lucide-react';
import { PortfolioItem } from '../config/siteConfig';

interface LightboxModalProps {
  isOpen: boolean;
  activeItem: PortfolioItem | null;
  items: PortfolioItem[];
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  activeItem,
  items,
  onClose,
  onNavigate,
}) => {
  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate('next');
      if (e.key === 'ArrowLeft') onNavigate('prev');
    },
    [isOpen, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown, isOpen]);

  // Touch gesture handling for mobile swipe
  const touchStartX = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        onNavigate('next');
      } else {
        onNavigate('prev');
      }
    }
    touchStartX.current = null;
  };

  if (!isOpen || !activeItem) return null;

  const currentIndex = items.findIndex((i) => i.id === activeItem.id);
  const totalItems = items.length;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-md p-2 sm:p-6"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-3 rounded-full bg-ivory/10 hover:bg-ivory/20 text-ivory backdrop-blur-md border border-ivory/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Counter Badge */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50 px-3.5 py-1.5 rounded-full bg-ivory/15 backdrop-blur-md text-ivory text-xs font-mono border border-ivory/20">
          {currentIndex + 1} / {totalItems}
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate('prev');
          }}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-ivory/10 hover:bg-ivory/25 text-ivory backdrop-blur-md border border-ivory/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Previous photograph"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate('next');
          }}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-ivory/10 hover:bg-ivory/25 text-ivory backdrop-blur-md border border-ivory/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Next photograph"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Central Card Container */}
        <motion.div
          key={activeItem.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl max-h-[90vh] w-full bg-ivory rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-champagne-dark/40"
        >
          {/* Main Visual */}
          <div className="relative flex-1 bg-charcoal-dark min-h-[300px] sm:min-h-[420px] max-h-[60vh] md:max-h-[85vh] flex items-center justify-center overflow-hidden">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="w-full h-full object-contain max-h-[85vh]"
            />
            {activeItem.isVideo && (
              <div className="absolute inset-0 bg-charcoal/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gold/90 text-ivory flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[12px] border-l-ivory ml-1" />
                </div>
              </div>
            )}
          </div>

          {/* Details Sidebar / Bottom Panel */}
          <div className="w-full md:w-80 p-6 flex flex-col justify-between bg-ivory border-t md:border-t-0 md:border-l border-champagne-dark/30 overflow-y-auto max-h-[35vh] md:max-h-[85vh]">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold-dark font-medium">
                <Tag className="w-3.5 h-3.5 text-gold" />
                <span>{activeItem.categoryLabel}</span>
              </div>

              <h3 className="font-serif text-2xl text-charcoal font-medium leading-snug">
                {activeItem.title}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-charcoal-muted">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>{activeItem.location}</span>
              </div>

              <p className="text-sm text-charcoal-light leading-relaxed">
                {activeItem.caption}
              </p>

              {activeItem.storyQuote && (
                <div className="p-3 rounded-lg bg-champagne-light/70 border border-champagne-dark/30 text-xs italic font-serif text-charcoal">
                  "{activeItem.storyQuote}"
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-champagne-dark/30 mt-6 space-y-3">
              <Link
                to="/contact"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gold hover:bg-gold-dark text-ivory text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <Heart className="w-3.5 h-3.5 fill-ivory/20" />
                <span>Enquire For This Style</span>
              </Link>
              <p className="text-center text-[10px] text-charcoal-muted">
                Captured with natural tones by Your Dream Planner
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
