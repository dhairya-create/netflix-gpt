import React from "react";
import playButton from './play.png'
const VIdeoTitle = ({ title, overview }) => {
  return <div className="pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
    <h1 className="text-6xl font-bold">{title}</h1>
    <p className="py-6 text-lg w-1/4">{overview}</p>
    <div className="">
        <button className="bg-white p-4 px-12 text-xl text-black  rounded-lg hover:bg-opacity-80">
        
        <img className="inline-block mx-1" src={playButton} alt="" />
        
         Play</button>
        <button className="mx-2 bg-gray-500 p-4 px-12 text-xl text-white bg-opacity-50 rounded-lg">More Info</button>
    </div>
  </div>;
};

export default VIdeoTitle;
