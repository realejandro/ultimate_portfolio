import React from 'react'
import { TimeLineComponent } from '../../TimeLine/TimeLineComponent'

export const ExperienceSection = () => {
  return (
    <section id='experience' className ='flex flex-col mt-10'>
        <div className='flex flex-col p-4 w-full'>
            <span className='text-base'>My Job</span>
            <span className='text-4xl'>History</span>
        </div>
        <TimeLineComponent/>
    </section>
  )
}
