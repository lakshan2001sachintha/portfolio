import React from 'react'
import { motion } from 'framer-motion'

const MenuLink = (props) => {
  return (
    <motion.a 
      href={props.url}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className='relative group text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 py-2'
    >
      {props.linkname}
      
      {/* Animated underline */}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300 ease-out"></span>
      
      {/* Hover glow effect */}
      <span className="absolute inset-0 blur-xl bg-indigo-500/0 group-hover:bg-indigo-500/20 transition-all duration-300 -z-10"></span>
    </motion.a>
  )
}

export default MenuLink
