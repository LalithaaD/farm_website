
import React, { useState, useCallback } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import DOMPurify from 'dompurify';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);
  const { toast } = useToast();

  // Rate limiting: 1 submission per 30 seconds
  const RATE_LIMIT_MS = 30000;

  // Input sanitization function
  const sanitizeInput = (input: string): string => {
    return DOMPurify.sanitize(input.trim(), { ALLOWED_TAGS: [] });
  };

  // Enhanced email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
  };

  // Enhanced phone validation
  const isValidPhone = (phone: string): boolean => {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  };

  // Form validation
  const validateForm = (): boolean => {
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message)
    };

    if (!sanitizedData.name || sanitizedData.name.length < 2 || sanitizedData.name.length > 50) {
      toast({
        title: "Invalid Name",
        description: "Name must be between 2 and 50 characters.",
        variant: "destructive"
      });
      return false;
    }

    if (!isValidEmail(sanitizedData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return false;
    }

    if (!isValidPhone(sanitizedData.phone)) {
      toast({
        title: "Invalid Phone",
        description: "Please enter a valid phone number.",
        variant: "destructive"
      });
      return false;
    }

    if (!sanitizedData.subject) {
      toast({
        title: "Subject Required",
        description: "Please select a subject for your message.",
        variant: "destructive"
      });
      return false;
    }

    if (!sanitizedData.message || sanitizedData.message.length < 10 || sanitizedData.message.length > 1000) {
      toast({
        title: "Invalid Message",
        description: "Message must be between 10 and 1000 characters.",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    const now = Date.now();
    if (now - lastSubmissionTime < RATE_LIMIT_MS) {
      toast({
        title: "Please Wait",
        description: "Please wait 30 seconds between submissions.",
        variant: "destructive"
      });
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setLastSubmissionTime(now);

    // Simulate form submission
    setTimeout(() => {
      console.log('Sanitized form submitted:', {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone),
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message)
      });
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  }, [formData, lastSubmissionTime, toast]);

  const handleNewsletterSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const sanitizedEmail = sanitizeInput(newsletterEmail);
    
    if (!isValidEmail(sanitizedEmail)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    console.log('Newsletter signup:', sanitizedEmail);
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our farm newsletter.",
    });
    setNewsletterEmail('');
  }, [newsletterEmail, toast]);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-farm-brown-800 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-farm-brown-600 max-w-2xl mx-auto">
              Have questions about our produce, want to place a special order, or plan a visit? 
              We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact information */}
            <div className="space-y-8 flex flex-col">
              <div className="h-full flex flex-col">
                <h3 className="text-2xl font-bold text-farm-brown-800 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6 flex-grow">
                  <div className="flex items-start">
                    <div className="bg-farm-green-600 text-white p-3 rounded-lg mr-4 mt-1">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-farm-brown-800 mb-1">Phone</h4>
                      <p className="text-farm-brown-600">(519) 621-9409</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-farm-green-600 text-white p-3 rounded-lg mr-4 mt-1">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-farm-brown-800 mb-1">Email</h4>
                      <p className="text-farm-brown-600">aspagarus@rogers.com</p>
                      <p className="text-sm text-farm-brown-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-farm-green-600 text-white p-3 rounded-lg mr-4 mt-1">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-farm-brown-800 mb-1">Address</h4>
                      <p className="text-farm-brown-600">Barrie's Asparagus</p>
                      <p className="text-farm-brown-600">1236 Kings Rd</p>
                      <p className="text-farm-brown-600">Cambridge, ON N1R 5S3</p>
                      <p className="text-sm text-farm-brown-500">15 minutes from downtown</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter signup */}
              <div className="bg-farm-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-farm-brown-800 mb-4">
                  📧 Farm Newsletter
                </h3>
                <p className="text-farm-brown-600 mb-4">
                  Get weekly updates on what's fresh, seasonal recipes, and farm events!
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <Input 
                    type="email" 
                    placeholder="Your email address"
                    className="flex-1"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    maxLength={254}
                    required
                  />
                  <Button type="submit" className="bg-farm-green-600 hover:bg-farm-green-700">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-farm-brown-500 mt-2">
                  No spam, unsubscribe anytime. Sent weekly during growing season.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-farm-cream-50 rounded-lg p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-farm-brown-800 mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 mr-2" />
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-farm-brown-700 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full"
                      maxLength={50}
                      minLength={2}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-farm-brown-700 mb-2">
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
                      className="w-full"
                      maxLength={254}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-farm-brown-700 mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(519) 621-9409"
                      className="w-full"
                      maxLength={15}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-farm-brown-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-farm-green-500"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="produce">Produce Availability</option>
                      <option value="tours">Farm Tours</option>
                      <option value="events">Special Events</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex-grow">
                  <label htmlFor="message" className="block text-sm font-medium text-farm-brown-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="w-full h-full"
                    maxLength={1000}
                    minLength={10}
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-farm-green-600 hover:bg-farm-green-700 text-white py-3 text-lg font-medium group mt-auto disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-farm-brown-500 text-center">
                  * Required fields. We'll respond within 24 hours during business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
