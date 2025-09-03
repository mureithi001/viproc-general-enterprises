import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light/90">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <a href="/" aria-label="Go to Home">
              <img 
                src="/logo/logo 3.jpeg"
                alt="Viproc General Enterprises logo"
                className="h-16 w-auto object-contain mb-6"
              />
            </a>

            <p className="text-sm leading-relaxed">
              World-class processing and packaging solutions that empower businesses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/end-of-line-equipment" className="hover:text-primary transition-colors">Equipment Supply</a></li>
              <li><a href="/services/installation-commissioning" className="hover:text-primary transition-colors">Installation</a></li>
              <li><a href="/services/spare-parts-support" className="hover:text-primary transition-colors">Parts & Support</a></li>
              <li><a href="/services/consulting-training" className="hover:text-primary transition-colors">Consulting & Training</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/clients" className="hover:text-primary transition-colors">Clients</a></li>
              {/* <li><a href="/careers" className="hover:text-[#3A65A9] transition-colors">Careers</a></li> */}
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-light" />
                <a href="mailto:viproc.g.enterprises@gmail.com" className="hover:underline">viproc.g.enterprises@gmail.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-light" />
                <a href="tel:+254728968792" className="hover:underline">+254 728 968 792</a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-light" />
                <span>Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm">
          <p>&copy; 2025 Viproc General Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;