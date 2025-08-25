import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/RonakPrajapati08", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/prajapati-ronak-89a357279", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:ronakprajapati3545@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <div className="text-3xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Ronak</span>Dev
              </div>
              <p className="text-gray-400 max-w-md">
                Building digital experiences that make a difference. 
                Let's create something amazing together.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Available for new projects</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-gray-400 hover:text-white transition-all duration-200 p-3 hover:bg-white/10 rounded-full backdrop-blur-sm border border-white/10 hover:border-white/20 transform hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © {currentYear} Ronak Prajapati. Made with 
              <Heart size={16} className="text-red-500 animate-pulse" /> 
              and lots of Tea.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;