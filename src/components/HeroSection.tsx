
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
              Shop Our Produce
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-farm-brown-400 text-farm-brown-700 hover:bg-farm-brown-50 px-8 py-3 text-lg font-medium group"
              onClick={() => scrollToSection('visit')}
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
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="white" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="white" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
