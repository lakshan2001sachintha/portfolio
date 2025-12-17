import React from 'react';
import { motion } from 'framer-motion';
import 'devicon/devicon.min.css';

const Skills = () => {
  const skills = [
    { icon: 'devicon-java-plain', name: 'Java', color: 'from-orange-500 to-red-500' },
    { icon: 'devicon-spring-plain', name: 'Spring', color: 'from-green-500 to-emerald-500' },
    { icon: 'devicon-dotnetcore-plain', name: 'ASP.NET', color: 'from-indigo-600 to-blue-600'},
    { icon: 'devicon-javascript-plain', name: 'JavaScript', color: 'from-yellow-400 to-yellow-600' },
    { icon: 'devicon-react-original', name: 'React Js', color: 'from-cyan-400 to-blue-500' },
    { icon: 'devicon-nextjs-plain', name: 'Next Js', color: 'from-gray-900 to-white' },
    { icon: 'devicon-tailwindcss-plain', name: 'Tailwind', color: 'from-sky-400 to-cyan-500' },
    { icon: 'devicon-mysql-plain', name: 'MySQL', color: 'from-blue-600 to-indigo-600' },
    { icon: 'devicon-git-plain', name: 'Git', color: 'from-orange-600 to-red-600' },
    { icon: 'devicon-docker-plain', name: 'Docker', color: 'from-blue-500 to-blue-600' },
    { icon: 'devicon-photoshop-plain', name: 'Photoshop', color: 'from-blue-600 to-blue-700' },
    { icon: 'devicon-figma-plain', name: 'Figma', color: 'from-purple-500 to-pink-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="flex flex-col gap-y-8 py-16 px-3 md:px-3 sm:py-16 lg:py-24">
      <motion.h1 
        className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Development Stack
      </motion.h1>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative"
          >
            {/* Glassmorphism card */}
            <div className="relative backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className="relative flex flex-col items-center gap-3">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  <i className={`${skill.icon} text-5xl text-gray-700 dark:text-gray-200 group-hover:scale-110 transition-transform duration-300`}></i>
                </div>
                
                {/* Name */}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
              
              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${skill.color} opacity-20 rounded-bl-2xl rounded-tr-2xl`}></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
