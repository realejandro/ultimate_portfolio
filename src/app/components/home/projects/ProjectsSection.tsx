import React from 'react'
import { projects } from '@/data/projectsData'
import { ProjectCard } from './ProjectCard';
import Link from 'next/link';
//import Link from 'next/link';


export const ProjectsSection = () => {
    
  return (
    <section id="projects" className='mt-10'>
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div className='flex flex-col p-4'>
            <span className='text-base text-gray-600'>My personal</span>
            <span className='text-4xl'>Projects</span>
        </div>

        
          <button className="mt-6 md:mt-0 border rounded-lg p-4 btn btn-dash border-2">
            <Link href={"https://ac-technology.netlify.app/"} target="_blank">
              More Projects
            </Link>
          </button>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1">
        {projects.map((project) => (
          <ProjectCard
             
            {...project}
          />
        ))}
      </div>

    </section>
  )
}
