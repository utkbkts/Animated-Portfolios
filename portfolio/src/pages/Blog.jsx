import React, { useContext, useRef } from 'react'
import fitness3 from "../assets/fitness3.jpg"
import fitness2 from "../assets/fitness2.jpg"
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { CursorContext } from '../context/CustomCursor'
const variants = {
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
};
const Blog = () => {
  const {  mouseEnterHandler, mouseLeaveHandler } =
  useContext(CursorContext);

  return (
    <div className='container mx-auto mt-[10%] mb-12' id="blogSection">
       <h1 className="border-b border-b-gray-500 pb-4 font-primary text-3xl ">
        Blog's
      </h1>
      <motion.div viewport={{once:true}} variants={variants}
      initial="initial"
      whileInView={"animate"}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
         className='flex lg:flex-row flex-col items-center gap-4 mt-12'>
        <div className='flex-1 flex flex-col gap-4'>
            <h1 className='text-white text-2xl font-bold uppercase'>Work out at home for free</h1>
            <p className='text-gray-400 italic'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident id pariatur, placeat repellat voluptatibus neque quos repudiandae atque quia doloremque, ducimus obcaecati minus nulla eos perferendis voluptas, eaque aperiam!"</p>
            <span className='flex items-center gap-4 cursor-pointer hover:text-gray-700 transition-all duration-300'><FaArrowAltCircleRight/>See More</span>
        </div>
        <div className='flex-1 w-full'>
            <img src={fitness2} alt="" className='w-full h-[40vh] object-cover' />
        </div>
      </motion.div>

      <motion.div viewport={{once:true}} variants={variants}
      initial="initial"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      whileInView={"animate"} className='flex border-t border-t-white pt-4 md:pt-0 md:border-none lg:flex-row flex-col items-center gap-4 mt-24'>
      <div className='flex-1 w-full'>
            <img src={fitness3} alt="" className='w-full h-[40vh] object-cover' />
        </div>
        <div className='flex-1 flex flex-col gap-4'>
            <h1 className='text-white font-bold text-2xl uppercase'>Get More with  low-coast training  programs and advanced  features</h1>
            <p className='text-gray-400 italic'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident id pariatur, placeat repellat voluptatibus neque quos repudiandae atque quia doloremque, ducimus obcaecati minus nulla eos perferendis voluptas, eaque aperiam!"</p>
            <span className='flex items-center gap-4 cursor-pointer hover:text-gray-700 transition-all duration-300'><FaArrowAltCircleRight/>See More</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Blog
