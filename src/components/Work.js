import React from "react";
import { MdOpenInNew } from "react-icons/md";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full flex flex-col items-center py-28 relative z-10 xl:min-h-screen md:flex-row bg-[#DFE8F0]"
    >
      {/* container */}
      <div className="mx-auto w-[80%] 2xl:w-[80%]">
        {/* description */}
        <div className="h-full w-full">
          <div className="md:self-center ml-auto">
            <h3 className="font-semibold text-2xl lg:text-4xl uppercase mb-2 font-[Poppins]">
              Work
            </h3>
            <h2 className="font-bold text-3xl lg:text-5xl mb-10 font-[Poppins] text-[#304E5B]">
              Recent projects
            </h2>
          </div>
        </div>
        {/* container for items */}
        <div className="flex flex-col md:flex-row h-full w-full gap-2 md:gap-5 lg:gap-10">
          {/* item */}
          <div className="basis-1/3 md:self-center ml-auto xl:p-20 p-4 border-2 border-[#fbfbfd] bg-[#fbfbfd] max-h-[380px] overflow-scroll">
            <div className="flex flex-row items-center ml-auto">
              <h2 className="font-bold lg:text-xl uppercase mb-8 basis-full">
                Weather?
              </h2>
              <a
                href="https://mellifluous-cajeta-05ad88.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="mb-8 lg:text-xl text-right"
              >
                <MdOpenInNew />
              </a>
            </div>
            <p className="leading-relaxed max-w-prose pb-4 text-sm">
              A minimal web app that allows users to get information regarding
              weather conditions around the world. The app also includes
              animated icons and a 7-day forecast. This is the first project I
              built using React.
            </p>

            <footer className="text-xs py-2 opacity-70">
              #React #Bootstrap #API
            </footer>
          </div>
          {/* item */}
          <div className="basis-1/3 md:self-center ml-auto xl:p-20 p-4 border-2 border-[#FBFBFD] bg-[#FBFBFD] max-h-[380px] overflow-scroll">
            <div className="flex flex-row items-center ml-auto">
              <h2 className="font-bold lg:text-xl uppercase mb-8 basis-full">
                /Find
              </h2>
              <a
                href="https://superb-crostata-920b96.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="mb-8 lg:text-xl text-right"
              >
                <MdOpenInNew />
              </a>
            </div>
            <p className="leading-relaxed max-w-prose pb-4 text-sm">
              A helpful tool to help you understand the meaning of a word.
              Included are definitions, synonyms, pronunciations, sentences, and
              pictures to aid you to use the words correctly. Name inspired by
              Maplestory.
            </p>

            <footer className="text-xs py-2 opacity-70">
              #React #Bootstrap #API
            </footer>
          </div>

          {/* item */}
          <div className="basis-1/3 md:self-center ml-auto xl:p-20 p-4 border-2 border-[#FBFBFD] bg-[#FBFBFD] max-h-[380px] overflow-scroll">
            <div className="flex flex-row items-center ml-auto">
              <h2 className="font-bold lg:text-xl uppercase mb-8 basis-full">
                Cheatsheet
              </h2>
              <a
                href="https://euphonious-cassata-2254d8.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="mb-8 lg:text-xl text-right"
              >
                <MdOpenInNew />
              </a>
            </div>
            <p className="leading-relaxed max-w-prose pb-4 text-sm">
              Having struggled to remember everything while learning how to
              code, I made a cheatsheet that contains helpful information that
              can be used as a study guide for aspiring front end developers.
            </p>
            <footer className="text-xs py-2 opacity-70">
              #HTML #CSS #Prismjs
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
