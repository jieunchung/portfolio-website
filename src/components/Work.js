import React from "react";
import { MdOpenInNew } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

const Work = (props) => {
  const Works = [
    {
      title: "Typenotes",
      url: "https://chipper-fairy-65d0f5.netlify.app/",
      description:
        "Typenotes is a markdown supported note app, which helps you to write your note in a clean format. Available in both light & dark mode.",
      technologies: "React TSX Tailwind react-router",
    },
    {
      title: "Tenzies",
      url: "https://ephemeral-lolly-e84e7e.netlify.app/",
      description:
        "A fast-paced dice game, where you need to make all 10 dice the same value.",
      technologies: "React JS CSS",
    },
    {
      title: "Pokédex",
      url: "https://dreamy-donut-71e8d8.netlify.app/",
      description:
        "Retrieve data about your favorite generation 1 Pokémon. All 151 Pokémon are included, from Bulbasaur to Mew.",
      technologies: "React JS API CSS",
    },
    {
      title: "Todo",
      url: "https://sweet-chaja-fc6f41.netlify.app/",
      description:
        "Increase your productivity with todo. Create and edit your tasks, organize them by 'dragging & dropping' the task, and mark them as complete.",
      technologies: "React TS CSS",
    },
    {
      title: "Notes",
      url: "https://startling-pithivier-1c6da0.netlify.app/",
      description:
        "Remembering can be difficult in a busy daily life. This app is desgined to help you record your thoughts, and to create to-do lists.",
      technologies: "React JS CSS",
    },
    {
      title: "Weather?",
      url: "https://mellifluous-cajeta-05ad88.netlify.app/",
      description:
        "A minimal weather app that provides information regarding weather conditions around the world.",
      technologies: "React JS Bootstrap API",
    },
    {
      title: "/Find",
      url: "https://superb-crostata-920b96.netlify.app/",
      description:
        "An English dictionary app with definitions, synonyms, pronunciations, sentences, and pictures.",
      technologies: "React JS Bootstrap API",
    },
    {
      title: "Meme Generator",
      url: "https://warm-flan-da771a.netlify.app/",
      description:
        "A web application that allows users to quickly and easily generate custom memes.",
      technologies: "React JS API Tailwind",
    },
  ];
  return (
    <section
      name="work"
      className={`w-full flex lg:flex-col items-center py-28 relative z-10 xl:min-h-screen flex-row bg-white ${
        props.darkMode && "bg-[#222222]"
      } font-[Vollkorn]`}
    >
      {/* container */}
      <article className="mx-auto w-10/12 2xl:w-[80%]">
        {/* description */}
        <div className="h-full w-full">
          <header className="md:self-center mx-auto">
            <Fade cascade damping={0.3} triggerOnce={true}>
              <h3 className="font-semibold text-2xl md:text-xl lg:text-2xl 2xl:text-4xl uppercase mb-2 VollkornSC">
                Work
              </h3>
              <h2 className="font-bold text-3xl md:text-2xl lg:text-3xl 2xl:text-5xl mb-10 lg:mb-20 2xl:mb-24 VollkornSC">
                recent projects
              </h2>
            </Fade>
          </header>
        </div>
        {/* works */}
        <Fade cascade damping={0.2} direction="up" triggerOnce={true}>
          <ul className="w-full xl:w-10/12 2xl:w-[80%] mx-auto border-[transparent] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center gap-2 font-[Vollkorn]">
            {Works.map((work, index) => {
              return (
                <li
                  key={index}
                  className={`flex flex-col border-[#fbfbfd] flex-1 m-4 bg-[#fbfbfd] ${
                    props.darkMode && "bg-[#2a2a2a] border-[#2a2a2a]"
                  } min-h-[10rem]`}
                >
                  <a
                    className="flex justify-end m-4 text-md md:text-xl pt-2 xl:pt-4"
                    href={work.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MdOpenInNew />
                  </a>
                  <h4 className="flex-1 px-4 md:px-10 xl:py-2 flex items-center justify-center text-center text-[1.2rem] xl:text-xl 2xl:text-2xl VollkornSC my-2 lowercase">
                    {work.title}
                  </h4>
                  <p className="flex-1 px-4 text-center sm:px-10 flex items-center justify-center text-[0.8rem] lg:text-[0.85rem] 2xl:text-[0.9rem]">
                    {work.description}
                  </p>
                  <footer className="flex-1 px-4 md:px-10 py-2 flex items-center justify-center xl:py-4 text-[0.7rem] lg:text-[0.75rem] xl:text-[0.8rem] opacity-[75%] my-4">
                    {work.technologies}
                  </footer>
                </li>
              );
            })}
          </ul>
        </Fade>
      </article>
    </section>
  );
};

export default Work;
