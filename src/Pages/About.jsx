import React from 'react'
import Button from '../componenets/Button'
import Human from '../assets/hireMe.png'

const About = () => {
  return (
    <div style={{padding: '5% 10%'}} className='About flex flex-col gap-4 items-center'>
      <h1 className='text-4xl font-bold text-center'>About <span className='text-[#FD853A]'>Me</span></h1>

      <div className='grid md:grid-cols-[1fr_1fr] items-center justify-center md:flex-row gap-4'>
        <div className='w-full flex text-center md:text-left flex-col gap-4'>
          <h1 className='text-3xl text-[#FD853A] font-bold'>Know who i am</h1>
          <h2 className='text-2xl'>My journey in few words</h2>
          <p>
            Hi, I'm Peter Fakorede! I'm a passionate Fullstack developer and tech enthusiast who 
            loves building web apps that solve real problems. and I have a strong background in Computing 
            and Information Technology, i have gained Experience in Computer science at Abraham Adesanya Polytechnic, 
            and also studied software engineering at SQI College of ICT.
            I have a strong foundation in HTML, CSS, and JavaScript, and I'm proficient in React.js, 
            Node.js, and Express.js. I also have experience with MongoDB for database management.
          </p>
          <Button style={{padding: '10px 20px', borderRadius: '10px'}} BtnText='Hire me' />
        </div>
        <div className='w-full self-end'>
          <img className='w-full rotate-5' src={Human} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About