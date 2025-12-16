import React from 'react'
import { motion } from 'framer-motion'

const CertificationCard = ({ image, title, link, index }) => {
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
      onClick={() => window.open(link, "_blank")}
      className="group relative cursor-pointer"
    >
      {/* Glassmorphism card */}
      <div className="relative backdrop-blur-md bg-white/90 dark:bg-slate-800/90 rounded-2xl overflow-hidden border border-white/20 dark:border-slate-700/20 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-500">
        
        {/* Image container with overlay */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* View certificate badge */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex items-center gap-2 px-5 py-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full border border-white/20 dark:border-slate-700/20 shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">View Certificate</span>
            </div>
          </div>
          
          {/* Badge icon */}
          <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-3 rounded-full border border-white/20 dark:border-slate-700/20 shadow-lg">
            <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative p-5">
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-2xl"></div>
          
          <h2 className="relative text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
            {title}
          </h2>
          
          {/* Hover indicator line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none transition-opacity duration-500"></div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;
