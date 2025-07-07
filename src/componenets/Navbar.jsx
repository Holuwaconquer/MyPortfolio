import React, {useRef, useEffect, useState} from 'react'
import Logo from '../assets/newLogo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'


const fadeDownVariant = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  }
}
const Navbar = () => {
  
  const [isOpen, setisOpen] = useState(false)

  const toggleMenu = () =>{
    setisOpen(!isOpen)
  }

  const navigate = useNavigate('/')

  const goHome = () =>{
    navigate('/')
  }

  return (
    <motion.div
      variants={fadeDownVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
    <div className='navBar flex flex-col justify-center items-center box-border w-[90%] bg-[#171717] relative text-white rounded-[50px]'>
      <div id='navBar-container' className='flex justify-between relative items-center w-full'>
        <div className='leftLink flex gap-[2em] items-center text-[20px]'>
          <NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to='/'>Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to='/about'>About</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to='/services'>Service</NavLink>
        </div>
        <div onClick={goHome} className='logo cursor-pointer flex items-center gap-2'>
          <img src={Logo} alt={Logo} />
          <h1 className='text-3xl'>{'{'}Okiki {'}'}</h1>
        </div>
        <div className='rightLink flex gap-[2em] items-center text-[20px]'>
          <NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to='/resume'>Resume</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to='/project'>Project</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to='/contact'>Contact</NavLink>
        </div>
          <div onClick={toggleMenu} className='cursor-pointer md:hidden'>
            {!isOpen ?
              <span className='font-bold text-3xl text-[#FD853A]'>&#9776;</span>
              :
              <span className='font-bold text-4xl text-[#FD853A]'>&times;</span>
            }
          </div>
      </div>
      <div className={`${isOpen ? 'open' : 'overflow-hidden navbarMobile'} absolute mobile-link md:hidden bg-[#fd853aab] backdrop-blur-md shadow-md rounded-[10px] z-10 top-[120%] left-0 block w-full`}>
          <div style={{padding: '20px'}} className='flex flex-col gap-3'>
            <NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to='/about'>About</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to='/services'>Service</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to='/resume'>Resume</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to='/project'>Project</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to='/contact'>Contact</NavLink>
          </div>
        </div>
    </div>
    </motion.div>
  )
}

export default Navbar