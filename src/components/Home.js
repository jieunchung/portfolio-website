import React from "react";
import texture from "../assets/texture.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen sticky top-0 flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto w-10/12 2xl:w-[80%]">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight md:leading-tight lg:leading-tight text-center font-[Poppins] text-[#304E5B]">
          Frontend <br />
          Programming <br />
          Enthusiast.
        </h1>
      </div>
    </div>
  );
};

export default Home;
