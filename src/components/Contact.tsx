import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    // console.log('Form submitted:', formData);
    // alert('Thank you for your message! I\'ll get back to you soon.');
    // setFormData({ name: '', email: '', subject: '', message: '' });
    try {
      const response = await axios.post(
        "https://myportfolio-yx9s.onrender.com/send-email",  // Replace with real backend URL
        formData
      );

      if (response.data.success) {
        toast.success("Message sent successfully! 🎉");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message ❌");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error! Please try again ⚠️");
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      value: "ronakprajapati3545@gmail.com",
      link: "mailto:ronakprajapati3545@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: "Phone",
      value: "+91 9925435830",
      link: "tel:+919925435830"
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: "Location",
      value: "Ahmedabad, Gujarat",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Let's Connect
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/50">
              <div className='p-4'>
                <div className='p-3'>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
                    Let's Talk
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                    I'm always interested in hearing about new opportunities,
                    whether it's a full-time position, freelance project, or just a chat about technology.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-200 border border-white/30 hover:scale-105 transform"
                    >
                      <div className="flex-shrink-0 mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{info.title}</h4>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl border border-white/30">
                  <h4 className="font-semibold text-gray-800 mb-2">Response Time</h4>
                  <p className="text-gray-600 text-sm">
                    I typically respond to emails within 24 hours. For urgent matters,
                    feel free to give me a call.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/70 backdrop-blur-sm"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/70 backdrop-blur-sm"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/70 backdrop-blur-sm"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none bg-white/70 backdrop-blur-sm"
                    placeholder="Tell me about your project or how I can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;