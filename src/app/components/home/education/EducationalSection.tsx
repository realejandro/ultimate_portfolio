import React from 'react'
import { education } from '@/data/educationData'
import { EducationCard } from './EducationCard'

export const EducationComponent = () => {
  return (
    <section id='education' className='flex flex-col mt-10'>
        <div className='flex flex-row'>
            <div className='flex flex-col p-4 w-[30%]'>
                <span className='text-base text-gray-600'>My current</span>
                <span className='text-4xl'>Education</span>
            </div>
        </div>
        <div className='flex flex-col p-4'>
           {
                education.map( e => {
                    return (
                        <div key={e.id}>
                        <EducationCard 
                            { ...e }
                        />
                        <div className="divider divider-neutral"></div>
                        </div>
                    )
                })
           }
        </div>
    </section>
  )
}
