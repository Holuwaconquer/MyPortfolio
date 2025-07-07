import React, { useEffect } from 'react'
import TestiCard from './TestiCard'
import ProfileImage from '../assets/profileImg.png'
import Star from '../assets/star.png'
import { motion } from 'framer-motion'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  }
}
const Testimonials = () => {

  return (
    <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >

          <div className='testimoniesSection'>
            <div className='flex flex-col gap-[4em] justify-center items-center text-white'>
              <div className='text-center flex flex-col gap-4 justify-center items-center'>
                <h1 className='text-4xl md:w-2/4'>Testimonials That Speak to <span className='text-[#FD853A]'>My Results</span></h1>
                <p className='text-[#F9FAFB] md:w-2/4 text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aperiam 
                  inventore quis aliquam magni quisquam, reprehenderit ipsa iusto quod, qui rem 
                  officiis libero quas perferendis totam voluptatum magnam nostrum odio?
                </p>
              </div>
              <div className='testimonyCard grid w-full gap-[1em] flex-nowrap md:grid-cols-[40vw_40vw_40vw_40vw]'>
                <TestiCard 
                  testiAuthor='Jayesh Patil' 
                  testiCompany='CEO, Llrante' 
                  testiWord='consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum 
                  egestas lobortis.Sed lobortis orci elementum egestas lobortis.'
                  testtiImg={ProfileImage}
                  testiStar={Star}
                />
                <TestiCard 
                  testiAuthor='Odekomoya Oluwaseyi' 
                  testiCompany='Partner, SCICT' 
                  testiWord='consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum 
                  egestas lobortis.Sed lobortis orci elementum egestas lobortis.'
                  testtiImg={ProfileImage}
                  testiStar={Star}
                />
                <TestiCard 
                  testiAuthor='Jayesh Patil' 
                  testiCompany='CEO, Llrante' 
                  testiWord='consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum 
                  egestas lobortis.Sed lobortis orci elementum egestas lobortis.'
                  testtiImg={ProfileImage}
                  testiStar={Star}
                />
                <TestiCard 
                  testiAuthor='Jayesh Patil' 
                  testiCompany='CEO, Llrante' 
                  testiWord='consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum 
                  egestas lobortis.Sed lobortis orci elementum egestas lobortis.'
                  testtiImg={ProfileImage}
                  testiStar={Star}
                />
              </div>
            </div>
          </div>
        </motion.div>
  )
}

export default Testimonials