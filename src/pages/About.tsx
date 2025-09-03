import React from 'react';
import { Target, Heart, Lightbulb, Compass, ArrowRight, Users, Award, Handshake } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We operate with transparency and honesty in all our dealings.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We aim for world-class standards in every project.'
    },
    {
      icon: Lightbulb,
      title: 'Sustainability',
      description: 'Our solutions help preserve resources and protect the environment.'
    },
    {
      icon: Compass,
      title: 'Collaboration',
      description: 'We believe great results are built through strong partnerships.'
    }
  ];

  const whatSetsUsApart = [
    {
      title: 'Technical Expertise',
      description: 'Our multidisciplinary team brings together deep knowledge in solar, power systems, water, and automation.'
    },
    {
      title: 'Commitment to Quality',
      description: 'Every project is designed and built with precision, ensuring long-term performance and safety.'
    },
    {
      title: 'Customer Focus',
      description: 'We listen, adapt, and provide solutions tailored to each client\'s unique needs.'
    },
    {
      title: 'Innovation First',
      description: 'From floating solar platforms to advanced control systems, we stay at the forefront of renewable energy technology.'
    }
  ];

  const partners = [
    {
      name: 'SolarTech Industries',
      logo: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      description: 'Leading solar panel manufacturer'
    },
    {
      name: 'HydroFlow Systems',
      logo: 'https://images.pexels.com/photos/9800002/pexels-photo-9800002.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      description: 'Water management solutions'
    },
    {
      name: 'PowerGrid Solutions',
      logo: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      description: 'Electrical infrastructure'
    },
    {
      name: 'AutoControl Tech',
      logo: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      description: 'Automation and control systems'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-steel-gray text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            About Floating Solar
          </h1>
          <p className="text-xl lg:text-2xl text-cream/90 leading-relaxed">
            Delivering smarter, cleaner, and more sustainable energy solutions 
            for communities, businesses, and industries.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-navy mb-6">Who We Are</h2>
              <div className="space-y-6 text-lg text-steel-gray leading-relaxed">
                <p>
                  Founded in 2019, Floating Solar was created with a single vision — to deliver 
                  smarter, cleaner, and more sustainable energy solutions for communities, 
                  businesses, and industries. From our early beginnings, we have focused on 
                  combining engineering expertise with innovation to provide solar, electrical, 
                  water, and automation systems that stand the test of time.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/hero/about.jpg"
                alt="Team working on floating solar project"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-copper/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-navy mb-16 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-steel-gray leading-relaxed">
              In just a few years, we have grown into a trusted engineering partner by delivering 
              reliable projects across diverse sectors. We take pride in being one of the pioneers 
              introducing floating solar technology in the region, unlocking new opportunities 
              where land-based solutions are limited.
            </p>
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

      {/* Partners Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-navy mb-6">Our Partners</h2>
            <p className="text-xl text-steel-gray max-w-3xl mx-auto leading-relaxed">
              We collaborate with industry-leading partners to deliver comprehensive solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ring-1 ring-[#3A65A9]/20">
                  <Handshake className="w-8 h-8 text-[#3A65A9]" />
                </div>
                <h3 className="text-lg font-semibold text-[#3A65A9] mb-2">{partner.name}</h3>
                <p className="text-[#818286] text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-navy mb-8">Looking Ahead</h2>
          <p className="text-xl text-steel-gray leading-relaxed">
            Our journey is only beginning. As demand for renewable energy continues to grow, 
            Floating Solar is committed to expanding its footprint, advancing technology, 
            and empowering communities with reliable, affordable, and clean power.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;