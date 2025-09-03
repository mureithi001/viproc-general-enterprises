import React from 'react';
import { Users, Globe, Award, Heart } from 'lucide-react';

const Careers = () => {
  const benefits = [
    'Competitive salary and equity packages',
    'Comprehensive health, dental, and vision insurance',
    'Flexible work arrangements and remote options',
    'Professional development and training programs',
    'Generous PTO and sabbatical opportunities',
    '401(k) matching and retirement planning'
  ];

  const openRoles = [
    {
      title: 'Senior Floating Systems Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time'
    },
    {
      title: 'Environmental Impact Specialist',
      department: 'Sustainability',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      location: 'Austin, TX',
      type: 'Full-time'
    },
    {
      title: 'Solar Installation Technician',
      department: 'Field Operations',
      location: 'Multiple Locations',
      type: 'Full-time'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-steel-gray text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Join Our Mission
          </h1>
          <p className="text-xl lg:text-2xl text-cream/90 leading-relaxed">
            Help us revolutionize renewable energy and create a sustainable future 
            for generations to come.
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-navy mb-6">Why Join Floating Solar?</h2>
              <p className="text-lg text-steel-gray mb-8 leading-relaxed">
                At Floating Solar, we're not just building renewable energy systems – 
                we're pioneering a sustainable future. Our team of passionate engineers, 
                environmental scientists, and innovators work together to solve some of 
                the world's most pressing energy challenges.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <Users className="w-12 h-12 text-copper mx-auto mb-4" />
                  <div className="text-2xl font-bold text-navy">200+</div>
                  <div className="text-steel-gray">Team Members</div>
                </div>
                <div className="text-center">
                  <Globe className="w-12 h-12 text-copper mx-auto mb-4" />
                  <div className="text-2xl font-bold text-navy">15+</div>
                  <div className="text-steel-gray">Countries</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-navy mb-16 text-center">Our Culture</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-copper to-navy rounded-2xl flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-navy mb-4">Innovation-Driven</h3>
                <p className="text-steel-gray leading-relaxed">
                  We encourage creative thinking and provide resources for continuous learning 
                  and professional growth in cutting-edge renewable energy technologies.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-copper to-navy rounded-2xl flex items-center justify-center flex-shrink-0">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-navy mb-4">Purpose-Driven</h3>
                <p className="text-steel-gray leading-relaxed">
                  Every team member contributes to meaningful work that directly impacts 
                  environmental sustainability and global energy independence.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-copper to-navy rounded-2xl flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-navy mb-4">Collaborative</h3>
                <p className="text-steel-gray leading-relaxed">
                  Our diverse, interdisciplinary teams work together across departments 
                  and continents to deliver exceptional results for our clients.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-copper to-navy rounded-2xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-navy mb-4">Global Impact</h3>
                <p className="text-steel-gray leading-relaxed">
                  Join projects that span continents and contribute to solving global 
                  energy challenges while preserving our planet's resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-navy mb-16 text-center">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-xl flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-2 h-2 bg-copper rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-steel-gray">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-16 text-center">Open Positions</h2>
          <div className="space-y-6">
            {openRoles.map((role, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl hover:bg-white/20 transition-colors cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                    <div className="flex flex-wrap gap-4 text-cream/90">
                      <span className="text-sm">{role.department}</span>
                      <span className="text-sm">•</span>
                      <span className="text-sm">{role.location}</span>
                      <span className="text-sm">•</span>
                      <span className="text-sm">{role.type}</span>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 bg-copper text-white px-6 py-2 rounded-lg font-semibold hover:bg-copper/90 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-cream/90 mb-6">
              Don't see the perfect role? We're always looking for exceptional talent.
            </p>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-navy transition-all">
              Submit General Application
            </button>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-navy mb-8">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-copper text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Apply</h3>
              <p className="text-steel-gray">
                Submit your application with resume and cover letter through our careers portal.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-copper text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Interview</h3>
              <p className="text-steel-gray">
                Participate in virtual and on-site interviews with our hiring team and department leads.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-copper text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Join</h3>
              <p className="text-steel-gray">
                Complete onboarding and begin your journey with our team of renewable energy pioneers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;