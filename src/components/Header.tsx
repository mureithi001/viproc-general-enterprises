import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { services } from '../data/services';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Partners', href: '/partners' },
    // { name: 'Projects', href: '/projects' },
    // { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-light/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3" aria-label="Go to Home">
            <img
              src="/logo/logo 1.jpeg"
              alt="Floating Solar Africa logo"
              className="h-12 w-auto object-contain drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]"
            />
            <span className="sr-only">Floating Solar</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.name === 'Services' ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to={item.href}
                      className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                        location.pathname === item.href || location.pathname.startsWith('/services/')
                          ? 'text-primary border-b-2 border-primary pb-1' 
                          : 'text-dark'
                      }`}
                    >
                      {item.name}
                    </Link>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg border border-light z-50">
                        <div className="p-4">
                          <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">
                            Our Services
                          </div>
                          <div className="space-y-2">
                            {services.map((service) => (
                              <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                className="block p-3 rounded-lg hover:bg-light transition-colors group"
                              >
                                <div className="font-medium text-dark group-hover:text-primary transition-colors">
                                  {service.title}
                                </div>
                                <div className="text-sm text-gray-600 mt-1 line-clamp-2">
                                  {service.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                      location.pathname === item.href 
                        ? 'text-primary border-b-2 border-primary pb-1' 
                        : 'text-dark'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-3 md:hidden">
            {/* Quick buttons visible on mobile */}
            <Link
              to="/"
              className="px-3 py-2 text-xs font-semibold rounded-md bg-secondary text-white hover:bg-secondary/90 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="px-3 py-2 text-xs font-semibold rounded-md bg-white text-secondary border border-secondary/30 hover:bg-light transition-colors"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 text-xs font-semibold rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Contact
            </Link>
            {/* Hamburger */}
            <button
              className="p-2 rounded-md border border-light/60"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-dark" />
              ) : (
                <Menu className="w-6 h-6 text-dark" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-light shadow-lg rounded-lg mt-2 py-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-light hover:text-primary ${
                    location.pathname === item.href || (item.name === 'Services' && location.pathname.startsWith('/services/'))
                      ? 'text-primary bg-light/50' 
                      : 'text-dark'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.name === 'Services' && (
                  <div className="pl-8 pb-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="block px-4 py-2 text-xs text-gray-600 hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;