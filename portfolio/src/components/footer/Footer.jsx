import React from "react";
import img from "../../assets/fitness1.jpg";
import { FaAnglesRight, FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="mt-44 w-full h-full relative">
      <div className="w-full">
        <img
          src={img}
          alt="image"
          className="opacity-10 absolute h-[50vh] w-full object-cover"
        />
      </div>
      <div className="grid gap-4 place-items-center lg:grid-cols-4 md:grid-cols-3 pt-24">
        <div className="flex items-center flex-col">
          <h1 className="text-4xl">
            FİTNESS <span className="text-green-400 font-bold">-W</span>
          </h1>
        </div>
        <div className="flex flex-col md:items-start items-center justify-center gap-2">
          <h1>Useful Links</h1>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <FaAnglesRight />
              Home
            </li>
            <li className="flex items-center gap-2">
              <FaAnglesRight />
              About US
            </li>
            <li className="flex items-center gap-2">
              <FaAnglesRight />
              Gallery
            </li>
            <li className="flex items-center gap-2">
              <FaAnglesRight />
              Contact
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:items-start items-center justify-center gap-2">
          <h1>FOLLOW US</h1>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <FaFacebookF />
              Facebook
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram />
              Instagram
            </li>
            <li className="flex items-center gap-2">
              <RiTwitterXFill /> X
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:items-start items-center justify-center gap-2">
          <h1>Address</h1>
          <span className="flex gap-2 md:w-full w-[200px]">
            <CiLocationOn size={50}/>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            odit aut maiores quos aspernatur architecto!
          </span>
          <span className="flex items-center gap-2">
            <BsFillTelephoneFill />
            +90 50045 45 454 12
          </span>
          <span className="flex items-center gap-2">
            <MdOutlineEmail />
            utkutoygunbektasoglu@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
