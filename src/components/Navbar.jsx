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
    <nav className={`${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'} py-4 px-4 md:px-8 flex justify-between items-center fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="text-2xl font-bold text-red-500 animate-pulse">Nida Shakir</div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 lg:gap-8 items-center">
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-red-500 transition transform hover:scale-110 text-sm lg:text-base">
            {link}
          </a>
        ))}
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-red-500 transition-all duration-300 transform hover:rotate-180"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-4">
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-red-500 transition-all duration-300"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`absolute top-full left-0 w-full ${darkMode ? 'bg-black' : 'bg-white'} md:hidden shadow-lg`}>
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="hover:text-red-500 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;