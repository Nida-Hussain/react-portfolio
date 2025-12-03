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
    <section id="contact" className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} py-20 transition-colors duration-300 px-4`}>
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-red-500">CONTACT</span> ME
          </h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm md:text-base`}>Get in touch with me</p>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="YOUR NAME"
            value={formData.name}
            onChange={handleChange}
            className={`w-full ${darkMode ? 'bg-gray-800 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'} px-4 py-3 rounded transition-all duration-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-sm md:text-base`}
          />
          <input
            type="email"
            name="email"
            placeholder="YOUR EMAIL"
            value={formData.email}
            onChange={handleChange}
            className={`w-full ${darkMode ? 'bg-gray-800 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'} px-4 py-3 rounded transition-all duration-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-sm md:text-base`}
          />
          <textarea
            name="message"
            placeholder="YOUR MESSAGE"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={`w-full ${darkMode ? 'bg-gray-800 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'} px-4 py-3 rounded transition-all duration-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-sm md:text-base resize-none`}
          ></textarea>
          <button 
            onClick={handleSubmit}
            className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 transition-all duration-300 transform hover:scale-105 text-sm md:text-base font-semibold"
          >
            SEND MESSAGE
          </button>
        </div>
       
      </div>
    </section>
  );
};

export default Contact;