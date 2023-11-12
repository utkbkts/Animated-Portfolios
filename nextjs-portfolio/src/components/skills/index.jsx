import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer py-3 px-6 absolute dark:bg-light dark:text-dark"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }} //!sayfa her geldiğinde baştan gelmesini başlatır
      transition={{ duration: 1.5 }}
      viewport={{once:true}} //!sayfa her geldiğinde baştan gelmesini durdurur
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
     <div className="w-full flex h-screen relative items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
     <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark">Web</motion.div>

     <Skill name={"HTML"} x={"-22vw"} y={"-14vw"}/>
     <Skill name={"CSS"} x={"-5vw"} y={"20vw"}/>
     <Skill name={"FIREBASE"} x={"22vw"} y={"-20vw"}/>
     <Skill name={"JAVASCRIPT"} x={"-12vw"} y={"2vw"}/>
     <Skill name={"REACTJS"} x={"-34vw"} y={"2vw"}/>
     <Skill name={"NEXTJS"} x={"20vw"} y={"15vw"}/>
     <Skill name={"TAILWINDCSS"} x={"20vw"} y={"5vw"}/>
     <Skill name={"BOOTSTRAP"} x={"20vw"} y={"-5vw"}/>
     <Skill name={"MONGODB"} x={"0vw"} y={"-12vw"}/>
     <Skill name={"SASS&SCSS"} x={"0vw"} y={"-22vw"}/>
     <Skill name={"RESTAPI&JSON"} x={"30vw"} y={"-12vw"}/>
     <Skill name={"WEB DESIGN"} x={"-30vw"} y={"12vw"}/>
     </div>
    </>
  );
};

export default Skills;
