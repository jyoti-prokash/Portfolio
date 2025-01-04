import React from 'react';
import html from '../../assets/icons/html.png'
import css from '../../assets/icons/text.png'
import javascript from '../../assets/icons/java-script.png'
import tailwind from '../../assets/icons/tailwind-css.svg'
import nodejs from '../../assets/icons/nodejs.svg'
import react from '../../assets/icons/react.png'
import mongodb from '../../assets/icons/mongodb-original-wordmark.svg'
import firebase from '../../assets/icons/firebase.svg'
import Marquee from "react-fast-marquee";
const MySkills = () => {
    const skills = [
      { name: "HTML", percentage: "90%", icon: html },
      { name: "CSS3", percentage: "90%", icon: css },
      { name: "Tailwind", percentage: "90%", icon: tailwind },
      { name: "JavaScript", percentage: "80%", icon: javascript },
      { name: "ReactJS", percentage: "80%", icon: react },
      { name: "firebase", percentage: "80%", icon: firebase },
      { name: "NodeJS", percentage: "75%", icon: nodejs },
      { name: "MongoDB", percentage: "70%", icon: mongodb },
    ];

    return (
      <section id='skills' className="bg-[#171e24] text-white py-16 min-h-screen justify-center items-center flex">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-purple-500">
            My Soft Skills
          </h2>
          <p className="lg:text-xl mb-12 text-gray-400 mx-auto lg:w-4/6">
            I am a highly motivated Frontend Developer with a solid foundation
            in both frontend and backend technologies. I specialize in building
            modern, responsive, and user-centric web applications. My technical
            skillset spans a wide range of tools and frameworks, allowing me to
            deliver seamless, full-stack solutions. Below are the core
            technologies I work with to create efficient and scalable web
            applications.
          </p>
          <Marquee speed={100}>
            <div className="flex justify-center flex-wrap gap-10 ">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl relative w-44"
                >
                  <div className="absolute inset-0 bg-purple-500 opacity-0 transition-opacity hover:opacity-20 rounded-lg"></div>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-purple-400 text-lg font-bold">
                    {skill.percentage}
                  </p>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    );
};

export default MySkills;