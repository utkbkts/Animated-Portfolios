import React, { useState } from 'react'
import "./sidebar.scss"
import Links from '../links/Links'
import Togglebutton from '../togglebutton/Togglebutton'
import { motion } from 'framer-motion'
const variants ={
  open:{
    clipPath:"circle(1200px at 50px 50px)",
    transition:{
      delay:0.5,
      type:"spring",
      stiffness:400,
      damping:40,
      duration:1,
    }
  },
  closed:{
    clipPath:"circle(30px at 50px 50px)",
    transition:{
      delay:0.5,
      type:"spring",
      stiffness:400,
      damping:40,
      duration:1,

    }
  }
}
const Sidebar = () => {
  const [open,setOpen]=useState(false)
  return (
    <motion.div className='sidebar' animate={open ?"open":"closed"}>
      <motion.div className="bg" variants={variants}>
        <Links/>
      </motion.div>
      <Togglebutton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar