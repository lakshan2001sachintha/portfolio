import React from 'react';
import { motion } from 'framer-motion';
import Role from "./components/Role";
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certification from './components/Certification';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 min-h-screen font-inter relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Main container with responsive padding */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <NavBar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Role />
          <About />
          <Skills />
          <Projects />
          <Certification />
        </motion.div>
      </div>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
