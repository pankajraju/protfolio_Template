import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Hero from "@/components/Hero/Hero";
import Banner from "@/components/Banner/Banner";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
const page = () => {
  return (
    <main>
      <Hero />
      <Banner />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
};

export default page;
