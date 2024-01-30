import React, { useContext } from "react";
import img2 from "../assets/img2.png";
import { motion } from "framer-motion";
import { CursorContext } from "../context/CustomCursor";
const Home = () => {
  const {  mouseEnterHandler, mouseLeaveHandler } =
    useContext(CursorContext);
  return (
    <div className="w-full h-full" id="Home">
      <div className="container flex  lg:flex-row flex-col mx-auto mt-8 relative lg:items-start items-center text-center">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="lg:w-1/2 w-full relative lg:right-[-42px] right-0 top-[4rem] flex flex-col items-center"
        >
          <h1 className="h1 font-secondary xl:text-[108px] md:text-[80px] text-[50px]">
            WORKOUT <br /> & WITH ME
          </h1>
          <p className="w-full lg:w-[450px]">
            "The greatest battles in life are the battles we fight within
            ourselves."
          </p>
          <button className="btn mt-4 md:mt-8 w-[50%]">Hire Me</button>
        </motion.div>
        <div className="lg:w-1/2 w-full mt-12 lg:mt-0">
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            src={img2}
            alt="image"
            className="object-cover h-[80vh] w-full shadows"
          />
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="absolute lg:block hidden top-[80%] right-[27rem]"
          >
            <button className="py-1 px-8 rounded-md bg-zinc-600 text-white flex flex-col">
              200+ <span className="text-gray-300 font-light">student</span>
            </button>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="absolute  lg:top-[40%] top-[60%] lg:right-[14rem] md:right-[15rem] right-4"
          >
            <button className="py-1 px-8 rounded-md bg-orange-600 text-white flex flex-col">
              500+ <span className="text-gray-300 font-light">Medals</span>
            </button>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2 }}
            className="absolute lg:block hidden top-[80%] right-[12rem]"
          >
            <button className="py-1 px-8 rounded-md bg-pink-600 text-white flex flex-col">
              4,95 <span className="text-gray-300 font-light">Vote</span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
