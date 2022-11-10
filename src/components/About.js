import React from "react";
import bryce from "../assets/bryce.jpg";
import { Fade } from "react-awesome-reveal";

const About = (props) => {
  return (
    <div
      name="about"
      className={`w-full flex py-28 items-center relative z-10 xl:min-h-screen flex-col md:flex-row bg-[#fbfbfd] ${
        props.darkMode && "bg-[#2A2A2A]"
      }`}
    >
      {/* container */}
      <Fade triggerOnce={true}>
        <div className="mx-auto w-10/12 2xl:w-[80%] h-full">
          <div className="flex flex-col lg:flex-row w-full h-full">
            {/* item 1 */}
            <div className="basis-1/2 pb-10 lg:pr-20 lg:pb-0 md:px-6 md:self-center xl:pl-20">
              <img src={bryce} alt="bryce canyon in utah" />
            </div>
            {/* item 2 */}
            <div className="basis-1/2 lg:pr-20 md:self-center mx-auto xl:pl-20">
              <h3 className="font-semibold text-2xl md:text-xl lg:text-xl 2xl:text-4xl uppercase mb-2 VollkornSC">
                About
              </h3>
              <h2 className="font-bold text-3xl md:text-2xl lg:text-2xl 2xl:text-5xl mb-6 VollkornSC">
                a little introduction
              </h2>
              <p className="leading-relaxed max-w-prose text-sm 2xl:text-[1rem] font-[Vollkorn]">
                Hi! My name is Jieun, and I am a frontend developer. I was born
                in Korea, raised in America, and now living in Sweden since
                2021. I first became interested in coding back when I had a
                Tumblr account. I would sit in front of my computer and try to
                customize my blog for hours, not realizing that the time was
                passing by. Another spark was with Stardew Valley. I learned
                that the game was developed by a single person, and that really
                opened my eyes to the world of coding. I seem to enjoy things in
                the online world where I am able to satisfy my need for
                creativity.
              </p>
              <p className="leading-relaxed max-w-prose text-sm 2xl:text-[1rem] pt-2 pb-4 font-[Vollkorn]">
                Fast forward to now, I've graduated from SheCodes and am
                continuing my journey in coding. I am hoping to work in the
                field and develop more as a programmer. Coding has been a long
                time interest of mine that has been postponed for too long. I am
                happy that I finally get to pursue and dive deeper into what I
                am truly passionate about.
              </p>
              <div className="leading-relaxed max-w-prose text-sm 2xl:text-[1rem] font-[Vollkorn] flex flex-col w-full">
                <p className="pb-2 text-sm">
                  Some of the technologies I've been using recently:
                </p>
                <ul className="flex flex-row ml-3 2xl:py-1 list-disc text-sm">
                  <li className="w-[7rem]">HTML</li>
                  <li className="w-[7rem]">CSS</li>
                </ul>
                <ul className="flex flex-row ml-3 2xl:py-1 list-disc text-sm">
                  <li className="w-[7rem]">Javascript</li>
                  <li className="w-[7rem]">React</li>
                </ul>
                <ul className="flex flex-row ml-3 2xl:py-1 list-disc text-sm">
                  <li className="w-[7rem]">Bootstrap</li>
                  <li className="w-[7rem]">Tailwind</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
