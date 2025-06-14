
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProduceSection from "@/components/ProduceSection";
import OurStorySection from "@/components/OurStorySection";
import VisitUsSection from "@/components/VisitUsSection";
import FarmStoreSection from "@/components/FarmStoreSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import NewsletterSuggestion from "@/components/NewsletterSuggestion";
import LeftSidePanel from "@/components/LeftSidePanel";
import RightSidePanel from "@/components/RightSidePanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-farm-cream-50">
      {/* Static Decorative Side Panels */}
      <LeftSidePanel />
      <RightSidePanel />
      
      {/* Main Content */}
      <div className="lg:px-16">
        <Navigation />
        <HeroSection />
        <ProduceSection />
        <OurStorySection />
        <VisitUsSection />
        <FarmStoreSection />
        <ContactSection />
        <Footer />
      </div>
      
      {/* Newsletter Suggestion Popup */}
      <NewsletterSuggestion />
    </div>
  );
};

export default Index;
