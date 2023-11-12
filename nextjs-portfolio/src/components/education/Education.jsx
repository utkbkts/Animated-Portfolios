import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import Lilicon from "../lilicon/Lilicon";
const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li ref={ref}>
      <Lilicon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time}|{place}
        </span>
        <p className="font-medium w-full whitespace-nowrap">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] max-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-24 gap-12">
          <Details
            type={"Business administration"}
            time={"2019-2023"}
            place={"Anadolu Universty"}
            info={"Giresun/Turkey"}
          />
          <Details
            type={"Business administration"}
            time={"2019-2023"}
            place={"Anadolu Universty"}
            info={"Giresun/Turkey"}
          />
          <Details
            type={"Business administration"}
            time={"2019-2023"}
            place={"Anadolu Universty"}
            info={"Giresun/Turkey"}
          />
          <Details
            type={"Business administration"}
            time={"2019-2023"}
            place={"Anadolu Universty"}
            info={"Giresun/Turkey"}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
