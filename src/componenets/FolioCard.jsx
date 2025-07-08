import React from 'react'

import Arrow from '../assets/upright.png'
import { BsArrowUpRightSquareFill } from "react-icons/bs";

const FolioCard = ({ category, title, details, anchor, techStack, image }) => {
  return (
    <div style={{padding: '20px'}} className='border-b-1 border-[black]'>
      <div className='grid md:grid-cols-[1fr_1fr] items-center justify-center gap-[1em] md:gap-[3em]'>
        <div className='w-[90%] md:h-[280px] shadow-md rounded-[20px] object-fit-cover'>
          <img src={image} className='w-full h-full rounded-[20px] object-fit-cover' alt="project-image" />
        </div>
        <div className='w-full flex md:gap-[1em] md:items-center'>
          <div>
            <small>{category}</small>
            <h1 style={{marginBottom: '10px'}} className='font-bold text-3xl text-[#FD853A]'>{title}</h1>
            <p>
              {details}
            </p>
            <h1 className='' style={{marginTop: '20px'}}>Tech Stack: <br /> <span className='text-[#FD853A]'>{techStack}</span></h1>
          </div>
          <div>
            <a target='_blank' href={anchor}><BsArrowUpRightSquareFill className='text-4xl text-[#FD853A]' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FolioCard