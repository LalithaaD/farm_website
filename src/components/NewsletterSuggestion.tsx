
import React, { useState, useEffect } from 'react';
import { X, ArrowDown, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNewsletterSignup } from '@/hooks/useNewsletterSignup';

const NewsletterSuggestion = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const { signupForNewsletter, isLoading } = useNewsletterSignup();

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 0) {
        setHasScrolled(true);
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

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

  const handleQuickSignup = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    const success = await signupForNewsletter(email);
    if (success) {
      setEmail('');
      setIsVisible(false);
    }
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
            
            {!showForm ? (
              <div className="space-y-2">
                <button
                  onClick={handleQuickSignup}
                  className="w-full bg-farm-green-600 hover:bg-farm-green-700 text-white font-serif font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Quick Signup
                  <Mail className="h-4 w-4" />
                </button>
                <button
                  onClick={scrollToNewsletter}
                  className="w-full bg-white hover:bg-farm-green-50 text-farm-green-600 font-serif font-semibold py-2 px-4 rounded-lg transition-all duration-300 border border-farm-green-200 flex items-center justify-center gap-2"
                >
                  Take Me There
                  <ArrowDown className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-sm"
                  required
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  className="w-full bg-farm-green-600 hover:bg-farm-green-700"
                  disabled={isLoading}
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
            )}
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
            
            {!showForm ? (
              <div className="flex gap-2">
                <button
                  onClick={handleQuickSignup}
                  className="flex-1 bg-farm-green-600 hover:bg-farm-green-700 text-white font-serif font-semibold py-2 px-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  Quick Signup
                  <Mail className="h-3 w-3" />
                </button>
                <button
                  onClick={scrollToNewsletter}
                  className="flex-1 bg-white hover:bg-farm-green-50 text-farm-green-600 font-serif font-semibold py-2 px-3 rounded-lg transition-all duration-300 border border-farm-green-200 flex items-center justify-center gap-2 text-sm"
                >
                  Take Me There
                  <ArrowDown className="h-3 w-3" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-sm flex-1"
                  required
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  className="bg-farm-green-600 hover:bg-farm-green-700 px-4"
                  disabled={isLoading}
                >
                  {isLoading ? '...' : 'Subscribe'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterSuggestion;
