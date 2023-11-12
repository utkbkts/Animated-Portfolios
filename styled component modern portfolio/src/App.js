import React from "react";
import GlobalSTyle from "./Globalstyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Theme";
import { Route, Routes, useLocation } from "react-router-dom";

//!components
import Main from "./components/Main";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import AboutPage from "./components/AboutPage";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subcomponents/soundbar";

const App = () => {
  const location = useLocation()
  return (
    <div>
      <GlobalSTyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar/>
        <AnimatePresence> 
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/work" element={<WorkPage/>}/>
          <Route path="/skills" element={<MySkillsPage/>}/>
        </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
};

export default App;
