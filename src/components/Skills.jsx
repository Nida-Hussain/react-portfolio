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
    <section id="skills" className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} py-20 transition-colors duration-300 px-4`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            MY <span className="text-red-500">SKILLS</span>
          </h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm md:text-base`}>What I know</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2 transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-between">
                <span className="text-base md:text-lg font-semibold">{skill.name}</span>
                <span className="text-red-500 text-base md:text-lg">{skill.percentage}%</span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-full h-2 md:h-3`}>
                <div 
                  className="bg-red-500 h-2 md:h-3 rounded-full transition-all duration-1000 animate-progress"
                  style={{ width: `${skill.percentage}%`, animationDelay: `${index * 0.1}s` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes progress {
          from { width: 0; }
        }
        .animate-progress { animation: progress 2s ease-out; }
      `}</style>
    </section>
  );
};


export default Skills;