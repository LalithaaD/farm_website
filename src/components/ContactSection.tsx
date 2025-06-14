
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

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-farm-brown-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6 flex-grow">
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

            {/* Visit Planning */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-farm-brown-800 mb-6">
                Plan Your Visit
              </h3>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="font-semibold text-farm-green-600 mb-3">What to Expect</h4>
                  <ul className="text-farm-brown-600 space-y-2">
                    <li>• Fresh asparagus picking (seasonal)</li>
                    <li>• Country market with local produce</li>
                    <li>• Homemade preserves and artisanal goods</li>
                    <li>• Farm tours on weekends</li>
                    <li>• Family-friendly environment</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-farm-green-600 mb-3">Best Times to Visit</h4>
                  <ul className="text-farm-brown-600 space-y-2">
                    <li>• <strong>Peak Season:</strong> April - June for fresh asparagus</li>
                    <li>• <strong>Morning:</strong> Best selection of fresh produce</li>
                    <li>• <strong>Weekends:</strong> Farm tours available</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-farm-green-600 mb-3">Payment Methods</h4>
                  <p className="text-farm-brown-600">
                    We accept cash, local cheques with ID, and e-transfer to aspagarus@rogers.com
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  className="w-full bg-farm-green-600 hover:bg-farm-green-700"
                  onClick={scrollToTop}
                >
                  Back to Top
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
