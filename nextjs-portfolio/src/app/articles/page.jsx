"use client";
import Text from "@/components/animatedtext/Text";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../../public/assets/typescript.jpg";
import { motion, useMotionValue } from "framer-motion";
import article from "../../../public/assets/article.jpg";
const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef(null);

  function handleMouse(event) {
    ref.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    ref.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      href="/"
      target="_blank"
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        initial={{ opacity: 0 }}
        style={{ x: x, y: y }}
        ref={ref}
        src={img}
        alt={title}
        className="w-96 z-10 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full pt-4 bg-light dark:bg-dark dark:border-light dark:text-light border border-solid border-dark rounded-2xl p-2 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"></div>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg p-2"
      >
        <FramerImage
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt="title"
          className="w-full h-auto rounded-3xl"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

const Aricle = ({ img, title, data, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-light dark:text-dark dark:border-light"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4">{data}</span>
    </motion.li>
  );
};

const Articles = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden p-2">
      <div className="mb-16 pt-16">
        <Text Text={"Words Can Change The World"} />
        <ul className="grid grid-cols-2 gap-16 p-2">
          <FeaturedArticle
            title={
              "Build a Custom Pagination Component In Reactjs from scratch"
            }
            summary={
              "Learn how to build a custom pagination component in ReactJs from scratch"
            }
            time={"9 min read"}
            link={"/"}
            img={img1}
          />
          <FeaturedArticle
            title={
              "Build a Custom Pagination Component In Reactjs from scratch"
            }
            summary={
              "Learn how to build a custom pagination component in ReactJs from scratch"
            }
            time={"9 min read"}
            link={"/"}
            img={img1}
          />
        </ul>
        <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light">
          All Articles
        </h2>
        <ul>
          <Aricle
            title={
              "Form Validation In Reactjs: Build a reusable custom hook for inputs and error handling"
            }
            img={article}
            data={"March 23,2023"}
            link={"/"}
          />
          <Aricle
            title={
              "Form Validation In Reactjs: Build a reusable custom hook for inputs and error handling"
            }
            img={article}
            data={"March 23,2023"}
            link={"/"}
          />
          <Aricle
            title={
              "Form Validation In Reactjs: Build a reusable custom hook for inputs and error handling"
            }
            img={article}
            data={"March 23,2023"}
            link={"/"}
          />
          <Aricle
            title={
              "Form Validation In Reactjs: Build a reusable custom hook for inputs and error handling"
            }
            img={article}
            data={"March 23,2023"}
            link={"/"}
          />
        </ul>
      </div>
    </main>
  );
};

export default Articles;
