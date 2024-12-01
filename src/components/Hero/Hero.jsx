"use client";
import React from "react";
import Image from "next/image";
import HeroImg from "../../assets/red-man.png";
import Circle from "../../assets/red.png";
import Wall from "../../assets/wall.jpg";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const wallBackground = {
  backgroundImage: `url(${Wall.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <section style={wallBackground} className="bg-black text-white">
      <div className="bg-gradient-to-b from-primary/50 to to-black">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
          {/* brand info */}
          <div className="flex flex-col justify-center md:text-left py-14 md:py-0">
            <div className="text-center md:text-left space-y-6">
              <p className="text-4xl ">hello iam </p>
              <p className="text-5xl lg:text-7xl font-satisfy text-outline">
                Brooklyn Gilbert
              </p>
              <p className="text-sm leading-snug">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
                ab quibusdam nobis ratione similique quis iure, impedit
                quisquam. Amet sint quasi vel exercitationem dolores ad nobis
                veritatis numquam repellat sit?
              </p>
              <button className="btn">Know More</button>
              {/* stat section  */}

              <div className="flex gap-5 justify-around bg-gradient-to-b from-primary/50 to-black border-2 rounded-xl border-primary/80 hover:red-shadow hover:scale-105 duration-300 md:max-w-[400px] !mt-[44px] p-4">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold">
                    <CountUp
                      end={5}
                      start={0}
                      suffix="+"
                      delay={1.4}
                      enableScrollspy
                    />
                  </p>
                  <p className="text-sm">Experience</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold">
                    <CountUp
                      end={199}
                      start={0}
                      suffix="+"
                      delay={1.4}
                      enableScrollspy
                    />
                  </p>
                  <p className="text-sm">Projects</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold">
                    {" "}
                    <CountUp
                      end={55}
                      start={0}
                      suffix="+"
                      delay={1.4}
                      enableScrollspy
                    />
                  </p>
                  <p className="text-sm">Clients</p>
                </div>
              </div>
            </div>
          </div>
          {/* hero image  */}
          <div className="flex justify-center md:justify-end items-center relative">
            <div className="bg-black rounded-3xl overflow-hidden h-[500px] flex items-end relative group hover:red-shadow hover:scale-105 duration-700">
              <Image
                src={Circle}
                alt="circle"
                className="absolute  top-4 -left-0 -z-0 animate-spin-superslow group-hover:animate-pulse duration-300"
              />

              <Image
                src={HeroImg}
                alt="circle"
                className="w-[400px] relative z-10 group-hover:grayscale group-hover:scale-90 duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
