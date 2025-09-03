import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Zap, Shield, Settings, Droplets } from 'lucide-react';
import { getServiceBySlug } from '../data/services';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-navy mb-4">Service Not Found</h1>
          <p className="text-steel-gray mb-8">The service you're looking for doesn't exist.</p>
          <Link
            to="/solutions"
            className="inline-flex items-center space-x-2 bg-copper text-white px-6 py-3 rounded-lg font-semibold hover:bg-copper/90 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Solutions</span>
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Solar Technology':
        return Zap;
      case 'Environmental':
        return Shield;
      case 'Power Systems':
        return Settings;
      case 'Water Treatment':
        return Droplets;
      default:
        return Zap;
    }
  };

  const CategoryIcon = getCategoryIcon(service.category);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-steel-gray text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-cream/90 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Services</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-copper rounded-xl flex items-center justify-center">
                  <CategoryIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-cream/90 font-medium">{service.category}</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-cream/90 leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="relative">
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
                  className="rounded-2xl shadow-2xl"
                  loading="eager"
                  decoding="async"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-navy mb-8">Overview</h2>
          <p className="text-lg text-steel-gray leading-relaxed mb-12">
            {service.details.overview}
          </p>

          {/* Key Highlights */}
          <div className="bg-cream p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-navy mb-6">Key Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                  <span className="text-steel-gray">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications & Benefits */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Applications */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-serif font-bold text-navy mb-6">Applications</h3>
              <ul className="space-y-4">
                {service.details.applications.map((application, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-copper rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-steel-gray leading-relaxed">{application}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-serif font-bold text-navy mb-6">Benefits</h3>
              <ul className="space-y-4">
                {service.details.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span className="text-steel-gray leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      {service.details.technicalSpecs && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-bold text-navy mb-8">Technical Specifications</h2>
            <div className="bg-navy text-white p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.details.technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-copper rounded-full flex-shrink-0"></div>
                    <span className="text-cream/90">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Implement {service.title}?
          </h2>
          <p className="text-xl text-cream/90 mb-8 leading-relaxed">
            Our team of experts is ready to design and deploy the perfect 
            solution for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-copper text-white px-8 py-4 rounded-lg font-semibold hover:bg-copper/90 transition-colors"
            >
              Request Consultation
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-navy transition-all"
            >
              <span>Back to Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;