import "./navbar.scss";
const MobilNavbar = ({openMenu,toggleMenu}) => {
 
  return (
    <>
      <div className={`mobile-navbar ${openMenu ? "active":""}`} onClick={toggleMenu}>
        <div className="mobile-container">
          <div className="mobile-wrapper">
            <h1>Time To Program</h1>
          </div>
          <ul className="mobile-ul">
            <li>
                Home
            </li>
            <li>
                Skills
            </li>
            <li>
                Work Experience
            </li>
            <li>
                Contact Me
            </li>
            <button className="btn">
                Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobilNavbar;
