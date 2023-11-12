import React, { useState } from "react";
import "./cursor.scss";
import { useEffect } from "react";
import { motion } from "framer-motion";
const Cursor = () => {
  const [postition, setpostition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setpostition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return <motion.div className="cursor" animate={{x:postition.x+10,y:postition.y+10}}></motion.div>;
};

export default Cursor;
