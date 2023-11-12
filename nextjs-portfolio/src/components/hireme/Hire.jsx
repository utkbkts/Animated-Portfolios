import Image from "next/image";
import Link from "next/link";
import React from "react";
const Hire = () => {
  return (
    <div className="fixed left-4 bottom-0 flex items-center justify-center overflow-hidden">
      <div className="w-36 h-auto flex items-center justify-center relative">
        <img
          src={"/assets/Front-End_Developer-transformed.png"}
          className="animate-spin-slow"
          alt=""
        />
        <Link
          href={"mailto:abc@gmail.com"}
          className="flex items-center justify-center absolute left-1/2 -translate-x-1/2 bg-dark text-light shadow-md border border-solid border-dark dark:bg-light dark:text-dark w-16 h-16 rounded-full hover:bg-light hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Hire;
