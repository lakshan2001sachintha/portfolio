import React from 'react'
import ProjectCards from './ProjectCards'
import project1 from '../assets/project-one.png'
import project2 from '../assets/project-two.png'
import project3 from '../assets/project-three.png'
import project4 from '../assets/project-four.png'

const Projects = () => {

  const projects = [
    {
      image : project1,
      title : "E Commerce Web",
      description : "A modern online store built with React and Tailwind"
    },
    {
      image : project2,
      title : "E Commerce Web1",
      description : "11A modern online store built with React and Tailwind"
    },
    {
      image : project3,
      title : "E Commerce Web2",
      description : "22A modern online store built with React and Tailwind"
    },
    {
      image : project4,
      title : "E Commerce Web3",
      description : "33A modern online store built with React and Tailwind"
    },
  ]

  return (
    <div>
      <section id="skills" className="flex flex-col gap-y-8 py-16 px-3 md:px-3">
      <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-500 mb-16">Projects</h1>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-14 justify-items-center w-full max-w-5xl mx-auto">
         {projects.map((project,index) =>{
          return <ProjectCards key={index} {...project}/>
         })}
       </div>

      </section>
    </div>
  )
}

export default Projects
