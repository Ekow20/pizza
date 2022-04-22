import React from "react";
import feature from "../images/featured2.jpg";
const Feature = () => {
  return (
    <div
      style={{
        background: `url(${feature})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        maxHeight: "500px",
      }}
      className=" h-screen "
    >
      <div
        className=" flex flex-col items-center
      bg-black bg-opacity-40 justify-center w-full h-full"
      >
        <h2 className="font-bold text-6xl ">Pizza of the Day</h2>
        <p className="text-2xl mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <button
          className="p-3 bg-red-600
        hover:bg-yellow-400 hover:text-black 
        transition-all hover:scale-105 duration-100 ease-out 
              mt-7 text-lg px-10  "
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Feature;
