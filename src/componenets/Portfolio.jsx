import React from 'react'
import Button from './Button'
import FolioCard from '../componenets/FolioCard'
import Webapp from '../assets/web-app.png'
import Stopgap from '../assets/stopgap.png'
import { motion } from 'framer-motion'
import { redirect, useNavigate } from 'react-router-dom'


const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: 'easeOut' }
  }
}
const Portfolio = () => {

  const navigate = useNavigate()
  const goToProject= () =>{
    navigate('/project')
  }

  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
    <div className='w-full homePortfolio flex flex-col gap-6'>
      <div className='flex items-start gap-4 flex-col md:flex-row justify-between md:items-center z-3'>
          <h1 className='text-2xl md:text-4xl w-md z-3 font-bold text-[#344054]'>Lets have a look at my <span className='text-[#FD853A] '>Portfolio</span> </h1>
          <Button BtnText='See All' style={{padding: '10px 30px'}} onClick={goToProject} />
          
        </div>
        <div style={{margin: '20px 0'}} className='w-full grid md:gap-[1em] md:grid-cols-[1fr_1fr]'>
          <FolioCard 
            category='Real Estate Marketplace' 
            title='Estatery' 
            details='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae in quasi tempora obcaecati quos dolore eveniet magni omnis sequi debitis id voluptatum, dolorem doloremque optio minima laudantium ea esse incidunt?' 
            anchor='https://livest-real-estate.web.app'
            techStack= 'Javascript, Bootstrap, Firebase, Introjs, Emailjs' 
            image={Webapp}
            className='grid gap-[1em]'
          />
          <FolioCard
            category='Real Estate Marketplace' 
            title='StopGap Mail' 
            details="StopGap Mail (Stop Gap Mail) is a lightweight web application designed to let users instantly generate temporary, disposable email addresses for anonymous or short-term use. The platform enables users to receive and preview incoming messages without needing to sign up or provide personal information. It's ideal for avoiding spam, protecting privacy"
            anchor='https://stopgap-f65dc.web.app/'
            techStack= 'Javascript, Guerrilla  API, Bootstrap'
            image={Stopgap}
          />
        </div>
    </div>
    </motion.div>
  )
}

export default Portfolio