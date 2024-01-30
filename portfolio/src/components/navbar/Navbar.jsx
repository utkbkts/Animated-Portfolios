import React, { useEffect, useState } from "react";
import { Link, Events, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const handleSetActive = (to) => {};

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowNavbar(scrollPosition < 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full h-[15vh]  px-[1rem]">
      <div className="flex items-center justify-between h-full container mx-auto">
        <div className="">
          <h1 className="text-white font-primary text-2xl ">
            Fitness <span className="!text-green-500 font-bold">-W</span>
          </h1>
        </div>
        {showNavbar ? (
          <div className={`navbar-wrapper`}>
            <ul className="flex items-center gap-4 font-secondary">
              <li className="link">
                {" "}
                <Link
                  to="Home"
                  spy={true}
                  activeClass="active"
                  onSetActive={handleSetActive}
                  smooth={true}
                  duration={500}
                  className="link"
                >
                  Home
                </Link>
              </li>
              <li className="link">
                {" "}
                <Link
                  to="Coaches"
                  spy={true}
                  activeClass="active"
                  onSetActive={handleSetActive}
                  smooth={true}
                  duration={500}
                  className="link"
                >
                  Coaches
                </Link>
              </li>
              <li className="link">
                <Link
                  spy={true}
                  activeClass="active"
                  onSetActive={handleSetActive}
                  to="blogSection"
                  smooth={true}
                  duration={500}
                  className="link"
                >
                  Blog's
                </Link>
              </li>
              <li className="link">
                <Link
                  spy={true}
                  activeClass="active"
                  onSetActive={handleSetActive}
                  to="Member"
                  smooth={true}
                  duration={500}
                  className="link"
                >
                  Membership
                </Link>
              </li>
              <li className="link">
                <Link
                  spy={true}
                  activeClass="active"
                  onSetActive={handleSetActive}
                  to="Contacts"
                  smooth={true}
                  duration={500}
                  className="link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="fixed bottom-0 rounded-full z-[999] bg-white right-[50%] mb-4  md:-translate-x-[50%] md:-translate-y-[50%]">
            <button
              onClick={() => setShowNavbar(true)}
              className="text-black px-4 py-2 "
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
