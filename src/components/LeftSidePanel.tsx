import React, { useState, useEffect } from 'react';
import { Carrot, Leaf, Sun, Sprout } from 'lucide-react';

const LeftSidePanel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-gradient-to-b from-farm-green-50 to-farm-green-100 border-r border-farm-green-200 z-40 hidden lg:flex flex-col items-center justify-center animate-fade-in">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/2 w-8 h-8 bg-farm-green-300 rounded-full transform -translate-x-1/2"></div>
        <div className="absolute top-32 left-1/2 w-6 h-6 bg-farm-brown-300 rounded-full transform -translate-x-1/2"></div>
        <div className="absolute bottom-32 left-1/2 w-10 h-10 bg-farm-cream-300 rounded-full transform -translate-x-1/2"></div>
        <div className="absolute bottom-16 left-1/2 w-4 h-4 bg-farm-green-400 rounded-full transform -translate-x-1/2"></div>
      </div>
      
      {/* Animated icons */}
      <div className="relative z-10 flex flex-col space-y-8">
        <div className="animate-pulse">
          <Carrot className="h-6 w-6 text-farm-brown-600 hover:text-farm-brown-800 transition-colors duration-300" />
        </div>
        <div className="animate-bounce" style={{ animationDelay: '0.5s' }}>
          <Leaf className="h-6 w-6 text-farm-green-600 hover:text-farm-green-800 transition-colors duration-300" />
        </div>
        <div className="animate-pulse" style={{ animationDelay: '1s' }}>
          <Sun className="h-6 w-6 text-farm-cream-600 hover:text-farm-cream-800 transition-colors duration-300" />
        </div>
        <div className="animate-bounce" style={{ animationDelay: '1.5s' }}>
          <Sprout className="h-6 w-6 text-farm-green-500 hover:text-farm-green-700 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default LeftSidePanel;
