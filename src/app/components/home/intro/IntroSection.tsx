import { Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const IntroSection = () => {
  return (
    <div className='grid grid-cols-1 
        lg:grid-cols-2'>
        <div className='flex w-full flex-col gap-3 m-auto'>
            <div className='flex flex-row gap-2'>
                <Link href={ "https://github.com/realejandro" } target="_blank">
                    <FaGithub className="w-7 h-7 hover:scale-110 transition" />
                </Link>

                <Link href={"https://www.linkedin.com/in/alejcabrera07/"} target="_blank">
                    <FaLinkedin className="w-7 h-7 hover:scale-110 transition" />
                </Link>
                <Link href={'/'}>
                    <Mail className="w-7 h-7 hover:scale-110 transition" />
                </Link>
            </div>
            <h1 className='text-5xl'>Software Engineer</h1>
            <span className='text-base text-[#D1D5DB] '>& Software Development Engineer in Test (SDET)</span>
            <span className='text-base'>
                Hi! I'm Alejandro, a Software Engineer working as a SDET. Always looking for
                problems to solve using code, systemic criteria or just improving Skils.
            </span>
        </div>
        <div className='flex justify-center mt-10'>
            <Image
                src={'/assets/images/home/programmer.svg'}
                alt="Picture of the author"
                width={500}
                height={500} 
            />
            
        </div>
    </div>
  )
}
