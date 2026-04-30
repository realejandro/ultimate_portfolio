import Link from "next/link"

export const Navbar = () => {
  return (    
    <div className="navbar bg-transparent text-[var(--background)]">
        <div className="navbar-start">
            <button className="btn btn-ghost text-xl">AC</button>
        </div>
        <div className="navbar-center">
            <ul className="menu menu-horizontal p-1">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <a href="#about">About me</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a>Skills</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a>My Blog</a>
                </li>
            </ul>
        </div>
        <div className="navbar-end">
           <button className="mt-6 md:mt-0 border rounded-lg p-4 btn btn-dash">
                <a href="#contact">
                    Let’s talk
                </a>
          </button>
        </div>
    </div>
  )
}
