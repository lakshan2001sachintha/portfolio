import React from 'react'
import { motion } from 'framer-motion'
import CertificationCard from './CertificationCard'
import certificate1 from '../assets/certificate-one.png'
import certificate2 from '../assets/certificate-two.png'
import certificate3 from '../assets/certificate-three.png'
import certificate4 from '../assets/certificate-four.png'
import certificate5 from '../assets/certificate-five.png'

const Certification = () => {
  const certify = [
    {
      image: certificate1,
      title: "Linux Basic / Linux Foundation",
      link : "https://www.credly.com/badges/e0de947a-6382-4e35-bd62-c1a7aa051ad0"
    },
    {
      image: certificate2,
      title: "Docker Beginner / KodeKloud",
      link : "https://learn.kodekloud.com/certificate/a6cf4bdc-5f0a-455f-8e6c-b5a29fdae090"
    },
    {
      image: certificate3,
      title: "Agile Project Management Moratuwa University DP Education",
      link : "https://www.linkedin.com/posts/sachintha-lakshan-ba293a2b4_pm-activity-7306227742562209792-fGLR/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuZ6SoB32lU3lY-XxNsm0A_C-J3f7HjJLY"  
    },
    {
      image: certificate4,
      title: "Postman Essentials / KodeKloud",
      link : "https://learn.kodekloud.com/certificate/88def181-24f8-43ea-a064-f7c22bac9725"  
    },
    {
      image: certificate5,
      title: "Multicloud Network Associate",
      link : "https://www.linkedin.com/posts/sachintha-lakshan-ba293a2b4_aviatrix-activity-7396212517565300736-J6or?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuZ6SoB32lU3lY-XxNsm0A_C-J3f7HjJLY"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div>
      <section id="certifications" className="flex flex-col gap-y-8 py-16 px-3 md:px-3 sm:py-16 lg:py-24">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications & Achievements
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certify.map((certification, index) => (
            <CertificationCard key={index} index={index} {...certification} />
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Certification;
