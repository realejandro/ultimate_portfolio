import React from 'react'
import { EducationComponent } from '../education/EducationComponent'

export const AboutSection = () => {
  return (
    <section id='about' className='flex flex-row mt-10'>
        <div className='flex flex-col p-4 w-[30%]'>
            <span className='text-base text-gray-600'>More</span>
            <span className='text-4xl'>About Me</span>
        </div>
        <div className='flex flex-col p-4'>
            <p>
                {"I've been working in projects with Next.js, React.js, Python, Headless wordpress and others. I love working in the backend more than frontend environments or QA testing."}
            </p>
            <div>
                <button className='btn border rounded-lg p-4 btn-dash'>
                    <a href="#contact">
                        {"Let's talk"}
                    </a>                    
                </button>
            </div>
        </div>
    </section>
  )
}
