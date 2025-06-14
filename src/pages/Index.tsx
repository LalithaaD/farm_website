
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProduceSection from "@/components/ProduceSection";
import OurStorySection from "@/components/OurStorySection";
import VisitUsSection from "@/components/VisitUsSection";
import FarmStoreSection from "@/components/FarmStoreSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import NewsletterModal from "@/components/NewsletterModal";
import { useNewsletterModal } from "@/hooks/useNewsletterModal";

const Index = () => {
  const { isModalOpen, closeModal } = useNewsletterModal();

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
      
      {/* Newsletter Modal */}
      <NewsletterModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;
