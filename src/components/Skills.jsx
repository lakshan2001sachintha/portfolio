import React from 'react';
import { SiSpringboot, SiVite } from 'react-icons/si';
import 'devicon/devicon.min.css'; // Make sure devicon is installed

const Skills = () => {
  // Common class for all icons with gradient
  const iconClass = "text-4xl sm:text-5xl md:text-5xl bg-gradient-to-t from-indigo-600 to-white bg-clip-text text-transparenttext-6xl bg-gradient-to-t from-indigo-600 to-white bg-clip-text text-transparent";

  return (
    <section id="skills" className="flex flex-col gap-y-8 py-16 px-3 md:px-3 sm:py-16 lg:py-24">
      <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-500 mb-16">Skills</h1>

      {/* Row 1 */}
      <div className="flex gap-6 sm:gap-14 md:gap-16 justify-center">
        <i className={`devicon-java-plain ${iconClass}`}></i>
        <i className={`devicon-spring-plain ${iconClass}`}></i>
        <i className={`devicon-javascript-plain ${iconClass}`}></i>
        <i className={`devicon-react-original ${iconClass}`}></i>
        <i className={`devicon-tailwindcss-plain ${iconClass}`}></i>
        <i className={`devicon-postgresql-plain ${iconClass}`}></i>
        <i className={`devicon-mongodb-plain ${iconClass}`}></i>
      </div>

      {/* Row 2 */}
      <div className="flex gap-12 justify-center mt-12">
        <i className={`devicon-git-plain ${iconClass}`}></i>
        <i className={`devicon-docker-plain ${iconClass}`}></i>
        <i className={`devicon-postman-original ${iconClass}`}></i>
        <i className={`devicon-photoshop-plain ${iconClass}`}></i>
        <i className={`devicon-figma-plain ${iconClass}`}></i>
      </div>
    </section>
  );
};

export default Skills;
