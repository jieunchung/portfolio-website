import React from "react";
import Typewriter from "typewriter-effect";
import { GiLightBulb } from "react-icons/gi";

const Home = (props) => {
  return (
    <div
      name="home"
      className={`w-full h-screen sticky top-0 flex justify-center items-center bg-white ${
        props.darkMode && "bg-[#222222]"
      }`}
    >
      <div className="mx-auto w-10/12 2xl:w-[80%] font-[Vollkorn] flex flex-col justify-center items-center">
        <h1 className="flex flex-row text-6xl sm:text-7xl md:text-8xl lg:text-9xl VollkornSC uppercase">
          Jieun
          {!props.darkMode ? (
            <GiLightBulb
              className="animate-wiggle hover:cursor-pointer text-[#fff4bf]"
              onClick={props.light}
            />
          ) : (
            <GiLightBulb
              className="rotate-[75deg] animate-wiggleOff hover:cursor-pointer text-[#494848]"
              onClick={props.light}
            />
          )}
        </h1>
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl VollkornSC uppercase">
          Chung
        </h1>
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
