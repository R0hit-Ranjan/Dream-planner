import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig, WeddingStory } from '../config/siteConfig';
import { StoryModal } from './StoryModal';

export const WeddingStories: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<WeddingStory | null>(null);

  return (
    <section id="stories" className="py-20 sm:py-28 bg-champagne-light/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-dark font-medium mb-3">
              <Heart className="w-3.5 h-3.5 text-rose" />
              <span>Curated Love Chronicles</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal">
              Signature Wedding Stories
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted mt-3 font-light">
              Explore how we translate authentic Indian wedding rituals and intimacy into enduring visual legacies.
            </p>
          </div>

          <div className="text-xs text-charcoal-muted border-l-2 border-gold pl-4 max-w-xs hidden md:block">
            Documented across Patna, Bihar, and destination celebrations nationwide.
          </div>
        </div>

        {/* Staggered Editorial Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.weddingStories.map((story, index) => {
            return (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group flex flex-col bg-ivory rounded-2xl overflow-hidden border border-champagne-dark/50 shadow-sm hover:shadow-luxury transition-all duration-500 hover:-translate-y-1"
              >
                {/* Cover Image */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-champagne-light">
                  <img
                    src={story.coverImage}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider bg-ivory/90 backdrop-blur-md text-charcoal font-semibold shadow-sm">
                      {story.category}
                    </span>
                  </div>

                  {/* Location Tag */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-1 text-xs text-ivory drop-shadow-sm font-medium">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span>{story.location}</span>
                  </div>
                </div>

                {/* Card Narrative */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-charcoal group-hover:text-gold-dark transition-colors mb-1">
                      {story.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-rose-dark font-medium mb-3">
                      {story.subtitle}
                    </p>
                    <p className="text-sm text-charcoal-light font-light leading-relaxed line-clamp-3 mb-4">
                      {story.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-champagne-dark/40 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedStory(story)}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-charcoal hover:text-gold transition-colors"
                    >
                      <span>View Story &amp; Gallery</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] text-charcoal-muted">
                      {story.year}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Narrative sample disclaimer note */}
        <div className="mt-8 text-center text-[11px] text-charcoal-muted">
          <p className="inline-flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-gold" />
            <span>Sample editorial stories for portfolio showcase. Verified client stories are added progressively.</span>
          </p>
        </div>

      </div>

      {/* Story Details Modal */}
      <StoryModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
      />
    </section>
  );
};
