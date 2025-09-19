import { CheckCircle } from 'lucide-react';

const Clients = () => {
  const clients = [
    // First 6 clients (same as home page)
    { name: 'Unilever', logo: '/site-images/Unilever.jpg' },
    { name: 'Trufoods', logo: '/site-images/Trufoods Limited.jpg' },
    { name: 'Bidco Africa', logo: '/site-images/Bidco Africa.jpeg' },
    { name: 'Impala Glass Industries Ltd', logo: '/site-images/Impala Glass Industries Ltd.jpg' },
    { name: 'Tononoka Steels Ltd', logo: '/site-images/Tononoka Steels Ltd.jpg' },
    { name: 'Vectus Kenya Ltd', logo: '/site-images/Vectus Kenya Ltd.jpg' },
    
    // Remaining clients
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

  const whyChooseViproc = [
    'Unmatched Expertise: Leverage our deep industry knowledge for your projects.',
    'World-Class Solutions: Gain access to advanced machinery from leading global manufacturers.',
    'Tailored for You: We provide customized solutions to meet your unique production goals.',
    'End-to-End Support: From installation to aftermarket service, we are your reliable partner.',
    'Commitment to Quality: We are dedicated to delivering excellence and ensuring your satisfaction.',
    'Sustainable Innovation: Benefit from eco-friendly technologies that drive efficiency.'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark to-dark/90 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Our Valued Clients
          </h1>
          <p className="text-xl lg:text-2xl text-light/90 leading-relaxed">
            We are proud to have partnered with a diverse range of industry leaders, delivering solutions that drive growth and efficiency.
          </p>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-dark mb-6">A Selection of Our Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our success is measured by the success of our clients. We are honored to have worked with these exceptional companies across various industries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex items-center justify-center h-32 transition-transform duration-300 group hover:scale-105">
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="max-h-20 max-w-full object-contain" />
                ) : (
                  <p className="font-semibold text-dark text-lg text-center">{client.name}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Viproc Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-dark mb-8">Why Choose Viproc?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our approach is built on a foundation of trust, expertise, and a relentless commitment to our clients' success. We go beyond just supplying equipment; we deliver comprehensive solutions that add tangible value to your operations.
              </p>
              <div className="space-y-4">
                {whyChooseViproc.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/site-images/Innovative Solutions for Modern Production.jpg"
                alt="State-of-the-art packaging and processing solutions"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;