import React from 'react'
import { FaCode, FaRobot, FaVial, FaPlug } from 'react-icons/fa'

const services = [
  {
    icon: <FaCode size={40} />,
    title: 'Business Applications & Dashboards',
    description: 'I build custom software solutions that help businesses manage customers, inventory, operations, and sales in one place. From internal tools to customer-facing applications.',
  },
  {
    icon: <FaRobot size={40} />,
    title: 'AI Automation & Smart Workflows',
    description: 'I help businesses reduce repetitive work by integrating AI into their daily operations — customer support assistants, document processing, data analysis, and workflow automation.',
  },
  {
    icon: <FaVial size={40} />,
    title: 'Software Quality & Automation Testing',
    description: 'I help companies improve software reliability by creating automated testing systems that detect problems before they reach customers.',
  },
  {
    icon: <FaPlug size={40} />,
    title: 'System Integrations & Backend Solutions',
    description: 'I connect your business tools and build reliable systems that allow your applications, databases, and third-party services to work together.',
  },
]

export const ServicesSection = () => {
  return (
    <section id='services' className='flex flex-col mt-10 px-4'>
      <div className='flex flex-col w-full sm:w-[30%]'>
        <span className='text-base text-gray-600'>What I offer</span>
        <span className='text-4xl'>Services</span>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6'>
        {services.map((service) => (
          <div
            key={service.title}
            className='flex flex-col gap-4 p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition-colors'
          >
            <div className='text-gray-700'>{service.icon}</div>
            <h3 className='text-xl font-semibold'>{service.title}</h3>
            <p className='text-gray-600 text-sm leading-relaxed'>{service.description}</p>
          </div>
        ))}
      </div>

      <div className='mt-8 p-6 rounded-xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
        <div>
          <p className='text-lg font-semibold'>Have a project in mind?</p>
          <p className='text-gray-600 text-sm'>Let&apos;s talk about how I can help you build it.</p>
        </div>
        <a
          href='#contact'
          className='bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap'
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}