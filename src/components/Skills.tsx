import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "bg-blue-500",
      skills: [
       { name: "HTML", level: 99 },
        { name: "CSS", level: 96 },
        { name: "JavaScript", level: 97 },
        { name: "jQuery", level: 95 },
        { name: "Bootstrap", level: 99 },
        { name: "Tailwind CSS", level: 97 },
        { name: "ReactJs", level: 98 },
        { name: "Redux", level: 95 },
        { name: "TypeScript", level: 92 },
      ]
    },
    {
      title: "Backend",
      color: "bg-green-500",
      skills: [
        { name: "PHP", level: 85 },
        { name: "Laravel", level: 90 },
        { name: "Node.js", level: 70 },
      ]
    },
    {
      title: "Database",
      color: "bg-purple-500",
      skills: [
        { name: "MySQL", level: 92 },
        { name: "MongoDB", level: 84 },
        { name: "Firebase", level: 90 },
      ]
    },
    {
      title: "Tools & Others",
      color: "bg-orange-500",
      skills: [
        { name: "Git", level: 95 },
        { name: "Netlify", level: 80 },
      ]
    }
  ];

  const technologies = [
    "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Tailwind CSS",
    "ReactJS", "Redux", "TypeScript", "PHP", "Laravel", "Node.js",
    "MySQL", "MongoDB", "Firebase", "Git", "Netlify"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                What I Do
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
    <div className={`w-4 h-4 ${category.color} rounded-full mr-3 group-hover:scale-110 transition-transform duration-300`}></div>
    {category.title}
  </h3>

  {/* If category is Frontend → show in 2 columns */}
  {category.title === "Frontend" ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {category.skills.map((skill, skillIndex) => (
        <div key={skillIndex}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-200 font-medium">{skill.name}</span>
            <span className="text-gray-400 text-sm">{skill.level}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
            <div 
              className={`h-3 rounded-full ${category.color} transition-all duration-1000 ease-out shadow-lg`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="space-y-4">
      {category.skills.map((skill, skillIndex) => (
        <div key={skillIndex}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-200 font-medium">{skill.name}</span>
            <span className="text-gray-400 text-sm">{skill.level}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
            <div 
              className={`h-3 rounded-full ${category.color} transition-all duration-1000 ease-out shadow-lg`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Technologies I Work With</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300 cursor-default border border-white/30 hover:scale-105 transform"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
