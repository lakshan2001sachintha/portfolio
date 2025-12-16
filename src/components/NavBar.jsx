import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MenuLink from './MenuLink';
import 'devicon/devicon.min.css';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 shadow-lg shadow-indigo-500/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="hidden sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-8 md:gap-12 lg:gap-16 py-6 font-semibold">
        <MenuLink linkname="Home" url="#home" />
        <MenuLink linkname="About" url="#about" />
        <MenuLink linkname="Skills" url="#skills" />
        <MenuLink linkname="Projects" url="#projects" />
        <MenuLink linkname="Certifications" url="#certifications" />
        
        {/* Theme toggle button (optional - you can implement dark mode toggle)
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-lg bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 text-indigo-600 dark:text-indigo-400 hover:shadow-lg transition-all duration-300"
          aria-label="Theme toggle"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </motion.button> */}
      </div>
      
      {/* Mobile menu button (for future mobile nav implementation) */}
      <div className="sm:hidden flex justify-between items-center py-4 px-4">
        <motion.span 
          className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Portfolio
        </motion.span>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-lg bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40"
        >
          <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>
    </motion.nav>
  );
}

export default NavBar;
