import React from 'react'
import FolioCard from '../componenets/FolioCard'

const Project = () => {
  return (
    <div style={{padding: '5% 7%'}} className='About flex flex-col gap-4 items-center'>
      <h1 className='text-4xl font-bold text-center'>My <span className='text-[#FD853A]'>Project</span></h1>

      <div className='w-full grid gap-5'>
        <FolioCard 
          category='Real Estate Marketplace' 
          title='Estatery' 
          details='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae in quasi tempora obcaecati quos dolore eveniet magni omnis sequi debitis id voluptatum, dolorem doloremque optio minima laudantium ea esse incidunt?' 
          anchor='https://livest-real-estate.web.app' 
        />
        <FolioCard 
          category='Landing Page' 
          title='Ai Ally' 
          details='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae in quasi tempora obcaecati quos dolore eveniet magni omnis sequi debitis id voluptatum, dolorem doloremque optio minima laudantium ea esse incidunt?' 
          anchor='https://livest-real-estate.web.app' 
        />
      </div>
      
    </div>
  )
}

export default Project