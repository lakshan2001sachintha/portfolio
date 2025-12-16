import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div>
      <section
			id="about"
			className="flex flex-col gap-x-8 py-16 px-3 md:px-3 sm:py-16 lg:py-24"
			>
          <motion.h1 
            className='text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>
          
          <motion.div 
            className='relative group'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Glassmorphism card */}
            <div className='relative backdrop-blur-md bg-gradient-to-br from-white/80 to-white/40 dark:from-slate-800/80 dark:to-slate-900/40 rounded-2xl p-8 md:p-10 border border-white/20 dark:border-slate-700/20 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300'>
              {/* Decorative corner accents */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-tr-full"></div>
              
              <div className='relative space-y-6'>
                {/* Intro badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-700 dark:text-indigo-300 text-sm font-semibold">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                  Currently Available for Opportunities
                </div>
                
                <p className='text-gray-700 dark:text-gray-200 leading-relaxed text-lg md:text-xl'>
                  Motivated undergraduate in <span className="font-semibold text-indigo-600 dark:text-indigo-400">Computing and Information Systems</span> at Sabaragamuwa University of Sri Lanka, with practical experience in <span className="font-semibold text-indigo-600 dark:text-indigo-400">full-stack development</span>.
                </p>
                
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg'>
                  Skilled in designing and developing responsive web applications using <span className="font-medium text-gray-800 dark:text-gray-100">React js</span>, <span className="font-medium text-gray-800 dark:text-gray-100">Next js</span>, <span className="font-medium text-gray-800 dark:text-gray-100">Spring Boot</span>, and databases such as NoSQL/SQL with hands-on experience in Agile/Scrum development.
                </p>
                
                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 border border-indigo-200/50 dark:border-indigo-700/50">Problem Solving</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 border border-indigo-200/50 dark:border-indigo-700/50">Team Collaboration</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 border border-indigo-200/50 dark:border-indigo-700/50">Agile Development</span>
                </div>
              </div>
            </div>
          </motion.div>
      </section>
    </div>
  )
}

export default About
