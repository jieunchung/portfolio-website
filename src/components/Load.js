import React from "react";
import { ImSpinner8 } from "react-icons/im";

const Load = () => {
  return (
    <div className="bg-[#C1D4DE] w-full h-screen flex flex-col justify-center items-center fa-4x">
      <div className="animate-spin-slow text-[#304E5B]">
        <ImSpinner8 />
      </div>
      <h4 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-tight lg:leading-tight text-center font-[Poppins] text-[#304E5B] pt-10">
        Loading...
      </h4>
    </div>
  );
};

export default Load;
