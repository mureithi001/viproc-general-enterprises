import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#3A65A9] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/logo/logo-white.svg"
                alt="Floating Solar Africa logo"
                className="h-10 w-auto object-contain"
              />
              <span className="sr-only">Floating Solar</span>
            </div>

            <p className="text-white text-sm leading-relaxed">
              Engineering the future of renewable energy through innovative floating solar solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/solar-pv" className="hover:text-white transition-colors">Solar PV</a></li>
              <li><a href="/services/electrical-power" className="hover:text-white transition-colors">Electrical & Power</a></li>
              <li><a href="/services/water-solutions" className="hover:text-white transition-colors">Water Solutions</a></li>
              <li><a href="/services/floating-solar" className="hover:text-white transition-colors">Floating Solar</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/partners" className="hover:text-white transition-colors">Partners</a></li>
              {/* <li><a href="/careers" className="hover:text-[#3A65A9] transition-colors">Careers</a></li> */}
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-white" />
                <span>info@floatingsolarafrica.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white" />
                <a href="tel:+254790619961" className="hover:underline">+254 790 619961</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white" />
                <a href="tel:+254727611034" className="hover:underline">+254 727 611034</a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-white" />
                <span>Ruaraka Square F1, Thika Road</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-white/90" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
          <p>&copy; 2025 Floating Solar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;