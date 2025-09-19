import Hero from '../components/Hero';
import { ArrowRight, Award, Users, Zap, PackageCheck, Globe, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, type Service } from '../data/services';
import { projects } from '../data/projects';

const Home = () => {
  const stats = [
    { icon: Zap, number: '150+', label: 'Projects Delivered', description: 'Successfully completed projects worldwide' },
    { icon: Award, number: '98%', label: 'Client Satisfaction', description: 'Committed to exceeding client expectations' },
    { icon: Users, number: '20+', label: 'Years of Experience', description: 'Decades of industry-leading expertise' },
  ];

  const clients = [
    { name: 'Tononoka Steels Ltd', logo: '/site-images/Tononoka Steels Ltd.jpg' },
    { name: 'Impala Glass Industries Ltd', logo: '/site-images/Impala Glass Industries Ltd.jpg' },
    { name: 'Botachem Limited', logo: '/site-images/Botachem Limited.jpg' },
    { name: 'Styroplast Limited', logo: '/site-images/Styroplast Limited.jpg' },
    { name: 'Printwell Industries Ltd', logo: '/site-images/Printwell Industries Ltd.jpg' },
    { name: 'Vectus Kenya Ltd', logo: '/site-images/Vectus Kenya Ltd.jpg' },
    { name: 'Elkeiyo Dairy', logo: '/site-images/Elkeiyo Dairy.jpg' },
    { name: 'Two Cousins Distillers', logo: '/site-images/Two Cousins Distillers.jpg' },
  ];

  return (
    <div className="relative">
      <Hero />

      {/* Stats Section */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-secondary/20">
                  <stat.icon className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-4xl font-serif font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-600 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600 max-w-xs mx-auto">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 sm:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark mb-4 lg:mb-6">About Viproc General Enterprises</h2>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
              We provide world-class end-to-end packaging and processing solutions, empowering your business with efficiency, reliability, and innovation.
            </p>
            <Link to="/about" className="inline-flex items-center space-x-2 text-white bg-secondary hover:bg-secondary/90 px-6 py-3 rounded-lg font-semibold transition-colors">
              <span>Read more</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="relative">
            <img
              src="/site-images/About Viproc General Enterprises.jpg"
              alt="A snapshot of Viproc General Enterprises operations"
              className="rounded-2xl shadow-2xl"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-dark/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-4xl font-serif font-bold text-dark">Our Services</h2>
              <p className="text-gray-600 mt-2">From concept to commissioning—comprehensive packaging and processing solutions.</p>
            </div>
            <Link to="/services" className="hidden sm:inline-flex items-center space-x-2 text-dark hover:text-dark/80 font-semibold">
              <span>View all</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((svc: Service) => (
              <div key={svc.slug} className="group bg-light rounded-2xl p-6 border border-secondary/10 hover:border-secondary/30 transition-colors">
                <h3 className="text-xl font-semibold text-dark mb-2">{svc.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{svc.description}</p>
                <div className="flex items-center justify-between">
                  <Link to={`/services/${svc.slug}`} className="inline-flex items-center space-x-2 text-dark hover:text-dark/80 font-medium">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/services" className="text-gray-600 text-xs hover:text-dark">All services</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="sm:hidden text-center mt-8">
            <Link to="/services" className="inline-flex items-center space-x-2 text-dark hover:text-dark/80 font-semibold">
              <span>View all</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-16 sm:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-dark">Featured Projects</h2>
              <p className="text-gray-600 mt-2">Explore our successful installations and innovative solutions across industries.</p>
            </div>
            <Link to="/projects" className="hidden sm:inline-flex items-center space-x-2 text-dark hover:text-dark/80 font-semibold">
              <span>View all projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src={project.images[0]}
                    alt={`${project.title} - Featured`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      e.currentTarget.src = '/placeholder-project.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-semibold">{project.title.split(' - ')[0]}</h3>
                    <p className="text-sm opacity-90">{project.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-dark mb-2">{project.title.split(' - ')[1] || project.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <Link 
                    to="/projects" 
                    className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium text-sm"
                  >
                    View project details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Link to="/projects" className="inline-flex items-center space-x-2 text-dark hover:text-dark/80 font-semibold">
              <span>View all projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Packaging Machinery Supply (Main Offering) - moved below Services */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark mb-4 lg:mb-6">Packaging Machinery Supply</h2>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
                We supply a wide variety of primary and secondary packaging machinery from leading global manufacturers —
                backed by local engineering, installation & commissioning, and OEM spare parts.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[ 
                  { icon: PackageCheck, title: 'Primary & Secondary', text: 'Fillers, labelers, wrappers, and case packing systems.' },
                  { icon: Wrench,        title: 'Installation',      text: 'Professional installation, commissioning, and training.' },
                  { icon: Zap,           title: 'End‑of‑Line',       text: 'Case erectors/packers, conveyors, palletizers, shrink tunnels.' },
                  { icon: Globe,         title: 'Global Brands',     text: 'Sourced from trusted international manufacturers.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 rounded-xl bg-light">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-lg ring-1 ring-secondary/20 text-secondary flex-shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-dark">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link to="/services" className="inline-flex items-center space-x-2 text-white bg-secondary hover:bg-secondary/90 px-6 py-3 rounded-lg font-semibold transition-colors">
                  <span>Explore Packaging Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services/supply-of-end-of-line-packaging-machines" className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold border-2 border-secondary text-secondary hover:bg-light transition-colors">
                  <span>Supply of End of Line Packaging Machines</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <video
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Packaging machinery supply showcase"
              >
                <source src="/services-videos/Sup.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-dark/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Solutions Preview */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-serif font-bold text-dark mb-6 leading-tight">
                Innovative Solutions for Modern Production
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our advanced systems combine cutting-edge technology with robust engineering, 
                delivering reliable and efficient solutions that maximize your output and minimize downtime.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/site-images/Innovative Solutions for Modern Production.jpg"
                alt="Showcasing innovative solutions for modern production"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-dark mb-4">Our Clients</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are proud to have worked with a diverse range of industry leaders.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-light p-6 rounded-2xl flex items-center justify-center h-32 transition-transform duration-300 group hover:scale-105">
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="max-h-20 max-w-full object-contain" />
                ) : (
                  <p className="font-semibold text-dark text-lg text-center">{client.name}</p>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/clients"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              <span>View All Clients</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-dark mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering comprehensive solutions and unwavering support to drive your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: PackageCheck,
                title: 'End-to-End Solutions',
                description: 'From machinery supply to installation and support, we offer a complete, seamless service for your production needs.'
              },
              {
                icon: Globe,
                title: 'Global Technology, Local Expertise',
                description: 'We source world-class equipment from leading manufacturers and back it with our dedicated local technical support.'
              },
              {
                icon: Users,
                title: 'Client-Centric Partnership',
                description: 'Your success is our priority. We build long-term relationships by providing tailored solutions and reliable guidance.'
              },
              {
                icon: Wrench,
                title: 'Unmatched Aftermarket Support',
                description: 'Minimize downtime with rapid delivery of genuine spare parts and access to our expert technicians when you need them.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 text-secondary rounded-2xl mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Ready to Optimize Your Production Line?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Partner with us to implement state-of-the-art packaging and processing solutions 
            tailored to your specific needs and operational goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;