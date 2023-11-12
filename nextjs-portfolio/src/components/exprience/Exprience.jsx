import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import Lilicon from "../lilicon/Lilicon";
const Details = ({ position, compony, componyLink, time, address, work }) => {
    const ref = useRef(null)

  return (
    <li ref={ref}>
      <Lilicon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5,type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={componyLink}
            targe="_blank"
            className="text-primary capitalize"
          >
            @{compony}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time}|{address}
        </span>
        <p className="font-medium w-full whitespace-nowrap">{work}</p>
      </motion.div>
    </li>
  );
};

const Exprience = () => {
    const ref = useRef(null)
    const {scrollYProgress}=useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Exprience</h2>
      <div ref={ref} className="w-[75%] max-auto relative">
        <motion.div style={{scaleY:scrollYProgress}} className="absolute left-9 top-0 w-[4px] dark:bg-light h-full bg-dark origin-top"/>
            <ul className="w-full flex flex-col items-start justify-between ml-24 gap-12">
                <Details
                position={"Front-end Developer"}
                compony={"Google"}
                componyLink={"www.google.com"}
                time={"2022-Present"}
                address={"Giresun/Turkey"}
                work={"worked on a team responsible for developing new features for google's search engine"}
                />
                 <Details
                position={"Front-end Developer"}
                compony={"Google"}
                componyLink={"www.google.com"}
                time={"2022-Present"}
                address={"Giresun/Turkey"}
                work={"worked on a team responsible for developing new features for google's search engine"}
                />
                 <Details
                position={"Front-end Developer"}
                compony={"Google"}
                componyLink={"www.google.com"}
                time={"2022-Present"}
                address={"Giresun/Turkey"}
                work={"worked on a team responsible for developing new features for google's search engine"}
                />
            </ul>
      </div>
    </div>
  );
};

export default Exprience;
