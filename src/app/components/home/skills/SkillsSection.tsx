import React from 'react'
import { FaPython, FaReact, FaDocker, FaGitAlt, FaNode } from 'react-icons/fa'
import { SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiGraphql, SiSelenium, SiCucumber, SiGithubactions } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { icon: <FaReact size={60} />, label: 'React' },
      { icon: <SiNextdotjs size={60} />, label: 'Next.js' },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { icon: <FaNode size={60} />, label: 'Node.js' },
      { icon: <FaPython size={60} />, label: 'Python' },
      { icon: <SiExpress size={60} />, label: 'Express' },
    ]
  },
  {
    category: 'APIs',
    skills: [
      { icon: <TbApi size={60} />, label: 'REST API' },
      { icon: <SiGraphql size={60} />, label: 'GraphQL' },
    ]
  },
  {
    category: 'Databases',
    skills: [
      { icon: <SiMongodb size={60} />, label: 'MongoDB' },
      { icon: <SiPostgresql size={60} />, label: 'PostgreSQL' },
    ]
  },
  {
    category: 'Testing',
    skills: [
      { icon: <SiSelenium size={60} />, label: 'Selenium' },
      { icon: <SiCucumber size={60} />, label: 'Cucumber' },
      { icon: <TbApi size={60} />, label: 'REST Assured' },
    ]
  },
  {
    category: 'Tools',
    skills: [
      { icon: <FaDocker size={60} />, label: 'Docker' },
      { icon: <FaGitAlt size={60} />, label: 'Git' },
      { icon: <SiGithubactions size={60} />, label: 'GitHub Actions' },
    ]
  },
]

export const SkillsSection = () => {
  return (
    <section id='skills' className='flex flex-col mt-10 px-4'>
      <div className='flex flex-col p-4 w-full sm:w-[30%]'>
        <span className='text-base text-gray-600'>My coding</span>
        <span className='text-4xl'>Skills</span>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        {skillCategories.map((group) => (
          <div key={group.category} className='flex flex-col gap-4 p-4 rounded-xl border border-gray-200'>
            <span className='text-sm font-semibold text-gray-500 uppercase tracking-widest'>
              {group.category}
            </span>
            <div className='flex flex-wrap gap-6'>
              {group.skills.map((skill) => (
                <div key={skill.label} className='flex flex-col items-center gap-2'>
                  <div className='text-5xl sm:text-[60px]'>
                    {skill.icon}
                  </div>
                  <span className='text-sm text-gray-600'>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}