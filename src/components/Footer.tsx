
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-farm-brown-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Farm info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-farm-cream-100">
                Barrie's Asparagus Farm
              </h3>
              <p className="text-farm-cream-200 text-sm leading-relaxed">
                Four generations of family farming, bringing you the freshest asparagus 
                and seasonal produce since 1948.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-farm-cream-200 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-farm-cream-200 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-farm-cream-200 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-farm-cream-100">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-farm-cream-200 hover:text-white transition-colors">Home</a></li>
                <li><a href="#story" className="text-farm-cream-200 hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#produce" className="text-farm-cream-200 hover:text-white transition-colors">What We Grow</a></li>
                <li><a href="#store" className="text-farm-cream-200 hover:text-white transition-colors">Farm Store</a></li>
                <li><a href="#visit" className="text-farm-cream-200 hover:text-white transition-colors">Visit Us</a></li>
                <li><a href="#contact" className="text-farm-cream-200 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-farm-cream-100">Contact Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5 text-farm-green-400" />
                  <div className="text-farm-cream-200">
                    <p>123 Country Road</p>
                    <p>Farmville, ON K1A 0A1</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-farm-green-400" />
                  <span className="text-farm-cream-200">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-farm-green-400" />
                  <span className="text-farm-cream-200">info@barriesfarm.ca</span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-farm-cream-100">Hours</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <Clock className="h-4 w-4 mr-2 mt-0.5 text-farm-green-400" />
                  <div className="text-farm-cream-200">
                    <p className="font-medium">Country Market</p>
                    <p>Mon-Sat: 8AM-6PM</p>
                    <p>Sun: 9AM-5PM</p>
                  </div>
                </div>
                <div className="text-farm-cream-200">
                  <p className="font-medium text-farm-green-400">Asparagus Season</p>
                  <p>April - June</p>
                  <p>Fresh daily at 7AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-farm-brown-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-farm-cream-200 text-sm">
              © 2024 Barrie's Asparagus Farm & Country Market. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-farm-cream-200 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-farm-cream-200 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
