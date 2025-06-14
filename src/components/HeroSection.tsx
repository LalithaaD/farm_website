
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openDirections = () => {
    const address = "Barrie's Asparagus, 1236 Kings Rd, Cambridge, ON N1R 5S3";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-farm-green-100 via-farm-cream-100 to-farm-green-50"></div>
      
      {/* Farm photo background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url(/lovable-uploads/f3d4a98a-038e-45db-9c7a-e553af03d029.png)' }}
      ></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-farm-green-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-farm-brown-200/30 rounded-full blur-xl"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Seasonal banner */}
          <div className="inline-block bg-farm-green-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            🌱 Fresh Asparagus Season Now Open - April to June
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-farm-brown-800 mb-6 animate-fade-in-up">
            Farm Fresh
            <span className="block text-gradient-farm">Asparagus</span>
            <span className="block text-4xl md:text-5xl">& Country Goodness</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-farm-brown-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Four generations of family farming bringing you the freshest asparagus, 
            seasonal produce, and artisanal goods straight from our fields to your table.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-farm-green-600 hover:bg-farm-green-700 text-white px-8 py-3 text-lg font-medium group"
              onClick={() => scrollToSection('produce')}
            >
              View Our Produce
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-farm-brown-400 text-farm-brown-700 hover:bg-farm-brown-50 px-8 py-3 text-lg font-medium group"
              onClick={openDirections}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Visit Our Farm
            </Button>
          </div>
          
          {/* Farm stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-farm-green-600">75+</div>
              <div className="text-sm text-farm-brown-600">Years of Farming</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-farm-green-600">4</div>
              <div className="text-sm text-farm-brown-600">Generations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-farm-green-600">50+</div>
              <div className="text-sm text-farm-brown-600">Varieties of Produce</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-farm-green-600">100%</div>
              <div className="text-sm text-farm-brown-600">Family Owned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
