import React from 'react';
import { ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react';
import project from "../imges/E-commerce.png"

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A responsive e-commerce frontend platform with product listing, cart management, and modern UI/UX built using React ecosystem.",
      image: project,
      tags: ["ReactJs", "TypeScript", "Redux", "Tailwind CSS", "JavaScript", "Git"],
      // stats: [
      //   { icon: <Users size={16} />, value: "10K+", label: "Users" },
      //   { icon: <TrendingUp size={16} />, value: "$2M+", label: "Revenue" },
      //   { icon: <Calendar size={16} />, value: "2023", label: "Launch" }
      // ],
      links: {
        live: "https://ronakprajapati08.github.io/perfume-fragrance-website/",
        github: "https://github.com/RonakPrajapati08"
      }
    },

    {
  title: "ERP & CRM Platform",
  description: "A powerful ERP & CRM system built for managing business operations, customer relationships, and workflow automation with a responsive frontend and scalable backend.",
  image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
  tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "PHP", "Laravel", "Livewire",  "MySQL","Git"],
  // stats: [
  //   { icon: <Users size={16} />, value: "5K+", label: "Businesses" },
  //   { icon: <TrendingUp size={16} />, value: "99.9%", label: "Uptime" },
  //   { icon: <Calendar size={16} />, value: "2023", label: "Launch" }
  // ],
  links: {
    live: "https://example.com",
    github: "https://github.com/RonakPrajapati08"
  }
},

   {
  title: "B2B Marketplace Platform",
  description: "A scalable B2B Marketplace Platform designed for businesses to showcase products, manage client relationships, and streamline operations with modern web technologies.",
  image: "https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800",
  tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "PHP", "Laravel", "Livewire", "Git"],
  // stats: [
  //   { icon: <Users size={16} />, value: "200+", label: "Businesses" },
  //   { icon: <TrendingUp size={16} />, value: "60%", label: "Growth ↑" },
  //   { icon: <Calendar size={16} />, value: "2024", label: "Launch" }
  // ],
  links: {
    live: "https://www.globpulse.com/",
    github: "https://github.com/RonakPrajapati08"
  }
},

    {
  title: "Chat Application",
  description: "A real-time chat application with instant messaging, Firebase authentication, and responsive UI for seamless communication.",
  image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
  tags: ["ReactJs", "NodeJs", "Firebase", "Bootstrap", "Git"],
  // stats: [
  //   { icon: <Users size={16} />, value: "2K+", label: "Active Users" },
  //   { icon: <TrendingUp size={16} />, value: "Real-time", label: "Messaging" },
  //   { icon: <Calendar size={16} />, value: "2024", label: "Launch" }
  // ],
  links: {
    live: "https://ronakprajapati08.github.io/Chat-App/",
    github: "https://github.com/RonakPrajapati08"
  }
}

  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                My Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-100"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 rounded-full text-sm font-medium border border-purple-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* <div className="flex justify-between items-center mb-6 text-sm text-gray-500">
                    {project.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center gap-1 bg-gray-50 px-3 py-2 rounded-lg">
                        {stat.icon}
                        <span className="font-semibold text-gray-700">{stat.value}</span>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div> */}

                  <div className="flex gap-4">
                    {/* <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a> */}
                 <a
  href={project.links.github}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-3 rounded-xl 
             bg-white text-gray-800 font-medium border border-gray-300 
             shadow-sm hover:bg-[#181717] hover:text-white 
             hover:shadow-lg hover:scale-105 active:scale-95 
             transition-all duration-300 ease-in-out"
>
  <Github size={18} className="transition-colors duration-300" />
  View Code
</a>

                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/RonakPrajapati08"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-full hover:from-gray-900 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;