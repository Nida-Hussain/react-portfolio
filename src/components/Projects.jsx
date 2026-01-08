import React from "react";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "Login & Signup System",
      description: "User authentication system with secure login and registration functionality",
      tech: "JavaScript, HTML, CSS",
      image: "./assets/images/login-signup-image.jpg",
      link: "https://login-signup-gamma-mauve.vercel.app/"
    },
    {
      title: "Notes App",
      description: "Feature-rich note-taking application for organizing thoughts and ideas",
      tech: "JavaScript, Local Storage",
      image: "/assets/images/notes-app.png",
      link: "https://notes-app-five-snowy-35.vercel.app/"
    },
    {
      title: "Todo App",
      description: "Task management app to track and organize daily activities efficiently",
      tech: "JavaScript, DOM Manipulation",
      image: "./assets/images/todo-App.jpg",
      link: "https://todo-app-pi-henna-63.vercel.app/"
    },
    {
      title: "API Product Cards",
      description: "Dynamic product display using API integration with responsive design",
      tech: "JavaScript, API, CSS",
      image: "/assets/images/api-product-cards.PNG",
      link: "https://nida-hussain.github.io/API-based-Product-Cards/"
    },
    {
      title: "Quiz App",
      description: "Interactive quiz application with scoring and feedback system",
      tech: "JavaScript, HTML, CSS",
      image: "/assets/images/quiz-app.png",
      link: "https://nida-hussain.github.io/Quiz-App/"
    },
    {
      title: "Drawing App",
      description: "Canvas-based drawing application with multiple tools and colors",
      tech: "JavaScript, Canvas API",
      image: "/assets/images/drawing-app.jpg",
      link: "https://nida-hussain.github.io/Drawing-App/"
    },
    {
      title: "TicTacToe Game",
      description: "Classic TicTacToe game with interactive gameplay and win detection",
      tech: "JavaScript, Game Logic",
      image: "/assets/images/tictactoe.png",
      link: "https://nida-hussain.github.io/TicTacToe-game/"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills with modern design",
      tech: "HTML, CSS, JavaScript",
      image: "/assets/images/portfolio.PNG",
      link: "https://nida-hussain.github.io/portfolio/"
    }
  ];

  return (
    <section
      id="projects"
      className={`min-h-screen ${
        darkMode ? "bg-gradient-to-br from-gray-900 to-black text-white" : "bg-gradient-to-br from-gray-50 to-white text-gray-900"
      } py-20 transition-colors duration-500 px-4 relative overflow-hidden`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-red-500/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-red-500/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">MY </span>
            <span className="text-blue-500 relative z-10">PROJECTS</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/30 rounded-full"></div>
          </h2>
          <p
            className={`${
              darkMode ? "text-gray-400" : "text-gray-600"
            } text-sm md:text-base mt-4 max-w-lg mx-auto`}
          >
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                darkMode ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50" : "bg-white/80 backdrop-blur-sm shadow-xl"
              } p-6 rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group border border-blue-500/10 hover:border-blue-500/30`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 group-hover:rounded-xl transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Details */}
              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors duration-300">
                {project.title}
              </h3>
              <p
                className={`${
                  darkMode ? "text-gray-400" : "text-gray-600"
                } mb-4 text-sm md:text-base line-clamp-2`}
              >
                {project.description}
              </p>
              <p className="text-blue-500 text-xs md:text-sm mb-6 font-medium">
                Tech: {project.tech}
              </p>

              {/* Project Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 w-full transform hover:scale-105 text-sm md:text-base font-medium group relative overflow-hidden">
                  <span className="relative z-10">VIEW PROJECT</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
