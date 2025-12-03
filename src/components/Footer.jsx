import React from "react";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`${darkMode ? 'bg-black text-white border-gray-800' : 'bg-gray-900 text-white border-gray-700'} py-8 border-t transition-colors duration-300 px-4`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="transform hover:scale-105 transition-all duration-300 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold text-red-500 mb-4">About Me</h3>
            <p className="text-gray-400 text-sm">
              I'm a passionate web developer dedicated to creating beautiful and functional websites.
            </p>
          </div>
          
          <div className="transform hover:scale-105 transition-all duration-300 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold text-red-500 mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a href="#home" className="text-gray-400 hover:text-red-500 transition text-sm">Home</a>
              <a href="#about" className="text-gray-400 hover:text-red-500 transition text-sm">About</a>
              <a href="#services" className="text-gray-400 hover:text-red-500 transition text-sm">Services</a>
              <a href="#projects" className="text-gray-400 hover:text-red-500 transition text-sm">Projects</a>
            </div>
          </div>
          
          <div className="transform hover:scale-105 transition-all duration-300 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold text-red-500 mb-4">Contact Info</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <div className="flex items-center gap-2 hover:text-red-500 transition justify-center md:justify-start">
                <Mail size={16} />
                <span>nidahussain284@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-red-500 transition justify-center md:justify-start">
                <Phone size={16} />
                <span>+1 234 567 8900</span>
              </div>
              <div className="flex items-center gap-2 hover:text-red-500 transition justify-center md:justify-start">
                <MapPin size={16} />
                <span>Karachi Pakistan</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
            © 2025 |  Designed  and  coded  with ❤️️ by Nida Shakir
          </p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;