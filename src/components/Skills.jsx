import React from "react";

const Skills = ({ darkMode }) => {
  const skills = [
    { name: "HTML", percentage: 95 },
    { name: "CSS / Tailwind", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 80 },
    { name: "BootScript", percentage: 70 },
    { name: "MongoDB / Firebase", percentage: 65 },
  ];

  return (
    <section id="skills" className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-gray-900 to-black text-white' : 'bg-gradient-to-br from-white to-gray-50 text-gray-900'} py-20 transition-colors duration-500 px-4 relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">MY </span>
            <span className="text-blue-500 relative z-10">SKILLS</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/30 rounded-full"></div>
          </h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm md:text-base mt-4 max-w-lg mx-auto`}>What I know</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${
                darkMode ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50' : 'bg-white/80 backdrop-blur-sm shadow-lg'
              } transform hover:scale-105 transition-all duration-300 border border-blue-500/10 hover:border-blue-500/30 group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-base md:text-lg font-semibold group-hover:text-blue-500 transition-colors duration-300">{skill.name}</span>
                <span className="text-blue-500 text-base md:text-lg font-bold">{skill.percentage}%</span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-full h-3 overflow-hidden`}>
                <div
                  className={`bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-2000 ease-out animate-progress relative`}
                  data-percentage={skill.percentage}
                  style={{ width: '0%', animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shine"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes progress {
          from { width: 0; }
          to { width: var(--target-width, 0%); }
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-progress {
          animation: progress 2s ease-out forwards;
          --target-width: 0%;
        }
        .animate-shine {
          animation: shine 2s infinite;
        }
        .animate-progress[data-percentage="95"] { --target-width: 95%; }
        .animate-progress[data-percentage="90"] { --target-width: 90%; }
        .animate-progress[data-percentage="85"] { --target-width: 85%; }
        .animate-progress[data-percentage="80"] { --target-width: 80%; }
        .animate-progress[data-percentage="70"] { --target-width: 70%; }
        .animate-progress[data-percentage="65"] { --target-width: 65%; }
      `}</style>
    </section>
  );
};


export default Skills;