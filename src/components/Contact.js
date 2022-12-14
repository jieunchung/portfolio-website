import React from "react";
import grandCanyon from "../assets/grand-canyon.jpg";
import { RiSendPlaneFill } from "react-icons/ri";
import { Fade } from "react-awesome-reveal";

const Contact = (props) => {
  return (
    <section
      name="contact"
      className={`w-full flex flex-col py-28 items-center relative z-10 xl:min-h-screen md:flex-row bg-white ${
        props.darkMode && "bg-[#2a2a2a]"
      } font-[Vollkorn]`}
    >
      {/* container */}
      <Fade triggerOnce={true}>
        <section className="mx-auto w-10/12 2xl:w-[80%] h-full">
          <div className="flex flex-col lg:flex-row h-full w-full">
            {/* item */}
            <article className="basis-1/2 lg:pr-20 md:self-center mx-auto xl:pl-20">
              <h3 className="font-semibold text-2xl md:text-xl lg:text-2xl 2xl:text-4xl uppercase mb-2 VollkornSC">
                Contact
              </h3>
              <h2 className="font-bold text-3xl md:text-2xl lg:text-3xl 2xl:text-5xl mb-6 VollkornSC ">
                keep in touch
              </h2>
              <p className="leading-relaxed mb-12 text-sm 2xl:text-[1rem]">
                I am currently looking for a new job opportunity. Ask for my
                resume or come say hi! I'd love to hear from you.
              </p>
              {/* form */}
              <form
                method="POST"
                action="https://getform.io/f/09f402b1-3b82-483b-8ce1-fd8d27c2dd9b"
                className="flex flex-col w-full text-sm 2xl:text-[1rem]"
              >
                <label className="py-1">Name</label>
                <input
                  className={`border-2 p-1 focus:outline-none border-[#FBFBFD] bg-[#FBFBFD] ${
                    props.darkMode && "border-[#494848] bg-[#494848]"
                  }`}
                  type="text"
                  name="name"
                />
                <label className="py-1">Email</label>
                <input
                  className={`border-2 p-1 focus:outline-none border-[#FBFBFD] bg-[#FBFBFD] ${
                    props.darkMode && "border-[#494848] bg-[#494848]"
                  }`}
                  type="email"
                  name="email"
                />
                <label className="py-1">Message</label>
                <textarea
                  className={`border-2 p-1 focus:outline-none border-[#FBFBFD] bg-[#FBFBFD] ${
                    props.darkMode && "border-[#494848] bg-[#494848]"
                  }`}
                  name="message"
                  rows="8"
                ></textarea>
                <button
                  className={`border-1 border-[#FBFBFD] bg-[#FBFBFD] hover:border-[#f4f4fc] hover:bg-[#f4f4fc] ${
                    props.darkMode &&
                    "bg-[#494848] border-[#494848] hover:border-[#222222] hover:bg-[#222222]"
                  } px-4 py-3 my-8 mx-auto flex items-center text-lg lg:text-xl`}
                >
                  <RiSendPlaneFill className="hover:rotate-[45deg] duration-100 ease-in-out" />
                </button>
              </form>
            </article>
            {/* item */}
            <article className="basis-1/2 md:px-6 md:self-center xl:pl-20">
              <img
                src={grandCanyon}
                alt="jieun sitting at a cliff edge at grand canyon"
              />
            </article>
          </div>
        </section>
      </Fade>
    </section>
  );
};

export default Contact;
