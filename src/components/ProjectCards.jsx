import React from 'react'
import project1 from '../assets/project-one.png'

const ProjectCards = () => {
  return (
<div>
    <div className="card bg-gradient-to-br from-indigo-400 to-black w-full rounded-xl shadow-indigo-500">
    <figure>
        <img
        src={project1}
        alt="Shoes" />
    </figure>
    <div className="card-body">
        <h2 className="card-title">
        Card Title
        <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div>
        <div className="badge badge-outline">Products</div>
    </div>
    </div>
    </div>
</div>
  )
}

export default ProjectCards
