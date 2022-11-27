import React from "react";
import Typewriter from "typewriter-effect";
import { GiLightBulb } from "react-icons/gi";
import { Fade } from "react-awesome-reveal";

const Home = (props) => {
  return (
    <section
      name="home"
      className={`w-full h-screen sticky top-0 flex justify-center items-center bg-white ${
        props.darkMode && "bg-[#222222]"
      }`}
    >
      <article className="mx-auto w-10/12 2xl:w-[80%] font-[Vollkorn] flex flex-col justify-center items-center">
        <Fade
          cascade
          delay={1500}
          triggerOnce={true}
          damping={0.5}
          direction="down"
        >
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
        </Fade>
        <Fade delay={1800} triggerOnce={true} direction="right">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl VollkornSC uppercase">
            Chung
          </h1>
        </Fade>
        <Fade delay={2100} triggerOnce={true}>
          <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-tight lg:leading-tight text-center">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.pauseFor(2300);
                typewriter
                  .typeString("frontend developer")
                  .pauseFor(2500)
                  .start();
              }}
            />
          </h3>
        </Fade>
      </article>
    </section>
  );
};

export default Home;
