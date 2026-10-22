import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, Heart, CheckCircle2, AlertCircle, MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface ContactFormProps {
  initialService?: string;
  initialPackage?: string;
}

interface FormData {
  name: string;
  partnerName: string;
  email: string;
  phone: string;
  weddingDate: string;
  weddingLocation: string;
  eventType: string;
  services: string[];
  estimatedBudget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  weddingDate?: string;
  weddingLocation?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService, initialPackage }) => {
  const location = useLocation();
  const routeState = location.state as { service?: string; package?: string } | null;
  const activeService = initialService || routeState?.service;
  const activePackage = initialPackage || routeState?.package;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    partnerName: '',
    email: '',
    phone: '',
    weddingDate: '',
    weddingLocation: '',
    eventType: 'Full Wedding Celebration',
    services: activeService ? [activeService] : activePackage ? [activePackage] : ['Candid Photography', 'Traditional Videography'],
    estimatedBudget: '',
    message: activePackage ? `Interested in ${activePackage} package.` : activeService ? `Interested in ${activeService}.` : '',
  });

  useEffect(() => {
    if (activeService) {
      setFormData((prev) => ({
        ...prev,
        services: Array.from(new Set([...prev.services, activeService])),
        message: prev.message ? `${prev.message}\nInterested in: ${activeService}` : `Interested in: ${activeService}`,
      }));
    }
  }, [activeService]);

  useEffect(() => {
    if (activePackage) {
      setFormData((prev) => ({
        ...prev,
        services: Array.from(new Set([...prev.services, activePackage])),
        message: `I would like to enquire about the ${activePackage} package.`,
      }));
    }
  }, [activePackage]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsAppLink, setWhatsAppLink] = useState('');

  const serviceOptions = [
    'Candid Photography',
    'Traditional Videography',
    'Wedding Films (Cinematic)',
    'Pre-Wedding Shoot',
    'Pre-Wedding Film',
    'Engagement / Roka Coverage',
    'Sangeet & Reception',
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone / WhatsApp number.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.weddingDate) {
      newErrors.weddingDate = 'Please select your wedding / event date.';
    }

    if (!formData.weddingLocation.trim()) {
      newErrors.weddingLocation = 'Please state your event city (e.g. Patna, Delhi, Lucknow).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleServiceToggle = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(srv);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== srv) };
      } else {
        return { ...prev, services: [...prev.services, srv] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Build the direct WhatsApp enquiry link as guaranteed fallback
    const link = buildWhatsAppLink({
      name: formData.name,
      partnerName: formData.partnerName,
      weddingDate: formData.weddingDate,
      weddingLocation: formData.weddingLocation,
      eventType: formData.eventType,
      services: formData.services,
      estimatedBudget: formData.estimatedBudget,
      customMessage: formData.message,
    });

    setWhatsAppLink(link);

    // Realistic processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-dark font-medium mb-3">
            <Heart className="w-3.5 h-3.5 text-rose" />
            <span>Begin Your Journey</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal mb-4">
            Let's Make Your Wedding Memories Timeless.
          </h2>

          <p className="text-sm sm:text-base text-charcoal-muted max-w-xl mx-auto font-light">
            Tell us about your wedding dreams, ceremonial dates, and vision. We will review our calendar and reply promptly with availability and custom pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Studio Contact & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-champagne-light/50 border border-champagne-dark/50 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-medium text-charcoal">
                Your Dream Planner Studio
              </h3>

              <p className="text-xs sm:text-sm text-charcoal-light font-light leading-relaxed">
                Directly overseen by founder <strong className="font-semibold text-charcoal">Rahul Ranjan</strong>. Every inquiry is personally reviewed to ensure our creative style aligns with your celebration.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-ivory text-gold shadow-sm border border-champagne-dark/50">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-charcoal-muted block">Studio Base</span>
                    <span className="text-sm font-medium text-charcoal">{siteConfig.brand.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-ivory text-gold shadow-sm border border-champagne-dark/50">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-charcoal-muted block">Direct Consultation / WhatsApp</span>
                    <a
                      href={`tel:${siteConfig.brand.whatsappNumber}`}
                      className="text-sm font-medium text-charcoal hover:text-gold transition-colors"
                    >
                      {siteConfig.brand.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-ivory text-gold shadow-sm border border-champagne-dark/50">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-charcoal-muted block">Electronic Inquiries</span>
                    <a
                      href={`mailto:${siteConfig.brand.email}`}
                      className="text-sm font-medium text-charcoal hover:text-gold transition-colors"
                    >
                      {siteConfig.brand.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-ivory text-gold shadow-sm border border-champagne-dark/50">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-charcoal-muted block">Response Time</span>
                    <span className="text-sm font-medium text-charcoal">Within 24 business hours</span>
                  </div>
                </div>
              </div>

              {/* Direct Instant WhatsApp Banner */}
              <div className="pt-4 border-t border-champagne-dark/40">
                <div className="p-4 rounded-xl bg-ivory border border-gold/40 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-semibold text-charcoal block">Prefer instant WhatsApp chat?</span>
                    <span className="text-[11px] text-charcoal-muted">Chat directly with Rahul Ranjan</span>
                  </div>
                  <a
                    href={buildWhatsAppLink({ customMessage: "Hello! I am reaching out to enquire about wedding photography availability." })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-ivory shadow-sm transition-colors"
                    aria-label="Direct WhatsApp Message"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Travel reminder */}
            <div className="p-4 rounded-xl bg-ivory border border-champagne-dark/50 text-[11px] text-charcoal-muted leading-relaxed">
              <strong>Outstation Note:</strong> We travel to Delhi, Lucknow, Mughalsarai, and any destination in India. Travel &amp; stay arrangements are managed transparently.
            </div>
          </div>

          {/* Right Column: Interactive Wedding Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-ivory rounded-3xl p-6 sm:p-10 border border-champagne-dark/60 shadow-luxury">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
                    Thank You, {formData.name}!
                  </h3>

                  <p className="text-sm sm:text-base text-charcoal-light font-light max-w-md mx-auto leading-relaxed">
                    Your wedding enquiry details have been compiled. To ensure the fastest response and guarantee your dates aren't double-booked, proceed via WhatsApp below.
                  </p>

                  <div className="p-5 rounded-2xl bg-champagne-light/50 border border-champagne-dark/40 max-w-md mx-auto text-left text-xs space-y-1.5">
                    <p><strong>Date:</strong> {formData.weddingDate}</p>
                    <p><strong>Location:</strong> {formData.weddingLocation}</p>
                    <p><strong>Selected:</strong> {formData.services.join(', ') || 'Custom Coverage'}</p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={whatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-ivory text-xs uppercase tracking-widest font-semibold shadow-md transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Enquiry to WhatsApp Now</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                      }}
                      className="w-full sm:w-auto text-xs uppercase tracking-wider text-charcoal-muted hover:text-charcoal py-3 px-4 font-medium"
                    >
                      Edit Details
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Names */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                        Your Full Name <span className="text-rose-dark">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ananya Sharma"
                        className={`w-full px-4 py-3 rounded-xl border bg-ivory/80 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                          errors.name ? 'border-rose-dark' : 'border-champagne-dark'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-dark mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="partnerName" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                        Partner's Name <span className="text-charcoal-muted font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="partnerName"
                        value={formData.partnerName}
                        onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
                        placeholder="e.g. Priyanshu Verma"
                        className="w-full px-4 py-3 rounded-xl border border-champagne-dark bg-ivory/80 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Contact Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                        Phone / WhatsApp Number <span className="text-rose-dark">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl border bg-ivory/80 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                          errors.phone ? 'border-rose-dark' : 'border-champagne-dark'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-dark mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                        Email Address <span className="text-rose-dark">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ananya@example.com"
                        className={`w-full px-4 py-3 rounded-xl border bg-ivory/80 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                          errors.email ? 'border-rose-dark' : 'border-champagne-dark'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-dark mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Wedding Date & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="weddingDate" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                        Wedding / Event Date <span className="text-rose-dark">*</span>
                      </label>
                      <input
                        type="date"
                        id="weddingDate"
                        value={formData.weddingDate}
                        onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border bg-ivory/80 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                          errors.weddingDate ? 'border-rose-dark' : 'border-champagne-dark'
                        }`}
                      />
                      {errors.weddingDate && (
                        <p className="text-[11px] text-rose-dark mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.weddingDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="weddingLocation" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                        Wedding Location / City <span className="text-rose-dark">*</span>
                      </label>
                      <input
                        type="text"
                        id="weddingLocation"
                        value={formData.weddingLocation}
                        onChange={(e) => setFormData({ ...formData, weddingLocation: e.target.value })}
                        placeholder="e.g. Patna / Lucknow / Delhi"
                        className={`w-full px-4 py-3 rounded-xl border bg-ivory/80 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                          errors.weddingLocation ? 'border-rose-dark' : 'border-champagne-dark'
                        }`}
                      />
                      {errors.weddingLocation && (
                        <p className="text-[11px] text-rose-dark mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.weddingLocation}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Event Type & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="eventType" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                        Event Type
                      </label>
                      <select
                        id="eventType"
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-champagne-dark bg-ivory/80 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
                      >
                        <option value="Full Wedding Celebration">Full Wedding Celebration (1-3 Days)</option>
                        <option value="Pre-Wedding Shoot Only">Pre-Wedding Shoot Only</option>
                        <option value="Engagement / Roka Ceremony">Engagement / Roka Ceremony</option>
                        <option value="Sangeet / Mehendi Function">Sangeet / Mehendi Function</option>
                        <option value="Reception Only">Reception Only</option>
                        <option value="Destination Wedding">Destination Wedding</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="estimatedBudget" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                        Estimated Budget <span className="text-charcoal-muted font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="estimatedBudget"
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        placeholder="e.g. ₹60,000 - ₹1,00,000"
                        className="w-full px-4 py-3 rounded-xl border border-champagne-dark bg-ivory/80 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
                      />
                    </div>
                  </div>

                  {/* Services Checklist */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                      Services Required
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {serviceOptions.map((service) => {
                        const isChecked = formData.services.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => handleServiceToggle(service)}
                            className={`p-2.5 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-colors ${
                              isChecked
                                ? 'bg-champagne-light border-gold text-charcoal'
                                : 'bg-ivory/60 border-champagne-dark/50 text-charcoal-light hover:border-gold/50'
                            }`}
                          >
                            <span>{service}</span>
                            <div
                              className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                                isChecked ? 'bg-gold border-gold text-ivory' : 'border-champagne-dark'
                              }`}
                            >
                              {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tell us about your wedding */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                      Tell Us About Your Wedding <span className="text-charcoal-muted font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about venues, ceremonies, or specific moments you want us to highlight..."
                      className="w-full px-4 py-3 rounded-xl border border-champagne-dark bg-ivory/80 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl bg-gold hover:bg-gold-dark text-ivory text-xs sm:text-sm uppercase tracking-widest font-semibold shadow-luxury hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-ivory border-t-transparent rounded-full animate-spin" />
                          <span>Checking Date Availability...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Check Our Availability</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-charcoal-muted mt-3">
                      🔒 No spam. Instant direct WhatsApp connection with our booking calendar.
                    </p>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
