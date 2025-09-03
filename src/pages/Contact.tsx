import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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
      details: 'viproc.g.enterprises@gmail.com',
      description: 'Get in touch via email'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+254 728 968 792',
      description: 'Call us for direct inquiries'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Kenya',
      description: 'Serving clients across East Africa'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark to-dark/90 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl lg:text-2xl text-light/90 leading-relaxed">
            Have a question or a project in mind? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white ring-1 ring-secondary/10 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 ring-1 ring-secondary/20">
                  <info.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">{info.title}</h3>
                <div className="text-gray-600 font-medium mb-2 whitespace-pre-line">{info.details}</div>
                <p className="text-sm text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-dark mb-6">Send Us a Message</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-dark mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select a topic</option>
                  <option value="equipment">Equipment Inquiry</option>
                  <option value="support">Support Request</option>
                  <option value="consulting">Consulting & Training</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project, timeline, and requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-4 px-8 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;