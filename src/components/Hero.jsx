import React, { useState, useEffect } from "react";
import { Facebook, Github, Linkedin } from "lucide-react";

const Hero = ({ darkMode }) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    "Web Designer",
    "HTML",
    "Css",
    "BootScript",
    "JavaScript",
    "Firebase",
    "React",
    "App Developer",
    "Coder"
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentTitle.length) {
          setTypedText(currentTitle.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentTitle.slice(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentIndex]);

  return (
    <section
      id="home"
      className={`min-h-screen ${
        darkMode ? "bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white" : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
      } flex flex-col-reverse md:flex-row items-center justify-center pt-16 transition-colors duration-500 px-4 overflow-hidden`}
    >
      <div className="max-w-6xl w-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* LEFT TEXT SECTION */}
        <div className="flex-1 animate-fade-in-left text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 animate-slide-up bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Hi, I am
          </h1>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 bg-clip-text text-transparent">Nida Shakir</span>
          </h2>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <span className={darkMode ? "text-gray-300" : "text-gray-700"}>I am a </span>
            <span className="text-blue-500 font-bold">{typedText}</span>
            <span className="text-blue-500 animate-blink">|</span>
          </h3>

          <p
            className={`${
              darkMode ? "text-gray-300" : "text-gray-600"
            } mb-8 max-w-md mx-auto md:mx-0 text-sm md:text-base lg:text-lg leading-relaxed animate-slide-up`}
            style={{ animationDelay: "0.6s" }}
          >
            I am a web designer with experience in creating beautiful, user-friendly websites. Skilled in modern design principles and development technologies, I specialize in crafting seamless digital experiences that engage and inspire.
          </p>

          {/* DOWNLOAD CV BUTTON */}
          <div className="animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="/assets/download/CV.pdf"
              download
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 relative overflow-hidden group"
            >
              <span className="relative z-10">DOWNLOAD CV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div
            className="flex gap-4 mt-8 justify-center md:justify-start animate-slide-up"
            style={{ animationDelay: "1s" }}
          >
            <a
              href="https://www.facebook.com/"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border-2 border-blue-500/50 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 group"
            >
              <Facebook size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/nidanaz-hussain-3a669336b/"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border-2 border-blue-500/50 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 group"
            >
              <Linkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="https://github.com/Nida-Hussain"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border-2 border-blue-500/50 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 group"
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex-1 flex justify-center md:justify-end animate-fade-in-right mb-8 md:mb-0 relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>

          <div
            className={`w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-blue-500/80 overflow-hidden relative ${
              darkMode ? "bg-gradient-to-br from-gray-800 to-gray-900" : "bg-gradient-to-br from-gray-200 to-gray-300"
            } flex items-center justify-center transform hover:scale-105 transition-all duration-300 animate-float tilt-container group`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent pointer-events-none"></div>
            <img
              src="./assets/images/Hero-image.webp"
              alt="Nida Shakir"
              className="w-full h-full object-cover relative z-10 rounded-full"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .animate-fade-in-left { animation: fadeInLeft 1s ease-out; }
        .animate-fade-in-right { animation: fadeInRight 1s ease-out; }
        .animate-slide-up { animation: slideUp 0.8s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-blink { animation: blink 1s step-end infinite; }
        .animate-pulse { animation: pulse 3s ease-in-out infinite; }

        .tilt-container {
          transition: transform 0.3s ease;
        }

        .tilt-container:hover {
          transform: perspective(1000px) rotateY(5deg) rotateX(5deg) scale(1.05);
        }

        .bg-gradient-to-br {
          background: linear-gradient(to bottom right, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default Hero;