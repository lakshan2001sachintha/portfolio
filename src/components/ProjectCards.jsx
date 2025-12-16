import React from 'react'
import { motion } from 'framer-motion'

const ProjectCards = ({image, title, description, techstack, link, index}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="group w-full max-w-md cursor-pointer"
      onClick={() => window.open(link, "_blank")}
    >
      {/* Main card container with glassmorphism */}
      <div className="relative backdrop-blur-md bg-white/90 dark:bg-slate-800/90 rounded-2xl overflow-hidden border border-white/20 dark:border-slate-700/20 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-500">
        
        {/* Image container with gradient overlay */}
        <div className="relative overflow-hidden h-56">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
          
          {/* Floating GitHub badge */}
          <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full border border-white/20 dark:border-slate-700/20 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">View Code</span>
          </div>
        </div>

        {/* Content section */}
        <div className="relative p-6 space-y-4">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-3xl"></div>
          
          {/* Title */}
          <h2 className="relative text-xl md:text-2xl font-bold text-gray-800 dark:text-white leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
            {title}
          </h2>
          
          {/* Description */}
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Tech stack section */}
          <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="flex flex-wrap gap-2">
              {techstack.split('•').filter(tech => tech.trim()).map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200/50 dark:border-indigo-700/50"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Hover indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none transition-opacity duration-500"></div>
      </div>
    </motion.div>
  )
}

export default ProjectCards
