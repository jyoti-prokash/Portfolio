import React, { useEffect, useState } from "react";
import project1Image from "../../assets/projects/projects1.png";
import project2Image from "../../assets/projects/projects2.png";
import project3Image from "../../assets/projects/discountPro.png";
import AOS from "aos";
import "aos/dist/aos.css"; 

const projects = [
  {
    name: "Game Reviews Website",
    image: project1Image,
    description: "A gaming Reviews website, also added there game review.",
    briefDescription:
      "A modern Game reviews website built with frontend React and Tailwind CSS and also use backend node js,express js mongoDb",
    techStack: "React, Tailwind CSS, JavaScript, NodeJs, ExpressJs, MongoDB",
    liveLink: "https://game-review-app-95101.web.app/",
    githubLink:
      "https://github.com/programming-hero-web-course2/b10-a10-client-side-jyoti-prokash",
    details:
      "During the development of this project, I learned how to create reusable components and manage state in React. The challenge was to ensure responsiveness across all devices. Future improvements include adding more animations and optimizing performance.",
  },
  {
    name: "Car Rental Web",
    image: project2Image,
    description:
      "A fully functional modern web app with a user-friendly interface.",
    briefDescription:
      "car rental website offers a user-friendly interface to book vehicles quickly and easily. Choose from a wide range of cars to suit your needs, enjoy competitive prices, and benefit from excellent customer service for a seamless rental experience.",
    techStack: "Html, TailwindCss,React, Node.js, ExpressJs, MongoDB",
    liveLink: "https://car-rental-d77a7.firebaseapp.com/",
    githubLink:
      "https://github.com/programming-hero-web-course2/b10a11-client-side-jyoti-prokash",
    details:
      "Developing this app involved handling backend API integration and implementing secure user authentication. The main challenge was ensuring data security. Future improvements include adding more payment options and enhancing the UI.",
  },
  {
    name: "Discount web Platform",
    image: project3Image,
    description: "A discount coupon collection platform with a content management system.",
    briefDescription: "A place to share thoughts and ideas.",
    techStack: "React, Express, MongoDB",
    liveLink: "https://discount-pro-400e4.web.app/",
    githubLink:
      "https://github.com/programming-hero-web-course1/b10-a9-authentication-jyoti-prokash?tab=readme-ov-file",
    details:
      "Building this platform taught me about react routing operations. The challenge was to implement efficient search functionality. Future improvements include adding user comments and social sharing options.",
  },
];

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewMore = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  useEffect(() => {
    AOS.init({ duration: "2000", delay: "100" });
  }, []);
  return (
    <section
      className="bg-gray-900 text-white py-16 flex justify-center items-center"
      id="projects"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-purple-500">My Projects</h2>
        <p className="mb-12 text-gray-400 w-4/6 mx-auto lg:text-xl">
          Here are some of the projects I've worked on that showcase my skills
          in frontend and backend development. From creating responsive user
          interfaces to building full-stack applications, these projects reflect
          my passion for crafting modern, efficient, and scalable web solutions.
          Each project highlights my ability to solve problems, write clean
          code, and continuously learn new technologies. Explore my work to see
          how I bring ideas to life with code!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105 relative"
              data-aos="zoom-in"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <button
                onClick={() => handleViewMore(project)}
                className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
              >
                View More
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-gray-900 text-white p-8 rounded-lg w-11/12 md:w-3/4 lg:w-1/2">
            <h3 className="text-3xl font-bold mb-4">{selectedProject.name}</h3>
            <p className="text-gray-400 mb-4">
              {selectedProject.briefDescription}
            </p>
            <div className="mb-4">
              <strong>Main Technology Stack:</strong>{" "}
              {selectedProject.techStack}
            </div>
            <div className="flex gap-4 mb-4">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Live Link
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                GitHub Link
              </a>
            </div>
            <h4 className="text-xl font-bold mb-2">
              Challenges & Improvements
            </h4>
            <p className="text-gray-400 mb-4">{selectedProject.details}</p>
            <button
              onClick={handleCloseModal}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyProjects;
