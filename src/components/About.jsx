import React from 'react'

const About = () => {
  return (
    <div>
      <section
			id="about"
			className="flex flex-col-reverse md:flex-col gap-x-8 py-16 px-3 md:px-3"
			>
          <h1 className='text-3xl font-bold mb-5 text-indigo-600 dark:text-indigo-500 '>About Me</h1>
          <div className='text-amber-50  m-4 font-mono'>Motivated undergraduate in Computing and Information Systems at Sabaragamuwa University of Sri Lanka,
            with practical experience in full-stack development. Skilled in designing and developing responsive web
            applications using React Js, Spring Boot, and databases such as MongoDB and PostgreSQL. Problem-solving
            mindset with teamwork and collaboration abilities.</div>     
      </section>
    </div>
  )
}

export default About
