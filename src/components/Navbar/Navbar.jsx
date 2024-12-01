"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

export const Navlinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 3,
    title: "Projects",
    link: "/projects",
  },
  {
    id: 4,
    title: "Services",
    link: "/services",
  },
];

function Navbar() {
  const pathname = usePathname();

  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="bg-black text-white">
      <div className="container flex items-center justify-between py-5 relative z-[9999]">
        {/* logo place */}
        <div className="">
          <Link href="/">
            <div className="flex items-center">
              <div className="h-[40px] w-[40px] bg-primary flex justify-center items-center rounded-full text-white text-3xl font-bold">
                P
              </div>
              <h1 className="text-3xl font-bold">ortfolio</h1>
            </div>
          </Link>
        </div>
        {/* link section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
            {Navlinks.map((link) => {
              const isActive = pathname === link.link;
              return (
                <li key={link.id}>
                  <Link
                    className={`${
                      isActive
                        ? "text-primary text-xl font-bold hover:text-white"
                        : ""
                    } inline-block text-lg py-1 px-4 hover:red-shadow hover:bg-primary transition-all duration-300 hover:scale-110`}
                    href={link.link}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
            <button className="btn">
              <a href="./resume.pdf">Get Resume</a>
            </button>
          </ul>
        </div>
        {/* mobile hidden section */}
        <div className="md:hidden">
          <MdMenu onClick={toggleMenu} className="text-4xl" />
        </div>
        {/* mobile sidebar menu  */}
      </div>
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </nav>
  );
}

export default Navbar;
