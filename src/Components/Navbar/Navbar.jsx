import React from 'react';
import './Navbar.css'
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";
const Navbar = () => {
    const links = (
      <>
        <li>
          <Link to='home'>Home</Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            className="cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            duration={800}
            className="cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </>
    );
    return (
      <div id="home" className="navbar bg-gray-900 py-5 lg:px-20 text-white fixed z-50 bg-opacity-70">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-purple-950 rounded-box z-[1] mt-3 w-64 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-2xl font-bold">Jyoti Prokash</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="cursor-pointer btn btn-outline text-[#814CEC] hover:bg-[#814CEC] rounded-3xl text-xl px-5"
          >
            Hire Me!
          </Link>
        </div>
      </div>
    );
};

export default Navbar;