import React, { useEffect } from "react";
import profile from '../../assets/profile/jyotiprokash.png'
import AOS from "aos";
import "aos/dist/aos.css"; 
const AboutMe = () => {
  useEffect(()=>{
      AOS.init({duration:"2000", delay:"100"});
  },[]);
  return (
    <div id="about">
      <div className="hero min-h-screen bg-gray-900">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img
            data-aos="zoom-in-up"
            src={profile}
            alt="jyoti prokash"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          {/* Text Section */}
          <div
            className="flex flex-col md:flex-row items-center justify-center gap-6"
            data-aos="zoom-in"
          >
            {/* About Me Card */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:w-1/2">
              <h2 className="text-3xl font-bold text-purple-500 mb-4">
                About Me
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Hello! I'm Jyoti Prokash, a passionate web developer based in
                Dhaka, Bangladesh. My journey into programming began with a
                desire to develop valuable skills, which quickly turned into a
                passion for creating engaging digital experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                I enjoy working on a variety of projects, focusing on clean,
                efficient code and user-friendly design. Outside of programming,
                I have a keen interest in drawing and playing sports, which help
                fuel my creativity and provide balance.
              </p>
            </div>

            {/* Education Card */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:w-1/2">
              <h2 className="text-3xl font-bold text-purple-500 mb-4">
                Education
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                🎓{" "}
                <span className="font-semibold">
                  Bachelor of Science (B.Sc.) in Computer Science & Engineering
                </span>
                <br /> National University of Bangladesh
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                During my academic journey, I have gained knowledge in data
                structures, algorithms, web development, and modern technologies
                like React, Node.js, and MongoDB. I'm always eager to learn and
                improve my skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
