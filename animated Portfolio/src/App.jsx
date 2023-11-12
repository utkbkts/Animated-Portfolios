import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
const App = () => {
  return (
    <>
      <Cursor/>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services" style={{height:"100vh"}}>
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio" style={{height:"100vh"}}>
        <Parallax type="portfolio" />
      </section>
      <Portfolio/>
      <section id="Contact">
        <Contact/>
      </section>
    </>
  );
};

export default App;
