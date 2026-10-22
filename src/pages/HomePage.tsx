import React from 'react';
import { Hero } from '../components/Hero';
import { OurStory } from '../components/OurStory';
import { Portfolio } from '../components/Portfolio';
import { WeddingStories } from '../components/WeddingStories';
import { InstagramFeed } from '../components/InstagramFeed';
import { Services } from '../components/Services';
import { Packages } from '../components/Packages';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Locations } from '../components/Locations';
import { Testimonials } from '../components/Testimonials';
import { ContactForm } from '../components/ContactForm';

interface HomePageProps {
  onOpenDateChecker: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenDateChecker }) => {
  return (
    <>
      <Hero onOpenDateChecker={onOpenDateChecker} />
      <OurStory />
      <Portfolio />
      <WeddingStories />
      <InstagramFeed />
      <Services />
      <Packages />
      <WhyChooseUs />
      <Locations />
      <Testimonials />
      <ContactForm />
    </>
  );
};

