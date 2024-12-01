import React from "react";
import Project1 from "../../assets/projects/p1.jpeg";
import Project2 from "../../assets/projects/p2.jpg";
import Project3 from "../../assets/projects/p3.jpg";
import Image from "next/image";
import { delay } from "framer-motion";

const ProjectsData = [
  {
    id: 1,
    title: "Project 1",
    link: "#",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perspiciatis.",
    img: Project1,
    delay: 0.4,
  },
  {
    id: 2,
    title: "Project 2",
    link: "#",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perspiciatis.",
    img: Project2,
    delay: 0.8,
  },
  {
    id: 3,
    title: "Project 3",
    link: "#",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perspiciatis.",
    img: Project3,
    delay: 1.2,
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white">
      <div className="container py-20 xl:py-36 spacey-36">
        {/* heading title  */}
        <div className="relative">
          <p className="text-3xl lg:text-4xl mb-20 tracking-widest font-bold text-center relative z-20">
            PROJECTS
          </p>
          <p className="text-5xl lg:text-8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-extrabold tracking-widest ">
            PROJECTS
          </p>
        </div>
        {/* projects card section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
          {ProjectsData.map((project) => {
            return (
              <div
                key={project.id}
                className="border-2 bg-black hover:red-shadow border-primary/80 p-4 rounded-xl hover:scale-110 duration-300 group space-y-5"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  className="w-full"
                />
                <div className="space-y-2 p-4">
                  <h1>{project.title}</h1>
                  <p className="text-sm line-clamp-2">{project.desc}</p>
                </div>
                {/* hidden button section  */}
                <div className="hidden group-hover:flex justify-around items-center duration-300 gap-1">
                  <button className="border border-white py-2 px-3 rounded-md text-lg">
                    Live
                  </button>
                  <button className="btn">View Code</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
