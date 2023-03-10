import React from "react";
// import tree from "../assets/tree1.jpg"

const Hero = () => {
  return (
    <>
      <div className="text-white flex" >
      {/* <img className="bg-black h-2/5 md:h-96 "  src={tree} alt="" /> */}
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
          <p className="text-[#00df9a] font-bold p-2 uppercase">
            Growing with data Analytics
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6" >Grow with data</h1>
          <div className="md:text-5xl sm:text-4xl text-xl" >Fast, Flexible financing for</div>

        </div>
      </div>
    </>
  );
};

export default Hero;
