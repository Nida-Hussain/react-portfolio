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
        darkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      } py-20 transition-colors duration-300 px-4`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            MY <span className="text-red-500">SERVICES</span>
          </h2>
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm md:text-base`}>
            What I provide as a Web Developer
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 rounded-lg text-center ${
                index === 1
                  ? "bg-red-500 text-white"
                  : darkMode
                  ? "bg-gray-900 text-gray-300 shadow-md"
                  : "bg-white shadow-lg"
              } hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-2`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-5xl md:text-6xl mb-4 animate-bounce">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-4">{service.title}</h3>
              <p className="mb-6 text-sm md:text-base">{service.description}</p>
              <button className="bg-white text-black px-4 md:px-6 py-2 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 text-sm md:text-base">
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
