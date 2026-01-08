import React, { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields!');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address!');
      return;
    }
    
    console.log('Form Data:', formData);
    alert('Message sent successfully! ✅');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-gray-900 to-black text-white' : 'bg-gradient-to-br from-white to-gray-50 text-gray-900'} py-20 transition-colors duration-500 px-4 relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/10 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
            <span className="text-blue-500 relative z-10">CONTACT</span> ME
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/30 rounded-full"></div>
          </h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm md:text-base mt-4 max-w-lg mx-auto`}>Get in touch with me</p>
        </div>

        <div className="max-w-lg mx-auto space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="YOUR NAME"
              value={formData.name}
              onChange={handleChange}
              className={`w-full ${darkMode ? 'bg-white/10 backdrop-blur-sm text-white placeholder-gray-400' : 'bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500'} px-6 py-4 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm md:text-base border border-blue-500/20 focus:border-blue-500/50 shadow-lg`}
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="YOUR EMAIL"
              value={formData.email}
              onChange={handleChange}
              className={`w-full ${darkMode ? 'bg-white/10 backdrop-blur-sm text-white placeholder-gray-400' : 'bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500'} px-6 py-4 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm md:text-base border border-blue-500/20 focus:border-blue-500/50 shadow-lg`}
            />
          </div>
          <div className="relative">
            <textarea
              name="message"
              placeholder="YOUR MESSAGE"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`w-full ${darkMode ? 'bg-white/10 backdrop-blur-sm text-white placeholder-gray-400' : 'bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500'} px-6 py-4 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm md:text-base resize-none border border-blue-500/20 focus:border-blue-500/50 shadow-lg`}
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] text-sm md:text-base font-semibold shadow-xl shadow-blue-500/25 relative overflow-hidden group"
          >
            <span className="relative z-10">SEND MESSAGE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;