import React from 'react';
import profile from '../../assets/profile/jyotiprokash.png'
import { FiDownload } from 'react-icons/fi';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import TypeScript from './TypeScript';

const Hero = () => {
    return (
      <div id="home">
        <div className="hero min-h-screen bg-[#171e24]">
          <div className="hero-content flex-col lg:flex-row-reverse justify-between">
            {/* profile  */}
            <div className="flex-1 items-end flex justify-end relative">
              {/* Gradient Background */}
              <div className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#6A00F4] to-[#F4C4F3] -z-10 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              {/* Floating Box Shadow */}
              <div className="absolute w-[310px] h-[310px] rounded-full bg-black opacity-10 shadow-xl group-hover:scale-110 transition-transform duration-700 -z-20"></div>
              {/* Profile Image */}
              <div className="relative group">
                <img
                  className="rounded-full w-[330px] h-[330px] object-cover border-2 border-white shadow-xl group-hover:scale-105 transition-transform duration-800 mt-24 lg:mt-0"
                  src={profile}
                  alt="Jyoti Prokash"
                />
              </div>
            </div>
            {/* content section */}
            <div className="flex-1">
              <h2 className="text-3xl leading-tight lg:text-4xl my-5 text-[#ffff] font-bold">
                HELLO I'M <br />{" "}
                <span className="font-black text-[90px] leading-tight">
                  Jyoti Prokash
                </span>
              </h2>
              <section className="mb-10">
                <TypeScript></TypeScript>
              </section>
              <div className="md:flex gap-10 mt-5 ">
                <div className="w-52">
                  <a
                    href="https://drive.google.com/file/d/1VBIwh_7fmUczyhvXFF_dVwT2FpTB5uEq/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-outline text-white hover:bg-[#814CEC] rounded-3xl text-xl px-5">
                      Download CV{" "}
                      <span>
                        <FiDownload />
                      </span>
                    </button>
                  </a>
                </div>
                <div className="flex space-x-4 mt-5 md:mt-0">
                  {/* Twitter Icon */}
                  <div className="group rounded-full border-2 border-purple-500 p-3 hover:bg-purple-500 transition-all duration-300 ease-in-out">
                    <a
                      href="https://x.com/jyoti_prokash20"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="text-purple-500 group-hover:text-white text-xl" />
                    </a>
                  </div>

                  {/* Dribbble Icon */}
                  <div className="group rounded-full border-2 border-purple-500 p-3 hover:bg-purple-500 transition-all duration-300 ease-in-out">
                    <a
                      href="https://www.facebook.com/jyotiprokashchakma"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="text-purple-500 group-hover:text-white text-xl" />
                    </a>
                  </div>

                  {/* LinkedIn Icon */}
                  <div className="group rounded-full border-2 border-purple-500 p-3 hover:bg-purple-500 transition-all duration-300 ease-in-out">
                    <a
                      href="https://www.linkedin.com/in/jyoti-prokash-chakma-960b32292/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-purple-500 group-hover:text-white text-xl" />
                    </a>
                  </div>

                  {/* GitHub Icon */}
                  <div className="group rounded-full border-2 border-purple-500 p-3 hover:bg-purple-600 transition-all duration-3000 ease-in-out">
                    <a
                      href="https://github.com/jyoti-prokash"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-purple-500 group-hover:text-white text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;