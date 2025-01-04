import React from "react";
import profile from '../../assets/profile/jyotiprokash.png'

const AboutMe = () => {
  return (
    <div id="about">
      <div className="hero min-h-screen bg-gray-900">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img
            src={profile}
            alt="jyoti prokash"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          {/* Text Section */}
          <div className="">
            <h1 className="text-4xl font-bold text-purple-500 mb-4">
              About Me
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Hello! I'm Jyoti Prokash, a passionate web developer based in
              Dhaka, Bangladesh. My journey into programming began with a desire
              to develop valuable skills, which quickly turned into a passion
              for creating engaging digital experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              I enjoy working on a variety of projects, focusing on clean,
              efficient code and user-friendly design. Outside of programming, I
              have a keen interest in drawing and playing sports, which help
              fuel my creativity and provide balance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
