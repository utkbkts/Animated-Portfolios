import React, { createContext, useEffect, useState } from "react";

export const CursorContext = createContext();

const CustomProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });
  const [cursorBg,setCursorBG]=useState("default")
  useEffect(() => {
    const move = (e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "#0e1112",
    },
    text:{
      width:"150px",
      height:"150px",
      x:cursorPos.x - 72,
      y:cursorPos.y - 72,
      backgroundColor:"#fff",
      mixBlendMode:"difference"
    }
  };
  const mouseEnterHandler=()=>{
    setCursorBG("text");
  }
  const mouseLeaveHandler=()=>{
    setCursorBG("default");
  }
  return <CursorContext.Provider value={{cursorVariants,cursorBg,mouseEnterHandler,mouseLeaveHandler}}>{children}</CursorContext.Provider>;
};

export default CustomProvider;
