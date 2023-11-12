"use client";
import Text from "@/components/animatedtext/Text";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/icon/Icon";
import img from "../../../public/assets/typescript.jpg";
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl mt-2 p-4 relative dark:bg-light">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"></div>
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg p-2"
      >
        <Image src={img} alt="title" className="w-full h-auto rounded-3xl" />
      </Link>
      <div className="w-1/2 felx flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark ">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark  dark:border-light dark:text-light">
        <div className="absolute dark:bg-light top-0 -right-3 -z-10 w-[102%] h-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark"></div>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg p-2"
      >
        <Image src={img} alt="title" className="w-full h-auto rounded-3xl" />
      </Link>
      <div className="w-full felx flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center w-full justify-between">
          <Link className="font-semibold underline" href={link} target="_blank">
            Visit
          </Link>
          <Link className="w-6" href={github} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <div className="pt-16">
        <Text Text={"Imagination Trumps Knowledge"} />
        <div className="grid grid-cols-12 gap-24 p-4">
          <div className="col-span-12">
            <FeaturedProject
              title={"Crypto Screener Application"}
              summary={"lorem"}
              link={"/"}
              img={img}
              type={"Featured Project"}
              github={"/"}
            />
          </div>
          <div className="col-span-6">
            {" "}
            <Project
              title={"Crypto Screener Application"}
              link={"/"}
              img={img}
              type={"Featured Project"}
              github={"/"}
            />
          </div>
          <div className="col-span-6"> <Project
              title={"Crypto Screener Application"}
              link={"/"}
              img={img}
              type={"Featured Project"}
              github={"/"}
            /></div>
          <div className="col-span-12"> <FeaturedProject
              title={"Crypto Screener Application"}
              summary={"lorem"}
              link={"/"}
              img={img}
              type={"Featured Project"}
              github={"/"}
            /></div>
          <div className="col-span-6"> <Project
              title={"Crypto Screener Application"}
              link={"/"}
              img={img}
              type={"Featured Project"}
              github={"/"}
            /></div>
          <div className="col-span-6"> <Project
              title={"Crypto Screener Application"}
              link={"/"}
              img={img}
              type={"Featured Project"}
              github={"/"}
            /></div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
