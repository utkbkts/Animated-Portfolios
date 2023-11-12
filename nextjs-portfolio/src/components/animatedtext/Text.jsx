"use client"
import { motion } from 'framer-motion'
import React from 'react'

const quote = {
    initial:{
        opacity:0,

    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren:0.08,
        }
    }
}
const singleWorld = {
    initial:{
        opacity:0,
        y:50,

    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1,
        }
    }
}
const Text = ({Text}) => {
  return (
    <div className='w-full  mx-auto py-2 flex items-center justify-center text-center overflow-hidden'><motion.h1 variants={quote} initial="initial" animate="animate" className='font-Montser inline-block text-dark w-full font-bold capitalize text-6xl'>{Text.split(" ").map((word,index)=><motion.span variants={singleWorld}   className='inline-block dark:text-light' key={word + "-" + index}>{word}&nbsp;</motion.span>)}</motion.h1></div>
  )
}

export default Text