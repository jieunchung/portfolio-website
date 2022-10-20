import React from "react";
import { MdOpenInNew } from "react-icons/md";

const Work = (props) => {
  return (
    <div
      name="work"
      className={`w-full flex lg:flex-col items-center py-28 relative z-10 xl:min-h-screen flex-row bg-white ${
        props.darkMode && "bg-[#222222]"
      } font-[Vollkorn]`}
    >
      {/* container */}
      <div className="mx-auto w-10/12 2xl:w-[80%]">
        {/* description */}
        <div className="h-full w-full">
          <div className="md:self-center mx-auto">
            <h3 className="font-semibold text-2xl md:text-xl lg:text-2xl 2xl:text-4xl uppercase mb-2 VollkornSC">
              Work
            </h3>
            <h2 className="font-bold text-3xl md:text-2xl lg:text-3xl 2xl:text-5xl lg:mb-24 2xl:mb-32 VollkornSC">
              recent projects
            </h2>
          </div>
        </div>
        {/* container for items */}
        <ul className="w-10/12 2xl:w-[80%] mx-auto border-[transparent] flex flex-col lg:flex-row lg:min-h-[30vh] justify-center gap-2 font-[Vollkorn] flex-wrap">
          <li
            className={`flex flex-col border-[#fbfbfd] flex-1 m-4 bg-[#fbfbfd] ${
              props.darkMode && "bg-[#2a2a2a] border-[#2a2a2a]"
            } min-h-[10rem]`}
          >
            <a
              className="flex justify-end m-2 text-xl"
              href="https://ephemeral-lolly-e84e7e.netlify.app/"
              target="_blank"
            >
              <MdOpenInNew />
            </a>
            <h4 className="flex-1 text-center text-xl 2xl:text-2xl VollkornSC my-2">
              tenzies
            </h4>
            <p className="flex-1 flex items-center justify-center text-[0.9rem] 2xl:text-[1rem] mx-4 lg:mx-1 text-center xl:text-center">
              A fast-paced dice game, where you need to make all 10 dice the
              same value.
            </p>
            <footer className="flex-1 flex items-end justify-center mx-4 text-[0.75rem] xl:text-[0.85rem] opacity-[75%] my-1">
              React CSS
            </footer>
          </li>
          <li
            className={`flex flex-col border-[#fbfbfd] flex-1 m-4 bg-[#fbfbfd] ${
              props.darkMode && "bg-[#2a2a2a] border-[#2a2a2a]"
            } min-h-[10rem]`}
          >
            <a
              className="flex justify-end m-2 text-xl"
              href="https://mellifluous-cajeta-05ad88.netlify.app/"
              target="_blank"
            >
              <MdOpenInNew />
            </a>
            <h4 className="flex-1 text-center text-xl 2xl:text-2xl VollkornSC my-2">
              weather?
            </h4>
            <p className="flex-1 flex items-center justify-center text-[0.9rem] 2xl:text-[1rem] mx-4 lg:mx-1 text-center xl:text-center">
              a minimal weather app that provides information regarding weather
              conditions around the world.
            </p>
            <footer className="flex-1 flex items-end justify-center mx-4 text-[0.75rem] xl:text-[0.85rem] opacity-[75%] my-1">
              React Bootstrap API
            </footer>
          </li>
          <li
            className={`flex flex-col border-[#fbfbfd] flex-1 m-4 bg-[#fbfbfd] ${
              props.darkMode && "bg-[#2a2a2a] border-[#2a2a2a]"
            } min-h-[10rem]`}
          >
            <a
              className="flex justify-end m-2 text-xl"
              href="https://superb-crostata-920b96.netlify.app/"
              target="_blank"
            >
              <MdOpenInNew />
            </a>
            <h4 className="flex-1 text-center text-xl 2xl:text-2xl VollkornSC my-2">
              /find
            </h4>
            <p className="flex-1 flex items-center justify-center text-[0.9rem] 2xl:text-[1rem] mx-4 lg:mx-1 text-center xl:text-center">
              An English dictionary app with definitions, synonyms,
              pronunciations, sentences, and pictures.
            </p>
            <footer className="flex-1 flex items-end justify-center mx-4 text-[0.75rem] xl:text-[0.85rem] opacity-[75%] my-1">
              React Bootstrap API
            </footer>
          </li>
          <li
            className={`flex flex-col border-[#fbfbfd] flex-1 m-4 bg-[#fbfbfd] ${
              props.darkMode && "bg-[#2a2a2a] border-[#2a2a2a]"
            } min-h-[10rem]`}
          >
            <a
              className="flex justify-end m-2 text-xl"
              href="https://warm-flan-da771a.netlify.app/"
              target="_blank"
            >
              <MdOpenInNew />
            </a>
            <h4 className="flex-1 text-center text-xl 2xl:text-2xl VollkornSC my-2">
              meme generator
            </h4>
            <p className="flex-1 flex items-center justify-center text-[0.9rem] 2xl:text-[1rem] mx-4 lg:mx-1 text-center xl:text-center">
              A web application that allows users to quickly and easily generate
              custom memes.
            </p>
            <footer className="flex-1 flex items-end justify-center mx-4 text-[0.75rem] xl:text-[0.85rem] opacity-[75%] my-1">
              React API Tailwind
            </footer>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
