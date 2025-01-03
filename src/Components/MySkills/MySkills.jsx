import React from 'react';
import html from '../../assets/icons/html.png'
import css from '../../assets/icons/text.png'
import javascript from '../../assets/icons/java-script.png'
import tailwind from '../../assets/icons/tailwind-css.svg'
import nodejs from '../../assets/icons/nodejs.svg'
import react from '../../assets/icons/react.png'
import mongodb from '../../assets/icons/mongodb-original-wordmark.svg'
const MySkills = () => {
    const skills = [
      { name: "HTML", percentage: "90%", icon: html },
      { name: "CSS3", percentage: "90%", icon: css },
      { name: "Tailwind", percentage: "90%", icon: tailwind },
      { name: "JavaScript", percentage: "80%", icon: javascript },
      { name: "ReactJS", percentage: "80%", icon: react },
      { name: "NodeJS", percentage: "75%", icon: nodejs },
      { name: "MongoDB", percentage: "70%", icon: mongodb },
    ];

    return (
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-purple-500">My Skills</h2>
          <p className="mb-12 text-gray-400">
            Crafting seamless and responsive web experiences that bring ideas to
            life and deliver value to users.
          </p>

          <div className="flex justify-center flex-wrap gap-8 ">
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
        </div>
      </section>
    );
};

export default MySkills;