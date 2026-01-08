import React, { useState, useEffect } from 'react';
import {  Sun, Moon, Menu, X }from 'lucide-react'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['HOME', 'ABOUT', 'SERVICES', 'SKILLS', 'PROJECTS', 'CONTACT'];

  return (
    <nav className={`${darkMode ? 'bg-gradient-to-r from-gray-900/90 to-black/90 text-white backdrop-blur-md' : 'bg-gradient-to-r from-white/90 to-gray-50/90 text-gray-900 backdrop-blur-md'} py-4 px-4 md:px-8 flex justify-between items-center fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'shadow-xl shadow-blue-500/10' : 'shadow-none'} border-b border-blue-500/10`}>
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">Nida Shakir</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 lg:gap-8 items-center">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="hover:text-blue-500 transition-all duration-300 transform hover:scale-110 text-sm lg:text-base relative group"
          >
            {link}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
        <button
          onClick={toggleDarkMode}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-blue-500/30 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:rotate-180 hover:scale-110"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-500/30 hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-500/30 hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`absolute top-full left-0 w-full ${darkMode ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-white to-gray-50'} md:hidden shadow-2xl shadow-blue-500/10 border-b border-blue-500/10`}>
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-blue-500 transition py-3 text-center relative group"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
                <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-1/2 group-hover:-translate-x-1/2"></span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;