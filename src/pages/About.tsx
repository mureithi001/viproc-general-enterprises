import { Eye, Goal, Leaf, Utensils, Pill, FlaskConical, Sprout, Printer, Factory, GlassWater, Container } from 'lucide-react';

const About = () => {
  const clients = [
    // First 6 priority clients
    { name: 'Unilever', logo: '/site-images/Unilever.jpg' },
    { name: 'Trufoods', logo: '/site-images/Trufoods Limited.jpg' },
    { name: 'Bidco Africa', logo: '/site-images/Bidco Africa.jpeg' },
    { name: 'Impala Glass Industries Ltd', logo: '/site-images/Impala Glass Industries Ltd.jpg' },
    { name: 'Tononoka Steels Ltd', logo: '/site-images/Tononoka Steels Ltd.jpg' },
    { name: 'Vectus Kenya Ltd', logo: '/site-images/Vectus Kenya Ltd.jpg' },
    
    // Additional clients
    { name: 'Styroplast Limited', logo: '/site-images/Styroplast Limited.jpg' },
    { name: 'Printwell Industries Ltd', logo: '/site-images/Printwell Industries Ltd.jpg' },
    { name: 'Targeter Educational Publishers', logo: '/site-images/Targeter Educational Publishers.jpg' },
    { name: 'Rift Valley Brewing Company', logo: '/site-images/Rift valley brewing company.jpg' },
    { name: 'Two Cousins Distillers', logo: '/site-images/Two Cousins Distillers.jpeg' },
    { name: 'Fresh Life', logo: '/site-images/Fresh Life.jpg' },
    { name: 'Abyssinia Steels', logo: '/site-images/Abyssinia Steels.jpg' },
    { name: 'Elkeiyo Dairy', logo: '/site-images/Elkeiyo Dairy.jpg' },
    { name: 'Botachem Limited', logo: '/project-images/Botachem Limited.jpg' },
    { name: 'Atlantis Life Science', logo: '/site-images/Atlantis Life Science.jpg' },
    { name: 'Alpha Clean Foods', logo: '/site-images/Alpha Clean Foods.jpeg' },
    { name: 'Azania Distillers', logo: '/site-images/Azania Distillers.jpg' },
    { name: 'Rubber Products Ltd', logo: '/site-images/Rubber Products Ltd.jpg' },
    { name: 'Fedo Agencies Ltd', logo: '/site-images/Fedo Agencies Ltd.jpg' },
    { name: 'LSHS', logo: '/site-images/LSHS.jpeg' },
    { name: 'Dawa Limited', logo: '/site-images/Dawa Limited.jpeg' },
    { name: 'Sub Saharan Eca Industries', logo: '/site-images/Sub Saharan Eca Industries.jpeg' },
    { name: 'B Braun Kenya Ltd', logo: '/site-images/B Braun Kenya Ltd.jpg' },
  ];

  return (
    <div className="pt-20">
      {/* About Section */}
      <section className="pt-4 md:pt-6 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-serif font-bold text-navy mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-steel-gray leading-relaxed">
                <p>
                  At VIPROC General Enterprises, we supply a wide variety of packaging and processing machinery from leading global manufacturers. We focus on the points where quality, safety, and brand identity come together — delivering integrated solutions that empower businesses to compete at the highest level.
                </p>
                <p>
                  With over 7 years of experience across East Africa, our core strengths include end‑of‑line equipment, machine installations and commissioning, OEM spare parts, and integrated packaging systems. We also provide consulting and training so your team can operate and maintain equipment efficiently and safely.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/site-images/Our Story.jpg"
                alt="Industrial packaging machinery"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-copper/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
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
                To be East Africa’s most trusted provider for innovative and reliable industrial solutions, shaping the future of manufacturing in the region.
              </p>
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
              { name: 'Food & Beverage', icon: Utensils },
              { name: 'Pharmaceuticals', icon: Pill },
              { name: 'Chemicals', icon: FlaskConical },
              { name: 'Agrochemicals', icon: Sprout },
              { name: 'Printing & Packaging', icon: Printer },
              { name: 'Steel & Metals', icon: Factory },
              { name: 'Glass Manufacturing', icon: GlassWater },
              { name: 'Tanks & Vessels', icon: Container },
            ].map((industry, index) => (
              <div key={index} className="p-6 bg-cream rounded-2xl group hover:shadow-lg transition-shadow flex flex-col items-center justify-center">
                <industry.icon className="w-10 h-10 text-copper mb-4" />
                <h3 className="text-lg font-semibold text-navy group-hover:text-copper transition-colors duration-300">{industry.name}</h3>
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
                Our strength comes from strategic collaborations with some of the world’s leading manufacturers in Italy, India, and China. Through these collaborations, we are able to supply advanced machinery that meets the diverse needs of industries such as food and beverages, pharmaceuticals, chemicals, agrochemicals, printing, steel, glass, and tanks manufacturing.
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
            <h2 className="text-4xl font-serif font-bold text-navy mb-4">Our Clients</h2>
            <p className="text-lg text-steel-gray max-w-3xl mx-auto mb-12">
              We are proud to have worked with a diverse range of industry leaders.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl flex items-center justify-center h-32 transition-transform duration-300 group hover:scale-105">
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="max-h-20 max-w-full object-contain" />
                ) : (
                  <p className="font-semibold text-navy text-lg text-center">{client.name}</p>
                )}
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
                src="/site-images/Sustainability & Innovation.jpg"
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

    </div>
  );
};

export default About;