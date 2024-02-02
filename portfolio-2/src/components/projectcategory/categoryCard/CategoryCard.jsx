import React from "react";

const CategoryCard = ({category,createdAt,date,title,image}) => {
  return (
    <div className="wrapper-category">
      <div className="image-wrapper">
        <img
          src={image}
          alt=""
        />
      </div>
      <div className="content-wrapper">
        <button>{category}</button>
        <span className="date">{date}</span>
        <p>
         {title.substring(0,100)}...
        </p>
        <span className="created">CreatedBy:{createdAt}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
