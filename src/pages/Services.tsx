import React from 'react';
import { Zap, Droplets, Shield, Settings, ArrowRight, Wrench, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, getServiceCategories } from '../data/services';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Services = () => {
  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'Solar Technology':
        return Zap;
      case 'Power Systems':
        return Settings;
      case 'Water Systems':
        return Droplets;
      case 'Automation':
        return Wrench;
      case 'Floating Technology':
        return Waves;
      default:
        return Zap;
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-steel-gray text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Comprehensive Energy Services
          </h1>
          <p className="text-xl lg:text-2xl text-cream/90 leading-relaxed">
            From design to deployment, our integrated services deliver 
            maximum efficiency while preserving environmental integrity.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
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
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center ring-1 ring-[#3A65A9]/20">
                      <ServiceIcon className="w-8 h-8 text-[#3A65A9]" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-[#3A65A9]">{service.title}</h2>
                  </div>
                  <p className="text-lg text-steel-gray mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-copper rounded-full"></div>
                        <span className="text-steel-gray">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center space-x-2 bg-copper text-white px-6 py-3 rounded-lg font-semibold hover:bg-copper/90 transition-colors group"
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
                    <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent rounded-2xl group-hover:opacity-0 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Advantages */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-navy mb-6">Why Choose Our Services?</h2>
            <p className="text-xl text-steel-gray max-w-3xl mx-auto leading-relaxed">
              Our comprehensive approach delivers significant advantages across all energy sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Technical Expertise',
                description: 'Multidisciplinary team with deep knowledge in solar, power systems, water, and automation',
                icon: '🔧'
              },
              {
                title: 'Quality Assurance',
                description: 'Every project designed and built with precision, ensuring long-term performance and safety',
                icon: '✓'
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored solutions that adapt to each client\'s unique needs and requirements',
                icon: '⚙️'
              },
              {
                title: 'Innovation Focus',
                description: 'Staying at the forefront of renewable energy technology and automation systems',
                icon: '💡'
              },
              {
                title: 'Proven Results',
                description: 'Track record of successful projects across diverse sectors and applications',
                icon: '📊'
              },
              {
                title: 'Full Support',
                description: 'Comprehensive service from initial consultation through ongoing maintenance',
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
                <h3 className="text-xl font-semibold text-navy mb-3">{advantage.title}</h3>
                <p className="text-steel-gray leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Implement Your Service?
          </h2>
          <p className="text-xl text-cream/90 mb-8 leading-relaxed">
            Our team of experts is ready to design and deploy the perfect 
            energy solution for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-copper text-white px-8 py-4 rounded-lg font-semibold hover:bg-copper/90 transition-colors"
            >
              Request Consultation
            </Link>
            <Link
              to="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-navy transition-all"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;