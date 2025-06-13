
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import OurStorySection from '@/components/OurStorySection';
import ProduceSection from '@/components/ProduceSection';
import FarmStoreSection from '@/components/FarmStoreSection';
import VisitUsSection from '@/components/VisitUsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OurStorySection />
      <ProduceSection />
      <FarmStoreSection />
      <VisitUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
