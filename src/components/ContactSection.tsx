
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 bg-farm-brown-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-farm-brown-800 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-farm-brown-600 max-w-2xl mx-auto">
              Have questions about our produce, want to plan a visit, or need directions? 
              We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Contact Information */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-farm-brown-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-farm-green-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-farm-brown-800 mb-1">Address</h4>
                    <p className="text-farm-brown-600">
                      Barrie's Asparagus<br />
                      1236 Kings Rd<br />
                      Cambridge, ON N1R 5S3
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-farm-green-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-farm-brown-800 mb-1">Phone</h4>
                    <p className="text-farm-brown-600">(519)621-9409</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-farm-green-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-farm-brown-800 mb-1">Email</h4>
                    <p className="text-farm-brown-600">aspagarus@rogers.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-farm-green-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-farm-brown-800 mb-1">Hours</h4>
                    <div className="text-farm-brown-600">
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                      <p className="text-sm text-farm-brown-500 mt-1">
                        Asparagus Season: April - June
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-farm-brown-800 mb-6">
                Stay Updated
              </h3>
              
              <div className="space-y-6">
                <p className="text-farm-brown-600">
                  Subscribe to our newsletter to get updates about harvest seasons, 
                  special events, and fresh produce availability.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-farm-brown-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-farm-brown-200 rounded-lg focus:ring-2 focus:ring-farm-green-500 focus:border-transparent outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-farm-brown-700 mb-2">
                      Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border border-farm-brown-200 rounded-lg focus:ring-2 focus:ring-farm-green-500 focus:border-transparent outline-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-farm-green-600 hover:bg-farm-green-700 text-white py-3"
                  >
                    Subscribe to Newsletter
                  </Button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-farm-brown-200">
                  <Button 
                    className="w-full bg-farm-brown-600 hover:bg-farm-brown-700 text-white"
                    onClick={scrollToTop}
                  >
                    Back to Top
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
