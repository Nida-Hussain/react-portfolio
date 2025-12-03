import React from "react";


const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } py-20 transition-colors duration-300 px-4`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">

        {/* LEFT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div
            className={`w-60 h-72 md:w-80 md:h-96 ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            } rounded-lg flex items-center justify-center border-2 border-red-500 transform hover:scale-105 transition-all duration-300 hover:rotate-2 overflow-hidden`}
          >
             <img src="./assets/images/Hero-image.webp" alt="" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-red-500">About</span> Me
          </h2>

          <p
            className={`${
              darkMode ? "text-gray-400" : "text-gray-600"
            } mb-6 text-sm md:text-base leading-relaxed`}
          >
            Hi! I'm a passionate <span className="text-red-500 font-semibold">Web Developer</span> 
            specializing in modern, responsive, and clean UI/UX experiences.  
            I focus on crafting visually appealing interfaces with strong attention 
            to detail, performance, and smooth user interaction.  
            I enjoy turning ideas into reality using the latest web technologies.
          </p>

          <button className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-110 shadow-md">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
