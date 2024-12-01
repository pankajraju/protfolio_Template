import React from "react";
import { Navlinks } from "./Navbar";
import Link from "next/link";
const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
  console.log(showMenu);
  return (
    <div className="md:hidden">
      <div
        className={`${
          showMenu ? "left-0" : "-left-[100%]"
        } fixed top-0 z-[999] bg-black text-white h-screen w-[75%] pt-20 pl-10 duration-300 md:hidden rounded-r-xl shadow-md flex flex-col justify-between`}
      >
        {/* menu section  */}
        <div>
          <ul>
            {Navlinks.map((link) => {
              return (
                <li key={link.id} className="py-6">
                  <Link
                    className="text-2xl font-medium text-white"
                    href={link.link}
                    onClick={toggleMenu}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* menu footer section  */}
        <div>
          <p>made with ❤️ by TCJ</p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
