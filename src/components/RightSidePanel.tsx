
import React from 'react';
import { Apple, Wheat, TreePine, Flower } from 'lucide-react';

const RightSidePanel = () => {
  return (
    <div className="fixed right-0 top-0 h-full w-16 bg-gradient-to-b from-farm-cream-50 to-farm-brown-50 border-l border-farm-brown-200 z-40 hidden lg:flex flex-col items-center justify-center">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-1/2 w-6 h-6 bg-farm-brown-400 rounded-full transform -translate-x-1/2"></div>
        <div className="absolute top-40 left-1/2 w-8 h-8 bg-farm-cream-400 rounded-full transform -translate-x-1/2"></div>
        <div className="absolute bottom-40 left-1/2 w-5 h-5 bg-farm-green-300 rounded-full transform -translate-x-1/2"></div>
        <div className="absolute bottom-20 left-1/2 w-7 h-7 bg-farm-brown-300 rounded-full transform -translate-x-1/2"></div>
      </div>
      
      {/* Animated icons */}
      <div className="relative z-10 flex flex-col space-y-8">
        <div className="animate-pulse">
          <Apple className="h-6 w-6 text-farm-brown-600 hover:text-farm-brown-800 transition-colors duration-300" />
        </div>
        <div className="animate-bounce" style={{ animationDelay: '0.3s' }}>
          <Wheat className="h-6 w-6 text-farm-cream-700 hover:text-farm-cream-900 transition-colors duration-300" />
        </div>
        <div className="animate-pulse" style={{ animationDelay: '0.7s' }}>
          <TreePine className="h-6 w-6 text-farm-green-600 hover:text-farm-green-800 transition-colors duration-300" />
        </div>
        <div className="animate-bounce" style={{ animationDelay: '1.2s' }}>
          <Flower className="h-6 w-6 text-farm-green-500 hover:text-farm-green-700 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default RightSidePanel;
