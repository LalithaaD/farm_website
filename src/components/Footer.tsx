
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Wheat } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-farm-brown-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Farm info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-farm-cream-100">
                Barrie's Asparagus Farm
              </h3>
              <p className="text-farm-cream-200 text-sm leading-relaxed">
                Four generations of family farming, bringing you the freshest asparagus 
                and seasonal produce since 1892.
              </p>
              <div className="flex space-x-3">
                <a 
                  href="https://www.facebook.com/share/199o1LDT6C/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-farm-cream-200 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/barries_asparagus/?igsh=M3I3eW51eWdqNzd1#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-farm-cream-200 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:aspagarus@rogers.com" 
                  className="text-farm-cream-200 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Contact info - moved down with mt-8 */}
            <div className="space-y-4 mt-8">
              <h4 className="text-lg font-semibold text-farm-cream-100">Contact Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5 text-farm-green-400" />
                  <div className="text-farm-cream-200">
                    <p>Barrie's Asparagus</p>
                    <p>1236 Kings Rd</p>
                    <p>Cambridge, ON N1R 5S3</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-farm-green-400" />
                  <span className="text-farm-cream-200">(519) 621-9409</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-farm-green-400" />
                  <span className="text-farm-cream-200">aspagarus@rogers.com</span>
                </div>
              </div>
            </div>

            {/* Hours - moved down with mt-8 */}
            <div className="space-y-4 mt-8">
              <h4 className="text-lg font-semibold text-farm-cream-100">Hours</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <Clock className="h-4 w-4 mr-2 mt-0.5 text-farm-green-400" />
                  <div className="text-farm-cream-200">
                    <p className="font-medium">Country Market</p>
                    <p>Mon-Sat: 9AM-6PM</p>
                    <p>Sun: 10AM-5PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Wheat className="h-4 w-4 mr-2 mt-0.5 text-farm-green-400" />
                  <div className="text-farm-cream-200">
                    <p className="font-medium text-farm-green-400">Asparagus Season</p>
                    <p>April - June</p>
                    <p>Fresh daily at 7AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-farm-brown-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-farm-cream-200 text-sm">
                © 2024 Made with ❤️ by{' '}
                <a 
                  href="https://lalithaad.github.io/Portfolio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-farm-green-400 hover:text-farm-green-300 transition-colors"
                >
                  Lalitha Madhuri Divakaruni
                </a>
                {' '}for Barrie's Asparagus Farm & Country Market
              </p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#contact" className="text-farm-cream-200 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#contact" className="text-farm-cream-200 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
