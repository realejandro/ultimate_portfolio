'use client';
import Link from 'next/link';
import React from 'react'

import { FaGithub, FaLinkedin } from "react-icons/fa";


export const FooterComponent = () => {
  return (
    <footer className="footer sm:footer-horizontal text-lg font-black p-10 justify-center items-center">
        <p className='text-center'>
            Alejandro Cabrera © 2018 - {new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="justify-end card-actions gap-5">
          <Link href={ "https://github.com/realejandro" } target="_blank">
            <FaGithub className="w-7 h-7 hover:scale-110 transition" />
          </Link>
          <Link href={ "https://www.linkedin.com/in/alejcabrera07" } target="_blank">
            <FaLinkedin className="w-7 h-7 hover:scale-110 transition" />
          </Link>
        </div>
    </footer>
  )
}
