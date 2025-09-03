import React from 'react';
import { Target, Heart, Lightbulb, ArrowRight, Handshake, Eye, Goal, Building, Leaf } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer-First',
      description: 'Every project begins with understanding your unique needs and ends with a tailored solution.'
    },
    {
      icon: Target,
      title: 'Quality & Excellence',
      description: 'We supply advanced machinery and provide world-class processing and packaging solutions.'
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'We stay by your side long after installation, offering reliable aftermarket support and guidance.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Sustainability',
      description: 'We integrate eco-friendly technologies to contribute to a greener future.'
    }
  ];

  const whatSetsUsApart = [
    {
      title: 'End-to-End Solutions',
      description: 'From end-of-line equipment and installations to spare parts and training, we offer comprehensive services.'
    },
    {
      title: 'Global Partnerships',
      description: 'We collaborate with leading manufacturers from Italy, India, and China to supply advanced machinery.'
    },
    {
      title: 'Customer-First Approach',
      description: 'We deliver tailored solutions that maximize productivity and add real value to your business.'
    },
    {
      title: 'Reliable Aftermarket Support',
      description: 'We provide long-term support, quick spare parts delivery, and continuous technical guidance.'
    }
  ];

  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-steel-gray text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            About Viproc General Enterprises
          </h1>
          <p className="text-xl lg:text-2xl text-cream/90 leading-relaxed">
            World-class processing and packaging solutions that empower businesses.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 ring-1 ring-navy/10">
                <Goal className="w-8 h-8 text-navy" />
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-lg text-steel-gray leading-relaxed">
                To empower businesses with world-class processing and packaging solutions that drive efficiency, quality, and growth, while fostering sustainable practices.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 ring-1 ring-navy/10">
                <Eye className="w-8 h-8 text-navy" />
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy mb-4">Our Vision</h2>
              <p className="text-lg text-steel-gray leading-relaxed">
                To be East Africa’s most trusted partner for innovative and reliable industrial solutions, shaping the future of manufacturing in the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-serif font-bold text-navy mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-steel-gray leading-relaxed">
                <p>
                  At VIPROC General Enterprises, we believe packaging is more than just the final stage of production — it is the point where quality, safety, and brand identity come together. Since our establishment, we have dedicated ourselves to delivering world-class processing and packaging solutions that empower businesses to compete at the highest level.
                </p>
                <p>
                  With over 7 years of experience, we have built a reputation as a trusted partner for companies across East Africa. Our expertise lies in end-of-line equipment, machine installations, spare parts distribution, and integrated packaging systems. We also provide consulting and training services to ensure our clients not only acquire the right solutions but also have the knowledge and support needed to run them efficiently.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/hero/about.jpg"
                alt="Industrial packaging machinery"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-copper/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-serif font-bold text-navy mb-12">Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
            {[
              'Food & Beverage',
              'Pharmaceuticals',
              'Chemicals',
              'Agrochemicals',
              'Printing & Packaging',
              'Steel & Metals',
              'Glass Manufacturing',
              'Tanks & Vessels'
            ].map((industry, index) => (
              <div key={index} className="p-6 bg-cream rounded-2xl group hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-navy group-hover:text-copper transition-colors duration-300">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-navy mb-8">Our Commitment</h2>
            <div className="space-y-6 text-lg text-steel-gray leading-relaxed">
              <p>
                Our strength comes from strategic partnerships with some of the world’s leading manufacturers in Italy, India, and China. Through these collaborations, we are able to supply advanced machinery that meets the diverse needs of industries such as food and beverages, pharmaceuticals, chemicals, agrochemicals, printing, steel, glass, and tanks manufacturing.
              </p>
              <p>
                What sets us apart is our customer-first approach. At VIPROC, every project begins with understanding your unique needs and ends with delivering a tailored solution that maximizes productivity, reduces downtime, and adds real value to your business. We pride ourselves on staying by your side long after installation — offering reliable aftermarket support, quick spare parts delivery, and continuous technical guidance.
              </p>
              <p>
                Our commitment goes beyond business. Sustainability and innovation are central to our operations, and we strive to integrate eco-friendly technologies that contribute to a greener future. By combining technical expertise, innovation, and customer care, we ensure that every client experiences the VIPROC difference — packaging excellence that drives growth and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-serif font-bold text-navy mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-steel-gray max-w-3xl mx-auto mb-12">
              We are proud to partner with a diverse range of clients, from startups to established enterprises, helping them achieve their production goals.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex justify-center items-center p-6 bg-white rounded-2xl h-32 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Building className="w-12 h-12 text-steel-gray" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-navy mb-16 text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {whatSetsUsApart.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 ring-1 ring-[#3A65A9]/20">
                  <ArrowRight className="w-4 h-4 text-[#3A65A9]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#3A65A9] mb-2">{item.title}</h3>
                  <p className="text-[#818286]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/hero/sustainability.jpg" // Placeholder image
                alt="Eco-friendly industrial solutions"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-4 mb-6">
                <Leaf className="w-8 h-8 text-copper" />
                <h2 className="text-4xl font-serif font-bold text-navy">Sustainability & Innovation</h2>
              </div>
              <div className="space-y-6 text-lg text-steel-gray leading-relaxed">
                <p>
                  We are committed to a greener future. Our focus on sustainability involves sourcing energy-efficient machinery, promoting recyclable packaging materials, and helping our clients reduce their carbon footprint. By integrating innovative, eco-friendly technologies, we deliver solutions that are both powerful and responsible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-16 text-center">Our Values</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ring-1 ring-[#3A65A9]/20">
                  <value.icon className="w-8 h-8 text-[#3A65A9]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-cream/90 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;