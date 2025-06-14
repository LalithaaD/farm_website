
import { useState, useEffect } from 'react';

export const useNewsletterModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (hasTriggered) return;

    let timeoutId: NodeJS.Timeout;
    let scrollTriggered = false;

    // Time-based trigger (5-7 seconds)
    const triggerDelay = 5000 + Math.random() * 2000; // Random between 5-7 seconds
    
    timeoutId = setTimeout(() => {
      if (!scrollTriggered && !hasTriggered) {
        setIsModalOpen(true);
        setHasTriggered(true);
      }
    }, triggerDelay);

    // Scroll-based trigger (50% down the page)
    const handleScroll = () => {
      if (scrollTriggered || hasTriggered) return;

      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent >= 50) {
        scrollTriggered = true;
        clearTimeout(timeoutId);
        setIsModalOpen(true);
        setHasTriggered(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasTriggered]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    closeModal
  };
};
