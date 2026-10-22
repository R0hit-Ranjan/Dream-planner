import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const WhatsAppButton: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  const handleClick = () => {
    const link = buildWhatsAppLink({
      customMessage: "Hello! I am viewing your website and would love to check wedding photography availability and packages.",
    });
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Subtle Luxury Tooltip */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 bg-ivory/95 backdrop-blur-md rounded-full shadow-luxury border border-champagne-dark text-xs text-charcoal font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Chat with Rahul Ranjan</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setTooltipDismissed(true);
            }}
            className="text-charcoal-muted hover:text-charcoal p-0.5 ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        type="button"
        onClick={handleClick}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-ivory flex items-center justify-center shadow-luxury hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 group border-2 border-ivory"
        aria-label="Chat on WhatsApp with Your Dream Planner"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-ivory/20" />
      </button>
    </div>
  );
};
