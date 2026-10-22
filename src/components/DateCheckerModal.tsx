import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface DateCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DateCheckerModal: React.FC<DateCheckerModalProps> = ({ isOpen, onClose }) => {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('Patna, Bihar');
  const [serviceType, setServiceType] = useState('Complete Wedding (Photo + Video)');

  if (!isOpen) return null;

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) return;

    const link = buildWhatsAppLink({
      weddingDate: date,
      weddingLocation: location,
      eventType: serviceType,
      customMessage: `I am checking availability for ${date} in ${location} for ${serviceType}. Please let me know if Rahul Ranjan and the team are available!`,
    });

    window.open(link, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm">
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative max-w-md w-full bg-ivory rounded-2xl shadow-2xl p-6 sm:p-8 border border-champagne-dark z-10"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-charcoal-muted hover:text-charcoal hover:bg-champagne/40 transition-colors"
            aria-label="Close date checker"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold-dark font-medium mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Calendar Availability</span>
          </div>

          <h3 className="font-serif text-2xl font-medium text-charcoal mb-2">
            Check Your Wedding Date
          </h3>

          <p className="text-xs text-charcoal-muted font-light leading-relaxed mb-6">
            We accept a limited number of weddings per season to maintain pristine cinematic quality. Check if your auspicious muhurat date is open.
          </p>

          <form onSubmit={handleCheck} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                Your Wedding / Event Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-champagne-dark bg-champagne-light/30 text-xs sm:text-sm text-charcoal focus:ring-2 focus:ring-gold focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                Event City / Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Patna, Delhi, Lucknow..."
                  className="w-full px-4 py-2.5 rounded-xl border border-champagne-dark bg-champagne-light/30 text-xs sm:text-sm text-charcoal focus:ring-2 focus:ring-gold focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                Desired Coverage
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-champagne-dark bg-champagne-light/30 text-xs sm:text-sm text-charcoal focus:ring-2 focus:ring-gold focus:outline-none"
              >
                <option value="Complete Wedding (Photo + Video)">Complete Wedding (Photo + Video ₹30,000/day)</option>
                <option value="Photography Essentials (₹20,000/day)">Photography Essentials (₹20,000/day)</option>
                <option value="Pre-Wedding Shoot (₹35,000/day)">Pre-Wedding Shoot (₹35,000/day)</option>
                <option value="Multi-Day Grand Celebration">Multi-Day Grand Celebration</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gold hover:bg-gold-dark text-ivory text-xs uppercase tracking-widest font-semibold shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Verify Date on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          <p className="text-center text-[10px] text-charcoal-muted mt-4">
            Fast response directly from Rahul Ranjan &amp; Team
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
