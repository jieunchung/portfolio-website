import React from "react";
import grandCanyon from "../assets/grand-canyon.jpg";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full flex flex-col py-28 items-center relative z-10 xl:min-h-screen md:flex-row bg-white font-[Vollkorn] "
    >
      {/* container */}
      <div className="mx-auto w-10/12 2xl:w-[80%] h-full">
        <div className="flex flex-col md:flex-row h-full w-full">
          {/* item */}
          <div className="basis-1/2 ms:pb-5 md:pr-20 md:self-center mx-auto xl:pl-20">
            <h3 className="font-semibold text-2xl lg:text-4xl uppercase mb-2 VollkornSC">
              Contact
            </h3>
            <h2 className="font-bold text-3xl lg:text-5xl mb-6 VollkornSC ">
              keep in touch
            </h2>
            <p className="leading-relaxed mb-12 text-sm lg:text-[1rem]">
              I am currently looking for a new job opportunity. <br />
              Ask for my resume or come say hi! I'd love to hear from you.
            </p>
            {/* form */}
            <form
              method="POST"
              action="https://getform.io/f/09f402b1-3b82-483b-8ce1-fd8d27c2dd9b"
              className="flex flex-col max-w-[600px] w-full"
            >
              <label className="py-1 text-sm lg:text-lg">Name</label>
              <input
                className="border-2 p-1 border-[#FBFBFD] bg-[#FBFBFD]"
                type="text"
                name="name"
              />
              <label className="py-1 text-sm lg:text-lg">Email</label>
              <input
                className="p-2 border-1 border-[#FBFBFD] bg-[#FBFBFD]"
                type="email"
                name="email"
              />
              <label className="py-1 text-sm lg:text-lg">Message</label>
              <textarea
                className="border-2 p-1 border-[#FBFBFD] bg-[#FBFBFD]"
                name="message"
                rows="8"
              ></textarea>
              <button className="border-1 border-[#FBFBFD] bg-[#FBFBFD] hover:border-[#f4f4fc] hover:bg-[#f4f4fc] px-4 py-3 my-8 mx-auto flex items-center text-lg lg:text-xl">
                <RiSendPlaneFill className="hover:rotate-[45deg] duration-100 ease-in-out" />
              </button>
            </form>
          </div>
          {/* item */}
          <div className="basis-1/2 px-6 md:self-center ml-auto xl:pl-20">
            <img
              src={grandCanyon}
              alt="jieun sitting at a cliff edge at grand canyon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
