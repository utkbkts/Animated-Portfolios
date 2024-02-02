import React from 'react'
import img from "../../assets/2150709932.jpg";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
const Home = () => {
  return (
    <div className="hero-container">
    <div className="hero-content">
      <h1>
      Design is about choosing how to fail.
      </h1>
      <p>
      Programmers are constantly overcomplicating things because they are thinking about the future. Forget about the future. Program for today.
      </p>
    </div>
    <div className="hero-img">
      <div className="tech-icon">
        <div className="icon">
          <img  src={img} alt="" className="img1"/>
          <img className="img1" src={img4} alt="" />
        </div>
       <div className="tech-wrapper">
       <div className="icon-wrap">
          <img src={img1} alt="" className="img2"/>
        </div>
        <div className="icon-wrap">
            <img src={img2} alt="" className="img3"/>
        </div>
        <div className="icon-wrap">
            <img src={img3} alt="" className="img4"/>
        </div>
       </div>
      </div>
    </div>
  </div>
  )
}

export default Home
