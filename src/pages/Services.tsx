import { Package, Wrench, LifeBuoy, BrainCircuit, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Services = () => {
  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'Equipment Solutions':
        return Package;
      case 'Technical Services':
        return Wrench;
      case 'Support Services':
        return LifeBuoy;
      case 'Advisory Services':
        return BrainCircuit;
      default:
        return Package;
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Packaging Machinery, End‑of‑Line, Spares & Installation
          </h1>
          <p className="text-xl lg:text-2xl text-light/90 leading-relaxed">
            End‑to‑end solutions from equipment supply and line integration to OEM spare parts, installation, commissioning, and aftermarket support.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const ServiceIcon = getServiceIcon(service.category);
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-light rounded-2xl flex items-center justify-center ring-1 ring-secondary/20">
                        <ServiceIcon className="w-8 h-8 text-secondary" />
                      </div>
                      <h2 className="text-3xl font-serif font-bold text-secondary">{service.title}</h2>
                    </div>
                    <p className="text-lg text-steel-gray mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-steel-gray">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors group"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="relative group cursor-pointer">
                      {service.images.length > 1 ? (
                        <Swiper
                          modules={[Pagination, A11y, Autoplay]}
                          pagination={{ clickable: true }}
                          autoplay={{ delay: 4000, disableOnInteraction: false }}
                          className="rounded-2xl shadow-2xl"
                        >
                          {service.images.map((imgSrc, i) => (
                            <SwiperSlide key={i}>
                              <img
                                src={imgSrc}
                                alt={`${service.title} ${i + 1}`}
                                className="rounded-2xl w-full h-full object-cover"
                                loading={i === 0 ? 'eager' : 'lazy'}
                                decoding="async"
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      ) : (
                        <img
                          src={service.images[0]}
                          alt={service.title}
                          className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                          loading="eager"
                          decoding="async"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-tr from-dark/20 to-transparent rounded-2xl group-hover:opacity-0 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-dark mb-6">Why Choose Viproc for Packaging?</h2>
            <p className="text-xl text-steel-gray max-w-3xl mx-auto leading-relaxed">
              We combine global machinery sourcing with local engineering to deliver efficient, reliable packaging lines — backed by installation, commissioning, and OEM spares.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Global Technology',
                description: 'Access leading packaging machinery from international partners in Italy, India, and China.',
                icon: '🌍'
              },
              {
                title: 'Integrated Solutions',
                description: 'Single point of contact for equipment supply, line integration, training, and aftermarket support.',
                icon: '🔗'
              },
              {
                title: 'Expert Team',
                description: 'Experienced engineers and certified technicians for installation, commissioning, and optimization.',
                icon: '👷'
              },
              {
                title: 'Reliable Support',
                description: 'Genuine OEM spare parts with rapid delivery and responsive aftermarket service to minimize downtime.',
                icon: '🛠️'
              },
              {
                title: 'Customized Approach',
                description: 'Solutions tailored to your product formats, throughput targets, and facility constraints.',
                icon: '🎯'
              },
              {
                title: 'Long-Term Partnership',
                description: 'Committed to supporting your growth with lifecycle services and continuous improvements.',
                icon: '🤝'
              }
            ].map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">{advantage.title}</h3>
                <p className="text-steel-gray leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Optimize Your Production Line?
          </h2>
          <p className="text-xl text-light/90 mb-8 leading-relaxed">
            Let's discuss how our packaging and processing solutions can enhance your efficiency, quality, and output.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Request a Consultation
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-light hover:text-dark transition-all"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;