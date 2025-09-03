import React, { useRef } from 'react';
import { Handshake, Award, Globe, Users, ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partners = () => {
  // const partnerCategories = [
  //   {
  //     title: 'Technology Partners',
  //     description: 'Leading manufacturers and technology providers',
  //     partners: [
  //       {
  //         name: 'SolarTech Industries',
  //         description: 'Premium solar panel manufacturer with 25+ years of experience',
  //         specialization: 'High-efficiency photovoltaic modules',
  //         logo: 'ST'
  //       },
  //       {
  //         name: 'HydroFlow Systems',
  //         description: 'Advanced water management and pumping solutions',
  //         specialization: 'Solar-powered water systems',
  //         logo: 'HF'
  //       },
  //       {
  //         name: 'PowerGrid Solutions',
  //         description: 'Electrical infrastructure and grid connection specialists',
  //         specialization: 'High-voltage electrical systems',
  //         logo: 'PG'
  //       },
  //       {
  //         name: 'AutoControl Tech',
  //         description: 'Industrial automation and control system experts',
  //         specialization: 'PLC and SCADA systems',
  //         logo: 'AC'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Installation Partners',
  //     description: 'Certified installation and maintenance specialists',
  //     partners: [
  //       {
  //         name: 'Kenya Solar Installers',
  //         description: 'Certified solar installation specialists across East Africa',
  //         specialization: 'Residential & commercial installations',
  //         logo: 'KS'
  //       },
  //       {
  //         name: 'Marine Construction Ltd',
  //         description: 'Specialized in floating platform installations',
  //         specialization: 'Floating solar systems',
  //         logo: 'MC'
  //       },
  //       {
  //         name: 'ElectroTech Services',
  //         description: 'Licensed electrical contractors and maintenance',
  //         specialization: 'Electrical systems & maintenance',
  //         logo: 'ET'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Financial Partners',
  //     description: 'Financing and investment solutions for renewable energy',
  //     partners: [
  //       {
  //         name: 'Green Energy Finance',
  //         description: 'Specialized renewable energy project financing',
  //         specialization: 'Solar project loans & leasing',
  //         logo: 'GE'
  //       },
  //       {
  //         name: 'Development Bank of Kenya',
  //         description: 'Supporting sustainable development projects',
  //         specialization: 'Infrastructure financing',
  //         logo: 'DB'
  //       },
  //       {
  //         name: 'Impact Investment Fund',
  //         description: 'Funding sustainable energy initiatives',
  //         specialization: 'Clean energy investments',
  //         logo: 'II'
  //       }
  //     ]
  //   }
  // ];

  // Partner logos for carousel
  const partnerItems = [
    { src: '/partners/Fronius-Logo.webp', alt: 'Fronius' },
    { src: '/partners/Growatt-logo-new-GB.png', alt: 'Growatt' },
    { src: '/partners/Hoppecke-LOGO.png', alt: 'Hoppecke' },
    { src: '/partners/JA-Solar-Logo.png', alt: 'JA Solar' },
    { src: '/partners/Solar_MD-Kathea-Energy.webp', alt: 'Solar MD' },
    { src: '/partners/SunPower.png', alt: 'SunPower' },
    { src: '/partners/Tesvolt_Logo.png', alt: 'Tesvolt' },
    { src: '/partners/Trinasolar_Logo_EN.png', alt: 'Trina Solar' },
    { src: '/partners/byd.png', alt: 'BYD' },
    { src: '/partners/canadian-solar_logo-300x169.webp', alt: 'Canadian Solar' },
    { src: '/partners/caracal-logo.png', alt: 'Caracal' },
    { src: '/partners/jinko-solar-logo.png', alt: 'Jinko Solar' },
    { src: '/partners/k2_systems_logo.png', alt: 'K2 Systems' },
    { src: '/partners/longi-logo.png', alt: 'LONGi' },
    { src: '/partners/sungrow_logo.png', alt: 'Sungrow' },
    { src: '/partners/trojan-battery-company-logo.png', alt: 'Trojan Battery Company' },
  ];
  const partnersScrollerRef = useRef<HTMLDivElement | null>(null);
  const scrollPartners = (dir: 'left' | 'right') => {
    const el = partnersScrollerRef.current;
    if (!el) return;
    const amount = Math.min(600, el.clientWidth * 0.8);
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const partnershipBenefits = [
    'Access to cutting-edge technology and equipment',
    'Comprehensive training and certification programs',
    'Joint marketing and business development opportunities',
    'Technical support and engineering expertise',
    'Competitive pricing and volume discounts',
    'Priority access to new products and innovations'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-steel-gray text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Our Partners
          </h1>
          <p className="text-xl lg:text-2xl text-cream/90 leading-relaxed">
            Building the future of renewable energy through strategic partnerships 
            and collaborative innovation across East Africa.
          </p>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Handshake, number: '25+', label: 'Strategic Partners' },
              { icon: Globe, number: '5', label: 'Countries' },
              { icon: Award, number: '15+', label: 'Certified Partners' },
              { icon: Users, number: '100+', label: 'Joint Projects' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-4 ring-1 ring-[#3A65A9]/20">
                  <stat.icon className="w-8 h-8 text-[#3A65A9]" />
                </div>
                <div className="text-3xl font-serif font-bold text-[#3A65A9] mb-2">{stat.number}</div>
                <div className="text-[#818286] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-navy mb-6">Partner Network</h2>
            <p className="text-xl text-steel-gray max-w-3xl mx-auto leading-relaxed">
              We collaborate with industry leaders across technology, installation, and financing 
              to deliver comprehensive renewable energy solutions.
            </p>
          </div>

          {/* Partner logos carousel */}
          <div className="relative">
            <button
              aria-label="Scroll partners left"
              onClick={() => scrollPartners('left')}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white text-[#3A65A9] shadow hover:bg-white/90"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div
              ref={partnersScrollerRef}
              className="flex gap-10 overflow-x-auto scroll-smooth py-4 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white text-[#3A65A9] shadow hover:bg-white/90"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* <div className="space-y-16">
            {partnerCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-serif font-bold text-navy mb-4">{category.title}</h3>
                  <p className="text-lg text-steel-gray">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.partners.map((partner, partnerIndex) => (
                    <div
                      key={partnerIndex}
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                    >
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-copper to-navy rounded-xl flex items-center justify-center text-white font-bold text-lg">
                          {partner.logo}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-navy group-hover:text-copper transition-colors">
                            {partner.name}
                          </h4>
                          <div className="text-sm text-copper font-medium">{partner.specialization}</div>
                        </div>
                      </div>
                      <p className="text-steel-gray leading-relaxed">{partner.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div> */}
          
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-navy mb-8">Partnership Benefits</h2>
              <p className="text-lg text-steel-gray mb-8 leading-relaxed">
                Our strategic partnerships enable us to deliver superior value to our clients 
                through enhanced capabilities, competitive pricing, and innovative solutions.
              </p>
              <div className="space-y-4">
                {partnershipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-copper mt-0.5 flex-shrink-0" />
                    <span className="text-steel-gray leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/hero/image.png"
                alt="Engineering Tomorrow's Energy Solutions"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-copper/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Become a Partner
          </h2>
          <p className="text-xl text-cream/90 mb-8 leading-relaxed">
            Join our growing network of partners and help us expand renewable energy 
            access across East Africa and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-copper text-white px-8 py-4 rounded-lg font-semibold hover:bg-copper/90 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Handshake className="w-5 h-5" />
              <span>Partner With Us</span>
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-navy transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>View Our Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;