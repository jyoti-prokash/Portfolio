import React from 'react';

const AboutMe = () => {
    return (
      <div>
        <div className="hero min-h-screen bg-[#FFFFFF]">
          <div className="hero-content flex-col lg:flex-row-reverse justify-between">
            <div className="flex-1">
              <h1 className="uppercase text-4xl font-bold">self summary</h1>
            </div>
            <div className="flex-1">
              <h1 className="uppercase text-4xl font-bold">My Education</h1>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutMe;