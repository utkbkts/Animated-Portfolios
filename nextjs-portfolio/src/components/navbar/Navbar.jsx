"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FacebookIcon, GithubIcon, TwitterIcon } from "../icon/Icon";
import useThemeSwitch from "../hooks/useThemeSwitch";
import {BsFillSunFill} from "react-icons/bs"
import {MdDarkMode} from "react-icons/md"

const MotionLink = motion(Link);
const CustomLink = ({ href, title,  className = "" }) => {
  return (
    <Link
      href={href}
      className={`${className} relative group `}
    >
      {title}
      <span className={``}>&nbsp;</span>
    </Link>
  );
};

const Navbar = () => {
    const [mode,setmode]=useThemeSwitch()
  return (
    <motion.header className="font-Pop w-full px-24 py-8 font-medium flex justify-between items-center dark:text-light">
      <nav className="navbar">
        <CustomLink
          href={"/"}
          title="Home"
          className="mr-4"
        />
        <CustomLink
          href={"/about"}
          title="About"
          className="mr-4"
        />
        <CustomLink
          href={"/project"}
          title="Projects"
          className="mr-4"
        />
        <CustomLink
          href={"/articles"}
          title="Articles"
          className="mr-4"
        />
      </nav>

      <nav
        className="flex items-center gap-4 "
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.7 }}
          className="w-6 mr-3"
          href={"/"}
          target="_blank"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.7 }}
          className="w-6 mr-3"
          href={"/"}
          target="_blank"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.7 }}
          className="w-6 mr-3 rounded-full"
          href={"/"}
          target="_blank"
        >
          <FacebookIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <div className="flex items-center justify-center mt-2 border border-solid border-transparent dark:border-light rounded-full">
          <MotionLink
            whileHover={{
              backgroundColor: [
                "#121212",
                "rgba(131,58,100,1)",
                "rgba(253,29,29,1)",
                "rgba(252,176,69,1)",
                "rgba(131,58,180,1)",
                "#121212",
              ],
              transition: { duration: 1, repeat: Infinity },
            }}
            href={"/"}
            className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
          >
            UB
          </MotionLink>
        </div>
        <button onClick={()=>setmode(mode==="light"?"dark":"light")} className="ml-3 flex items-center justify-center rounded-full p-1">
          {mode === "dark"?<BsFillSunFill className="fill-light"/>:<MdDarkMode className="fill-dark"/>}
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;
