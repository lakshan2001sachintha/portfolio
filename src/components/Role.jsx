import React from 'react'
import one from '../assets/one.jpg'
import pdf from '../assets/Sachintha Lakshan.pdf'

function Role() {
  return (
	<div>
	  <section
			id="hero"
			className="flex flex-col-reverse md:flex-row items-center justify-center gap-x-8 py-16 px-3 md:px-3"
			>
			{/* Text Section */}
			<div className="text-center md:text-left max-w-xl">
				<h1 className="text-3xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
				Hi, I'm Sachintha Lakshan
				</h1>
				<div className="text-gray-600 dark:text-gray-300 text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-light mb-6">
				Intern Software Engineer
				</div>

				<a
				href={pdf}
				download={pdf}
				className="inline-block px-8 py-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 font-medium"
				>
				Download my CV
				</a>
			</div>

			{/* Image Section */}
			<div className="flex">
				<img
				src={one}
				alt="Sachintha Lakshan profile"
				className="w-80 h-80 md:w-80 md:h-80 object-cover rounded-full shadow-indigo-400"
				/>
			</div>
			</section>

	</div>
  )
}

export default Role
