import React from "react";

const ExprienceCard = ({ details }) => {
  return (
    <div className="work-exprience-card">
      <h6>{details.title}</h6>
      <div className="work-duration">{details.date}</div>
      <ul>
        {details.responsibilities.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExprienceCard;
