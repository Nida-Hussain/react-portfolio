import React from "react";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`${darkMode ? 'bg-gradient-to-r from-gray-900 to-black text-white' : 'bg-gradient-to-r from-gray-900 to-black text-white'} py-12 border-t border-blue-500/20 transition-colors duration-500 px-4 relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="transform hover:scale-105 transition-all duration-300 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold text-blue-500 mb-4 relative inline-block">
              About Me
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500/30 rounded-full"></div>
            </h3>
            <p className="text-gray-300 text-sm max-w-xs mx-auto md:mx-0">
              I'm a passionate web developer dedicated to creating beautiful and functional websites with modern design principles.
            </p>
          </div>

          <div className="transform hover:scale-105 transition-all duration-300 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold text-blue-500 mb-4 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500/30 rounded-full"></div>
            </h3>
            <div className="flex flex-col gap-2">
              <a href="#home" className="text-gray-300 hover:text-blue-500 transition text-sm py-1 relative group">Home
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-gray-300 hover:text-blue-500 transition text-sm py-1 relative group">About
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" className="text-gray-300 hover:text-blue-500 transition text-sm py-1 relative group">Services
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#projects" className="text-gray-300 hover:text-blue-500 transition text-sm py-1 relative group">Projects
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-500 transition text-sm py-1 relative group">Contact
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          <div className="transform hover:scale-105 transition-all duration-300 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold text-blue-500 mb-4 relative inline-block">
              Contact Info
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500/30 rounded-full"></div>
            </h3>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <div className="flex items-center gap-3 hover:text-blue-500 transition justify-center md:justify-start group cursor-pointer">
                <div className="p-2 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <Mail size={16} />
                </div>
                <span>nidahussain284@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 hover:text-blue-500 transition justify-center md:justify-start group cursor-pointer">
                <div className="p-2 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <Phone size={16} />
                </div>
                <span>+1 234 567 8900</span>
              </div>
              <div className="flex items-center gap-3 hover:text-blue-500 transition justify-center md:justify-start group cursor-pointer">
                <div className="p-2 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <MapPin size={16} />
                </div>
                <span>Karachi Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500/20 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
            © 2025 | Designed and coded with ❤️️ by Nida Shakir
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;