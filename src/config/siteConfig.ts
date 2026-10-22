export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  badge?: string;
}

export interface PackageItem {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  summary: string;
  deliverables: string[];
  recommended?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'candid' | 'traditional' | 'films' | 'prewedding' | 'engagement' | 'sangeet';
  categoryLabel: string;
  location: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
  caption: string;
  storyQuote?: string;
  isVideo?: boolean;
  videoUrl?: string;
}

export interface WeddingStory {
  id: string;
  title: string;
  subtitle: string;
  couple: string;
  location: string;
  year: string;
  category: string;
  coverImage: string;
  description: string;
  highlights: string[];
  gallery: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  couple: string;
  event: string;
  location: string;
  date: string;
  isSample: boolean;
}

export const siteConfig = {
  brand: {
    name: "Your Dream Planner",
    shortName: "YDP",
    logo: "/images/logo-transparent.png",
    tagline: "Your Love Story, Beautifully Told.",
    owner: "Rahul Ranjan",
    establishedYear: "2023",
    location: "Kumhrar, Patna, Bihar, India",
    addressSummary: "Kumhrar, Patna — 800026, Bihar, India",
    // Configurable business WhatsApp number (can be overwritten via env VITE_WHATSAPP_NUMBER)
    whatsappNumber: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_WHATSAPP_NUMBER) || "918789048556",
    displayPhone: "+91 87890 48556",
    email: "enquiry@yourdreamplanner.in",
    instagram: "https://www.instagram.com/_banjaara111_/",
    instagramHandle: "@_banjaara111_",
    youtube: "https://youtube.com/@yourdreamplanner",
  },

  travelPolicy: {
    baseCity: "Patna, Bihar",
    outstationCovered: ["Patna", "Delhi", "Lucknow", "Mughalsarai"],
    policyStatement: "Based in Kumhrar, Patna, our team is always excited to travel outstation across India. Travel and accommodation expenses for outstation shoots are borne by the client.",
  },

  hero: {
    headline: "Every Love Story Deserves to Be Remembered.",
    subheadline: "Honest moments. Timeless photographs. Cinematic memories. We capture the emotions, traditions, and beautiful little moments that make your wedding uniquely yours.",
    primaryCta: "Plan Your Wedding",
    secondaryCta: "Explore Our Stories",
    bgImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1920&auto=format&fit=crop", // Majestic Indian Bride & Groom portrait
    heroAccentImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop", // Intricate Mehndi details
  },

  story: {
    heading: "Behind Every Beautiful Photograph Is a Beautiful Story.",
    body1: "At Your Dream Planner, we believe a wedding is more than a celebration. It is a collection of emotions, traditions, laughter, happy tears, and moments that deserve to live forever.",
    body2: "Since beginning our journey in 2023, we have been documenting love stories through thoughtful photography and cinematic filmmaking, creating memories couples can return to for a lifetime.",
    ownerQuote: "We don't just capture how your wedding looks; we preserve how it felt.",
    milestones: [
      { year: "2023", title: "The Journey Begins", desc: "Founded in Kumhrar, Patna by Rahul Ranjan with a vision for honest wedding storytelling." },
      { year: "2024", title: "Expanding Horizons", desc: "Shot weddings across Bihar and outstation destinations including Delhi, Lucknow, and Mughalsarai." },
      { year: "Today", title: "Timeless Memories", desc: "Specializing in traditional rituals, candid intimacy, and cinematic wedding films." },
    ]
  },

  services: [
    {
      id: "candid",
      title: "Candid Photography",
      tagline: "Unscripted, raw & heartfelt moments",
      description: "Genuine emotions, spontaneous laughter, and beautiful moments captured naturally without staged poses or awkward interruptions.",
      features: [
        "Spontaneous laughter & heartfelt tears",
        "Subtle guest reactions & unposed emotion",
        "High-definition color grading with natural tones",
        "Full day candid coverage"
      ],
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      badge: "Signature Specialty"
    },
    {
      id: "traditional-video",
      title: "Traditional Videography",
      tagline: "Sacred rituals meticulously preserved",
      description: "Meaningful wedding rituals and celebrations documented with care, ensuring every elder's blessing and ancestral tradition is recorded.",
      features: [
        "Comprehensive coverage of rituals from start to finish",
        "High-fidelity crystal clear audio recording",
        "Master ceremony documentation",
        "Multi-camera setup for complete coverage"
      ],
      image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "wedding-films",
      title: "Wedding Films",
      tagline: "Bespoke cinematic storytelling",
      description: "Cinematic storytelling that brings the emotions of your wedding day back to life. Crafted with cinema lenses, cinematic music, and poetic pacing.",
      features: [
        "Cinematic teaser / wedding highlight reel",
        "Full-length extended wedding film",
        "Artistic color grading & sound design",
        "Licensed emotional soundtrack curation"
      ],
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
      badge: "Most Loved"
    },
    {
      id: "prewedding-shoots",
      title: "Pre-Wedding Shoots",
      tagline: "Your romance before the big day",
      description: "Personalized couple photography that celebrates your story before the big day, in scenic landscapes, heritage spots, or cozy romantic settings.",
      features: [
        "Concept development & location scouting",
        "Multiple styling & outfit transitions",
        "Comfortable, guided romantic posing",
        "High-resolution magazine-grade edits"
      ],
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "prewedding-films",
      title: "Pre-Wedding Films",
      tagline: "A mini movie of your love story",
      description: "Cinematic visuals capturing your connection, shared laughter, and unique personality set against dreamy backgrounds.",
      features: [
        "Cinematic couple interviews & audio voiceovers",
        "Drone aerial perspectives (where permitted)",
        "Storyboarding tailored to your love journey",
        "4K cinematic master delivery"
      ],
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "functions",
      title: "Engagement, Roka, Sangeet & Reception",
      tagline: "The celebrations that lead to forever",
      description: "Thoughtful coverage for the celebrations leading up to and surrounding your wedding day, ensuring no pre-wedding milestone goes unnoticed.",
      features: [
        "High-energy Sangeet dance performances",
        "Warm intimate Roka & Engagement gatherings",
        "Vibrant Haldi & Mehendi festivities",
        "Grand evening Reception portraits"
      ],
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop"
    }
  ] as ServiceItem[],

  packages: [
    {
      id: "photography-essentials",
      name: "Photography Essentials",
      badge: "Traditional + Candid",
      price: "₹20,000",
      period: "per day",
      summary: "Ideal for couples seeking comprehensive photo documentation of their celebrations with both candid emotional captures and traditional portraits.",
      deliverables: [
        "Candid and traditional photography coverage",
        "Dedicated coverage team for your day",
        "High-resolution color corrected digital photos",
        "Curated best-moments gallery for quick sharing",
        "Travel in Patna included"
      ],
      recommended: false
    },
    {
      id: "complete-wedding-story",
      name: "Complete Wedding Story",
      badge: "Most Popular",
      price: "₹30,000",
      period: "per day",
      summary: "Our hallmark all-inclusive package capturing the full visual breadth of your wedding — combining still photography, full video, and a cinematic wedding film.",
      deliverables: [
        "Photography coverage (Candid + Traditional)",
        "Full traditional video coverage of sacred rituals",
        "Cinematic video highlight film",
        "Audio recorded ceremony vows & blessings",
        "Comprehensive coverage of morning to night functions"
      ],
      recommended: true
    },
    {
      id: "prewedding-experience",
      name: "Pre-Wedding Experience",
      badge: "Artistic & Romantic",
      price: "₹35,000",
      period: "per day",
      summary: "An exclusive, intimate full-day creative shoot dedicated solely to the couple, celebrating your chemistry before the wedding hustle begins.",
      deliverables: [
        "Dedicated pre-wedding shoot coverage",
        "Concept guidance & location coordination",
        "Multiple wardrobe and mood changes",
        "High-resolution edited romantic portraits",
        "Creative art direction by Rahul Ranjan & team"
      ],
      recommended: false
    }
  ] as PackageItem[],

  packagesDisclaimer: "Final pricing depends on your event requirements, dates, location, and selected deliverables. Please contact us for a personalized quotation.",

  portfolio: [
    {
      id: "port-1",
      title: "Sacred Varmala Exchange",
      category: "traditional",
      categoryLabel: "Traditional Wedding Photography",
      location: "Patna, Bihar",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
      aspect: "portrait",
      caption: "The timeless garland exchange steeped in ancient tradition and golden warmth.",
      storyQuote: "A moment of quiet sanctity amid festive cheers."
    },
    {
      id: "port-2",
      title: "Golden Hour Sindoor Ritual",
      category: "candid",
      categoryLabel: "Candid Moments",
      location: "Patna, Bihar",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
      aspect: "square",
      caption: "Spontaneous teardrop of joy as vows are sealed for eternity.",
      storyQuote: "True candid beauty happens when no one is posing."
    },
    {
      id: "port-3",
      title: "Whispered Promises",
      category: "prewedding",
      categoryLabel: "Pre-Wedding Stories",
      location: "Ganga Ghats, Patna",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop",
      aspect: "landscape",
      caption: "Sunset river breeze and quiet romance captured before the wedding week.",
      storyQuote: "Two souls finding their rhythm."
    },
    {
      id: "port-4",
      title: "Royal Baraat Procession",
      category: "films",
      categoryLabel: "Wedding Films",
      location: "Lucknow",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
      aspect: "landscape",
      caption: "Cinematic drone & steady-cam sequence of the groom's grand entrance.",
      storyQuote: "Energy, brass bands, and pure celebratory delirium.",
      isVideo: true
    },
    {
      id: "port-5",
      title: "Mehndi Whispers & Laughter",
      category: "sangeet",
      categoryLabel: "Sangeet & Reception",
      location: "Patna, Bihar",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
      aspect: "portrait",
      caption: "Intricate henna patterns surrounded by singing cousins and joyful banter.",
      storyQuote: "Colors that sing the song of celebration."
    },
    {
      id: "port-6",
      title: "Intimate Ring Exchange",
      category: "engagement",
      categoryLabel: "Engagement & Roka",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop",
      aspect: "square",
      caption: "The gentle clasp of hands marking the official beginning of togetherness.",
      storyQuote: "A promise written in sparkling stones and smiles."
    },
    {
      id: "port-7",
      title: "Groom's Contemplation",
      category: "traditional",
      categoryLabel: "Traditional Wedding Photography",
      location: "Mughalsarai",
      image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?q=80&w=1200&auto=format&fit=crop",
      aspect: "portrait",
      caption: "Adjusting the safa before taking steps toward the mandap.",
      storyQuote: "Elegance wrapped in heritage."
    },
    {
      id: "port-8",
      title: "Sangeet Stage Radiance",
      category: "sangeet",
      categoryLabel: "Sangeet & Reception",
      location: "Patna, Bihar",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      aspect: "landscape",
      caption: "Electrifying couple dance under starry fairy lights.",
      storyQuote: "Dancing like nobody is watching, yet everyone is mesmerized."
    },
    {
      id: "port-9",
      title: "Agni Saakshi (The Sacred Seven Pheras)",
      category: "traditional",
      categoryLabel: "Traditional Wedding Photography",
      location: "Patna, Bihar",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop",
      aspect: "landscape",
      caption: "Walking the sacred fire together as eternal companions.",
      storyQuote: "Seven steps, seven sacred lifetimes."
    }
  ] as PortfolioItem[],

  weddingStories: [
    {
      id: "story-patna-heritage",
      title: "Ananya & Priyanshu",
      subtitle: "Traditional Grandeur in Patna",
      couple: "Ananya & Priyanshu",
      location: "Patna, Bihar",
      year: "2024",
      category: "Traditional & Candid Wedding",
      coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
      description: "An authentic Mithila-infused celebration held in Patna, where timeless Vedic rituals were accompanied by spontaneous tears of joy and endless laughter during the Jaimala.",
      highlights: [
        "Vedic rituals documented with reverence",
        "Raw emotional vidai captures",
        "Intricate red bridal lehenga and heirloom jewellery"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: "story-lucknow-regal",
      title: "Meera & Rohan",
      subtitle: "An Awadhi Destination Affair",
      couple: "Meera & Rohan",
      location: "Lucknow, Uttar Pradesh",
      year: "2024",
      category: "Cinematic Film & Candid Photo",
      coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
      description: "A destination wedding that traveled to Lucknow. Our team documented royal courtyards, poetic qawwali nights, and a high-spirited sangeet dance duel that lasted until dawn.",
      highlights: [
        "Outstation production with multi-camera crew",
        "Cinematic teaser film capturing Awadhi architecture",
        "Unposed couple portraits in historic gardens"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544077960-604201fe74bc?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: "story-sunset-prewedding",
      title: "Shreya & Aditya",
      subtitle: "Ghats of Patna & Riverside Breezes",
      couple: "Shreya & Aditya",
      location: "Patna, Bihar",
      year: "2024",
      category: "Pre-Wedding Story",
      coverImage: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop",
      description: "From tranquil boat rides at sunrise to cozy cafe conversations in Patna, Aditya and Shreya's pre-wedding shoot captured genuine companionship without artificial posing.",
      highlights: [
        "Golden hour natural light photography",
        "Scenic heritage boat sequence",
        "Bespoke music video concept"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop"
      ]
    }
  ] as WeddingStory[],

  whyChooseUs: [
    {
      title: "Traditional + Candid Mastery",
      description: "We bridge the gap between sacred elder rituals and modern unposed candid moments so no generation feels left out.",
      icon: "Camera"
    },
    {
      title: "Emotion-Focused Storytelling",
      description: "We don't count clicks. We look for fleeting glances, suppressed chuckles, proud parents, and genuine connections.",
      icon: "Heart"
    },
    {
      title: "Photo & Film Harmony",
      description: "A synchronized photography and videography crew working together seamlessly, without blocking each other's frames.",
      icon: "Film"
    },
    {
      title: "From Pre-Wedding to Reception",
      description: "Comprehensive visual documentation covering your entire journey from engagement shoots to final vidai.",
      icon: "Sparkles"
    },
    {
      title: "Destination & Outstation Ready",
      description: "Experienced in outstation travels across Delhi, Lucknow, Mughalsarai, and beyond with transparent logistics.",
      icon: "Compass"
    },
    {
      title: "Personalized Consultation",
      description: "Direct discussions with Rahul Ranjan to understand your family traditions, key timings, and personal preferences.",
      icon: "Users"
    }
  ],

  testimonials: [
    {
      id: "t1",
      quote: "Rahul and his team captured our Patna wedding with such sensitivity. Looking at our photos, we relive the laughter, the tears, and every sacred ritual just as it happened.",
      couple: "Priya & Amit",
      event: "Patna Wedding & Reception",
      location: "Patna, Bihar",
      date: "Sample Client Story",
      isSample: true
    },
    {
      id: "t2",
      quote: "The wedding film was beyond cinematic! They blended our traditional phera rituals with modern music and candid emotions. All our relatives in Delhi were amazed.",
      couple: "Neha & Varun",
      event: "Outstation Wedding",
      location: "Lucknow / Delhi",
      date: "Sample Client Story",
      isSample: true
    },
    {
      id: "t3",
      quote: "Our pre-wedding shoot was so comfortable. Neither of us liked posing for photos, but Rahul made it feel like a romantic stroll. The pictures are simply breathtaking.",
      couple: "Ritu & Kunal",
      event: "Pre-Wedding Shoot",
      location: "Patna",
      date: "Sample Client Story",
      isSample: true
    }
  ] as TestimonialItem[],

  sampleNotice: "Note: Real testimonials and verified client reviews will replace sample placeholders upon client authorization."
};
