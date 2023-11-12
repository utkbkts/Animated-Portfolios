import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme, lightTheme } from "./Theme";
import Logocomponent from "../subcomponents/Logocomponent";
import Social from "../subcomponents/Social";
import PowerButton from "../subcomponents/PwerButton";
import { Work } from "../data/Workdata";
import Card from "../subcomponents/Card";
import { motion } from "framer-motion";
const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 400vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left:calc(10rem + 15vw);
height: 40vh;
display: flex;
color: white;
`
const Rotate = styled.span`
display: block;
position: fixed;
right: 1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index: 2;
`
const container = {
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{
      staggerChildren:0.5,
      duration:0.5,
    }
  }
}

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null)

  useEffect(()=>{
    let element = ref.current;

    const rotate=() => {
      element.style.transform = ` translateX(${-window.pageYOffset}px)`
      yinyang.current.style.transform = `rotate(`+ -window.pageYOffset + `deg)`
    }
    window.addEventListener("scroll",rotate)

    return () => {
      window.removeEventListener("scroll",rotate)
    }
  },[])
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <Logocomponent theme="dark" />
        <Social theme="dark" />
        <PowerButton theme="dark" />
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {
            Work.map((w)=>(
            <Card key={w.id} data={w}/>
            ))
          }
        </Main>
        <Rotate ref={yinyang}><svg aria-hidden="true" width={80} height={80} fill={DarkTheme.text} focusable="false" data-prefix="fas" data-icon="yin-yang" class="svg-inline--fa fa-yin-yang fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill={DarkTheme.text} d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"></path></svg></Rotate>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
