
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProduceSection from "@/components/ProduceSection";
import OurStorySection from "@/components/OurStorySection";
import VisitUsSection from "@/components/VisitUsSection";
import FarmStoreSection from "@/components/FarmStoreSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import NewsletterSuggestion from "@/components/NewsletterSuggestion";

const Index = () => {
  return (
    <div className="min-h-screen bg-farm-cream-50">
      <Navigation />
      <HeroSection />
      <ProduceSection />
      <OurStorySection />
      <VisitUsSection />
      <FarmStoreSection />
      <ContactSection />
      <Footer />
      
      {/* Newsletter Suggestion Popup */}
      <NewsletterSuggestion />
    </div>
  );
};

export default Index;
