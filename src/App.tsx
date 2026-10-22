import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DateCheckerModal } from './components/DateCheckerModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';

// Code-split route pages (Modern React Programming Paradigm)
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const OurStoryPage = lazy(() => import('./pages/OurStoryPage').then((m) => ({ default: m.OurStoryPage })));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage').then((m) => ({ default: m.PortfolioPage })));
const StoriesPage = lazy(() => import('./pages/StoriesPage').then((m) => ({ default: m.StoriesPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const PackagesPage = lazy(() => import('./pages/PackagesPage').then((m) => ({ default: m.PackagesPage })));
const WhyUsPage = lazy(() => import('./pages/WhyUsPage').then((m) => ({ default: m.WhyUsPage })));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage').then((m) => ({ default: m.ReviewsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

// Refined Luxury Page Loading Fallback
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
      <div className="w-10 h-10 rounded-full border-2 border-champagne-dark border-t-gold animate-spin mb-3" />
      <span className="text-xs uppercase tracking-widest text-charcoal-muted font-serif">Your Dream Planner</span>
    </div>
  );
}

// Automatic Hash-to-Route Migrator (e.g. cleans old #stories -> /stories)
function HashRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    const hashMap: Record<string, string> = {
      story: '/story',
      portfolio: '/portfolio',
      stories: '/stories',
      services: '/services',
      packages: '/packages',
      'why-us': '/why-us',
      whyus: '/why-us',
      testimonials: '/reviews',
      reviews: '/reviews',
      contact: '/contact',
    };

    if (hashMap[hash]) {
      navigate(hashMap[hash], { replace: true });
    }
  }, [navigate]);

  return null;
}

export function App() {
  const [dateCheckerOpen, setDateCheckerOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-ivory text-charcoal font-sans selection:bg-champagne selection:text-charcoal relative flex flex-col justify-between">
        {/* Navigation scroll-to-top handler */}
        <ScrollToTop />
        <HashRedirect />

        {/* Global Navigation Bar */}
        <Navbar onOpenDateChecker={() => setDateCheckerOpen(true)} />

        {/* Dynamic Route Pages with Code Splitting */}
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage onOpenDateChecker={() => setDateCheckerOpen(true)} />} />
              <Route path="/story" element={<OurStoryPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/stories" element={<StoriesPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/packages" element={<PackagesPage />} />
              <Route path="/why-us" element={<WhyUsPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Calendar Date Availability Checker Modal */}
        <DateCheckerModal
          isOpen={dateCheckerOpen}
          onClose={() => setDateCheckerOpen(false)}
        />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
