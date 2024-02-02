import React, { useRef } from "react";
import "./work.scss";
import { Work_Exprience } from "../../utils/data";
import ExprienceCard from "./expriencecard/ExprienceCard";
import Slider from "react-slick";
import { FaAngleDoubleRight } from "react-icons/fa";
import { motion } from "framer-motion";
const WorkExperience = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRight = () => {
    sliderRef.current.slickNext();
  };
  const sliderLeft = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className="exprience-container">
      <h6>Work Exprience</h6>
      <div className="exprience-content">
        <div className="icon">
          <motion.span
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {" "}
            <FaAngleDoubleRight className="icon-1" size={40} />
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1 }}
            whileInView={{ opacity: 1 }}
          >
            <FaAngleDoubleRight className="icon-1" size={40} />
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1.5 }}
            whileInView={{ opacity: 1 }}
          >
            <FaAngleDoubleRight className="icon-1" size={40} />
          </motion.span>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {Work_Exprience.map((item) => (
            <ExprienceCard key={item.id} details={item} />
          ))}
        </Slider>
        <div className="direction">
          <span onClick={sliderLeft} className="left-icon">
            &#10094;
          </span>
          <span onClick={sliderRight} className="right-icon">
            &#10095;
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
