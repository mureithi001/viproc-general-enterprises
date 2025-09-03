import { useRef, useEffect, useCallback } from 'react';
import Hero from '../components/Hero';
import WaterRipples from '../components/WaterRipples';
import { ArrowRight, Award, Users, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, type Service } from '../data/services';

const Home = () => {
  const stats = [
    { icon: Zap, number: '150+', label: 'Projects Delivered', description: 'Successfully completed projects worldwide' },
    { icon: Award, number: '98%', label: 'Client Satisfaction', description: 'Committed to exceeding client expectations' },
    { icon: Users, number: '20+', label: 'Years of Experience', description: 'Decades of industry-leading expertise' },
  ];

  // Partners carousel data and refs
  const partnerItems = [
    { src: '/partners/KHS-logo.png', alt: 'KHS' },
    { src: '/partners/Krones-Logo.png', alt: 'Krones' },
    { src: '/partners/Sidel-Logo.png', alt: 'Sidel' },
    { src: '/partners/Tetra-Pak-Logo.png', alt: 'Tetra Pak' },
    { src: '/partners/Sacmi-Logo.png', alt: 'Sacmi' },
    { src: '/partners/Bosch-Packaging-Logo.png', alt: 'Bosch Packaging' },
    { src: '/partners/GEA-Logo.png', alt: 'GEA' },
    { src: '/partners/Alfa-Laval-Logo.png', alt: 'Alfa Laval' },
    { src: '/partners/SPX-Flow-Logo.png', alt: 'SPX Flow' },
    { src: '/partners/Ishida-Logo.png', alt: 'Ishida' },
    { src: '/partners/Markem-Imaje-Logo.png', alt: 'Markem-Imaje' },
    { src: '/partners/Videojet-Logo.png', alt: 'Videojet' },
    { src: '/partners/Domino-Printing-Logo.png', alt: 'Domino Printing' },
    { src: '/partners/Rockwell-Automation-Logo.png', alt: 'Rockwell Automation' },
    { src: '/partners/Siemens-Logo.png', alt: 'Siemens' },
    { src: '/partners/Schneider-Electric-Logo.png', alt: 'Schneider Electric' },
  ];
  const partnersScrollerRef = useRef<HTMLDivElement | null>(null);
  const autoScrollId = useRef<number | null>(null);

  const scrollPartners = (dir: 'left' | 'right') => {
    const el = partnersScrollerRef.current;
    if (!el) return;
    const amount = Math.min(600, el.clientWidth * 0.8);
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const stopAutoScroll = useCallback(() => {
    if (autoScrollId.current !== null) {
      window.clearInterval(autoScrollId.current);
      autoScrollId.current = null;
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    const el = partnersScrollerRef.current;
    if (!el) return;
    // Prevent multiple intervals
    stopAutoScroll();
    autoScrollId.current = window.setInterval(() => {
      const node = partnersScrollerRef.current;
      if (!node) return;
      const atEnd = node.scrollLeft + node.clientWidth >= node.scrollWidth - 1;
      if (atEnd) {
        node.scrollLeft = 0;
      } else {
        node.scrollLeft += 1; // smooth continuous motion
      }
    }, 20);
  }, [stopAutoScroll]);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  return (
    <div className="relative">
      <WaterRipples />
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-[#3A65A9]/20">
                  <stat.icon className="w-8 h-8 text-[#3A65A9]" />
                </div>
                <div className="text-4xl font-serif font-bold text-[#3A65A9] mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-[#818286] mb-2">{stat.label}</div>
                <div className="text-sm text-[#818286] max-w-xs mx-auto">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#3A65A9] mb-4 lg:mb-6">About Viproc General Enterprises</h2>
            <p className="text-base lg:text-lg text-[#818286] leading-relaxed mb-6">
              We provide world-class end-to-end packaging and processing solutions, empowering your business with efficiency, reliability, and innovation.
            </p>
            <Link to="/about" className="inline-flex items-center space-x-2 text-white bg-[#3A65A9] hover:bg-[#315590] px-6 py-3 rounded-lg font-semibold transition-colors">
              <span>Read more</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="relative">
            <img
              src="/hero/about.jpg"
              alt="A diverse team of engineers collaborating in a modern office"
              className="rounded-2xl shadow-2xl"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#3A65A9]/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-4xl font-serif font-bold text-[#3A65A9]">Our Services</h2>
              <p className="text-[#818286] mt-2">From concept to commissioning—comprehensive packaging and processing solutions.</p>
            </div>
            <Link to="/services" className="hidden sm:inline-flex items-center space-x-2 text-[#3A65A9] hover:text-[#2d4a87] font-semibold">
              <span>View all</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((svc: Service) => (
              <div key={svc.slug} className="group bg-cream rounded-2xl p-6 border border-[#3A65A9]/10 hover:border-[#3A65A9]/30 transition-colors">
                <h3 className="text-xl font-semibold text-[#3A65A9] mb-2">{svc.title}</h3>
                <p className="text-[#818286] text-sm mb-4 line-clamp-3">{svc.description}</p>
                <div className="flex items-center justify-between">
                  <Link to={`/services/${svc.slug}`} className="inline-flex items-center space-x-2 text-[#3A65A9] hover:text-[#2d4a87] font-medium">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/services" className="text-[#818286] text-xs hover:text-[#3A65A9]">All services</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="sm:hidden text-center mt-8">
            <Link to="/services" className="inline-flex items-center space-x-2 text-[#3A65A9] hover:text-[#2d4a87] font-semibold">
              <span>View all</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Solutions Preview */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-serif font-bold text-navy mb-6 leading-tight">
                Innovative Solutions for Modern Production
              </h2>
              <p className="text-lg text-steel-gray mb-8 leading-relaxed">
                Our advanced systems combine cutting-edge technology with robust engineering, 
                delivering reliable and efficient solutions that maximize your output and minimize downtime.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 bg-copper text-white px-8 py-4 rounded-lg font-semibold hover:bg-copper/90 transition-colors group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Floating solar panels on water"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Carousel Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-serif font-bold text-navy mb-6">Trusted Partners</h2>
            <p className="text-xl text-steel-gray max-w-3xl mx-auto leading-relaxed">
              We collaborate with industry leaders to deliver comprehensive renewable energy solutions
            </p>
          </div>

          <div className="relative">
            <button
              aria-label="Scroll partners left"
              onClick={() => scrollPartners('left')}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-cream text-navy shadow hover:bg-cream/80"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div
              ref={partnersScrollerRef}
              className="flex gap-10 overflow-x-auto scroll-smooth py-4 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              onMouseEnter={stopAutoScroll}
              onMouseLeave={startAutoScroll}
              onTouchStart={stopAutoScroll}
              onTouchEnd={startAutoScroll}
            >
              {partnerItems.map((it, idx) => (
                <div key={idx} className="flex-shrink-0 flex items-center justify-center min-w-[160px]">
                  <img
                    src={it.src}
                    alt={`${it.alt} logo`}
                    className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <button
              aria-label="Scroll partners right"
              onClick={() => scrollPartners('right')}
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-cream text-navy shadow hover:bg-cream/80"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/partners"
              className="inline-flex items-center space-x-2 text-copper hover:text-copper/80 font-semibold transition-colors"
            >
              <span>View All Partners</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-copper/20 to-transparent"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Ready to Optimize Your Production Line?
          </h2>
          <p className="text-xl text-steel-gray mb-8 leading-relaxed">
            Partner with us to implement state-of-the-art packaging and processing solutions 
            tailored to your specific needs and operational goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-copper text-white px-8 py-4 rounded-lg font-semibold hover:bg-copper/90 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-navy transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;