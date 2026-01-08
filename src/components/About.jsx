import React from "react";


const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen ${
        darkMode ? "bg-gradient-to-br from-gray-900 to-black text-white" : "bg-gradient-to-br from-white to-gray-50 text-gray-900"
      } py-20 transition-colors duration-500 px-4 relative overflow-hidden`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
        {/* LEFT IMAGE */}
        <div className="flex-1 flex justify-center animate-fade-in-left">
          <div
            className={`w-60 h-72 md:w-80 md:h-96 rounded-xl overflow-hidden relative group ${
              darkMode ? "bg-gradient-to-br from-gray-800 to-gray-900" : "bg-gradient-to-br from-gray-100 to-gray-200"
            } border-2 border-blue-500/50 transform hover:scale-105 transition-all duration-500 hover:rotate-2 shadow-2xl shadow-blue-500/10`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none"></div>
            <img
              src="./assets/images/Hero-image.webp"
              alt="Nida Shakir"
              className="w-full h-full object-cover relative z-10 transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 text-center md:text-left animate-fade-in-right">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative inline-block">
            <span className="text-blue-500 relative z-10">About</span> Me
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/30 rounded-full"></div>
          </h2>

          <p
            className={`${
              darkMode ? "text-gray-300" : "text-gray-600"
            } mb-8 text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0`}
          >
            Hi! I'm a passionate <span className="text-blue-500 font-bold">Web Developer</span>
            specializing in modern, responsive, and clean UI/UX experiences.
            I focus on crafting visually appealing interfaces with strong attention
            to detail, performance, and smooth user interaction.
            I enjoy turning ideas into reality using the latest web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-xl shadow-blue-500/25 relative overflow-hidden group">
              <span className="relative z-10">LEARN MORE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <a
              href="#contact"
              className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 text-center"
            >
              CONTACT ME
            </a>
          </div>
        </div>
      </div>

      {/* ANIMATIONS & STYLES */}
      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in-left {
          animation: fadeInLeft 1s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
          animation-delay: 0.2s;
        }
        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default About;
