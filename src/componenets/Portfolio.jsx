import React from 'react'
import Button from './Button'
import FolioCard from '../componenets/FolioCard'
import Webapp from '../assets/web-app.png'
import Stopgap from '../assets/stopgap.png'
import { motion } from 'framer-motion'
import { redirect, useNavigate } from 'react-router-dom'
import Fastcart from '../assets/fastcart.png'


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
          <h1 className='text-2xl md:text-4xl  md:w-md z-3 font-bold text-[#344054]'>Lets have a look at my <span className='text-[#FD853A]'>Portfolio</span> </h1>
          <Button BtnText='See All' style={{padding: '10px 30px'}} onClick={goToProject} />
          
        </div>
        <div style={{margin: '20px 0'}} className='w-full grid md:gap-[1em] md:grid-cols-[1fr_1fr]'>
          <FolioCard 
            category='E-Commerce' 
            title='Fastcart' 
            details='This is a Ecommerce Web Application with PWA Support, that i built as my final project at SQI College of ICT, i stumbled upon the designed on Figma and replicated the desiged with the MERN stack framework, with other frontend library.' 
            anchor='https://fastcart-ecommerce-web-app.vercel.app'
            techStack= 'Tailwind, Reactjs, Redux, React-Toastify, Recharts, Express.js, MongoDB, Node.js, ' 
            image={Fastcart}
            className='grid md:grid-cols-[1fr_1fr] items-center justify-center gap-[1em] md:gap-[3em]'
          />
          <FolioCard 
            category='Real Estate Marketplace' 
            title='Estatery' 
            details='This is a real estate community web app that focuses on connecting house owner or agent to buyers and vise versa, this web app is designed with vanila JavaScript and firebase.' 
            anchor='https://livest-real-estate.web.app'
            techStack= 'Javascript, Bootstrap, Firebase, Introjs, Emailjs' 
            image={Webapp}
            className='grid gap-[1em]'
          />
        </div>
    </div>
    </motion.div>
  )
}

export default Portfolio