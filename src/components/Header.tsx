import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { services } from '../data/services';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const scrollTopSmooth = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  const handleNavClick = (to: string) => {
    if (location.pathname === to) {
      scrollTopSmooth();
    }
  };

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
    { name: 'Projects', href: '/projects' },
    { name: 'Clients', href: '/clients' },
    // { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-light/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="w-full">
        <div className="flex justify-between items-center h-20 max-w-7xl mx-auto pl-3 pr-6 lg:pl-4 lg:pr-8">
          <Link to="/" className="flex items-center" aria-label="Go to Home" onClick={() => handleNavClick('/')}>
            <img
              src="/logo/logo 3.jpeg"
              alt="Viproc General Enterprises logo"
              className="h-12 w-auto object-contain"
            />
            <span className="sr-only">Viproc General Enterprises</span>
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
                      onClick={() => handleNavClick(item.href)}
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
                    onClick={() => handleNavClick(item.href)}
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
              onClick={() => handleNavClick('/')}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="px-3 py-2 text-xs font-semibold rounded-md bg-white text-secondary border border-secondary/30 hover:bg-light transition-colors"
              onClick={() => handleNavClick('/services')}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 text-xs font-semibold rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
              onClick={() => handleNavClick('/contact')}
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
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-4 py-2 text-sm ${
                      location.pathname === item.href || (item.name === 'Services' && location.pathname.startsWith('/services/'))
                        ? 'text-primary bg-light/50' 
                        : 'text-dark'
                    }`}
                    onClick={() => {
                      handleNavClick(item.href);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                  {item.name === 'Services' && (
                    <div className="pl-6">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="block px-4 py-2 text-xs text-gray-600 hover:text-primary transition-colors"
                          onClick={() => {
                            if (location.pathname === `/services/${service.slug}`) scrollTopSmooth();
                            setIsMenuOpen(false);
                          }}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;