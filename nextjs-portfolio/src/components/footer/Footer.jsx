import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg px-6">
      <div className="py-8 flex items-center justify-between dark:text-light">
        <span>{new Date().getFullYear()}&copy; All Rİghts Reserved.</span>
        <div>
          Build With & Web Developer
          <span className="text-primary text-2xl py-1"> &#9825;</span> by{" "}
          <Link
            href={"/asfas.com"}
            className="underline underline-offset-2"
            target="_blank"
          >
            Utku
          </Link>
        </div>
        <Link href={"/"} target="_blank">
          Say Hello
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
