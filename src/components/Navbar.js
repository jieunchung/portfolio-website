import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const closeNav = () => setNav(!nav);

  return (
    <div
      className={`w-full h-[60px] fixed flex justify-between items-center px-14 bg-white ${
        props.darkMode && "bg-[#222222]"
      } z-20 VollkornSC`}
    >
      {/* home */}
      <ul className="hover:cursor-pointer ">
        <li className="uppercase text-sm">
          <a href="/" className="font-bold">
            JC
          </a>
        </li>
      </ul>

      {/* menu */}
      <ul className="hidden md:flex uppercase hover:cursor-pointer">
        <li className="px-2 text-xs">
          <Link to="about" smooth={true} duration={500}>
            about
          </Link>
        </li>
        <li className="px-2 text-xs">
          <Link to="work" smooth={true} duration={500}>
            work
          </Link>
        </li>
        <li className="px-2 text-xs">
          <Link to="contact" smooth={true} duration={500}>
            contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-20">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : `w-full h-screen absolute top-0 left-0 flex flex-col justify-center items-center bg-white ${
                props.darkMode && "bg-[#222222]"
              } uppercase`
        }
      >
        <li className="py-6 text-4xl hover:cursor-pointer">
          <Link to="about" smooth={true} duration={500} onClick={closeNav}>
            about
          </Link>
        </li>
        <li className="py-6 text-4xl hover:cursor-pointer">
          <Link to="work" smooth={true} duration={500} onClick={closeNav}>
            work
          </Link>
        </li>
        <li className="py-6 text-4xl hover:cursor-pointer">
          <Link to="contact" smooth={true} duration={500} onClick={closeNav}>
            contact
          </Link>
        </li>
        <ul className="flex">
          <li className="py-6 px-2 text-4xl hover:cursor-pointer">
            <a
              href="https://github.com/jieunchung"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className=" hover:text-[#420094]" onClick={closeNav} />
            </a>
          </li>
          <li className="py-6 px-2 text-4xl hover:cursor-pointer">
            <a
              href="https://www.linkedin.com/in/jieun-chung-82155924b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                className=" hover:text-[#0D62BC]"
                onClick={closeNav}
              />
            </a>
          </li>
        </ul>
      </ul>

      {/* social menu */}
      <div className="hidden fixed lg:flex right-2 xl:right-4 2xl:right-8 bottom-0">
        <ul className="flex flex-row items-center text-center text-xl">
          <li className="mx-2">
            <a
              href="https://github.com/jieunchung"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="mb-4 hover:text-[#420094]" />
            </a>
          </li>
          <li className="mr-8">
            <a
              href="https://www.linkedin.com/in/jieun-chung-82155924b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="mb-4 hover:text-[#0D62BC]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
