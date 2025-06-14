
import React, { useState, useEffect } from 'react';
import { X, ArrowDown } from 'lucide-react';

const NewsletterSuggestion = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollTriggered, setIsScrollTriggered] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    // Show after 7 seconds
    timeoutId = setTimeout(() => {
      if (!isScrollTriggered) {
        setIsVisible(true);
      }
    }, 7000);

    // Show when scrolled 50% down
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / documentHeight) * 100;

      if (scrollPercent >= 50 && !isVisible && !isScrollTriggered) {
        setIsScrollTriggered(true);
        setIsVisible(true);
        clearTimeout(timeoutId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, isScrollTriggered]);

  const scrollToNewsletter = () => {
    const newsletterSection = document.querySelector('#contact');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsVisible(false);
  };

  const closeSuggestion = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Version - Middle Right */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block animate-fade-in">
        <div className="bg-gradient-to-br from-farm-green-50 to-farm-green-100 border-2 border-farm-green-200 rounded-2xl shadow-lg p-6 max-w-sm relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-farm-green-200 rounded-full opacity-20 -translate-y-8 translate-x-8"></div>
          
          {/* Close button */}
          <button
            onClick={closeSuggestion}
            className="absolute top-3 right-3 text-farm-brown-600 hover:text-farm-brown-800 transition-colors duration-200"
            aria-label="Close suggestion"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Content */}
          <div className="relative z-10">
            <p className="text-farm-brown-700 font-serif text-sm leading-relaxed mb-4">
              🥕 Love local? Get the latest on our harvests and handmade goodies!
            </p>
            
            <button
              onClick={scrollToNewsletter}
              className="w-full bg-farm-green-600 hover:bg-farm-green-700 text-white font-serif font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Take Me There
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Version - Bottom Bar */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-slide-in-bottom">
        <div className="bg-gradient-to-r from-farm-green-50 to-farm-green-100 border-2 border-farm-green-200 rounded-xl shadow-lg p-4 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-12 h-12 bg-farm-green-200 rounded-full opacity-20 -translate-y-6 translate-x-6"></div>
          
          {/* Close button */}
          <button
            onClick={closeSuggestion}
            className="absolute top-2 right-2 text-farm-brown-600 hover:text-farm-brown-800 transition-colors duration-200"
            aria-label="Close suggestion"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Content */}
          <div className="relative z-10 pr-8">
            <p className="text-farm-brown-700 font-serif text-sm leading-relaxed mb-3">
              🥕 Love local? Get the latest on our harvests and handmade goodies!
            </p>
            
            <button
              onClick={scrollToNewsletter}
              className="w-full bg-farm-green-600 hover:bg-farm-green-700 text-white font-serif font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Take Me There
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterSuggestion;
