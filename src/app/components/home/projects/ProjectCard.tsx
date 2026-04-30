'use client';
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";


export const ProjectCard = ({ id, title, description, url, url_github, image, skills } : 
  { id?:string, title:string, description:string, url:string, url_github:string, image:string, skills:string[] }) => {
  
  return (
    <div className="card lg:card-side w-full border-5">
       <figure className=" w-full lg:w-[30%] h-64 overflow-hidden ">
          <Image
            src={ image } 
            alt={title}
            width={500}
            height={500}
            className="w-full object-cover rounded-none"
            priority
          />
        </figure>
      <div className="card-body lg:w-[70%]">
        <h2 className="card-title">{ title }</h2>
        <p>{ description }</p>
        <div className="flex flex-column w-[50%] align-center gap-5">
          {
            skills.map( (skill) => {
              return (
                <p key={skill} className=" border border-dashed rounded-lg px-4 py-2 ">
                  { skill }
                </p>
              )
            })
          }
        </div>
        <div className="justify-end card-actions">
          <button className="btn border rounded-lg p-4 btn-dash">
            <Link href={ url_github } target="_blank">
              <FaGithub className="w-7 h-7 hover:scale-110 transition" />
            </Link>
          </button>
          <button className="btn  border rounded-lg p-4 btn-dash">
            <Link href={ url } target="_blank">
              <FaGlobe className="w-7 h-7 hover:scale-110 transition" />
            </Link>
          </button>
          
        </div>
      </div>
    </div>
  )
}
