import Link from "next/link";

export const Navbar = () => {

    
  const optionsMenu = ["Home", "About", "Projects", "Skills", "Experience", "Blog"];

  const optionMenuElements = () =>
    optionsMenu.map((option) => (
      <li key={option}>
        <Link
          href={option === "Home" ? "/" : `#${option.toLowerCase()}`}
        >
          {option}
        </Link>
      </li>
    ));

  return (
    <div className="navbar bg-transparent text-[var(--background)]">

      {/* LEFT */}
      <div className="navbar-start">
        <button className="btn btn-ghost text-xl">AC</button>

        {/* MOBILE DROPDOWN */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {optionMenuElements()}
          </ul>
        </div>
      </div>

      {/* CENTER (DESKTOP) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-1">
          {optionMenuElements()}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end">
        <Link href="#contact" className="btn btn-dash">
          Let’s talk
        </Link>
      </div>
    </div>
  );
};