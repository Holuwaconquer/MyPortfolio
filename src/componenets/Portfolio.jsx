import React from 'react'
import Button from './Button'

const Portfolio = () => {
  return (
    <div className='w-full homePortfolio flex flex-col gap-6'>
      <div className='flex items-start gap-4 flex-col md:flex-row justify-between md:items-center z-3'>
          <h1 className='text-2xl md:text-4xl w-md z-3 font-bold text-[#344054]'>Lets have a look at my <span className='text-[#FD853A] '>Portfolio</span> </h1>

        </div>
        <div style={{margin: '20px 0'}} className='w-full grid md:grid-col-[1fr_1fr]'>
          
        </div>
    </div>
  )
}

export default Portfolio