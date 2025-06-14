
import React, { useState, useEffect } from 'react';
import { X, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }

    console.log('Newsletter signup:', formData);
    
    toast({
      title: "🌱 Welcome to our farm family!",
      description: "You've successfully signed up for our seasonal newsletter.",
    });
    
    // Reset form and close modal
    setFormData({ name: '', email: '' });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 bg-gradient-to-br from-farm-cream-50 via-farm-green-50 to-farm-cream-100 border-2 border-farm-brown-200 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-farm-brown-100 hover:bg-farm-brown-200 p-2 transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="h-4 w-4 text-farm-brown-700" />
        </button>

        <div className="relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-farm-green-200 rounded-full opacity-20 -translate-y-10 translate-x-10"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-farm-brown-200 rounded-full opacity-30 translate-y-8 -translate-x-8"></div>
          
          <div className="relative z-10 p-8">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-farm-green-600 text-white rounded-full mb-4 shadow-lg">
                <Mail className="h-8 w-8" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-farm-brown-800 mb-3 flex items-center justify-center gap-2">
                <span>🌿</span>
                Stay in Touch with the Farm!
                <span>🌿</span>
              </h2>
              
              <p className="text-farm-brown-600 text-base leading-relaxed max-w-sm mx-auto">
                Sign up to get seasonal updates, harvest news, and farm store specials – 
                fresh from our field to your inbox.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-farm-brown-700 mb-1">
                  Name (optional)
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full border-2 border-farm-brown-200 focus:border-farm-green-500 bg-white/80 rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-farm-brown-700 mb-1">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full border-2 border-farm-brown-200 focus:border-farm-green-500 bg-white/80 rounded-lg"
                />
              </div>

              <div className="space-y-3 pt-2">
                {/* Sign Up Button - Wooden Crate Style */}
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-to-b from-farm-brown-400 to-farm-brown-600 hover:from-farm-brown-500 hover:to-farm-brown-700 text-white font-semibold text-lg shadow-lg border-2 border-farm-brown-700 rounded-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Sign Me Up
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>

                {/* No Thanks Button */}
                <Button 
                  type="button"
                  variant="ghost"
                  onClick={onClose}
                  className="w-full text-farm-brown-600 hover:text-farm-brown-800 hover:bg-farm-brown-100/50 font-medium"
                >
                  No thanks, maybe later
                </Button>
              </div>

              <p className="text-xs text-farm-brown-500 text-center mt-4 opacity-80">
                🌱 Sent monthly during growing season. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterModal;
