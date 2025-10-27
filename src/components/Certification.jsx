import React from 'react'
import CertificationCard from './CertificationCard'
import certificate1 from '../assets/certificate-one.png'
import certificate2 from '../assets/certificate-two.png'
import certificate3 from '../assets/certificate-three.png'
import certificate4 from '../assets/certificate-four.png'

const Certification = () => {
  const certify = [
    {
      image: certificate1,
      title: "Linux Foundation"
    },
    {
      image: certificate2,
      title: "Docker Beginner"
    },
    {
      image: certificate3,
      title: "Agile Project Management"  
    },
    {
      image: certificate4,
      title: "Postman Essentials"  
    }
  ];

  return (
    <div>
      <section id="skills" className="flex flex-col gap-y-8 py-16 px-3 md:px-3 sm:py-16 lg:py-24">
        <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-500 mb-12">
          Certifications
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl mx-auto sm:justify-items-center">
          {certify.map((certification, index) => (
            <CertificationCard key={index} {...certification} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Certification;
