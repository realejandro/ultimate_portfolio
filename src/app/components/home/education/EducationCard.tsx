import React from 'react'
import { EducationData } from '@/data/educationData'
import Image from 'next/image';


export const EducationCard = ({ title, description, level, img, duration } : EducationData )  => {
  return (
     <div className="card lg:card-side w-full mt-10">
        <figure className=" w-[10%] h-full overflow-hidden ">
            <Image
            src={ img } 
            alt={ title }
            width={500}
            height={500}
            className="w-full object-cover object-center"
            priority
            />
        </figure>
        <div className="card-body lg:w-[70%]">
            <h2 className="text-3xl ">{ title }</h2>
            <p className='font-bold'>{ level }</p>
            <p className='italic'>{ duration }</p>
            <p>{ description }</p>
        </div>
    </div>
  )
}
