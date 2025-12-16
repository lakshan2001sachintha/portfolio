import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'devicon-github-original',
      url: 'https://github.com/lakshan2001sachintha',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: 'devicon-linkedin-plain',
      url: 'https://www.linkedin.com/in/sachintha-lakshan-ba293a2b4/',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <footer className="relative mt-20 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-t border-white/20 dark:border-slate-800/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Sachintha Lakshan
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Intern Software Engineer passionate about building modern web applications with cutting-edge technologies.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Certifications'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 text-sm"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Let's Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <i className={`relative ${social.icon} text-3xl text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-300`}></i>
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Open to new opportunities and collaborations
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Sachintha Lakshan. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Built with</span>
              <span className="text-red-500 animate-pulse"></span>
              <span className="text-sm text-gray-600 dark:text-gray-400">using</span>
              <i className="devicon-react-original text-cyan-500 text-lg"></i>
              <span className="text-sm text-gray-600 dark:text-gray-400">&</span>
              <i className="devicon-tailwindcss-plain text-sky-500 text-lg"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600"></div>
    </footer>
  );
};

export default Footer;
