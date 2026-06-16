import React from 'react'
import { FaCode, FaRobot, FaVial, FaPlug } from 'react-icons/fa'

const services = [
  {
    icon: <FaCode size={40} />,
    title: 'Full-Stack Development',
    description: 'Custom web applications, business dashboards, and e-commerce platforms built with React, Next.js, Node.js, and Python. From MVP to production-ready.',
  },
  {
    icon: <FaRobot size={40} />,
    title: 'AI Integration',
    description: 'Add AI-powered features to your existing product — chatbots, document search, workflow automation — using Claude and OpenAI APIs integrated into your stack.',
  },
  {
    icon: <FaVial size={40} />,
    title: 'Test Automation',
    description: 'End-to-end testing frameworks built from scratch using Selenium, Cucumber, and REST Assured. Ship with confidence knowing your app is covered before it reaches users.',
  },
  {
    icon: <FaPlug size={40} />,
    title: 'API Development',
    description: 'REST and GraphQL APIs designed for scalability and reliability. Includes third-party integrations (Slack, payment gateways, internal business systems).',
  },
]

export const ServicesSection = () => {
  return (
    <section id='services' className='flex flex-col mt-10 px-4'>
      <div className='flex flex-col p-4 w-full sm:w-[30%]'>
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