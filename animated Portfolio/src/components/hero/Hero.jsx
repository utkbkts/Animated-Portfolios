import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";
const textvariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
};
const SliderVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    opacity: 1,
    transition: {
      repeat:Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
 
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textvariants} initial="initial" animate="animate">
          <motion.h2 variants={textvariants}>Harvey Tyler</motion.h2>
          <motion.h1 variants={textvariants}>Web Developer and UI designer</motion.h1>
          <div className="buttons">
            <motion.button variants={textvariants}>See the Latest Works</motion.button>
            <motion.button variants={textvariants}>Contact</motion.button>
          </div>
          <motion.img variants={textvariants} animate="scrollButton" className="scroll" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div variants={SliderVariant} initial="initial" animate="animate" className="sliding">Writer Content Creator Influencer</motion.div>
      <div className="imagecontainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
