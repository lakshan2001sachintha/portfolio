import React from 'react'
import project1 from '../assets/project-one.png'

const ProjectCards = ({image,title,description}) => {
  return (
<div>
  <div className="relative group bg-gradient-to-br from-indigo-500  to-black rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-indigo-300 transition-all duration-500 overflow-hidden transform hover:-translate-y-2 w-full max-w-sm">
  <figure className="overflow-hidden">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
    />
  </figure>
  <div className="p-5 text-white">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold tracking-wide">{title}</h2>
      <span className="bg-indigo-600 text-xs px-2 py-1 rounded-md font-bold">NEW</span>
    </div>
    <p className="text-sm text-gray-200 mt-3 leading-relaxed">{description}</p>

    <div className="mt-5 flex gap-2 justify-end">
      <span className="border border-gray-300 text-gray-100 text-xs px-3 py-1 rounded-full hover:bg-gray-100 hover:text-black transition-all duration-300 cursor-pointer">
        Fashion
      </span>
      <span className="border border-gray-300 text-gray-100 text-xs px-3 py-1 rounded-full hover:bg-gray-100 hover:text-black transition-all duration-300 cursor-pointer">
        Products
      </span>
    </div>
  </div>

  {/* Glow effect on hover */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-br from-black blur-2xl transition-opacity duration-500"></div>
</div>

</div>
  )
}

export default ProjectCards
