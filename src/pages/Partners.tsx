import { Handshake, Award, Globe, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partners = () => {
  const partners = [
    { name: 'SMI S.p.A', country: 'Italy' },
    { name: 'Robopac', country: 'Italy' },
    { name: 'ITIPACK', country: 'Italy' },
    { name: 'Zambelli', country: 'Italy' },
    { name: 'Gampack', country: 'Italy' },
    { name: 'Makro Labelling', country: 'Italy' },
    { name: 'Multipack', country: 'Italy' },
    { name: 'UVA Packaging', country: 'Netherlands' },
    { name: 'Gurki', country: 'India' },
    { name: 'Bestack', country: 'China' },
  ];

  const partnershipBenefits = [
    'Access to world-class processing and packaging machinery.',
    'Exclusive rights to distribute innovative technologies in East Africa.',
    'Comprehensive training from leading global manufacturers.',
    'Joint marketing to enhance brand visibility and market reach.',
    'Dedicated technical support and engineering expertise.',
    'Collaborative opportunities to drive industry innovation.'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-steel-gray text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Our Global Partners
          </h1>
          <p className="text-xl lg:text-2xl text-cream/90 leading-relaxed">
            Collaborating with the world's best to deliver excellence in packaging and processing solutions.
          </p>
        </div>
      </section>

      {/* Our Esteemed Partners */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-navy mb-6">Our Esteemed Partners</h2>
            <p className="text-xl text-steel-gray max-w-3xl mx-auto leading-relaxed">
              We collaborate with globally recognized manufacturers to bring you the most advanced and reliable packaging and processing machinery.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center group hover:scale-105 transition-transform duration-300">
                {/* Placeholder for logo */}
                <div className="h-24 flex items-center justify-center mb-4">
                  <Globe className="w-12 h-12 text-steel-gray/50 group-hover:text-copper transition-colors" />
                </div>
                <h3 className="font-bold text-navy text-lg">{partner.name}</h3>
                <p className="text-sm text-steel-gray">{partner.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-navy mb-8">Why Partner With Viproc?</h2>
              <p className="text-lg text-steel-gray mb-8 leading-relaxed">
                Our partnerships are built on trust, mutual growth, and a shared commitment to excellence. We provide our partners with unparalleled access to the East African market, backed by our deep industry knowledge and customer-centric approach.
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
                src="/hero/image.png" // Placeholder image, consider replacing
                alt="Global partnership collaboration"
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
            Are you a manufacturer of high-quality processing or packaging equipment? Join our network and let's grow together in the dynamic East African market.
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