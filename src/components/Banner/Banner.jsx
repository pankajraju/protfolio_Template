import React from "react";
import Image from "next/image";
import BannerImg from "../../assets/man2.jpeg";
import Grains from "../../assets/grains.png";
import { motion } from "framer-motion";
import { MdFileDownload } from "react-icons/md";

const bgGrains = {
  backgroundImage: `url(${Grains.src})`,
  backgroudPosition: "center",
};

const Banner = () => {
  return (
    <section className="bg-black text-white">
      <div className="container pb-10">
        <div
          style={bgGrains}
          className="bg-gray-950 rounded-xl py-14 px-5 grid grid-col-1 md:grid-cols-2 space-y-2 md:space-y-0 translate-y-36"
        >
          {/* Banner image */}
          <div className="flex items-end justify-center">
            <Image
              src={BannerImg}
              alt="man"
              className="w-[300px] lg:w-[400px]"
            />
          </div>
          {/* banner info */}
          <div className="flex flex-col justify-center">
            <div className="text-left space-y-7 lg:max-w-[400px]">
              <h1 className="text-3xl font-bold lg:text-4xl">
                I am Full Stack Developer
              </h1>
              <p className="text-white/70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                blanditiis, tenetur cupiditate nihil provident doloremque illum
                similique. Provident doloremque optio consequuntur voluptate
                repellat modi sit facilis vero? Velit, qui eveniet.
              </p>
              <div className="flex items-center gap-4">
                <button className="btn text-xs py-3 md:text-base">
                  know more
                </button>
                <button className="flex items-center gap-2 rounded-lg border border-white/50 p-3 text-xs md:text-base">
                  <MdFileDownload /> Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
