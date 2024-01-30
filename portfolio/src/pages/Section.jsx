import React from "react";
import img1 from "../assets/pngnike.png";
import img2 from "../assets/puma.png";
import img3 from "../assets/adidas.png";

const Section = () => {
  return (
    <div className="ml-12 mt-[3rem]">
      <span className="text-gray-400 font-bold tracking-wide">Featured In</span>
      <div className="flex items-center gap-4">
      <img src={img1} alt="" className="w-[40px]" />
      <img src={img2} alt="" className="w-[40px]" />
      <img src={img3} alt="" className="w-[40px]" />
      </div>
    </div>
  );
};

export default Section;
