import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'info@floatingsolarafrica.com',
      description: 'Send us a message anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+254 790 619961\n+254 727 611034',
      description: 'Mon-Fri, 8am-6pm PST'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: 'Ruaraka Square F1\nThika Road, Nairobi',
      description: 'Visit our main office'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: '24 hours',
      description: 'Average response time'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-steel-gray text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl lg:text-2xl text-cream/90 leading-relaxed">
            Ready to explore floating solar solutions for your project? 
            Our team is here to help you get started.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white ring-1 ring-[#3A65A9]/10 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 ring-1 ring-[#3A65A9]/20">
                  <info.icon className="w-8 h-8 text-[#3A65A9]" />
                </div>
                <h3 className="text-xl font-semibold text-[#3A65A9] mb-3">{info.title}</h3>
                <div className="text-[#818286] font-medium mb-2 whitespace-pre-line">{info.details}</div>
                <p className="text-sm text-[#818286]">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy mb-6">Send Us a Message</h2>
            <p className="text-xl text-steel-gray">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-cream rounded-lg focus:border-copper focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-cream rounded-lg focus:border-copper focus:outline-none transition-colors"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-navy mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-cream rounded-lg focus:border-copper focus:outline-none transition-colors"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-navy mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-cream rounded-lg focus:border-copper focus:outline-none transition-colors"
                >
                  <option value="">Select a topic</option>
                  <option value="consultation">Project Consultation</option>
                  <option value="quote">Request Quote</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="careers">Career Opportunities</option>
                  <option value="media">Media/Press</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-cream rounded-lg focus:border-copper focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project, timeline, and requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-copper text-white py-4 px-8 rounded-lg font-semibold hover:bg-copper/90 transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-steel-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12">
                <h3 className="text-3xl font-serif font-bold text-navy mb-6">Visit Our Office</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-copper mt-1" />
                    <div>
                      <div className="font-semibold text-navy">Headquarters</div>
                      <div className="text-steel-gray">Ruaraka Square F1<br />Thika Road, Nairobi</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-copper mt-1" />
                    <div>
                      <div className="font-semibold text-navy">Office Hours</div>
                      <div className="text-steel-gray">Monday - Friday: 8:00 AM - 6:00 PM EAT<br />Weekend: By appointment</div>
                    </div>
                  </div>
                </div>
                <p className="text-steel-gray">
                  Our Nairobi headquarters houses our engineering team, research lab, 
                  and executive offices. Schedule a visit to see our latest floating solar 
                  prototypes and meet with our technical experts.
                </p>
              </div>
              <div className="h-80 lg:h-auto bg-gradient-to-br from-navy to-copper flex items-center justify-center">
                <div className="text-white text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <div className="text-xl font-semibold">Interactive Map</div>
                  <div className="text-cream/90">Nairobi, Kenya</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;