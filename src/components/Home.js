import React from "react";
import logo from "../assets/logo.png";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen sticky top-0 flex justify-center items-center"
    >
      <div className="mx-auto w-10/12 2xl:w-[80%] font-[Vollkorn] flex flex-col justify-center items-center">
        <img
          src={logo}
          alt="logo for my homepage that says my name (jieun chung) and an icon of a lightbulb. the lightbulb has a cog as the bulb"
        />
        <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-tight lg:leading-tight text-center">
          <Typewriter
            options={{
              strings: ["frontend developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
      </div>
    </div>
  );
};

export default Home;
