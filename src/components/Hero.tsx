import React from "react";
import { Download, Mail, Github, Linkedin, MapPin, Coffee } from "lucide-react";
import ronak from "../imges/ronak.jpg";
import ronakResume from "../imges/Ronak_cv.pdf";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">
                  Available for work
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                  Ronak Prajapati
                </span>
              </h1>

              <div className="mb-6">
                <p className="text-xl md:text-2xl text-gray-300 mb-2 font-light">
                  Full-Stack Web Developer
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>Ahmedabad, Gujarat</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Coffee size={14} />
                    <span>1+ Years Experience</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I craft beautiful, scalable web applications with modern
                technologies. Passionate about creating exceptional user
                experiences and robust backend solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <a
                  href={ronakResume}
                  download="Ronak_Prajapati_Resume.pdf"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Download size={20} className="group-hover:animate-bounce" />
                  Download Resume
                </a>

                <button
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2 backdrop-blur-sm"
                >
                  <Mail size={20} />
                  Get In Touch
                </button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6">
                <a
                  href="https://github.com/RonakPrajapati08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 transform hover:bg-white/10 rounded-full backdrop-blur-sm"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/prajapati-ronak-89a357279"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 transform hover:bg-white/10 rounded-full backdrop-blur-sm"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            {/* Right side - Profile image and stats */}
            <div className="flex justify-center lg:justify-end animate-fade-in-right">
              <div className="relative">
                {/* Profile image container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-spin-slow p-1">
                    <div className="w-full h-full rounded-full bg-slate-900 p-2">
                      <img
                        src={ronak}
                        alt="Alex Johnson - Full Stack Developer"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>

                  {/* Floating stats cards */}
                  <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 animate-float">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">20+</div>
                      <div className="text-xs text-gray-300">Projects</div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 animate-float animation-delay-1000">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">1+</div>
                      <div className="text-xs text-gray-300">Years Exp</div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 animate-float animation-delay-2000">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">12+</div>
                      <div className="text-xs text-gray-300">Technologies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out 0.3s both;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
