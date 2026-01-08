import React from "react";

const Services = ({ darkMode }) => {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Creating responsive, modern, and high-performance websites using React, TailwindCSS, and JavaScript."
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description:
        "Developing cross-platform mobile apps for iOS and Android using React Native and Expo."
    },
    {
      icon: "🛠️",
      title: "Backend & API Development",
      description:
        "Building robust backend systems, REST APIs, and database management using Node.js, Express, and MongoDB."
    }
  ];

  return (
    <section
      id="services"
      className={`min-h-screen ${
        darkMode ? "bg-gradient-to-br from-gray-900 to-black text-white" : "bg-gradient-to-br from-white to-gray-50 text-gray-900"
      } py-20 transition-colors duration-500 px-4 relative overflow-hidden`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">MY </span>
            <span className="text-blue-500 relative z-10">SERVICES</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/30 rounded-full"></div>
          </h2>
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm md:text-base mt-4 max-w-lg mx-auto`}>
            What I provide as a Web Developer
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-500 hover:-translate-y-2 group ${
                darkMode
                  ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 shadow-xl"
                  : "bg-white/80 backdrop-blur-sm shadow-xl"
              } border border-blue-500/10 hover:border-blue-500/30`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl md:text-6xl mb-6 group-hover:text-blue-500 transition-colors duration-300">{service.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors duration-300">{service.title}</h3>
              <p className={`mb-6 text-sm md:text-base ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}>{service.description}</p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 text-sm md:text-base font-medium relative overflow-hidden group">
                <span className="relative z-10">READ MORE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
