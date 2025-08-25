import React from "react";
import { Code, Server, Database, Smartphone } from "lucide-react";

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Frontend Development",
      description:
        "Creating responsive, interactive user interfaces with modern frameworks",
    },
    {
      icon: <Server className="w-8 h-8 text-green-600" />,
      title: "Backend Development",
      description: "Building scalable APIs and server-side applications",
    },
    {
      icon: <Database className="w-8 h-8 text-purple-600" />,
      title: "Database Design",
      description:
        "Designing efficient database schemas and optimizing queries",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-600" />,
      title: "Mobile-First",
      description:
        "Ensuring seamless experiences across all devices and platforms",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer with 1+ years of experience
              building web applications that solve real-world problems. I love
              turning complex problems into simple, beautiful designs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                My Journey
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I began my journey in computer science and soon found my passion
                for web development. Over the years, I have built and
                contributed to various projects, including an E-Commerce
                Platform, an ERP and CRM System, a B2B Business Portal, and a
                Realtime Chat Application. Each project focused on clean code,
                user-friendly experiences, and scalable design.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I believe in continuous learning and stay updated with the
                latest technologies to provide modern and effective solutions.
                Beyond coding, I like to contribute to open-source projects and
                mentor aspiring developers, supporting them in their growth.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Experience</span>
                  <span className="text-blue-600 font-semibold">1+ Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">
                    Projects Completed
                  </span>
                  <span className="text-blue-600 font-semibold">20+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">
                    Technologies
                  </span>
                  <span className="text-blue-600 font-semibold">12+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">
                    Certifications
                  </span>
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
