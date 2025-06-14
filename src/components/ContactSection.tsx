
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      console.log('Newsletter signup:', newsletterEmail);
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our farm newsletter.",
      });
      setNewsletterEmail('');
    }
  };

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

          {/* Newsletter Section - Separate and Animated */}
          <div className="mb-16 animate-fade-in">
            <div className="bg-gradient-to-br from-farm-green-50 via-farm-cream-50 to-farm-green-100 rounded-2xl p-8 relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-farm-green-200 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-farm-cream-200 rounded-full opacity-30 translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-farm-green-600 text-white rounded-full mb-6 animate-pulse">
                  <Mail className="h-8 w-8" />
                </div>
                
                <h3 className="text-3xl font-bold text-farm-brown-800 mb-4 flex items-center justify-center gap-2">
                  <Sparkles className="h-6 w-6 text-farm-green-600 animate-spin" />
                  Farm Newsletter
                  <Sparkles className="h-6 w-6 text-farm-green-600 animate-spin" />
                </h3>
                
                <p className="text-lg text-farm-brown-600 mb-6 leading-relaxed">
                  🌱 Get weekly updates on what's fresh, seasonal recipes, and farm events! 
                  Join our growing community of fresh food lovers.
                </p>
                
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="flex-1 h-12 text-base border-2 border-farm-green-200 focus:border-farm-green-500 rounded-lg transition-all duration-300"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <Button 
                    type="submit" 
                    className="bg-farm-green-600 hover:bg-farm-green-700 h-12 px-8 text-base font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Subscribe
                    <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                
                <p className="text-sm text-farm-brown-500 mt-4 opacity-80">
                  ✨ No spam, unsubscribe anytime. Sent weekly during growing season.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Farm Sign Image Card - Left Side */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-6">
                  <div className="flex justify-center">
                    <img 
                      src="/lovable-uploads/1bf3fb0e-bd2f-4778-9cc7-b533af88eed8.png" 
                      alt="Barrie's Asparagus Farm Sign - Welcome to Cedardale Farm"
                      className="w-full h-auto max-w-lg rounded-lg shadow-md"
                    />
                  </div>
                  
                  {/* Contact Information Below Image */}
                  <div className="text-center space-y-3">
                    <div className="flex items-center justify-center text-farm-brown-700">
                      <Phone className="h-5 w-5 mr-2 text-farm-green-600" />
                      <span className="text-lg font-medium">(519) 621-9409</span>
                    </div>
                    <div className="flex items-center justify-center text-farm-brown-700">
                      <Mail className="h-5 w-5 mr-2 text-farm-green-600" />
                      <span className="text-lg font-medium">aspagarus@rogers.com</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form Card - Right Side */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-farm-brown-800">
                  <MessageSquare className="h-6 w-6 mr-2" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div>
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
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-farm-green-600 hover:bg-farm-green-700 text-white py-3 text-lg font-medium group"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-farm-brown-500 text-center">
                    * Required fields. We'll respond within 24 hours during business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
