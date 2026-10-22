import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart, Film, ExternalLink, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface InstagramPost {
  id: string;
  image: string;
  type: 'reel' | 'photo';
  caption: string;
  likes: string;
  location: string;
  url: string;
}

export const InstagramFeed: React.FC = () => {
  const instagramUrl = siteConfig.brand.instagram;
  const instagramHandle = siteConfig.brand.instagramHandle || '@_banjaara111_';

  const posts: InstagramPost[] = [
    {
      id: 'ig-1',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=900&auto=format&fit=crop',
      type: 'reel',
      caption: 'The golden hour Jaimala. Raw joy, rose petals, and a lifetime promise begins.',
      likes: '1.4k',
      location: 'Patna, Bihar',
      url: instagramUrl,
    },
    {
      id: 'ig-2',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop',
      type: 'photo',
      caption: 'A quiet teardrop of gratitude during the sacred sindoor ritual. No posing, pure truth.',
      likes: '980',
      location: 'Patna, Bihar',
      url: instagramUrl,
    },
    {
      id: 'ig-3',
      image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=900&auto=format&fit=crop',
      type: 'photo',
      caption: 'Sunset riverside whispers before the big wedding week. Pre-wedding intimacy.',
      likes: '1.8k',
      location: 'Ganga Ghats, Patna',
      url: instagramUrl,
    },
    {
      id: 'ig-4',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=900&auto=format&fit=crop',
      type: 'reel',
      caption: 'Awadhi royal vibes in Lucknow! Cinematic teaser sequence from our destination shoot.',
      likes: '2.5k',
      location: 'Lucknow, UP',
      url: instagramUrl,
    },
    {
      id: 'ig-5',
      image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=900&auto=format&fit=crop',
      type: 'photo',
      caption: 'When the entire family joins the Mehndi circle. Songs, laughter, and heirloom gold.',
      likes: '890',
      location: 'Patna, Bihar',
      url: instagramUrl,
    },
    {
      id: 'ig-6',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
      type: 'reel',
      caption: 'Sangeet night energy! Dancing like there is no tomorrow under the fairy lights.',
      likes: '2.1k',
      location: 'Delhi NCR',
      url: instagramUrl,
    },
  ];

  return (
    <section id="instagram" className="py-20 sm:py-28 bg-ivory relative border-t border-champagne-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-light border border-gold/40 text-xs font-semibold text-charcoal hover:text-gold transition-colors mb-3 shadow-xs"
            >
              <Instagram className="w-4 h-4 text-rose-dark" />
              <span>Follow Rahul Ranjan on Instagram:</span>
              <span className="text-gold-dark font-mono">{instagramHandle}</span>
              <ExternalLink className="w-3 h-3 text-charcoal-muted ml-0.5" />
            </a>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal">
              Live From The Lens
            </h2>

            <p className="text-sm sm:text-base text-charcoal-muted mt-3 font-light">
              Catch recent wedding highlights, reel teasers, and unscripted moments shared directly by Rahul Ranjan on his official handle.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal hover:bg-gold text-ivory text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm"
            >
              <Instagram className="w-4 h-4" />
              <span>View Full Instagram Feed</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 6-Card Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((post, idx) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative aspect-[9/14] rounded-xl overflow-hidden bg-champagne-light border border-champagne-dark/50 shadow-xs hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 block"
            >
              {/* Photo / Thumbnail */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Type Badge (Reel vs Photo) */}
              <div className="absolute top-2.5 right-2.5 z-10 p-1.5 rounded-full bg-charcoal/60 backdrop-blur-md text-ivory">
                {post.type === 'reel' ? (
                  <Film className="w-3 h-3 text-champagne" />
                ) : (
                  <Instagram className="w-3 h-3 text-champagne" />
                )}
              </div>

              {/* Bottom Details Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3.5 flex flex-col justify-end text-ivory">
                <div className="flex items-center gap-1.5 text-xs text-rose-light mb-1">
                  <Heart className="w-3.5 h-3.5 fill-rose text-rose" />
                  <span className="font-semibold text-[11px]">{post.likes}</span>
                </div>
                <p className="text-[10px] text-ivory/90 line-clamp-3 leading-snug mb-2 font-light">
                  {post.caption}
                </p>
                <div className="flex items-center gap-1 text-[9px] uppercase tracking-wider text-gold font-medium">
                  <span>Open on Instagram</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </div>
              </div>

              {/* Subtle permanent watermark */}
              <div className="absolute bottom-2 left-2 z-10 px-2 py-0.5 rounded bg-charcoal/50 backdrop-blur-sm text-[9px] text-ivory/80 group-hover:opacity-0 transition-opacity">
                {post.location}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Info banner */}
        <div className="mt-10 p-4 rounded-xl bg-champagne-light/50 border border-champagne-dark/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal-muted">
          <p className="text-center sm:text-left">
            💡 <strong>Want to see real-time wedding stories?</strong> Check Rahul's daily story updates and behind-the-scenes moments on Instagram.
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-dark font-semibold uppercase tracking-wider hover:underline whitespace-nowrap"
          >
            Visit @_banjaara111_ →
          </a>
        </div>

      </div>
    </section>
  );
};

