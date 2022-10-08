import React from "react";
import { MdOpenInNew } from "react-icons/md";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full flex lg:flex-col items-center py-28 relative z-10 xl:min-h-screen flex-row bg-[#DFE8F0]"
    >
      {/* container */}
      <div className="mx-auto w-[80%] 2xl:w-[80%]">
        {/* description */}
        <div className="h-full w-full">
          <div className="md:self-center ml-auto">
            <h3 className="font-semibold text-2xl lg:text-4xl uppercase mb-2 font-[Poppins]">
              Work
            </h3>
            <h2 className="font-bold text-3xl lg:text-5xl mb-10 lg:mb-24 font-[Poppins] text-[#304E5B]">
              Recent projects
            </h2>
          </div>
        </div>
        {/* container for items */}
        <div className="flex flex-col lg:flex-row h-full w-full gap-2 md:gap-5 lg:gap-10">
          {/* item */}
          <div className="basis-1/3 md:self-center ml-auto xl:p-10 p-4 border-2 border-[#fbfbfd] bg-[#fbfbfd] lg:max-w-[310px] lg:min-h-[310px] w-full overflow-scroll">
            <a
              href="https://ephemeral-lolly-e84e7e.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="lg:text-xl flex justify-end pb-2"
            >
              <MdOpenInNew />
            </a>
            <div className="flex flex-row items-center ml-auto">
              <h2 className="font-bold lg:text-xl uppercase mb-8 basis-full">
                Tenzies
              </h2>
            </div>
            <p className="leading-relaxed max-w-prose pb-4 text-sm">
              A fast-paced dice game, where you need to make all 10 dice the
              same value.
            </p>

            <footer className="text-xs py-2 opacity-70">React CSS</footer>
          </div>{" "}
          {/* item */}
          <div className="basis-1/3 md:self-center ml-auto xl:p-10 p-4 border-2 border-[#fbfbfd] bg-[#fbfbfd] lg:max-w-[310px] lg:min-h-[310px] w-full overflow-scroll">
            <a
              href="https://mellifluous-cajeta-05ad88.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="lg:text-xl flex justify-end pb-2"
            >
              <MdOpenInNew />
            </a>
            <div className="flex flex-row items-center ml-auto">
              <h2 className="font-bold lg:text-xl uppercase mb-8 basis-full">
                Weather?
              </h2>
            </div>
            <p className="leading-relaxed max-w-prose pb-4 text-sm">
              A minimal weather app that provides information regarding weather
              conditions around the world.
            </p>

            <footer className="text-xs py-2 opacity-70">
              React Bootstrap API
            </footer>
          </div>
          {/* item */}
          <div className="basis-1/3 md:self-center ml-auto xl:p-10 p-4 border-2 border-[#FBFBFD] bg-[#FBFBFD] lg:max-w-[310px] lg:min-h-[310px] w-full overflow-scroll">
            <a
              href="https://superb-crostata-920b96.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="lg:text-xl flex justify-end pb-2"
            >
              <MdOpenInNew />
            </a>
            <div className="flex flex-row items-center ml-auto">
              <h2 className="font-bold lg:text-xl uppercase mb-8 basis-full">
                /Find
              </h2>
            </div>
            <p className="leading-relaxed max-w-prose pb-4 text-sm">
              A simple dictionary app that includes definitions, synonyms,
              pronunciations, sentences, and pictures.
            </p>

            <footer className="text-xs py-2 opacity-70">
              React Bootstrap API
            </footer>
          </div>
          {/* item */}
          <div className="basis-1/3 md:self-center ml-auto xl:p-10 p-4 border-2 border-[#FBFBFD] bg-[#FBFBFD] lg:max-w-[310px] w-full lg:min-h-[310px] overflow-scroll">
            <a
              href="https://warm-flan-da771a.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="lg:text-xl flex justify-end pb-2"
            >
              <MdOpenInNew />
            </a>
            <div className="flex flex-row items-center ml-auto">
              <h2 className="font-bold lg:text-xl uppercase mb-8 basis-full">
                Meme Generator
              </h2>
            </div>
            <p className="leading-relaxed max-w-prose pb-4 text-sm">
              A web application that allows users to quickly and easily generate
              custom memes.
            </p>
            <footer className="text-xs py-2 opacity-70">
              React API Tailwind
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
