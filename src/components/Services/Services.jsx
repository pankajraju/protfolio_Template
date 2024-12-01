"use client";
import React from "react";
import RedBg from "../../assets/redbg2.png";
import { CiPen } from "react-icons/ci";
import { IoFolderOpen } from "react-icons/io5";
import { RiComputerFill } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { MdFileDownload } from "react-icons/md";

const bgStyle = {
  backgroundImage: `url(${RedBg.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const ServiceData = [
  {
    id: 1,
    title: "Website Development",
    icon: <CiPen className="text-3xl" />,
    link: "/services",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, minima!",
    delay: 1.2,
  },
  {
    id: 2,
    title: "Web Development",
    icon: <IoFolderOpen className="text-3xl" />,
    link: "#",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, minima!",
    delay: 1.6,
  },
  {
    id: 3,
    title: "App Development",
    icon: <RiComputerFill className="text-3xl" />,
    link: "#",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, minima!",
    delay: 2,
  },
];

const Services = () => {
  return (
    <section style={bgStyle}>
      <div className="bg-gradient-to-b from-black to-primary/5 text-white pt-30">
        <div className="container py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* service info */}
            <div className="flex flex-col justify-center">
              <div className="text-left space-y-7 lg:max-w-[400px]">
                <h1 className="text-3xl font-bold lg:text-4xl">Services</h1>
                <p className="text-white/70">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  blanditiis, tenetur cupiditate nihil provident doloremque
                  illum similique. Provident doloremque optio consequuntur
                  voluptate repellat modi sit facilis vero? Velit, qui eveniet.
                </p>
                <div className="flex items-center gap-4">
                  <button className="bg-white text-primary rounded font-bold px-4 text-xs py-3 md:text-base hover:red-shadow ">
                    know more
                  </button>
                  <button className="flex items-center gap-2 rounded-lg border border-white/50 p-3 text-xs md:text-base">
                    <MdFileDownload /> Download Resume
                  </button>
                </div>
              </div>
            </div>
            {/* Service card */}
            <div className="flex justify-between items-center ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {ServiceData.map((service) => {
                  return (
                    <motion.div
                      key={service.id}
                      className="flex flex-col gap-4 justify-center items-start p-6 bg-white/20 rounded-3xl backdrop-blur-sm"
                    >
                      <div className="text-primary/80 bg-white/70 rounded-full p-2">
                        {service.icon}
                      </div>
                      <h1 className="text-2xl font-bold">{service.title}</h1>
                      <p className="text-sm text-white/70">{service.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
