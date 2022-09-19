import React from "react";
import forest from "../assets/forest.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen flex py-28 items-center relative z-10 xl:min-h-screen flex-col md:flex-row bg-white"
    >
      {/* container */}
      <div className="mx-auto w-10/12 2xl:w-[80%]">
        <div className="flex flex-col md:flex-row w-full">
          {/* item 1 */}
          <div className="basis-1/2 pb-5 md:pr-20 md:self-center ml-auto xl:pl-20">
            <img
              src={forest}
              alt="jieun exploring the wilderness in washington state"
            />
          </div>
          {/* item 2 */}
          <div className="basis-1/2 md:self-center ml-auto xl:pl-20">
            <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl uppercase mb-2">
              About
            </h3>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              A little introduction
            </h2>
            <p className="leading-relaxed max-w-prose text-sm lg:text-[1rem]">
              Hi! My name is Jieun, and I am a frontend developer. I was born in
              Korea, raised in America, and now living in Sweden since 2021. I
              first became interested in coding back when I had a Tumblr
              account. I would sit in front of my computer and try to customize
              my blog for hours, not realizing that the time was passing by.
              Another spark was with Stardew Valley, where you can customize the
              looks and the game story by customizing files. I learned that the
              game was developed by a single person, and that really opened my
              eyes to the world of coding. I seem to enjoy things in the online
              world where I am able to satisfy my need for creativity.
            </p>
            <p className="leading-relaxed max-w-prose text-sm lg:text-[1rem] py-2">
              Fast forward to now, I recently graduated from SheCodes and am
              continuing my journey in coding. I am hoping to work in the field
              and develop more as a programmer.
            </p>
            <p className="leading-relaxed max-w-prose text-sm lg:text-[1rem]">
              Jieun
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
