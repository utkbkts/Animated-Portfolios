"use client";
import Text from "@/components/animatedtext/Text";
import Education from "@/components/education/Education";
import Exprience from "@/components/exprience/Exprience";
import Skills from "@/components/skills";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef();

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (lates) => {
      if (ref.current && lates.toFixed(0) <= value) {
        ref.current.textContent = lates.toFixed(0);
      }
    });
  }, [value, springValue]);

  return <span ref={ref}></span>;
};

const variants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 1,
      delay: 0.5,
    },
  },
};

const About = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <Text Text={"Passion Fuels Purpose"} />
      <div className="grid w-full grid-cols-8 gap-16 pt-16 mx-auto max-w-[1200px]">
        <div className="col-span-3 flex flex-col items-start justify-start">
          <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
            Biography
          </h2>
          <p className="my-4 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eaque,
            odio, exercitationem praesentium officiis cumque possimus ea magni
            illum id vitae beatae amet laborum temporibus vel! Architecto facere
            veniam accusantium, obcaecati, optio inventore praesentium
            voluptatem id fugit impedit aperiam ab ratione? Saepe provident
            pariatur deserunt voluptate commodi possimus perferendis! Rerum.
          </p>

          <p className="my-4 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eaque,
            odio, exercitationem praesentium officiis cumque possimus ea magni
            illum id vitae beatae amet laborum temporibus vel! Architecto facere
            veniam accusantium, obcaecati, optio inventore praesentium
            voluptatem id fugit impedit aperiam ab ratione? Saepe provident
            pariatur deserunt voluptate commodi possimus perferendis! Rerum.
          </p>
          <p className="my-4 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eaque,
            odio, exercitationem praesentium officiis cumque possimus ea magni
            illum id vitae beatae amet laborum temporibus vel! Architecto facere
            veniam accusantium, obcaecati, optio inventore praesentium
            voluptatem id fugit impedit aperiam ab ratione? Saepe provident
            pariatur deserunt voluptate commodi possimus perferendis! Rerum.
          </p>
        </div>
        <div className="overflow-hidden col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
          <motion.img
            variants={variants}
            initial="initial"
            animate="animate"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
            className="w-full h-auto rounded-2xl"
            alt=""
          />
        </div>
        <div className="col-span-2 flex flex-col items-end justify-between ">
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold ">
              <AnimatedNumbers value={50} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 whitespace-nowrap dark:text-light">
              Lorem ipsum dolor sit amet.
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold ">
              <AnimatedNumbers value={100} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 whitespace-nowrap dark:text-light">
              Lorem ipsum dolor sit amet.
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold ">
              <AnimatedNumbers value={10} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 whitespace-nowrap dark:text-light">
              Lorem ipsum dolor sit amet.
            </h2>
          </div>
        </div>
      </div>
      <Skills />
      <Exprience />
      <Education />
    </main>
  );
};

export default About;
