import React from 'react'
import ProjectCards from './ProjectCards'

const Projects = () => {
  return (
    <div>
      <section id="skills" className="flex flex-col gap-y-8 py-16 px-3 md:px-3">
      <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-500 mb-16">Projects</h1>
        
       <div>
            <div className='items-center justify-center flex gap-44'>
                <ProjectCards/>
                <ProjectCards/>
            </div>
            <div className='items-center justify-center flex gap-44 mt-14'>
                <ProjectCards/>
                <ProjectCards/>
            </div>
            <div className='items-center justify-center flex gap-44 mt-14'>
                <ProjectCards/>
                <ProjectCards/>
            </div>
       </div>

      </section>
    </div>
  )
}

export default Projects
