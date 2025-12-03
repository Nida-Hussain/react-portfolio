import React from "react";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "Login & Signup System",
      description: "User authentication system with secure login and registration functionality",
      tech: "JavaScript, HTML, CSS",
      image: "./assets/images/login-signup-image.jpg",
      link: "https://github.com/Nida-Hussain/login-signup"
    },
    {
      title: "Notes App",
      description: "Feature-rich note-taking application for organizing thoughts and ideas",
      tech: "JavaScript, Local Storage",
      image: "/assets/images/notes-app.png",
      link: "https://github.com/Nida-Hussain/notes-app"
    },
    {
      title: "Todo App",
      description: "Task management app to track and organize daily activities efficiently",
      tech: "JavaScript, DOM Manipulation",
      image: "./assets/images/todo-App.jpg",
      link: "https://github.com/Nida-Hussain/todo-app"
    },
    {
      title: "API Product Cards",
      description: "Dynamic product display using API integration with responsive design",
      tech: "JavaScript, API, CSS",
      image: "/assets/images/api-product-cards.PNG",
      link: "https://github.com/Nida-Hussain/API-based-Product-Cards"
    },
    {
      title: "Quiz App",
      description: "Interactive quiz application with scoring and feedback system",
      tech: "JavaScript, HTML, CSS",
      image: "/assets/images/quiz-app.png",
      link: "https://github.com/Nida-Hussain/Quiz-App"
    },
    {
      title: "Drawing App",
      description: "Canvas-based drawing application with multiple tools and colors",
      tech: "JavaScript, Canvas API",
      image: "/assets/images/drawing-app.jpg",
      link: "https://github.com/Nida-Hussain/Drawing-App"
    },
    {
      title: "TicTacToe Game",
      description: "Classic TicTacToe game with interactive gameplay and win detection",
      tech: "JavaScript, Game Logic",
      image: "/assets/images/tictactoe.png",
      link: "https://github.com/Nida-Hussain/TicTacToe-game"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills with modern design",
      tech: "HTML, CSS, JavaScript",
      image: "/assets/images/portfolio.PNG",
      link: "https://github.com/Nida-Hussain/portfolio"
    }
  ];

  return (
    <section
      id="projects"
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      } py-20 transition-colors duration-300 px-4`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            MY <span className="text-red-500">PROJECTS</span>
          </h2>
          <p
            className={`${
              darkMode ? "text-gray-400" : "text-gray-600"
            } text-sm md:text-base`}
          >
            Recent work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                darkMode ? "bg-gray-900" : "bg-white shadow-lg"
              } p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2`}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded mb-4"
              />
              
              {/* Project Details */}
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {project.title}
              </h3>
              <p
                className={`${
                  darkMode ? "text-gray-400" : "text-gray-600"
                } mb-4 text-sm md:text-base`}
              >
                {project.description}
              </p>
              <p className="text-red-500 text-xs md:text-sm mb-4">
                Tech: {project.tech}
              </p>

              {/* Project Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all duration-300 w-full transform hover:scale-105 text-sm md:text-base">
                  VIEW PROJECT
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
