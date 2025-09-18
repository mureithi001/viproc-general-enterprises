import { Wrench, CheckCircle, Settings, Headset, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const InstallationAndCommissioning = () => {
  const features = [
    {
      icon: Wrench,
      title: 'Expert Installation',
      description: 'Our certified technicians ensure precise installation of all equipment according to manufacturer specifications and industry standards.'
    },
    {
      icon: CheckCircle,
      title: 'Comprehensive Testing',
      description: 'Rigorous testing procedures to verify all systems are functioning at optimal performance levels before handover.'
    },
    {
      icon: Settings,
      title: 'System Calibration',
      description: 'Precise calibration of all equipment parameters to ensure maximum efficiency and productivity in your operations.'
    },
    {
      icon: Headset,
      title: 'Operator Training',
      description: 'Comprehensive training for your team to ensure safe and efficient operation of all installed systems.'
    },
    {
      icon: Clock,
      title: 'Minimal Downtime',
      description: 'Efficient project planning and execution to ensure your operations experience minimal disruption during installation.'
    },
    {
      icon: ShieldCheck,
      title: 'Safety Compliance',
      description: 'Full compliance with all relevant safety standards and regulations in every installation project.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dark to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Professional Installation & Commissioning Services
            </h1>
            <p className="text-xl lg:text-2xl text-light/90 leading-relaxed max-w-4xl mx-auto">
              Expert installation and commissioning services to ensure your equipment operates at peak performance from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Installation Process</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-dark">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Gallery Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-10 text-dark">Our Installation Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((num) => (
                <div key={num} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={`/site-images/installation ${num}.jpg`} 
                    alt={`Installation project ${num}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-6">
                    <h4 className="font-semibold text-lg mb-2 text-dark">Project #{num}</h4>
                    <p className="text-gray-600">Professional installation and commissioning completed with precision and efficiency.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90">Contact our team today to discuss your installation and commissioning needs.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InstallationAndCommissioning;
