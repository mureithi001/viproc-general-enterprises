import { MapPin, Calendar, Zap, Award } from 'lucide-react';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Complete End‑of‑Line Integration',
      location: 'Nairobi, Kenya',
      capacity: 'High Throughput Line',
      year: '2024',
      image: '/site-images/Innovative Solutions for Modern Production.jpg',
      description: 'Turnkey end‑of‑line solution including case erectors, case packers, conveyor system, shrink wrapping and palletizing with safety interlocks and HMI integration.',
      highlights: ['Case Erector + Packer', 'Conveyors & Accumulation', 'Shrink Wrapper & Tunnel', 'Palletizer Integration']
    },
    {
      title: 'Beverage Packaging Equipment Installation',
      location: 'Eldoret, Kenya',
      capacity: '24,000 BPH',
      year: '2023',
      image: '/site-images/End-of-Line Equipment 1.jpg',
      description: 'Mechanical installation and commissioning of labelers, fillers, and end‑of‑line wrapping with inline coding and inspection systems.',
      highlights: ['Labeler & Filler Setup', 'Inline Coding & Inspection', 'Operator Training', 'Performance Validation']
    },
    {
      title: 'Spare Parts & Upgrade Commissioning',
      location: 'Mombasa, Kenya',
      capacity: 'Multi‑Format Changeovers',
      year: '2023',
      image: '/site-images/Spare Parts & Support 1.jpg',
      description: 'OEM spare parts supply with change‑part upgrades, preventive maintenance kits, and PLC parameter optimization for faster format changes.',
      highlights: ['OEM Spare Parts', 'Change‑Part Upgrades', 'Preventive Maintenance', 'PLC Optimization']
    }
  ];

  const stats = [
    { icon: Zap, number: '150+', label: 'Lines Deployed' },
    { icon: MapPin, number: '25+', label: 'Sites Served' },
    { icon: Calendar, number: '100+', label: 'Installations Completed' },
    { icon: Award, number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Packaging Installations & Integrations
          </h1>
          <p className="text-xl lg:text-2xl text-cream/90 leading-relaxed">
            Selected portfolio of packaging machinery installations, end‑of‑line integrations, and commissioning projects across East Africa.
          </p>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Featured Projects */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-navy mb-16 text-center">Featured Projects</h2>
          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-serif font-bold text-navy mb-4">{project.title}</h3>
                    
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center space-x-2 text-steel-gray">
                        <MapPin className="w-4 h-4 text-[#3A65A9]" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-steel-gray">
                        <Zap className="w-4 h-4 text-[#3A65A9]" />
                        <span className="text-sm">{project.capacity}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-steel-gray">
                        <Calendar className="w-4 h-4 text-[#3A65A9]" />
                        <span className="text-sm">{project.year}</span>
                      </div>
                    </div>

                    <p className="text-steel-gray mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-navy">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-copper rounded-full"></div>
                            <span className="text-steel-gray text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-navy mb-16 text-center">Project Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Municipal Infrastructure',
                description: 'Large-scale projects for public and municipal utilities.',
                count: '45+ Projects'
              },
              {
                title: 'Industrial Facilities',
                description: 'Custom solutions for manufacturing and processing facilities.',
                count: '30+ Projects'
              },
              {
                title: 'Agricultural Projects',
                description: 'Infrastructure for farms and agricultural operations.',
                count: '25+ Projects'
              },
              {
                title: 'Water Management Systems',
                description: 'Integration with water treatment and purification systems.',
                count: '15+ Projects'
              },
              {
                title: 'Mining Infrastructure',
                description: 'Projects for tailings ponds and mining water bodies.',
                count: '10+ Projects'
              },
              {
                title: 'Specialized Structures',
                description: 'Unique and complex construction projects.',
                count: '8+ Projects'
              }
            ].map((type, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-navy mb-3">{type.title}</h3>
                <p className="text-steel-gray mb-4 leading-relaxed">{type.description}</p>
                <div className="text-copper font-semibold">{type.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Start Your Next Project
          </h2>
          <p className="text-xl text-cream/90 mb-8 leading-relaxed">
            Ready to join our portfolio of successful projects? 
            Let's discuss how we can bring your vision to life.
          </p>
          <button className="bg-copper text-white px-8 py-4 rounded-lg font-semibold hover:bg-copper/90 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;