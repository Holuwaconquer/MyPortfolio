import React from 'react'

const Contact = () => {
  return (
    <div style={{padding: '5% 7%'}} className='About flex flex-col gap-4 items-center'>
      <h1 className='text-4xl font-bold text-center'>Contact <span className='text-[#FD853A]'>Me</span></h1>
      <div style={{marginTop: '40px'}} className='grid md:grid-cols-[1fr_1fr] items-start justify-center md:flex-row md:gap-[5em] gap-4'>
        <div className='w-full flex text-center md:text-left flex-col gap-[3em]'>
          <h1 className='text-3xl text-[#FD853A] font-bold'>Let's work together</h1>
          <p className='leading-[30px]'>
            Hi, I'm Peter Fakorede! I'm a passionate Fullstack developer and tech enthusiast who 
            loves building web apps that solve real problems. and I have a strong background in Computing 
            and Information Technology, i have gained Experience in Computer science at Abraham Adesanya Polytechnic, 
            and also studied software engineering at SQI College of ICT.
          </p>
          <div className='socialLink'>
            <a href="">F</a>
            <a href="">L</a>
            <a href="">I</a>
            <a href="">G</a>
          </div>
        </div>
        <div className='w-full'>
          <form className='w-full flex flex-col gap-4' action="">
            <input type="text" placeholder='Name' style={{padding: '20px'}} className='bg-[#e6e6e6] w-full border-0 text-black'/>
            <input type="text" placeholder='Email' style={{padding: '20px'}} className='bg-[#e6e6e6] w-full border-0 text-black'/>
            <textarea name="" rows='7' style={{padding: '20px', resize: 'none'}} placeholder='Type your message here' className='bg-[#e6e6e6] w-full border-0 text-black' id=""></textarea>
            <button style={{padding: '20px'}} className='bg-[#FD853A] block cursor-pointer' type='button'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact