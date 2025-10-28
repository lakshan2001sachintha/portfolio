import React from 'react'

const About = () => {
  return (
    <div>
      <section
			id="about"
			className="flex flex-col gap-x-8 py-16 px-3 md:px-3 sm:py-16 lg:py-24 "
			>
          <h1 className='text-3xl font-bold mb-5 text-indigo-600 dark:text-indigo-500 mb-16'>About Me</h1>
          <div className='text-amber-50 mr-10 font-light p-5 w-full bg-gradient-to-r from-indigo-500/20 to-transparent break-words text-xl'>
          Motivated undergraduate in Computing and Information Systems at Sabaragamuwa University of Sri Lanka,
          with practical experience in full-stack development. Skilled in designing and developing responsive web
          applications using React Js, Spring Boot, and databases such as NoSQL / SQL and hands-on experience in 
          Agile/Scrum development Problem-solving mindset with teamwork and collaboration abilities.
        </div>   
      </section>
    </div>
  )
}

export default About
