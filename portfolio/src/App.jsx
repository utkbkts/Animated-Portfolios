import React, { useContext } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Section from './pages/Section'
import Trainer from './pages/Trainer'
import Blog from './pages/Blog'
import Membership from './pages/Membership'
import Footer from './components/footer/Footer'
import { motion } from 'framer-motion'
import { CursorContext } from './context/CustomCursor'
import Contact from './pages/Contact'
const App = () => {
  const {cursorVariants,cursorBg}=useContext(CursorContext)
  return (
    <div className=''>
      <Navbar/>
      <Home/>
      <Section/>
      <Trainer/>
      <Blog/>
      <Membership/>
      <Contact/>
      <Footer/>
      {/* cursor */}
      <motion.div variants={cursorVariants} animate={cursorBg} className='w-[32px] h-[32px] bg-primary fixed top-0 pointer-events-none z-50 rounded-full'></motion.div>
    </div>
  )
}

export default App
