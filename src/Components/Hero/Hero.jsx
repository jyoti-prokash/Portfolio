import React from 'react';
import profile from '../../assets/profile/jyotiprokash.png'

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
              <button className="btn btn-outline text-[#814CEC] hover:bg-[#814CEC] rounded-3xl text-xl px-5">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;