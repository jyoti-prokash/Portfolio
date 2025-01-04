import React from 'react';
import profile from '../../assets/profile/jyotiprokash.png'
import { FiDownload } from 'react-icons/fi';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
    return (
      <div>
        <div className="hero min-h-screen bg-[#FFFFFF]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="flex-1">
              <img
                className="rounded-3xl w-[350px] h-[450px] rotate-3 hover:rotate-0"
                src={profile}
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl my-5 text-[#2A1454] font-bold">
                I am Jyoti Prokash
              </h2>
              <h1 className="text-5xl font-bold">Frontend Developer</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div className="flex gap-10">
                <button className="btn btn-outline text-[#814CEC] hover:bg-[#814CEC] rounded-3xl text-xl px-5">
                  Download CV{" "}
                  <span>
                    <FiDownload />
                  </span>
                </button>
                <div className="flex space-x-4">
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