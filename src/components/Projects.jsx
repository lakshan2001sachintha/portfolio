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
      title : "Library Book Review System",
      description : "Library users can share opinions to guide other library users to making book selection easier through reviews.",
      techstack : " •React Js •DaisyUI •Spring Boot •MongoDB",
      link : "https://github.com/lakshan2001sachintha/BOOKS.git"
    },
    {
      image : project2,
      title : "Al-powered developer roadmap generator",
      description : "Interactive flow charts via ReactFlow. Contributed by developing the frontend components",
      techstack : "• Flask • React • ReactFlow • Langchain",
      link : "https://github.com/lakshan2001sachintha/LearnFlow.git"
    },
    {
      image : project3,
      title : "Food Recipes",
      description : "A modern web application that generates delicious food recipes based on user inputs. This app allows users to discover new dishes effortlessly by simply specifying ingredients",
      techstack : "• Next js •Gemini API",
      link : "https://github.com/lakshan2001sachintha/recipe-generator.git"
    },
    {
      image : project4,
      title : "VISIT SRI LANKA",
      description : " This website provide reliable information about culture ,traditions ,travel destinations for foreigners. It will help for them easier to connect with the beauty and diversity of Sri Lanka",
      techstack : "•React •SpringBoot •PostgreSQL ",
      link : "https://github.com/lakshan2001sachintha/Visit_SriLanka.git"
    },
  ]

  return (
    <div id='projects'>
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
