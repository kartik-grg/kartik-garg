import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaDiscord } from 'react-icons/fa';
import { usePersonalInfo } from '../hooks/usePersonalInfo';

const Contact = () => {
  const { personalInfo, loading, error } = usePersonalInfo();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with email service or backend API here
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      label: 'Email',
      value: personalInfo?.email || 'your@example.com',
      link: `mailto:${personalInfo?.email || 'your@example.com'}`,
    },
    ...(personalInfo?.phone ? [{
      icon: <FaPhone className="w-6 h-6" />,
      label: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
    }] : []),
    ...(personalInfo?.location ? [{
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      label: 'Location',
      value: personalInfo.location,
      link: null,
    }] : []),
  ];

  const socialLinks = [
    ...(personalInfo?.social_links?.github ? [{
      icon: <FaGithub className="w-6 h-6" />,
      label: 'GitHub',
      url: personalInfo.social_links.github,
    }] : []),
    ...(personalInfo?.social_links?.linkedin ? [{
      icon: <FaLinkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      url: personalInfo.social_links.linkedin,
    }] : []),
    ...(personalInfo?.social_links?.twitter ? [{
      icon: <FaDiscord className="w-6 h-6" />,
      label: 'Twitter',
      url: personalInfo.social_links.twitter,
    }] : []),
  ];

  return (
    <section id="contact" className="min-h-screen w-full px-4 py-16 md:px-8 lg:px-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--nav-text-color)] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-[var(--nav-text-color)] opacity-70 max-w-2xl ">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[var(--nav-text-hover)] mx-auto mb-4"></div>
            <p className="text-[var(--nav-text-color)] opacity-60">Loading contact information...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8 bg-red-900/20 border border-red-500 rounded-lg p-6">
            <p className="text-red-400">Error: {error}</p>
          </div>
        ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--nav-text-color)] mb-6">
                Contact Information
              </h3>
              <p className="text-[var(--nav-text-color)] opacity-70 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-[var(--nav-hover-bg)] border border-[var(--nav-border-color)] rounded-xl hover:border-[var(--nav-text-hover)] transition-all duration-200"
                >
                  <div className="p-3 bg-[var(--nav-text-hover)] rounded-full text-white">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-[var(--nav-text-color)] opacity-60 font-medium">
                      {info.label}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-[var(--nav-text-color)] font-semibold hover:text-[var(--nav-text-hover)] transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[var(--nav-text-color)] font-semibold">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-[var(--nav-text-color)] mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-[var(--nav-hover-bg)] border border-[var(--nav-border-color)] text-[var(--nav-text-color)] rounded-full hover:bg-[var(--nav-text-hover)] hover:border-[var(--nav-text-hover)] hover:text-white transition-all duration-200 shadow-md hover:shadow-xl hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="border border-[var(--nav-border-color)] rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--nav-text-color)] mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--nav-text-color)] opacity-80 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--nav-hover-bg)] border border-[var(--nav-border-color)] text-[var(--nav-text-color)] rounded-lg focus:outline-none focus:border-[var(--nav-text-hover)] focus:ring-2 focus:ring-[var(--nav-text-hover)] focus:ring-opacity-20 transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--nav-text-color)] opacity-80 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--nav-hover-bg)] border border-[var(--nav-border-color)] text-[var(--nav-text-color)] rounded-lg focus:outline-none focus:border-[var(--nav-text-hover)] focus:ring-2 focus:ring-[var(--nav-text-hover)] focus:ring-opacity-20 transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[var(--nav-text-color)] opacity-80 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--nav-hover-bg)] border border-[var(--nav-border-color)] text-[var(--nav-text-color)] rounded-lg focus:outline-none focus:border-[var(--nav-text-hover)] focus:ring-2 focus:ring-[var(--nav-text-hover)] focus:ring-opacity-20 transition-all duration-200"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--nav-text-color)] opacity-80 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[var(--nav-hover-bg)] border border-[var(--nav-border-color)] text-[var(--nav-text-color)] rounded-lg focus:outline-none focus:border-[var(--nav-text-hover)] focus:ring-2 focus:ring-[var(--nav-text-hover)] focus:ring-opacity-20 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[var(--nav-text-hover)] text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-lg hover:shadow-xl"
              >
                <FaPaperPlane className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
        )}

      </div>
    </section>
  );
};

export default Contact;
