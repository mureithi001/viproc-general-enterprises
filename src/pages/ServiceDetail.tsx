import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, CheckCircle, Zap, Settings, Droplets } from 'lucide-react';

type SubSection = {
  title: string;
  description: string;
  highlights: string[];
  videoPlaceholder?: boolean;
  videoSrc?: string;
  image?: string;
  images?: string[];
};
import { services, Service } from '../data/services';
 

const ServiceDetail = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { slug } = useParams<{ slug: string }>();
  const service: Service | undefined = slug ? services.find((s) => s.slug === slug) : undefined;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<ReturnType<typeof setInterval>>();

  // Auto-advance slides
  useEffect(() => {
    if (service?.slug === 'installation-commissioning') {
      slideInterval.current = setInterval(() => {
        setCurrentSlide(prev => {
          const subSection = (service.details.subSections as SubSection[] | undefined)?.find(s => s.images);
          const maxSlides = subSection?.images?.length || 0;
          const next = prev + 1;
          return next >= maxSlides ? 0 : next;
        });
      }, 5000);
      
      return () => {
        if (slideInterval.current) {
          clearInterval(slideInterval.current);
        }
      };
    }
  }, [service?.slug, service?.details.subSections]);

  // Autoplay/pause subsection videos when entering/leaving viewport
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const videos = Array.from(root.querySelectorAll<HTMLVideoElement>('video[data-autoplay="true"]'));
    if (videos.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            // Try to play when at least 50% visible
            const p = video.play();
            if (p && typeof p.catch === 'function') {
              p.catch(() => {/* ignore autoplay failures */});
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: [0, 0.25, 0.5, 1] }
    );

    videos.forEach((v) => observer.observe(v));
    return () => observer.disconnect();
  }, []);

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-dark mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link
            to="/contracting"
            className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Contracting Services</span>
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Construction':
        return Zap;
      case 'Electrical':
        return Settings;
      case 'Water':
        return Droplets;
      default:
        return Zap;
    }
  };

  const CategoryIcon = getCategoryIcon(service.category);

  return (
    <div ref={containerRef} className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-light/90 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Services</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <CategoryIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-light/90 font-medium">{service.category}</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-light/90 leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="relative">
              {/* Intro video provided by client */}
              <video
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`${service.title} introduction video`}
              >
                <source src="/site-images/Sup.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-tr from-dark/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-dark mb-8">Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            {service.details.overview}
          </p>

          {/* Key Highlights */}
          <div className="bg-white p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-dark mb-6">Key Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.highlights.map((highlight: string, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-600">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </section>

      {/* Detailed Line Components (videos) moved directly after Overview */}
      {service.details.subSections && service.details.subSections.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-bold text-dark mb-10">Line Components & Solutions</h2>
            <div className="space-y-10">
              {service.details.subSections.map((sub, idx) => {
                const id = sub.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                const mediaFirst = idx % 2 === 1; // alternate layout
                return (
                <div id={id} key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start bg-light p-8 rounded-2xl shadow-lg scroll-mt-28">
                  {!mediaFirst && (
                  <div>
                    <h3 className="text-2xl font-semibold text-dark mb-3">{sub.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{sub.description}</p>
                    {sub.highlights?.length > 0 && (
                      <ul className="space-y-3">
                        {sub.highlights.map((h, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  )}
                  <div className={mediaFirst ? '' : ''}>
                    {sub.videoSrc ? (
                      <video
                        className="w-full rounded-xl shadow"
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        data-autoplay="true"
                        aria-label={`${sub.title} video`}
                      >
                        <source src={sub.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (sub as SubSection).image ? (
                      <img 
                        src={(sub as SubSection).image} 
                        alt={sub.title}
                        className="w-full h-full object-cover rounded-xl shadow"
                        loading="lazy"
                      />
                    ) : (sub as SubSection).images ? (
                      <div className="relative w-full h-64 overflow-hidden rounded-xl">
                        {(sub as SubSection).images?.map((img: string, idx: number) => (
                          <img 
                            key={idx}
                            src={img} 
                            alt={`${sub.title} ${idx + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentSlide === idx ? 'opacity-100' : 'opacity-0'}`}
                            loading="lazy"
                          />
                        ))}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                          {(sub as SubSection).images?.map((_: string, idx: number) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentSlide(idx)}
                              className={`w-3 h-3 rounded-full ${currentSlide === idx ? 'bg-primary' : 'bg-white/50'}`}
                              aria-label={`Go to slide ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="w-full aspect-video bg-white rounded-xl border border-dashed border-gray-300 flex items-center justify-center text-gray-500">
                        {sub.videoPlaceholder ? (
                          <span className="text-sm">10–15 secs video placeholder — add embed here</span>
                        ) : (
                          <span className="text-sm">Media placeholder</span>
                        )}
                      </div>
                    )}
                  </div>
                  {mediaFirst && (
                  <div>
                    <h3 className="text-2xl font-semibold text-dark mb-3">{sub.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{sub.description}</p>
                    {sub.highlights?.length > 0 && (
                      <ul className="space-y-3">
                        {sub.highlights.map((h, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  )}
                </div>
              );})}
            </div>
          </div>
        </section>
      )}

      {/* Applications & Benefits (now after videos for better flow) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Applications */}
            <div className="bg-light p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-serif font-bold text-dark mb-6">Applications</h3>
              <ul className="space-y-4">
                {service.details.applications.map((application: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-600 leading-relaxed">{application}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-light p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-serif font-bold text-dark mb-6">Benefits</h3>
              <ul className="space-y-4">
                {service.details.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {service.images && service.images.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-bold text-dark mb-12 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={image} 
                    alt={`${service.title} - Project ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technical Specifications */}
      {service.details.technicalSpecs && (
        <section className="py-20 bg-light">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-bold text-dark mb-8">Technical Specifications</h2>
            <div className="bg-dark text-white p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.details.technicalSpecs.map((spec: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-light/90">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mid-page CTA */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-serif font-bold text-dark mb-4">Discuss Your End‑of‑Line Requirements</h3>
          <p className="text-gray-700 mb-6">Our engineers will help you define formats, throughputs, and integration points to ensure a reliable, scalable solution.</p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors">
            Request a Consultation
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Implement {service.title}?
          </h2>
          <p className="text-xl text-light/90 mb-8 leading-relaxed">
            Our team of experts is ready to design and deploy the perfect 
            service for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Request Consultation
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-light hover:text-dark transition-all"
            >
              <span>Back to Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h3 className="text-3xl font-serif font-bold text-dark mb-6">Frequently Asked Questions</h3>
          <div className="divide-y divide-gray-200 bg-light rounded-2xl">
            <details className="p-6 group" open>
              <summary className="cursor-pointer font-semibold text-dark flex justify-between items-center">
                What information do you need to quote an end‑of‑line system?
                <span className="text-primary group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <p className="mt-3 text-gray-700">Typical inputs include product types/SKUs, pack formats, target speeds (units/min), available footprint/layout, utilities, and integration points with upstream equipment. We’ll help you capture this during discovery.</p>
            </details>
            <details className="p-6 group">
              <summary className="cursor-pointer font-semibold text-dark flex justify-between items-center">
                Can you integrate with our existing machines and controls?
                <span className="text-primary group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <p className="mt-3 text-gray-700">Yes. We integrate with a wide range of OEMs and controls platforms, aligning HMIs, safety interlocks, and recipe/format management for a seamless operator experience.</p>
            </details>
            <details className="p-6 group">
              <summary className="cursor-pointer font-semibold text-dark flex justify-between items-center">
                Do you provide installation, commissioning, and training?
                <span className="text-primary group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <p className="mt-3 text-gray-700">Absolutely. Our certified technicians handle installation and commissioning, followed by operator and maintenance training and access to OEM spares.</p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;