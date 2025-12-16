import React from 'react'
import { motion } from 'framer-motion'
import two from '../assets/two.png'
import pdf from '../assets/Sachintha Lakshan CV.pdf'
import 'devicon/devicon.min.css'; 

function Role() {
	const iconClass = "text-5xl bg-gradient-to-t from-indigo-600 to-white bg-clip-text text-transparent";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
	<div>
	  <section
			id="hero"
			className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-20 px-3 md:px-3 min-h-[calc(100vh-120px)]"
			>
			{/* Text Section */}
			<motion.div 
          className="text-center md:text-left max-w-xl space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
				<motion.div variants={itemVariants} className="space-y-2">
            <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg tracking-wide">👋 Welcome to my portfolio</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Sachintha Lakshan
            </h1>
          </motion.div>
          
				<motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-gray-700 dark:text-gray-200 text-2xl md:text-3xl font-light">
              Intern Software Engineer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
              Building modern web applications with passion & precision
            </p>
          </motion.div>
                
				<motion.div variants={itemVariants} className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4'>
            <a
              href={pdf}
              download={pdf}
              className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-600/50 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </span>
            </a>
            
            <div className='flex gap-5'>
              <a 
                href="https://github.com/lakshan2001sachintha" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <i className="relative devicon-github-original text-4xl text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:scale-110 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" aria-hidden="true"></i>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/sachintha-lakshan-ba293a2b4/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <i className="relative devicon-linkedin-plain text-4xl text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600 dark:group-hover:text-blue-400" aria-hidden="true"></i>
              </a>
			   </div>
				</motion.div>
			</motion.div>

			{/* Image Section */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative">
          {/* Animated gradient ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
          
          {/* Image container with glassmorphism */}
          <div className="relative backdrop-blur-sm bg-white/10 dark:bg-slate-800/10 p-2 rounded-full shadow-2xl">
            <img
              src={two}
              alt="Sachintha Lakshan profile"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white/20 dark:border-slate-700/20 shadow-2xl animate-float"
            />
          </div>
          
          {/* Floating badges */}
          <motion.div
            className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-full p-4 shadow-xl border-2 border-indigo-200 dark:border-indigo-800"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-2xl">💼</span>
          </motion.div>
          
          <motion.div
            className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-full p-4 shadow-xl border-2 border-purple-200 dark:border-purple-800"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <span className="text-2xl">⚡</span>
          </motion.div>
        </div>
      </motion.div>
		</section>
	</div>
  )
}

export default Role
