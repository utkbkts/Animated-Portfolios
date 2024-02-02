import "./navbar.scss";
import MobilNavbar from "./MobilNavbar";
import React, { useState } from "react";

const Navbar = () => {
  const [openMenu,setOpenMenu]=useState(false)
  const toggleMenu=()=>{
    setOpenMenu(!openMenu)
  }
  return (
    <div className="nav-component">
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img src="https://images.unsplash.com/photo-1682687220247-9f786e34d472?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D" alt="logo" className="logo" />
          <span>TİME TO PROGRAM</span>
        </div>
        <ul className="navbar-ul">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Work Experience</a>
          </li>
          <li>
            <a href="">Contact Me</a>
          </li>
          <button className="contact-btn" onClick={() => {}}>
            Hire Me
          </button>
        </ul>
        <div
        onClick={() => setOpenMenu(!openMenu)}
        className={`hamburger ${openMenu ? "Isactive" : ""}`}
      >
        <span></span>
      </div>
       <MobilNavbar openMenu={openMenu} toggleMenu={toggleMenu}/>
      </nav>
    </div>
  );
};

export default Navbar;
