import React, { useRef } from "react";
import "./services.scss";
import { motion,useInView } from "framer-motion";
const variants = {
    initial:{
        x:-500,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    }
}
const boxVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition:{
        duration:1,
        staggerChildren:0.1,
    }
  },
};
const Services = () => {
    const ref = useRef()
    const isInView = useInView(ref,{margin:"-100px"})
  return (
    <motion.div className="services" ref={ref} variants={variants} whileInView={isInView && "animate"} initial="initial" >
      <motion.div className="textContainer">
        <p>
          Lorem ipsum dolor sit, amet consectetur
          <br />
          adipisicing elit. Quae, dolore.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <motion.h1>
            <motion.b whileHover={{color:"orange"}}>Lorem,</motion.b> ipsum dolor.
          </motion.h1>
        </div>
        <div className="title">
          <h1>
            <b>Lorem,</b> ipsum dolor.
          </h1>
          <button>What We Do ?</button>
        </div>
      </motion.div>
      <motion.div className="ListContainer">
        <motion.div  variants={boxVariants} initial={{x:-500}}  whileHover={{background:"Lightgray",color:"black"}} className="box">
          <h2>Lorem.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            reprehenderit. Obcaecati harum ut quae ratione sequi maxime facere
            alias temporibus, modi at sapiente, nam nostrum culpa. Fugit modi
            officia, nihil facilis minus rerum fugiat quidem totam, vero
            distinctio, ratione cupiditate!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div  variants={boxVariants} initial={{x:-600}} whileHover={{background:"Lightgray",color:"black"}} className="box">
          <h2>Lorem.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            reprehenderit. Obcaecati harum ut quae ratione sequi maxime facere
            alias temporibus, modi at sapiente, nam nostrum culpa. Fugit modi
            officia, nihil facilis minus rerum fugiat quidem totam, vero
            distinctio, ratione cupiditate!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div  variants={boxVariants} initial={{x:-700}} whileHover={{background:"Lightgray",color:"black"}} className="box">
          <h2>Lorem.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            reprehenderit. Obcaecati harum ut quae ratione sequi maxime facere
            alias temporibus, modi at sapiente, nam nostrum culpa. Fugit modi
            officia, nihil facilis minus rerum fugiat quidem totam, vero
            distinctio, ratione cupiditate!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div  variants={boxVariants} initial={{x:-800}}  whileHover={{background:"Lightgray",color:"black"}} className="box">
          <h2>Lorem.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            reprehenderit. Obcaecati harum ut quae ratione sequi maxime facere
            alias temporibus, modi at sapiente, nam nostrum culpa. Fugit modi
            officia, nihil facilis minus rerum fugiat quidem totam, vero
            distinctio, ratione cupiditate!
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
