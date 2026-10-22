import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Eye, Film, Sparkles, MapPin } from 'lucide-react';
import { siteConfig, PortfolioItem } from '../config/siteConfig';
import { LightboxModal } from './LightboxModal';

type CategoryKey = 'all' | 'candid' | 'traditional' | 'films' | 'prewedding' | 'engagement' | 'sangeet';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const categories: { key: CategoryKey; label: string }[] = [
    { key: 'all', label: 'All Works' },
    { key: 'candid', label: 'Candid Moments' },
    { key: 'traditional', label: 'Traditional' },
    { key: 'films', label: 'Wedding Films' },
    { key: 'prewedding', label: 'Pre-Wedding' },
    { key: 'engagement', label: 'Engagement & Roka' },
    { key: 'sangeet', label: 'Sangeet & Reception' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? siteConfig.portfolio
    : siteConfig.portfolio.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (item: PortfolioItem) => {
    setActiveItem(item);
    setLightboxOpen(true);
  };

  const handleNavigateLightbox = (direction: 'next' | 'prev') => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setActiveItem(filteredItems[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setActiveItem(filteredItems[prevIndex]);
    }
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-dark font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>The Heart of Our Craft</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal mb-4">
            A Gallery of Unspoken Emotions
          </h2>

          <p className="text-sm sm:text-base text-charcoal-muted max-w-xl mx-auto font-light">
            Every frame is composed with an artistic eye for Indian wedding rituals, natural warm skin tones, and genuine human connections.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar px-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 border ${
                  isActive
                    ? 'bg-charcoal text-ivory border-charcoal shadow-sm'
                    : 'bg-ivory/80 text-charcoal-light border-champagne-dark/50 hover:border-gold hover:text-charcoal hover:bg-champagne-light'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              const isLarge = index % 5 === 0;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  onClick={() => handleOpenLightbox(item)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-champagne-light/50 border border-champagne-dark/40 shadow-sm hover:shadow-luxury transition-all duration-500 ${
                    isLarge ? 'sm:col-span-2 lg:col-span-2 aspect-[16/10]' : 'aspect-[4/5]'
                  }`}
                >
                  {/* Photo Visual */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-ivory" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider bg-ivory/90 backdrop-blur-md text-charcoal font-medium shadow-sm">
                      {item.categoryLabel}
                    </span>
                    {item.isVideo && (
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider bg-gold text-ivory font-semibold shadow-sm">
                        <Film className="w-3 h-3" /> Film
                      </span>
                    )}
                  </div>

                  {/* Bottom Information on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-ivory transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center gap-1.5 text-xs text-champagne-light mb-1">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      <span>{item.location}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-ivory mb-1">
                      {item.title}
                    </h3>

                    <p className="text-xs text-ivory/80 line-clamp-2 mb-3">
                      {item.caption}
                    </p>

                    <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold font-medium">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Full Photograph</span>
                    </div>
                  </div>

                  {/* Persistent subtle title on mobile */}
                  <div className="sm:hidden absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4 text-ivory">
                    <div className="font-serif text-base font-medium">{item.title}</div>
                    <div className="text-[10px] text-champagne-light">{item.location}</div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Component */}
        <LightboxModal
          isOpen={lightboxOpen}
          activeItem={activeItem}
          items={filteredItems}
          onClose={() => setLightboxOpen(false)}
          onNavigate={handleNavigateLightbox}
        />

        {/* Editorial Footnote */}
        <div className="mt-12 text-center text-xs text-charcoal-muted border-t border-champagne-dark/40 pt-6">
          <p className="flex items-center justify-center gap-2">
            <Camera className="w-3.5 h-3.5 text-gold" />
            <span>All imagery reflects traditional and candid wedding moments. Authentic client archives are updated per season.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
