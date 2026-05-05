import React from 'react'
import { FaPython, FaReact, FaDatabase, FaJava, FaWordpress } from 'react-icons/fa'

export const SkillsSection = () => {
  return (
    <section id='skills' className='flex flex-col mt-10'>
        <div className='flex flex-col p-4 w-[30%]'>
            <span className='text-base text-gray-600'>My coding</span>
            <span className='text-4xl'>Skills</span>
        </div>
    
        <div className='carousel rounded-box gap-10 items-center justify-center'>
            <div className='carousel-item'>
                <FaPython size={100}/>
            </div>
            <div className="carousel-item">
                <FaReact size={100}/>
            </div>
            <div className="carousel-item">
                <FaDatabase size={100} />
            </div>
            <div className="carousel-item">
                <FaJava size={100} />
            </div>
            <div className="carousel-item">
                <FaWordpress size={100} /> 
            </div>
            
        </div>
        
    </section>
  )
}
