import React from 'react'
import { EducationComponent } from '../education/EducationalSection'

export const AboutSection = () => {
  return (
    <section id='about' className='flex flex-row mt-10'>
        <div className='flex flex-col p-4 w-[30%]'>
            <span className='text-base text-gray-600'>More</span>
            <span className='text-4xl'>About Me</span>
        </div>
        <div className='flex flex-col p-4'>
            <p>
                {"I'm a software engineer who builds web applications end-to-end — and makes sure they actually work before they ship. My background spans React/Next.js, Node.js, Python, and Flask for development, paired with hands-on experience in automated testing (Selenium, Cucumber, REST Assured) from my time as an SDET at Etsy. That combination means I don't just hand off code — I build it, test it, and help catch issues before your users do."}
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
