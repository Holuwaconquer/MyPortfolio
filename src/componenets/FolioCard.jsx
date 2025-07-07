import React from 'react'
import Webapp from '../assets/web-app.png'
import Arrow from '../assets/upright.png'
import { BsArrowUpRightSquareFill } from "react-icons/bs";

const FolioCard = ({ category, title, details, anchor }) => {
  return (
    <div style={{padding: '20px'}} className='border-b-1 border-[black]'>
      <div className='grid md:grid-cols-[1fr_1fr] items-center justify-center gap-[3em]'>
        <div className='w-[90%] h-[280px] rounded-[10px] object-fit-cover'>
          <img src={Webapp} className='w-full h-full rounded-[10px] object-fit-cover' alt="" />
        </div>
        <div className='w-full flex gap-[1em] items-center'>
          <div>
            <small>{category}</small>
            <h1 style={{marginBottom: '20px'}} className='font-bold text-3xl text-[#FD853A]'>{title}</h1>
            <p>
              {details}
            </p>
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