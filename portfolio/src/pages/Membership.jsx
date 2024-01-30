import { motion } from "framer-motion";
import React, { useContext } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { CursorContext } from "../context/CustomCursor";

const Membership = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div className="container mx-auto mb-4" id="Member">
      <h1 className="border-b border-b-gray-500 pb-4 font-primary text-3xl">
        Membership
      </h1>
      <div className="flex lg:flex-row flex-col items-center gap-4 mt-12">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex-1 shadow-md shadow-blue-600 text-start border border-gray-300 rounded-md p-2 flex flex-col items-center gap-4"
        >
          <span className="text-center text-4xl font-secondary">
            Join For Free
          </span>
          <span className="text-gray-400 italic">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut,
            obcaecati?
          </span>
          <ul className="list-disc px-4">
            <li>Full-length workout videos</li>
            <li>Customizable calendar</li>
            <li>Healthy Recipes</li>
            <li>Health and Finess Articles</li>
            <li>Positive and supportive online community</li>
            <li>No Credit Card Needed</li>
          </ul>
          <div className="w-full px-4">
            <span className="flex items-center gap-4 cursor-pointer hover:text-gray-700 transition-all duration-300">
              <FaArrowRightLong />
              See More
            </span>
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex-1 shadow-md shadow-blue-600 text-start border border-gray-300 rounded-md p-2 flex flex-col items-center gap-4"
        >
          <span className="text-center text-4xl font-secondary">WO Plus</span>
          <span className="text-gray-400 italic">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut,
            obcaecati?
          </span>
          <ul className="list-disc px-4">
            <li>Full-length workout videos</li>
            <li>Customizable calendar</li>
            <li>Healthy Recipes</li>
            <li>Health and Finess Articles</li>
            <li>Positive and supportive online community</li>
            <li>No Credit Card Needed</li>
          </ul>
          <div className="w-full px-4">
            <span className="flex items-center gap-4 cursor-pointer hover:text-gray-700 transition-all duration-300">
              <FaArrowRightLong />
              See More
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Membership;
