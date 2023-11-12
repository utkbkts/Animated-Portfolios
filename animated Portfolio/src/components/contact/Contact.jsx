import React, { useRef } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import Svg from "./Svg";
const variants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
    const ref = useRef()

    const isInView = useInView(ref,{margin:"-100px"})
  return (
    <motion.div
      variants={variants}
      className="contact"
      initial="initial"
      whileInView={"animate"}
      ref={ref}
    >
      <motion.div variants={variants} className="textContainer">
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Adress</h2>
          <span>hello street New York</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Phone</h2>
          <span>+90906565565</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div className="Svg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{duration:1,delay:3}}>
          <Svg variants={variants} isInView={isInView}/>
        </motion.div>
        <motion.form initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1,delay:4}} action="">
          <input type="text" name="" id="" required placeholder="Name" />
          <input type="email" name="" id="" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
