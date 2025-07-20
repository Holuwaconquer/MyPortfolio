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
          <h1 className='text-2xl md:text-4xl  md:w-md z-3 font-bold text-[#344054]'>Lets have a look at my <span className='text-[#FD853A]'>Portfolio</span> </h1>
          <Button BtnText='See All' style={{padding: '10px 30px'}} onClick={goToProject} />
          
        </div>
        <div style={{margin: '20px 0'}} className='w-full grid md:gap-[1em] md:grid-cols-[1fr_1fr]'>
          <FolioCard 
            category='Music Web App' 
            title='Melodies' 
            details='Melodies is Music Application, that uses the Audis API to fetch it music, the features of the application includes fetching music data from the API and giving the user to listen to the music in our application and also get information about the music, artist and the artist information, you can play music, view trending music, trending artist, etc.' 
            anchor='https://mymelodies.vercel.app'
            techStack= 'Reactjs, Redux, React-Toastify, Audius API' 
            image={Melody}
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