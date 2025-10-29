import React from 'react'
import two from '../assets/two.png'
import pdf from '../assets/Sachintha Lakshan CV.pdf'
import 'devicon/devicon.min.css'; 

function Role() {
	const iconClass = "text-5xl bg-gradient-to-t from-indigo-600 to-white bg-clip-text text-transparent";
  return (
	<div>
	  <section
			id="hero"
			className="flex flex-col-reverse md:flex-row items-center justify-center gap-x-8 py-16 px-3 md:px-3"
			>
			{/* Text Section */}
			<div className="text-center md:text-left max-w-xl">
				<h1 className="mt-6 text-3xl md:text-5xl sm:mt-10 font-bold text-indigo-600 dark:text-indigo-400 mb-4">
				Hi, I'm Sachintha Lakshan
				</h1>
				<div className="text-gray-600 dark:text-gray-300 text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-light mb-6">
				Intern Software Engineer
				</div>
                
				<div className='flex gap-10'>
				<a
				href={pdf}
				download={pdf}
				className="inline-block px-8 py-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 font-medium"
				>
				Download my CV
				</a>
		           <div className='flex gap-4'>
					 <a href="https://github.com/lakshan2001sachintha" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
						<i className={`devicon-github-original ${iconClass} text-4xl text-gray-800 transition duration-300 hover:text-green-600 hover:shadow-[0_0_10px_rgba(0,0,0,0.6)]`} aria-hidden="true"></i>
					</a>
				     {/* LinkedIn icon (use devicon-linkedin-plain or devicon-linkedin-plain-wordmark) */}
                   <a href="https://www.linkedin.com/in/sachintha-lakshan-ba293a2b4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className={`devicon-linkedin-plain ${iconClass} text-gray-800 transition duration-300 hover:text-blue-600 hover:shadow-[0_0_10px_rgba(0,0,0,0.6)]`} aria-hidden="true"></i>
                   </a>
				   </div>
				</div>
			</div>

			{/* Image Section */}
				<div className="flex">
				<img
					src={two}
					alt="Sachintha Lakshan profile"
					className="w-80 h-80 md:w-80 md:h-80 object-cover shadow-[10px_0_60px_-5px_rgba(99,102,241,0.6)] animate-float"
				/>
				</div>


			</section>

	</div>
  )
}

export default Role
