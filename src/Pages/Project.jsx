import React from 'react'
import FolioCard from '../componenets/FolioCard'
import Webapp from '../assets/web-app.png'
import Ally from '../assets/AiAlly.png'
import Todo from '../assets/todo.png'
import Stopgap from '../assets/stopgap.png'

const Project = () => {
  return (
    <div style={{padding: '5% 7%'}} className='About flex flex-col gap-4 items-center'>
      <h1 className='text-4xl font-bold text-center'>My <span className='text-[#FD853A]'>Project</span></h1>

      <div className='w-full grid gap-2 md:gap-5'>
        <FolioCard 
          category='Real Estate Marketplace' 
          title='Estatery' 
          details='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae in quasi tempora obcaecati quos dolore eveniet magni omnis sequi debitis id voluptatum, dolorem doloremque optio minima laudantium ea esse incidunt?' 
          anchor='https://livest-real-estate.web.app'
          techStack= 'Javascript, Bootstrap, Firebase, Introjs, Emailjs' 
          image={Webapp}
        />
        <FolioCard 
          category='Web App' 
          title='Stopgap Mail' 
          details=".Gap Mail (Stop Gap Mail) is a lightweight web application designed to let users instantly generate temporary, disposable email addresses for anonymous or short-term use. The platform enables users to receive and preview incoming messages without needing to sign up or provide personal information. It's ideal for avoiding spam, protecting privacy" 
          techStack= 'Javascript, Guerrilla  API, Bootstrap'
          anchor='https://stopgap-f65dc.web.app/' 
          image={Stopgap}
        />
        <FolioCard 
          category='Web App' 
          title='Todo List' 
          details='This is a todo list web app built with reactjs, user can add task title and details, delete and edit task, and also mark task as completed, the app also has a calendar features, where you can choose the target date of the task.' 
          anchor='https://conquertab.vercel.app/' 
          techStack= 'Reactjs, Localstorage'
          image={Todo}
        />
        <FolioCard 
          category='Landing Page (Static)' 
          title='Ai Ally' 
          details='This is a landing page for an AI Web platform, the website is built HTML, CSS (BOOTSTRAP)' 
          techStack= 'HTML, CSS, BootStrap'
          anchor='https://all-ally-website.vercel.app/' 
          image={Ally}
        />
      </div>
      
    </div>
  )
}

export default Project