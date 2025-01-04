import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
      <div className="bg-gray-900 ">
        <div className="text-center text-white space-y-6 p-20">
          <h1 className="text-3xl font-bold">Jyoti Prokash</h1>
          <ul className="flex items-center justify-center gap-10 text-xl font-semibold">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={700}
                className="cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={700}
                className="cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={700}
                className="cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={700}
                className="cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex gap-20 justify-center items-center pb-10'>
          <div>
            <p className='text-white'>
              <span className="text-gray-500">
                © 2025 All rights reserved by
              </span>{" "}
              Jyoti Prokash
            </p>
          </div>
          <div className="border-white  border-2 p-2 rounded-full">
            <Link
              to="home"
              smooth={true}
              duration={700}
              className="cursor-pointer text-white"
            >
              <FaArrowUp />
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Footer;