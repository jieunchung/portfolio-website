import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineSmile, AiOutlineMail, AiOutlineHtml5 } from "react-icons/ai";
import { DiJavascript1, DiCss3Full, DiReact } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { RiLinkedinLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-full h-[60px] fixed flex justify-between items-center px-14 bg-white z-20 text-[#304E5B]">
      {/* home */}
      <ul className="hover:cursor-pointer">
        <li className="text-xl">
          <a href="/">
            <AiOutlineSmile className="hover:animate-spin-slow" />
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
            : "w-full h-screen absolute top-0 left-0 flex flex-col justify-center items-center bg-white uppercase"
        }
      >
        <li className="py-6 text-4xl hover:cursor-pointer">
          <Link to="about" smooth={true} duration={500}>
            about
          </Link>
        </li>
        <li className="py-6 text-4xl hover:cursor-pointer">
          <Link to="work" smooth={true} duration={500}>
            work
          </Link>
        </li>
        <li className="py-6 text-4xl hover:cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            contact
          </Link>
        </li>
      </ul>

      {/* social menu */}
      <div className="hidden fixed lg:flex right-8 bottom-0">
        <ul className="flex flex-col items-center text-center text-lg after:block after:w-[1px] after:h-[200px] after:mx-0 after:my-auto after:bg-[#304E5B] text-[#304E5B]">
          <li>
            <a
              href="https://www.linkedin.com/in/jieun-chung-82155924b/"
              target="_blank"
              rel="noreferrer"
            >
              <RiLinkedinLine className="mb-4 hover:text-[#0D62BC]" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jieunchung"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub className="mb-4 hover:text-[#420094]" />
            </a>
          </li>
          <li>
            <a href="mailto:jieunchung@gmail.com">
              <AiOutlineMail className="mb-4 hover:text-[#CE483C]" />
            </a>
          </li>
        </ul>
      </div>

      {/* skills menu */}
      <div className="hidden lg:flex left-8 fixed bottom-0">
        <ul className="flex flex-col items-center text-xl text-center after:block after:w-[1px] after:h-[300px] after:mx-0 after:my-auto after:bg-[#304E5B] text-[#304E5B]">
          <li>
            <DiReact className="mb-4 text-2xl hover:text-[#61DAFB]" />
          </li>
          <li>
            <DiJavascript1 className="mb-4 hover:text-[#EFD81D]" />
          </li>
          <li>
            <DiCss3Full className="mb-4 hover:text-[#264BDD]" />
          </li>
          <li>
            <AiOutlineHtml5 className="mb-4 hover:text-[#CD5736]" />
          </li>
          <li>
            <SiTailwindcss className="mb-4 hover:text-[#05AFCE]" />
          </li>
          <li>
            <BsBootstrap className="mb-4 hover:text-[#7510EF]" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
