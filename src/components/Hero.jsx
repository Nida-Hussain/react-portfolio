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
        darkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      } flex flex-col-reverse md:flex-row items-center justify-center pt-16 transition-colors duration-300 px-4`}
    >
      <div className="max-w-6xl w-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* LEFT TEXT SECTION */}
        <div className="flex-1 animate-fade-in-left text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 animate-slide-up">
            Hi, I am
          </h1>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Nida Shakir
          </h2>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <span className={darkMode ? "text-white" : "text-gray-900"}>I am a </span>
            <span className="text-red-500">{typedText}</span>
            <span className="text-red-500 animate-blink">|</span>
          </h3>

          <p
            className={`${
              darkMode ? "text-gray-400" : "text-gray-600"
            } mb-8 max-w-md mx-auto md:mx-0 text-sm md:text-base lg:text-lg leading-relaxed animate-slide-up`}
            style={{ animationDelay: "0.6s" }}
          >
            I am a web designer with experience in creating beautiful, user-friendly websites. Skilled in modern design principles and development technologies, I specialize in crafting seamless digital experiences that engage and inspire.
          </p>

          {/* DOWNLOAD CV BUTTON */}
          <a
            href="/assets/download/CV.pdf"
            download
            className="inline-block bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            DOWNLOAD CV
          </a>

          {/* SOCIAL ICONS */}
          <div
            className="flex gap-4 mt-8 justify-center md:justify-start animate-slide-up"
            style={{ animationDelay: "1s" }}
          >
            <a
              href="https://www.facebook.com/"
              className="p-3 rounded-full border-2 border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/nidanaz-hussain-3a669336b/"
              className="p-3 rounded-full border-2 border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Nida-Hussain"
              className="p-3 rounded-full border-2 border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex-1 flex justify-center md:justify-end animate-fade-in-right mb-8 md:mb-0">
          <div
            className={`w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-red-500 overflow-hidden ${
              darkMode ? "bg-gray-800" : "bg-gray-200"
            } flex items-center justify-center transform hover:scale-105 transition-all duration-300 animate-float tilt-container`}
          >
            <img 
              src="./assets/images/Hero-image.webp" 
              alt="Nida Shakir" 
              className="w-full h-full object-cover"
            />
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
        
        .animate-fade-in-left { animation: fadeInLeft 1s ease-out; }
        .animate-fade-in-right { animation: fadeInRight 1s ease-out; }
        .animate-slide-up { animation: slideUp 0.8s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-blink { animation: blink 1s step-end infinite; }
        
        .tilt-container {
          transition: transform 0.3s ease;
        }
        
        .tilt-container:hover {
          transform: perspective(1000px) rotateY(5deg) rotateX(5deg) scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Hero;